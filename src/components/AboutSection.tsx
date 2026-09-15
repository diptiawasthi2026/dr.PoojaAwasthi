import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon, SacredMandala } from './SacredMandala';
import { Heart, Compass, Sparkles, Feather, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { config, language, setLanguage, t, setIsBookingModalOpen } = useBrand();

  const corePillars = [
    {
      icon: Heart,
      title: t.about.pillar1Title,
      desc: t.about.pillar1Desc
    },
    {
      icon: Compass,
      title: t.about.pillar2Title,
      desc: t.about.pillar2Desc
    },
    {
      icon: Feather,
      title: t.about.pillar3Title,
      desc: t.about.pillar3Desc
    },
    {
      icon: Sparkles,
      title: t.about.pillar4Title,
      desc: t.about.pillar4Desc
    }
  ];

  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;

  return (
    <section id="about" className="py-24 bg-[#F5EFE6]/60 relative overflow-hidden border-y border-[#EAE3D9]">
      {/* Decorative subtle background mandala */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
        <SacredMandala size={600} strokeColor="#8C6D23" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <SpiritualLotusIcon size={14} color="#8C6D23" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.about.welcomeTitle}
          </h2>
          <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#786E64] mt-2">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Spiritual Visual Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Outer Golden Aura Ring */}
              <div className="absolute -inset-4 bg-linear-to-tr from-[#EAD8B1] via-[#D4AF37]/30 to-[#F4EFE6] rounded-3xl blur-md opacity-70" />
              
              <div className="relative bg-[#FAF8F5] rounded-2xl p-7 sm:p-8 border border-[#D4AF37]/40 shadow-lg text-center overflow-hidden">
                <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-[#EAD8B1] via-[#FAF8F5] to-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center p-4 mb-6 shadow-inner relative">
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-slow-spin opacity-40">
                    <SacredMandala size={120} strokeColor="#8C6D23" />
                  </div>
                  <SpiritualLotusIcon size={56} color="#8C6D23" />
                </div>

                <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26]">
                  {currentFounderName}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#8C6D23] mt-1">
                  {t.about.founderRole}
                </p>

                <div className="my-5 border-t border-[#EAE3D9] pt-4 text-xs text-[#6B5A4B] space-y-2 text-left font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#8C6D23] shrink-0" />
                    <span>{t.about.credential1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#8C6D23] shrink-0" />
                    <span>{t.about.credential2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#8C6D23] shrink-0" />
                    <span>{t.about.credential3}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#8C6D23] shrink-0" />
                    <span>{t.about.credential4}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#E8DFC9] text-xs text-[#564E46] italic">
                  {t.about.quoteBadge}
                </div>
              </div>
            </div>
          </div>

          {/* Exact Prompt Text & Biography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-7 sm:p-9 border border-[#E2D8CA] shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-[#F0EAE0]">
                <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D23]">
                  {language === 'hi' ? 'आधिकारिक परिचय (Official Biography)' : 'Official Biography'}
                </span>
                
                {/* Language Switcher in About box */}
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-[#786E64] hidden sm:inline">भाषा / Language:</span>
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      language === 'en' ? 'bg-[#8C6D23] text-white' : 'text-[#786E64] hover:text-[#2D2A26]'
                    }`}
                  >
                    English
                  </button>
                  <span className="text-[#C2B5A5]">|</span>
                  <button
                    type="button"
                    onClick={() => setLanguage('hi')}
                    className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      language === 'hi' ? 'bg-[#8C6D23] text-white' : 'text-[#786E64] hover:text-[#2D2A26]'
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              <div className="border-l-3 border-[#8C6D23] pl-5 space-y-4">
                <p className="font-serif-cormorant text-2xl sm:text-3xl text-[#3C2A1E] font-medium leading-relaxed">
                  {t.about.welcomeTitle}
                </p>

                <p className="text-base sm:text-lg text-[#4A423B] leading-relaxed font-normal">
                  {t.about.p1}
                </p>

                <p className="text-base sm:text-lg text-[#4A423B] leading-relaxed font-normal">
                  {t.about.p2}
                </p>

                <p className="text-base sm:text-lg text-[#4A423B] leading-relaxed font-normal">
                  {t.about.p3}
                </p>

                <p className="font-serif-cormorant text-xl sm:text-2xl text-[#8C6D23] italic font-semibold pt-2">
                  {t.about.p4}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D9] flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all flex items-center gap-2 shadow-xs"
                >
                  <span>{t.about.connectBtn}</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="#services"
                  className="px-5 py-3 rounded-full text-sm font-medium text-[#564E46] hover:text-[#8C6D23] hover:bg-[#FAF8F5] transition-colors border border-[#E2D8CA]"
                >
                  {t.about.servicesBtn}
                </a>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/75 border border-[#EAE3D9] hover:border-[#D4AF37]/60 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-md bg-[#EAD8B1]/40 text-[#8C6D23]">
                        <Icon size={15} />
                      </div>
                      <h4 className="font-cinzel text-sm font-bold text-[#2D2A26]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#6B5A4B] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
