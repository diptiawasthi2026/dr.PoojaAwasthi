import { Language } from '../types';
import { deepMerge } from './translations/types';
import {
  bnOverrides,
  teOverrides,
  mrOverrides,
  taOverrides,
  guOverrides,
  knOverrides,
  mlOverrides,
  paOverrides,
  orOverrides,
  urOverrides
} from './translations/indianLanguages';
import {
  esOverrides,
  frOverrides,
  deOverrides,
  arOverrides,
  ruOverrides
} from './translations/internationalLanguages';

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

const en: Translations = {
    nav: {
      services: 'Services',
      about: 'About Pooja Ji',
      numerology: 'Vedic Numerology',
      tarot: 'Tarot Guidance',
      chakras: 'Energy Chakras',
      testimonials: 'Testimonials',
      brandSettings: 'Brand Settings',
      bookConsultation: 'Book Consultation',
      languageToggle: 'हिन्दी',
      customBrandPrompt: 'Change Brand Name or Moniker'
    },
    hero: {
      badgeFounder: 'Founder: Pooja Awasthi',
      badgeRole: 'Spiritual Guidance & Sacred Alignment',
      defaultTagline: 'Discover Your Path. Transform Your Life.',
      subtitle: 'Vedic Numerology • Intuitive Tarot Reading • Subtle Energy Healing • Conscious Life Mentorship',
      bookCta: 'Book a Consultation',
      calculateCta: 'Calculate Vedic Numbers',
      confidentialTitle: '100% Confidential',
      confidentialDesc: 'Compassionate, consecrated and private one-on-one space.',
      practicalTitle: 'Vedic & Practical',
      practicalDesc: 'Grounded insights applicable directly to career, marriage and daily decisions.',
      virtualTitle: 'Global Virtual Access',
      virtualDesc: 'Connect worldwide via video call, phone, or audio consultations.'
    },
    about: {
      badge: 'Profile & Mission',
      welcomeTitle: 'Welcome to the Spiritual Sanctuary of Pooja Awasthi',
      founderRole: 'Spiritual Guide & Sacred Consultant',
      p1: 'Pooja Awasthi is a dedicated spiritual practitioner offering consultations in Vedic Numerology, Tarot Reading, Energy Healing, and Life Coaching.',
      p2: 'Through personalized guidance and a deeply compassionate approach, she helps individuals understand their life patterns, gain clarity, recognize their strengths, and move forward with conscious confidence.',
      p3: 'Her work blends ancient spiritual wisdom with grounded, practical life mentorship, supporting personal growth, self-discovery, and a harmonious approach to modern challenges.',
      p4: 'Discover your path and embrace your journey with Pooja Awasthi.',
      connectBtn: 'Connect with Pooja Ji',
      servicesBtn: 'Explore All Modalities',
      quoteBadge: '“Every soul enters this realm with a sacred cosmic blueprint. My purpose is helping you uncover it, clear the static, and step forward with joyful conviction.”',
      credential1: 'Vedic Numerologist & Chaldean Name Vibration Specialist',
      credential2: 'Intuitive Tarot & Symbolic Archetypal Consultant',
      credential3: 'Subtle Body Energy Cleanser & Chakra Harmonizer',
      credential4: 'Mindful Life Coach & Spiritual Mentor',
      pillar1Title: 'Safe & Sacred Space',
      pillar1Desc: 'Zero-judgment, fully confidential setting honoring every doubt, fear, and tender vulnerability.',
      pillar2Title: 'Vedic Root Analysis',
      pillar2Desc: 'Looking past symptoms to planetary cycles and karmic number patterns driving recurrent life events.',
      pillar3Title: 'Actionable Clarity',
      pillar3Desc: 'Spiritual insight is only complete when it translates into clear, actionable everyday decisions.',
      pillar4Title: 'Inner Empowerment',
      pillar4Desc: 'Returning the seat of authority to your own intuition rather than creating spiritual dependency.',
      tabBio: 'Founder: Dr. Pooja Awasthi',
      tabAwards: 'Awards & Honors',
      awardsBadge: 'Prestigious Honors & Felicitations',
      awardsTitle: 'Awards & National Recognition',
      awardsSubtitle: 'Celebrated across prestigious national assemblies, universities, and Vedic conclaves for exceptional contribution to Jyotish and spiritual mentorship.',
      awardsCount: '26 Photographic Honours',
      awardsCaptionPlaceholder: 'Photo caption space (blank)',
      awardsUploadPrompt: 'Drop your award photos here or click to select',
      awardsUploadSuccess: 'Photo updated successfully',
      awardsFilterAll: 'All Awards (26)',
      awardsFilterConclave: 'Conclaves & Convocations',
      awardsFilterFelicitation: 'Stage Felicitations',
      awardsFilterPress: 'Press & Media',
      awardsFilterMemento: 'Mementos & Trophies',
      awardsViewFull: 'View Full Resolution',
      awardsClose: 'Close Preview',

      // Meet Pooja Awasthi
      meetTitle: 'Meet Pooja Awasthi',
      meetSubtitle: 'Spiritual Guidance for Clarity, Growth & Self-Discovery',
      visionTitle: 'Her Vision',
      visionText: 'Supporting individuals in understanding their lives with greater awareness, confidence, and a positive perspective—so they can connect with their inner strength and make their personal journey truly meaningful.',
      visionQuote: 'Your journey is unique. Your answers are within. Let the right guidance illuminate your path.',

      // Our Philosophy
      philosophyTitle: 'Our Philosophy',
      philosophySubtitle: 'Guidance That Helps You Understand Yourself',
      philosophyBelief: 'We believe that the purpose of spiritual guidance is not to definitively predict the future, but to help understand the present with deeper clarity.',
      philosophyContext: 'Life presents us with countless questions regarding relationships, career, finances, personal growth, and major decisions. In these moments, Vedic Numerology, Tarot, and other spiritual modalities offer an opportunity to reflect on thoughts, emotions, and life patterns from a fresh perspective.',
      philosophyPillarsIntro: 'Our approach is grounded in three core pillars:',
      philClarityTitle: 'Clarity',
      philClarityDesc: 'Supporting you to understand your questions and circumstances from a fresh, illuminated perspective.',
      philAwarenessTitle: 'Self-Awareness',
      philAwarenessDesc: 'Recognizing your behaviors, strengths, life patterns, and innate inner potential with greater depth.',
      philEmpowermentTitle: 'Empowerment',
      philEmpowermentDesc: 'Encouraging you to reflect upon life choices and step forward with conscious confidence and autonomy.',
      philosophyDeepText: 'We believe guidance is truly meaningful when it connects an individual to personal responsibility and their own inner strength.',
      philosophyObjective: 'Our objective is not merely to hand out answers, but to accompany and support you on the sacred journey of understanding your own answers.',
      promiseTitle: 'Our Promise',
      promiseValues: 'Compassion. Clarity. Conscious Guidance.',
      promiseText: 'Every session is held with deep reverence, sensitivity, and personalized understanding.',
      promiseQuote: 'Understand your patterns. Connect with your inner wisdom. Move forward with clarity.',

      // Why Choose Pooja Awasthi?
      whyChooseTitle: 'Why Choose Pooja Awasthi?',
      whyChooseSubtitle: 'A Personalized Approach to Spiritual Guidance',
      whyChooseIntro: 'Every soul’s life journey is distinct. That is why our guidance approach is deeply personalized, compassionate, and insightful.',
      whyPillar1Title: 'Personalized Guidance',
      whyPillar1Desc: 'Guidance thoughtfully attuned to your unique questions, circumstances, and personal journey.',
      whyPillar2Title: 'Vedic Numerology',
      whyPillar2Desc: 'Understanding personality traits, tendencies, and cyclic life patterns through date of birth and vibrational numbers.',
      whyPillar3Title: 'Tarot Insights',
      whyPillar3Desc: 'An intuitive archetypal approach to illuminate current dynamics and uncover constructive perspectives through symbolic card messages.',
      whyPillar4Title: 'Holistic Perspective',
      whyPillar4Desc: 'Harmonizing Numerology, Tarot, Energy Healing, and Life Coaching within one integrated, grounded viewpoint.',
      whyPillar5Title: 'Compassionate & Confidential',
      whyPillar5Desc: 'Every session is conducted with highest respect, sensitive attunement, and absolute confidentiality.',
      whyPillar6Title: 'Empowerment-Focused',
      whyPillar6Desc: 'We do not impose decisions upon you; we facilitate clarity and self-awareness so you make your own choices with confident conviction.',
      whyChooseQuote: 'Your questions are personal. Your journey is unique. Your guidance should be too.',

      // Your Journey Starts Here
      journeyTitle: 'Your Journey Starts Here',
      journeySubtitle: 'A Simple, Personal & Meaningful Experience',
      journeyStep1Title: '01 — Share Your Question',
      journeyStep1Desc: 'Share the theme, question, or life area where you are seeking deeper clarity.',
      journeyStep2Title: '02 — Receive Personalized Guidance',
      journeyStep2Desc: 'Relevant spiritual tools and an attuned guidance methodology are tailored to your situation.',
      journeyStep3Title: '03 — Gain Perspective',
      journeyStep3Desc: 'Gain the opportunity to see your recurring patterns, hidden possibilities, and situation from an elevated vantage point.',
      journeyStep4Title: '04 — Move Forward With Clarity',
      journeyStep4Desc: 'Apply the insights toward your personal evolution, conscious alignment, and self-directed decision making.',
      readyTitle: 'Ready to Explore Your Path?',
      readyText: 'Sometimes all we need is a fresh perspective—so that the path which previously seemed unclear can be seen with pristine vision.',
      readyTagline: 'Begin your journey of self-discovery with Pooja Awasthi.',
      bookSessionBtn: 'Book Your Personal Guidance Session',
      sessionValues: 'Clarity • Self-Awareness • Empowerment'
    },
    services: {
      badge: 'Spiritual Offerings',
      heading: 'Our Services',
      subheading: 'Explore. Understand. Transform.',
      intro: 'Each consultation is customized to your unique vibrational blueprint, providing grounded clarity, remedial advice, and life-aligning transformation.',
      whatYouGain: 'What You Receive:',
      bookBtn: 'Book Consultation',
      detailsBtn: 'Explore Details',
      modalTitle: 'Modality In-Depth Details',
      modalWhoIsThisFor: 'Who Is This For:',
      modalDeliverables: 'Included in Session:',
      modalBenefits: 'Full Scope of Benefits:',
      modalClose: 'Close',
      modalBookNow: 'Book This Service',
      servicesExploreTitle: 'Our Services',
      servicesExploreSubtitle: 'Explore. Understand. Transform.',
      resonateTitle: 'Find the guidance that resonates with your journey.',
      resonateQuote: 'Explore your questions. Understand your patterns. Discover new perspectives.'
    },
    numerology: {
      badge: 'Interactive Vedic Engine',
      heading: 'Vedic Numerology Calculator',
      subheading: 'Calculate your Mulank (Driver) & Bhagyank (Conductor) Numbers',
      intro: 'Discover the planetary vibrations orchestrating your personality traits, karmic lessons, and ideal life path.',
      calculatorBoxTitle: 'Enter Your Birth Details',
      calculatorBoxSubtitle: 'Instant calculation based on ancient Vedic cosmic numerology principles.',
      dobLabel: 'Date of Birth',
      dobHint: 'Determines your Mulank (Driver/Birth number) & Bhagyank (Destiny number).',
      nameLabel: 'Full Name (Optional for Name Vibration)',
      namePlaceholder: 'e.g. Pooja Awasthi',
      nameHint: 'Calculates Chaldean compound vibrational frequency.',
      calculateBtn: 'Calculate Vedic Numbers',
      mulankTitle: 'Mulank (Birth / Driver)',
      mulankSub: 'Core Nature & Self',
      rulingPlanet: 'Ruling Planet',
      bhagyankTitle: 'Bhagyank (Destiny / Conductor)',
      bhagyankSub: 'Life Path & Karma',
      nameVibration: 'Name Vibration Number',
      compoundBreakdown: 'Chaldean Breakdown',
      synergyTitle: 'Planetary Synergy & Auspicious Guidance',
      luckyColors: 'Lucky Colors',
      luckyDays: 'Lucky Days',
      element: 'Element',
      sacredMantra: 'Harmonic Mantra',
      consultPoojaDesc: 'Looking for remedies, name-spelling optimization, or personal annual forecasting?',
      consultPoojaBtn: 'Book Complete Reading with Pooja Ji'
    },
    tarot: {
      badge: 'Intuitive Oracle',
      heading: 'Daily Tarot Card Guidance',
      subheading: 'Quiet your thoughts, set an intention, and draw your guidance card',
      drawSingleCard: 'Single Card Draw',
      drawThreeCards: 'Past • Present • Future Spread',
      drawNewCard: 'Draw Another Card',
      uprightEssence: 'Upright Essence',
      divineGuidance: 'Intuitive Guidance for You',
      sacredAffirmation: 'Daily Sacred Affirmation',
      symbolicArchetype: 'Cosmic Symbolism',
      bookSession: 'Book Personal Tarot Session',
      past: 'Past Influences',
      present: 'Present Energy',
      future: 'Upcoming Trajectory'
    },
    chakras: {
      badge: 'Subtle Body Wellness',
      heading: 'Energy Healing & Chakra Harmony',
      subheading: 'Restoring your biofield, clearing emotional blockages, and reviving vitality',
      intro: 'When your energy centers operate in harmony, physical vitality, mental clarity, and spiritual lightness naturally follow.',
      locationLabel: 'Location in Subtle Body',
      elementLabel: 'Governing Element',
      seedMantraLabel: 'Seed Bija Mantra',
      balancedStateLabel: 'Balanced Harmony State',
      blockedSignsLabel: 'Stagnant / Blocked Indicators',
      bookHealingCta: 'Schedule Energy Healing Session'
    },
    testimonials: {
      badge: 'Transformational Stories',
      heading: 'Client Words & Reflections',
      subheading: 'Real experiences of clarity, healing, and empowered transformation with Pooja Awasthi'
    },
    faqs: {
      badge: 'Clarifications & Questions',
      heading: 'Frequently Asked Questions',
      subheading: 'Everything you need to know about scheduling, confidentiality, and what to expect.',
      stillHaveQuestions: 'Still have questions or special requirements?',
      whatsappUs: 'WhatsApp Support',
      emailUs: 'Email Consultation Desk'
    },
    booking: {
      modalTitle: 'Schedule a Consultation',
      selectService: 'Select Service Modality',
      fullName: 'Your Full Name',
      namePlaceholder: 'Enter your name',
      emailAddress: 'Email Address',
      emailPlaceholder: 'astro.poojaofficial@gmail.com',
      phoneWhatsapp: 'WhatsApp / Phone Number',
      phonePlaceholder: '+91 91057 31969',
      dob: 'Date of Birth (Optional for Numerology)',
      preferredTime: 'Preferred Time Slot',
      timeMorning: 'Morning (10 AM - 1 PM)',
      timeAfternoon: 'Afternoon (2 PM - 5 PM)',
      timeEvening: 'Evening (6 PM - 9 PM)',
      notes: 'Specific Life Area or Question (Optional)',
      notesPlaceholder: 'e.g., Career timing, relationship alignment, chakra healing...',
      cancel: 'Cancel',
      confirmBooking: 'Confirm Request via WhatsApp',
      successTitle: 'Consultation Request Prepared!',
      close: 'Close Window'
    },
    customizer: {
      modalTitle: 'Branding Configuration',
      modalSubtitle: 'Customize brand name, Devanagari script, secondary tag, or contact details.',
      noteHeading: 'Bilingual Customizer',
      noteBody: 'Pooja ji\'s name and brand identity can be adapted in English and Hindi with immediate real-time synchronization.',
      brandNameEn: 'Primary Brand Name (English)',
      brandNameHi: 'Brand Name (Devanagari / हिन्दी)',
      secondaryBrand: 'Secondary Moniker / Sub-brand',
      optional: 'optional',
      secondaryBrandPlaceholder: 'e.g. Aura by Pooja Awasthi',
      secondaryBrandHelp: 'Appears elegantly below the primary moniker in navigation and footer.',
      taglineEn: 'Official Tagline (English)',
      taglineHi: 'Official Tagline (हिन्दी)',
      whatsappContact: 'WhatsApp Booking Number',
      emailContact: 'Official Consultation Email',
      websiteContact: 'Official Website URL',
      locationContact: 'Practice Location & Presence',
      quickSuggestions: 'Suggested Monikers',
      resetDefaults: 'Reset to Defaults',
      cancel: 'Cancel',
      saved: 'Saved Successfully!',
      applyChanges: 'Apply Changes'
    },
    footer: {
      brandNote: 'Spiritual guidance combining Vedic Numerology, Tarot Reading, Energy Healing and Life Coaching. Dedicated to helping seekers understand life patterns and move forward with conscious confidence.',
      language: 'Language',
      officialWebsite: 'Official Website',
      quickLinks: 'Quick Links',
      servicesHeading: 'Sacred Services',
      connectHeading: 'Direct Connection',
      disclaimer: 'Disclaimer: Consultations, numerology calculations, and intuitive readings provided by Pooja Awasthi are meant for personal reflection, spiritual insight, and conscious self-development. They do not substitute for licensed medical, psychiatric, financial, or legal counsel.',
      copyright: 'All rights reserved.'
    }
  };

