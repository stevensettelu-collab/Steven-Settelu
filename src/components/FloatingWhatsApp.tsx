import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { config } = useSalon();
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Cre8 Salon, I’d like to book an appointment. Please share the available slots.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      id="floating-whatsapp-widget"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex items-end flex-col gap-2"
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121212] text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl border border-[#D4AF37]/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium">Need quick slots? Chat with our team!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button with pulse effect */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300 active:scale-95"
        aria-label="Chat with Cre8 Salon on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </button>
    </div>
  );
};
