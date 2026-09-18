export type ServiceId = 'numerology' | 'tarot' | 'healing' | 'coaching' | 'combined';
export type Language =
  // Major Indian Languages (10+)
  | 'hi' // Hindi (हिन्दी)
  | 'bn' // Bengali (বাংলা)
  | 'te' // Telugu (తెలుగు)
  | 'mr' // Marathi (मराठी)
  | 'ta' // Tamil (தமிழ்)
  | 'gu' // Gujarati (ગુજરાતી)
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'ml' // Malayalam (മലയാളം)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'or' // Odia (ଓଡ଼ିଆ)
  | 'ur' // Urdu (اردو)
  // Major International Languages (6)
  | 'en' // English
  | 'es' // Spanish (Español)
  | 'fr' // French (Français)
  | 'de' // German (Deutsch)
  | 'ar' // Arabic (العربية)
  | 'ru'; // Russian (Русский)

export interface ServiceItem {
  id: ServiceId;
  title: string;
  title_hi: string;
  hindiTitle: string; // for display subtitle
  tagline: string;
  tagline_hi: string;
  iconName: string;
  summary: string;
  summary_hi: string;
  fullDescription: string;
  fullDescription_hi: string;
  benefits: string[];
  benefits_hi: string[];
  deliverables: string[];
  deliverables_hi: string[];
  sessionDuration: string;
  sessionDuration_hi: string;
  whoIsThisFor: string;
  whoIsThisFor_hi: string;
  accentColor: string;
}

export interface VedicNumberProfile {
  ruler: string;
  ruler_hi: string;
  archetype: string;
  archetype_hi: string;
  element: string;
  element_hi: string;
  strengths: string[];
  strengths_hi: string[];
  growthAreas: string[];
  growthAreas_hi: string[];
  luckyColors: string[];
  luckyColors_hi: string[];
  luckyDays: string[];
  luckyDays_hi: string[];
  friendlyNumbers: number[];
  challengingNumbers: number[];
  coreMantra: string;
  summary: string;
  summary_hi: string;
}

export interface NumerologyAnalysis {
  mulank: number; // Driver / Birth Number (1-9)
  bhagyank: number; // Destiny / Conductor Number (1-9)
  mulankRuler: string;
  mulankRuler_hi: string;
  bhagyankRuler: string;
  bhagyankRuler_hi: string;
  personality: string;
  destinyPath: string;
  luckyColors: string[];
  luckyDays: string[];
  friendlyNumbers: number[];
  challengingNumbers: number[];
  remedy: string;
}

export interface TarotCard {
  id: string;
  name: string;
  name_hi: string;
  hindiName: string;
  arcana: 'Major' | 'Minor';
  arcana_hi: string;
  element: string;
  element_hi: string;
  keywords: string[];
  keywords_hi: string[];
  uprightMeaning: string;
  uprightMeaning_hi: string;
  guidance: string;
  guidance_hi: string;
  affirmation: string;
  affirmation_hi: string;
  symbolSymbolism: string;
  symbolSymbolism_hi: string;
}

export interface ChakraInfo {
  name: string;
  name_hi: string;
  sanskrit: string;
  location: string;
  location_hi: string;
  color: string;
  element: string;
  element_hi: string;
  balancedState: string;
  balancedState_hi: string;
  blockedSigns: string;
  blockedSigns_hi: string;
  healingMantra: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  location_hi: string;
  service: string;
  service_hi: string;
  quote: string;
  quote_hi: string;
  rating: number;
  date: string;
  date_hi: string;
}

export interface FAQItem {
  question: string;
  question_hi: string;
  answer: string;
  answer_hi: string;
}

export interface BrandConfig {
  brandName: string;
  brandName_hi?: string;
  founderName: string;
  founderName_hi?: string;
  tagline: string;
  tagline_hi?: string;
  secondaryBrandName?: string;
  displayMode: 'founder_first' | 'brand_first' | 'combined';
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  location?: string;
  location_hi?: string;
}

export interface AwardPhotoItem {
  id: string;
  filename: string;
  category: 'conclave' | 'felicitation' | 'press' | 'memento';
  caption: string; // explicitly blank as requested
  event?: string;
  event_hi?: string;
  alt: string;
}
