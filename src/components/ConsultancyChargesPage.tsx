import React, { useState, useEffect, useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import {
  CONSULTANCY_SERVICES,
  GENERAL_CONSULTANCY,
  ConsultancyServiceItem,
  BankPaymentDetails,
  getSavedBankDetails,
  saveBankDetails
} from '../data/consultancyData';
import { SpiritualLotusIcon } from './SacredMandala';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Check,
  Copy,
  QrCode,
  CreditCard,
  Building2,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  MessageCircle,
  Upload,
  Edit3,
  Share2,
  Printer,
  ChevronRight,
  Info,
  ExternalLink,
  CheckCircle2,
  X
} from 'lucide-react';

interface ConsultancyChargesPageProps {
  onBack: () => void;
}

export const ConsultancyChargesPage: React.FC<ConsultancyChargesPageProps> = ({ onBack }) => {
  const { config, language, t, setIsBookingModalOpen, setSelectedServiceForBooking } = useBrand();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [bankDetails, setBankDetails] = useState<BankPaymentDetails>(getSavedBankDetails);
  const [isEditBankModalOpen, setIsEditBankModalOpen] = useState(false);
  const [previewQrModal, setPreviewQrModal] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit form state
  const [editForm, setEditForm] = useState<BankPaymentDetails>(bankDetails);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => {
      setCopiedField(null);
    }, 2200);
  };

  const handleQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setUploadError(language === 'hi' ? 'चित्र 5MB से कम होना चाहिए' : 'Image must be under 5MB');
        setTimeout(() => setUploadError(null), 4000);
        return;
      }
      setUploadError(null);
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        const updated = { ...bankDetails, scannerImageUrl: base64 };
        setBankDetails(updated);
        saveBankDetails(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveBankForm = (e: React.FormEvent) => {
    e.preventDefault();
    setBankDetails(editForm);
    saveBankDetails(editForm);
    setIsEditBankModalOpen(false);
  };

  const handleShare = () => {
    const url = window.location.origin + window.location.pathname + '#charges';
    if (navigator.share) {
      navigator.share({
        title: 'Dr. Pooja Awasthi - Consultancy & Healing Tariff',
        text: 'आध्यात्मिक मार्गदर्शन एवं हीलिंग सेवाएँ शुल्क विवरण | Dr. Pooja Awasthi',
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      setShareFeedback(true);
      setTimeout(() => setShareFeedback(false), 2500);
    }
  };

  const handleServiceBook = (service: ConsultancyServiceItem) => {
    // Map to booking service or open directly on WhatsApp
    const cleanPhone = (config.whatsapp || '+919105731969').replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `नमस्ते डॉ. पूजा अवस्थी जी, मैं आपकी सेवा "${service.title}" (${service.feeFormatted}) के लिए परामर्श सत्र बुक करना चाहता/चाहती हूँ। कृपया उपलब्ध समय एवं विवरण साझा करें।`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  const filteredServices = activeCategory === 'all'
    ? CONSULTANCY_SERVICES
    : CONSULTANCY_SERVICES.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'all', label_hi: 'सभी सेवाएँ (11)', label_en: 'All Services (11)' },
    { id: 'healing', label_hi: 'ऊर्जा एवं हीलिंग (5)', label_en: 'Energy & Healing (5)' },
    { id: 'numerology', label_hi: 'अंकशास्त्र शुद्धि (2)', label_en: 'Numerology Corrections (2)' },
    { id: 'therapy', label_hi: 'मानसिक संतुलन व थेरेपी (3)', label_en: 'Mind Balance & Therapy (3)' },
    { id: 'regression', label_hi: 'पीएलआर सत्र (1)', label_en: 'PLR Regression (1)' }
  ];

  return (
    <div id="consultancy-charges-page" className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] pb-24 pt-24 sm:pt-28">
      {/* Top Breadcrumb & Action Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-[#E8E1D5]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6D23] hover:text-[#5B4716] px-4 py-2 rounded-full bg-[#FAF4EA] hover:bg-[#F2E7D5] border border-[#D4AF37]/40 transition-all shadow-2xs group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'hi' ? '← मुख्य पृष्ठ पर वापस जाएँ' : '← Back to Home'}</span>
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#786E64] hover:text-[#2D2A26] px-3.5 py-2 rounded-full bg-white border border-[#E0D7CB] hover:border-[#D4AF37] transition-all shadow-2xs"
              title="Share Page"
            >
              <Share2 size={14} className="text-[#8C6D23]" />
              <span>{shareFeedback ? (language === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link Copied!') : (language === 'hi' ? 'साझा करें' : 'Share')}</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#786E64] hover:text-[#2D2A26] px-3.5 py-2 rounded-full bg-white border border-[#E0D7CB] hover:border-[#D4AF37] transition-all shadow-2xs"
              title="Print Rate Card"
            >
              <Printer size={14} className="text-[#8C6D23]" />
              <span className="hidden sm:inline">{language === 'hi' ? 'प्रिंट शुल्क सूची' : 'Print Rate Card'}</span>
            </button>

            <a
              href={`https://wa.me/${(config.whatsapp || '+919105731969').replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-xs"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD8B1]/50 border border-[#D4AF37]/50 text-xs font-bold tracking-widest uppercase text-[#8C6D23] shadow-2xs">
            <SpiritualLotusIcon size={16} color="#8C6D23" />
            <span>{language === 'hi' ? 'आध्यात्मिक मार्गदर्शन एवं हीलिंग सेवाएँ' : 'Spiritual Guidance & Healing Services'}</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
            {language === 'hi' ? 'परामर्श एवं हीलिंग सेवा शुल्क' : 'Consultancy & Healing Services Tariff'}
          </h1>

          <p className="text-base sm:text-lg text-[#5A524A] font-serif-cormorant italic max-w-2xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'प्रत्येक सत्र में पूर्ण गोपनीयता, समर्पित वैदिक अंतर्दृष्टि एवं आंतरिक संतुलन हेतु प्रामाणिक आध्यात्मिक अभ्यास।'
              : 'Dedicated 1-on-1 sessions designed with complete confidentiality, sacred awareness, and profound spiritual healing.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-[#786E64]">
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#E8E1D5]">
              <ShieldCheck size={14} className="text-[#8C6D23]" />
              {language === 'hi' ? '१००% व्यक्तिगत गोपनीयता' : '100% Confidential Guidance'}
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#E8E1D5]">
              <Clock size={14} className="text-[#8C6D23]" />
              {language === 'hi' ? 'निश्चित अवधि एवं प्रामाणिक विधि' : 'Pre-scheduled Authentic Sessions'}
            </span>
            <span className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#E8E1D5]">
              <CreditCard size={14} className="text-[#8C6D23]" />
              {language === 'hi' ? 'UPI, QR एवं बैंक ट्रांसफर' : 'UPI, QR & Direct Bank Transfer'}
            </span>
          </div>
        </div>

        {/* PRIMARY CONSULTATION CARD (₹5,100) */}
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 bg-linear-to-br from-[#FAF5EC] via-[#FFFFFF] to-[#F5EEDF] border-2 border-[#D4AF37] shadow-xl overflow-hidden">
          {/* Subtle decorative background watermark */}
          <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none text-[#8C6D23]">
            <SpiritualLotusIcon size={260} color="#8C6D23" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8C6D23] text-white text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles size={13} />
                <span>{language === 'hi' ? GENERAL_CONSULTANCY.badge : GENERAL_CONSULTANCY.badge_en}</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D2A26]">
                {language === 'hi' ? GENERAL_CONSULTANCY.title : GENERAL_CONSULTANCY.title_en}
              </h2>

              <p className="text-sm sm:text-base text-[#4A423B] leading-relaxed">
                {language === 'hi' ? GENERAL_CONSULTANCY.description : GENERAL_CONSULTANCY.description_en}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#685D52] pt-2">
                <div className="flex items-center gap-1.5 bg-[#FAF4EA] px-3.5 py-1.5 rounded-lg border border-[#E6DBCA]">
                  <Clock size={15} className="text-[#8C6D23]" />
                  <span>{language === 'hi' ? `सत्र अवधि: ${GENERAL_CONSULTANCY.duration}` : `Duration: ${GENERAL_CONSULTANCY.duration_en}`}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF4EA] px-3.5 py-1.5 rounded-lg border border-[#E6DBCA]">
                  <ShieldCheck size={15} className="text-[#8C6D23]" />
                  <span>{language === 'hi' ? 'व्यक्तिगत प्रश्न व समाधान' : 'Personalized In-depth Analysis'}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-5 bg-white/90 lg:bg-transparent p-6 sm:p-8 rounded-2xl border lg:border-none border-[#EAD8B1]/60">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#786E64] block mb-1">
                  {language === 'hi' ? 'निर्धारित परामर्श शुल्क' : 'Consultancy Fee'}
                </span>
                <div className="font-cinzel text-4xl sm:text-5xl font-black text-[#8C6D23] tracking-tight">
                  {GENERAL_CONSULTANCY.feeFormatted}
                </div>
                <span className="text-xs text-[#786E64] mt-1 block">
                  {language === 'hi' ? 'प्रति सत्र (ऑनलाइन / टेलीफोनिक)' : 'Per session (Virtual / Telephonic)'}
                </span>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleServiceBook(GENERAL_CONSULTANCY)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] via-[#A87B19] to-[#8C6D23] hover:from-[#785D1E] hover:to-[#936C15] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Calendar size={16} />
                  <span>{language === 'hi' ? 'परामर्श सत्र बुक करें' : 'Book Consultation'}</span>
                </button>

                <a
                  href="#bank-payment-section"
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold text-[#8C6D23] bg-[#FAF4EA] hover:bg-[#F2E7D5] border border-[#D4AF37]/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <CreditCard size={14} />
                  <span>{language === 'hi' ? 'भुगतान विवरण' : 'Payment Info'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER & FILTER TABS */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8E1D5] pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8C6D23]">
                <Sparkles size={14} />
                <span>{language === 'hi' ? 'विशिष्ट सेवाएँ एवं थेरेपी' : 'Specialized Healing & Therapies'}</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2D2A26] mt-1">
                {language === 'hi' ? '11 विशिष्ट हीलिंग एवं करेक्शन सेवाएँ' : '11 Specialized Healing & Correction Services'}
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#8C6D23] text-white shadow-xs'
                      : 'bg-white text-[#685D52] hover:bg-[#FAF4EA] border border-[#E0D7CB]'
                  }`}
                >
                  {language === 'hi' ? cat.label_hi : cat.label_en}
                </button>
              ))}
            </div>
          </div>

          {/* 11 SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="group relative bg-white rounded-2xl p-6 border border-[#E8E0D5] hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Number & Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-[#FAF4EA] border border-[#D4AF37]/40 flex items-center justify-center font-cinzel text-xs font-bold text-[#8C6D23]">
                        {service.number}
                      </span>
                      <span className="text-[11px] font-semibold text-[#8C6D23] uppercase tracking-wider bg-[#FAF4EA] px-2.5 py-0.5 rounded-full border border-[#EAD8B1]">
                        {language === 'hi' ? service.categoryLabel_hi : service.categoryLabel_en}
                      </span>
                    </div>

                    {service.badge && (
                      <span className="text-[10px] font-bold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] px-2.5 py-0.5 rounded-full shadow-2xs">
                        {language === 'hi' ? service.badge : service.badge_en}
                      </span>
                    )}
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#2D2A26] group-hover:text-[#8C6D23] transition-colors">
                      {language === 'hi' ? service.title : service.title_en}
                    </h4>
                    {language === 'hi' && (
                      <span className="text-xs text-[#786E64] font-medium block">
                        {service.title_en}
                      </span>
                    )}
                  </div>

                  {/* Price Banner */}
                  <div className="flex items-baseline justify-between py-2 border-y border-[#F0EAE1]">
                    <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#8C6D23]">
                      {service.feeFormatted}
                    </span>
                    {service.duration && (
                      <div className="flex items-center gap-1 text-xs font-medium text-[#786E64] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E1D5]">
                        <Clock size={13} className="text-[#8C6D23]" />
                        <span>{language === 'hi' ? `अवधि: ${service.duration}` : `Duration: ${service.duration_en}`}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#554C43] leading-relaxed">
                    {language === 'hi' ? service.description : service.description_en}
                  </p>

                  {/* Note / Subconscious / Symbolic Caveat (e.g., PLR) */}
                  {service.note && (
                    <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#EAE0D2] text-[11px] text-[#6B5E51] leading-relaxed flex items-start gap-2">
                      <Info size={14} className="text-[#8C6D23] shrink-0 mt-0.5" />
                      <span>{language === 'hi' ? service.note : service.note_en}</span>
                    </div>
                  )}

                  {/* Important Medical Disclaimer (e.g., Anxiety/Depression Support) */}
                  {service.importantDisclaimer && (
                    <div className="p-3 rounded-xl bg-[#FFF8F6] border border-[#F2D6CE] text-[11px] text-[#A24838] leading-relaxed flex items-start gap-2">
                      <AlertCircle size={14} className="text-[#D34526] shrink-0 mt-0.5" />
                      <span>{language === 'hi' ? service.importantDisclaimer : service.importantDisclaimer_en}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-5 mt-4 border-t border-[#F0EAE1] flex items-center justify-between gap-3">
                  <span className="text-[11px] text-[#8A7E73]">
                    {language === 'hi' ? 'गोपनीय सत्र' : 'Confidential'}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleServiceBook(service)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#8C6D23] bg-[#FAF4EA] hover:bg-[#8C6D23] hover:text-white border border-[#D4AF37]/50 hover:border-[#8C6D23] transition-all shadow-2xs group-hover:scale-102"
                  >
                    <MessageCircle size={13} />
                    <span>{language === 'hi' ? 'सत्र निर्धारित करें' : 'Book Session'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANK, UPI & SCANNER DETAILS SECTION */}
        <div id="bank-payment-section" className="scroll-mt-28 pt-8">
          <div className="bg-linear-to-b from-[#FAF5EC] to-[#F5EEE0] rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#D4AF37]/60 shadow-xl space-y-8">
            {/* Header with edit button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2D6C3] pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
                  <CreditCard size={15} />
                  <span>{language === 'hi' ? 'आधिकारिक भुगतान गेटवे' : 'Official Payment Gateway'}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                  {language === 'hi' ? 'बैंक खाता, UPI एवं QR स्कैनर विवरण' : 'Bank Account, UPI & QR Scanner Details'}
                </h3>
                <p className="text-xs sm:text-sm text-[#685D52]">
                  {language === 'hi'
                    ? 'सभी परामर्श एवं हीलिंग सत्रों के शुल्क का भुगतान नीचे दिए गए अधिकृत माध्यमों द्वारा स्वीकार्य है।'
                    : 'Remit consultation & healing fees securely via direct UPI, PhonePe/GPay QR, or Net Banking transfer.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setEditForm(bankDetails);
                    setIsEditBankModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#8C6D23] bg-white hover:bg-[#FAF4EA] border border-[#D4AF37] transition-all shadow-2xs"
                  title="Edit or input your bank details"
                >
                  <Edit3 size={14} />
                  <span>{language === 'hi' ? 'बैंक विवरण संपादित करें' : 'Update Bank / UPI Details'}</span>
                </button>
              </div>
            </div>

            {/* Grid: QR & UPI on Left, Bank Account on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: QR Scanner & UPI VPA */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#E8DFC9] shadow-xs flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] flex items-center gap-1.5">
                      <QrCode size={15} />
                      {language === 'hi' ? 'UPI QR कोड स्कैनर' : 'UPI QR Code Scanner'}
                    </span>
                    <span className="text-[11px] text-[#786E64] font-medium">GPay • PhonePe • Paytm</span>
                  </div>

                  {/* QR Image Box */}
                  <div className="relative mx-auto w-56 h-56 rounded-2xl p-3 bg-linear-to-br from-[#FAF8F5] to-[#F2EAE0] border-2 border-dashed border-[#D4AF37] flex flex-col items-center justify-center text-center group">
                    {bankDetails.scannerImageUrl ? (
                      <div className="w-full h-full relative cursor-pointer" onClick={() => setPreviewQrModal(true)}>
                        <img
                          src={bankDetails.scannerImageUrl}
                          alt="UPI Payment QR Code"
                          className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-xs font-medium">
                          {language === 'hi' ? 'बड़ा देखने के लिए क्लिक करें' : 'Click to Enlarge'}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 p-2">
                        <div className="w-14 h-14 mx-auto rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/50 flex items-center justify-center text-[#8C6D23]">
                          <QrCode size={28} />
                        </div>
                        <p className="text-xs font-semibold text-[#4A423B]">
                          {language === 'hi' ? 'QR स्कैनर यहाँ प्रदर्शित होगा' : 'QR Scanner Display'}
                        </p>
                        <p className="text-[11px] text-[#8A7E73]">
                          {language === 'hi'
                            ? 'अपना GPay / PhonePe स्कैनर अपलोड करें'
                            : 'Upload your customized scanner QR code image'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Upload Scanner Image Trigger */}
                  <div className="text-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleQrUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8C6D23] hover:text-[#5B4716] underline underline-offset-4"
                    >
                      <Upload size={13} />
                      <span>{bankDetails.scannerImageUrl ? (language === 'hi' ? 'नया QR स्कैनर चित्र अपलोड करें' : 'Change QR Scanner Image') : (language === 'hi' ? 'स्कैनर QR कोड चित्र अपलोड करें' : 'Upload Scanner QR Image')}</span>
                    </button>
                    {uploadError && (
                      <p className="text-xs text-red-600 font-medium mt-1">{uploadError}</p>
                    )}
                  </div>
                </div>

                {/* UPI ID Box with 1-click copy */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DFC9] space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#786E64]">
                    <span className="font-semibold uppercase tracking-wider">{language === 'hi' ? 'आधिकारिक UPI ID' : 'Official UPI ID'}</span>
                    <span className="text-[10px] text-[#8C6D23] font-bold">1-Click Copy</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-white px-3.5 py-2.5 rounded-lg border border-[#DCD3C4]">
                    <code className="font-mono text-sm sm:text-base font-bold text-[#2D2A26] select-all truncate">
                      {bankDetails.upiId || '9105731969@okaxis'}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankDetails.upiId || '9105731969@okaxis', 'upi')}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1 transition-all ${
                        copiedField === 'upi'
                          ? 'bg-[#1EBE5D] text-white'
                          : 'bg-[#8C6D23] text-white hover:bg-[#785D1E]'
                      }`}
                    >
                      {copiedField === 'upi' ? (
                        <>
                          <Check size={13} />
                          <span>{language === 'hi' ? 'कॉपी हुआ' : 'Copied'}</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>{language === 'hi' ? 'कॉपी करें' : 'Copy'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Bank Account Transfer */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFC9] shadow-xs flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#F0EAE1] pb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8C6D23] flex items-center gap-1.5">
                      <Building2 size={16} />
                      {language === 'hi' ? 'सीधा बैंक अंतरण विवरण (NEFT / IMPS / RTGS)' : 'Direct Bank Transfer (NEFT / IMPS / RTGS)'}
                    </span>
                    <span className="text-xs text-[#1EBE5D] font-bold flex items-center gap-1">
                      <CheckCircle2 size={14} /> Verified
                    </span>
                  </div>

                  {/* Bank Details Table / Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Account Holder */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1">
                      <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                        {language === 'hi' ? 'खाताधारक का नाम' : 'Account Holder Name'}
                      </span>
                      <p className="font-semibold text-sm sm:text-base text-[#2D2A26]">
                        {bankDetails.accountHolderName || config.founderName}
                      </p>
                    </div>

                    {/* Bank Name */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1">
                      <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                        {language === 'hi' ? 'बैंक का नाम' : 'Bank Name'}
                      </span>
                      <p className="font-semibold text-sm sm:text-base text-[#2D2A26]">
                        {bankDetails.bankName || 'State Bank of India'}
                      </p>
                    </div>

                    {/* Account Number with Copy */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1 sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                          {language === 'hi' ? 'खाता संख्या (Account Number)' : 'Account Number'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(bankDetails.accountNumber || '38920194857', 'account')}
                          className="text-[11px] text-[#8C6D23] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {copiedField === 'account' ? (
                            <>
                              <Check size={12} className="text-[#1EBE5D]" />
                              <span className="text-[#1EBE5D]">{language === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>{language === 'hi' ? 'संख्या कॉपी करें' : 'Copy Number'}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-mono text-base sm:text-lg font-bold text-[#2D2A26] tracking-wider select-all">
                        {bankDetails.accountNumber || '38920194857'}
                      </p>
                    </div>

                    {/* IFSC Code with Copy */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                          {language === 'hi' ? 'IFSC कोड' : 'IFSC Code'}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(bankDetails.ifscCode || 'SBIN0001234', 'ifsc')}
                          className="text-[11px] text-[#8C6D23] font-bold hover:underline inline-flex items-center gap-1"
                        >
                          {copiedField === 'ifsc' ? (
                            <>
                              <Check size={12} className="text-[#1EBE5D]" />
                              <span className="text-[#1EBE5D]">{language === 'hi' ? 'कॉपी हुआ!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>{language === 'hi' ? 'IFSC कॉपी करें' : 'Copy IFSC'}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="font-mono text-base font-bold text-[#2D2A26] select-all">
                        {bankDetails.ifscCode || 'SBIN0001234'}
                      </p>
                    </div>

                    {/* Account Type */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1">
                      <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                        {language === 'hi' ? 'खाते का प्रकार' : 'Account Type'}
                      </span>
                      <p className="font-semibold text-sm sm:text-base text-[#2D2A26]">
                        {bankDetails.accountType || 'Savings Account'}
                      </p>
                    </div>

                    {/* Branch */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE2D5] space-y-1 sm:col-span-2">
                      <span className="text-[11px] font-semibold text-[#786E64] uppercase tracking-wider block">
                        {language === 'hi' ? 'शाखा (Branch)' : 'Branch & Location'}
                      </span>
                      <p className="text-xs sm:text-sm text-[#4A423B]">
                        {bankDetails.branch || 'Dehradun Main Branch, Uttarakhand'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Payment Confirmation CTA */}
                <div className="p-4 rounded-xl bg-linear-to-r from-[#FAF4EA] to-[#F5EAD4] border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <span className="text-xs font-bold text-[#2D2A26] block">
                      {language === 'hi' ? 'भुगतान के पश्चात क्या करें?' : 'Next Step After Payment'}
                    </span>
                    <p className="text-xs text-[#6B5E51]">
                      {language === 'hi'
                        ? 'कृपया लेन-देन का स्क्रीनशॉट व्हाट्सएप (+91 91057 31969) पर प्रेषित करें।'
                        : 'Send transaction screenshot to WhatsApp (+91 91057 31969) for instant appointment confirmation.'}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${(config.whatsapp || '+919105731969').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      'नमस्ते डॉ. पूजा अवस्थी जी, मैंने परामर्श / हीलिंग सेवा शुल्क का भुगतान कर दिया है। संलग्न स्क्रीनशॉट के अनुसार कृपया मेरा सत्र निर्धारित करें।'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all shadow-xs flex items-center gap-1.5"
                  >
                    <MessageCircle size={15} />
                    <span>{language === 'hi' ? 'स्क्रीनशॉट भेजें' : 'Send Screenshot'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM RETURN TO HOME BUTTON */}
        <div className="text-center pt-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6D23] hover:text-[#5B4716] px-6 py-3 rounded-full bg-white hover:bg-[#FAF4EA] border border-[#D4AF37] transition-all shadow-xs"
          >
            <ArrowLeft size={16} />
            <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएँ' : 'Back to Home'}</span>
          </button>
        </div>
      </div>

      {/* EDIT BANK DETAILS MODAL */}
      {isEditBankModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 sm:p-8 relative">
            <button
              type="button"
              onClick={() => setIsEditBankModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#786E64] hover:text-[#2D2A26] hover:bg-[#EAE3D9] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6 space-y-1">
              <h3 className="font-cinzel text-xl font-bold text-[#2D2A26]">
                {language === 'hi' ? 'बैंक एवं UPI विवरण संपादित करें' : 'Update Bank & UPI Details'}
              </h3>
              <p className="text-xs text-[#786E64]">
                {language === 'hi'
                  ? 'अपना नया UPI ID, खाता संख्या या IFSC कोड यहाँ दर्ज करें। यह आपके ब्राउज़र में सुरक्षित रहेगा।'
                  : 'Enter your custom bank/UPI details to be displayed on this consultancy tariff page.'}
              </p>
            </div>

            <form onSubmit={handleSaveBankForm} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                  {language === 'hi' ? 'UPI ID / VPA' : 'UPI ID / VPA'}
                </label>
                <input
                  type="text"
                  value={editForm.upiId}
                  onChange={(e) => setEditForm({ ...editForm, upiId: e.target.value })}
                  placeholder="9105731969@okaxis"
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'खाताधारक का नाम' : 'Account Holder Name'}
                  </label>
                  <input
                    type="text"
                    value={editForm.accountHolderName}
                    onChange={(e) => setEditForm({ ...editForm, accountHolderName: e.target.value })}
                    placeholder="Dr. Pooja Awasthi"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'बैंक का नाम' : 'Bank Name'}
                  </label>
                  <input
                    type="text"
                    value={editForm.bankName}
                    onChange={(e) => setEditForm({ ...editForm, bankName: e.target.value })}
                    placeholder="State Bank of India"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'खाता संख्या (Account Number)' : 'Account Number'}
                  </label>
                  <input
                    type="text"
                    value={editForm.accountNumber}
                    onChange={(e) => setEditForm({ ...editForm, accountNumber: e.target.value })}
                    placeholder="38920194857"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'IFSC कोड' : 'IFSC Code'}
                  </label>
                  <input
                    type="text"
                    value={editForm.ifscCode}
                    onChange={(e) => setEditForm({ ...editForm, ifscCode: e.target.value })}
                    placeholder="SBIN0001234"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'खाते का प्रकार' : 'Account Type'}
                  </label>
                  <input
                    type="text"
                    value={editForm.accountType}
                    onChange={(e) => setEditForm({ ...editForm, accountType: e.target.value })}
                    placeholder="Savings Account"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#4A423B] mb-1">
                    {language === 'hi' ? 'शाखा (Branch)' : 'Branch'}
                  </label>
                  <input
                    type="text"
                    value={editForm.branch}
                    onChange={(e) => setEditForm({ ...editForm, branch: e.target.value })}
                    placeholder="Dehradun Main Branch"
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditBankModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#786E64] hover:bg-[#EAE3D9]"
                >
                  {language === 'hi' ? 'रद्द करें' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#8C6D23] hover:bg-[#785D1E] shadow-xs"
                >
                  {language === 'hi' ? 'सुरक्षित करें' : 'Save Details'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* QR PREVIEW MODAL */}
      {previewQrModal && bankDetails.scannerImageUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setPreviewQrModal(false)}
        >
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-2 border-b border-[#E8E1D5]">
              <span className="font-cinzel text-sm font-bold text-[#2D2A26]">UPI Payment Scanner</span>
              <button
                type="button"
                onClick={() => setPreviewQrModal(false)}
                className="p-1 rounded-full text-[#786E64] hover:bg-[#FAF4EA]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="w-full aspect-square p-2 bg-white rounded-xl border border-[#D4AF37]/40 shadow-inner">
              <img
                src={bankDetails.scannerImageUrl}
                alt="UPI Scanner Fullscreen"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-[#786E64]">
              Scan with any UPI App: GPay, PhonePe, Paytm, BHIM
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
