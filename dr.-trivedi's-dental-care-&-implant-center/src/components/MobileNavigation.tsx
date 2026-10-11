import React, { useEffect, useRef } from "react";
import { CLINIC_DATA } from "../config/clinicData";

interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
  activeSection: string;
  navLinks: NavLinkItem[];
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onBookClick,
  activeSection,
  navLinks,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      // Focus close button on open
      setTimeout(() => firstFocusableRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#202A28]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="relative ml-auto w-full max-w-sm bg-[#FCF9F3] h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 overflow-y-auto border-l border-[#E8E3DA] animate-in slide-in-from-right duration-300"
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E3DA]">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium text-[#0C1514]">
                {CLINIC_DATA.shortName}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#725B32] font-semibold">
                {CLINIC_DATA.subtitle}
              </span>
            </div>
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              type="button"
              className="p-2 text-[#434846] hover:text-[#0C1514] hover:bg-[#E8E3DA]/60 rounded-sm transition-colors"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={onClose}
                  className={`py-3 px-3 text-base font-medium rounded-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#E8E3DA]/50 text-[#0C1514] font-semibold border-l-2 border-[#725B32]"
                      : "text-[#434846] hover:text-[#0C1514] hover:bg-[#F6F3ED]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#747B78]">
                    chevron_right
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Contact Info */}
        <div className="pt-6 border-t border-[#E8E3DA] space-y-4">
          <a
            href={CLINIC_DATA.contact.phoneTel}
            className="flex items-center gap-3 p-3.5 bg-[#F6F3ED] rounded-sm text-[#0C1514] hover:text-[#725B32] transition-colors border border-[#E8E3DA]"
          >
            <div className="w-9 h-9 rounded-full bg-[#E8E3DA] flex items-center justify-center text-[#725B32]">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div>
              <div className="text-xs text-[#747B78] uppercase font-medium tracking-wider">
                Direct Line
              </div>
              <div className="font-medium text-base">{CLINIC_DATA.contact.phone}</div>
            </div>
          </a>

          <button
            onClick={onBookClick}
            type="button"
            className="w-full py-4 bg-[#202A28] text-[#FCF9F3] text-sm font-medium tracking-wide rounded-sm hover:bg-[#0C1514] border border-[#B69A6B]/40 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Book a Consultation</span>
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          </button>

          <p className="text-center text-xs text-[#747B78] pt-1">
            Radhe Arcade, 1st Floor · Kudasan, Gandhinagar
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
