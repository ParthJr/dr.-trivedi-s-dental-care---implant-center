import React, { useState } from "react";
import { CLINIC_DATA, Treatment } from "../config/clinicData";
import TreatmentModal from "./TreatmentModal";

interface TreatmentGridProps {
  onSelectTreatment: (treatmentId: string) => void;
  onNavigateToImplants: () => void;
}

export const TreatmentGrid: React.FC<TreatmentGridProps> = ({
  onSelectTreatment,
  onNavigateToImplants,
}) => {
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const handleCardAction = (treatment: Treatment) => {
    if (treatment.id === "implants") {
      onNavigateToImplants();
    } else {
      setActiveModalTreatment(treatment);
    }
  };

  return (
    <section id="treatments" className="w-full bg-[#F6F3ED] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3 block">
            Restorative & Aesthetic Portfolio
          </span>
          <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight mb-4">
            Thoughtful Care for Every Smile.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#434846] leading-relaxed">
            Understand your options and explore the treatments that may be appropriate for
            your oral health requirements and aesthetic goals.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CLINIC_DATA.treatments.map((treatment) => {
            const isImplant = treatment.id === "implants";

            return (
              <div
                key={treatment.id}
                className="bg-[#FFFFFF] rounded-xl p-8 lg:p-10 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group border border-[#E8E3DA]"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#F6F3ED] flex items-center justify-center text-[#725B32] mb-6 group-hover:bg-[#202A28] group-hover:text-[#FCF9F3] transition-colors border border-[#E8E3DA]">
                    <span className="material-symbols-outlined text-[24px]">
                      {treatment.icon}
                    </span>
                  </div>

                  <div className="font-sans text-[11px] uppercase tracking-wider text-[#725B32] font-semibold mb-2">
                    {treatment.category}
                  </div>

                  <h3 className="font-serif text-[22px] font-medium text-[#0C1514] mb-3">
                    {treatment.title}
                  </h3>

                  <p className="font-sans text-sm sm:text-[15px] text-[#434846] leading-relaxed mb-6">
                    {treatment.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBE8E2]">
                  {isImplant ? (
                    <button
                      onClick={onNavigateToImplants}
                      type="button"
                      className="inline-flex items-center text-sm font-medium text-[#0C1514] hover:text-[#725B32] group-hover:translate-x-1 transition-all"
                    >
                      <span>Learn more about implants</span>
                      <span className="material-symbols-outlined ml-2 text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCardAction(treatment)}
                      type="button"
                      className="inline-flex items-center text-sm font-medium text-[#0C1514] hover:text-[#725B32] group-hover:translate-x-1 transition-all"
                    >
                      <span>
                        {treatment.id === "crowns" && "Explore restorative crowns"}
                        {treatment.id === "whitening" && "Inquire about whitening"}
                        {treatment.id === "bonding" && "Review bonding details"}
                        {treatment.id === "checkup" && "Schedule examination"}
                        {treatment.id === "cosmetic" && "Explore smile design"}
                      </span>
                      <span className="material-symbols-outlined ml-2 text-[18px]">
                        arrow_forward
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for viewing detailed clinical scope */}
      <TreatmentModal
        treatment={activeModalTreatment}
        onClose={() => setActiveModalTreatment(null)}
        onBookTreatment={(treatmentId) => {
          onSelectTreatment(treatmentId);
        }}
      />
    </section>
  );
};

export default TreatmentGrid;
