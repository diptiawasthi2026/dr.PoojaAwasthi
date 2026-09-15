import React from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon } from './SacredMandala';
import { Mail, Phone, MapPin, Calendar, Heart, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { config, language, setLanguage, toggleLanguage, t, setIsBookingModalOpen } = useBrand();

  const currentBrandName = language === 'hi' && config.brandName_hi ? config.brandName_hi : config.brandName;
  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;
  const currentTagline = language === 'hi' && config.tagline_hi ? config.tagline_hi : config.tagline;

  const whatsappLink = `https://wa.me/${config.whatsapp?.replace(/[^0-9]/g, '')}`;

  return (
    <footer className="bg-[#1C1814] text-[#E8E1D7] pt-20 pb-12 border-t border-[#332C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#2E2720]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2A231C] border border-[#D4AF37]/40 flex items-center justify-center">
                <SpiritualLotusIcon size={22} color="#D4AF37" />
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-[#FAF8F5]">
                  {currentBrandName}
                </span>
                {config.secondaryBrandName && (
                  <span className="block text-[11px] font-serif-cormorant italic text-[#D4AF37]">
                    {config.secondaryBrandName}
                  </span>
                )}
              </div>
            </div>

            <p className="font-serif-cormorant italic text-base text-[#D4AF37]">
              &ldquo;{currentTagline}&rdquo;
            </p>

            <p className="text-xs text-[#A89D91] leading-relaxed">
              {t.footer.brandNote}
            </p>

            {/* Language switcher in footer */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-[#8C8074] flex items-center gap-1">
                <Globe size={13} /> {t.footer.language}:
              </span>
              <div className="inline-flex rounded-md p-0.5 bg-[#2A231C] border border-[#3E342B] text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    language === 'en' ? 'bg-[#8C6D23] text-white' : 'text-[#A89D91] hover:text-[#FAF8F5]'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('hi')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    language === 'hi' ? 'bg-[#8C6D23] text-white' : 'text-[#A89D91] hover:text-[#FAF8F5]'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-[#A89D91]">
              <li>
                <a href="#about" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#numerology-tool" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.numerology}
                </a>
              </li>
              <li>
                <a href="#tarot-tool" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.tarot}
                </a>
              </li>
              <li>
                <a href="#chakras" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.chakras}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FAF8F5] transition-colors">
                  {t.nav.testimonials}
                </a>
              </li>
            </ul>
          </div>

          {/* Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {t.footer.servicesHeading}
            </h4>
            <ul className="space-y-2 text-xs text-[#A89D91]">
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {language === 'hi' ? 'वैदिक अंकशास्त्र परामर्श' : 'Vedic Numerology Reading'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {language === 'hi' ? 'अंतर्ज्ञानी टैरो सत्र' : 'Intuitive Tarot Consultation'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {language === 'hi' ? 'दूरस्थ ऊर्जा एवं चक्र उपचार' : 'Distance Energy & Chakra Healing'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {language === 'hi' ? 'सजग जीवन मार्गदर्शन' : 'Conscious Life Coaching'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF8F5] transition-colors">
                  {language === 'hi' ? 'संबंध एवं विवाह अनुकूलता' : 'Relationship Compatibility & Milestones'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connect */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              {t.footer.connectHeading}
            </h4>
            <p className="text-xs text-[#A89D91]">
              {language === 'hi'
                ? `पूजा जी से सीधे परामर्श या सहायता हेतु संपर्क करें:`
                : `Connect directly for consultation scheduling and queries:`}
            </p>

            <div className="space-y-2 pt-1 text-xs text-[#C8BFB5]">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Phone size={13} className="text-[#D4AF37]" />
                <span>WhatsApp: {config.whatsapp}</span>
              </a>

              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
              >
                <Mail size={13} className="text-[#D4AF37]" />
                <span>{config.email}</span>
              </a>

              {config.website && (
                <a
                  href={config.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors"
                >
                  <Globe size={13} className="text-[#D4AF37]" />
                  <span className="truncate">{config.website.replace(/^https?:\/\//, '')}</span>
                  <ExternalLink size={10} className="text-[#8C8074] shrink-0" />
                </a>
              )}

              <div className="flex items-center gap-2 text-[#8C8074]">
                <MapPin size={13} className="text-[#D4AF37]" />
                <span>{language === 'hi' ? (config.location_hi || config.location) : config.location}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar size={13} />
                <span>{t.nav.bookConsultation}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7064]">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            {t.footer.disclaimer}
          </p>

          <p className="text-center md:text-right shrink-0">
            © {new Date().getFullYear()} {currentBrandName}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
