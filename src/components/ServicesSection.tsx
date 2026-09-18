import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { CORE_SERVICES } from '../data/spiritualData';
import { ServiceItem } from '../types';
import { SpiritualLotusIcon } from './SacredMandala';
import { Compass, Sparkles, HeartHandshake, Flame, Clock, Check, ArrowRight, X, UserCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { config, language, t, setIsBookingModalOpen, setSelectedServiceForBooking, setActivePage } = useBrand();
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'numerology':
        return <Compass size={22} className="text-[#8C6D23]" />;
      case 'tarot':
        return <Sparkles size={22} className="text-[#8C6D23]" />;
      case 'healing':
        return <HeartHandshake size={22} className="text-[#8C6D23]" />;
      case 'coaching':
        return <Flame size={22} className="text-[#8C6D23]" />;
      default:
        return <SpiritualLotusIcon size={22} color="#8C6D23" />;
    }
  };

  const handleBookService = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
    setActiveModalService(null);
    setIsBookingModalOpen(true);
  };

  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/30 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <SpiritualLotusIcon size={14} color="#8C6D23" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.services.servicesExploreTitle}
          </h2>
          <p className="font-serif-cormorant text-xl sm:text-2xl text-[#8C6D23] font-semibold italic mt-2">
            {t.services.servicesExploreSubtitle}
          </p>
          <p className="text-sm sm:text-base text-[#564E46] mt-3 max-w-2xl mx-auto">
            {t.services.intro}
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {CORE_SERVICES.map((service) => {
            const currentTitle = language === 'hi' ? service.title_hi : service.title;
            const currentTagline = language === 'hi' ? service.tagline_hi : service.tagline;
            const currentSummary = language === 'hi' ? service.summary_hi : service.summary;
            const currentDuration = language === 'hi' ? service.sessionDuration_hi : service.sessionDuration;
            const currentBenefits = language === 'hi' ? service.benefits_hi : service.benefits;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white rounded-2xl p-7 sm:p-8 border border-[#E5DDD0] hover:border-[#D4AF37] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top ambient glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon & Duration Header */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E8DFC9] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.id)}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE6] text-xs font-medium text-[#786E64]">
                      <Clock size={13} />
                      <span>{currentDuration}</span>
                    </div>
                  </div>

                  {/* Title & Bilingual Subtitle */}
                  <div className="mb-2">
                    <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26] group-hover:text-[#8C6D23] transition-colors">
                      {currentTitle}
                    </h3>
                    <span className="font-serif-cormorant italic text-sm text-[#8C6D23] font-medium">
                      {language === 'hi' ? service.title : service.hindiTitle}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#8C6D23] uppercase tracking-wider mb-3">
                    {currentTagline}
                  </p>

                  <p className="text-sm text-[#564E46] leading-relaxed mb-6">
                    {currentSummary}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F2ECE1]">
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#3C2A1E]">
                      {t.services.whatYouGain}
                    </p>
                    {currentBenefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#564E46]">
                        <Check size={14} className="text-[#8C6D23] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#F2ECE1]">
                  <button
                    type="button"
                    onClick={() => handleBookService(service.id)}
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all text-center flex items-center justify-center gap-2 active:scale-95 shadow-2xs"
                  >
                    <span>{t.services.bookBtn}</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="py-2.5 px-3.5 rounded-xl text-xs font-medium text-[#786E64] hover:text-[#8C6D23] bg-[#FAF8F5] hover:bg-[#F2ECE1] border border-[#E0D7CB] transition-colors"
                  >
                    {t.services.detailsBtn}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Resonance Banner from prompt */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-[#F5EFE6] border border-[#E5DAC6] shadow-xs mb-8">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#2D2A26] mb-2">
            {t.services.resonateTitle}
          </h3>
          <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#8C6D23] font-semibold">
            {t.services.resonateQuote}
          </p>
        </div>

        {/* Dedicated Consultancy Charges Page Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-linear-to-r from-[#FAF4EA] via-[#F5EFE6] to-[#FAF4EA] border border-[#D4AF37]/50 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8C6D23] text-white flex items-center justify-center shrink-0 shadow-xs">
              <span className="font-bold text-xl font-sans">₹</span>
            </div>
            <div>
              <h4 className="font-cinzel font-bold text-[#2D2A26] text-base">
                {language === 'hi' ? 'आध्यात्मिक मार्गदर्शन एवं हीलिंग शुल्क' : 'Spiritual Guidance & Healing Tariff'}
              </h4>
              <p className="text-xs text-[#6B5A4B] mt-0.5">
                {language === 'hi' 
                  ? 'परामर्श सत्र शुल्क ₹5,100 तथा 11 विशिष्ट हीलिंग सेवाएँ (₹11,000 - ₹31,000), बैंक व UPI विवरण'
                  : 'Consultation fee ₹5,100 & 11 specialized healing modalities (₹11,000 - ₹31,000), Bank & UPI details'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setActivePage('charges');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#8C6D23] hover:bg-[#785D1E] transition-colors shadow-xs shrink-0 flex items-center justify-center gap-1.5"
          >
            <span>{language === 'hi' ? 'विस्तृत शुल्क सूची देखें' : 'View Full Tariff'}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Deep Exploration Modal */}
      {activeModalService && (
        <div
          id="service-details-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1814]/70 backdrop-blur-xs"
        >
          <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 relative">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#786E64] hover:text-[#2D2A26] hover:bg-[#EAE3D9] transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E8DFC9] flex items-center justify-center">
                {getServiceIcon(activeModalService.id)}
              </div>
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26]">
                  {language === 'hi' ? activeModalService.title_hi : activeModalService.title}
                </h3>
                <span className="font-serif-cormorant italic text-sm text-[#8C6D23]">
                  {language === 'hi' ? activeModalService.title : activeModalService.hindiTitle}
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold text-[#8C6D23] uppercase tracking-wider mb-4">
              {language === 'hi' ? activeModalService.tagline_hi : activeModalService.tagline}
            </p>

            <p className="text-sm text-[#4A423B] leading-relaxed mb-6">
              {language === 'hi' ? activeModalService.fullDescription_hi : activeModalService.fullDescription}
            </p>

            {/* Who is this for */}
            <div className="p-4 rounded-xl bg-white border border-[#EAE3D9] mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6D23] mb-1.5 flex items-center gap-1.5">
                <UserCheck size={14} />
                <span>{t.services.modalWhoIsThisFor}</span>
              </h4>
              <p className="text-xs text-[#564E46] leading-relaxed">
                {language === 'hi' ? activeModalService.whoIsThisFor_hi : activeModalService.whoIsThisFor}
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C2A1E] mb-2.5">
                {t.services.modalBenefits}
              </h4>
              <div className="space-y-2">
                {(language === 'hi' ? activeModalService.benefits_hi : activeModalService.benefits).map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#564E46]">
                    <Check size={14} className="text-[#8C6D23] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-4 rounded-xl bg-[#F5EFE6] border border-[#E8DFC9] mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3C2A1E] mb-2">
                {t.services.modalDeliverables}
              </h4>
              <ul className="space-y-1.5 text-xs text-[#6B5A4B]">
                {(language === 'hi' ? activeModalService.deliverables_hi : activeModalService.deliverables).map((d, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D23]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#EAE3D9]">
              <div className="flex items-center gap-1.5 text-xs text-[#786E64]">
                <Clock size={14} />
                <span>
                  {language === 'hi' ? activeModalService.sessionDuration_hi : activeModalService.sessionDuration}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 rounded-xl text-xs text-[#786E64] hover:bg-[#EAE3D9]"
                >
                  {t.services.modalClose}
                </button>
                <button
                  type="button"
                  onClick={() => handleBookService(activeModalService.id)}
                  className="flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] text-center"
                >
                  {t.services.modalBookNow}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
