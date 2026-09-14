import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  CheckCircle2,
  Car,
  Calendar,
  Send,
  Sparkles
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { config, openBookingModal } = useSalon();

  // Quick enquiry form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('Hair Care & Styling');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const whatsappMsg = encodeURIComponent(
      `*New Inquiry from Website Contact Form*\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✨ *Interest:* ${serviceOfInterest}\n` +
      (message ? `💬 *Message:* ${message}\n` : '') +
      `\nPlease assist with appointment scheduling.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${whatsappMsg}`, '_blank');
    setSubmitted(true);
  };

  const handleDirections = () => {
    window.open(config.googleMapsUrl, '_blank');
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>MULUND WEST DESTINATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Visit Cre8 Salon Unisex
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Conveniently situated at Marathon Monte Plaza in Asha Nagar, Mulund West. Easily accessible with ample parking and a serene, luxury ambiance.
          </p>
        </div>

        {/* Main Grid: Location Details + Google Map Embed + Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Salon Address, Hours, Contact Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm">
            <div>
              {/* Live Open Status Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Today · Closes 9:00 PM</span>
              </div>

              {/* Address */}
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                  Salon Address
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug mb-1">
                  Marathon Monte Plaza
                </h3>
                <p className="text-sm text-stone-600 font-sans leading-relaxed">
                  {config.address}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-[#8C6D1F] font-medium">
                  <Car className="w-3.5 h-3.5" />
                  <span>Landmark: {config.landmark}</span>
                </div>
              </div>

              {/* Business Hours Table */}
              <div className="mb-6 bg-white p-4 rounded-2xl border border-stone-200/80">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Salon Working Hours</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-stone-800 font-semibold">
                    <span>Monday – Sunday (7 Days)</span>
                    <span className="text-[#8C6D1F]">10:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-stone-400 text-[11px]">
                    <span>Last Walk-in / Slot</span>
                    <span>8:15 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone & Contact Display */}
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                  Direct Phone Enquiries
                </span>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 hover:text-[#8C6D1F] transition-colors inline-block"
                >
                  {config.displayPhone}
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={handleDirections}
                className="py-3 px-4 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Get Directions</span>
              </button>

              <a
                href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hi Cre8 Salon, I am looking for directions and available appointment slots today.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed + Enquiry Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Map Container */}
            <div className="h-72 sm:h-80 w-full rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative bg-stone-100">
              <iframe
                title="Cre8 Salon Unisex Location Map at Marathon Monte Plaza Mulund West"
                src={config.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-200 shadow-sm text-xs font-bold text-stone-800">
                📍 Mulund West, Mumbai
              </div>
            </div>

            {/* Quick Contact & Question Form */}
            <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  Have a Question? Send a Direct Enquiry
                </h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl border border-emerald-200 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold block">Enquiry Sent Successfully!</span>
                    Our Mulund West front desk has received your note on WhatsApp.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number *"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <select
                        value={serviceOfInterest}
                        onChange={(e) => setServiceOfInterest(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="Hair Cut & Balayage">Hair Cut & Balayage</option>
                        <option value="Hydra Facial & Skincare">Hydra Facial & Skincare</option>
                        <option value="Men Beard & Grooming">Men Beard & Grooming</option>
                        <option value="Bridal & Event Makeover">Bridal & Event Makeover</option>
                        <option value="Manicure & Acrylic Nails">Manicure & Acrylic Nails</option>
                        <option value="Waxing & Threading">Waxing & Threading</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Preferred Day or Time (e.g. Saturday 4 PM)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs bg-white text-stone-900 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Send Quick Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
