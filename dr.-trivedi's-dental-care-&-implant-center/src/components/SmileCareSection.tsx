import React, { useState } from "react";
import { CLINIC_DATA } from "../config/clinicData";

interface SmileCareSectionProps {
  onDiscussSmileGoals: () => void;
}

export const SmileCareSection: React.FC<SmileCareSectionProps> = ({
  onDiscussSmileGoals,
}) => {
  const [expandedId, setExpandedId] = useState<string>("whitening-pathway");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="smile-care" className="w-full bg-[#F0EEE8] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Presentation Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#E5E2DC] shadow-lg relative border border-[#E8E3DA]">
              {/* Fallback container */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-[#E8E3DA] animate-pulse flex items-center justify-center text-[#747B78]">
                  <span className="material-symbols-outlined text-4xl">mood</span>
                </div>
              )}

              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-[#202A28] to-[#15140F] p-8 flex flex-col justify-end text-[#FCF9F3]">
                  <span className="text-xs uppercase tracking-widest text-[#FEDEAA] mb-2 font-semibold">
                    Harmonious Aesthetic
                  </span>
                  <h3 className="font-serif text-2xl text-[#FCF9F3]">
                    Preserving Natural Tooth Structure
                  </h3>
                </div>
              ) : (
                <img
                  src={CLINIC_DATA.images.smileCare}
                  alt="Harmonious natural smile aesthetic and conservative dental restoration at Dr. Trivedi's Dental Care"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1514]/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FCF9F3]/95 backdrop-blur-md rounded-lg border border-[#E8E3DA]">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[#725B32] block mb-1 font-semibold">
                  Harmonious Aesthetic
                </span>
                <span className="font-serif text-xl sm:text-[22px] text-[#0C1514] font-medium block">
                  Preserving Natural Tooth Structure
                </span>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
            <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3">
              Aesthetic Balance
            </span>
            <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight mb-6">
              Your Smile. <span className="italic font-normal text-[#725B32]">Your Priorities.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#434846] leading-relaxed mb-8">
              Every patient brings distinct facial anatomy, personal preferences, and clinical dynamics. We explore available procedures to construct a conservative, long-lasting plan tailored to your lifestyle.
            </p>

            {/* Interactive Pathways List */}
            <div className="space-y-4 mb-8">
              {CLINIC_DATA.smileCarePathways.map((item) => {
                const isSelected = expandedId === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setExpandedId(isSelected ? "" : item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedId(isSelected ? "" : item.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isSelected}
                    className={`p-4 bg-[#FFFFFF] rounded-sm border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-[#725B32] shadow-xs bg-[#FFFFFF]"
                        : "border-[#E8E3DA] hover:border-[#B69A6B]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-sans text-sm sm:text-[15px] text-[#0C1514] font-medium">
                          {item.title}
                        </div>
                        <div className="font-sans text-xs text-[#434846]">
                          {item.subtitle}
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[#725B32] text-[20px]">
                        {isSelected ? "check_circle" : "check"}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-[#E8E3DA]/80 text-xs sm:text-sm text-[#434846] leading-relaxed animate-in fade-in duration-200">
                        {item.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <button
                onClick={onDiscussSmileGoals}
                type="button"
                className="inline-flex items-center text-sm font-medium tracking-wide bg-[#202A28] text-[#FCF9F3] px-8 py-4 rounded-sm hover:bg-[#0C1514] border border-[#B69A6B]/50 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Discuss Your Smile Goals</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">
                  calendar_month
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileCareSection;
