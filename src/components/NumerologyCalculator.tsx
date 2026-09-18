import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { getVedicAnalysis } from '../utils/numerologyCalc';
import { SpiritualLotusIcon } from './SacredMandala';
import { Sparkles, Calendar, User, ShieldCheck, Sun, Moon, ArrowRight, RotateCcw } from 'lucide-react';

export const NumerologyCalculator: React.FC = () => {
  const { language, t, setIsBookingModalOpen, setSelectedServiceForBooking } = useBrand();

  const [birthDate, setBirthDate] = useState('1992-06-15');
  const [fullName, setFullName] = useState('');
  const [analysis, setAnalysis] = useState(() => {
    // Default initial preview calculation
    return getVedicAnalysis(15, 6, 1992, 'Pooja');
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;

    const parts = birthDate.split('-');
    if (parts.length !== 3) return;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    const res = getVedicAnalysis(day, month, year, fullName.trim() || undefined);
    setAnalysis(res);
  };

  const handleBookWithAnalysis = () => {
    setSelectedServiceForBooking('numerology');
    setIsBookingModalOpen(true);
  };

  const { mulank, bhagyank, mulankData, bhagyankData, nameResult, dynamicHarmony, dynamicHarmony_hi } = analysis;

  return (
    <section id="numerology-tool" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/30 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <Sparkles size={14} className="text-[#8C6D23]" />
            <span>{t.numerology.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.numerology.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2">
            {t.numerology.subheading}
          </p>
        </div>

        {/* Interactive Form & Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D8CA] shadow-sm">
            <h3 className="font-cinzel text-xl font-bold text-[#2D2A26] mb-1">
              {t.numerology.calculatorBoxTitle}
            </h3>
            <p className="text-xs text-[#786E64] mb-6">
              {t.numerology.calculatorBoxSubtitle}
            </p>

            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label
                  htmlFor="birthdate-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5 flex items-center gap-1.5"
                >
                  <Calendar size={13} className="text-[#8C6D23]" />
                  <span>{t.numerology.dobLabel}</span>
                </label>
                <input
                  id="birthdate-input"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23] focus:ring-1 focus:ring-[#8C6D23]"
                  required
                />
                <p className="text-[11px] text-[#786E64] mt-1">
                  {t.numerology.dobHint}
                </p>
              </div>

              <div>
                <label
                  htmlFor="name-input"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5 flex items-center gap-1.5"
                >
                  <User size={13} className="text-[#8C6D23]" />
                  <span>{t.numerology.nameLabel}</span>
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder={t.numerology.namePlaceholder}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CABB] bg-[#FAF8F5] text-sm text-[#2D2A26] placeholder-[#9E9488] focus:outline-hidden focus:border-[#8C6D23] focus:ring-1 focus:ring-[#8C6D23]"
                />
                <p className="text-[11px] text-[#786E64] mt-1">
                  {t.numerology.nameHint}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="btn-calculate-numerology"
                  className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98"
                >
                  <Sparkles size={16} />
                  <span>{t.numerology.calculateBtn}</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-[#F0EAE0] text-xs text-[#786E64] space-y-2">
              <div className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-[#8C6D23] shrink-0 mt-0.5" />
                <span>
                  {language === 'hi'
                    ? 'आपकी जन्मतिथि या विवरण को कहीं भी संग्रह नहीं किया जाता है।'
                    : 'Calculations run client-side. Your details remain private and confidential.'}
                </span>
              </div>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-7 space-y-5">
            {/* Numbers Highlights Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Mulank (Birth Number) */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFC9] shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sun size={18} className="text-[#D4AF37]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
                      {t.numerology.mulankTitle}
                    </span>
                  </div>
                  <span className="text-xs text-[#786E64] font-medium">
                    {t.numerology.mulankSub}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-cinzel text-5xl font-black text-[#2D2A26]">
                    {mulank}
                  </span>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#3C2A1E]">
                      {language === 'hi' ? mulankData.archetype_hi : mulankData.archetype}
                    </h4>
                    <p className="text-xs text-[#8C6D23] font-medium">
                      {t.numerology.rulingPlanet}: {language === 'hi' ? mulankData.ruler_hi : mulankData.ruler}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#564E46] leading-relaxed pt-2 border-t border-[#F2ECE1]">
                  {language === 'hi' ? mulankData.summary_hi : mulankData.summary}
                </p>
              </div>

              {/* Bhagyank (Destiny Number) */}
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFC9] shadow-xs relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Moon size={18} className="text-[#8C6D23]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
                      {t.numerology.bhagyankTitle}
                    </span>
                  </div>
                  <span className="text-xs text-[#786E64] font-medium">
                    {t.numerology.bhagyankSub}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-cinzel text-5xl font-black text-[#2D2A26]">
                    {bhagyank}
                  </span>
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#3C2A1E]">
                      {language === 'hi' ? bhagyankData.archetype_hi : bhagyankData.archetype}
                    </h4>
                    <p className="text-xs text-[#8C6D23] font-medium">
                      {t.numerology.rulingPlanet}: {language === 'hi' ? bhagyankData.ruler_hi : bhagyankData.ruler}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#564E46] leading-relaxed pt-2 border-t border-[#F2ECE1]">
                  {language === 'hi' ? bhagyankData.summary_hi : bhagyankData.summary}
                </p>
              </div>
            </div>

            {/* Optional Name Number Result */}
            {nameResult && nameResult.number > 0 && (
              <div className="p-4 rounded-xl bg-[#F5EFE6] border border-[#E5DDD0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#D5CABB] flex items-center justify-center font-cinzel font-bold text-lg text-[#8C6D23]">
                    {nameResult.number}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#3C2A1E]">
                      {t.numerology.nameVibration}
                    </h5>
                    <p className="text-xs text-[#6B5A4B]">
                      {t.numerology.compoundBreakdown}: {nameResult.breakdown}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#8C6D23] font-medium hidden sm:inline">
                  Chaldean System
                </span>
              </div>
            )}

            {/* Cosmic Synergy Banner */}
            <div className="p-5 rounded-2xl bg-linear-to-br from-[#F5EFE6] to-[#FAF8F5] border border-[#D4AF37]/50 shadow-2xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#EAD8B1]/40 text-[#8C6D23] shrink-0">
                  <SpiritualLotusIcon size={20} color="#8C6D23" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#2D2A26]">
                    {t.numerology.synergyTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A423B] leading-relaxed mt-1">
                    {language === 'hi' ? dynamicHarmony_hi : dynamicHarmony}
                  </p>
                </div>
              </div>

              {/* Auspicious Guidance Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-[#EAE3D9] text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-[#786E64] block">
                    {t.numerology.luckyColors}
                  </span>
                  <span className="font-medium text-[#2D2A26] break-words">
                    {(language === 'hi' ? mulankData.luckyColors_hi : mulankData.luckyColors).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#786E64] block">
                    {t.numerology.luckyDays}
                  </span>
                  <span className="font-medium text-[#2D2A26] break-words">
                    {(language === 'hi' ? mulankData.luckyDays_hi : mulankData.luckyDays).join(', ')}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#786E64] block">
                    {t.numerology.element}
                  </span>
                  <span className="font-medium text-[#2D2A26] break-words">
                    {language === 'hi' ? mulankData.element_hi : mulankData.element}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#786E64] block">
                    {t.numerology.sacredMantra}
                  </span>
                  <span className="font-medium text-[#8C6D23] break-words block" title={mulankData.coreMantra}>
                    {mulankData.coreMantra}
                  </span>
                </div>
              </div>

              {/* Consultation prompt */}
              <div className="mt-4 pt-4 border-t border-[#EAE3D9] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#6B5A4B] text-center sm:text-left">
                  {t.numerology.consultPoojaDesc}
                </p>
                <button
                  type="button"
                  onClick={handleBookWithAnalysis}
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#8C6D23] hover:bg-[#785D1E] transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <span>{t.numerology.consultPoojaBtn}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
