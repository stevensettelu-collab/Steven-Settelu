export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'grooming' | 'nails' | 'bridal' | 'spa';
  description: string;
  duration: string;
  startingPrice: number;
  isFeatured?: boolean;
  image: string;
  popularBadge?: string;
  targetGender?: 'unisex' | 'women' | 'men';
  benefits?: string[];
}

export interface CategoryInfo {
  id: 'hair' | 'skin' | 'grooming' | 'nails' | 'bridal' | 'spa';
  name: string;
  tagline: string;
  description: string;
  image: string;
  iconName: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  originalPrice?: number;
  offerPrice: number;
  inclusions: string[];
  expiresNote: string;
  category: string;
  image: string;
  targetGender: 'unisex' | 'women' | 'men';
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  serviceMentioned?: string;
  date: string;
  verifiedGoogleReview: boolean;
  userType?: string;
  initials?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  photo: string;
  bio: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'makeup' | 'nails' | 'beauty' | 'grooming';
  description: string;
  beforeImage: string;
  afterImage: string;
  serviceName: string;
  duration: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair' | 'styling' | 'beauty' | 'nails' | 'bridal';
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SalonConfig {
  name: string;
  brandSubtitle: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  postalCode: string;
  openingHoursDisplay: string;
  openTime: string;
  closeTime: string;
  instagramUrl: string;
  instagramHandle: string;
  googleMapsUrl: string;
  googleReviewUrl: string;
  googleMapsEmbedUrl: string;
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  category: string;
  date: string;
  timeSlot: string;
  stylistId?: string;
  clientName: string;
  clientPhone: string;
  clientEmail?: string;
  specialNotes?: string;
  promoCode?: string;
}
