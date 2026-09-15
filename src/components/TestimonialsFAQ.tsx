import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { TESTIMONIALS_DATA, FAQS } from '../data/spiritualData';
import { SpiritualLotusIcon } from './SacredMandala';
import { Star, MessageCircle, ChevronDown, ChevronUp, CheckCircle, Mail, Phone } from 'lucide-react';

export const TestimonialsFAQ: React.FC = () => {
  const { config, language, t } = useBrand();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const whatsappLink = `https://wa.me/${config.whatsapp?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    language === 'hi'
      ? `नमस्ते पूजा जी, मैं परामर्श के संदर्भ में जानकारी प्राप्त करना चाहता/चाहती हूँ।`
      : `Hello Pooja ji, I would like to inquire about a spiritual consultation.`
  )}`;

  return (
    <section id="testimonials" className="py-24 bg-[#F4EFE6]/50 border-t border-[#EAE3D9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
            <Star size={14} className="text-[#8C6D23] fill-[#8C6D23]" />
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B5A4B] mt-2">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E2D8CA] shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} className="text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#786E64]">
                    {language === 'hi' ? item.date_hi : item.date}
                  </span>
                </div>

                <p className="font-serif-cormorant italic text-base sm:text-lg text-[#3C2A1E] leading-relaxed mb-6">
                  &ldquo;{language === 'hi' ? item.quote_hi : item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#2D2A26]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#786E64]">
                    {language === 'hi' ? item.location_hi : item.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#8C6D23] px-2.5 py-1 rounded-full bg-[#EAD8B1]/30 border border-[#D4AF37]/30">
                    {language === 'hi' ? item.service_hi : item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div id="faq" className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-3">
              <MessageCircle size={14} className="text-[#8C6D23]" />
              <span>{t.faqs.badge}</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              {t.faqs.heading}
            </h3>
            <p className="text-xs sm:text-sm text-[#786E64] mt-1.5">
              {t.faqs.subheading}
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-[#E2D8CA] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-cinzel text-sm sm:text-base font-bold text-[#2D2A26]">
                      {language === 'hi' ? faq.question_hi : faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-[#FAF8F5] text-[#8C6D23] shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#564E46] leading-relaxed border-t border-[#F5EFE6]">
                      {language === 'hi' ? faq.answer_hi : faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Prompt */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2D8CA] text-center space-y-3">
            <h4 className="font-cinzel text-lg font-bold text-[#2D2A26]">
              {t.faqs.stillHaveQuestions}
            </h4>
            <p className="text-xs text-[#6B5A4B]">
              {language === 'hi'
                ? `पूजा जी की टीम से सीधे संपर्क करें। हम आपके सभी प्रश्नों का उत्तर देने हेतु तत्पर हैं।`
                : `Connect directly with Pooja ji’s team. We are happy to clarify any questions prior to booking.`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#1C1814] bg-[#EAD8B1]/40 hover:bg-[#EAD8B1] border border-[#D4AF37]/50 transition-colors flex items-center gap-1.5"
              >
                <Phone size={13} />
                <span>{t.faqs.whatsappUs}: {config.whatsapp}</span>
              </a>
              <a
                href={`mailto:${config.email}`}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#564E46] hover:text-[#2D2A26] border border-[#D5CABB] hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
              >
                <Mail size={13} />
                <span>{t.faqs.emailUs}: {config.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
