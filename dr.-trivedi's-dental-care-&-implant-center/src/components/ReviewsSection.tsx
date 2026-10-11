import React from "react";
import { CLINIC_DATA } from "../config/clinicData";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reputation" className="w-full bg-[#F6F3ED] py-16 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Main Google Rating Banner */}
        <div className="bg-[#FFFFFF] rounded-xl p-8 lg:p-12 shadow-xs border border-[#E8E3DA] flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-[#FBDBA7]/40 flex items-center justify-center shrink-0 border border-[#FEDEAA]">
              <span className="material-symbols-outlined text-[#725B32] text-[36px]">
                rate_review
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-serif text-3xl sm:text-4xl text-[#0C1514] leading-none font-medium tabular-nums">
                  {CLINIC_DATA.reputation.rating}
                </span>
                <span className="font-serif text-2xl text-[#434846] leading-none">
                  / {CLINIC_DATA.reputation.maxRating.toFixed(1)}
                </span>
                <div
                  className="flex text-[#725B32] ml-2"
                  aria-label="Rated 4.9 out of 5 stars"
                >
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>

              <div className="font-sans text-sm sm:text-base text-[#434846]">
                Based on{" "}
                <span className="font-semibold text-[#0C1514]">
                  {CLINIC_DATA.reputation.reviewCount} verified Google reviews
                </span>{" "}
                from local patients in Kudasan and Gandhinagar.
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={CLINIC_DATA.contact.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm font-medium tracking-wide bg-[#F0EEE8] text-[#0C1514] hover:bg-[#202A28] hover:text-[#FCF9F3] px-6 py-3.5 rounded-sm transition-all shadow-xs border border-[#E8E3DA]"
            >
              <span>Read Patient Reviews</span>
              <span className="material-symbols-outlined ml-2 text-[18px]">
                open_in_new
              </span>
            </a>
          </div>
        </div>

        {/* Authentic Curated Review Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFFFF] p-6 sm:p-7 rounded-xl border border-[#E8E3DA] flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#725B32]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[17px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  {rev.treatmentTag && (
                    <span className="text-[11px] uppercase tracking-wider text-[#725B32] font-semibold">
                      {rev.treatmentTag}
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-[#434846] leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EBE8E2] flex items-center justify-between text-xs text-[#747B78]">
                <span className="font-semibold text-[#0C1514]">{rev.author}</span>
                <span>{rev.timeframe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
