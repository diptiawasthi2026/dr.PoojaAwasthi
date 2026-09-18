import { Language } from '../../types';

export type { Language };

export interface Translations {
  // Navigation
  nav: {
    services: string;
    about: string;
    numerology: string;
    tarot: string;
    chakras: string;
    testimonials: string;
    brandSettings: string;
    bookConsultation: string;
    languageToggle: string;
    customBrandPrompt: string;
  };

  // Hero Section
  hero: {
    badgeFounder: string;
    badgeRole: string;
    defaultTagline: string;
    subtitle: string;
    bookCta: string;
    calculateCta: string;
    confidentialTitle: string;
    confidentialDesc: string;
    practicalTitle: string;
    practicalDesc: string;
    virtualTitle: string;
    virtualDesc: string;
  };

  // About Section
  about: {
    badge: string;
    welcomeTitle: string;
    founderRole: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    connectBtn: string;
    servicesBtn: string;
    quoteBadge: string;
    credential1: string;
    credential2: string;
    credential3: string;
    credential4: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    tabBio: string;
    tabAwards: string;
    awardsBadge: string;
    awardsTitle: string;
    awardsSubtitle: string;
    awardsCount: string;
    awardsCaptionPlaceholder: string;
    awardsUploadPrompt: string;
    awardsUploadSuccess: string;
    awardsFilterAll: string;
    awardsFilterConclave: string;
    awardsFilterFelicitation: string;
    awardsFilterPress: string;
    awardsFilterMemento: string;
    awardsViewFull: string;
    awardsClose: string;

    // Meet Pooja Awasthi
    meetTitle: string;
    meetSubtitle: string;
    visionTitle: string;
    visionText: string;
    visionQuote: string;

    // Our Philosophy
    philosophyTitle: string;
    philosophySubtitle: string;
    philosophyBelief: string;
    philosophyContext: string;
    philosophyPillarsIntro: string;
    philClarityTitle: string;
    philClarityDesc: string;
    philAwarenessTitle: string;
    philAwarenessDesc: string;
    philEmpowermentTitle: string;
    philEmpowermentDesc: string;
    philosophyDeepText: string;
    philosophyObjective: string;
    promiseTitle: string;
    promiseValues: string;
    promiseText: string;
    promiseQuote: string;

    // Why Choose Pooja Awasthi?
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    whyChooseIntro: string;
    whyPillar1Title: string;
    whyPillar1Desc: string;
    whyPillar2Title: string;
    whyPillar2Desc: string;
    whyPillar3Title: string;
    whyPillar3Desc: string;
    whyPillar4Title: string;
    whyPillar4Desc: string;
    whyPillar5Title: string;
    whyPillar5Desc: string;
    whyPillar6Title: string;
    whyPillar6Desc: string;
    whyChooseQuote: string;

    // Your Journey Starts Here
    journeyTitle: string;
    journeySubtitle: string;
    journeyStep1Title: string;
    journeyStep1Desc: string;
    journeyStep2Title: string;
    journeyStep2Desc: string;
    journeyStep3Title: string;
    journeyStep3Desc: string;
    journeyStep4Title: string;
    journeyStep4Desc: string;
    readyTitle: string;
    readyText: string;
    readyTagline: string;
    bookSessionBtn: string;
    sessionValues: string;
  };

  // Services Section
  services: {
    badge: string;
    heading: string;
    subheading: string;
    intro: string;
    whatYouGain: string;
    bookBtn: string;
    detailsBtn: string;
    modalTitle: string;
    modalWhoIsThisFor: string;
    modalDeliverables: string;
    modalBenefits: string;
    modalClose: string;
    modalBookNow: string;
    servicesExploreTitle: string;
    servicesExploreSubtitle: string;
    resonateTitle: string;
    resonateQuote: string;
  };

  // Numerology Calculator
  numerology: {
    badge: string;
    heading: string;
    subheading: string;
    intro: string;
    calculatorBoxTitle: string;
    calculatorBoxSubtitle: string;
    dobLabel: string;
    dobHint: string;
    nameLabel: string;
    namePlaceholder: string;
    nameHint: string;
    calculateBtn: string;
    mulankTitle: string;
    mulankSub: string;
    rulingPlanet: string;
    bhagyankTitle: string;
    bhagyankSub: string;
    nameVibration: string;
    compoundBreakdown: string;
    synergyTitle: string;
    luckyColors: string;
    luckyDays: string;
    element: string;
    sacredMantra: string;
    consultPoojaDesc: string;
    consultPoojaBtn: string;
  };

  // Tarot Guidance
  tarot: {
    badge: string;
    heading: string;
    subheading: string;
    drawSingleCard: string;
    drawThreeCards: string;
    drawNewCard: string;
    uprightEssence: string;
    divineGuidance: string;
    sacredAffirmation: string;
    symbolicArchetype: string;
    bookSession: string;
    past: string;
    present: string;
    future: string;
  };

  // Chakra Healing
  chakras: {
    badge: string;
    heading: string;
    subheading: string;
    intro: string;
    locationLabel: string;
    elementLabel: string;
    seedMantraLabel: string;
    balancedStateLabel: string;
    blockedSignsLabel: string;
    bookHealingCta: string;
  };

  // Testimonials
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
  };

  // FAQs
  faqs: {
    badge: string;
    heading: string;
    subheading: string;
    stillHaveQuestions: string;
    whatsappUs: string;
    emailUs: string;
  };

  // Booking Modal
  booking: {
    modalTitle: string;
    selectService: string;
    fullName: string;
    namePlaceholder: string;
    emailAddress: string;
    emailPlaceholder: string;
    phoneWhatsapp: string;
    phonePlaceholder: string;
    dob: string;
    preferredTime: string;
    timeMorning: string;
    timeAfternoon: string;
    timeEvening: string;
    notes: string;
    notesPlaceholder: string;
    cancel: string;
    confirmBooking: string;
    successTitle: string;
    close: string;
  };

  // Brand Customizer Modal
  customizer: {
    modalTitle: string;
    modalSubtitle: string;
    noteHeading: string;
    noteBody: string;
    brandNameEn: string;
    brandNameHi: string;
    secondaryBrand: string;
    optional: string;
    secondaryBrandPlaceholder: string;
    secondaryBrandHelp: string;
    taglineEn: string;
    taglineHi: string;
    whatsappContact: string;
    emailContact: string;
    websiteContact: string;
    locationContact: string;
    quickSuggestions: string;
    resetDefaults: string;
    cancel: string;
    saved: string;
    applyChanges: string;
  };

  // Footer
  footer: {
    brandNote: string;
    language: string;
    officialWebsite: string;
    quickLinks: string;
    servicesHeading: string;
    connectHeading: string;
    disclaimer: string;
    copyright: string;
  };
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function deepMerge<T extends Record<string, any>>(base: T, override: DeepPartial<T>): T {
  const result = { ...base };
  for (const key of Object.keys(override) as (keyof T)[]) {
    const val = override[key];
    if (val !== undefined) {
      if (val !== null && typeof val === 'object' && !Array.isArray(val) && typeof base[key] === 'object') {
        result[key] = deepMerge(base[key], val as any);
      } else {
        result[key] = val as any;
      }
    }
  }
  return result;
}
