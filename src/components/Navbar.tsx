import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon } from './SacredMandala';
import { Calendar, Menu, X, SlidersHorizontal, Globe } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const Navbar: React.FC = () => {
  const {
    config,
    language,
    setLanguage,
    toggleLanguage,
    t,
    setIsBrandModalOpen,
    setIsBookingModalOpen,
    activePage,
    setActivePage
  } = useBrand();
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
    { label: t.about.tabAwards, href: '#awards' },
    { label: t.nav.numerology, href: '#numerology-tool' },
    { label: t.nav.tarot, href: '#tarot-tool' },
    { label: t.nav.chakras, href: '#chakras' },
    { label: t.nav.testimonials, href: '#testimonials' }
  ];

  const handleNavClick = (href: string) => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setMobileMenuOpen(false);
  };

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
          <button
            type="button"
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="brand-logo-link"
            className="group flex items-center gap-3 text-left focus:outline-hidden cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#EAD8B1] to-[#FAF8F5] border border-[#D4AF37]/40 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <SpiritualLotusIcon size={24} color="#8C6D23" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#2D2A26] group-hover:text-[#8C6D23] transition-colors truncate max-w-[135px] xs:max-w-[200px] sm:max-w-none">
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
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (activePage !== 'home') {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                id={`nav-${link.href.replace('#', '')}`}
                className={`text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200 ${
                  activePage === 'home'
                    ? 'text-[#564E46] hover:text-[#8C6D23]'
                    : 'text-[#685D52] hover:text-[#8C6D23]'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Dedicated Consultancy Charges Page Link */}
            <button
              type="button"
              id="nav-consultancy-charges-btn"
              onClick={() => {
                setActivePage('charges');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all border flex items-center gap-1.5 shadow-2xs ${
                activePage === 'charges'
                  ? 'bg-[#8C6D23] text-white border-[#8C6D23] shadow-xs'
                  : 'bg-[#FAF4EA] text-[#8C6D23] hover:bg-[#8C6D23] hover:text-white border-[#D4AF37]/60'
              }`}
            >
              <span>{language === 'hi' ? 'परामर्श शुल्क' : 'Consultancy Charges'}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activePage === 'charges' ? 'bg-white/25 text-white' : 'bg-[#EAD8B1] text-[#785D1E]'
              }`}>
                ₹5,100
              </span>
            </button>
          </nav>

          {/* Actions: Multi-Language Selector, Brand Customizer & Consultation Booking */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Multi-Language Selector (10+ Indian & 6 International Languages) */}
            <LanguageSelector variant="navbar" />

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

          {/* Mobile & Tablet Action Row: Language Toggle, Brand Settings, and Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <LanguageSelector variant="navbar" />

            <button
              id="btn-mobile-customizer"
              type="button"
              onClick={() => setIsBrandModalOpen(true)}
              className="p-2 text-[#786E64] hover:text-[#8C6D23] hover:bg-[#EAD8B1]/30 rounded-lg shrink-0"
              aria-label="Brand Settings"
            >
              <SlidersHorizontal size={17} />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A423B] hover:text-[#8C6D23] hover:bg-[#EAD8B1]/30 rounded-lg focus:outline-hidden shrink-0"
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
          <div className="p-3 rounded-xl bg-[#F2ECE1] border border-[#E0D7CB] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A423B]">
                <Globe size={15} className="text-[#8C6D23]" />
                <span>Languages (16+ Supported):</span>
              </div>
              <LanguageSelector variant="navbar" />
            </div>
          </div>

          {config.secondaryBrandName && (
            <div className="px-3 py-1.5 rounded-md bg-[#EAD8B1]/30 text-xs text-[#8C6D23] font-medium border border-[#D4AF37]/30 inline-block">
              Brand: {config.secondaryBrandName}
            </div>
          )}

          <nav className="flex flex-col space-y-1.5 pt-1">
            {/* Dedicated mobile button for Consultancy Charges */}
            <button
              type="button"
              onClick={() => {
                setActivePage('charges');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold bg-[#FAF4EA] text-[#8C6D23] border border-[#D4AF37]/50 flex items-center justify-between shadow-2xs mb-1"
            >
              <span>{language === 'hi' ? 'परामर्श एवं हीलिंग शुल्क' : 'Consultancy & Healing Charges'}</span>
              <span className="text-xs bg-[#8C6D23] text-white px-2 py-0.5 rounded-full font-sans">₹5,100</span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
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
