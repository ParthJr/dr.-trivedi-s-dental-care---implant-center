import React, { useState, useEffect } from "react";
import { CLINIC_DATA } from "../config/clinicData";
import MobileNavigation from "./MobileNavigation";

interface HeaderProps {
  onBookClick: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Our Approach", href: "#approach", id: "approach" },
    { label: "Dental Treatments", href: "#treatments", id: "treatments" },
    { label: "Implants", href: "#implants", id: "implants" },
    { label: "Smile Care", href: "#smile-care", id: "smile-care" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#F7F4EE]/95 backdrop-blur-md border-b ${
          isScrolled
            ? "border-[#E8E3DA] shadow-[0_2px_12px_rgba(32,42,40,0.06)]"
            : "border-[#E8E3DA]"
        }`}
      >
        <div className="h-20 max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3.5 group transition-opacity hover:opacity-90 shrink-0"
            aria-label="Dr. Trivedi's Dental Care & Implant Center - Home"
          >
            <div className="w-10 h-10 rounded-sm bg-[#202A28] flex items-center justify-center text-[#FEDEAA] font-serif text-xl font-medium shadow-sm">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-22px font-medium text-[#0C1514] tracking-tight leading-none">
                {CLINIC_DATA.shortName}
              </span>
              <span className="font-sans text-[11px] uppercase text-[#725B32] font-semibold tracking-widest leading-none mt-1">
                {CLINIC_DATA.subtitle}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`py-2 transition-colors whitespace-nowrap font-sans text-14px tracking-wide ${
                    isActive
                      ? "text-[#0C1514] font-medium border-b-2 border-[#725B32]"
                      : "text-[#434846] hover:text-[#0C1514]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct Phone & Consultation Action */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {/* Direct Telephone */}
            <a
              href={CLINIC_DATA.contact.phoneTel}
              className="hidden md:flex items-center gap-2 text-sm font-medium text-[#0C1514] hover:text-[#725B32] transition-colors py-2 px-1"
              title="Call Dr. Trivedi's Dental Care directly"
            >
              <span className="material-symbols-outlined text-[#725B32] text-[18px]">
                call
              </span>
              <span className="tracking-wide">{CLINIC_DATA.contact.phone}</span>
            </a>

            {/* Primary Consultation Button */}
            <button
              onClick={onBookClick}
              type="button"
              className="hidden sm:inline-flex items-center justify-center text-sm font-medium tracking-wide bg-[#202A28] text-[#FCF9F3] px-6 py-3 rounded-sm border border-transparent hover:border-[#B69A6B] hover:bg-[#0C1514] transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              Book a Consultation
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 text-[#0C1514] hover:bg-[#E8E3DA]/60 rounded-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[26px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onBookClick={() => {
          setMobileMenuOpen(false);
          onBookClick();
        }}
        activeSection={activeSection}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
