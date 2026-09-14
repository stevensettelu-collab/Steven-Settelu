import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import { ServiceItem, SpecialOffer, TeamMember, BookingFormData } from '../types';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Scissors
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
  initialOffer?: SpecialOffer | null;
  initialStylist?: TeamMember | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialOffer,
  initialStylist
}) => {
  const { config, services, offers, team, submitBooking } = useSalon();

  // Steps: 1: Service selection, 2: Date & Time, 3: Client Details, 4: Confirmation Screen
  const [step, setStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('hair');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('11:00 AM');
  const [preferredStylistId, setPreferredStylistId] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingResult, setBookingResult] = useState<{ success: boolean; bookingRef: string } | null>(null);

  // Time slot options
  const morningSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'];
  const afternoonSlots = ['01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];
  const eveningSlots = ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM'];

  // Sync initial selections
  useEffect(() => {
    if (initialService) {
      setSelectedCategory(initialService.category);
      setSelectedServiceId(initialService.id);
      setStep(2); // Jump to date/time directly if service was already clicked
    } else if (initialOffer) {
      setSelectedCategory(initialOffer.category || 'hair');
      setSelectedServiceId(`offer:${initialOffer.id}`);
      setStep(2);
    } else {
      setSelectedServiceId(services[0]?.id || '');
      setStep(1);
    }

    if (initialStylist) {
      setPreferredStylistId(initialStylist.id);
    }
  }, [initialService, initialOffer, initialStylist, services]);

  if (!isOpen) return null;

  // Selected item object
  const currentService = services.find((s) => s.id === selectedServiceId);
  const currentOffer = selectedServiceId.startsWith('offer:')
    ? offers.find((o) => `offer:${o.id}` === selectedServiceId)
    : null;
  const currentStylist = team.find((t) => t.id === preferredStylistId);

  const selectedServiceName = currentOffer
    ? currentOffer.title
    : currentService
    ? currentService.name
    : 'Custom Salon Consultation';

  const selectedServicePrice = currentOffer
    ? currentOffer.offerPrice
    : currentService
    ? currentService.startingPrice
    : 0;

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 1 && !selectedServiceId) return;
    if (step === 2 && (!selectedDate || !selectedTimeSlot)) return;
    if (step === 3) {
      if (!clientName.trim() || !clientPhone.trim()) return;
      handleFinalSubmit();
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    const bookingData: BookingFormData = {
      serviceId: selectedServiceId,
      serviceName: selectedServiceName,
      category: selectedCategory,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      stylistId: preferredStylistId || undefined,
      clientName,
      clientPhone,
      clientEmail: clientEmail || undefined,
      specialNotes: specialNotes || undefined
    };

    try {
      const res = await submitBooking(bookingData);
      setBookingResult(res);
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppConfirmation = () => {
    const stylistMention = currentStylist ? `with stylist ${currentStylist.name}` : '';
    const message = encodeURIComponent(
      `*New Salon Booking at Cre8 Salon Unisex*\n` +
      `--------------------------------\n` +
      `📋 *Ref:* ${bookingResult?.bookingRef || 'CR8-BOOKING'}\n` +
      `👤 *Name:* ${clientName}\n` +
      `📞 *Phone:* ${clientPhone}\n` +
      `✨ *Service:* ${selectedServiceName}\n` +
      `🗓️ *Date:* ${selectedDate}\n` +
      `⏰ *Time Slot:* ${selectedTimeSlot}\n` +
      (stylistMention ? `✂️ *Stylist:* ${currentStylist?.name}\n` : '') +
      (specialNotes ? `📝 *Notes:* ${specialNotes}\n` : '') +
      `\nPlease confirm this slot at Marathon Monte Plaza, Mulund West.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-stone-200 my-auto animate-in fade-in zoom-in-95 duration-200 text-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#121212] text-white p-5 sm:p-6 flex items-center justify-between relative">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider">CRE8</span>
              <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase">
                SALON UNISEX
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-sans">
              Marathon Monte Plaza, Mulund West · Book in 60 Seconds
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator (Steps 1 to 3) */}
        {step < 4 && (
          <div className="px-6 pt-4 pb-2 bg-stone-50 border-b border-stone-200">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-600 mb-2">
              <span className={step === 1 ? 'text-[#8C6D1F] font-bold' : ''}>1. Service</span>
              <ChevronRight className="w-3 h-3 text-stone-300" />
              <span className={step === 2 ? 'text-[#8C6D1F] font-bold' : ''}>2. Date & Time</span>
              <ChevronRight className="w-3 h-3 text-stone-300" />
              <span className={step === 3 ? 'text-[#8C6D1F] font-bold' : ''}>3. Your Details</span>
            </div>
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#C5A028] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {/* STEP 1: CHOOSE SERVICE */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                  Step 1: Choose Your Service
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Select a category and service for your upcoming appointment.
                </p>
              </div>

              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
                {[
                  { id: 'hair', name: 'Hair' },
                  { id: 'skin', name: 'Skin & Facials' },
                  { id: 'grooming', name: 'Grooming' },
                  { id: 'nails', name: 'Nails' },
                  { id: 'bridal', name: 'Bridal' },
                  { id: 'spa', name: 'Spa' }
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === c.id
                        ? 'bg-[#121212] text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>

              {/* Service Selection List */}
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {services
                  .filter((s) => s.category === selectedCategory)
                  .map((s) => {
                    const isSelected = selectedServiceId === s.id;
                    return (
                      <div
                        key={s.id}
                        onClick={() => setSelectedServiceId(s.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#FBF7EE] border-[#D4AF37] shadow-sm ring-1 ring-[#D4AF37]'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-stone-900 leading-snug">
                            {s.name}
                          </div>
                          <div className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                            {s.description}
                          </div>
                          <div className="text-[11px] text-stone-400 mt-0.5">
                            Duration: {s.duration}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs text-stone-400 block font-medium">From</span>
                          <span className="text-sm font-bold text-stone-900 font-serif">
                            ₹{s.startingPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <button
                type="button"
                disabled={!selectedServiceId}
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl text-sm font-bold bg-[#121212] text-white hover:bg-stone-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
              >
                <span>Continue to Date & Time</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: CHOOSE DATE & TIME */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                  Step 2: Select Date & Slot
                </h3>
                <div className="text-xs text-[#8C6D1F] font-semibold bg-[#FBF7EE] p-2 rounded-lg border border-[#D4AF37]/20 flex items-center gap-2">
                  <Scissors className="w-4 h-4 text-[#D4AF37]" />
                  <span>Selected: {selectedServiceName} (₹{selectedServicePrice.toLocaleString('en-IN')})</span>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Choose Appointment Date:
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm font-medium text-stone-900 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Preferred Time Slot (10 AM – 9 PM):
                </label>

                {/* Morning Slots */}
                <div className="mb-3">
                  <span className="text-[11px] text-stone-400 font-semibold uppercase block mb-1.5">
                    Morning (10:00 AM – 1:00 PM)
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {morningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#121212] text-white border-black shadow-sm'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div className="mb-3">
                  <span className="text-[11px] text-stone-400 font-semibold uppercase block mb-1.5">
                    Afternoon (1:00 PM – 5:00 PM)
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {afternoonSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#121212] text-white border-black shadow-sm'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Evening Slots */}
                <div>
                  <span className="text-[11px] text-stone-400 font-semibold uppercase block mb-1.5">
                    Evening (5:00 PM – 8:30 PM)
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {eveningSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          selectedTimeSlot === slot
                            ? 'bg-[#121212] text-white border-black shadow-sm'
                            : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Stylist Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Preferred Stylist (Optional):
                </label>
                <select
                  value={preferredStylistId}
                  onChange={(e) => setPreferredStylistId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm text-stone-900 bg-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="">Any Available Certified Stylist</option>
                  {team.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} — {t.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-xl text-xs font-bold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Continue to Client Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CLIENT DETAILS */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">
                  Step 3: Your Contact Details
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  We will send your booking confirmation and slot reminder to your phone.
                </p>
              </div>

              {/* Summary Pill */}
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200 text-xs space-y-1">
                <div className="flex justify-between font-bold text-stone-900">
                  <span>{selectedServiceName}</span>
                  <span className="font-serif">₹{selectedServicePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-stone-500">
                  🗓️ {selectedDate} at {selectedTimeSlot}
                  {currentStylist ? ` with ${currentStylist.name}` : ''}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Mehta / Priya Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Phone Number (WhatsApp Active) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 090042 39091 or +91 98765 43210"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Special Notes / Hair Length / Allergies (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    placeholder="e.g. Long hair, looking for ash blonde toner, sensitive skin..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-xl text-xs font-bold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !clientName || !clientPhone}
                  className="flex-1 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black hover:from-[#DFC46D] hover:to-[#D4AF37] disabled:opacity-50 shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Confirming...</span>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      <span>Confirm Salon Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION SUCCESS SCREEN */}
          {step === 4 && bookingResult && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D1F] bg-[#FBF7EE] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  Booking Confirmed
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900 mt-2 mb-1">
                  We’re Excited to See You!
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 font-sans max-w-md mx-auto">
                  Your appointment slot at Marathon Monte Plaza, Mulund West has been saved.
                </p>
              </div>

              {/* Reference Card */}
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200 text-left max-w-md mx-auto space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                  <span className="text-xs text-stone-500">Booking Reference:</span>
                  <span className="text-sm font-mono font-bold text-stone-900 bg-white px-2.5 py-0.5 rounded border border-stone-300">
                    {bookingResult.bookingRef}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Client:</span>
                  <span className="font-semibold text-stone-900">{clientName} ({clientPhone})</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-semibold text-stone-900">{selectedServiceName}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-500">Date & Time:</span>
                  <span className="font-semibold text-stone-900">{selectedDate} at {selectedTimeSlot}</span>
                </div>

                {currentStylist && (
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-500">Stylist:</span>
                    <span className="font-semibold text-stone-900">{currentStylist.name}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-xs pt-1">
                  <span className="text-stone-500">Address:</span>
                  <span className="font-semibold text-stone-900 text-right text-[11px] max-w-[200px]">
                    Marathon Monte Plaza, Mulund West, Mumbai
                  </span>
                </div>
              </div>

              {/* Direct Actions: WhatsApp & Call */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="flex-1 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send to WhatsApp</span>
                </button>

                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Salon</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-stone-500 hover:text-stone-800 underline font-medium block mx-auto"
              >
                Close and return to website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
