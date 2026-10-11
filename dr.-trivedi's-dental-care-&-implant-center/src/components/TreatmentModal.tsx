import React, { useEffect, useRef } from "react";
import { Treatment } from "../config/clinicData";

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentId: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && treatment) {
        onClose();
      }
    };
    if (treatment) {
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
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202A28]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FCF9F3] rounded-xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 border border-[#E8E3DA] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E8E3DA]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-sm bg-[#F6F3ED] flex items-center justify-center text-[#725B32] border border-[#E8E3DA]">
              <span className="material-symbols-outlined text-[26px]">
                {treatment.icon}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#725B32] font-semibold block">
                {treatment.category}
              </span>
              <h3
                id="treatment-title"
                className="font-serif text-2xl font-medium text-[#0C1514]"
              >
                {treatment.title}
              </h3>
            </div>
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

        {/* Content Body */}
        <div className="py-6 space-y-5">
          <p className="text-base text-[#434846] leading-relaxed">
            {treatment.description}
          </p>

          <div className="p-4 bg-[#F6F3ED] rounded-sm border border-[#E8E3DA]">
            <div className="text-xs uppercase tracking-wider text-[#725B32] font-semibold mb-1">
              Clinical Purpose
            </div>
            <p className="text-sm text-[#0C1514] font-medium">
              {treatment.clinicalFocus}
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-[#747B78] font-semibold mb-3">
              Treatment Protocol & Scope
            </div>
            <ul className="space-y-2.5">
              {treatment.detailedScope.map((scope, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-[#434846]">
                  <span className="material-symbols-outlined text-[#725B32] text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-5 border-t border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-[#434846] hover:text-[#0C1514] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onBookTreatment(treatment.id);
            }}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#202A28] text-[#FCF9F3] px-6 py-3 rounded-sm text-sm font-medium hover:bg-[#0C1514] border border-[#B69A6B]/50 shadow-sm transition-all"
          >
            <span>Inquire About This Service</span>
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentModal;
