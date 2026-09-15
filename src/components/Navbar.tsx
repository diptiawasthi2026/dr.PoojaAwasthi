import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon } from './SacredMandala';
import { Calendar, Menu, X, SlidersHorizontal, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { config, language, setLanguage, toggleLanguage, t, setIsBrandModalOpen, setIsBookingModalOpen } = useBrand();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.numerology, href: '#numerology-tool' },
    { label: t.nav.tarot, href: '#tarot-tool' },
    { label: t.nav.chakras, href: '#chakras' },
    { label: t.nav.testimonials, href: '#testimonials' }
  ];

  const currentBrandName = language === 'hi' && config.brandName_hi ? config.brandName_hi : config.brandName;
  const currentTagline = language === 'hi' && config.tagline_hi ? config.tagline_hi : config.tagline;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D9] py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="group flex items-center gap-3 text-left focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#EAD8B1] to-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <SpiritualLotusIcon size={24} color="#8C6D23" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#2D2A26] group-hover:text-[#8C6D23] transition-colors">
                  {currentBrandName}
                </span>
                {config.secondaryBrandName && (
                  <span className="hidden sm:inline-block px-2 py-0.5 text-xs tracking-wider rounded-full bg-[#EAD8B1]/40 text-[#8C6D23] font-medium border border-[#D4AF37]/30">
                    {config.secondaryBrandName}
                  </span>
                )}
              </div>
              <p className="hidden md:block text-[11px] uppercase tracking-widest text-[#786E64] font-medium">
                {currentTagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-${link.href.replace('#', '')}`}
                className="text-sm font-medium text-[#564E46] hover:text-[#8C6D23] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Switcher, Brand Customizer & Consultation Booking */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Bilingual Language Switcher (EN | हिन्दी) */}
            <div
              id="language-switcher"
              className="flex items-center p-0.5 rounded-full bg-[#EFE8DE] border border-[#E0D7CB] shadow-2xs text-xs font-semibold text-[#564E46]"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#8C6D23] text-white shadow-xs'
                    : 'text-[#6B5A4B] hover:text-[#2D2A26]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 rounded-full transition-all font-medium ${
                  language === 'hi'
                    ? 'bg-[#8C6D23] text-white shadow-xs'
                    : 'text-[#6B5A4B] hover:text-[#2D2A26]'
                }`}
                title="हिन्दी में देखें"
              >
                हिन्दी
              </button>
            </div>

            {/* Quick Brand Customizer button */}
            <button
              id="btn-brand-customizer"
              type="button"
              onClick={() => setIsBrandModalOpen(true)}
              className="px-2.5 py-2 text-xs font-medium text-[#786E64] hover:text-[#8C6D23] hover:bg-[#EAD8B1]/30 rounded-lg border border-[#E0D7CB] flex items-center gap-1.5 transition-all"
              title="Customize Brand Name or Moniker"
            >
              <SlidersHorizontal size={14} />
              <span className="hidden xl:inline">{t.nav.brandSettings}</span>
            </button>

            {/* Book Consultation CTA */}
            <button
              id="btn-nav-book-consultation"
              type="button"
              onClick={() => setIsBookingModalOpen(true)}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar size={14} />
              <span>{t.nav.bookConsultation}</span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full bg-[#EFE8DE] border border-[#D5CABB] text-xs font-bold text-[#8C6D23] flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe size={13} />
              <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            <button
              id="btn-mobile-customizer"
              type="button"
              onClick={() => setIsBrandModalOpen(true)}
              className="p-2 text-[#786E64] hover:text-[#8C6D23] hover:bg-[#EAD8B1]/30 rounded-lg"
              aria-label="Brand Settings"
            >
              <SlidersHorizontal size={17} />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A423B] hover:text-[#8C6D23] hover:bg-[#EAD8B1]/30 rounded-lg focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3D9] px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          {/* Mobile language switch bar */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-[#F2ECE1] border border-[#E0D7CB]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A423B]">
              <Globe size={15} className="text-[#8C6D23]" />
              <span>Language / भाषा:</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  language === 'en' ? 'bg-[#8C6D23] text-white' : 'bg-white/80 text-[#564E46]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  language === 'hi' ? 'bg-[#8C6D23] text-white' : 'bg-white/80 text-[#564E46]'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {config.secondaryBrandName && (
            <div className="px-3 py-1.5 rounded-md bg-[#EAD8B1]/30 text-xs text-[#8C6D23] font-medium border border-[#D4AF37]/30 inline-block">
              Brand: {config.secondaryBrandName}
            </div>
          )}

          <nav className="flex flex-col space-y-1.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#4A423B] hover:bg-[#EAD8B1]/30 hover:text-[#8C6D23] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#EAE3D9] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="w-full py-2.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar size={16} />
              <span>{t.nav.bookConsultation}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBrandModalOpen(true);
              }}
              className="w-full py-2 text-xs font-medium text-[#786E64] hover:text-[#8C6D23] text-center border border-[#E0D7CB] rounded-lg"
            >
              {t.nav.customBrandPrompt}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
