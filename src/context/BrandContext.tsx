import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrandConfig, Language } from '../types';
import { TRANSLATIONS, Translations } from '../data/translations';

interface BrandContextType {
  config: BrandConfig;
  updateConfig: (newConfig: Partial<BrandConfig>) => void;
  resetConfig: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  activeTheme: 'gold' | 'amethyst' | 'sage';
  setActiveTheme: (theme: 'gold' | 'amethyst' | 'sage') => void;
  isBrandModalOpen: boolean;
  setIsBrandModalOpen: (open: boolean) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  selectedServiceForBooking: string;
  setSelectedServiceForBooking: (service: string) => void;
}

const DEFAULT_BRAND_CONFIG: BrandConfig = {
  brandName: 'Pooja Awasthi',
  brandName_hi: 'पूजा अवस्थी',
  founderName: 'Pooja Awasthi',
  founderName_hi: 'पूजा अवस्थी',
  tagline: 'Discover Your Path. Transform Your Life.',
  tagline_hi: 'अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।',
  secondaryBrandName: '',
  displayMode: 'founder_first',
  whatsapp: '+919876543210',
  email: 'connect@poojaawasthi.com',
  location: 'New Delhi • Virtual Consultations Worldwide'
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem('pooja_awasthi_brand_config');
    if (saved) {
      try {
        return { ...DEFAULT_BRAND_CONFIG, ...JSON.parse(saved) };
      } catch {
        return DEFAULT_BRAND_CONFIG;
      }
    }
    return DEFAULT_BRAND_CONFIG;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('pooja_awasthi_lang');
    if (savedLang === 'hi' || savedLang === 'en') {
      return savedLang;
    }
    return 'en'; // default to English, with instant toggle to Hindi
  });

  const [activeTheme, setActiveTheme] = useState<'gold' | 'amethyst' | 'sage'>('gold');
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('numerology');

  useEffect(() => {
    localStorage.setItem('pooja_awasthi_brand_config', JSON.stringify(config));
  }, [config]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pooja_awasthi_lang', lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
  };

  const updateConfig = (newConfig: Partial<BrandConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_BRAND_CONFIG);
  };

  const t = TRANSLATIONS[language];

  return (
    <BrandContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        language,
        setLanguage,
        toggleLanguage,
        t,
        activeTheme,
        setActiveTheme,
        isBrandModalOpen,
        setIsBrandModalOpen,
        isBookingModalOpen,
        setIsBookingModalOpen,
        selectedServiceForBooking,
        setSelectedServiceForBooking
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};

export function useBrand() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
}
