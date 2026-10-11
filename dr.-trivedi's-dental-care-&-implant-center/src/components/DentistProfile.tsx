import React, { useState } from "react";
import { CLINIC_DATA } from "../config/clinicData";

export const DentistProfile: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full bg-[#FCF9F3] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mb-12">
          <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3 block">
            Clinical Leadership
          </span>
          <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight">
            Meet Your Dental Care Professional.
          </h2>
        </div>

        <div className="bg-[#FFFFFF] rounded-xl p-8 lg:p-14 shadow-xs border border-[#E8E3DA]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Container */}
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#E5E2DC] relative border border-[#E8E3DA]">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-[#E8E3DA] animate-pulse flex items-center justify-center text-[#747B78]">
                    <span className="material-symbols-outlined text-4xl">person</span>
                  </div>
                )}

                {imageError ? (
                  <div className="w-full h-full bg-[#202A28] p-6 flex flex-col justify-end text-[#FCF9F3]">
                    <span className="text-xs uppercase tracking-widest text-[#FEDEAA] mb-1 font-semibold">
                      Clinical Lead
                    </span>
                    <h3 className="font-serif text-2xl text-[#FCF9F3]">
                      {CLINIC_DATA.doctor.title}
                    </h3>
                    <p className="text-xs text-[#E8E3DA]/80">
                      {CLINIC_DATA.doctor.designation}
                    </p>
                  </div>
                ) : (
                  <img
                    src={CLINIC_DATA.images.doctorPortrait}
                    alt="Editorial portrait of Dr. Trivedi, Principal Dental Surgeon & Implantologist in Kudasan, Gandhinagar"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-top ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>
            </div>

            {/* Professional Credentials & Narrative */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="font-sans text-[11px] uppercase tracking-widest text-[#725B32] font-semibold mb-2">
                {CLINIC_DATA.doctor.leadRole}
              </div>

              <h3 className="font-serif text-[30px] sm:text-[34px] font-medium text-[#0C1514] mb-1">
                {CLINIC_DATA.doctor.title}
              </h3>

              <div className="font-sans text-sm sm:text-base font-medium text-[#434846] mb-6">
                {CLINIC_DATA.doctor.designation}
              </div>

              <p className="font-sans text-base sm:text-lg text-[#1C1C18] leading-relaxed mb-6 font-normal">
                {CLINIC_DATA.doctor.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#EBE8E2]">
                <div>
                  <span className="font-sans text-xs text-[#725B32] block uppercase tracking-wider font-semibold mb-1">
                    Clinical Focus
                  </span>
                  <span className="font-sans text-sm sm:text-base text-[#0C1514] font-medium">
                    {CLINIC_DATA.doctor.clinicalFocus}
                  </span>
                </div>
                <div>
                  <span className="font-sans text-xs text-[#725B32] block uppercase tracking-wider font-semibold mb-1">
                    Aesthetic Discipline
                  </span>
                  <span className="font-sans text-sm sm:text-base text-[#0C1514] font-medium">
                    {CLINIC_DATA.doctor.aestheticDiscipline}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-[#0C1514] text-xs sm:text-sm font-medium">
                  <span className="material-symbols-outlined text-[#725B32] text-[20px]">
                    verified
                  </span>
                  <span>{CLINIC_DATA.doctor.verificationBadge}</span>
                </div>

                <div className="flex items-center gap-2 text-[#0C1514] text-xs sm:text-sm font-medium">
                  <span className="material-symbols-outlined text-[#725B32] text-[20px]">
                    location_on
                  </span>
                  <span>{CLINIC_DATA.doctor.locationBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentistProfile;
