import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Star, MapPin, Calendar, MessageCircle, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { config } = useSalon();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Cre8 Salon, I’d like to book an appointment. Please share the available slots.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#121212] overflow-hidden">
      {/* Background Image with Cinematic Luxury Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=85&w=1920&auto=format&fit=crop"
          alt="Cre8 Salon Unisex interior in Mulund West"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered luxury gradients for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/85 to-[#121212]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(212,175,55,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Location & Trust Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <span
              id="hero-location-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white backdrop-blur-md border border-white/20"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>📍 Mulund West, Mumbai</span>
            </span>

            <span
              id="hero-trust-badge"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/20 text-[#DFC46D] backdrop-blur-md border border-[#D4AF37]/35"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Trusted by 1,000+ customers</span>
            </span>
          </div>

          {/* Hero Headline */}
          <h1
            id="hero-main-heading"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Your Best Look <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC46D] via-[#D4AF37] to-[#F5ECCF] italic">
              Starts Here.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            id="hero-supporting-copy"
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-sans leading-relaxed max-w-2xl mb-8"
          >
            Premium hair, beauty and grooming services designed around you. Experience professional styling, personalized care and a salon experience you’ll want to come back to.
          </p>

          {/* Social Proof Rating Card (Above CTAs for High-Trust First 5s View) */}
          <div
            id="hero-social-proof-card"
            className="inline-flex flex-wrap items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#1A1A1A]/85 backdrop-blur-md border border-white/15 mb-8 shadow-2xl"
          >
            <div className="flex items-center gap-1 bg-[#D4AF37]/20 px-2.5 py-1 rounded-lg border border-[#D4AF37]/40">
              <span className="text-[#D4AF37] font-bold text-lg leading-none">{config.rating}</span>
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
            </div>

            <div className="text-left border-l border-zinc-700/80 pl-3 sm:pl-4">
              <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                4.8/5 Google Rating
              </div>
              <div className="text-[11px] sm:text-xs text-[#DFC46D] font-medium">
                {config.reviewCount.toLocaleString()}+ Happy Reviews
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-300 pl-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified Unisex Salon</span>
            </div>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8">
            <button
              id="hero-primary-book-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#D4AF37] via-[#DFC46D] to-[#C5A028] text-black shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              id="hero-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full text-sm sm:text-base font-semibold bg-white/10 hover:bg-[#25D366]/20 text-white hover:text-[#25D366] backdrop-blur-md border border-white/20 hover:border-[#25D366]/40 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Value Checklist */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-zinc-300 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>100% Original Products</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Sanitized Private Suites</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>Zero Wait with Booking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient bottom fade for seamless transition into Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
    </section>
  );
};
