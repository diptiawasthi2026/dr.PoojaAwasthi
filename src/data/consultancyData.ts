export interface ConsultancyServiceItem {
  id: string;
  number?: number;
  title: string;
  title_en: string;
  fee: number;
  feeFormatted: string;
  duration?: string;
  duration_en?: string;
  description: string;
  description_en: string;
  note?: string;
  note_en?: string;
  importantDisclaimer?: string;
  importantDisclaimer_en?: string;
  category: 'consultation' | 'healing' | 'numerology' | 'therapy' | 'regression';
  categoryLabel_hi: string;
  categoryLabel_en: string;
  badge?: string;
  badge_en?: string;
}

export interface BankPaymentDetails {
  upiId: string;
  accountHolderName: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  accountType: string;
  branch: string;
  scannerImageUrl: string;
  customNotes?: string;
}

export const GENERAL_CONSULTANCY: ConsultancyServiceItem = {
  id: 'general-consultancy',
  title: 'परामर्श शुल्क (व्यक्तिगत सत्र)',
  title_en: 'Personalized Spiritual Consultation',
  fee: 5100,
  feeFormatted: '₹5,100',
  duration: '45-60 मिनट',
  duration_en: '45-60 mins',
  description: 'परामर्श सत्र में व्यक्ति के प्रश्नों, परिस्थितियों और आवश्यकताओं को समझकर व्यक्तिगत मार्गदर्शन प्रदान किया जाता है।',
  description_en: 'A personalized 1-on-1 consultation session dedicated to understanding your queries, life circumstances, and life path through Vedic wisdom.',
  category: 'consultation',
  categoryLabel_hi: 'प्रमुख परामर्श',
  categoryLabel_en: 'Core Consultation',
  badge: 'सर्वाधिक लोकप्रिय',
  badge_en: 'Most Popular'
};

