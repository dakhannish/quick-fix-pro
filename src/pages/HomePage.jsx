import React from "react";
import { Navbar } from "../components/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import { TrustIndicators } from "../components/TrustIndicator.tsx";
import { StickyCTA } from "../components/StickyCTA.tsx";
import { UrgencyBanner } from "../components/UrgencyBanner.tsx";
import { TestimonialCarousel } from "../components/TestimonialCarousel.tsx";
import { ServicesSection } from "../components/ServiceSection.tsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={true} />
      <Hero />
      <UrgencyBanner />
      <TrustIndicators />
      <ServicesSection />
      <TestimonialCarousel />
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} QuickFix Pro. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">Professional Plumbing & Electrical Services</p>
        </div>
      </footer>
      <StickyCTA />
    </div>
  );
}
