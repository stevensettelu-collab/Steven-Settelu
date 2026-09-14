import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { CATEGORIES } from '../data/salonData';
import { ServiceItem } from '../types';
import {
  Scissors,
  Sparkles,
  UserCheck,
  Hand,
  Crown,
  HeartHandshake,
  Clock,
  MessageCircle,
  Calendar,
  Search,
  Check,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (service?: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const { services, config } = useSalon();
  const [activeCategory, setActiveCategory] = useState<string>('hair');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<'all' | 'women' | 'men'>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'UserCheck':
        return <UserCheck className="w-4 h-4" />;
      case 'Hand':
        return <Hand className="w-4 h-4" />;
      case 'Crown':
        return <Crown className="w-4 h-4" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  // Active category object
  const currentCatObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  // Filter services by category, search, and gender
  const filteredServices = services.filter((s) => {
    const matchesCategory = searchQuery.trim() !== '' ? true : s.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender =
      genderFilter === 'all' ||
      !s.targetGender ||
      s.targetGender === 'unisex' ||
      s.targetGender === genderFilter;

    return matchesCategory && matchesSearch && matchesGender;
  });

  const handleWhatsAppBooking = (service: ServiceItem) => {
    const message = encodeURIComponent(
      `Hi Cre8 Salon, I'd like to book an appointment for *${service.name}* (Starting from ₹${service.startingPrice}). Please share slot options.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 text-[#8C6D1F] border border-[#D4AF37]/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>UNISEX BEAUTY & GROOMING MENU</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-4">
            Curated Services & Treatments
          </h2>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            From precision haircuts and dimensional Balayage to clinical facials and bridal transformations, explore our bespoke treatments tailored for both men and women.
          </p>
        </div>

        {/* Search & Gender Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-sm max-w-4xl mx-auto">
          {/* Search Field */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Balayage, Facial, Shave)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-stone-50 rounded-xl border border-stone-200 focus:outline-none focus:border-[#D4AF37] focus:bg-white text-stone-900 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Gender Filter Pills */}
          <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl w-full sm:w-auto justify-center">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                genderFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setGenderFilter('women')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                genderFilter === 'women'
                  ? 'bg-white text-stone-900 shadow-sm font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Women
            </button>
            <button
              onClick={() => setGenderFilter('men')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                genderFilter === 'men'
                  ? 'bg-white text-stone-900 shadow-sm font-bold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Men
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs */}
        {!searchQuery && (
          <div className="flex items-center justify-start lg:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 hide-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-[#121212] text-white shadow-lg shadow-stone-900/15 ring-2 ring-[#D4AF37]/50'
                      : 'bg-white text-stone-700 hover:bg-stone-100/80 border border-stone-200/80'
                  }`}
                >
                  <span className={isActive ? 'text-[#DFC46D]' : 'text-stone-500'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Category Banner Highlight (when not in search mode) */}
        {!searchQuery && currentCatObj && (
          <div className="mb-10 bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-4 h-48 sm:h-56 md:h-full min-h-[200px] relative">
                <img
                  src={currentCatObj.image}
                  alt={currentCatObj.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#DFC46D]">
                    Category Highlight
                  </span>
                  <h3 className="font-serif text-xl font-bold">{currentCatObj.name}</h3>
                </div>
              </div>
              <div className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mb-2">
                    {currentCatObj.tagline}
                  </h4>
                  <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed mb-4">
                    {currentCatObj.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2 border-t border-stone-100">
                  <span className="flex items-center gap-1 text-stone-800 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Original Certified Products
                  </span>
                  <span className="flex items-center gap-1 text-stone-800 font-medium">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Free Stylist Consultation
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services List Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200">
            <Sparkles className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800">No matching services found</h3>
            <p className="text-xs text-stone-500 mt-1">Try another search term or reset filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setGenderFilter('all');
              }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-[#121212] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C6D1F] bg-[#FBF7EE] px-2 py-0.5 rounded w-fit mb-1 border border-[#D4AF37]/20">
                        {service.category.toUpperCase()}
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                        {service.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Benefits pills if available */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="space-y-1 mb-4">
                      {service.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-500">
                          <Check className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer price and CTA */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">
                      Starting From
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
                      ₹{service.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleWhatsAppBooking(service)}
                      className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                      title="Enquire on WhatsApp"
                      aria-label="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-600" />
                    </button>

                    <button
                      onClick={() => onOpenBooking(service)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#121212] text-white hover:bg-stone-800 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Assistance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121212] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-serif text-lg sm:text-xl font-bold text-white">
              Not sure which service suits your hair or skin best?
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans mt-0.5">
              Talk directly to our lead stylist in Mulund West for a free 5-minute consultation.
            </p>
          </div>
          <button
            onClick={() => {
              const msg = encodeURIComponent(
                `Hi Cre8 Salon, I need a consultation for my hair/skin. Could you help guide me?`
              );
              window.open(`https://wa.me/${config.whatsappNumber}?text=${msg}`, '_blank');
            }}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#D4AF37] text-black hover:bg-[#DFC46D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask Stylist on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
