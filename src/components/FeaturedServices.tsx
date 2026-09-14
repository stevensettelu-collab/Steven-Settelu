import React from 'react';
import { useSalon } from '../context/SalonContext';
import { ServiceItem } from '../types';
import { Clock, Sparkles, ArrowRight, MessageCircle, Calendar, Check } from 'lucide-react';

interface FeaturedServicesProps {
  onOpenBooking: (service: ServiceItem) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({ onOpenBooking }) => {
  const { services, config } = useSalon();

  // Filter featured services
  const featured = services.filter((s) => s.isFeatured).slice(0, 6);

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const message = encodeURIComponent(
      `Hi Cre8 Salon, I'd like to book/enquire about *${service.name}* (Starting from ₹${service.startingPrice}). Are slots available?`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="featured-services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>HANDPICKED FOR YOU</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Most Loved Services
            </h2>
            <p className="text-stone-500 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Our highest-rated hair, skin, and grooming rituals crafted with genuine luxury products and dedicated stylist care.
            </p>
          </div>

          <a
            href="#services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-[#8C6D1F] hover:text-[#5B450E] group"
          >
            <span>View Full Service Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-[#FAF8F5] border border-stone-200/90 overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Popular Badge */}
                {service.popularBadge && (
                  <span className="absolute top-3 left-3 bg-[#121212]/90 backdrop-blur-md text-[#DFC46D] text-[11px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30 shadow-md">
                    ★ {service.popularBadge}
                  </span>
                )}

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-lg shadow">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug group-hover:text-[#8C6D1F] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-500 font-sans leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="space-y-1.5 mb-5">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400 font-medium block">
                      Starting From
                    </span>
                    <span className="text-xl font-bold text-stone-900 font-serif">
                      ₹{service.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleWhatsAppInquiry(service)}
                      className="p-2.5 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-600" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 shadow-sm active:scale-95 transition-all"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
