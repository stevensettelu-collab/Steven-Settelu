import React, { useState } from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { FeaturedServices } from './components/FeaturedServices';
import { ServicesSection } from './components/ServicesSection';
import { ConversionMidBanner } from './components/ConversionMidBanner';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SpecialOffers } from './components/SpecialOffers';
import { ReviewsSection } from './components/ReviewsSection';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { AdminDrawer } from './components/AdminDrawer';
import { PolicyModals } from './components/PolicyModals';
import { ServiceItem, SpecialOffer, TeamMember } from './types';

const SalonApp: React.FC = () => {
  const {
    isBookingModalOpen,
    selectedServiceForBooking,
    selectedOfferForBooking,
    openBookingModal,
    closeBookingModal
  } = useSalon();

  const [selectedStylistForBooking, setSelectedStylistForBooking] = useState<TeamMember | null>(null);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'hygiene' | null>(null);

  const handleOpenBooking = (
    service?: ServiceItem | null,
    offer?: SpecialOffer | null,
    stylist?: TeamMember | null
  ) => {
    setSelectedStylistForBooking(stylist || null);
    openBookingModal(service || null, offer || null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] flex flex-col font-sans relative selection:bg-[#D4AF37]/30 selection:text-[#8C6D1F]">
      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust / Social Proof Bar */}
        <TrustBar />

        {/* 3. About Self-Care Destination Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Featured Most Loved Services */}
        <FeaturedServices onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 5. Comprehensive Interactive Services Showcase */}
        <ServicesSection onOpenBooking={(service) => handleOpenBooking(service)} />

        {/* 6. High-Converting Mid-Banner */}
        <ConversionMidBanner onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Before & After Transformation Comparison Gallery */}
        <BeforeAfterSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Special Promotional Packages & Offers */}
        <SpecialOffers onOpenBooking={(offer) => handleOpenBooking(null, offer)} />

        {/* 9. Real Google Reviews & Testimonials Section */}
        <ReviewsSection />

        {/* 10. Team & Expertise Section */}
        <TeamSection onOpenBooking={(stylist) => handleOpenBooking(null, null, stylist)} />

        {/* 11. Instagram-Style Luxury Gallery */}
        <GallerySection />

        {/* 12. Location & Contact Section (Marathon Monte Plaza) */}
        <LocationSection />

        {/* 13. SEO-Optimized FAQ Section */}
        <FAQSection />
      </main>

      {/* 14. Sophisticated Dark Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPolicy={(type) => setActivePolicy(type)}
      />

      {/* Persistent Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Thumb Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* 4-Step Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        initialService={selectedServiceForBooking}
        initialOffer={selectedOfferForBooking}
        initialStylist={selectedStylistForBooking}
      />

      {/* Live CMS / Salon Content Manager Drawer */}
      <AdminDrawer />

      {/* Privacy, Terms, and Hygiene Standards Modals */}
      <PolicyModals
        activePolicy={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <SalonProvider>
      <SalonApp />
    </SalonProvider>
  );
}
