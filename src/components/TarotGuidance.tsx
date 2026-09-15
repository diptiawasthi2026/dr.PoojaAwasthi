import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { TAROT_DECK } from '../data/spiritualData';
import { TarotCard } from '../types';
import { SpiritualLotusIcon, SacredMandala } from './SacredMandala';
import { Sparkles, Shuffle, Eye, Heart, Compass, ArrowRight, BookOpen } from 'lucide-react';

export const TarotGuidance: React.FC = () => {
  const { language, t, setIsBookingModalOpen, setSelectedServiceForBooking } = useBrand();

  const [mode, setMode] = useState<'single' | 'three'>('single');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [threeCards, setThreeCards] = useState<TarotCard[]>(() => [
    TAROT_DECK[0],
    TAROT_DECK[1],
    TAROT_DECK[2]
  ]);
  const [isRevealed, setIsRevealed] = useState(true);

  const drawNewCard = () => {
    setIsRevealed(false);
    setTimeout(() => {
      if (mode === 'single') {
        const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
        setActiveCardIndex(randomIndex);
      } else {
        // Pick 3 unique cards
        const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
        setThreeCards(shuffled.slice(0, 3));
      }
      setIsRevealed(true);
    }, 280);
  };

  const handleBookTarot = () => {
    setSelectedServiceForBooking('tarot');
    setIsBookingModalOpen(true);
  };

  const currentCard = TAROT_DECK[activeCardIndex] || TAROT_DECK[0];

  return (
    <section id="tarot-tool" className="py-24 bg-[#F4EFE6]/60 border-y border-[#EAE3D9] relative overflow-hidden">
      {/* Sacred background ambient */}
      <div className="absolute left-1/2 -translate-x-1/2 top-10 opacity-20 pointer-events-none">
        <SacredMandala size={700} strokeColor="#D4AF37" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <Sparkles size={14} className="text-[#8C6D23]" />
            <span>{t.tarot.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.tarot.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2">
            {t.tarot.subheading}
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 rounded-full bg-[#EAE3D9] border border-[#DDD4C5] mt-6 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setMode('single')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                mode === 'single' ? 'bg-[#8C6D23] text-white shadow-xs' : 'text-[#6B5A4B] hover:text-[#2D2A26]'
              }`}
            >
              {t.tarot.drawSingleCard}
            </button>
            <button
              type="button"
              onClick={() => setMode('three')}
              className={`px-4 py-1.5 rounded-full transition-all ${
                mode === 'three' ? 'bg-[#8C6D23] text-white shadow-xs' : 'text-[#6B5A4B] hover:text-[#2D2A26]'
              }`}
            >
              {t.tarot.drawThreeCards}
            </button>
          </div>
        </div>

        {/* Mode: Single Card View */}
        {mode === 'single' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Card Visual Representation */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div
                  className={`w-64 sm:w-72 aspect-5/8 rounded-2xl p-6 bg-linear-to-b from-[#2D2A26] via-[#1F1C19] to-[#2D2A26] border-2 border-[#D4AF37] shadow-xl flex flex-col justify-between text-center relative overflow-hidden transition-all duration-300 ${
                    isRevealed ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                  }`}
                >
                  {/* Subtle inner card border */}
                  <div className="absolute inset-2 border border-[#D4AF37]/30 rounded-xl pointer-events-none" />

                  <div className="flex justify-between items-center text-[11px] uppercase tracking-widest text-[#EAD8B1]/80 pt-1">
                    <span>{language === 'hi' ? currentCard.arcana_hi : currentCard.arcana}</span>
                    <span>{language === 'hi' ? currentCard.element_hi : currentCard.element}</span>
                  </div>

                  {/* Sacred Icon Centerpiece */}
                  <div className="my-auto py-6 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-[#3D3730] border border-[#D4AF37]/60 flex items-center justify-center p-3 mb-3 shadow-inner">
                      <SpiritualLotusIcon size={46} color="#D4AF37" />
                    </div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FAF8F5] tracking-wide">
                      {language === 'hi' ? currentCard.name_hi : currentCard.name}
                    </h3>
                    <p className="font-serif-cormorant italic text-sm text-[#D4AF37] mt-1">
                      {language === 'hi' ? currentCard.name : currentCard.hindiName}
                    </p>
                  </div>

                  {/* Keywords footer */}
                  <div className="flex flex-wrap justify-center gap-1.5 pb-1">
                    {(language === 'hi' ? currentCard.keywords_hi : currentCard.keywords).slice(0, 3).map((kw, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-[#3D3730] text-[#EAD8B1] border border-[#D4AF37]/30"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shuffle / Draw Button */}
                <button
                  type="button"
                  id="btn-draw-tarot"
                  onClick={drawNewCard}
                  className="mt-6 px-6 py-2.5 rounded-full text-xs font-semibold text-[#3C2A1E] bg-white hover:bg-[#FAF8F5] border border-[#D4AF37] shadow-xs hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <Shuffle size={14} className="text-[#8C6D23]" />
                  <span>{t.tarot.drawNewCard}</span>
                </button>
              </div>

              {/* Card Interpretation Details */}
              <div className="md:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2D8CA] shadow-sm space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D23]">
                    {language === 'hi' ? currentCard.arcana_hi : currentCard.arcana} • {t.tarot.uprightEssence}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26] mt-1">
                    {language === 'hi' ? currentCard.name_hi : currentCard.name}
                  </h3>
                  <p className="text-sm text-[#4A423B] leading-relaxed mt-2.5">
                    {language === 'hi' ? currentCard.uprightMeaning_hi : currentCard.uprightMeaning}
                  </p>
                </div>

                {/* Practical Guidance */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D9]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D23] mb-1 flex items-center gap-1.5">
                    <Compass size={14} />
                    <span>{t.tarot.divineGuidance}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {language === 'hi' ? currentCard.guidance_hi : currentCard.guidance}
                  </p>
                </div>

                {/* Affirmation */}
                <div className="p-4 rounded-xl bg-linear-to-r from-[#FAF8F5] to-[#F5EFE6] border-l-4 border-[#8C6D23]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C2A1E] mb-1 flex items-center gap-1.5">
                    <Heart size={14} className="text-[#8C6D23]" />
                    <span>{t.tarot.sacredAffirmation}</span>
                  </h4>
                  <p className="font-serif-cormorant italic text-base sm:text-lg text-[#2D2A26]">
                    &ldquo;{language === 'hi' ? currentCard.affirmation_hi : currentCard.affirmation}&rdquo;
                  </p>
                </div>

                {/* Symbolism */}
                <div className="text-xs text-[#786E64] flex items-center gap-2 pt-2 border-t border-[#F2ECE1]">
                  <BookOpen size={13} className="text-[#8C6D23]" />
                  <span>
                    <strong>{t.tarot.symbolicArchetype}:</strong> {language === 'hi' ? currentCard.symbolSymbolism_hi : currentCard.symbolSymbolism}
                  </span>
                </div>

                {/* Booking Prompt */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-xs text-[#786E64]">
                    {language === 'hi'
                      ? 'गहन व्यक्तिगत टैरो सत्र के लिए पूजा जी से परामर्श करें।'
                      : 'For deeply customized 10-card Celtic Cross reading with Pooja ji:'}
                  </p>
                  <button
                    type="button"
                    onClick={handleBookTarot}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#8C6D23] hover:bg-[#785D1E] flex items-center gap-1.5 shrink-0 shadow-2xs"
                  >
                    <span>{t.tarot.bookSession}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mode: 3-Card Temporal Spread (Past / Present / Future) */}
        {mode === 'three' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {threeCards.map((card, idx) => {
                const positions = [t.tarot.past, t.tarot.present, t.tarot.future];

                return (
                  <div
                    key={card.id}
                    className="bg-white rounded-2xl p-6 border border-[#E2D8CA] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAD8B1]/40 text-[#8C6D23]">
                          {positions[idx]}
                        </span>
                        <span className="text-[11px] text-[#786E64]">
                          {language === 'hi' ? card.arcana_hi : card.arcana}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-lg font-bold text-[#2D2A26] mb-1">
                        {language === 'hi' ? card.name_hi : card.name}
                      </h4>
                      <p className="font-serif-cormorant italic text-xs text-[#8C6D23] mb-3">
                        {language === 'hi' ? card.name : card.hindiName}
                      </p>

                      <p className="text-xs text-[#564E46] leading-relaxed mb-4">
                        {language === 'hi' ? card.uprightMeaning_hi : card.uprightMeaning}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F2ECE1]">
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6D23] block mb-1">
                        {t.tarot.sacredAffirmation}
                      </span>
                      <p className="text-xs font-serif-cormorant italic text-[#3C2A1E]">
                        &ldquo;{language === 'hi' ? card.affirmation_hi : card.affirmation}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={drawNewCard}
                className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all inline-flex items-center gap-2 shadow-xs"
              >
                <Shuffle size={14} />
                <span>{t.tarot.drawNewCard}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
