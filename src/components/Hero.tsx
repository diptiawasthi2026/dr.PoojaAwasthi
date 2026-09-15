import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SacredMandala, SpiritualLotusIcon } from './SacredMandala';
import { Sparkles, Compass, HeartHandshake, Flame, Calendar, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

export const Hero: React.FC = () => {
  const { config, language, t, setIsBookingModalOpen } = useBrand();

  const servicesPills = [
    {
      label: language === 'hi' ? 'वैदिक अंकशास्त्र' : 'Vedic Numerology',
      icon: Compass,
      href: '#numerology-tool'
    },
    {
      label: language === 'hi' ? 'टैरो कार्ड रीडिंग' : 'Tarot Reading',
      icon: Sparkles,
      href: '#tarot-tool'
    },
    {
      label: language === 'hi' ? 'ऊर्जा उपचार' : 'Energy Healing',
      icon: HeartHandshake,
      href: '#chakras'
    },
    {
      label: language === 'hi' ? 'सजग जीवन मार्गदर्शन' : 'Life Coaching',
      icon: Flame,
      href: '#services'
    }
  ];

  const currentBrandName = language === 'hi' && config.brandName_hi ? config.brandName_hi : config.brandName;
  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;
  const currentTagline = language === 'hi' && config.tagline_hi ? config.tagline_hi : config.tagline;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-linear-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5]"
    >
      {/* Background Sacred Geometric Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-35">
        <div className="animate-slow-spin">
          <SacredMandala size={680} strokeColor="#D4AF37" />
        </div>
      </div>

      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#EAD8B1]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Founder & Sacred Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/90 border border-[#D4AF37]/50 shadow-xs mb-6 backdrop-blur-xs">
          <SpiritualLotusIcon size={18} color="#8C6D23" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6D23]">
            {language === 'hi' ? `संस्थापक: ${currentFounderName}` : `Founder: ${currentFounderName}`}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span className="text-xs text-[#564E46] font-medium">
            {t.hero.badgeRole}
          </span>
        </div>

        {/* Brand Name & Secondary Brand Tag */}
        <div className="mb-4">
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#2D2A26] leading-tight">
            {currentBrandName}
          </h1>
          {config.secondaryBrandName && (
            <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C6D23] mt-2 font-medium">
              {config.secondaryBrandName}
            </p>
          )}
        </div>

        {/* Tagline */}
        <p className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl text-[#6B5A4B] italic font-light tracking-wide max-w-3xl mx-auto mb-4">
          &ldquo;{currentTagline}&rdquo;
        </p>

        {/* Subtitle with 4 modalities */}
        <p className="text-xs sm:text-sm text-[#786E64] font-medium max-w-2xl mx-auto mb-8">
          {t.hero.subtitle}
        </p>

        {/* Services Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto mb-10">
          {servicesPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <a
                key={pill.label}
                href={pill.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 hover:bg-white text-xs sm:text-sm font-medium text-[#4A423B] hover:text-[#8C6D23] border border-[#E2D8CA] hover:border-[#D4AF37] shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5"
              >
                <Icon size={15} className="text-[#8C6D23]" />
                <span>{pill.label}</span>
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            id="hero-book-btn"
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] via-[#A87B19] to-[#8C6D23] hover:from-[#785D1E] hover:to-[#936C15] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 group"
          >
            <Calendar size={17} />
            <span>{t.hero.bookCta}</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#numerology-tool"
            id="hero-calculator-link"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold text-[#4A423B] bg-white/90 hover:bg-white border border-[#D5CABB] hover:border-[#8C6D23] shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <Sun size={17} className="text-[#8C6D23]" />
            <span>{t.hero.calculateCta}</span>
          </a>
        </div>

        {/* Reassurance Metrics / Trust Anchors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#EAE3D9]/80 text-left">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-[#EFE8DE]">
            <div className="p-2 rounded-lg bg-[#EAD8B1]/40 text-[#8C6D23] shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3C2A1E]">
                {t.hero.confidentialTitle}
              </h4>
              <p className="text-xs text-[#786E64] mt-0.5">
                {t.hero.confidentialDesc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-[#EFE8DE]">
            <div className="p-2 rounded-lg bg-[#EAD8B1]/40 text-[#8C6D23] shrink-0">
              <Compass size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3C2A1E]">
                {t.hero.practicalTitle}
              </h4>
              <p className="text-xs text-[#786E64] mt-0.5">
                {t.hero.practicalDesc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-[#EFE8DE]">
            <div className="p-2 rounded-lg bg-[#EAD8B1]/40 text-[#8C6D23] shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3C2A1E]">
                {t.hero.virtualTitle}
              </h4>
              <p className="text-xs text-[#786E64] mt-0.5">
                {t.hero.virtualDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
