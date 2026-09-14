import React from 'react';
import { useSalon } from '../context/SalonContext';
import { SpecialOffer } from '../types';
import { Sparkles, Check, Calendar, ArrowRight, Tag, ShieldCheck } from 'lucide-react';

interface SpecialOffersProps {
  onOpenBooking: (offer: SpecialOffer) => void;
}

export const SpecialOffers: React.FC<SpecialOffersProps> = ({ onOpenBooking }) => {
  const { offers } = useSalon();

  return (
    <section id="offers" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>SEASONAL PACKAGES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Treat Yourself. You Deserve It.
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Curated multi-service packages offering exceptional value without compromising on our signature luxury products, master stylists, or individualized attention.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-[#FAF8F5] rounded-2xl border border-stone-200/90 overflow-hidden hover:border-[#D4AF37]/60 hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Header Image with Tag */}
              <div className="relative h-44 overflow-hidden bg-stone-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {offer.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-lg font-bold leading-snug drop-shadow-sm">
                    {offer.title}
                  </h3>
                </div>
              </div>

              {/* Package Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-500 font-sans mb-4 italic">
                    "{offer.subtitle}"
                  </p>

                  {/* Inclusions List */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700 block mb-2">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {offer.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 font-sans">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-4 border-t border-stone-200">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      {offer.originalPrice && (
                        <span className="text-xs text-stone-400 line-through mr-1.5 font-sans">
                          ₹{offer.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="text-2xl font-serif font-bold text-stone-900">
                        ₹{offer.offerPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      All Inclusive
                    </span>
                  </div>

                  <p className="text-[10px] text-stone-400 font-sans mb-4">
                    {offer.expiresNote}
                  </p>

                  <button
                    onClick={() => onOpenBooking(offer)}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group-hover:bg-[#D4AF37] group-hover:text-black"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37] group-hover:text-black" />
                    <span>Claim Offer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>No hidden fees · Free consultation included with every package · 100% original products</span>
        </div>
      </div>
    </section>
  );
};
