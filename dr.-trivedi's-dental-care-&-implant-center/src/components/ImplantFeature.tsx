import React from "react";
import { CLINIC_DATA } from "../config/clinicData";

interface ImplantFeatureProps {
  onEnquireImplants: () => void;
}

export const ImplantFeature: React.FC<ImplantFeatureProps> = ({ onEnquireImplants }) => {
  return (
    <section
      id="implants"
      className="w-full bg-[#202A28] text-[#FCF9F3] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEDEAA]" aria-hidden="true" />
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#FEDEAA] font-semibold">
                Restorative Dentistry · Gandhinagar
              </span>
            </div>

            <h2 className="font-serif text-[34px] sm:text-[40px] text-[#FCF9F3] tracking-tight mb-6 leading-tight">
              Rebuilding Smiles With a{" "}
              <span className="italic font-normal text-[#FEDEAA]">Thoughtful Approach.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#EBE8E2]/80 mb-10 leading-relaxed max-w-xl">
              Considering dental implants? Learn about our step-by-step diagnostic workflow, cone-beam radiographic evaluation, and the exact clinical milestones for replacing missing teeth with durable bio-integrated solutions.
            </p>

            {/* 3 Clinical Steps */}
            <div className="space-y-4 sm:space-y-6 mb-10">
              {CLINIC_DATA.implantSteps.map((stepItem) => (
                <div
                  key={stepItem.step}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-lg bg-[#E5E2DC]/10 border border-white/5 transition-colors hover:bg-[#E5E2DC]/15"
                >
                  <span className="font-serif text-2xl font-medium text-[#FEDEAA] shrink-0 leading-none mt-0.5">
                    {stepItem.step}
                  </span>
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-semibold text-[#FCF9F3] mb-1">
                      {stepItem.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#EBE8E2]/70 leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <button
                onClick={onEnquireImplants}
                type="button"
                className="inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-[#FEDEAA] text-[#271900] px-8 py-4 rounded-sm hover:bg-[#FCF9F3] transition-all shadow-md active:scale-[0.98]"
              >
                Enquire About Dental Implants
              </button>

              <div className="flex items-center gap-2 text-[#EBE8E2]/70 text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[18px] text-[#FEDEAA]">
                  verified
                </span>
                <span>Guided surgery techniques available</span>
              </div>
            </div>
          </div>

          {/* Technical Diagram Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#2A2822]/90 rounded-xl p-6 sm:p-8 backdrop-blur-xs relative overflow-hidden border border-white/10 shadow-xl">
              <div className="font-sans text-[11px] uppercase tracking-widest text-[#FEDEAA] font-semibold mb-4">
                Restoration Anatomy
              </div>

              {/* Fine-line Vector Dental Implant Model */}
              <div className="w-full flex justify-center py-4 sm:py-6">
                <svg
                  className="w-44 sm:w-48 h-56 text-[#FEDEAA]/90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 240 280"
                  role="img"
                  aria-label="Technical schematic of a dental implant restoration with crown, abutment, and fixture"
                >
                  {/* Crown */}
                  <path
                    d="M70,80 C70,40 90,20 120,20 C150,20 170,40 170,80 C170,95 155,105 120,105 C85,105 70,95 70,80 Z"
                    fill="rgba(254,222,170,0.08)"
                  />
                  <line
                    stroke="rgba(254,222,170,0.4)"
                    strokeDasharray="2 2"
                    x1="120"
                    x2="120"
                    y1="20"
                    y2="105"
                  />

                  {/* Abutment */}
                  <path
                    d="M100,105 L140,105 L130,140 L110,140 Z"
                    fill="rgba(254,222,170,0.18)"
                  />

                  {/* Implant Screw / Fixture */}
                  <path
                    d="M105,140 L135,140 L130,240 L120,255 L110,240 Z"
                    fill="rgba(254,222,170,0.08)"
                  />
                  <line x1="106" x2="134" y1="155" y2="155" />
                  <line x1="108" x2="132" y1="170" y2="170" />
                  <line x1="110" x2="130" y1="185" y2="185" />
                  <line x1="112" x2="128" y1="200" y2="200" />
                  <line x1="114" x2="126" y1="215" y2="215" />
                  <line x1="116" x2="124" y1="230" y2="230" />

                  {/* Callout Lines */}
                  <line stroke="rgba(254,222,170,0.5)" x1="170" x2="210" y1="50" y2="50" />
                  <circle cx="210" cy="50" fill="currentColor" r="2.5" />
                  <line stroke="rgba(254,222,170,0.5)" x1="140" x2="210" y1="122" y2="122" />
                  <circle cx="210" cy="122" fill="currentColor" r="2.5" />
                  <line stroke="rgba(254,222,170,0.5)" x1="135" x2="210" y1="185" y2="185" />
                  <circle cx="210" cy="185" fill="currentColor" r="2.5" />
                </svg>
              </div>

              {/* Annotation Labels */}
              <div className="space-y-3 text-xs sm:text-sm text-[#EBE8E2]/85 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#FEDEAA] font-medium">Zirconia / Ceramic Crown</span>
                  <span className="text-[11px] text-[#EBE8E2]/60">Custom shade matched</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FEDEAA] font-medium">Titanium Abutment</span>
                  <span className="text-[11px] text-[#EBE8E2]/60">Precision torque locked</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#FEDEAA] font-medium">Biocompatible Implant Root</span>
                  <span className="text-[11px] text-[#EBE8E2]/60">Direct osseointegration</span>
                </div>
              </div>
            </div>

            {/* Mandatory Medical Disclaimer */}
            <div className="p-4 rounded-lg bg-[#E5E2DC]/5 border border-white/5 text-[#EBE8E2]/70 text-xs italic flex items-start gap-2.5">
              <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5 text-[#FEDEAA]">
                info
              </span>
              <span>
                Treatment suitability is assessed individually following clinical examination and radiographic evaluation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantFeature;
