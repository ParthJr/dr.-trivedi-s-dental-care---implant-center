import React, { useState } from "react";
import { CLINIC_DATA } from "../config/clinicData";

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreTreatmentsClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookClick,
  onExploreTreatmentsClick,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative w-full bg-[#FCF9F3] overflow-hidden pt-6 pb-16 md:py-20 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#725B32]" aria-hidden="true" />
              <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold">
                Personalized Dental Care · Kudasan, Gandhinagar
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[42px] sm:text-[52px] lg:text-[56px] leading-[1.08] text-[#0C1514] tracking-tight mb-6">
              Confidence Begins With a{" "}
              <span className="italic font-normal text-[#725B32]">Healthy Smile.</span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-[#434846] max-w-xl mb-8 leading-relaxed font-normal">
              {CLINIC_DATA.heroSubhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onBookClick}
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium tracking-wide bg-[#202A28] text-[#FCF9F3] px-8 py-4 rounded-sm transition-all duration-300 hover:bg-[#0C1514] border border-[#B69A6B]/50 shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                Book a Consultation
              </button>

              <button
                onClick={onExploreTreatmentsClick}
                type="button"
                className="inline-flex items-center justify-center text-sm font-medium tracking-wide text-[#0C1514] bg-[#F6F3ED] px-7 py-4 rounded-sm transition-all duration-200 hover:bg-[#E8E3DA] border border-[#E8E3DA] active:scale-[0.98]"
              >
                <span>Explore Treatments</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">
                  arrow_downward
                </span>
              </button>
            </div>

            {/* Trust & Reputation Strip */}
            <div className="pt-6 border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex text-[#725B32] items-center"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[19px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="font-sans text-sm font-semibold text-[#0C1514]">
                  {CLINIC_DATA.reputation.rating}
                </span>
                <span className="text-[#737876] text-xs">·</span>
                <a
                  href="#reputation"
                  className="font-sans text-xs sm:text-sm text-[#434846] hover:text-[#725B32] underline underline-offset-4 decoration-[#E5E2DC] transition-colors"
                >
                  {CLINIC_DATA.reputation.reviewCount} Google reviews
                </a>
              </div>

              <div className="font-sans text-[11px] uppercase tracking-widest text-[#747B78] font-medium">
                Your Care · Your Confidence
              </div>
            </div>
          </div>

          {/* Right Architectural Photographic Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#F6F3ED] rounded-xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:max-w-none border border-[#E8E3DA]">
              {/* Fallback container if image loading */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-[#E8E3DA] animate-pulse flex items-center justify-center text-[#747B78]">
                  <span className="material-symbols-outlined text-4xl">medical_services</span>
                </div>
              )}

              {/* Styled Fallback container on error */}
              {imageError ? (
                <div className="w-full h-full bg-gradient-to-br from-[#202A28] to-[#0C1514] p-8 flex flex-col justify-between text-[#FCF9F3]">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] uppercase tracking-widest text-[#FEDEAA]">
                      Bespoke Clinical Suite
                    </span>
                    <span className="material-symbols-outlined text-[#FEDEAA]">verified</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl mb-2 text-[#FCF9F3]">
                      Dr. Trivedi's Dental Care
                    </h3>
                    <p className="text-sm text-[#E8E3DA]/80">
                      Guided restorative and implant dentistry in Kudasan, Gandhinagar.
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={CLINIC_DATA.images.heroSuite}
                  alt="Modern serene dental consultation suite at Dr. Trivedi's Dental Care with architectural ivory aesthetic and comfortable diagnostic equipment in Kudasan"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1514]/35 via-transparent to-transparent pointer-events-none" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#FCF9F3]/95 backdrop-blur-md rounded-lg shadow-sm border border-[#E8E3DA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F0EEE8] flex items-center justify-center text-[#725B32]">
                    <span className="material-symbols-outlined text-[20px]">
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="font-sans text-xs font-semibold text-[#0C1514]">
                      Bespoke Precision
                    </div>
                    <div className="font-sans text-xs text-[#434846]">
                      Guided restorative dentistry
                    </div>
                  </div>
                </div>
                <span className="font-sans text-[11px] text-[#725B32] uppercase tracking-widest font-semibold">
                  Kudasan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
