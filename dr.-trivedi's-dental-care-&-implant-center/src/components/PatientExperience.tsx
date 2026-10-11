import React from "react";
import { CLINIC_DATA } from "../config/clinicData";

export const PatientExperience: React.FC = () => {
  return (
    <section id="approach" className="w-full bg-[#FCF9F3] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3 block">
            Patient-First Philosophy
          </span>
          <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight mb-4">
            Care That Starts With Listening.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#434846] leading-relaxed">
            We believe high-quality dental care is built on clear communication, complete transparency, and genuine clinical empathy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CLINIC_DATA.patientPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 lg:p-10 bg-[#FFFFFF] rounded-xl shadow-xs hover:shadow-md transition-shadow border border-[#E8E3DA]"
            >
              <div className="w-12 h-12 rounded-full bg-[#F6F3ED] flex items-center justify-center text-[#725B32] mb-6 border border-[#E8E3DA]">
                <span className="material-symbols-outlined text-[24px]">
                  {pillar.icon}
                </span>
              </div>
              <h3 className="font-serif text-[22px] font-medium text-[#0C1514] mb-3">
                {pillar.number}. {pillar.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#434846] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperience;
