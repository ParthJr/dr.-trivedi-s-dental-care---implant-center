import React, { useEffect, useRef } from "react";
import { CLINIC_DATA } from "../config/clinicData";

export type LegalModalType = "privacy" | "terms" | "concierge" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && type) {
        onClose();
      }
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Notice & Data Protection",
      subtitle: "Commitment to Patient Confidentiality",
      body: (
        <div className="space-y-4 text-sm text-[#434846] leading-relaxed">
          <p>
            At <strong>{CLINIC_DATA.name}</strong>, patient confidentiality and the protection of your personal health data are foundational clinical principles.
          </p>
          <h4 className="font-semibold text-[#0C1514] text-base pt-2">
            1. Information We Collect
          </h4>
          <p>
            When you request a consultation through our website, we collect only necessary contact details: your full name, telephone number, selected treatment of interest, preferred appointment schedule, and any voluntary clinical background you choose to provide.
          </p>
          <h4 className="font-semibold text-[#0C1514] text-base pt-2">
            2. Purpose of Use
          </h4>
          <p>
            Your information is used solely by our reception and clinical staff in Kudasan to coordinate your appointment, confirm dentist availability, and discuss your oral health needs. We never sell, rent, or distribute patient contact details to third parties or marketing brokers.
          </p>
          <h4 className="font-semibold text-[#0C1514] text-base pt-2">
            3. Data Retention & Safeguards
          </h4>
          <p>
            All submitted enquiries are held securely in compliance with applicable healthcare privacy and electronic communication standards. If you wish to update or delete your enquiry records, contact our clinic at {CLINIC_DATA.contact.phone}.
          </p>
        </div>
      ),
    },
    terms: {
      title: "Terms of Consultation & Clinical Notice",
      subtitle: "Service Framework & Appointment Guidance",
      body: (
        <div className="space-y-4 text-sm text-[#434846] leading-relaxed">
          <h4 className="font-semibold text-[#0C1514] text-base">
            1. Consultation Requests vs. Confirmed Bookings
          </h4>
          <p>
            Submitting a consultation request on this website signals your scheduling preference. It does not constitute a guaranteed clinical appointment until confirmed directly with you by Dr. Trivedi's reception staff via phone or official communication.
          </p>
          <h4 className="font-semibold text-[#0C1514] text-base pt-2">
            2. Clinical Suitability & Diagnosis
          </h4>
          <p>
            Information provided on this website regarding dental implants, crowns, cosmetic smile design, and other procedures is educational. Final treatment suitability, diagnostic viability, and individualized clinical plans are determined strictly after an in-person dental examination, radiographic evaluation, and health screening by Dr. Trivedi.
          </p>
          <h4 className="font-semibold text-[#0C1514] text-base pt-2">
            3. Rescheduling & Punctuality
          </h4>
          <p>
            Because dedicated time is reserved for diagnostic reviews, we kindly ask patients to notify the clinic at {CLINIC_DATA.contact.phone} at least 24 hours in advance if they need to reschedule their consultation.
          </p>
        </div>
      ),
    },
    concierge: {
      title: "Patient Concierge & Assistance",
      subtitle: "Direct Support for Prospective & Registered Patients",
      body: (
        <div className="space-y-4 text-sm text-[#434846] leading-relaxed">
          <p>
            Our clinic concierge team is ready to assist you with directions, parking questions at Radhe Arcade, pre-consultation guidance, and post-treatment queries.
          </p>
          <div className="p-4 bg-[#F6F3ED] rounded-sm border border-[#E8E3DA] space-y-2">
            <div>
              <span className="text-xs uppercase text-[#725B32] font-semibold block">
                Direct Clinic Line
              </span>
              <a
                href={CLINIC_DATA.contact.phoneTel}
                className="text-lg font-medium text-[#0C1514] hover:text-[#725B32]"
              >
                {CLINIC_DATA.contact.phone}
              </a>
            </div>
            <div>
              <span className="text-xs uppercase text-[#725B32] font-semibold block">
                Reception Location
              </span>
              <span className="text-sm text-[#0C1514]">
                {CLINIC_DATA.contact.address.line1},{" "}
                {CLINIC_DATA.contact.address.landmark}
              </span>
            </div>
          </div>
          <p>
            Operating Monday from 10:00 AM, and Tuesday through Saturday from 09:30 AM to 08:30 PM.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202A28]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FCF9F3] rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 z-10 border border-[#E8E3DA] overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8E3DA]">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#725B32] font-semibold block">
              {current.subtitle}
            </span>
            <h3
              id="legal-modal-title"
              className="font-serif text-2xl font-medium text-[#0C1514]"
            >
              {current.title}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            type="button"
            className="p-2 text-[#434846] hover:text-[#0C1514] hover:bg-[#E8E3DA] rounded-sm transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <div className="py-6 overflow-y-auto">{current.body}</div>

        <div className="pt-4 border-t border-[#E8E3DA] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-6 py-2.5 bg-[#202A28] text-[#FCF9F3] text-sm font-medium rounded-sm hover:bg-[#0C1514] transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
