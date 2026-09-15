export type Language = 'en' | 'hi';

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
    quickLinks: string;
    servicesHeading: string;
    connectHeading: string;
    disclaimer: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
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
      pillar4Desc: 'Returning the seat of authority to your own intuition rather than creating spiritual dependency.'
    },
    services: {
      badge: 'Spiritual Offerings',
      heading: 'Sacred Services & Consultations',
      subheading: 'Numerology • Tarot Reading • Energy Healing • Life Coaching by Pooja Awasthi',
      intro: 'Each consultation is customized to your unique vibrational blueprint, providing grounded clarity, remedial advice, and life-aligning transformation.',
      whatYouGain: 'What You Receive:',
      bookBtn: 'Book Consultation',
      detailsBtn: 'Explore Details',
      modalTitle: 'Modality In-Depth Details',
      modalWhoIsThisFor: 'Who Is This For:',
      modalDeliverables: 'Included in Session:',
      modalBenefits: 'Full Scope of Benefits:',
      modalClose: 'Close',
      modalBookNow: 'Book This Service'
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
      emailPlaceholder: 'you@example.com',
      phoneWhatsapp: 'WhatsApp / Phone Number',
      phonePlaceholder: '+91 98765 43210',
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
      quickSuggestions: 'Suggested Monikers',
      resetDefaults: 'Reset to Defaults',
      cancel: 'Cancel',
      saved: 'Saved Successfully!',
      applyChanges: 'Apply Changes'
    },
    footer: {
      brandNote: 'Spiritual guidance combining Vedic Numerology, Tarot Reading, Energy Healing and Life Coaching. Dedicated to helping seekers understand life patterns and move forward with conscious confidence.',
      language: 'Language',
      quickLinks: 'Quick Links',
      servicesHeading: 'Sacred Services',
      connectHeading: 'Direct Connection',
      disclaimer: 'Disclaimer: Consultations, numerology calculations, and intuitive readings provided by Pooja Awasthi are meant for personal reflection, spiritual insight, and conscious self-development. They do not substitute for licensed medical, psychiatric, financial, or legal counsel.',
      copyright: 'All rights reserved.'
    }
  },

  hi: {
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
      badgeFounder: 'संस्थापक: पूजा अवस्थी',
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
      welcomeTitle: 'पूजा अवस्थी की दुनिया में आपका स्वागत है',
      founderRole: 'आध्यात्मिक मार्गदर्शन विशेषज्ञ',
      p1: 'पूजा अवस्थी एक आध्यात्मिक मार्गदर्शन विशेषज्ञ हैं जो वैदिक अंकशास्त्र (न्यूमेरोलॉजी), टैरो रीडिंग, ऊर्जा उपचार (एनर्जी हीलिंग) और जीवन मार्गदर्शन (लाइफ कोचिंग) की सेवाएं प्रदान करती हैं।',
      p2: 'व्यक्तिगत मार्गदर्शन और करुणामयी दृष्टिकोण के माध्यम से, वह लोगों को उनके जीवन के पैटर्न्स को समझने, स्पष्टता प्राप्त करने, उनकी आंतरिक शक्तियों को पहचानने और अधिक आत्मविश्वास के साथ आगे बढ़ने में मदद करती हैं।',
      p3: 'उनका कार्य आध्यात्मिक अंतर्दृष्टि और व्यावहारिक मार्गदर्शन का सुंदर संगम है, जो व्यक्तिगत विकास, आत्म-खोज और जीवन की चुनौतियों के प्रति अधिक सजग दृष्टिकोण का समर्थन करता है।',
      p4: 'पूजा अवस्थी के साथ अपनी आत्मिक यात्रा का अन्वेषण करें।',
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
      pillar4Desc: 'आपकी निर्णय-शक्ति आपके हाथों में सौंपना ताकि आप किसी पर निर्भर रहने के बजाय स्वयं के विवेक और स्पष्टता से आगे बढ़ सकें।'
    },
    services: {
      badge: 'आध्यात्मिक सेवाएं',
      heading: 'सेवाएं एवं पावन पद्धतियां',
      subheading: 'अंकशास्त्र • टैरो रीडिंग • ऊर्जा उपचार • लाइफ कोचिंग — पूजा अवस्थी द्वारा',
      intro: 'प्रत्येक पद्धति को आपकी व्यक्तिगत ऊर्जा के अनुसार ढाला जाता है, जो सटीक स्पष्टता, वैदिक उपाय और जीवन में सकारात्मक रूपांतरण प्रदान करती है।',
      whatYouGain: 'आपको क्या प्राप्त होगा:',
      bookBtn: 'परामर्श बुक करें',
      detailsBtn: 'विस्तृत जानकारी देखें',
      modalTitle: 'सेवा का संपूर्ण विवरण',
      modalWhoIsThisFor: 'यह सेवा किसके लिए उपयुक्त है:',
      modalDeliverables: 'सत्र में क्या शामिल है:',
      modalBenefits: 'मुख्य लाभ एवं परिणाम:',
      modalClose: 'बंद करें',
      modalBookNow: 'यह सेवा बुक करें'
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
      namePlaceholder: 'जैसे: पूजा अवस्थी',
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
      subheading: 'पूजा अवस्थी के मार्गदर्शन से जीवन में स्पष्टता, शांति और रूपांतरण पाने वालों के अनुभव'
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
      emailPlaceholder: 'you@example.com',
      phoneWhatsapp: 'व्हाट्सएप / फ़ोन नंबर',
      phonePlaceholder: '+91 98765 43210',
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
      secondaryBrandPlaceholder: 'जैसे: ऑरा - पूजा अवस्थी',
      secondaryBrandHelp: 'यह नेविगेशन और फुटर में मुख्य नाम के ठीक नीचे प्रदर्शित होता है।',
      taglineEn: 'आधिकारिक टैगलाइन (English)',
      taglineHi: 'आधिकारिक टैगलाइन (हिन्दी)',
      whatsappContact: 'व्हाट्सएप बुकिंग नंबर',
      emailContact: 'आधिकारिक परामर्श ईमेल',
      quickSuggestions: 'सुझाए गए ब्रांड विकल्प',
      resetDefaults: 'मूल रूप में रीसेट करें',
      cancel: 'रद्द करें',
      saved: 'सफलतापूर्वक सहेजा गया!',
      applyChanges: 'बदलाव लागू करें'
    },
    footer: {
      brandNote: 'वैदिक अंकशास्त्र, टैरो रीडिंग, ऊर्जा उपचार और लाइफ कोचिंग का अनुपम संगम। साधकों को अपने जीवन के पैटर्न्स समझने और सजग आत्मविश्वास के साथ आगे बढ़ने में सहायता प्रदान करना।',
      language: 'भाषा',
      quickLinks: 'त्वरित लिंक',
      servicesHeading: 'आध्यात्मिक सेवाएं',
      connectHeading: 'सीधा संपर्क',
      disclaimer: 'अस्वीकरण: पूजा अवस्थी द्वारा प्रदान किया गया परामर्श, अंकशास्त्र गणना और आध्यात्मिक मार्गदर्शन व्यक्तिगत समझ, आत्म-चिंतन और मानसिक स्पष्टता के उद्देश्य से है। यह किसी भी कानूनी, वित्तीय या चिकित्सीय सलाह का विकल्प नहीं है।',
      copyright: 'सर्वाधिकार सुरक्षित।'
    }
  }
};
