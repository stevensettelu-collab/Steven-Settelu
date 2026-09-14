import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SalonConfig,
  ServiceItem,
  SpecialOffer,
  Testimonial,
  TeamMember,
  BeforeAfterItem,
  GalleryItem,
  FAQItem,
  BookingFormData
} from '../types';
import {
  DEFAULT_SALON_CONFIG,
  SERVICES_DATA,
  SPECIAL_OFFERS,
  TESTIMONIALS,
  TEAM_MEMBERS,
  BEFORE_AFTER_DATA,
  GALLERY_ITEMS,
  FAQ_ITEMS,
  CATEGORIES
} from '../data/salonData';

interface SalonContextType {
  config: SalonConfig;
  services: ServiceItem[];
  offers: SpecialOffer[];
  testimonials: Testimonial[];
  team: TeamMember[];
  beforeAfterList: BeforeAfterItem[];
  gallery: GalleryItem[];
  faqs: FAQItem[];
  isBookingModalOpen: boolean;
  selectedServiceForBooking: ServiceItem | null;
  selectedOfferForBooking: SpecialOffer | null;
  isAdminOpen: boolean;
  openBookingModal: (service?: ServiceItem | null, offer?: SpecialOffer | null) => void;
  closeBookingModal: () => void;
  openAdmin: () => void;
  closeAdmin: () => void;
  updateConfig: (newConfig: Partial<SalonConfig>) => void;
  updateServicePrice: (serviceId: string, newPrice: number) => void;
  updateOffer: (offerId: string, updatedOffer: Partial<SpecialOffer>) => void;
  resetToDefaults: () => void;
  submitBooking: (booking: BookingFormData) => Promise<{ success: boolean; bookingRef: string }>;
  recentBookings: (BookingFormData & { id: string; timestamp: string; bookingRef: string })[];
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

const STORAGE_KEYS = {
  CONFIG: 'cre8_salon_config_v1',
  SERVICES: 'cre8_salon_services_v1',
  OFFERS: 'cre8_salon_offers_v1',
  BOOKINGS: 'cre8_salon_bookings_v1'
};

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SalonConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CONFIG);
      return saved ? { ...DEFAULT_SALON_CONFIG, ...JSON.parse(saved) } : DEFAULT_SALON_CONFIG;
    } catch {
      return DEFAULT_SALON_CONFIG;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : SERVICES_DATA;
    } catch {
      return SERVICES_DATA;
    }
  });

  const [offers, setOffers] = useState<SpecialOffer[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.OFFERS);
      return saved ? JSON.parse(saved) : SPECIAL_OFFERS;
    } catch {
      return SPECIAL_OFFERS;
    }
  });

  const [recentBookings, setRecentBookings] = useState<(BookingFormData & { id: string; timestamp: string; bookingRef: string })[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [selectedOfferForBooking, setSelectedOfferForBooking] = useState<SpecialOffer | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
    } catch (e) {
      console.warn('Could not save config to localStorage', e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.warn('Could not save services to localStorage', e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
    } catch (e) {
      console.warn('Could not save offers to localStorage', e);
    }
  }, [offers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(recentBookings));
    } catch (e) {
      console.warn('Could not save bookings to localStorage', e);
    }
  }, [recentBookings]);

  const openBookingModal = (service: ServiceItem | null = null, offer: SpecialOffer | null = null) => {
    setSelectedServiceForBooking(service);
    setSelectedOfferForBooking(offer);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedServiceForBooking(null);
    setSelectedOfferForBooking(null);
  };

  const openAdmin = () => setIsAdminOpen(true);
  const closeAdmin = () => setIsAdminOpen(false);

  const updateConfig = (newConfig: Partial<SalonConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const updateServicePrice = (serviceId: string, newPrice: number) => {
    setServices(prev =>
      prev.map(item => (item.id === serviceId ? { ...item, startingPrice: newPrice } : item))
    );
  };

  const updateOffer = (offerId: string, updatedOffer: Partial<SpecialOffer>) => {
    setOffers(prev =>
      prev.map(item => (item.id === offerId ? { ...item, ...updatedOffer } : item))
    );
  };

  const resetToDefaults = () => {
    setConfig(DEFAULT_SALON_CONFIG);
    setServices(SERVICES_DATA);
    setOffers(SPECIAL_OFFERS);
    localStorage.removeItem(STORAGE_KEYS.CONFIG);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.OFFERS);
  };

  const submitBooking = async (bookingData: BookingFormData) => {
    const bookingRef = `CR8-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord = {
      ...bookingData,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
      bookingRef
    };
    setRecentBookings(prev => [newRecord, ...prev].slice(0, 50));
    return { success: true, bookingRef };
  };

  return (
    <SalonContext.Provider
      value={{
        config,
        services,
        offers,
        testimonials: TESTIMONIALS,
        team: TEAM_MEMBERS,
        beforeAfterList: BEFORE_AFTER_DATA,
        gallery: GALLERY_ITEMS,
        faqs: FAQ_ITEMS,
        isBookingModalOpen,
        selectedServiceForBooking,
        selectedOfferForBooking,
        isAdminOpen,
        openBookingModal,
        closeBookingModal,
        openAdmin,
        closeAdmin,
        updateConfig,
        updateServicePrice,
        updateOffer,
        resetToDefaults,
        submitBooking,
        recentBookings
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
