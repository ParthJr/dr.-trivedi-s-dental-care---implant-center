import React, { useState } from "react";
import { CLINIC_DATA } from "../config/clinicData";
import LegalModal, { LegalModalType } from "./LegalModal";

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  return (
    <>
      <footer className="w-full bg-[#202A28] text-[#FCF9F3] pt-16 pb-12 border-t border-[#E8E3DA]/10">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#E8E3DA]/15">
            {/* Column 1: Branding & Philosophy */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-[28px] text-[#FCF9F3] font-medium leading-none">
                  {CLINIC_DATA.shortName}
                </span>
                <span className="font-sans text-[11px] uppercase text-[#FEDEAA] font-semibold tracking-widest mt-1.5 leading-none">
                  {CLINIC_DATA.subtitle}
                </span>
              </div>

              <p className="font-sans text-sm text-[#747B78] max-w-md leading-relaxed">
                Bespoke restorative, implantology, and aesthetic dentistry in Gandhinagar. Designed with precision and tranquil care for long-lasting health and natural beauty.
              </p>

              <div className="flex items-start gap-2.5 text-[#EBE8E2]/80 text-xs sm:text-sm mt-2">
                <span className="material-symbols-outlined text-[#FEDEAA] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>
                  {CLINIC_DATA.contact.address.line1}, {CLINIC_DATA.contact.address.landmark}, Kudasan, Gandhinagar — 382419
                </span>
              </div>
            </div>

            {/* Column 2: Restorative Treatments Navigation */}
            <div className="lg:col-span-3 flex flex-col gap-2">
              <h4 className="font-sans text-xs uppercase tracking-wider text-[#FEDEAA] font-semibold mb-2">
                Restorative Treatments
              </h4>
              <ul className="flex flex-col gap-2.5 font-sans text-xs sm:text-sm text-[#747B78]">
                <li>
                  <button
                    onClick={() => onNavigateToSection("implants")}
                    type="button"
                    className="hover:text-[#FCF9F3] transition-colors text-left"
                  >
                    Immediate & Guided Fixed Implants
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToSection("implants")}
                    type="button"
                    className="hover:text-[#FCF9F3] transition-colors text-left"
                  >
                    Full Arch Restorations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToSection("treatments")}
                    type="button"
                    className="hover:text-[#FCF9F3] transition-colors text-left"
                  >
                    Crowns & Restorative Care
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToSection("smile-care")}
                    type="button"
                    className="hover:text-[#FCF9F3] transition-colors text-left"
                  >
                    Ceramic Veneers & Smile Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigateToSection("treatments")}
                    type="button"
                    className="hover:text-[#FCF9F3] transition-colors text-left"
                  >
                    Comprehensive Diagnostics & Check-ups
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Surgery Hours & Direct Assistance */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <h4 className="font-sans text-xs uppercase tracking-wider text-[#FEDEAA] font-semibold mb-2">
                Private Surgery Hours
              </h4>
              <div className="space-y-2 font-sans text-xs sm:text-sm text-[#747B78]">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Monday</span>
                  <span className="text-[#FCF9F3]">10:00 AM – 08:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Tuesday – Saturday</span>
                  <span className="text-[#FCF9F3]">09:30 AM – 08:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Sunday</span>
                  <span className="text-[#FEDEAA]">By Prior Clinical Appointment</span>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-sm bg-[#15140F] border border-[#725B32]/40">
                <div className="font-sans text-[10px] uppercase text-[#FEDEAA] tracking-widest font-semibold mb-1">
                  Direct Assistance
                </div>
                <a
                  href={CLINIC_DATA.contact.phoneTel}
                  className="font-serif text-xl sm:text-2xl text-[#FCF9F3] hover:text-[#FEDEAA] transition-colors flex items-center gap-2 font-medium"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#FEDEAA]">
                    call
                  </span>
                  <span>{CLINIC_DATA.contact.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#747B78]">
            <div>
              © 2025–2026 {CLINIC_DATA.name}. All rights reserved.
            </div>

            <div className="flex items-center gap-6 font-medium">
              <button
                onClick={() => setLegalModalType("privacy")}
                type="button"
                className="hover:text-[#FCF9F3] transition-colors"
              >
                Privacy Notice
              </button>
              <button
                onClick={() => setLegalModalType("terms")}
                type="button"
                className="hover:text-[#FCF9F3] transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setLegalModalType("concierge")}
                type="button"
                className="hover:text-[#FCF9F3] transition-colors"
              >
                Patient Concierge
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Accessible Legal / Policy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
};

export default Footer;
