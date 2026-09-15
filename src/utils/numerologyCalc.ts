import { VEDIC_NUMBERS_DATA } from '../data/spiritualData';

// Chaldean number mapping for letters
const CHALDEAN_MAP: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

export function reduceToSingleDigit(num: number): number {
  if (num <= 0) return 1;
  while (num > 9) {
    let sum = 0;
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i], 10);
    }
    num = sum;
  }
  return num;
}

export function calculateMulank(day: number): number {
  return reduceToSingleDigit(day);
}

export function calculateBhagyank(day: number, month: number, year: number): number {
  const sum = day + month + year;
  return reduceToSingleDigit(sum);
}

export function calculateNameNumber(name: string): { number: number; breakdown: string } {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  if (!cleanName) return { number: 0, breakdown: '' };

  let total = 0;
  for (let i = 0; i < cleanName.length; i++) {
    const char = cleanName[i];
    total += CHALDEAN_MAP[char] || 0;
  }

  const singleDigit = reduceToSingleDigit(total);
  return {
    number: singleDigit,
    breakdown: `Compound ${total} -> Single ${singleDigit}`
  };
}

export function getVedicAnalysis(day: number, month: number, year: number, name?: string) {
  const mulank = calculateMulank(day);
  const bhagyank = calculateBhagyank(day, month, year);
  const nameResult = name ? calculateNameNumber(name) : null;

  const mulankData = VEDIC_NUMBERS_DATA[mulank] || VEDIC_NUMBERS_DATA[1];
  const bhagyankData = VEDIC_NUMBERS_DATA[bhagyank] || VEDIC_NUMBERS_DATA[1];

  // Check harmony between Mulank and Bhagyank
  const isHarmonious = mulankData.friendlyNumbers.includes(bhagyank);
  const isChallenging = mulankData.challengingNumbers.includes(bhagyank);

  let dynamicHarmony = 'Balanced Dynamic: Your personal nature and destiny flow in quiet cooperative harmony.';
  let dynamicHarmony_hi = 'संतुलित समन्वय: आपका स्वाभाविक स्वभाव और भाग्य शांत सामंजस्य के साथ आगे बढ़ते हैं।';

  if (isHarmonious) {
    dynamicHarmony = 'Highly Auspicious Synergy: Your Mulank and Bhagyank are cosmic allies, accelerating ease and alignment in life goals.';
    dynamicHarmony_hi = 'अत्यंत शुभ संयोजन: आपका मूलांक और भाग्यांक आपस में मित्र हैं, जो जीवन के लक्ष्यों में सुगमता और सफलता प्रदान करते हैं।';
  } else if (isChallenging) {
    dynamicHarmony = 'Dynamic Karmic Catalyst: Your internal inclinations and external life lessons stimulate profound character growth and resilience.';
    dynamicHarmony_hi = 'कल्याणकारी कर्म उत्प्रेरक: आपकी आंतरिक इच्छाएं और जीवन के अनुभव आपको तपाकर अधिक दृढ़, परिपक्व और आत्मविश्वासी बनाते हैं।';
  }

  return {
    mulank,
    bhagyank,
    mulankData,
    bhagyankData,
    nameResult,
    dynamicHarmony,
    dynamicHarmony_hi
  };
}