const hi: Translations = {
    nav: {
      services: 'सेवाएं',
      about: 'पूजा जी के बारे में',
      numerology: 'वैदिक अंकशास्त्र',
      tarot: 'टैरो मार्गदर्शन',
      chakras: 'ऊर्जा चक्र',
      testimonials: 'साधक अनुभव',
      brandSettings: 'ब्रांड सेटिंग्स',
      bookConsultation: 'परामर्श बुक करें',
      languageToggle: 'English',
      customBrandPrompt: 'ब्रांड नाम या उप-शीर्षक बदलें'
    },
    hero: {
      badgeFounder: 'संस्थापक: डॉ. पूजा अवस्थी',
      badgeRole: 'आध्यात्मिक मार्गदर्शन एवं चेतना संतुलन',
      defaultTagline: 'अपना मार्ग पहचानें। अपना जीवन रूपांतरित करें।',
      subtitle: 'वैदिक अंकशास्त्र • अंतर्ज्ञानी टैरो रीडिंग • सूक्ष्म ऊर्जा उपचार • सजग जीवन मार्गदर्शन',
      bookCta: 'परामर्श बुक करें',
      calculateCta: 'वैदिक अंक गणना करें',
      confidentialTitle: '100% पूर्णतः गोपनीय',
      confidentialDesc: 'करुणामयी, पावन और सुरक्षित व्यक्तिगत परिवेश।',
      practicalTitle: 'प्राचीन एवं व्यावहारिक',
      practicalDesc: 'दैनिक जीवन के निर्णयों में लागू होने वाले सरल वैदिक उपाय।',
      virtualTitle: 'ऑनलाइन व विश्वव्यापी',
      virtualDesc: 'वीडियो कॉल, फ़ोन या ऑडियो संदेश द्वारा कहीं से भी जुड़ें।'
    },
    about: {
      badge: 'परिचय एवं पावन संकल्प',
      welcomeTitle: 'डॉ. पूजा अवस्थी की दुनिया में आपका स्वागत है',
      founderRole: 'आध्यात्मिक मार्गदर्शन विशेषज्ञ',
      p1: 'डॉ. पूजा अवस्थी एक आध्यात्मिक मार्गदर्शन विशेषज्ञ हैं जो वैदिक अंकशास्त्र (न्यूमेरोलॉजी), टैरो रीडिंग, ऊर्जा उपचार (एनर्जी हीलिंग) और जीवन मार्गदर्शन (लाइफ कोचिंग) की सेवाएं प्रदान करती हैं।',
      p2: 'व्यक्तिगत मार्गदर्शन और करुणामयी दृष्टिकोण के माध्यम से, वह लोगों को उनके जीवन के पैटर्न्स को समझने, स्पष्टता प्राप्त करने, उनकी आंतरिक शक्तियों को पहचानने और अधिक आत्मविश्वास के साथ आगे बढ़ने में मदद करती हैं।',
      p3: 'उनका कार्य आध्यात्मिक अंतर्दृष्टि और व्यावहारिक मार्गदर्शन का सुंदर संगम है, जो व्यक्तिगत विकास, आत्म-खोज और जीवन की चुनौतियों के प्रति अधिक सजग दृष्टिकोण का समर्थन करता है।',
      p4: 'डॉ. पूजा अवस्थी के साथ अपनी आत्मिक यात्रा का अन्वेषण करें।',
      connectBtn: 'पूजा जी से संपर्क करें',
      servicesBtn: 'सभी आध्यात्मिक सेवाएं देखें',
      quoteBadge: '“प्रत्येक आत्मा इस सृष्टि में एक अलौकिक ईश्वरीय योजना के साथ आती है। मेरा उद्देश्य आपको उसे समझने और आत्मविश्वास से जीने में सहायता करना है।”',
      credential1: 'वैदिक अंकशास्त्री एवं नाम कंपन विश्लेषक',
      credential2: 'अंतर्ज्ञानी टैरो एवं प्रतीकात्मक कार्ड रीडर',
      credential3: 'ऊर्जा उपचारक एवं सूक्ष्म चक्र हीलर',
      credential4: 'रूपांतरणकारी जीवन मार्गदर्शक (लाइफ कोच)',
      pillar1Title: 'करुणामयी सुरक्षित परिवेश',
      pillar1Desc: 'एक ऐसा निर्णय-मुक्त वातावरण जहाँ आपके भय, संशय और भावनाएं गहरी सहानुभूति और आत्मीयता के साथ स्वीकार की जाती हैं।',
      pillar2Title: 'वैदिक मूल विश्लेषण',
      pillar2Desc: 'ग्रहों के स्पंदन और अंक विन्यास के आधार पर यह समझना कि आपके जीवन में विशेष घटनाएं और परिस्थितियां बार-बार क्यों दोहराई जाती हैं।',
      pillar3Title: 'व्यावहारिक जीवन समन्वय',
      pillar3Desc: 'आध्यात्मिक ज्ञान का वास्तविक महत्व तभी है जब वह आपके रिश्तों, करियर निर्णयों और आत्म-सम्मान में सकारात्मक बदलाव लाए।',
      pillar4Title: 'आत्म-खोज व स्वावलंबन',
      pillar4Desc: 'आपकी निर्णय-शक्ति आपके हाथों में सौंपना ताकि आप किसी पर निर्भर रहने के बजाय स्वयं के विवेक और स्पष्टता से आगे बढ़ सकें।',
      tabBio: 'संस्थापक: डॉ. पूजा अवस्थी',
      tabAwards: 'पुरस्कार एवं सम्मान',
      awardsBadge: 'राष्ट्रीय एवं अन्तर्राष्ट्रीय सम्मान',
      awardsTitle: 'डॉ. पूजा अवस्थी के प्रमुख सम्मान व उपलब्धियां',
      awardsSubtitle: 'वैदिक ज्योतिष, अंकशास्त्र एवं आध्यात्मिक मार्गदर्शन में विशिष्ट योगदान हेतु प्रतिष्ठित मंचों, विश्वविद्यालयों एवं ज्योतिष महाकुंभ द्वारा अलंकृत।',
      awardsCount: '26 सम्मान एवं पावन संस्मरण',
      awardsCaptionPlaceholder: 'चित्र विवरण स्थान (रिक्त)',
      awardsUploadPrompt: 'अपने सम्मान चित्र यहाँ ड्रॉप करें या चयन करें',
      awardsUploadSuccess: 'चित्र सफलतापूर्वक सुरक्षित किया गया',
      awardsFilterAll: 'सभी सम्मान चित्र (26)',
      awardsFilterConclave: 'सम्मेलन एवं महाकुंभ',
      awardsFilterFelicitation: 'मंच सम्मान एवं अलंकरण',
      awardsFilterPress: 'समाचार एवं मीडिया',
      awardsFilterMemento: 'स्मृति चिन्ह व शील्ड',
      awardsViewFull: 'पूर्ण आकार में देखें',
      awardsClose: 'बंद करें',

      // Meet Pooja Awasthi
      meetTitle: 'Meet Pooja Awasthi',
      meetSubtitle: 'Spiritual Guidance for Clarity, Growth & Self-Discovery',
      visionTitle: 'Her Vision',
      visionText: 'लोगों को अपने जीवन को अधिक जागरूकता, आत्मविश्वास और सकारात्मक दृष्टिकोण के साथ समझने में सहयोग करना—ताकि वे अपनी आंतरिक शक्ति से जुड़ सकें और अपनी व्यक्तिगत यात्रा को अधिक अर्थपूर्ण बना सकें।',
      visionQuote: 'Your journey is unique. Your answers are within. Let the right guidance illuminate your path.',

      // Our Philosophy
      philosophyTitle: 'Our Philosophy',
      philosophySubtitle: 'Guidance That Helps You Understand Yourself',
      philosophyBelief: 'हमारा विश्वास है कि आध्यात्मिक मार्गदर्शन का उद्देश्य भविष्य को निश्चित रूप से बताना नहीं, बल्कि वर्तमान को अधिक स्पष्टता से समझने में सहायता करना है।',
      philosophyContext: 'जीवन में रिश्ते, करियर, वित्त, व्यक्तिगत विकास और महत्वपूर्ण निर्णयों से जुड़े अनेक प्रश्न हमारे सामने आते हैं। इन परिस्थितियों में वैदिक अंकशास्त्र, टैरो और अन्य आध्यात्मिक पद्धतियां व्यक्ति को अपने विचारों, भावनाओं और जीवन के पैटर्न्स पर एक अलग दृष्टिकोण से विचार करने का अवसर दे सकती हैं।',
      philosophyPillarsIntro: 'हमारी approach तीन मूल विचारों पर आधारित है:',
      philClarityTitle: 'Clarity',
      philClarityDesc: 'अपने प्रश्नों और परिस्थितियों को एक नए दृष्टिकोण से समझने में सहयोग।',
      philAwarenessTitle: 'Self-Awareness',
      philAwarenessDesc: 'अपने व्यवहार, strengths, patterns और inner potential को बेहतर तरीके से पहचानना।',
      philEmpowermentTitle: 'Empowerment',
      philEmpowermentDesc: 'अपने जीवन के विकल्पों पर स्वयं विचार करने और अधिक जागरूकता एवं आत्मविश्वास के साथ आगे बढ़ने के लिए प्रोत्साहित करना।',
      philosophyDeepText: 'हम मानते हैं कि guidance तभी meaningful बनती है जब वह व्यक्ति को अपने जीवन की जिम्मेदारी और अपनी आंतरिक शक्ति से जोड़ती है।',
      philosophyObjective: 'इसलिए हमारा उद्देश्य केवल answers देना नहीं, बल्कि आपको अपने answers को समझने की यात्रा में सहयोग देना है।',
      promiseTitle: 'Our Promise',
      promiseValues: 'Compassion. Clarity. Conscious Guidance.',
      promiseText: 'हर session को सम्मान, संवेदनशीलता और व्यक्तिगत समझ के साथ प्रस्तुत करने का प्रयास किया जाता है।',
      promiseQuote: 'Understand your patterns. Connect with your inner wisdom. Move forward with clarity.',

      // Why Choose Pooja Awasthi?
      whyChooseTitle: 'Why Choose Pooja Awasthi?',
      whyChooseSubtitle: 'A Personalized Approach to Spiritual Guidance',
      whyChooseIntro: 'हर व्यक्ति की जीवन-यात्रा अलग होती है। इसलिए हमारा guidance approach भी personalized, compassionate और insightful है।',
      whyPillar1Title: 'Personalized Guidance',
      whyPillar1Desc: 'आपके प्रश्न, परिस्थितियों और व्यक्तिगत journey को ध्यान में रखते हुए guidance प्रदान की जाती है।',
      whyPillar2Title: 'Vedic Numerology',
      whyPillar2Desc: 'जन्मतिथि और numerological patterns के माध्यम से आपके personality traits, tendencies और life patterns को समझने का प्रयास।',
      whyPillar3Title: 'Tarot Insights',
      whyPillar3Desc: 'Tarot cards के symbolic messages के माध्यम से वर्तमान परिस्थितियों और संभावित perspectives को समझने का एक intuitive approach।',
      whyPillar4Title: 'Holistic Perspective',
      whyPillar4Desc: 'Numerology, Tarot, Energy Healing और Life Coaching को एक holistic perspective के साथ समझने का प्रयास।',
      whyPillar5Title: 'Compassionate & Confidential',
      whyPillar5Desc: 'हर session को सम्मान, sensitivity और privacy के साथ संभालने का प्रयास किया जाता है।',
      whyPillar6Title: 'Empowerment-Focused',
      whyPillar6Desc: 'हमारा उद्देश्य आपके लिए decisions लेना नहीं, बल्कि आपको clarity और self-awareness प्राप्त करने में सहयोग देना है, ताकि आप अपने choices स्वयं अधिक confidence के साथ कर सकें।',
      whyChooseQuote: 'Your questions are personal. Your journey is unique. Your guidance should be too.',

      // Your Journey Starts Here
      journeyTitle: 'Your Journey Starts Here',
      journeySubtitle: 'A Simple, Personal & Meaningful Experience',
      journeyStep1Title: '01 — Share Your Question',
      journeyStep1Desc: 'अपने जीवन के उस विषय या प्रश्न को साझा करें जिस पर आप clarity चाहते हैं।',
      journeyStep2Title: '02 — Receive Personalized Guidance',
      journeyStep2Desc: 'आपकी situation के अनुसार relevant spiritual tools और guidance approach का उपयोग किया जाता है।',
      journeyStep3Title: '03 — Gain Perspective',
      journeyStep3Desc: 'अपने patterns, possibilities और situation को एक नए perspective से समझने का अवसर प्राप्त करें।',
      journeyStep4Title: '04 — Move Forward With Clarity',
      journeyStep4Desc: 'Guidance को अपने personal growth और conscious decision-making की दिशा में उपयोग करें।',
      readyTitle: 'Ready to Explore Your Path?',
      readyText: 'कभी-कभी हमें केवल एक नया perspective चाहिए होता है—ताकि जो रास्ता पहले unclear लग रहा था, उसे हम एक अलग दृष्टिकोण से देख सकें।',
      readyTagline: 'Begin your journey of self-discovery with Pooja Awasthi.',
      bookSessionBtn: 'Book Your Personal Guidance Session',
      sessionValues: 'Clarity • Self-Awareness • Empowerment'
    },
    services: {
      badge: 'आध्यात्मिक सेवाएं',
      heading: 'Our Services',
      subheading: 'Explore. Understand. Transform.',
      intro: 'प्रत्येक पद्धति को आपकी व्यक्तिगत ऊर्जा के अनुसार ढाला जाता है, जो सटीक स्पष्टता, वैदिक उपाय और जीवन में सकारात्मक रूपांतरण प्रदान करती है।',
      whatYouGain: 'आपको क्या प्राप्त होगा:',
      bookBtn: 'परामर्श बुक करें',
      detailsBtn: 'विस्तृत जानकारी देखें',
      modalTitle: 'सेवा का संपूर्ण विवरण',
      modalWhoIsThisFor: 'यह सेवा किसके लिए उपयुक्त है:',
      modalDeliverables: 'सत्र में क्या शामिल है:',
      modalBenefits: 'मुख्य लाभ एवं परिणाम:',
      modalClose: 'बंद करें',
      modalBookNow: 'यह सेवा बुक करें',
      servicesExploreTitle: 'Our Services',
      servicesExploreSubtitle: 'Explore. Understand. Transform.',
      resonateTitle: 'Find the guidance that resonates with your journey.',
      resonateQuote: 'Explore your questions. Understand your patterns. Discover new perspectives.'
    },
    numerology: {
      badge: 'इंटरएक्टिव वैदिक कैलकुलेटर',
      heading: 'वैदिक अंकशास्त्र कैलकुलेटर',
      subheading: 'अपना मूलांक (ड्राइवर) और भाग्यांक (कंडक्टर) अंक जानें',
      intro: 'अपनी जन्मतिथि के आधार पर उन ग्रहों के प्रभाव को समझें जो आपके स्वभाव, प्रतिभा और भाग्य को दिशा दे रहे हैं।',
      calculatorBoxTitle: 'अपनी जन्म जानकारी दर्ज करें',
      calculatorBoxSubtitle: 'प्राचीन भारतीय वैदिक अंकशास्त्र के नियमों पर आधारित तुरंत गणना।',
      dobLabel: 'जन्मतिथि',
      dobHint: 'यह आपके मूलांक (स्वभाव) और भाग्यांक (कर्म पथ) को निर्धारित करता है।',
      nameLabel: 'पूरा नाम (नाम कंपन विश्लेषण हेतु - वैकल्पिक)',
      namePlaceholder: 'जैसे: डॉ. पूजा अवस्थी',
      nameHint: 'चाल्डियन अंक प्रणाली द्वारा नाम के कंपन की गणना।',
      calculateBtn: 'अंकशास्त्र गणना करें',
      mulankTitle: 'मूलांक (जन्म अंक / स्वभाव)',
      mulankSub: 'मूल स्वभाव व चेतना',
      rulingPlanet: 'स्वामी ग्रह',
      bhagyankTitle: 'भाग्यांक (भाग्य अंक / कर्म पथ)',
      bhagyankSub: 'जीवन उद्देश्य व भाग्य',
      nameVibration: 'नाम कंपन अंक (नेम नंबर)',
      compoundBreakdown: 'चाल्डियन योग',
      synergyTitle: 'ग्रह तालमेल एवं शुभ मार्गदर्शन',
      luckyColors: 'शुभ रंग',
      luckyDays: 'शुभ दिन',
      element: 'तत्व',
      sacredMantra: 'सिद्ध बीज मंत्र',
      consultPoojaDesc: 'क्या आप शुभ रत्न, करियर का अनुकूल समय और वार्षिक भविष्यवाणी का विस्तृत विश्लेषण चाहते हैं?',
      consultPoojaBtn: 'पूजा जी के साथ संपूर्ण व्यक्तिगत अंकशास्त्र सत्र बुक करें'
    },
    tarot: {
      badge: 'अंतर्ज्ञानी टैरो दर्शन',
      heading: 'दैनिक टैरो कार्ड मार्गदर्शन',
      subheading: 'मन शांत करें, मन में एक विचार या प्रश्न रखें और अपना कार्ड चुनें',
      drawSingleCard: 'एकल कार्ड मार्गदर्शन',
      drawThreeCards: 'भूत • वर्तमान • भविष्य स्प्रेड',
      drawNewCard: 'नया कार्ड निकालें',
      uprightEssence: 'कार्ड का मुख्य भाव',
      divineGuidance: 'आपके लिए व्यक्तिगत मार्गदर्शन',
      sacredAffirmation: 'दैनिक पावन संकल्प (अफ़र्मेशन)',
      symbolicArchetype: 'प्रतीक एवं आध्यात्मिक रहस्य',
      bookSession: 'व्यक्तिगत टैरो सत्र बुक करें',
      past: 'अतीत का प्रभाव',
      present: 'वर्तमान ऊर्जा',
      future: 'भावी दिशा'
    },
    chakras: {
      badge: 'सूक्ष्म ऊर्जा संतुलन',
      heading: 'ऊर्जा उपचार एवं 7 चक्र संतुलन',
      subheading: 'शरीर की आभा (ऑरा) को शुद्ध करना, तनाव मिटाना और प्राण शक्ति को जगाना',
      intro: 'जब आपके 7 मुख्य ऊर्जा केंद्र संतुलित होते हैं, तब शारीरिक स्फूर्ति, मानसिक शांति और आत्मिक आनंद का सहज संचार होता है।',
      locationLabel: 'शरीर में स्थान',
      elementLabel: 'तत्व',
      seedMantraLabel: 'बीज मंत्र',
      balancedStateLabel: 'संतुलित अवस्था के लक्षण',
      blockedSignsLabel: 'असंतुलन या अवरोध के लक्षण',
      bookHealingCta: 'ऊर्जा उपचार सत्र बुक करें'
    },
    testimonials: {
      badge: 'सच्चे अनुभव',
      heading: 'साधकों के शब्द एवं विचार',
      subheading: 'डॉ. पूजा अवस्थी के मार्गदर्शन से जीवन में स्पष्टता, शांति और रूपांतरण पाने वालों के अनुभव'
    },
    faqs: {
      badge: 'सामान्य जिज्ञासाएं',
      heading: 'अक्सर पूछे जाने वाले प्रश्न (FAQs)',
      subheading: 'परामर्श की प्रक्रिया, गोपनीयता और सत्र के बारे में आवश्यक जानकारी।',
      stillHaveQuestions: 'क्या आपका कोई विशेष प्रश्न या संदेह शेष है?',
      whatsappUs: 'व्हाट्सएप पर पूछें',
      emailUs: 'ईमेल परामर्श डेस्क'
    },
    booking: {
      modalTitle: 'व्यक्तिगत परामर्श का समय चुनें',
      selectService: 'सेवा का चयन करें',
      fullName: 'आपका पूरा नाम',
      namePlaceholder: 'अपना नाम दर्ज करें',
      emailAddress: 'ईमेल पता',
      emailPlaceholder: 'astro.poojaofficial@gmail.com',
      phoneWhatsapp: 'व्हाट्सएप / फ़ोन नंबर',
      phonePlaceholder: '+91 91057 31969',
      dob: 'जन्मतिथि (अंकशास्त्र हेतु वैकल्पिक)',
      preferredTime: 'पसंदीदा समय',
      timeMorning: 'प्रातःकाल (10 AM - 1 PM)',
      timeAfternoon: 'दोपहर (2 PM - 5 PM)',
      timeEvening: 'सायंकाल (6 PM - 9 PM)',
      notes: 'कोई विशेष प्रश्न या विषय (वैकल्पिक)',
      notesPlaceholder: 'जैसे: करियर में निर्णय, रिश्तों में सामंजस्य, चक्र हीलिंग...',
      cancel: 'रद्द करें',
      confirmBooking: 'व्हाट्सएप पर अनुरोध भेजें',
      successTitle: 'परामर्श अनुरोध तैयार है!',
      close: 'खिड़की बंद करें'
    },
    customizer: {
      modalTitle: 'वेबसाइट ब्रांड सेटिंग्स',
      modalSubtitle: 'पूजा जी का नाम, हिन्दी लिपि, उप-शीर्षक या संपर्क विवरण अनुकूलित करें।',
      noteHeading: 'द्विभाषी ब्रांड कस्टमाइज़र',
      noteBody: 'पूजा जी का नाम और ब्रांड पहचान अंग्रेजी और हिन्दी दोनों में तुरंत वास्तविक समय में अपडेट होती है।',
      brandNameEn: 'प्राथमिक ब्रांड नाम (English)',
      brandNameHi: 'ब्रांड नाम (देवनागरी / हिन्दी)',
      secondaryBrand: 'दूसरा ब्रांड नाम / उप-शीर्षक',
      optional: 'वैकल्पिक',
      secondaryBrandPlaceholder: 'जैसे: ऑरा - डॉ. पूजा अवस्थी',
      secondaryBrandHelp: 'यह नेविगेशन और फुटर में मुख्य नाम के ठीक नीचे प्रदर्शित होता है।',
      taglineEn: 'आधिकारिक टैगलाइन (English)',
      taglineHi: 'आधिकारिक टैगलाइन (हिन्दी)',
      whatsappContact: 'व्हाट्सएप बुकिंग नंबर',
      emailContact: 'आधिकारिक परामर्श ईमेल',
      websiteContact: 'आधिकारिक वेबसाइट लिंक',
      locationContact: 'परामर्श स्थल एवं केंद्र',
      quickSuggestions: 'सुझाए गए ब्रांड विकल्प',
      resetDefaults: 'मूल रूप में रीसेट करें',
      cancel: 'रद्द करें',
      saved: 'सफलतापूर्वक सहेजा गया!',
      applyChanges: 'बदलाव लागू करें'
    },
    footer: {
      brandNote: 'वैदिक अंकशास्त्र, टैरो रीडिंग, ऊर्जा उपचार और लाइफ कोचिंग का अनुपम संगम। साधकों को अपने जीवन के पैटर्न्स समझने और सजग आत्मविश्वास के साथ आगे बढ़ने में सहायता प्रदान करना।',
      language: 'भाषा',
      officialWebsite: 'आधिकारिक वेबसाइट',
      quickLinks: 'त्वरित लिंक',
      servicesHeading: 'आध्यात्मिक सेवाएं',
      connectHeading: 'सीधा संपर्क',
      disclaimer: 'अस्वीकरण: डॉ. पूजा अवस्थी द्वारा प्रदान किया गया परामर्श, अंकशास्त्र गणना और आध्यात्मिक मार्गदर्शन व्यक्तिगत समझ, आत्म-चिंतन और मानसिक स्पष्टता के उद्देश्य से है। यह किसी भी कानूनी, वित्तीय या चिकित्सीय सलाह का विकल्प नहीं है।',
      copyright: 'सर्वाधिकार सुरक्षित।'
    }
  };

export const TRANSLATIONS: Record<Language, Translations> = {
  en,
  hi,
  bn: deepMerge(hi, bnOverrides),
  te: deepMerge(hi, teOverrides),
  mr: deepMerge(hi, mrOverrides),
  ta: deepMerge(hi, taOverrides),
  gu: deepMerge(hi, guOverrides),
  kn: deepMerge(hi, knOverrides),
  ml: deepMerge(hi, mlOverrides),
  pa: deepMerge(hi, paOverrides),
  or: deepMerge(hi, orOverrides),
  ur: deepMerge(hi, urOverrides),
  es: deepMerge(en, esOverrides),
  fr: deepMerge(en, frOverrides),
  de: deepMerge(en, deOverrides),
  ar: deepMerge(en, arOverrides),
  ru: deepMerge(en, ruOverrides),
};
