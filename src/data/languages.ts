import { Language } from '../types';

export interface LanguageMeta {
  code: Language;
  name: string; // Native script
  englishName: string; // English name
  greeting: string; // Cultural greeting in script
  category: 'indian' | 'international';
  script: string;
  dir?: 'ltr' | 'rtl';
  popular?: boolean;
}

export const INDIAN_LANGUAGES: LanguageMeta[] = [
  {
    code: 'hi',
    name: 'हिन्दी',
    englishName: 'Hindi',
    greeting: 'नमस्ते',
    category: 'indian',
    script: 'Devanagari',
    popular: true
  },
  {
    code: 'bn',
    name: 'বাংলা',
    englishName: 'Bengali',
    greeting: 'নমস্কার',
    category: 'indian',
    script: 'Bengali',
    popular: true
  },
  {
    code: 'te',
    name: 'తెలుగు',
    englishName: 'Telugu',
    greeting: 'నమస్కారం',
    category: 'indian',
    script: 'Telugu',
    popular: true
  },
  {
    code: 'mr',
    name: 'मराठी',
    englishName: 'Marathi',
    greeting: 'नमस्कार',
    category: 'indian',
    script: 'Devanagari',
    popular: true
  },
  {
    code: 'ta',
    name: 'தமிழ்',
    englishName: 'Tamil',
    greeting: 'வணக்கம்',
    category: 'indian',
    script: 'Tamil',
    popular: true
  },
  {
    code: 'gu',
    name: 'ગુજરાતી',
    englishName: 'Gujarati',
    greeting: 'જય શ્રી કૃષ્ણ',
    category: 'indian',
    script: 'Gujarati',
    popular: true
  },
  {
    code: 'kn',
    name: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    greeting: 'ನಮಸ್ಕಾರ',
    category: 'indian',
    script: 'Kannada'
  },
  {
    code: 'ml',
    name: 'മലയാളം',
    englishName: 'Malayalam',
    greeting: 'നമസ്കാരം',
    category: 'indian',
    script: 'Malayalam'
  },
  {
    code: 'pa',
    name: 'ਪੰਜਾਬੀ',
    englishName: 'Punjabi',
    greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
    category: 'indian',
    script: 'Gurmukhi'
  },
  {
    code: 'or',
    name: 'ଓଡ଼ିଆ',
    englishName: 'Odia',
    greeting: 'ନମସ୍କାର',
    category: 'indian',
    script: 'Odia'
  },
  {
    code: 'ur',
    name: 'اردو',
    englishName: 'Urdu',
    greeting: 'آداب',
    category: 'indian',
    script: 'Perso-Arabic',
    dir: 'rtl'
  }
];

export const INTERNATIONAL_LANGUAGES: LanguageMeta[] = [
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    greeting: 'Welcome',
    category: 'international',
    script: 'Latin',
    popular: true
  },
  {
    code: 'es',
    name: 'Español',
    englishName: 'Spanish',
    greeting: 'Hola',
    category: 'international',
    script: 'Latin',
    popular: true
  },
  {
    code: 'fr',
    name: 'Français',
    englishName: 'French',
    greeting: 'Bienvenue',
    category: 'international',
    script: 'Latin',
    popular: true
  },
  {
    code: 'de',
    name: 'Deutsch',
    englishName: 'German',
    greeting: 'Willkommen',
    category: 'international',
    script: 'Latin',
    popular: true
  },
  {
    code: 'ar',
    name: 'العربية',
    englishName: 'Arabic',
    greeting: 'مرحباً',
    category: 'international',
    script: 'Arabic',
    dir: 'rtl',
    popular: true
  },
  {
    code: 'ru',
    name: 'Русский',
    englishName: 'Russian',
    greeting: 'Здравствуйте',
    category: 'international',
    script: 'Cyrillic',
    popular: true
  }
];

export const ALL_LANGUAGES: LanguageMeta[] = [
  ...INDIAN_LANGUAGES,
  ...INTERNATIONAL_LANGUAGES
];

export const getLanguageMeta = (code: Language): LanguageMeta => {
  return ALL_LANGUAGES.find(l => l.code === code) || INTERNATIONAL_LANGUAGES[0];
};

export const isRtl = (code: Language): boolean => {
  const meta = getLanguageMeta(code);
  return meta.dir === 'rtl';
};

export const isIndianLang = (code: Language): boolean => {
  const meta = getLanguageMeta(code);
  return meta.category === 'indian';
};
