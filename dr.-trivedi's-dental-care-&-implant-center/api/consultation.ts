/**
 * Vercel Serverless Function: POST /api/consultation
 * Validates and records appointment consultation requests for Dr. Trivedi's Dental Care.
 */

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST to submit consultation requests.",
    });
  }

  try {
    const { fullName, phone, service, preferredDate, preferredTime, message, consent } =
      req.body || {};

    // 1. Validate mandatory fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Full name is required (minimum 2 characters).",
      });
    }

    if (!phone || typeof phone !== "string") {
      return res.status(400).json({
        success: false,
        message: "Valid mobile phone number is required.",
      });
    }

    // 2. Validate Indian phone format
    const cleanedPhone = phone.replace(/[\s\-\(\)]/g, "");
    const indianPhoneRegex = /^(?:(?:\+|00)?91[\s\-]?)?(?:0)?[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(cleanedPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid Indian mobile number.",
      });
    }

    if (!service) {
      return res.status(400).json({
        success: false,
        message: "Please specify a service or treatment of interest.",
      });
    }

    if (!preferredDate) {
      return res.status(400).json({
        success: false,
        message: "Preferred appointment date is required.",
      });
    }

    const requestedDate = new Date(preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (requestedDate < today) {
      return res.status(400).json({
        success: false,
        message: "Appointment date cannot be in the past.",
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        message: "Privacy consent is required to process consultation requests.",
      });
    }

    const referenceId = `TRV-${Date.now().toString().slice(-6)}`;

    // Optional webhook integration: if process.env.ENQUIRY_WEBHOOK_URL is configured, dispatch notification
    if (process.env.ENQUIRY_WEBHOOK_URL) {
      try {
        await fetch(process.env.ENQUIRY_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            referenceId,
            fullName,
            phone: cleanedPhone,
            service,
            preferredDate,
            preferredTime,
            message: message || "None provided",
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return res.status(200).json({
      success: true,
      referenceId,
      message:
        "Your consultation request has been received. The clinic team will contact you to confirm availability.",
    });
  } catch (error: any) {
    console.error("Consultation submission error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please call the clinic directly at 075670 46564.",
    });
  }
}
