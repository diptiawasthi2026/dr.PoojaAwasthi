import React, { createContext, useContext, useState, useEffect } from 'react';
import { BrandConfig, Language } from '../types';
import { TRANSLATIONS, Translations } from '../data/translations';
import { isRtl } from '../data/languages';

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
  activePage: 'home' | 'charges';
  setActivePage: (page: 'home' | 'charges') => void;
}

const DEFAULT_BRAND_CONFIG: BrandConfig = {
  brandName: 'Pooja Awasthi',
  brandName_hi: 'डॉ. पूजा अवस्थी',
  founderName: 'Pooja Awasthi',
  founderName_hi: 'डॉ. पूजा अवस्थी',
  tagline: 'Discover Your Path. Transform Your Life.',
  tagline_hi: 'अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।',
  secondaryBrandName: '',
  displayMode: 'founder_first',
  whatsapp: '+919105731969',
  phone: '+919105731969',
  email: 'astro.poojaofficial@gmail.com',
  website: 'https://dr-pooja-awasthi.vercel.app/',
  location: 'Dehradun • Virtual Consultations Worldwide',
  location_hi: 'देहरादून • ऑनलाइन परामर्श विश्वभर में'
};

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<BrandConfig>(() => {
    const saved = localStorage.getItem('pooja_awasthi_brand_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If the user had previous placeholder name, upgrade it to डॉ. पूजा अवस्थी
        if (parsed.brandName_hi === 'पूजा अवस्थी' || parsed.brandName_hi === 'Dr. पूजा अवस्थी') parsed.brandName_hi = 'डॉ. पूजा अवस्थी';
        if (parsed.founderName_hi === 'पूजा अवस्थी' || parsed.founderName_hi === 'Dr. पूजा अवस्थी') parsed.founderName_hi = 'डॉ. पूजा अवस्थी';
        // If the user had the previous placeholder numbers/emails/locations, update to the requested ones
        if (parsed.whatsapp === '+919876543210') parsed.whatsapp = '+919105731969';
        if (parsed.email === 'connect@poojaawasthi.com') parsed.email = 'astro.poojaofficial@gmail.com';
        if (!parsed.location || parsed.location.includes('New Delhi')) {
          parsed.location = 'Dehradun • Virtual Consultations Worldwide';
          parsed.location_hi = 'देहरादून • ऑनलाइन परामर्श विश्वभर में';
        }
        return { ...DEFAULT_BRAND_CONFIG, ...parsed, website: parsed.website || DEFAULT_BRAND_CONFIG.website };
      } catch {
        return DEFAULT_BRAND_CONFIG;
      }
    }
    return DEFAULT_BRAND_CONFIG;
  });

  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('pooja_awasthi_lang') as Language;
    if (savedLang && TRANSLATIONS[savedLang]) {
      return savedLang;
    }
    return 'en'; // default to English
  });

  const [activeTheme, setActiveTheme] = useState<'gold' | 'amethyst' | 'sage'>('gold');
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('numerology');

  const [activePage, setActivePageState] = useState<'home' | 'charges'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#charges' || hash === '#consultancy-charges' || hash === '#fees') {
        return 'charges';
      }
    }
    return 'home';
  });

  const setActivePage = (page: 'home' | 'charges') => {
    setActivePageState(page);
    if (typeof window !== 'undefined') {
      if (page === 'charges') {
        window.location.hash = '#charges';
      } else {
        // If on charges hash and switching to home, clear it
        if (window.location.hash.toLowerCase() === '#charges' || window.location.hash.toLowerCase() === '#consultancy-charges') {
          history.replaceState(null, '', window.location.pathname);
        }
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#charges' || hash === '#consultancy-charges' || hash === '#fees') {
        setActivePageState('charges');
      } else if (hash === '' || hash === '#home' || hash === '#services' || hash === '#about') {
        setActivePageState('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('pooja_awasthi_brand_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    document.documentElement.dir = isRtl(language) ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pooja_awasthi_lang', lang);
  };

  const toggleLanguage = () => {
    // If English, toggle to Hindi; if Hindi, toggle to English; otherwise toggle to Hindi
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
        setSelectedServiceForBooking,
        activePage,
        setActivePage
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
