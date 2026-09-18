import React, { useState, useEffect, useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import { SpiritualLotusIcon, SacredMandala } from './SacredMandala';
import {
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Trophy,
  Flame,
  Leaf,
  Sun,
  Eye,
  Send,
  HelpCircle,
  Lightbulb,
  CompassIcon,
  Camera,
  Upload,
  Maximize2,
  X,
  RotateCcw
} from 'lucide-react';
import { AwardsGallery } from './AwardsGallery';
import { AWARDS_GALLERY } from '../data/awardsData';
import {
  getFounderPhoto,
  saveFounderPhoto,
  clearFounderPhoto,
  DEFAULT_FOUNDER_PHOTO_FILENAME
} from '../utils/photoStorage';

export const AboutSection: React.FC = () => {
  const { config, language, setLanguage, t, setIsBookingModalOpen } = useBrand();
  const [activeTab, setActiveTab] = useState<'bio' | 'awards'>('bio');
  const [founderPhoto, setFounderPhoto] = useState<string | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState<boolean>(false);
  const [isPhotoDragOver, setIsPhotoDragOver] = useState<boolean>(false);
  const [photoNotification, setPhotoNotification] = useState<string | null>(null);
  const [imgLoadError, setImgLoadError] = useState<boolean>(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  // Load persisted founder photo on mount
  useEffect(() => {
    getFounderPhoto().then((photo) => {
      if (photo) setFounderPhoto(photo);
    });
  }, []);

  const handlePhotoUpload = async (file: File) => {
    try {
      const dataUrl = await saveFounderPhoto(file);
      setFounderPhoto(dataUrl);
      setImgLoadError(false);
      setPhotoNotification(
        language === 'hi'
          ? 'डॉ. पूजा अवस्थी का चित्र (28.jpeg) सफलतापूर्वक अपडेट हुआ'
          : 'Founder portrait (28.jpeg) updated successfully'
      );
      setTimeout(() => setPhotoNotification(null), 3500);
    } catch (err) {
      console.error('Error saving founder photo', err);
    }
  };

  const handleResetPhoto = async () => {
    await clearFounderPhoto();
    setFounderPhoto(null);
    setImgLoadError(false);
    setPhotoNotification(
      language === 'hi' ? 'चित्र रीसेट किया गया' : 'Photo reset to default'
    );
    setTimeout(() => setPhotoNotification(null), 3500);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#awards' || hash === '#about-awards') {
        setActiveTab('awards');
      } else if (hash === '#about' || hash === '#bio') {
        setActiveTab('bio');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;

  return (
    <section id="about" className="py-24 bg-[#F5EFE6]/70 relative overflow-hidden border-y border-[#EAE3D9]">
      {/* Subtle Background Sacred Mandalas */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/3 opacity-15 pointer-events-none">
        <SacredMandala size={650} strokeColor="#8C6D23" />
      </div>
      <div className="absolute left-0 bottom-1/4 translate-y-1/3 -translate-x-1/3 opacity-10 pointer-events-none">
        <SacredMandala size={550} strokeColor="#8C6D23" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/50 text-xs font-semibold uppercase tracking-widest text-[#8C6D23] mb-4 shadow-xs">
            <SpiritualLotusIcon size={15} color="#8C6D23" />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
            {t.about.meetTitle}
          </h2>
          <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#8C6D23] font-medium mt-2">
            {t.about.meetSubtitle}
          </p>
        </div>

        {/* Notification Toast */}
        {photoNotification && (
          <div className="fixed top-20 right-5 z-50 bg-[#8C6D23] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-white/20 animate-fade-in">
            <Sparkles size={15} />
            <span>{photoNotification}</span>
          </div>
        )}

        {/* Section Sub-Tabs: About & Guidance vs Awards & Honors */}
        <div id="about-section-tabs" className="flex justify-center mb-10 sm:mb-14">
          <div className="flex w-full sm:w-auto p-1 sm:p-1.5 rounded-2xl bg-white/95 border border-[#E0D7CB] shadow-xs gap-1 sm:gap-2 max-w-md sm:max-w-none">
            <button
              type="button"
              id="tab-btn-bio"
              onClick={() => setActiveTab('bio')}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2.5 ${
                activeTab === 'bio'
                  ? 'bg-linear-to-r from-[#8C6D23] to-[#B8860B] text-white shadow-xs'
                  : 'text-[#6B5A4B] hover:text-[#2D2A26] hover:bg-[#FAF8F5]'
              }`}
            >
              <img
                src={founderPhoto || `/${DEFAULT_FOUNDER_PHOTO_FILENAME}`}
                alt={currentFounderName}
                className="w-5 h-5 rounded-full object-cover object-top border border-white/50"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // If default file doesn't load, fallback to lotus icon
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
              <span>{t.about.tabBio}</span>
            </button>

            <button
              type="button"
              id="tab-btn-awards"
              onClick={() => setActiveTab('awards')}
              className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2.5 ${
                activeTab === 'awards'
                  ? 'bg-linear-to-r from-[#8C6D23] to-[#B8860B] text-white shadow-xs'
                  : 'text-[#6B5A4B] hover:text-[#2D2A26] hover:bg-[#FAF8F5]'
              }`}
            >
              <Trophy size={15} />
              <span>{t.about.tabAwards}</span>
              <span
                className={`ml-0.5 sm:ml-1 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${
                  activeTab === 'awards'
                    ? 'bg-white/25 text-white'
                    : 'bg-[#EAD8B1]/60 text-[#8C6D23]'
                }`}
              >
                {AWARDS_GALLERY.length}
              </span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: ABOUT & GUIDANCE (Includes all 4 sections requested by user)       */}
        {/* ========================================================================= */}
        {activeTab === 'bio' && (
          <div className="space-y-20 animate-fade-in">
            
            {/* --------------------------------------------------------------------- */}
            {/* SECTION 1: MEET POOJA AWASTHI                                          */}
            {/* --------------------------------------------------------------------- */}
            <div id="meet-pooja-awasthi" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
              {/* Left Profile Card with Aura & Vision */}
              <div className="lg:col-span-5 space-y-6 w-full">
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                  <div className="absolute -inset-3 bg-linear-to-tr from-[#EAD8B1] via-[#D4AF37]/30 to-[#F4EFE6] rounded-3xl blur-md opacity-75" />
                  
                  <div className="relative bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/45 shadow-lg text-center overflow-hidden">
                    {/* Hidden input to upload/change founder photo */}
                    <input
                      ref={photoInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handlePhotoUpload(e.target.files[0]);
                        }
                      }}
                    />

                    {/* Official Founder Portrait (28.jpeg) with Sacred Frame */}
                    <div
                      className="relative mx-auto mb-5 group/photo"
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsPhotoDragOver(true);
                      }}
                      onDragLeave={() => setIsPhotoDragOver(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsPhotoDragOver(false);
                        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                          handlePhotoUpload(e.dataTransfer.files[0]);
                        }
                      }}
                    >
                      {/* Frame Container */}
                      <div className="relative w-56 h-72 sm:w-68 sm:h-84 md:w-72 md:h-88 mx-auto rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-linear-to-b from-[#2D2A26] to-[#1A1816]">
                        {!imgLoadError ? (
                          <img
                            src={founderPhoto || `/${DEFAULT_FOUNDER_PHOTO_FILENAME}`}
                            alt={currentFounderName}
                            referrerPolicy="no-referrer"
                            onError={() => {
                              if (!founderPhoto) setImgLoadError(true);
                            }}
                            onClick={() => setIsPhotoModalOpen(true)}
                            className="w-full h-full object-cover object-top cursor-pointer transition-transform duration-500 group-hover/photo:scale-105"
                          />
                        ) : (
                          <div
                            onClick={() => photoInputRef.current?.click()}
                            className="w-full h-full flex flex-col items-center justify-center p-4 text-center cursor-pointer bg-linear-to-b from-[#FAF8F5] via-[#F4EDE2] to-[#FAF8F5] text-[#2D2A26]"
                          >
                            <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#EAD8B1] to-[#FAF8F5] border-2 border-[#D4AF37] flex items-center justify-center p-2 mb-3 shadow-inner relative">
                              <SpiritualLotusIcon size={44} color="#8C6D23" />
                            </div>
                            <span className="text-xs font-bold text-[#8C6D23] uppercase tracking-wider mb-1">
                              {language === 'hi' ? 'संस्थापक चित्र (28.jpeg)' : 'Founder Photo (28.jpeg)'}
                            </span>
                            <span className="text-[11px] text-[#786E64] mb-3 px-2">
                              {language === 'hi'
                                ? 'टैरो कार्ड व हीलिंग क्रिस्टल्स के साथ डॉ. पूजा अवस्थी'
                                : 'Dr. Pooja Awasthi with Tarot & Healing Crystals'}
                            </span>
                            <button
                              type="button"
                              className="px-3 py-1.5 rounded-full bg-[#8C6D23] text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-xs hover:bg-[#A8842E]"
                            >
                              <Camera size={12} />
                              <span>{language === 'hi' ? '28.jpeg चुनें / अपलोड करें' : 'Select / Upload 28.jpeg'}</span>
                            </button>
                          </div>
                        )}

                        {/* Drag-over prompt */}
                        {isPhotoDragOver && (
                          <div className="absolute inset-0 bg-[#8C6D23]/95 backdrop-blur-xs flex flex-col items-center justify-center text-white p-4 text-center z-20">
                            <Upload size={32} className="animate-bounce mb-2" />
                            <span className="text-xs font-bold">
                              {language === 'hi' ? '28.jpeg यहाँ छोड़ें' : 'Drop 28.jpeg here'}
                            </span>
                          </div>
                        )}

                        {/* Bottom Badge overlay */}
                        <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/85 via-black/40 to-transparent p-2.5 pt-6 text-center pointer-events-none">
                          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#F5EFE6] flex items-center justify-center gap-1.5">
                            <SpiritualLotusIcon size={12} color="#D4AF37" />
                            <span>{language === 'hi' ? 'संस्थापक: डॉ. पूजा अवस्थी' : 'Founder: Dr. Pooja Awasthi'}</span>
                          </span>
                        </div>

                        {/* Top corner hover controls: Fullscreen & Upload buttons */}
                        <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-0 group-hover/photo:opacity-100 transition-opacity z-10">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsPhotoModalOpen(true);
                            }}
                            className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-xs border border-white/20 transition-transform hover:scale-105"
                            title={language === 'hi' ? 'पूर्ण आकार में देखें' : 'View full size'}
                          >
                            <Maximize2 size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              photoInputRef.current?.click();
                            }}
                            className="p-1.5 rounded-full bg-[#8C6D23]/90 hover:bg-[#8C6D23] text-white text-xs backdrop-blur-xs border border-white/30 transition-transform hover:scale-105"
                            title={language === 'hi' ? 'चित्र बदलें / 28.jpeg अपलोड करें' : 'Change photo / Upload 28.jpeg'}
                          >
                            <Camera size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Photo management action pill below frame */}
                      <div className="mt-2.5 flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => photoInputRef.current?.click()}
                          className="text-[11px] px-3 py-1 rounded-full bg-white/90 hover:bg-white text-[#786E64] hover:text-[#8C6D23] border border-[#E2D8CA] hover:border-[#D4AF37] shadow-2xs flex items-center gap-1.5 transition-all"
                        >
                          <Camera size={12} className="text-[#8C6D23]" />
                          <span>
                            {founderPhoto
                              ? (language === 'hi' ? 'चित्र बदलें' : 'Change Photo')
                              : (language === 'hi' ? '28.jpeg अपलोड करें' : 'Upload 28.jpeg')}
                          </span>
                        </button>
                        {founderPhoto && (
                          <button
                            type="button"
                            onClick={handleResetPhoto}
                            className="text-[11px] px-2 py-1 rounded-full bg-white/70 hover:bg-white text-[#A09383] hover:text-red-600 border border-[#E2D8CA] transition-all"
                            title={language === 'hi' ? 'चित्र रीसेट करें' : 'Reset photo'}
                          >
                            <RotateCcw size={11} />
                          </button>
                        )}
                      </div>
                    </div>

                    <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26]">
                      {currentFounderName}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#8C6D23] mt-1">
                      {t.about.founderRole}
                    </p>

                    {/* 4 Core Qualifications */}
                    <div className="my-5 border-t border-[#EAE3D9] pt-4 text-xs text-[#564E46] space-y-2.5 text-left font-medium">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8C6D23] shrink-0" />
                        <span>{t.about.credential1}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8C6D23] shrink-0" />
                        <span>{t.about.credential2}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8C6D23] shrink-0" />
                        <span>{t.about.credential3}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#8C6D23] shrink-0" />
                        <span>{t.about.credential4}</span>
                      </div>
                    </div>

                    {/* Her Vision Card */}
                    <div className="p-4 rounded-xl bg-[#F4EDE2] border border-[#E5DAC6] text-left">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6D23] mb-1.5">
                        <Sun size={14} />
                        <span>{t.about.visionTitle}</span>
                      </div>
                      <p className="text-xs text-[#4A423B] leading-relaxed">
                        {t.about.visionText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content: Exact Text Blocks & Vision Quote */}
              <div className="lg:col-span-7 space-y-6 w-full">
                <div className="bg-white/95 backdrop-blur-xs rounded-2xl p-7 sm:p-9 lg:p-10 border border-[#E2D8CA] shadow-sm space-y-6">
                  {/* Top Bar with Language Toggle */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE0]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#8C6D23]" />
                      <span className="text-xs uppercase tracking-widest font-bold text-[#8C6D23]">
                        {language === 'hi' ? 'आध्यात्मिक परिचय' : 'Spiritual Biography'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs">
                      <span className="text-[#786E64] hidden sm:inline">भाषा / Language:</span>
                      <button
                        type="button"
                        onClick={() => setLanguage('en')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          language === 'en' ? 'bg-[#8C6D23] text-white' : 'text-[#786E64] hover:text-[#2D2A26]'
                        }`}
                      >
                        English
                      </button>
                      <span className="text-[#C2B5A5]">|</span>
                      <button
                        type="button"
                        onClick={() => setLanguage('hi')}
                        className={`px-2.5 py-1 rounded text-xs font-semibold ${
                          language === 'hi' ? 'bg-[#8C6D23] text-white' : 'text-[#786E64] hover:text-[#2D2A26]'
                        }`}
                      >
                        हिन्दी
                      </button>
                    </div>
                  </div>

                  {/* Verbatim Paragraphs from user */}
                  <div className="space-y-4 text-base sm:text-lg text-[#3C342C] leading-relaxed">
                    <p className="font-medium text-[#2D2A26]">
                      <strong className="text-[#8C6D23] font-bold">
                        {language === 'hi' ? 'डॉ. पूजा अवस्थी' : 'Pooja Awasthi'}
                      </strong>{' '}
                      {language === 'hi'
                        ? 'एक आध्यात्मिक मार्गदर्शन विशेषज्ञ हैं, जो वैदिक अंकशास्त्र (Vedic Numerology), टैरो रीडिंग (Tarot Reading), ऊर्जा उपचार (Energy Healing) और लाइफ कोचिंग (Life Coaching) के माध्यम से लोगों को अपने जीवन को एक गहरे और नए दृष्टिकोण से समझने में सहयोग करती हैं।'
                        : 'is a dedicated spiritual guidance expert who empowers individuals through Vedic Numerology, Tarot Reading, Energy Healing, and conscious Life Coaching to perceive and understand their lives from a deeper, renewed perspective.'}
                    </p>

                    <p>
                      {language === 'hi'
                        ? 'उनका मानना है कि हर व्यक्ति की जीवन-यात्रा अपने आप में अनूठी होती है। कई बार परिस्थितियां हमें ऐसे प्रश्नों के सामने खड़ा कर देती हैं जिनके उत्तर हमें अपने भीतर खोजने होते हैं। ऐसे समय में सही मार्गदर्शन हमें अपनी परिस्थितियों को समझने, अपनी शक्तियों को पहचानने और आगे की दिशा को अधिक स्पष्टता से देखने में सहायता कर सकता है।'
                        : 'She believes that every individual’s life journey is fundamentally unique. Frequently, life presents us with crossroad questions whose true answers must be unearthed within ourselves. At such moments, attuned guidance helps us comprehend our circumstances, acknowledge our innate strengths, and perceive our forward path with lucid clarity.'}
                    </p>

                    <p>
                      {language === 'hi' ? (
                        <>
                          डॉ. पूजा अवस्थी का दृष्टिकोण{' '}
                          <strong className="text-[#2D2A26] font-semibold">
                            आध्यात्मिक अंतर्दृष्टि, व्यक्तिगत समझ और व्यावहारिक जीवन मार्गदर्शन
                          </strong>{' '}
                          का संतुलित संयोजन है। उनके सत्रों का उद्देश्य किसी व्यक्ति के लिए निर्णय लेना नहीं, बल्कि उसे स्वयं को बेहतर समझने, अपने विकल्पों पर विचार करने और अधिक जागरूकता के साथ आगे बढ़ने में सहयोग करना है।
                        </>
                      ) : (
                        <>
                          Pooja Awasthi’s approach represents a harmonious synthesis of{' '}
                          <strong className="text-[#2D2A26] font-semibold">
                            spiritual insight, personal empathy, and practical life mentorship
                          </strong>. Her sessions never seek to impose external decisions upon anyone, but rather to facilitate deeper self-comprehension, examine options with equanimity, and move forward with heightened conscious awareness.
                        </>
                      )}
                    </p>

                    <p>
                      {language === 'hi'
                        ? 'एक संवेदनशील और व्यक्तिगत दृष्टिकोण के साथ, वह प्रत्येक व्यक्ति की परिस्थितियों और प्रश्नों को समझने का प्रयास करती हैं, ताकि guidance meaningful, relevant और personally empowering हो।'
                        : 'With a sensitive and personalized touch, she attentively engages with each person’s unique circumstances and inquiries, ensuring that every piece of guidance is meaningful, relevant, and personally empowering.'}
                    </p>
                  </div>

                  {/* Golden Banner Quote */}
                  <div className="p-5 rounded-2xl bg-linear-to-r from-[#F7F2E7] via-[#FAF6EE] to-[#F7F2E7] border border-[#D4AF37]/45 text-center shadow-xs">
                    <p className="font-serif-cormorant text-xl sm:text-2xl text-[#8C6D23] font-semibold italic">
                      “{t.about.visionQuote}”
                    </p>
                  </div>

                  {/* Action CTAs */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsBookingModalOpen(true)}
                      className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] transition-all flex items-center gap-2 shadow-xs"
                    >
                      <span>{t.about.connectBtn}</span>
                      <ArrowRight size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('awards')}
                      className="px-5 py-3 rounded-full text-sm font-medium text-[#8C6D23] hover:bg-[#FAF8F5] transition-colors border border-[#D4AF37]/50 flex items-center gap-2"
                    >
                      <Trophy size={15} />
                      <span>{language === 'hi' ? `पुरस्कार व सम्मान देखें (${AWARDS_GALLERY.length})` : `View Awards & Honours (${AWARDS_GALLERY.length})`}</span>
                    </button>

                    <a
                      href="#philosophy"
                      className="px-5 py-3 rounded-full text-sm font-medium text-[#564E46] hover:text-[#8C6D23] hover:bg-[#FAF8F5] transition-colors border border-[#E2D8CA]"
                    >
                      {t.about.philosophyTitle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 2: OUR PHILOSOPHY                                              */}
            {/* --------------------------------------------------------------------- */}
            <div id="philosophy" className="pt-8 border-t border-[#EAE3D9] space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#8C6D23]">
                  <Leaf size={14} />
                  <span>{t.about.philosophyTitle}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
                  {t.about.philosophySubtitle}
                </h3>
              </div>

              {/* Central Core Belief Card */}
              <div className="bg-linear-to-br from-white via-[#FAF8F5] to-[#F5EFE6] rounded-2xl p-7 sm:p-9 border border-[#D4AF37]/40 shadow-xs max-w-4xl mx-auto text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#EAD8B1]/50 flex items-center justify-center text-[#8C6D23]">
                  <Eye size={22} />
                </div>
                <h4 className="font-serif-cormorant text-2xl sm:text-3xl font-bold text-[#2D2A26] leading-snug">
                  {language === 'hi' ? (
                    <>
                      हमारा विश्वास है कि{' '}
                      <span className="text-[#8C6D23]">
                        आध्यात्मिक मार्गदर्शन का उद्देश्य भविष्य को निश्चित रूप से बताना नहीं, बल्कि वर्तमान को अधिक स्पष्टता से समझने में सहायता करना है।
                      </span>
                    </>
                  ) : (
                    <>
                      We believe that{' '}
                      <span className="text-[#8C6D23]">
                        the purpose of spiritual guidance is not to definitively predict the future, but to illuminate the present with profound clarity.
                      </span>
                    </>
                  )}
                </h4>
                <p className="text-sm sm:text-base text-[#564E46] leading-relaxed max-w-3xl mx-auto font-normal">
                  {t.about.philosophyContext}
                </p>
              </div>

              {/* 3 Core Pillars Cards: Clarity, Self-Awareness, Empowerment */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Clarity */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DAC6] shadow-xs hover:border-[#D4AF37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6ED] border border-[#EAE0CD] flex items-center justify-center text-[#8C6D23] mb-4 group-hover:scale-105 transition-transform">
                    <Sparkles size={22} />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-[#2D2A26] mb-2 flex items-center gap-2">
                    <span>✨</span>
                    <span>{t.about.philClarityTitle}</span>
                  </h4>
                  <p className="text-sm text-[#564E46] leading-relaxed">
                    {t.about.philClarityDesc}
                  </p>
                </div>

                {/* Self-Awareness */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DAC6] shadow-xs hover:border-[#D4AF37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6ED] border border-[#EAE0CD] flex items-center justify-center text-[#8C6D23] mb-4 group-hover:scale-105 transition-transform">
                    <Leaf size={22} />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-[#2D2A26] mb-2 flex items-center gap-2">
                    <span>🌿</span>
                    <span>{t.about.philAwarenessTitle}</span>
                  </h4>
                  <p className="text-sm text-[#564E46] leading-relaxed">
                    {t.about.philAwarenessDesc}
                  </p>
                </div>

                {/* Empowerment */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5DAC6] shadow-xs hover:border-[#D4AF37] transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6ED] border border-[#EAE0CD] flex items-center justify-center text-[#8C6D23] mb-4 group-hover:scale-105 transition-transform">
                    <Flame size={22} />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-[#2D2A26] mb-2 flex items-center gap-2">
                    <span>💫</span>
                    <span>{t.about.philEmpowermentTitle}</span>
                  </h4>
                  <p className="text-sm text-[#564E46] leading-relaxed">
                    {t.about.philEmpowermentDesc}
                  </p>
                </div>
              </div>

              {/* Deep Philosophy & Our Promise */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Meaningful Connection */}
                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-7 border border-[#E0D7CB] space-y-3">
                  <h4 className="font-cinzel text-base font-bold text-[#2D2A26] flex items-center gap-2">
                    <HeartHandshake size={18} className="text-[#8C6D23]" />
                    <span>{language === 'hi' ? 'सार्थक मार्गदर्शन का मर्म' : 'The Essence of Meaningful Guidance'}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-[#4A423B] leading-relaxed">
                    {t.about.philosophyDeepText}
                  </p>
                  <p className="text-sm text-[#6B5A4B] leading-relaxed font-medium">
                    {t.about.philosophyObjective}
                  </p>
                </div>

                {/* Our Promise */}
                <div className="lg:col-span-5 bg-linear-to-br from-[#8C6D23] to-[#B8860B] rounded-2xl p-7 text-white space-y-3 shadow-md">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#F5EFE6]">
                    <ShieldCheck size={16} />
                    <span>{t.about.promiseTitle}</span>
                  </div>
                  <p className="font-cinzel text-xl font-bold tracking-wide">
                    {t.about.promiseValues}
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {t.about.promiseText}
                  </p>
                  <div className="pt-2 border-t border-white/20">
                    <p className="font-serif-cormorant italic text-sm text-[#F7F2E7]">
                      “{t.about.promiseQuote}”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 3: WHY CHOOSE POOJA AWASTHI?                                  */}
            {/* --------------------------------------------------------------------- */}
            <div id="why-choose" className="pt-8 border-t border-[#EAE3D9] space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#8C6D23]">
                  <Sparkles size={14} />
                  <span>{t.about.whyChooseTitle}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
                  {t.about.whyChooseSubtitle}
                </h3>
                <p className="text-sm sm:text-base text-[#564E46] leading-relaxed max-w-2xl mx-auto mt-2">
                  {t.about.whyChooseIntro}
                </p>
              </div>

              {/* 6 Feature Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. Personalized Guidance */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">✨</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar1Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar1Desc}
                  </p>
                </div>

                {/* 2. Vedic Numerology */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🔢</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar2Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar2Desc}
                  </p>
                </div>

                {/* 3. Tarot Insights */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🃏</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar3Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar3Desc}
                  </p>
                </div>

                {/* 4. Holistic Perspective */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🌿</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar4Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar4Desc}
                  </p>
                </div>

                {/* 5. Compassionate & Confidential */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">💫</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar5Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar5Desc}
                  </p>
                </div>

                {/* 6. Empowerment-Focused */}
                <div className="p-6 rounded-2xl bg-white/90 border border-[#E5DAC6] hover:border-[#D4AF37] transition-all shadow-2xs group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🌸</span>
                    <h4 className="font-cinzel text-base font-bold text-[#2D2A26]">
                      {t.about.whyPillar6Title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.whyPillar6Desc}
                  </p>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="text-center py-4 border-y border-[#EAE3D9]/80">
                <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#8C6D23] font-semibold">
                  “{t.about.whyChooseQuote}”
                </p>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* SECTION 4: YOUR JOURNEY STARTS HERE                                   */}
            {/* --------------------------------------------------------------------- */}
            <div id="journey-starts-here" className="pt-8 border-t border-[#EAE3D9] space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#8C6D23]">
                  <CompassIcon size={14} />
                  <span>{t.about.journeyTitle}</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D2A26]">
                  {t.about.journeySubtitle}
                </h3>
              </div>

              {/* 4 Interactive Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E5DAC6] shadow-xs relative overflow-hidden group hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl font-cinzel font-bold text-[#D4AF37]/30 group-hover:text-[#8C6D23]/40 transition-colors mb-2">
                    01
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#2D2A26] mb-2 flex items-center gap-1.5">
                    <Send size={15} className="text-[#8C6D23]" />
                    <span>{t.about.journeyStep1Title.replace('01 — ', '')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.journeyStep1Desc}
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E5DAC6] shadow-xs relative overflow-hidden group hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl font-cinzel font-bold text-[#D4AF37]/30 group-hover:text-[#8C6D23]/40 transition-colors mb-2">
                    02
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#2D2A26] mb-2 flex items-center gap-1.5">
                    <Sparkles size={15} className="text-[#8C6D23]" />
                    <span>{t.about.journeyStep2Title.replace('02 — ', '')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.journeyStep2Desc}
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E5DAC6] shadow-xs relative overflow-hidden group hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl font-cinzel font-bold text-[#D4AF37]/30 group-hover:text-[#8C6D23]/40 transition-colors mb-2">
                    03
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#2D2A26] mb-2 flex items-center gap-1.5">
                    <Lightbulb size={15} className="text-[#8C6D23]" />
                    <span>{t.about.journeyStep3Title.replace('03 — ', '')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.journeyStep3Desc}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E5DAC6] shadow-xs relative overflow-hidden group hover:border-[#D4AF37] transition-all">
                  <div className="text-4xl font-cinzel font-bold text-[#D4AF37]/30 group-hover:text-[#8C6D23]/40 transition-colors mb-2">
                    04
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-[#2D2A26] mb-2 flex items-center gap-1.5">
                    <Compass size={15} className="text-[#8C6D23]" />
                    <span>{t.about.journeyStep4Title.replace('04 — ', '')}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#564E46] leading-relaxed">
                    {t.about.journeyStep4Desc}
                  </p>
                </div>
              </div>

              {/* Call-To-Action Box: Ready to Explore Your Path? */}
              <div className="bg-linear-to-br from-[#2D2A26] via-[#3C342C] to-[#25211D] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden border border-[#D4AF37]/30">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                  <SacredMandala size={500} strokeColor="#D4AF37" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-widest text-[#EAD8B1]">
                    <Sparkles size={13} />
                    <span>{t.about.readyTitle}</span>
                  </div>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                    {t.about.readyText}
                  </p>

                  <p className="font-serif-cormorant italic text-xl sm:text-2xl text-[#EAD8B1] font-semibold">
                    {t.about.readyTagline}
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      id="book-session-journey-btn"
                      onClick={() => setIsBookingModalOpen(true)}
                      className="px-8 py-4 rounded-full text-base font-bold text-[#2D2A26] bg-linear-to-r from-[#EAD8B1] via-[#D4AF37] to-[#EAD8B1] hover:shadow-lg hover:scale-102 transition-all inline-flex items-center gap-3 cursor-pointer"
                    >
                      <Sparkles size={18} className="text-[#8C6D23]" />
                      <span>{t.about.bookSessionBtn}</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <p className="text-xs uppercase tracking-widest text-[#C2B5A5] pt-2 font-medium">
                    {t.about.sessionValues}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: AWARDS & HONORS SECTION (19 Photos Gallery with Blank Captions)    */}
        {/* ========================================================================= */}
        {activeTab === 'awards' && (
          <div id="awards" className="space-y-8 animate-fade-in">
            {/* Awards Intro Banner */}
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD8B1]/30 border border-[#D4AF37]/40 text-xs font-semibold text-[#8C6D23]">
                <Award size={13} />
                <span>{t.about.awardsBadge}</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                {t.about.awardsTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#6B5A4B] leading-relaxed">
                {t.about.awardsSubtitle}
              </p>
            </div>

            {/* 19 Photo Awards Gallery with Blank Captions */}
            <AwardsGallery />
          </div>
        )}
      </div>

      {/* Founder Photo Fullscreen Lightbox Modal */}
      {isPhotoModalOpen && (
        <div
          id="founder-photo-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#1F1C1A] rounded-2xl border border-[#D4AF37]/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2.5">
                <SpiritualLotusIcon size={22} color="#D4AF37" />
                <div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-white">
                    {currentFounderName}
                  </h4>
                  <p className="text-xs text-[#D4AF37] font-medium">
                    {language === 'hi' ? 'संस्थापक: डॉ. पूजा अवस्थी' : 'Founder: Dr. Pooja Awasthi'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={language === 'hi' ? 'बंद करें' : 'Close'}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="p-3 sm:p-6 flex items-center justify-center bg-black/60 max-h-[70vh] overflow-hidden">
              <img
                src={founderPhoto || `/${DEFAULT_FOUNDER_PHOTO_FILENAME}`}
                alt={currentFounderName}
                referrerPolicy="no-referrer"
                onError={() => {
                  if (!founderPhoto) setImgLoadError(true);
                }}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl border border-white/15 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#262220] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8DEC8]">
              <p className="italic text-center sm:text-left">
                {language === 'hi'
                  ? 'टैरो कार्ड्स, हीलिंग क्रिस्टल्स व पवित्र परामर्श सत्र के दौरान संस्थापक डॉ. पूजा अवस्थी'
                  : 'Founder Dr. Pooja Awasthi during sacred tarot & spiritual guidance consultation'}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setIsPhotoModalOpen(false);
                    photoInputRef.current?.click();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#8C6D23] hover:bg-[#A8842E] text-white font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Camera size={13} />
                  <span>{language === 'hi' ? 'चित्र बदलें (28.jpeg)' : 'Change (28.jpeg)'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
