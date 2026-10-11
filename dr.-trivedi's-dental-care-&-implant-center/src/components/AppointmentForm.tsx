import React, { useState, useEffect } from "react";
import { CLINIC_DATA } from "../config/clinicData";
import {
  ConsultationFormData,
  ValidationErrors,
  validateConsultationForm,
  submitConsultationRequest,
} from "../services/consultationService";

interface AppointmentFormProps {
  preselectedService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  preselectedService,
}) => {
  // Get minimum date (today) in YYYY-MM-DD
  const todayString = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    phone: "",
    service: preselectedService || "",
    preferredDate: "",
    preferredTime: "morning",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionReference, setSubmissionReference] = useState<string | null>(null);

  // Sync preselectedService if passed from outside
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field-specific error as user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    setServerError(null);
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateConsultationForm(formData);
    if (validationErrors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validationErrors[field as keyof ValidationErrors],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched
    setTouched({
      fullName: true,
      phone: true,
      service: true,
      preferredDate: true,
      preferredTime: true,
      consent: true,
    });

    const validationErrors = validateConsultationForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Scroll to first error field
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorKey);
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await submitConsultationRequest(formData);
      if (response.success) {
        setSubmitSuccess(true);
        setSubmissionReference(response.referenceId || null);
      } else {
        setServerError(response.message || "Unable to submit consultation request.");
      }
    } catch (err: any) {
      setServerError(
        err.message ||
          "Network connection failed. Please contact the clinic directly at 075670 46564."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "morning",
      message: "",
      consent: false,
    });
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
    setServerError(null);
    setSubmissionReference(null);
  };

  return (
    <section id="consultation-booking" className="w-full bg-[#FCF9F3] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3">
              Begin Your Care
            </span>
            <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight mb-6 leading-tight">
              Let's Discuss Your Dental Needs.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#434846] leading-relaxed mb-8">
              Request a consultation and share your preferred schedule. The clinic
              concierge will reach out to confirm clinical availability and outline initial
              steps.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#E8E3DA] font-sans text-sm sm:text-base text-[#1C1C18]">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#725B32] text-[22px] shrink-0 mt-0.5">
                  timer
                </span>
                <div>
                  <div className="font-medium text-[#0C1514]">
                    Dedicated Consultations
                  </div>
                  <div className="text-[#434846] text-xs sm:text-sm">
                    Ample time reserved for diagnostic evaluation and questions.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#725B32] text-[22px] shrink-0 mt-0.5">
                  phone_in_talk
                </span>
                <div>
                  <div className="font-medium text-[#0C1514]">Direct Clinic Line</div>
                  <a
                    href={CLINIC_DATA.contact.phoneTel}
                    className="text-[#725B32] hover:underline font-medium text-sm sm:text-base"
                  >
                    {CLINIC_DATA.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#725B32] text-[22px] shrink-0 mt-0.5">
                  pin_drop
                </span>
                <div>
                  <div className="font-medium text-[#0C1514]">Location</div>
                  <div className="text-[#434846] text-xs sm:text-sm">
                    {CLINIC_DATA.contact.address.line1},{" "}
                    {CLINIC_DATA.contact.address.landmark},{" "}
                    {CLINIC_DATA.contact.address.city}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 lg:p-12 rounded-xl shadow-md border border-[#E8E3DA]">
              {submitSuccess ? (
                /* Success State */
                <div
                  className="p-6 sm:p-8 rounded-sm bg-[#F6F3ED] border border-[#B69A6B]/40 text-[#1C1C18] space-y-4 animate-in fade-in zoom-in-95 duration-200"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8E3DA] flex items-center justify-center text-[#725B32]">
                      <span className="material-symbols-outlined text-[24px]">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#0C1514]">
                        Consultation Request Received
                      </h3>
                      {submissionReference && (
                        <div className="text-xs text-[#747B78] uppercase tracking-wider">
                          Reference ID: {submissionReference}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="font-sans text-base text-[#434846] leading-relaxed pt-2">
                    Your consultation request has been received. The clinic team will contact you to confirm availability.
                  </p>

                  <div className="p-4 bg-[#FFFFFF] rounded-sm border border-[#E8E3DA] text-xs sm:text-sm text-[#434846]">
                    <span className="font-semibold text-[#0C1514] block mb-1">
                      Next Step:
                    </span>
                    Our reception coordinator will verify Dr. Trivedi's surgery schedule for your preferred date and reach out via phone ({formData.phone}) to confirm your appointment time.
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href={CLINIC_DATA.contact.phoneTel}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#725B32] hover:underline"
                    >
                      <span className="material-symbols-outlined text-[18px]">call</span>
                      <span>Need immediate assistance? Call {CLINIC_DATA.contact.phone}</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      type="button"
                      className="px-5 py-2.5 bg-[#202A28] text-[#FCF9F3] text-xs font-semibold rounded-sm hover:bg-[#0C1514] transition-all"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Consultation Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {serverError && (
                    <div
                      className="p-4 rounded-sm bg-[#FFDAD6] border border-[#BA1A1A]/40 text-[#93000A] text-sm flex items-start gap-2.5"
                      role="alert"
                    >
                      <span className="material-symbols-outlined text-[20px] shrink-0 mt-0.5">
                        error
                      </span>
                      <div>
                        <span className="font-semibold block mb-0.5">Submission Error</span>
                        <span>{serverError}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                      >
                        Full Name <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="e.g. Ramesh Patel"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none ${
                          errors.fullName && touched.fullName
                            ? "border-[#BA1A1A] focus:border-[#BA1A1A]"
                            : "border-[#E5E2DC] focus:border-[#725B32]"
                        }`}
                      />
                      {errors.fullName && touched.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-[#BA1A1A]">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Mobile Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                      >
                        Mobile Number <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur("phone")}
                        placeholder="075670 XXXXX or 98250 XXXXX"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none ${
                          errors.phone && touched.phone
                            ? "border-[#BA1A1A] focus:border-[#BA1A1A]"
                            : "border-[#E5E2DC] focus:border-[#725B32]"
                        }`}
                      />
                      {errors.phone && touched.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-[#BA1A1A]">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Treatment of Interest */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                    >
                      Treatment of Interest <span className="text-[#BA1A1A]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={() => handleBlur("service")}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className={`w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none ${
                        errors.service && touched.service
                          ? "border-[#BA1A1A] focus:border-[#BA1A1A]"
                          : "border-[#E5E2DC] focus:border-[#725B32]"
                      }`}
                    >
                      <option value="">Select a treatment or examination focus</option>
                      <option value="implants">Dental Implants & Restorations</option>
                      <option value="crowns">Crowns & Restorative Dentistry</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="bonding">Dental Bonding</option>
                      <option value="checkup">Comprehensive Dental Check-up</option>
                      <option value="cosmetic">Cosmetic Dentistry Consultation</option>
                      <option value="other">Other / General Consultation</option>
                    </select>
                    {errors.service && touched.service && (
                      <p id="service-error" className="mt-1 text-xs text-[#BA1A1A]">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                      >
                        Preferred Date <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={todayString}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        onBlur={() => handleBlur("preferredDate")}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.preferredDate}
                        aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                        className={`w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none ${
                          errors.preferredDate && touched.preferredDate
                            ? "border-[#BA1A1A] focus:border-[#BA1A1A]"
                            : "border-[#E5E2DC] focus:border-[#725B32]"
                        }`}
                      />
                      {errors.preferredDate && touched.preferredDate && (
                        <p id="preferredDate-error" className="mt-1 text-xs text-[#BA1A1A]">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                      >
                        Preferred Time Slot <span className="text-[#BA1A1A]">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        onBlur={() => handleBlur("preferredTime")}
                        required
                        className="w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border border-[#E5E2DC] transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none focus:border-[#725B32]"
                      >
                        <option value="morning">Morning (10:00 AM – 01:00 PM)</option>
                        <option value="afternoon">Afternoon (01:00 PM – 05:00 PM)</option>
                        <option value="evening">Evening (05:00 PM – 08:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs uppercase tracking-wider text-[#0C1514] font-semibold mb-2"
                    >
                      Additional Notes / Dental Concerns (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any past treatments, current tooth sensitivity, or specific questions..."
                      className="w-full px-4 py-3 bg-[#FCF9F3] rounded-sm border border-[#E5E2DC] transition-colors text-[#0C1514] font-sans text-sm sm:text-base focus:outline-none focus:border-[#725B32]"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div>
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? "consent-error" : undefined}
                        className="mt-1 w-4 h-4 rounded-xs text-[#202A28] focus:ring-[#725B32] accent-[#202A28] cursor-pointer"
                      />
                      <label
                        htmlFor="consent"
                        className="font-sans text-xs sm:text-sm text-[#434846] leading-snug cursor-pointer select-none"
                      >
                        I consent to Dr. Trivedi's Dental Care team contacting me via phone or messaging regarding this consultation request. <span className="text-[#BA1A1A]">*</span>
                      </label>
                    </div>
                    {errors.consent && touched.consent && (
                      <p id="consent-error" className="mt-1 text-xs text-[#BA1A1A] pl-7">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#202A28] text-[#FCF9F3] text-sm font-semibold tracking-wide rounded-sm hover:bg-[#0C1514] border border-[#B69A6B]/50 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#FEDEAA] border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <span className="material-symbols-outlined text-[18px]">
                            send
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-sans text-xs text-[#747B78] text-center pt-1 leading-normal">
                    Appointments are subject to clinical schedule confirmation by our reception team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
