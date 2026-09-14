import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import { Phone, MessageCircle, Calendar, Menu, X, Clock, MapPin, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { config } = useSalon();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Before & After', href: '#transformations' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Cre8 Salon, I’d like to book an appointment. Please share the available slots.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Top micro-bar with status and location */}
      <div id="top-announcement-bar" className="bg-[#121212] text-[#EAE3DC] text-xs py-2 px-4 border-b border-[#262626] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Marathon Monte Plaza, Asha Nagar, Mulund West, Mumbai</span>
            </span>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Open Daily: 10:00 AM – 9:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 bg-[#D4AF37]/15 text-[#DFC46D] px-2.5 py-0.5 rounded-full font-medium text-[11px] border border-[#D4AF37]/30">
              ★ {config.rating} Rating ({config.reviewCount.toLocaleString()}+ Google Reviews)
            </span>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="text-[#EAE3DC] hover:text-[#D4AF37] transition-colors flex items-center gap-1 font-medium"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              {config.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md text-white py-3 shadow-xl border-b border-[#262626]'
            : 'bg-[#121212]/90 backdrop-blur-sm text-white py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex flex-col group text-left">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-[#DFC46D] transition-colors">
                CRE8
              </span>
              <span className="h-4 w-[1px] bg-[#D4AF37]/50"></span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase">
                SALON UNISEX
              </span>
            </div>
            <span className="text-[9px] tracking-wider text-zinc-400 font-sans uppercase">
              Mulund West · Mumbai
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-[#D4AF37] font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-whatsapp-btn"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/40 transition-all duration-300"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </button>

            <button
              id="nav-book-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black hover:from-[#DFC46D] hover:to-[#D4AF37] shadow-md hover:shadow-[#D4AF37]/30 transition-all duration-300 active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-quick-book-btn"
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold bg-[#D4AF37] text-black"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 bg-[#121212]/98 text-white flex flex-col p-6 overflow-y-auto lg:hidden animate-in fade-in duration-200"
        >
          <div className="flex justify-between items-center pb-6 border-b border-zinc-800">
            <div>
              <div className="font-serif text-2xl font-bold tracking-wider text-white">
                CRE8 <span className="text-[#D4AF37] text-sm font-sans tracking-widest uppercase">SALON UNISEX</span>
              </div>
              <div className="text-xs text-zinc-400">Mulund West, Mumbai</div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-4">
            <div className="bg-zinc-900/80 rounded-xl p-3.5 border border-[#D4AF37]/20 mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs text-[#D4AF37] font-semibold">★ {config.rating} Google Rating</div>
                <div className="text-[11px] text-zinc-400">{config.reviewCount.toLocaleString()}+ Happy Client Reviews</div>
              </div>
              <span className="text-[11px] bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">
                Open Daily till 9 PM
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:text-[#D4AF37] hover:bg-zinc-900/60 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center font-semibold bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black shadow-lg"
            >
              Book Your Appointment
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="py-3 px-4 rounded-xl font-medium bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="py-3 px-4 rounded-xl font-medium bg-zinc-800 text-white border border-zinc-700 flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                Call Salon
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
