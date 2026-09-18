import React, { useState, useEffect, useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import { AWARDS_GALLERY } from '../data/awardsData';
import { AwardPhotoItem } from '../types';
import {
  getAllAwardPhotos,
  saveAwardPhoto,
  clearAllAwardPhotos,
  getCustomCaptions,
  saveCustomCaption
} from '../utils/photoStorage';
import {
  Trophy,
  Award,
  Maximize2,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Check,
  Sparkles,
  Camera,
  RotateCcw,
  Edit3,
  FileText
} from 'lucide-react';
import { SacredMandala, SpiritualLotusIcon } from './SacredMandala';

export const AwardsGallery: React.FC = () => {
  const { language, t } = useBrand();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [storedPhotos, setStoredPhotos] = useState<Record<string, string>>({});
  const [captions, setCaptions] = useState<Record<string, string>>({});
  const [editingCaptionId, setEditingCaptionId] = useState<string | null>(null);
  const [isModalEditingCaption, setIsModalEditingCaption] = useState<boolean>(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isDropActive, setIsDropActive] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardInputRef = useRef<HTMLInputElement>(null);
  const currentCardUploadRef = useRef<AwardPhotoItem | null>(null);

  // Load photos from IndexedDB and captions from storage on mount
  useEffect(() => {
    getAllAwardPhotos().then((photos) => {
      setStoredPhotos(photos);
    });
    setCaptions(getCustomCaptions());
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleDirectCardUpload = async (item: AwardPhotoItem, file: File) => {
    try {
      const fullIndex = AWARDS_GALLERY.findIndex((a) => a.id === item.id);
      const cardNum = fullIndex + 1;
      const dataUrl = await saveAwardPhoto(item.filename, file);
      const updatedPhotos = { ...storedPhotos };
      updatedPhotos[item.filename] = dataUrl;
      updatedPhotos[item.id] = dataUrl;
      updatedPhotos[`${cardNum}.jpeg`] = dataUrl;
      updatedPhotos[`${cardNum}.jpg`] = dataUrl;
      updatedPhotos[`award-${cardNum}`] = dataUrl;
      updatedPhotos[file.name] = dataUrl;

      // Also persist with item.id and alias in IndexedDB
      await saveAwardPhoto(item.id, file);
      if (cardNum >= 20 && cardNum <= 26) {
        const ujjainOffset = cardNum - 19;
        await saveAwardPhoto(`00${ujjainOffset}.jpeg`, file);
        updatedPhotos[`00${ujjainOffset}.jpeg`] = dataUrl;
      }

      setStoredPhotos(updatedPhotos);
      showNotification(
        language === 'hi'
          ? `सम्मान चित्र #${cardNum} सफलतापूर्वक अपडेट हुआ`
          : `Photo for Award #${cardNum} updated successfully`
      );
    } catch (err) {
      console.error('Error saving image:', err);
    }
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    let count = 0;
    const newPhotos: Record<string, string> = { ...storedPhotos };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const lowerName = file.name.toLowerCase();

      // 1. Check exact filename or ID
      let matchedItem = AWARDS_GALLERY.find(
        (a) =>
          a.filename.toLowerCase() === lowerName ||
          lowerName.includes(a.id.toLowerCase())
      );

      // 2. Check numeric match in filename: e.g. "20.jpeg", "20.jpg", "award-20", "image 20"
      if (!matchedItem) {
        const numMatch = lowerName.match(/\b(\d+)\b/);
        if (numMatch) {
          const num = parseInt(numMatch[1], 10);
          if (num >= 1 && num <= AWARDS_GALLERY.length) {
            matchedItem = AWARDS_GALLERY[num - 1];
          } else if (num >= 1 && num <= 7) {
            // For 001.jpeg to 007.jpeg -> matches Ujjain awards 20 to 26
            matchedItem = AWARDS_GALLERY[19 + num - 1];
          }
        }
      }

      // 3. Check for 001 to 007 in file name
      if (!matchedItem) {
        for (let u = 1; u <= 7; u++) {
          if (lowerName.includes(`00${u}`) || lowerName.includes(`0${u}`)) {
            matchedItem = AWARDS_GALLERY[19 + u - 1];
            break;
          }
        }
      }

      const targetKey = matchedItem ? matchedItem.filename : file.name;
      try {
        const dataUrl = await saveAwardPhoto(targetKey, file);
        newPhotos[targetKey] = dataUrl;
        newPhotos[file.name] = dataUrl;
        if (matchedItem) {
          newPhotos[matchedItem.id] = dataUrl;
          const idx = AWARDS_GALLERY.findIndex((a) => a.id === matchedItem?.id);
          if (idx !== -1) {
            newPhotos[`${idx + 1}.jpeg`] = dataUrl;
            newPhotos[`${idx + 1}.jpg`] = dataUrl;
            newPhotos[`award-${idx + 1}`] = dataUrl;
          }
        }
        count++;
      } catch (err) {
        console.error('Error saving image:', err);
      }
    }

    setStoredPhotos(newPhotos);
    showNotification(
      language === 'hi'
        ? `${count} चित्र सफलतापूर्वक जोड़े गए`
        : `${count} photo(s) synchronized successfully`
    );
  };

  const handleCaptionChange = (id: string, newCaption: string) => {
    const updated = { ...captions, [id]: newCaption };
    setCaptions(updated);
    saveCustomCaption(id, newCaption);
  };

  const handleClearPhotos = async () => {
    if (
      window.confirm(
        language === 'hi'
          ? 'क्या आप सभी सहेजे गए चित्र रीसेट करना चाहते हैं?'
          : 'Reset all synchronized photos back to default asset paths?'
      )
    ) {
      await clearAllAwardPhotos();
      setStoredPhotos({});
      showNotification(language === 'hi' ? 'चित्र रीसेट किए गए' : 'Photos reset to default');
    }
  };

  const filteredAwards = AWARDS_GALLERY.filter((item, idx) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ujjain') return idx >= 19 && idx <= 25; // awards #20 to #26
    return item.category === selectedCategory;
  });

  // Resolve best image URL for an item, checking all possible aliases
  const getPhotoSrc = (item: AwardPhotoItem, fullIndex: number) => {
    // 1. Direct match by filename
    if (storedPhotos[item.filename]) {
      return storedPhotos[item.filename];
    }
    // 2. Direct match by item ID
    if (storedPhotos[item.id]) {
      return storedPhotos[item.id];
    }
    // 3. Match by card 1-based index (e.g., '20.jpeg', '20.jpg', '20.png', '20')
    const num = fullIndex + 1;
    const numKeys = [
      `${num}.jpeg`,
      `${num}.jpg`,
      `${num}.png`,
      `${num}.webp`,
      `${num}`,
      `image_${num}.jpeg`,
      `image_${num}.jpg`,
      `award-${num}.jpeg`,
      `award-${num}.jpg`,
      `award-${num}`
    ];
    for (const key of numKeys) {
      if (storedPhotos[key]) return storedPhotos[key];
    }
    // 4. For awards 20-26 (which correspond to Ujjain photos 1-7 or 001-007):
    if (num >= 20 && num <= 26) {
      const ujjainOffset = num - 19; // 1 to 7
      const ujjainKeys = [
        `00${ujjainOffset}.jpeg`,
        `00${ujjainOffset}.jpg`,
        `00${ujjainOffset}.png`,
        `0${ujjainOffset}.jpeg`,
        `0${ujjainOffset}.jpg`,
        `${ujjainOffset}.jpeg`,
        `${ujjainOffset}.jpg`
      ];
      for (const key of ujjainKeys) {
        if (storedPhotos[key]) return storedPhotos[key];
      }
    }
    // 5. Fuzzy match against any key in storedPhotos
    for (const [key, val] of Object.entries(storedPhotos)) {
      const lower = key.toLowerCase();
      if (lower === item.filename.toLowerCase() || lower === item.id.toLowerCase()) {
        return val;
      }
    }

    // Standard relative URL for public directory
    return `/awards/${encodeURIComponent(item.filename)}`;
  };

  return (
    <div id="awards-gallery-container" className="space-y-8">
      {/* Category Filter and Sync Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 border border-[#EAE3D9] shadow-2xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#786E64] flex items-center gap-1 mr-1">
            <Filter size={13} className="text-[#8C6D23]" />
            <span>{language === 'hi' ? 'श्रेणी:' : 'Filter:'}</span>
          </span>

          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            {t.about.awardsFilterAll}
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('ujjain')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
              selectedCategory === 'ujjain'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            <span>🔱</span>
            <span>{language === 'hi' ? 'महाकाल उज्जैन (#20-#26)' : 'Mahakal Ujjain (#20-#26)'}</span>
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('felicitation')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'felicitation'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            {t.about.awardsFilterFelicitation}
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('conclave')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'conclave'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            {t.about.awardsFilterConclave}
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('press')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'press'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            {t.about.awardsFilterPress}
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('memento')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === 'memento'
                ? 'bg-[#8C6D23] text-white shadow-2xs'
                : 'bg-[#F5EFE6] text-[#564E46] hover:bg-[#EAE3D9]'
            }`}
          >
            {t.about.awardsFilterMemento}
          </button>
        </div>

        {/* Action Controls: Upload / Drop & Reset */}
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              handleFileUpload(e.target.files);
              if (e.target) e.target.value = '';
            }}
          />

          <input
            type="file"
            ref={cardInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0] && currentCardUploadRef.current) {
                handleDirectCardUpload(currentCardUploadRef.current, e.target.files[0]);
              }
              if (e.target) e.target.value = '';
            }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8C6D23] bg-[#EAD8B1]/40 hover:bg-[#EAD8B1]/70 border border-[#D4AF37]/50 transition-colors flex items-center gap-1.5"
            title="Upload or sync photos from your computer"
          >
            <Upload size={13} />
            <span>{language === 'hi' ? 'चित्र अपलोड / सिंक करें' : 'Upload / Sync Photos'}</span>
          </button>

          {Object.keys(storedPhotos).length > 0 && (
            <button
              type="button"
              onClick={handleClearPhotos}
              className="p-1.5 rounded-full text-[#786E64] hover:text-[#C53030] hover:bg-[#F5EFE6] transition-colors"
              title="Reset synced photos"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Quick Notification Toast */}
      {notification && (
        <div className="p-3 rounded-xl bg-[#2D2A26] text-white text-xs font-medium flex items-center gap-2 shadow-lg animate-fade-in">
          <Check size={14} className="text-[#D4AF37]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Drag & Drop Overlay Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDropActive(true);
        }}
        onDragLeave={() => setIsDropActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDropActive(false);
          handleFileUpload(e.dataTransfer.files);
        }}
        className={`relative transition-all rounded-3xl p-1 ${
          isDropActive ? 'ring-4 ring-[#D4AF37] ring-dashed bg-[#FAF8F5]' : ''
        }`}
      >
        {isDropActive && (
          <div className="absolute inset-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-xs rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-[#D4AF37] pointer-events-none p-6 text-center">
            <Camera size={44} className="text-[#8C6D23] animate-bounce mb-3" />
            <h4 className="font-cinzel text-lg font-bold text-[#2D2A26]">
              {language === 'hi' ? 'सम्मान चित्र यहाँ छोड़ें' : 'Drop your award photos here'}
            </h4>
            <p className="text-xs text-[#786E64] mt-1">
              {language === 'hi'
                ? 'सभी चित्र स्वचालित रूप से गैलरी में जुड़ जाएंगे'
                : 'Files will be linked by filename and saved in your browser'}
            </p>
          </div>
        )}

        {/* Award Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((item) => {
            const fullIndex = AWARDS_GALLERY.findIndex((a) => a.id === item.id);
            const cardNum = fullIndex + 1;
            const currentCaption =
              captions[item.id] !== undefined && captions[item.id].trim() !== ''
                ? captions[item.id]
                : item.caption || '';
            const imgSrc = getPhotoSrc(item, fullIndex);
            const eventTitle = language === 'hi' && item.event_hi ? item.event_hi : item.event;

            return (
              <div
                key={item.id}
                id={`award-card-${item.id}`}
                className="group bg-white rounded-2xl border border-[#EAE3D9] hover:border-[#D4AF37]/70 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-4/3 bg-[#FAF8F5] overflow-hidden flex items-center justify-center">
                  <AwardImage
                    src={imgSrc}
                    alt={item.alt}
                    filename={item.filename}
                    eventTitle={eventTitle || ''}
                    index={cardNum}
                    onOpenLightbox={() => setActivePhotoIndex(fullIndex)}
                  />

                  {/* Corner Index Tag - Always reflects true award number 1-26 */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#2D2A26]/85 backdrop-blur-xs text-[11px] font-semibold text-white/95 border border-white/20 z-10 flex items-center gap-1.5 shadow-xs">
                    <Trophy size={11} className="text-[#D4AF37]" />
                    <span>#{cardNum}</span>
                  </div>

                  {/* Top Right Actions: Upload / Change Photo & Maximize */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      onClick={() => {
                        currentCardUploadRef.current = item;
                        cardInputRef.current?.click();
                      }}
                      className="px-2.5 py-1 rounded-full bg-white/95 hover:bg-white text-[#8C6D23] shadow-md flex items-center gap-1 text-[11px] font-semibold transition-all hover:scale-105"
                      title={language === 'hi' ? `चित्र #${cardNum} अपलोड करें / बदलें` : `Upload photo for #${cardNum}`}
                    >
                      <Camera size={12} />
                      <span className="hidden sm:inline">{language === 'hi' ? 'चित्र जोड़ें' : 'Upload'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex(fullIndex)}
                      className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-[#2D2A26] shadow-md flex items-center justify-center opacity-90 hover:opacity-100 transition-all hover:scale-105"
                      title={t.about.awardsViewFull}
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Card Content & Blank Photo Caption Space */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  {/* Event Name Tag */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#8C6D23] mb-1">
                      <Sparkles size={12} />
                      <span className="capitalize">{item.category}</span>
                    </div>
                    <h4 className="font-cinzel text-sm font-bold text-[#2D2A26] leading-snug line-clamp-2">
                      {eventTitle}
                    </h4>
                  </div>

                  {/* Photo Caption Space with Word Wrapping & Inline Edit */}
                  <div className="pt-2.5 border-t border-[#F0EAE0]">
                    <div className="flex items-center justify-between text-[11px] font-medium text-[#8C6D23] mb-1.5">
                      <span className="flex items-center gap-1 font-semibold">
                        <FileText size={12} className="text-[#8C6D23]" />
                        {language === 'hi'
                          ? currentCaption
                            ? 'चित्र विवरण (कैप्शन):'
                            : 'चित्र विवरण स्थान:'
                          : currentCaption
                          ? 'Photo Caption:'
                          : 'Photo Caption Space:'}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() =>
                            setEditingCaptionId(editingCaptionId === item.id ? null : item.id)
                          }
                          className="text-[10px] px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E2D8CA] text-[#786E64] hover:text-[#8C6D23] hover:border-[#8C6D23] flex items-center gap-1 transition-colors"
                          title={editingCaptionId === item.id ? 'Save / Close' : 'Edit Caption'}
                        >
                          {editingCaptionId === item.id ? (
                            <>
                              <Check size={10} className="text-green-600" />
                              <span>{language === 'hi' ? 'पूर्ण' : 'Done'}</span>
                            </>
                          ) : (
                            <>
                              <Edit3 size={10} />
                              <span>{language === 'hi' ? 'संपादित करें' : 'Edit'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Dedicated Caption Space: Wrapped Text View or Textarea Editor */}
                    {editingCaptionId === item.id ? (
                      <div className="relative">
                        <textarea
                          rows={2}
                          value={currentCaption}
                          onChange={(e) => handleCaptionChange(item.id, e.target.value)}
                          placeholder={
                            language === 'hi'
                              ? 'कैप्शन दर्ज करें (शब्द स्वतः रैप होंगे)...'
                              : 'Enter caption (words will wrap automatically)...'
                          }
                          className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-[#D4AF37] text-[#2D2A26] placeholder:text-[#B5A898] placeholder:italic focus:outline-hidden focus:ring-1 focus:ring-[#D4AF37] resize-none transition-all leading-relaxed whitespace-pre-wrap break-words"
                          autoFocus
                        />
                        <div className="text-[10px] text-right text-[#A09383] mt-0.5">
                          {language === 'hi' ? 'परिवर्तन स्वतः सहेजे जाते हैं' : 'Auto-saved'}
                        </div>
                      </div>
                    ) : (
                      <div
                        onClick={() => setEditingCaptionId(item.id)}
                        className="cursor-pointer group/cap rounded-xl p-2.5 bg-[#FAF8F5] border border-[#EAE3D9] hover:border-[#D4AF37] hover:bg-[#FDFBF7] transition-all"
                        title={language === 'hi' ? 'संपादित करने के लिए क्लिक करें' : 'Click to edit caption'}
                      >
                        {currentCaption ? (
                          <p className="text-xs sm:text-[13px] font-medium text-[#2D2A26] leading-relaxed whitespace-normal break-words">
                            {currentCaption}
                          </p>
                        ) : (
                          <p className="text-xs text-[#A89F91] italic flex items-center justify-between">
                            <span>
                              {language === 'hi'
                                ? 'कैप्शन स्थान (वर्तमान में रिक्त)...'
                                : 'Caption space (currently blank)...'}
                            </span>
                            <Edit3 size={11} className="opacity-40 group-hover/cap:opacity-100 text-[#8C6D23] transition-opacity ml-1 shrink-0" />
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / High Resolution Modal */}
      {activePhotoIndex !== null && activePhotoIndex >= 0 && activePhotoIndex < AWARDS_GALLERY.length && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1A1816]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#24211E] rounded-3xl border border-[#D4AF37]/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
                  <Trophy size={16} />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#F5EFE6]">
                    {language === 'hi' && AWARDS_GALLERY[activePhotoIndex].event_hi
                      ? AWARDS_GALLERY[activePhotoIndex].event_hi
                      : AWARDS_GALLERY[activePhotoIndex].event}
                  </h3>
                  <p className="text-xs text-[#A89F91]">
                    {language === 'hi' ? 'सम्मान चित्र' : 'Award Photo'} #{activePhotoIndex + 1} of{' '}
                    {AWARDS_GALLERY.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    currentCardUploadRef.current = AWARDS_GALLERY[activePhotoIndex];
                    cardInputRef.current?.click();
                  }}
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Upload or change photo for this award"
                >
                  <Camera size={13} />
                  <span>{language === 'hi' ? 'चित्र बदलें / जोड़ें' : 'Change / Upload'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(null)}
                  className="p-2 rounded-full text-[#A89F91] hover:text-white hover:bg-white/10 transition-colors"
                  title={t.about.awardsClose}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Large Image */}
            <div className="relative flex-1 bg-black/40 flex items-center justify-center p-4 sm:p-8 min-h-[320px] max-h-[60vh] overflow-hidden">
              <img
                src={getPhotoSrc(AWARDS_GALLERY[activePhotoIndex], activePhotoIndex)}
                alt={AWARDS_GALLERY[activePhotoIndex].alt}
                className="max-h-[55vh] max-w-full object-contain rounded-xl shadow-lg border border-white/10"
                onError={(e) => {
                  // Fallback to placeholder if not found
                  (e.target as HTMLElement).style.display = 'none';
                  const fallbackEl = document.getElementById('lightbox-fallback');
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />

              {/* Fallback container if file not on disk */}
              <div
                id="lightbox-fallback"
                style={{ display: 'none' }}
                className="flex-col items-center justify-center text-center p-8 bg-white/5 rounded-2xl border border-[#D4AF37]/30 max-w-md"
              >
                <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mb-4">
                  <SpiritualLotusIcon size={40} color="#D4AF37" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-white mb-1">
                  {AWARDS_GALLERY[activePhotoIndex].event}
                </h4>
                <p className="text-xs text-[#D4AF37] font-mono mb-4">
                  #{activePhotoIndex + 1} • {AWARDS_GALLERY[activePhotoIndex].filename}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    currentCardUploadRef.current = AWARDS_GALLERY[activePhotoIndex];
                    cardInputRef.current?.click();
                  }}
                  className="px-4 py-2 rounded-full bg-[#8C6D23] hover:bg-[#A38029] text-white text-xs font-semibold flex items-center gap-2 mb-3 shadow-md transition-colors"
                >
                  <Camera size={14} />
                  <span>{language === 'hi' ? 'यहाँ चित्र अपलोड करें' : 'Upload photo here'}</span>
                </button>
                <p className="text-xs text-[#A89F91] leading-relaxed">
                  {language === 'hi'
                    ? 'चित्र देखने के लिए ऊपर "चित्र बदलें / जोड़ें" बटन द्वारा फ़ाइल चुनें।'
                    : 'To view this photo, click the upload button above or place the file in /public/awards/.'}
                </p>
              </div>

              {/* Prev / Next navigation buttons */}
              {activePhotoIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(activePhotoIndex - 1)}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors z-10"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={18} />
                </button>
              )}
              {activePhotoIndex < AWARDS_GALLERY.length - 1 && (
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(activePhotoIndex + 1)}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors z-10"
                  aria-label="Next photo"
                >
                  <ChevronRight size={18} />
                </button>
              )}
            </div>

            {/* Modal Footer: Photo Caption Space with Word Wrapping & Edit */}
            <div className="p-4 sm:p-5 bg-[#1F1C1A] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="w-full sm:max-w-xl">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold flex items-center gap-1.5">
                    <FileText size={13} className="text-[#D4AF37]" />
                    {language === 'hi' ? 'चित्र विवरण (कैप्शन):' : 'Photo Caption:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsModalEditingCaption(!isModalEditingCaption)}
                    className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 border border-white/20 text-[#D4AF37] flex items-center gap-1 transition-colors"
                  >
                    {isModalEditingCaption ? (
                      <>
                        <Check size={11} className="text-green-400" />
                        <span>{language === 'hi' ? 'पूर्ण' : 'Done'}</span>
                      </>
                    ) : (
                      <>
                        <Edit3 size={11} />
                        <span>{language === 'hi' ? 'संपादित करें' : 'Edit'}</span>
                      </>
                    )}
                  </button>
                </div>

                {isModalEditingCaption ? (
                  <div>
                    <textarea
                      rows={2}
                      value={
                        captions[AWARDS_GALLERY[activePhotoIndex].id] !== undefined &&
                        captions[AWARDS_GALLERY[activePhotoIndex].id] !== ''
                          ? captions[AWARDS_GALLERY[activePhotoIndex].id]
                          : AWARDS_GALLERY[activePhotoIndex].caption || captions[AWARDS_GALLERY[activePhotoIndex].id] || ''
                      }
                      onChange={(e) =>
                        handleCaptionChange(AWARDS_GALLERY[activePhotoIndex].id, e.target.value)
                      }
                      placeholder={language === 'hi' ? 'चित्र विवरण (कैप्शन) दर्ज करें...' : 'Enter photo caption...'}
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg bg-white/10 border border-[#D4AF37]/60 text-white placeholder:text-white/40 focus:outline-hidden focus:border-[#D4AF37] leading-relaxed whitespace-pre-wrap break-words resize-none"
                      autoFocus
                    />
                    <span className="text-[10px] text-white/50 block text-right mt-0.5">
                      {language === 'hi' ? 'परिवर्तन स्वतः सहेजे जाते हैं' : 'Auto-saved'}
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsModalEditingCaption(true)}
                    className="cursor-pointer rounded-xl p-2.5 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all"
                    title={language === 'hi' ? 'संपादित करने के लिए क्लिक करें' : 'Click to edit caption'}
                  >
                    {captions[AWARDS_GALLERY[activePhotoIndex].id] || AWARDS_GALLERY[activePhotoIndex].caption ? (
                      <p className="text-xs sm:text-sm font-medium text-[#F5EFE6] leading-relaxed whitespace-normal break-words">
                        {captions[AWARDS_GALLERY[activePhotoIndex].id] !== undefined &&
                        captions[AWARDS_GALLERY[activePhotoIndex].id] !== ''
                          ? captions[AWARDS_GALLERY[activePhotoIndex].id]
                          : AWARDS_GALLERY[activePhotoIndex].caption}
                      </p>
                    ) : (
                      <p className="text-xs text-[#A89F91] italic flex items-center justify-between">
                        <span>{language === 'hi' ? 'चित्र विवरण रिक्त है (संपादित करने हेतु क्लिक करें)...' : 'Caption space is blank (click to edit)...'}</span>
                        <Edit3 size={12} className="text-[#D4AF37] opacity-60" />
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1 text-[#A89F91] shrink-0">
                <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded-md border border-white/10">
                  #{activePhotoIndex + 1} • {AWARDS_GALLERY[activePhotoIndex].filename}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sub-component to gracefully handle image loading with elegant commemorative fallback
interface AwardImageProps {
  src: string;
  alt: string;
  filename: string;
  eventTitle: string;
  index: number;
  onOpenLightbox: () => void;
}

const AwardImage: React.FC<AwardImageProps> = ({
  src,
  alt,
  filename,
  eventTitle,
  index,
  onOpenLightbox
}) => {
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setLoadFailed(false);
  }, [src]);

  if (loadFailed) {
    return (
      <div
        onClick={onOpenLightbox}
        className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-linear-to-b from-[#F5EFE6] to-[#FAF8F5] relative overflow-hidden group/fallback"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <SacredMandala size={160} strokeColor="#8C6D23" />
        </div>
        <div className="w-14 h-14 rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/50 flex items-center justify-center mb-2.5 shadow-inner relative z-10 group-hover/fallback:scale-105 transition-transform">
          <SpiritualLotusIcon size={26} color="#8C6D23" />
        </div>
        <h5 className="font-cinzel text-xs font-bold text-[#2D2A26] line-clamp-2 max-w-[200px] mb-1 relative z-10">
          {eventTitle}
        </h5>
        <div className="flex items-center gap-1.5 relative z-10 my-1">
          <span className="text-[10px] font-semibold text-[#8C6D23] bg-[#EAD8B1]/40 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
            #{index}
          </span>
          <span className="text-[10px] font-mono text-[#786E64] bg-white/80 px-2 py-0.5 rounded-full border border-[#D4AF37]/20 truncate max-w-[140px]">
            {filename}
          </span>
        </div>
        <span className="text-[10px] text-[#8C6D23] font-medium underline mt-1 relative z-10">
          चित्र देखने / जोड़ने हेतु क्लिक करें
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setLoadFailed(true)}
      onClick={onOpenLightbox}
      className="w-full h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
    />
  );
};
