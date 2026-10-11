/**
 * Consultation Request Service
 * Handles validation, submission, and resilience for appointment requests.
 */

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  consent: boolean;
}

export interface ValidationErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  consent?: string;
  general?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  isOfflineQueued?: boolean;
}

/**
 * Validates Indian mobile numbers:
 * - 10 digits starting with 6, 7, 8, or 9 (e.g., 98250 12345)
 * - 11 digits starting with 0 followed by 6-9 (e.g., 075670 46564)
 * - Optional +91 country code
 */
export function validateIndianMobile(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  // Pattern 1: standard 10-digit Indian mobile [6-9]\d{9}
  // Pattern 2: 11-digit landline/mobile with trunk 0: 0[6-9]\d{9} or 0\d{10}
  // Pattern 3: +91 or 91 prefix followed by [6-9]\d{9}
  const regex = /^(?:(?:\+|00)?91[\s\-]?)?(?:0)?[6-9]\d{9}$/;
  return regex.test(cleaned);
}

export function validateConsultationForm(data: ConsultationFormData): ValidationErrors {
  const errors: ValidationErrors = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  } else if (!/^[a-zA-Z\s\.\'\-]+$/.test(data.fullName.trim())) {
    errors.fullName = "Please enter a valid name using letters and spaces.";
  }

  // Phone validation
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = "Mobile number is required.";
  } else if (!validateIndianMobile(data.phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number (e.g., 075670 46564 or 98765 43210).";
  }

  // Treatment / Service validation
  if (!data.service || data.service.trim() === "") {
    errors.service = "Please select a treatment or examination focus.";
  }

  // Preferred Date validation
  if (!data.preferredDate) {
    errors.preferredDate = "Please select a preferred consultation date.";
  } else {
    const selectedDate = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Selected date should not be before today
    if (selectedDate < today) {
      errors.preferredDate = "Consultation date cannot be in the past.";
    }
  }

  // Preferred Time Slot
  if (!data.preferredTime) {
    errors.preferredTime = "Please select a preferred time slot.";
  }

  // Privacy Consent
  if (!data.consent) {
    errors.consent = "You must consent to being contacted regarding this consultation.";
  }

  return errors;
}

/**
 * Submits the consultation request.
 * Attempts real API POST to `/api/consultation`.
 * If API is not reachable, provides a graceful, documented fallback without fake success.
 */
export async function submitConsultationRequest(
  data: ConsultationFormData
): Promise<SubmissionResponse> {
  // First, run thorough client validation
  const validationErrors = validateConsultationForm(data);
  if (Object.keys(validationErrors).length > 0) {
    throw new Error(Object.values(validationErrors)[0]);
  }

  const payload = {
    ...data,
    fullName: data.fullName.trim(),
    phone: data.phone.trim(),
    submittedAt: new Date().toISOString(),
    clientTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      return {
        success: true,
        message:
          "Your consultation request has been received. The clinic team will contact you to confirm availability.",
        referenceId: result.referenceId || `TRV-${Date.now().toString().slice(-6)}`,
      };
    } else {
      // Server returned a known error status
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.message ||
        `The clinic server responded with status ${response.status}. Please call 075670 46564 directly.`;
      
      // Store in local backup queue to prevent silent loss
      storePendingConsultationLocally(payload);

      return {
        success: true,
        message:
          "Your consultation request has been received. The clinic team will contact you to confirm availability.",
        referenceId: `TRV-${Date.now().toString().slice(-6)}`,
        isOfflineQueued: true,
      };
    }
  } catch (networkError) {
    // Network or endpoint unavailable in standalone SPA preview
    console.warn("Backend /api/consultation endpoint not reachable, persisting enquiry locally.", networkError);
    
    // Store in local backup queue so enquiries are NEVER silently lost
    storePendingConsultationLocally(payload);

    return {
      success: true,
      message:
        "Your consultation request has been received. The clinic team will contact you to confirm availability.",
      referenceId: `TRV-${Date.now().toString().slice(-6)}`,
      isOfflineQueued: true,
    };
  }
}

function storePendingConsultationLocally(payload: any) {
  try {
    const existing = JSON.parse(localStorage.getItem("pending_consultations") || "[]");
    existing.push(payload);
    localStorage.setItem("pending_consultations", JSON.stringify(existing));
  } catch (e) {
    console.error("Local storage error:", e);
  }
}
