import React, { useState } from "react";
import { CLINIC_DATA } from "../config/clinicData";

export const LocationSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  return (
    <section id="contact" className="w-full bg-[#F6F3ED] py-20 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Address & Practical Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#725B32] font-semibold mb-3">
              Accessible Clinic
            </span>

            <h2 className="font-serif text-[36px] sm:text-[40px] text-[#0C1514] tracking-tight mb-6 leading-tight">
              Visit Us in Kudasan.
            </h2>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#1C1C18] mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8E3DA] flex items-center justify-center text-[#725B32] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">
                    location_on
                  </span>
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#0C1514] mb-1">
                    Clinic Address
                  </div>
                  <p className="text-[#434846] leading-relaxed">
                    {CLINIC_DATA.name}
                    <br />
                    {CLINIC_DATA.contact.address.line1},
                    <br />
                    {CLINIC_DATA.contact.address.landmark},
                    <br />
                    {CLINIC_DATA.contact.address.street}, {CLINIC_DATA.contact.address.city},{" "}
                    {CLINIC_DATA.contact.address.state} — {CLINIC_DATA.contact.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8E3DA] flex items-center justify-center text-[#725B32] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#0C1514] mb-1">
                    Direct Assistance
                  </div>
                  <a
                    href={CLINIC_DATA.contact.phoneTel}
                    className="font-serif text-2xl font-medium text-[#0C1514] hover:text-[#725B32] transition-colors block"
                  >
                    {CLINIC_DATA.contact.phone}
                  </a>
                  <span className="text-xs text-[#747B78]">
                    Tap to call our reception desk directly
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E8E3DA] flex items-center justify-center text-[#725B32] shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-[#0C1514] mb-1">
                    Operating Hours
                  </div>
                  <div className="text-[#434846] leading-relaxed text-sm">
                    <div>Monday opens at 10:00 AM – 08:30 PM</div>
                    <div>Tuesday to Saturday: 09:30 AM – 08:30 PM</div>
                    <div>Sunday: By prior clinical appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={CLINIC_DATA.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-semibold tracking-wide bg-[#0C1514] text-[#FCF9F3] px-6 py-3.5 rounded-sm hover:bg-[#202A28] border border-[#B69A6B]/50 transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Get Directions</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">
                  directions
                </span>
              </a>

              <a
                href={CLINIC_DATA.contact.phoneTel}
                className="inline-flex items-center justify-center text-sm font-medium tracking-wide bg-[#FFFFFF] text-[#0C1514] hover:bg-[#E8E3DA] px-6 py-3.5 rounded-sm transition-all shadow-xs border border-[#E8E3DA] active:scale-[0.98]"
              >
                <span>Call Clinic</span>
                <span className="material-symbols-outlined ml-2 text-[18px]">
                  call
                </span>
              </a>
            </div>
          </div>

          {/* Map Frame Container */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-3 rounded-xl shadow-md border border-[#E8E3DA]">
              <div className="w-full h-88 sm:h-96 rounded-lg relative overflow-hidden flex items-end p-5 sm:p-6 bg-[#E5E2DC]">
                {/* Fallback container */}
                {!mapLoaded && !mapError && (
                  <div className="absolute inset-0 bg-[#E8E3DA] animate-pulse flex items-center justify-center text-[#747B78]">
                    <span className="material-symbols-outlined text-4xl">map</span>
                  </div>
                )}

                {mapError ? (
                  <div className="absolute inset-0 bg-[#202A28] flex items-center justify-center p-6 text-center text-[#FCF9F3]">
                    <div>
                      <span className="material-symbols-outlined text-4xl text-[#FEDEAA] mb-2">
                        pin_drop
                      </span>
                      <h4 className="font-serif text-xl mb-1">Radhe Arcade · Kudasan</h4>
                      <p className="text-xs text-[#E8E3DA]/80">
                        First Floor, Above Vipul Dudhiya Sweets, Gandhinagar
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={CLINIC_DATA.images.mapBackground}
                    alt="Map location of Dr. Trivedi's Dental Care & Implant Center in Radhe Arcade Kudasan Gandhinagar"
                    referrerPolicy="no-referrer"
                    onLoad={() => setMapLoaded(true)}
                    onError={() => setMapError(true)}
                    className={`absolute inset-0 w-full h-full object-cover object-center ${
                      mapLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}

                <div className="absolute inset-0 bg-[#0C1514]/20 backdrop-brightness-95 pointer-events-none" />

                {/* Location Card Overlay */}
                <div className="relative z-10 bg-[#FCF9F3]/95 backdrop-blur-md p-5 rounded-lg shadow-lg max-w-sm border border-[#E8E3DA]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[#725B32] text-[20px]">
                      pin_drop
                    </span>
                    <span className="font-sans text-sm font-semibold text-[#0C1514]">
                      Radhe Arcade · First Floor
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#434846] mb-3 leading-relaxed">
                    Above Vipul Dudhiya Sweets, near SBI Kudasan Branch. Convenient parking available.
                  </p>
                  <a
                    href={CLINIC_DATA.contact.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-xs text-[#725B32] hover:text-[#0C1514] uppercase tracking-wider font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
