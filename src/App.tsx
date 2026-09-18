import React from 'react';
import { BrandProvider, useBrand } from './context/BrandContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { NumerologyCalculator } from './components/NumerologyCalculator';
import { TarotGuidance } from './components/TarotGuidance';
import { ChakraHealingSection } from './components/ChakraHealingSection';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BrandCustomizerModal } from './components/BrandCustomizerModal';
import { ConsultancyChargesPage } from './components/ConsultancyChargesPage';

function AppContent() {
  const { activePage, setActivePage } = useBrand();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] font-sans selection:bg-[#EAD8B1] selection:text-[#3C2A1E]">
      {/* Navigation Header */}
      <Navbar />

      <main id="main-content">
        {activePage === 'charges' ? (
          <ConsultancyChargesPage onBack={() => setActivePage('home')} />
        ) : (
          <>
            {/* Hero Section */}
            <Hero />

            {/* About Section with verbatim prompt biography */}
            <AboutSection />

            {/* 4 Core Services: Numerology | Tarot | Healing | Life Coaching */}
            <ServicesSection />

            {/* Interactive Vedic Numerology Calculator */}
            <NumerologyCalculator />

            {/* Daily Tarot Card Guidance Tool */}
            <TarotGuidance />

            {/* Subtle Energy & Chakra Healing */}
            <ChakraHealingSection />

            {/* Testimonials & FAQs */}
            <TestimonialsFAQ />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Booking Modal */}
      <BookingModal />

      {/* Brand Customizer Modal (for custom brand name / secondary moniker) */}
      <BrandCustomizerModal />
    </div>
  );
}

export default function App() {
  return (
    <BrandProvider>
      <AppContent />
    </BrandProvider>
  );
}
