import React, { useState } from 'react';
import { useBrand } from '../context/BrandContext';
import { CORE_SERVICES } from '../data/spiritualData';
import { SpiritualLotusIcon } from './SacredMandala';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles, Send } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const {
    config,
    language,
    t,
    isBookingModalOpen,
    setIsBookingModalOpen,
    selectedServiceForBooking,
    setSelectedServiceForBooking
  } = useBrand();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [preferredSlot, setPreferredSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  const [intentNote, setIntentNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isBookingModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsBookingModalOpen(false);
    setIsSubmitted(false);
  };

  const selectedService = CORE_SERVICES.find((s) => s.id === selectedServiceForBooking) || CORE_SERVICES[0];
  const currentFounderName = language === 'hi' && config.founderName_hi ? config.founderName_hi : config.founderName;

  return (
    <div
      id="booking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1814]/75 backdrop-blur-xs"
    >
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 relative">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#786E64] hover:text-[#2D2A26] hover:bg-[#EAE3D9] transition-colors"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#EAD8B1]/40 border border-[#D4AF37]/50 flex items-center justify-center mb-3">
                <SpiritualLotusIcon size={24} color="#8C6D23" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26]">
                {t.booking.modalTitle}
              </h3>
              <p className="text-xs text-[#786E64] mt-1">
                {language === 'hi'
                  ? `पूजा जी के साथ 1-on-1 गोपनीय वीडियो / फोन सत्र`
                  : `Personalized 1-on-1 Virtual Session with ${currentFounderName}`}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label
                  htmlFor="booking-service-select"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                >
                  {t.booking.selectService}
                </label>
                <select
                  id="booking-service-select"
                  value={selectedServiceForBooking}
                  onChange={(e) => setSelectedServiceForBooking(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                >
                  {CORE_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {language === 'hi' ? `${s.title_hi} (${s.title})` : `${s.title} (${s.hindiTitle})`} —{' '}
                      {language === 'hi' ? s.sessionDuration_hi : s.sessionDuration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-fullname"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                  >
                    {t.booking.fullName} *
                  </label>
                  <input
                    id="booking-fullname"
                    type="text"
                    required
                    placeholder={t.booking.namePlaceholder}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                  >
                    {t.booking.emailAddress} *
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    required
                    placeholder={t.booking.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                  >
                    {t.booking.phoneWhatsapp} *
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    placeholder={t.booking.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-dob"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                  >
                    {t.booking.dob}
                  </label>
                  <input
                    id="booking-dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                  />
                </div>
              </div>

              {/* Time Preference */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5">
                  {t.booking.preferredTime}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredSlot('morning')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      preferredSlot === 'morning'
                        ? 'bg-[#8C6D23] text-white border-[#8C6D23] shadow-xs'
                        : 'bg-white text-[#564E46] border-[#D5CABB]'
                    }`}
                  >
                    {t.booking.timeMorning}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredSlot('afternoon')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      preferredSlot === 'afternoon'
                        ? 'bg-[#8C6D23] text-white border-[#8C6D23] shadow-xs'
                        : 'bg-white text-[#564E46] border-[#D5CABB]'
                    }`}
                  >
                    {t.booking.timeAfternoon}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreferredSlot('evening')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all ${
                      preferredSlot === 'evening'
                        ? 'bg-[#8C6D23] text-white border-[#8C6D23] shadow-xs'
                        : 'bg-white text-[#564E46] border-[#D5CABB]'
                    }`}
                  >
                    {t.booking.timeEvening}
                  </button>
                </div>
              </div>

              {/* Intent Note */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#4A423B] mb-1.5"
                >
                  {t.booking.notes}
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  placeholder={t.booking.notesPlaceholder}
                  value={intentNote}
                  onChange={(e) => setIntentNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#D5CABB] bg-white text-sm text-[#2D2A26] focus:outline-hidden focus:border-[#8C6D23]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#786E64]">
                  <ShieldCheck size={14} className="text-[#8C6D23]" />
                  <span>100% Confidential</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#786E64] hover:bg-[#EAE3D9]"
                  >
                    {t.booking.cancel}
                  </button>
                  <button
                    type="submit"
                    id="btn-confirm-booking"
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-linear-to-r from-[#8C6D23] to-[#B8860B] hover:from-[#785D1E] hover:to-[#A37508] shadow-xs flex items-center gap-2"
                  >
                    <Send size={13} />
                    <span>{t.booking.confirmBooking}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#EAD8B1]/40 border-2 border-[#D4AF37] flex items-center justify-center">
              <CheckCircle2 size={32} className="text-[#8C6D23]" />
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#2D2A26]">
              {t.booking.successTitle}
            </h3>

            <p className="text-sm text-[#564E46] max-w-md mx-auto leading-relaxed">
              {language === 'hi'
                ? `धन्यवाद ${fullName || ''}! पूजा जी की टीम आपके द्वारा दिए गए नंबर (${phone}) या ईमेल पर 24 घंटे के भीतर संपर्क करेगी।`
                : `Thank you ${fullName || ''}! Your consultation request for ${selectedService.title} has been received. Pooja ji's team will contact you within 24 hours at ${phone || email} to confirm your appointment.`}
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#EAE3D9] max-w-sm mx-auto text-xs text-left space-y-1.5 text-[#6B5A4B]">
              <p>
                <strong>{t.booking.selectService}:</strong>{' '}
                {language === 'hi' ? selectedService.title_hi : selectedService.title}
              </p>
              <p>
                <strong>{t.booking.preferredTime}:</strong>{' '}
                {preferredSlot.charAt(0).toUpperCase() + preferredSlot.slice(1)}
              </p>
              <p>
                <strong>{t.booking.phoneWhatsapp}:</strong> {phone}
              </p>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#8C6D23] hover:bg-[#785D1E]"
              >
                {t.booking.close}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
