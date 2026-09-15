import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon } from './SacredMandala';
import { X, SlidersHorizontal, RotateCcw, Check, Sparkles, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';

export const BrandCustomizerModal: React.FC = () => {
  const { config, updateConfig, resetConfig, language, t, isBrandModalOpen, setIsBrandModalOpen } = useBrand();

  const [brandName, setBrandName] = useState(config.brandName);
  const [brandName_hi, setBrandName_hi] = useState(config.brandName_hi || 'पूजा अवस्थी');
  const [founderName, setFounderName] = useState(config.founderName);
  const [tagline, setTagline] = useState(config.tagline);
  const [tagline_hi, setTagline_hi] = useState(config.tagline_hi || 'अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।');
  const [secondaryBrandName, setSecondaryBrandName] = useState(config.secondaryBrandName || '');
  const [whatsapp, setWhatsapp] = useState(config.whatsapp || '+919105731969');
  const [email, setEmail] = useState(config.email || 'astro.poojaofficial@gmail.com');
  const [website, setWebsite] = useState(config.website || 'https://dr-pooja-awasthi.vercel.app/');
  const [location, setLocation] = useState(config.location || 'Dehradun • Virtual Consultations Worldwide');
  const [location_hi, setLocation_hi] = useState(config.location_hi || 'देहरादून • ऑनलाइन परामर्श विश्वभर में');
  const [isSavedNotice, setIsSavedNotice] = useState(false);

  if (!isBrandModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      brandName: brandName.trim() || 'Pooja Awasthi',
      brandName_hi: brandName_hi.trim() || 'पूजा अवस्थी',
      founderName: founderName.trim() || 'Pooja Awasthi',
      tagline: tagline.trim() || 'Discover Your Path. Transform Your Life.',
      tagline_hi: tagline_hi.trim() || 'अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।',
      secondaryBrandName: secondaryBrandName.trim(),
      whatsapp: whatsapp.trim() || '+919105731969',
      phone: whatsapp.trim() || '+919105731969',
      email: email.trim() || 'astro.poojaofficial@gmail.com',
      website: website.trim() || 'https://dr-pooja-awasthi.vercel.app/',
      location: location.trim() || 'Dehradun • Virtual Consultations Worldwide',
      location_hi: location_hi.trim() || 'देहरादून • ऑनलाइन परामर्श विश्वभर में'
    });
    setIsSavedNotice(true);
    setTimeout(() => {
      setIsSavedNotice(false);
      setIsBrandModalOpen(false);
    }, 600);
  };

  const handleReset = () => {
    resetConfig();
    setBrandName('Pooja Awasthi');
    setBrandName_hi('पूजा अवस्थी');
    setFounderName('Pooja Awasthi');
    setTagline('Discover Your Path. Transform Your Life.');
    setTagline_hi('अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।');
    setSecondaryBrandName('');
    setWhatsapp('+919105731969');
    setEmail('astro.poojaofficial@gmail.com');
    setWebsite('https://dr-pooja-awasthi.vercel.app/');
    setLocation('Dehradun • Virtual Consultations Worldwide');
    setLocation_hi('देहरादून • ऑनलाइन परामर्श विश्वभर में');
  };

  return (
    <div
      id="brand-customizer-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1814]/75 backdrop-blur-xs"
    >
      <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 relative">
        <button
          type="button"
          onClick={() => setIsBrandModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-[#786E64] hover:text-[#2D2A26] hover:bg-[#EAE3D9] transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-[#EAD8B1]/40 border border-[#D4AF37]/40 text-[#8C6D23]">
            <SlidersHorizontal size={20} />
          </div>
          <div>
            <h3 className="font-cinzel text-xl font-bold text-[#2D2A26]">
              {t.customizer.modalTitle}
            </h3>
            <p className="text-xs text-[#786E64]">
              {t.customizer.modalSubtitle}
            </p>
          </div>
        </div>

        {/* Prompt note referencing user guidelines */}
        <div className="p-3.5 rounded-xl bg-[#F5EFE6] border border-[#E8DFC9] mb-6 text-xs text-[#564E46] leading-relaxed">
          <strong>{t.customizer.noteHeading}:</strong> {t.customizer.noteBody}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="input-brand-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.brandNameEn}
              </label>
              <input
                id="input-brand-name"
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Pooja Awasthi"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>

            <div>
              <label
                htmlFor="input-brand-name-hi"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.brandNameHi}
              </label>
              <input
                id="input-brand-name-hi"
                type="text"
                value={brandName_hi}
                onChange={(e) => setBrandName_hi(e.target.value)}
                placeholder="पूजा अवस्थी"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="input-secondary-brand"
              className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1 flex items-center justify-between"
            >
              <span>{t.customizer.secondaryBrand}</span>
              <span className="text-[10px] text-[#8C6D23] font-normal lowercase">{t.customizer.optional}</span>
            </label>
            <input
              id="input-secondary-brand"
              type="text"
              value={secondaryBrandName}
              onChange={(e) => setSecondaryBrandName(e.target.value)}
              placeholder={t.customizer.secondaryBrandPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
            />
            <p className="text-[11px] text-[#786E64] mt-1">
              {t.customizer.secondaryBrandHelp}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="input-tagline-en"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.taglineEn}
              </label>
              <input
                id="input-tagline-en"
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Discover Your Path. Transform Your Life."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>

            <div>
              <label
                htmlFor="input-tagline-hi"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.taglineHi}
              </label>
              <input
                id="input-tagline-hi"
                type="text"
                value={tagline_hi}
                onChange={(e) => setTagline_hi(e.target.value)}
                placeholder="अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="input-whatsapp"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.whatsappContact}
              </label>
              <input
                id="input-whatsapp"
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>
            <div>
              <label
                htmlFor="input-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.emailContact}
              </label>
              <input
                id="input-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="input-website"
              className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
            >
              {t.customizer.websiteContact}
            </label>
            <div className="relative">
              <input
                id="input-website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                placeholder="https://dr-pooja-awasthi.vercel.app/"
              />
              <Globe size={14} className="absolute left-3 top-3.5 text-[#8C6D23]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="input-location-en"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.locationContact} (EN)
              </label>
              <div className="relative">
                <input
                  id="input-location-en"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Dehradun • Virtual Consultations Worldwide"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                />
                <MapPin size={14} className="absolute left-3 top-3.5 text-[#8C6D23]" />
              </div>
            </div>
            <div>
              <label
                htmlFor="input-location-hi"
                className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1"
              >
                {t.customizer.locationContact} (हिन्दी)
              </label>
              <div className="relative">
                <input
                  id="input-location-hi"
                  type="text"
                  value={location_hi}
                  onChange={(e) => setLocation_hi(e.target.value)}
                  placeholder="देहरादून • ऑनलाइन परामर्श विश्वभर में"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                />
                <MapPin size={14} className="absolute left-3 top-3.5 text-[#8C6D23]" />
              </div>
            </div>
          </div>

          {/* Quick preset chips */}
          <div className="pt-2">
            <span className="text-[11px] font-semibold text-[#786E64] block mb-1.5">
              {t.customizer.quickSuggestions}:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'Pooja Awasthi', label_hi: 'पूजा अवस्थी' },
                { label: 'Aura by Pooja Awasthi', label_hi: 'ऑरा - पूजा अवस्थी' },
                { label: 'Divine Path by Pooja', label_hi: 'डिवाइन पाथ - पूजा अवस्थी' }
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => {
                    setBrandName(s.label);
                    setBrandName_hi(s.label_hi);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] bg-white hover:bg-[#EAD8B1]/40 border border-[#D5CABB] text-[#564E46]"
                >
                  {language === 'hi' ? s.label_hi : s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#EAE3D9]">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs font-medium text-[#786E64] hover:text-[#2D2A26] flex items-center gap-1"
            >
              <RotateCcw size={13} />
              <span>{t.customizer.resetDefaults}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsBrandModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#786E64] hover:bg-[#EAE3D9]"
              >
                {t.customizer.cancel}
              </button>
              <button
                type="submit"
                id="btn-save-brand-config"
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] shadow-xs flex items-center gap-1.5"
              >
                {isSavedNotice ? <Check size={14} /> : <Sparkles size={14} />}
                <span>{isSavedNotice ? t.customizer.saved : t.customizer.applyChanges}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
