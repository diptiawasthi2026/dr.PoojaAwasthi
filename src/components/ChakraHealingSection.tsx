import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { CHAKRAS_DATA } from '../data/spiritualData';
import { SpiritualLotusIcon } from './SacredMandala';
import { HeartHandshake, Volume2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export const ChakraHealingSection: React.FC = () => {
  const { language, t, setIsBookingModalOpen, setSelectedServiceForBooking } = useBrand();
  const [selectedChakraIndex, setSelectedChakraIndex] = useState(3); // Heart chakra by default

  const activeChakra = CHAKRAS_DATA[selectedChakraIndex] || CHAKRAS_DATA[3];

  const handleBookHealing = () => {
    setSelectedServiceForBooking('healing');
    setIsBookingModalOpen(true);
  };

  return (
    <section id="chakras" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/30 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <HeartHandshake size={14} className="text-[#8C6D23]" />
            <span>{t.chakras.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.chakras.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2">
            {t.chakras.subheading}
          </p>
        </div>

        {/* 7 Chakras Visual Energy Column / Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CHAKRAS_DATA.map((chakra, idx) => {
            const isSelected = selectedChakraIndex === idx;
            return (
              <button
                key={chakra.name}
                type="button"
                onClick={() => setSelectedChakraIndex(idx)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#2D2A26] text-[#FAF8F5] border-[#2D2A26] shadow-sm scale-105'
                    : 'bg-white text-[#564E46] border-[#E2D8CA] hover:border-[#8C6D23]'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: chakra.color }}
                />
                <span>{language === 'hi' ? chakra.name_hi : chakra.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Chakra Deep Profile Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-7 sm:p-9 border border-[#E2D8CA] shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#F0EAE0]">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xs font-cinzel font-bold text-xl"
                style={{ backgroundColor: activeChakra.color }}
              >
                <SpiritualLotusIcon size={28} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                  {language === 'hi' ? activeChakra.name_hi : activeChakra.name}
                </h3>
                <p className="font-serif-cormorant italic text-sm text-[#8C6D23] font-medium">
                  {activeChakra.sanskrit}
                </p>
              </div>
            </div>

            {/* Seed Bija Mantra badge */}
            <div className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#E0D7CB] flex items-center gap-2">
              <Volume2 size={16} className="text-[#8C6D23]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#786E64] block">
                  {t.chakras.seedMantraLabel}
                </span>
                <span className="text-sm font-bold text-[#2D2A26]">
                  {activeChakra.healingMantra}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-[#F0EAE0]">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#786E64] block mb-1">
                {t.chakras.locationLabel}
              </span>
              <p className="text-sm text-[#2D2A26] font-medium">
                {language === 'hi' ? activeChakra.location_hi : activeChakra.location}
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#786E64] block mb-1">
                {t.chakras.elementLabel}
              </span>
              <p className="text-sm text-[#2D2A26] font-medium">
                {language === 'hi' ? activeChakra.element_hi : activeChakra.element}
              </p>
            </div>
          </div>

          {/* Balanced vs Blocked State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DFC9]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-1.5">
                <Sparkles size={14} />
                <span>{t.chakras.balancedStateLabel}</span>
              </div>
              <p className="text-xs text-[#564E46] leading-relaxed">
                {language === 'hi' ? activeChakra.balancedState_hi : activeChakra.balancedState}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DFC9]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C62828] mb-1.5">
                <ShieldAlert size={14} />
                <span>{t.chakras.blockedSignsLabel}</span>
              </div>
              <p className="text-xs text-[#564E46] leading-relaxed">
                {language === 'hi' ? activeChakra.blockedSigns_hi : activeChakra.blockedSigns}
              </p>
            </div>
          </div>

          {/* Energy Healing Consultation CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B5A4B] text-center sm:text-left">
              {language === 'hi'
                ? 'यदि आप ऊर्जा में भारीपन या असंतुलन महसूस कर रहे हैं, तो पूजा जी के साथ चक्र शुद्धि सत्र बुक करें।'
                : 'Feeling chronically drained or emotionally blocked? Experience a full distance subtle body cleanse.'}
            </p>
            <button
              type="button"
              onClick={handleBookHealing}
              className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all flex items-center gap-2 shadow-2xs"
            >
              <span>{t.chakras.bookHealingCta}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
