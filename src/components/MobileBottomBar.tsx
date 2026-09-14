import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const { config } = useSalon();

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Cre8 Salon, I’d like to book an appointment. Please share the available slots.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#121212]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 sm:hidden shadow-2xl safe-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${config.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-zinc-800/90 text-white active:bg-zinc-700 transition-colors border border-zinc-700 min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-[#D4AF37] mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-[#25D366]/20 text-[#25D366] active:bg-[#25D366]/30 transition-colors border border-[#25D366]/40 min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366] mb-0.5" />
          <span className="text-[11px] font-bold leading-none">WhatsApp</span>
        </button>

        {/* Book Now Primary Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black active:opacity-90 font-bold transition-all shadow-md min-h-[44px]"
        >
          <Calendar className="w-4 h-4 text-black mb-0.5" />
          <span className="text-[11px] font-bold leading-none">Book Now</span>
        </button>
      </div>
    </div>
  );
};
