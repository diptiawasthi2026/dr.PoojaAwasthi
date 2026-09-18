import React, { useState, useRef, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { ALL_LANGUAGES, INDIAN_LANGUAGES, INTERNATIONAL_LANGUAGES, LanguageMeta, getLanguageMeta } from '../data/languages';
import { Language } from '../types';
import { Globe, Check, Search, ChevronDown, Sparkles, X } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'footer' | 'inline' | 'compact';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'navbar', className = '' }) => {
  const { language, setLanguage } = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'indian' | 'international'>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentMeta = getLanguageMeta(language);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input on open
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Filter languages based on search and tab
  const filteredLanguages = ALL_LANGUAGES.filter((item) => {
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'indian' && item.category === 'indian') ||
      (activeTab === 'international' && item.category === 'international');

    if (!matchesTab) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    return (
      item.name.toLowerCase().includes(query) ||
      item.englishName.toLowerCase().includes(query) ||
      item.code.toLowerCase().includes(query) ||
      item.greeting.toLowerCase().includes(query)
    );
  });

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Quick switch chips
  const popularLanguages: Language[] = ['en', 'hi', 'bn', 'te', 'mr', 'ta', 'gu', 'es', 'ar'];

  if (variant === 'footer') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A231C] hover:bg-[#342B23] border border-[#3E342B] text-xs font-medium text-[#E8E1D7] transition-all hover:border-[#D4AF37]/50 shadow-2xs"
            aria-expanded={isOpen}
            aria-label="Select Language"
          >
            <Globe size={14} className="text-[#D4AF37]" />
            <span className="font-semibold text-white">{currentMeta.name}</span>
            <span className="text-[#A89D91] text-[11px]">({currentMeta.englishName})</span>
            <ChevronDown size={13} className={`text-[#A89D91] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-[calc(100vw-32px)] sm:w-96 max-w-sm max-h-[75vh] bg-[#1C1814] text-[#E8E1D7] border border-[#3E342B] rounded-2xl shadow-2xl p-4 z-50 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#2E2720]">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[#D4AF37]" />
                <span className="font-cinzel text-sm font-bold text-white">Choose Language / भाषा</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#8C8074] hover:text-white rounded-md"
              >
                <X size={15} />
              </button>
            </div>

            {/* Search Input */}
            <div className="mt-3 relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C8074]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages / भाषा खोजें..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#2A231C] border border-[#3E342B] rounded-lg text-white placeholder-[#8C8074] focus:outline-hidden focus:border-[#D4AF37]"
              />
            </div>

            {/* Language list */}
            <div className="mt-3 overflow-y-auto max-h-64 sm:max-h-72 space-y-1 pr-1 custom-scrollbar">
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#8C8074] px-2 py-1">
                Major Indian Languages (11)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {INDIAN_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelectLanguage(l.code)}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all text-left ${
                      language === l.code
                        ? 'bg-[#8C6D23] text-white font-semibold'
                        : 'hover:bg-[#2A231C] text-[#C8BFB5]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-white">{l.name}</div>
                      <div className="text-[10px] opacity-75">{l.englishName}</div>
                    </div>
                    {language === l.code && <Check size={13} className="text-white shrink-0" />}
                  </button>
                ))}
              </div>

              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#8C8074] px-2 pt-3 py-1">
                Major International Languages (6)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {INTERNATIONAL_LANGUAGES.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => handleSelectLanguage(l.code)}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all text-left ${
                      language === l.code
                        ? 'bg-[#8C6D23] text-white font-semibold'
                        : 'hover:bg-[#2A231C] text-[#C8BFB5]'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-white">{l.name}</div>
                      <div className="text-[10px] opacity-75">{l.englishName}</div>
                    </div>
                    {language === l.code && <Check size={13} className="text-white shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        id="navbar-language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#EFE8DE] hover:bg-[#E6DEC4] border border-[#E0D7CB] hover:border-[#D4AF37]/60 text-xs font-semibold text-[#564E46] transition-all shadow-2xs group focus:outline-hidden"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Select Language (10 Indian + 6 International Languages)"
      >
        <Globe size={13} className="text-[#8C6D23] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
        <span className="font-bold text-[#2D2A26] max-w-[85px] sm:max-w-none truncate">{currentMeta.name}</span>
        <span className="text-[10px] text-[#786E64] hidden sm:inline">({currentMeta.code.toUpperCase()})</span>
        <ChevronDown size={12} className={`text-[#8C6D23] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Backdrop overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/25 backdrop-blur-xs z-40 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Expanded Multi-Language Modal Dropdown */}
      {isOpen && (
        <div
          id="language-dropdown-panel"
          className="fixed inset-x-3 top-16 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-[460px] max-w-[calc(100vw-24px)] bg-[#FAF8F5] border border-[#E0D7CB] rounded-2xl shadow-2xl p-3.5 sm:p-4 z-50 animate-in fade-in zoom-in-95 duration-150 text-[#2D2A26] max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D9]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Globe size={15} className="text-[#8C6D23]" />
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-bold text-[#2D2A26]">
                  Select Language / भाषा चुनें
                </h3>
                <p className="text-[11px] text-[#786E64]">
                  10+ Indian & 6 International Languages
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#786E64] hover:text-[#2D2A26] hover:bg-[#EFE8DE] rounded-lg transition-colors"
              aria-label="Close language selector"
            >
              <X size={16} />
            </button>
          </div>

          {/* Quick Switch Chips */}
          <div className="pt-2 pb-1">
            <div className="text-[10px] uppercase font-bold tracking-wider text-[#786E64] mb-1.5 flex items-center gap-1">
              <Sparkles size={11} className="text-[#8C6D23]" />
              <span>Quick Select:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {popularLanguages.map((code) => {
                const meta = getLanguageMeta(code);
                const isActive = language === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleSelectLanguage(code)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#8C6D23] text-white shadow-2xs'
                        : 'bg-[#EFE8DE] text-[#564E46] hover:bg-[#E5DDCF] hover:text-[#2D2A26]'
                    }`}
                  >
                    {meta.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search bar & Tabs */}
          <div className="mt-2.5 space-y-2">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#786E64]" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search languages (e.g. Hindi, Bengali, Spanish, தமிழ்)..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#E0D7CB] rounded-xl text-[#2D2A26] placeholder-[#948A7E] focus:outline-hidden focus:border-[#8C6D23] focus:ring-1 focus:ring-[#8C6D23]/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#786E64] hover:text-[#2D2A26]"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex rounded-lg bg-[#EFE8DE] p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`flex-1 py-1 rounded-md transition-all ${
                  activeTab === 'all'
                    ? 'bg-white text-[#2D2A26] font-bold shadow-2xs'
                    : 'text-[#6B5A4B] hover:text-[#2D2A26]'
                }`}
              >
                All (17)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('indian')}
                className={`flex-1 py-1 rounded-md transition-all ${
                  activeTab === 'indian'
                    ? 'bg-white text-[#2D2A26] font-bold shadow-2xs'
                    : 'text-[#6B5A4B] hover:text-[#2D2A26]'
                }`}
              >
                Indian (11)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('international')}
                className={`flex-1 py-1 rounded-md transition-all ${
                  activeTab === 'international'
                    ? 'bg-white text-[#2D2A26] font-bold shadow-2xs'
                    : 'text-[#6B5A4B] hover:text-[#2D2A26]'
                }`}
              >
                International (6)
              </button>
            </div>
          </div>

          {/* Languages Grid */}
          <div className="mt-3 max-h-64 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {/* If tab is all or indian */}
            {(activeTab === 'all' || activeTab === 'indian') && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D23] px-1 pb-1 flex items-center justify-between">
                  <span>Major Indian Languages</span>
                  <span className="text-[#786E64] font-normal">{INDIAN_LANGUAGES.length} supported</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {INDIAN_LANGUAGES.filter((item) => {
                    if (!searchQuery.trim()) return true;
                    const q = searchQuery.toLowerCase().trim();
                    return (
                      item.name.toLowerCase().includes(q) ||
                      item.englishName.toLowerCase().includes(q) ||
                      item.code.toLowerCase().includes(q) ||
                      item.greeting.toLowerCase().includes(q)
                    );
                  }).map((item) => {
                    const isSelected = language === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => handleSelectLanguage(item.code)}
                        className={`flex items-center justify-between p-2 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-[#EAD8B1]/40 border-[#8C6D23] text-[#2D2A26] shadow-2xs'
                            : 'bg-white hover:bg-[#F5EFE6] border-[#EAE3D9] text-[#4A423B]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold uppercase ${
                            isSelected ? 'bg-[#8C6D23] text-white' : 'bg-[#EFE8DE] text-[#6B5A4B]'
                          }`}>
                            {item.code}
                          </div>
                          <div className="truncate">
                            <div className="text-xs font-bold leading-tight text-[#2D2A26]">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-[#786E64] flex items-center gap-1.5">
                              <span>{item.englishName}</span>
                              <span className="text-[#8C6D23] font-serif-cormorant italic">“{item.greeting}”</span>
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#8C6D23] text-white flex items-center justify-center shrink-0">
                            <Check size={12} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* If tab is all or international */}
            {(activeTab === 'all' || activeTab === 'international') && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#8C6D23] px-1 pb-1 pt-1 flex items-center justify-between">
                  <span>Major International Languages</span>
                  <span className="text-[#786E64] font-normal">{INTERNATIONAL_LANGUAGES.length} supported</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {INTERNATIONAL_LANGUAGES.filter((item) => {
                    if (!searchQuery.trim()) return true;
                    const q = searchQuery.toLowerCase().trim();
                    return (
                      item.name.toLowerCase().includes(q) ||
                      item.englishName.toLowerCase().includes(q) ||
                      item.code.toLowerCase().includes(q) ||
                      item.greeting.toLowerCase().includes(q)
                    );
                  }).map((item) => {
                    const isSelected = language === item.code;
                    return (
                      <button
                        key={item.code}
                        type="button"
                        onClick={() => handleSelectLanguage(item.code)}
                        className={`flex items-center justify-between p-2 rounded-xl text-left border transition-all ${
                          isSelected
                            ? 'bg-[#EAD8B1]/40 border-[#8C6D23] text-[#2D2A26] shadow-2xs'
                            : 'bg-white hover:bg-[#F5EFE6] border-[#EAE3D9] text-[#4A423B]'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold uppercase ${
                            isSelected ? 'bg-[#8C6D23] text-white' : 'bg-[#EFE8DE] text-[#6B5A4B]'
                          }`}>
                            {item.code}
                          </div>
                          <div className="truncate">
                            <div className="text-xs font-bold leading-tight text-[#2D2A26]">
                              {item.name}
                            </div>
                            <div className="text-[10px] text-[#786E64] flex items-center gap-1.5">
                              <span>{item.englishName}</span>
                              <span className="text-[#8C6D23] font-serif-cormorant italic">“{item.greeting}”</span>
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#8C6D23] text-white flex items-center justify-center shrink-0">
                            <Check size={12} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredLanguages.length === 0 && (
              <div className="text-center py-6 text-xs text-[#786E64]">
                No language found matching &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-3 pt-2.5 border-t border-[#EAE3D9] flex items-center justify-between text-[11px] text-[#786E64]">
            <span>Active: <strong className="text-[#8C6D23]">{currentMeta.name}</strong> ({currentMeta.englishName})</span>
            <button
              type="button"
              onClick={() => handleSelectLanguage('en')}
              className="text-[#8C6D23] hover:underline font-medium"
            >
              Reset to English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