export const CONSULTANCY_SERVICES: ConsultancyServiceItem[] = [
  {
    id: 'aura-cleaning',
    number: 1,
    title: 'ऑरा क्लीनिंग',
    title_en: 'Aura Cleaning',
    fee: 3100,
    feeFormatted: '₹3,100',
    duration: '20 मिनट',
    duration_en: '20 minutes',
    description: 'ऑरा क्लीनिंग एक आध्यात्मिक अभ्यास है, जिसमें व्यक्ति की ऊर्जा और आंतरिक संतुलन पर ध्यान केंद्रित किया जाता है। इसका उद्देश्य सकारात्मकता, शांति और आत्म-जागरूकता को बढ़ावा देना है।',
    description_en: 'Aura cleaning is a sacred spiritual practice focusing on subtle energy balance, cleansing lingering dense energies to cultivate positivity, serenity, and inner awareness.',
    category: 'healing',
    categoryLabel_hi: 'ऊर्जा एवं हीलिंग',
    categoryLabel_en: 'Energy & Healing'
  },
  {
    id: 'negativity-healing',
    number: 2,
    title: 'नकारात्मकता हीलिंग',
    title_en: 'Negativity Healing',
    fee: 5100,
    feeFormatted: '₹5,100',
    duration: '30 मिनट',
    duration_en: '30 minutes',
    description: 'यह सत्र व्यक्ति को नकारात्मक विचारों, भावनात्मक तनाव और मानसिक बोझ पर सजगता से काम करने में सहयोग प्रदान करता है। इसमें सकारात्मक सोच और आंतरिक शांति से जुड़ी आध्यात्मिक प्रक्रियाओं का उपयोग किया जा सकता है।',
    description_en: 'This session assists in consciously dissipating negative thought patterns, emotional residue, and mental heaviness using harmonizing spiritual techniques.',
    category: 'healing',
    categoryLabel_hi: 'ऊर्जा एवं हीलिंग',
    categoryLabel_en: 'Energy & Healing'
  },
  {
    id: 'chakra-healing',
    number: 3,
    title: 'चक्र हीलिंग (7 दिवसीय गहन अनुष्ठान)',
    title_en: 'Chakra Healing (7-Day Intensive)',
    fee: 31000,
    feeFormatted: '₹31,000',
    duration: '7 दिन',
    duration_en: '7 Days',
    description: 'चक्र हीलिंग में शरीर के ऊर्जा केंद्रों पर ध्यान, ध्यान-साधना और अन्य ऊर्जा-आधारित अभ्यासों के माध्यम से कार्य किया जाता है। इसका उद्देश्य आंतरिक संतुलन, आत्म-जागरूकता और आध्यात्मिक विकास को सहयोग देना है।',
    description_en: 'An intensive 7-day deep vibrational alignment addressing the 7 prime subtle chakras through meditation, sacred resonance, and transformative energy work.',
    category: 'healing',
    categoryLabel_hi: 'ऊर्जा एवं हीलिंग',
    categoryLabel_en: 'Energy & Healing',
    badge: 'गहन अनुष्ठान (7 दिन)',
    badge_en: '7-Day Intensive'
  },
  {
    id: 'mobile-number-correction',
    number: 4,
    title: 'मोबाइल नंबर करेक्शन',
    title_en: 'Mobile Number Numerology Correction',
    fee: 5100,
    feeFormatted: '₹5,100',
    description: 'अंकशास्त्र के माध्यम से मोबाइल नंबर के अंकों और उनके प्रतीकात्मक अर्थों का अध्ययन किया जाता है। इस सेवा में व्यक्ति की आवश्यकताओं के अनुसार अंक संबंधी मार्गदर्शन प्रदान किया जाता है।',
    description_en: 'Vedic numerological analysis of your mobile digits and vibrational frequencies to guide auspicious number combinations aligned with career and wealth.',
    category: 'numerology',
    categoryLabel_hi: 'अंकशास्त्र शुद्धि',
    categoryLabel_en: 'Numerological Correction'
  },
  {
    id: 'name-correction',
    number: 5,
    title: 'नाम करेक्शन',
    title_en: 'Name Spelling & Numerology Correction',
    fee: 1100,
    feeFormatted: '₹1,100',
    description: 'नाम के अक्षरों और अंकों का अंकशास्त्रीय अध्ययन करके नाम से जुड़े numerological patterns को समझने में सहायता की जाती है। नोट में ₹1,100 की राशि निर्धारित है।',
    description_en: 'Comprehensive study of name syllables and compound vibrations to synchronize your name frequency with your Mulank and Bhagyank destiny rulers.',
    category: 'numerology',
    categoryLabel_hi: 'अंकशास्त्र शुद्धि',
    categoryLabel_en: 'Numerological Correction'
  },
  {
    id: 'relationship-healing',
    number: 6,
    title: 'रिलेशनशिप हीलिंग',
    title_en: 'Relationship & Harmony Healing',
    fee: 11000,
    feeFormatted: '₹11,000',
    description: 'यह सत्र रिश्तों में उत्पन्न भावनात्मक तनाव, संवाद की चुनौतियों और व्यक्तिगत भावनाओं को समझने के लिए आध्यात्मिक एवं आत्म-जागरूकता आधारित मार्गदर्शन प्रदान करता है।',
    description_en: 'Spiritual and awareness-based guidance to heal emotional discord, bridge communication barriers, and restore mutual compassion in relationships.',
    category: 'healing',
    categoryLabel_hi: 'ऊर्जा एवं हीलिंग',
    categoryLabel_en: 'Energy & Healing'
  },
  {
    id: 'sound-healing',
    number: 7,
    title: 'साउंड हीलिंग',
    title_en: 'Sacred Sound Healing',
    fee: 11000,
    feeFormatted: '₹11,000',
    description: 'साउंड हीलिंग में ध्वनि, संगीत, मंत्र या अन्य ध्वनि-आधारित अभ्यासों का उपयोग विश्राम, ध्यान और आंतरिक शांति के लिए किया जाता है।',
    description_en: 'Harnessing sacred sound frequencies, singing bowls, resonant bells, and Vedic mantras to induce profound meditative states, cellular relaxation, and mental clarity.',
    category: 'healing',
    categoryLabel_hi: 'ऊर्जा एवं हीलिंग',
    categoryLabel_en: 'Energy & Healing'
  },
  {
    id: 'mind-body-relaxation',
    number: 8,
    title: 'माइंड एवं बॉडी रिलैक्सेशन थेरेपी',
    title_en: 'Mind & Body Relaxation Therapy',
    fee: 5100,
    feeFormatted: '₹5,100',
    description: 'यह सत्र शरीर और मन को विश्राम देने, तनाव कम करने तथा ध्यान और श्वास संबंधी अभ्यासों के माध्यम से आत्म-जागरूकता बढ़ाने पर केंद्रित होता है।',
    description_en: 'A guided therapeutic session centering on somatic de-stressing, conscious breathwork (Pranayama), and deep tranquility for nervous system reset.',
    category: 'therapy',
    categoryLabel_hi: 'मानसिक संतुलन व थेरेपी',
    categoryLabel_en: 'Mind Balance & Therapy'
  },
  {
    id: 'anxiety-depression-support',
    number: 9,
    title: 'एंग्जायटी एवं डिप्रेशन सपोर्ट थेरेपी',
    title_en: 'Anxiety & Emotional Support Therapy',
    fee: 5100,
    feeFormatted: '₹5,100',
    description: 'यह सेवा भावनात्मक तनाव, चिंता और उदासी से जूझ रहे व्यक्तियों को supportive guidance प्रदान करने के लिए है। इसमें ध्यान, विश्राम और आत्म-जागरूकता संबंधी अभ्यास शामिल किए जा सकते हैं।',
    description_en: 'Supportive spiritual mentorship cultivating mindfulness, calm grounding, and emotional resilience for those navigating anxiety or prolonged low moods.',
    importantDisclaimer: 'महत्वपूर्ण: यह सेवा मानसिक स्वास्थ्य संबंधी चिकित्सकीय उपचार का विकल्प नहीं है। चिंता या अवसाद के लक्षण होने पर योग्य मानसिक स्वास्थ्य विशेषज्ञ से परामर्श लेना आवश्यक है।',
    importantDisclaimer_en: 'Important: This service is for spiritual and mindful support and is not a substitute for clinical medical treatment or psychiatric care.',
    category: 'therapy',
    categoryLabel_hi: 'मानसिक संतुलन व थेरेपी',
    categoryLabel_en: 'Mind Balance & Therapy'
  },
  {
    id: 'plr-session',
    number: 10,
    title: 'पीएलआर सेशन (Past Life Regression)',
    title_en: 'Past Life Regression (PLR) Session',
    fee: 15000,
    feeFormatted: '₹15,000',
    description: 'Past Life Regression (पिछले जन्मों से संबंधित आध्यात्मिक अनुभवों का अन्वेषण)। इस सत्र में व्यक्ति के अनुभवों, भावनाओं और आध्यात्मिक मान्यताओं पर ध्यान केंद्रित किया जाता है।',
    description_en: 'Past Life Regression spiritual exploration delving into soul impressions, karmic patterns, and deep subconscious emotional layers.',
    note: 'Past Life Regression को एक आध्यात्मिक या कल्पनात्मक अभ्यास के रूप में समझना उचित है; इसके अनुभवों को प्रमाणित पिछले जन्मों की वास्तविक स्मृतियां नहीं माना जाना चाहिए।',
    note_en: 'PLR is understood as a spiritual meditative exploration of subconscious patterns and inner symbols rather than verified historic memories.',
    category: 'regression',
    categoryLabel_hi: 'गहन आत्म-अन्वेषण',
    categoryLabel_en: 'Deep Soul Exploration',
    badge: 'विशेष सत्र',
    badge_en: 'Specialized Session'
  },
  {
    id: 'mind-peace-therapy',
    number: 11,
    title: 'माइंड पीस थेरेपी',
    title_en: 'Mind Peace Therapy',
    fee: 5100,
    feeFormatted: '₹5,100',
    description: 'यह सेवा ध्यान, विश्राम और आत्म-जागरूकता आधारित अभ्यासों के माध्यम से आंतरिक शांति और भावनात्मक संतुलन की दिशा में सहयोग प्रदान करती है।',
    description_en: 'Gentle meditative practices focused on quieting overactive mental chatter, cultivating enduring peace, and restoring emotional equilibrium.',
    category: 'therapy',
    categoryLabel_hi: 'मानसिक संतुलन व थेरेपी',
    categoryLabel_en: 'Mind Balance & Therapy'
  }
];

