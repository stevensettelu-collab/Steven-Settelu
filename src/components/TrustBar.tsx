import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Star, Award, Sparkles, Users, CheckCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const { config } = useSalon();

  const trustItems = [
    {
      icon: <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />,
      title: `${config.rating} Rated Salon`,
      subtitle: `${config.reviewCount.toLocaleString()}+ Verified Google Reviews`,
      highlight: true
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Professional Stylists',
      subtitle: 'Trained & Certified Masters',
      highlight: false
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Premium Products',
      subtitle: "100% Genuine L'Oréal & Olaplex",
      highlight: false
    },
    {
      icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Unisex Services',
      subtitle: 'Dedicated Men & Women Stations',
      highlight: false
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Sterilized & Sanitized',
      subtitle: 'Hospital-Grade Hygiene Tools',
      highlight: false
    }
  ];

  return (
    <section id="trust-bar" className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-stone-300/40 border border-stone-200/80 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-stone-100">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3.5 pt-3 sm:pt-0 ${
                idx !== 0 ? 'lg:pl-6' : ''
              } ${item.highlight ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#FBF7EE] border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
                  {item.title}
                </div>
                <div className="text-xs text-stone-500 font-medium truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
