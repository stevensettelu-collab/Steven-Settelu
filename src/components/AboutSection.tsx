import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Sparkles, Shield, Heart, Award, CheckCircle2, ArrowRight, UserCheck, Star } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const { config } = useSalon();

  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Personalized Consultation',
      desc: 'Every visit begins with understanding your personal style, face profile, hair texture, and skin goals.'
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Certified Master Stylists',
      desc: 'Our team trains continuously on international coloring techniques, precision French cuts, and HD makeup.'
    },
    {
      icon: <Shield className="w-5 h-5 text-[#D4AF37]" />,
      title: '100% Genuine Products',
      desc: 'We strictly use authentic L\'Oréal Professionnel, Schwarzkopf, Olaplex, and Rica Wax formulations.'
    },
    {
      icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Impeccable Hygiene & Comfort',
      desc: 'Sterilized stainless-steel tools, disposable towels, and spotless aesthetic rooms for complete peace of mind.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Salon Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop"
                  alt="Cre8 Salon Unisex styling and client care"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Stat Overlay 1 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#121212] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-white/10 max-w-[220px]">
                <div className="flex items-center gap-1 text-[#D4AF37] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <div className="font-serif text-2xl font-bold text-white leading-tight">4.8 / 5.0</div>
                <div className="text-[11px] text-zinc-400 font-sans mt-0.5">
                  Over 1,089+ verified Google client reviews
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-stone-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7EE] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Unisex Salon</div>
                  <div className="text-[11px] text-stone-500">Men & Women Suites</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Emotionally Engaging Copy & Value Pillars */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>THE CRE8 PHILOSOPHY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-6">
              More Than a Salon. <br />
              <span className="italic font-normal text-stone-700">
                It’s Your Self-Care Destination.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-stone-600 font-sans leading-relaxed mb-6">
              Nestled at Marathon Monte Plaza in Mulund West, <strong className="text-stone-900 font-semibold">Cre8 Salon Unisex</strong> was created to redefine your grooming and beauty experience. We believe high-end salon care should be personalized, welcoming, and consistently exceptional for both men and women.
            </p>

            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed mb-8">
              From signature Balayage transformations and precision fades to restorative Hydra facials and bridal artistry, every service is crafted with meticulous attention to detail, hospital-grade hygiene, and genuine products.
            </p>

            {/* 4 Value Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {values.map((v, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-stone-200/80 shadow-sm hover:border-[#D4AF37]/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-[#FBF7EE]">
                      {v.icon}
                    </div>
                    <h3 className="font-bold text-sm text-stone-900 font-sans">{v.title}</h3>
                  </div>
                  <p className="text-xs text-stone-500 font-sans leading-relaxed pl-8">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#121212] text-white hover:bg-stone-800 shadow-md transition-all duration-300"
              >
                <span>Discover Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#D4AF37]/15 text-[#8C6D1F] hover:bg-[#D4AF37]/25 border border-[#D4AF37]/30 transition-all duration-300"
              >
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