export const DEFAULT_BANK_DETAILS: BankPaymentDetails = {
  upiId: '9105731969@okaxis',
  accountHolderName: 'Dr. Pooja Awasthi',
  bankName: 'State Bank of India',
  accountNumber: '38920194857',
  ifscCode: 'SBIN0001234',
  accountType: 'Savings Account',
  branch: 'Dehradun Main Branch, Uttarakhand',
  scannerImageUrl: '', // Users can upload or enter custom QR code URL
  customNotes: 'कृपया भुगतान पूर्ण होने के उपरांत स्क्रीनशॉट व्हाट्सएप (+91 91057 31969) पर प्रेषित करें।'
};

const BANK_STORAGE_KEY = 'pooja_awasthi_bank_payment_details';

export function getSavedBankDetails(): BankPaymentDetails {
  try {
    const saved = localStorage.getItem(BANK_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_BANK_DETAILS, ...parsed };
    }
  } catch (e) {
    console.error('Error reading bank details', e);
  }
  return DEFAULT_BANK_DETAILS;
}

export function saveBankDetails(details: BankPaymentDetails): void {
  try {
    localStorage.setItem(BANK_STORAGE_KEY, JSON.stringify(details));
  } catch (e) {
    console.error('Error saving bank details', e);
  }
}
