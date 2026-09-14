import React from 'react';
import { useSalon } from '../context/SalonContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Clock,
  Settings,
  Heart,
  Shield,
  Star,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'hygiene') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenPolicy }) => {
  const { config, openAdmin } = useSalon();

  return (
    <footer id="main-footer" className="bg-[#121212] text-zinc-300 pt-16 pb-24 sm:pb-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-800/80">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                CRE8
              </span>
              <span className="h-5 w-[1px] bg-[#D4AF37]/50" />
              <span className="text-xs tracking-[0.25em] text-[#D4AF37] font-semibold uppercase">
                SALON UNISEX
              </span>
            </div>

            <p className="text-sm text-zinc-400 font-sans leading-relaxed max-w-sm">
              “Your destination for premium hair, beauty and grooming in Mulund.” Rated 4.8★ with over 1,089+ verified Google client reviews.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DFC46D] bg-zinc-900/90 py-2 px-3.5 rounded-xl border border-[#D4AF37]/20 w-fit">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span>4.8 / 5.0 Google Rating · 1,089+ Happy Reviews</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Cre8 Salon Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Cre8 Salon Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-[#25D366] hover:text-white flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Cre8 Salon WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">All Services</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#D4AF37] transition-colors">Special Offers</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#D4AF37] transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">Google Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Salon Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Menu (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Hair Cuts & Fades</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">French Balayage</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Hydra Glow Facial</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Men Beard Shave</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Acrylic Nails</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">HD Bridal Makeup</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Brazilian Waxing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Head Spa Therapy</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Visit the Salon
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Marathon Monte Plaza, Asha Nagar, Mulund West, Mumbai 400080</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-white font-medium">Open Daily: 10:00 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[#D4AF37] font-semibold">
                  {config.displayPhone}
                </a>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="mt-4 w-full py-2.5 rounded-xl text-xs font-bold bg-[#D4AF37] text-black hover:bg-[#DFC46D] transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Book Appointment Online</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Micro-Bar with Policies, Copyright & Admin Edit Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">CRE8 SALON UNISEX</span> · Mulund West, Mumbai. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-zinc-200 transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-zinc-200 transition-colors"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenPolicy('hygiene')}
              className="hover:text-zinc-200 transition-colors"
            >
              Hygiene Protocol
            </button>
            <span>·</span>
            {/* Salon Manager CMS Trigger */}
            <button
              onClick={openAdmin}
              className="text-[#D4AF37] hover:text-[#DFC46D] flex items-center gap-1 font-medium bg-zinc-900 px-2.5 py-1 rounded border border-[#D4AF37]/30 transition-colors"
              title="Edit salon info, prices and offers live"
            >
              <Settings className="w-3 h-3" />
              <span>Salon CMS / Admin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
