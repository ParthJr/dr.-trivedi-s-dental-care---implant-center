/**
 * Dr. Trivedi's Dental Care & Implant Center
 * Main Application Component
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TreatmentGrid from "./components/TreatmentGrid";
import ImplantFeature from "./components/ImplantFeature";
import PatientExperience from "./components/PatientExperience";
import SmileCareSection from "./components/SmileCareSection";
import DentistProfile from "./components/DentistProfile";
import ReviewsSection from "./components/ReviewsSection";
import AppointmentForm from "./components/AppointmentForm";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [preselectedService, setPreselectedService] = useState<string>("");

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookConsultation = (serviceKey?: string) => {
    if (serviceKey) {
      setPreselectedService(serviceKey);
    }
    scrollToSection("consultation-booking");
  };

  // Section Observer for Active Navigation Highlighting
  useEffect(() => {
    const sections = [
      "hero",
      "approach",
      "treatments",
      "implants",
      "smile-care",
      "reputation",
      "consultation-booking",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FCF9F3] text-[#1C1C18] flex flex-col selection:bg-[#FEDEAA] selection:text-[#271900] overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Header
        onBookClick={() => handleBookConsultation()}
        activeSection={activeSection}
      />

      <main className="flex-1 w-full pt-20">
        {/* 2. Hero: "Confidence Begins With a Healthy Smile." */}
        <HeroSection
          onBookClick={() => handleBookConsultation()}
          onExploreTreatmentsClick={() => scrollToSection("treatments")}
        />

        {/* 3. Treatment Discovery Grid: "Thoughtful Care for Every Smile." */}
        <TreatmentGrid
          onSelectTreatment={(treatmentId) => handleBookConsultation(treatmentId)}
          onNavigateToImplants={() => scrollToSection("implants")}
        />

        {/* 4. Dental Implant Feature (Deep Charcoal Section) */}
        <ImplantFeature
          onEnquireImplants={() => handleBookConsultation("implants")}
        />

        {/* 5. The Patient Experience: "Care That Starts With Listening." */}
        <PatientExperience />

        {/* 6. Cosmetic and Smile Care: "Your Smile. Your Priorities." */}
        <SmileCareSection
          onDiscussSmileGoals={() => handleBookConsultation("cosmetic")}
        />

        {/* 7. Dentist Profile: "Meet Your Dental Care Professional." */}
        <DentistProfile />

        {/* 8. Google Review Summary: 4.9/5 from 95 reviews */}
        <ReviewsSection />

        {/* 9. Appointment Consultation Form */}
        <AppointmentForm preselectedService={preselectedService} />

        {/* 10. Location and Contact: "Visit Us in Kudasan." */}
        <LocationSection />
      </main>

      {/* 11. Footer */}
      <Footer onNavigateToSection={scrollToSection} />
    </div>
  );
}
