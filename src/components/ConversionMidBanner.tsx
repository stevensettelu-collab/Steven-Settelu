import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Calendar, MessageCircle, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface ConversionMidBannerProps {
  onOpenBooking: () => void;
}

export const ConversionMidBanner: React.FC<ConversionMidBannerProps> = ({ onOpenBooking }) => {
  const { config } = useSalon();

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Cre8 Salon, I'd like to book an appointment for this week. Please let me know what slots you have open.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="conversion-banner" className="py-16 sm:py-20 bg-[#121212] relative overflow-hidden text-white">
      {/* Subtle gold glow accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/20 text-[#DFC46D] border border-[#D4AF37]/40 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>MULUND WEST · MARATHON MONTE PLAZA</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Ready for Your Next Look?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether it’s a fresh haircut, a complete makeover, a relaxing facial or your next special occasion, our team is ready to create a look you’ll love.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black hover:from-[#DFC46D] hover:to-[#D4AF37] shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-black stroke-[2.5]" />
            <span>Book Your Appointment</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-7 py-4 rounded-full text-sm sm:text-base font-semibold bg-white/10 hover:bg-[#25D366]/20 text-white hover:text-[#25D366] border border-white/20 hover:border-[#25D366]/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
            <span>WhatsApp Us</span>
          </button>
        </div>

        {/* Real practical reassurance (no fake timers) */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Slots typically fill 24-48 hours in advance for weekends</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Instant booking confirmation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
