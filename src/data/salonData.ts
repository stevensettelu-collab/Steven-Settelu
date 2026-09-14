import {
  SalonConfig,
  CategoryInfo,
  ServiceItem,
  SpecialOffer,
  Testimonial,
  TeamMember,
  BeforeAfterItem,
  GalleryItem,
  FAQItem
} from '../types';

export const DEFAULT_SALON_CONFIG: SalonConfig = {
  name: "CRE8 SALON UNISEX",
  brandSubtitle: "SALON UNISEX",
  tagline: "Your Best Look Starts Here.",
  rating: 4.8,
  reviewCount: 1089,
  phone: "090042 39091",
  displayPhone: "+91 90042 39091",
  whatsappNumber: "919004239091",
  email: "contact@cre8salonmulund.com",
  address: "Marathon Monte Plaza, Asha Nagar, Mulund West, Mumbai, Maharashtra 400080",
  landmark: "Near Asha Nagar, Marathon Monte Plaza, Mulund (W)",
  city: "Mulund West, Mumbai",
  postalCode: "400080",
  openingHoursDisplay: "Open Daily · 10:00 AM - 9:00 PM (Closes 9 PM)",
  openTime: "10:00",
  closeTime: "21:00",
  instagramUrl: "https://instagram.com",
  instagramHandle: "@cre8salonmulund",
  googleMapsUrl: "https://maps.google.com/?q=Marathon+Monte+Plaza+Asha+Nagar+Mulund+West+Mumbai+400080",
  googleReviewUrl: "https://maps.google.com/?q=Marathon+Monte+Plaza+Asha+Nagar+Mulund+West+Mumbai+400080",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.423984365738!2d72.94429387588147!3d19.176662449454178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f9e6146c87%3A0xc304a9d20c5d5e23!2sMarathon%20Monte%20Plaza%2C%20Asha%20Nagar%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'hair',
    name: 'Hair Couture',
    tagline: 'Expert Haircuts, Balayage & Styling',
    description: 'Precision cuts, personalized styling, signature Balayage, gloss treatments and deep restorative conditioning for men and women.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
    iconName: 'Scissors'
  },
  {
    id: 'skin',
    name: 'Skin & Beauty',
    tagline: 'Glow Facials & Aesthetic Skincare',
    description: 'Rejuvenating clinical & luxury facials, deep pore cleansing, brightening therapies and precise eyebrow beautification.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop',
    iconName: 'Sparkles'
  },
  {
    id: 'grooming',
    name: 'Men & Women Grooming',
    tagline: 'Clean Shaving, Waxing & Threading',
    description: 'Signature razor beard shaping, full body waxing, painless Brazilian waxing, and hygienic threading in sanitized suites.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop',
    iconName: 'UserCheck'
  },
  {
    id: 'nails',
    name: 'Nail Studio',
    tagline: 'Luxury Manicures, Pedicures & Acrylics',
    description: 'Pampering hand & foot spa rituals, long-lasting gel polish, acrylic extensions and bespoke nail art.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop',
    iconName: 'Hand'
  },
  {
    id: 'bridal',
    name: 'Bridal & Makeup',
    tagline: 'Bespoke Makeovers & Special Occasions',
    description: 'High-definition bridal makeup, party makeovers, saree draping, and customized pre-bridal glow packages.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop',
    iconName: 'Crown'
  },
  {
    id: 'spa',
    name: 'Spa & Wellness',
    tagline: 'Holistic Head & Body Relaxation',
    description: 'Aromatherapy scalp rituals, stress-relief head massage, hot towel therapies, and restorative wellness rituals.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop',
    iconName: 'HeartHandshake'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  // Hair Services
  {
    id: 'haircut-women',
    name: 'Signature Women Haircut & Blow Dry',
    category: 'hair',
    description: 'Custom consultation, precision layered cut or bob, deep shampoo cleanse and salon blowout finish.',
    duration: '45 mins',
    startingPrice: 650,
    isFeatured: true,
    popularBadge: 'Client Favorite',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Face-shape consultation', 'Original L\'Oréal shampoo & wash', 'Volume blow dry']
  },
  {
    id: 'haircut-men',
    name: 'Classic & Modern Men Haircut',
    category: 'hair',
    description: 'Personalized fade, classic taper, or textured crop tailored to your hair texture with cooling scalp rinse.',
    duration: '30 mins',
    startingPrice: 350,
    isFeatured: true,
    popularBadge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    targetGender: 'men',
    benefits: ['Precision scissor & clipper work', 'Scalp wash', 'Matte finish styling']
  },
  {
    id: 'balayage-color',
    name: 'French Balayage & Ombre Color',
    category: 'hair',
    description: 'Hand-painted sun-kissed dimension using premium ammonia-free lighteners with bond-repair gloss treatment.',
    duration: '180 mins',
    startingPrice: 3800,
    isFeatured: true,
    popularBadge: 'Signature Service',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Custom color formulation', 'Olaplex/Bond repair infusion', 'Gloss toner & blow dry']
  },
  {
    id: 'hair-styling',
    name: 'Luxury Hairstyling & Blow Dry',
    category: 'hair',
    description: 'Red-carpet beach waves, sleek glass hair straightening, or voluminous glamour curls for parties and events.',
    duration: '45 mins',
    startingPrice: 500,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Heat protection spray', 'High-shine serum', 'Long-lasting hold']
  },
  {
    id: 'shampoo-conditioning',
    name: 'Deep Conditioning & Hair Spa',
    category: 'hair',
    description: 'Intense moisture restore treatment for damaged, frizzy, or chemically treated hair with relaxing scalp massage.',
    duration: '60 mins',
    startingPrice: 1200,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Micro-mist steam infusion', 'Nourishing botanical mask', 'Soft silky finish']
  },
  {
    id: 'hair-threading',
    name: 'Precision Hairline & Hair Threading',
    category: 'hair',
    description: 'Clean hairline shaping, sideburns detailing, and forehead definition using sanitized organic cotton thread.',
    duration: '15 mins',
    startingPrice: 120,
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Gentle technique', 'Soothing aloe vera finish']
  },

  // Skin & Beauty
  {
    id: 'hydra-glow-facial',
    name: 'Hydra Glow & Brightening Facial',
    category: 'skin',
    description: 'Multi-step infusion facial to deeply unclog pores, hydrate dry layers, and restore radiant youthful clarity.',
    duration: '75 mins',
    startingPrice: 1800,
    isFeatured: true,
    popularBadge: 'Most Requested',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Enzymatic exfoliation', 'Oxygen vitamin serum', 'Custom rubberizing peel mask']
  },
  {
    id: 'skincare-detox',
    name: 'Clinical Deep Pore Skincare Detox',
    category: 'skin',
    description: 'Targeted treatment for acne, excess sebum, and pollution buildup with herbal calming extracts and blue light therapy.',
    duration: '60 mins',
    startingPrice: 1500,
    image: 'https://images.unsplash.com/photo-1512290900672-1f558a2c9763?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Blackhead extraction', 'Soothing tea tree treatment', 'Barrier reinforcement']
  },
  {
    id: 'eyebrow-shaping',
    name: 'Eyebrow Threading & Architect Shaping',
    category: 'skin',
    description: 'Symmetrical eyebrow mapping and hair removal to flatter your facial bone structure with soothing gel.',
    duration: '15 mins',
    startingPrice: 80,
    image: 'https://images.unsplash.com/photo-1588514912908-410a6a4220b3?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Organic cotton thread', 'Pain-minimizing technique', 'Soothed with rose water']
  },
  {
    id: 'eyebrow-beautification',
    name: 'Eyebrow Beautification & Tinting',
    category: 'skin',
    description: 'Enhance your natural brows with custom semi-permanent tinting and brow lamination for fuller, fluffy arches.',
    duration: '35 mins',
    startingPrice: 650,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Natural vegan tint', 'Fuller brow definition', 'Lasts up to 4 weeks']
  },
  {
    id: 'eyelash-extensions',
    name: 'Lash Lift & Classic Eyelashes',
    category: 'skin',
    description: 'Natural curl enhancement or lightweight lash extensions for effortless, wide-eyed elegance without mascara.',
    duration: '60 mins',
    startingPrice: 1400,
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Hypoallergenic adhesive', 'Weightless feel', 'Custom curl selection']
  },

  // Grooming Services
  {
    id: 'luxury-shaving',
    name: 'Royal Hot Towel Beard Grooming & Shave',
    category: 'grooming',
    description: 'Pre-shave essential oils, warm towel compress, precision straight-razor shave, and refreshing cold aftershave balm.',
    duration: '30 mins',
    startingPrice: 300,
    isFeatured: true,
    popularBadge: 'Men Favorite',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    targetGender: 'men',
    benefits: ['Dual hot towel compress', 'Razor-sharp clean contours', 'Anti-irritation balm']
  },
  {
    id: 'body-waxing',
    name: 'Full Body Rica Waxing',
    category: 'grooming',
    description: 'Gentle, Italian liposoluble Rica wax designed for sensitive skin, removing hair from root without stickiness.',
    duration: '60 mins',
    startingPrice: 1600,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['100% colophony-free Rica wax', 'Less painful formula', 'Post-wax soothing lotion']
  },
  {
    id: 'brazilian-waxing',
    name: 'Hygienic Brazilian & Bikini Waxing',
    category: 'grooming',
    description: 'Private, strictly sanitized hygiene protocol using peel-off hot film wax for sensitive intimate areas.',
    duration: '45 mins',
    startingPrice: 1200,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Single-use disposable disposables', 'Temperature-controlled wax', 'Certified female aesthetician']
  },

  // Nails
  {
    id: 'spa-manicure',
    name: 'Aromatherapy Deluxe Manicure',
    category: 'nails',
    description: 'Soothing hand soak, dead skin exfoliation, cuticle detailing, hand massage and chip-resistant lacquer.',
    duration: '40 mins',
    startingPrice: 600,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Sea salt scrub', 'Cuticle nourishment', 'Long-wear topcoat']
  },
  {
    id: 'spa-pedicure',
    name: 'Foot Care Spa Pedicure & Callus Treatment',
    category: 'nails',
    description: 'Hydro-jet foot soak, deep heel smoothening, peppermint mask wrap and tension-relief reflexology massage.',
    duration: '50 mins',
    startingPrice: 850,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Callus smoothing therapy', 'Peppermint cooling wrap', 'Acupressure foot massage']
  },
  {
    id: 'acrylic-nails',
    name: 'Acrylic Extensions & Custom Nail Art',
    category: 'nails',
    description: 'High-durability acrylic or polygel nail extensions shaped to perfection with chrome, French or glitter accents.',
    duration: '90 mins',
    startingPrice: 1900,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Damage-free tip application', 'UV/LED cured gel overlay', 'Custom artwork catalogue']
  },

  // Bridal & Makeup
  {
    id: 'bridal-hd-makeup',
    name: 'Luxury HD Bridal Makeover & Draping',
    category: 'bridal',
    description: 'Flawless HD/Airbrush bridal makeup tailored to match your wedding outfit, jewelry, lighting, and personal style.',
    duration: '180 mins',
    startingPrice: 8500,
    isFeatured: true,
    popularBadge: 'Bridal Elite',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Pre-bridal consultation', 'Premium MAC & Huda Beauty products', 'Hairstyling, lashes & saree/lehenga draping']
  },
  {
    id: 'party-makeup',
    name: 'Celebration & Party Glam Makeup',
    category: 'bridal',
    description: 'Sophisticated event makeup highlighting your best features with elegant hairstyling for sangeet, reception or cocktail parties.',
    duration: '90 mins',
    startingPrice: 2500,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women',
    benefits: ['Skin-prep hydrator', 'Smudge-proof eye makeup', 'Setting spray for 12hr wear']
  },

  // Spa Services
  {
    id: 'head-massage-spa',
    name: 'Stress Relief Scalp Therapy & Head Spa',
    category: 'spa',
    description: 'Deep tissue pressure point head massage with warm Ayurvedic or Moroccan argan oil followed by hot towel therapy.',
    duration: '45 mins',
    startingPrice: 700,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex',
    benefits: ['Warm herb oil infusion', 'Shoulder & neck de-stress', 'Hot towel steam wrap']
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-new-client',
    title: 'First-Time Client Welcome Ritual',
    subtitle: 'Experience our 5-star styling at Cre8',
    badge: 'Popular First Visit',
    originalPrice: 1250,
    offerPrice: 799,
    inclusions: [
      'Consultation & Custom Precision Haircut',
      'L\'Oréal Professional Scalp Cleansing & Wash',
      'Styling Blowout with Heat Protective Serum'
    ],
    expiresNote: 'Valid for new clients · Monday to Thursday',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    targetGender: 'unisex'
  },
  {
    id: 'offer-hair-transformation',
    title: 'Balayage & Hair Rebirth Package',
    subtitle: 'Complete color makeover with zero compromise',
    badge: 'Transformation Exclusive',
    originalPrice: 5500,
    offerPrice: 3999,
    inclusions: [
      'Full French Balayage / Global Highlights',
      'Olaplex Bond Protection Therapy',
      'Gloss Toner, Haircut & Glam Blow Dry'
    ],
    expiresNote: 'Appointment reservation recommended',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women'
  },
  {
    id: 'offer-mens-grooming',
    title: 'Executive Men\'s Complete Grooming',
    subtitle: 'Sharp, clean and revitalized for the week',
    badge: 'Men Signature',
    originalPrice: 1400,
    offerPrice: 899,
    inclusions: [
      'Designer Haircut + Styling',
      'Hot Towel Razor Beard Shave or Trim',
      'De-tan Express Facial & Scalp Massage'
    ],
    expiresNote: 'Available 7 days a week',
    category: 'grooming',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    targetGender: 'men'
  },
  {
    id: 'offer-bridal-glow',
    title: 'Pre-Occasion Radiance & Glow Bundle',
    subtitle: 'Unveil your bridal glow before the big day',
    badge: 'Wedding Special',
    originalPrice: 4200,
    offerPrice: 2899,
    inclusions: [
      'Hydra Radiance Glow Facial',
      'Deluxe Aromatherapy Manicure & Pedicure',
      'Full Arm & Leg Rica Waxing + Eyebrows'
    ],
    expiresNote: 'Book 3-5 days before event',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    targetGender: 'women'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Priya Sharma',
    rating: 5,
    text: 'Nice and polite staff. The service is 5 star. I came in for a complete hair makeover and balayage. The stylist patiently listened to what I wanted and the result exceeded my expectations!',
    serviceMentioned: 'French Balayage & Cut',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Local Resident, Mulund West',
    initials: 'PS'
  },
  {
    id: 'rev-2',
    author: 'Rahul Mehta',
    rating: 5,
    text: 'Products used are top class and original. You can immediately feel the difference compared to other salons in the area. Very hygienic environment and courteous team at Marathon Monte Plaza.',
    serviceMentioned: 'Men Grooming & Hair Spa',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Regular Client',
    initials: 'RM'
  },
  {
    id: 'rev-3',
    author: 'Sneha Kulkarni',
    rating: 5,
    text: 'An amazing first-time experience with 5/5 rating. I booked a facial and manicure on short notice through WhatsApp. Extremely smooth coordination and zero waiting time. Highly recommend!',
    serviceMentioned: 'Hydra Facial & Manicure',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Verified Client',
    initials: 'SK'
  },
  {
    id: 'rev-4',
    author: 'Amitabh Sen',
    rating: 5,
    text: 'Great attention to detail by the barbers and stylists. The hot towel shave and haircut were top notch. The salon is spotless and the ambiance is very calming.',
    serviceMentioned: 'Royal Beard Shave & Fade',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Mulund West Resident',
    initials: 'AS'
  },
  {
    id: 'rev-5',
    author: 'Rhea Fernandes',
    rating: 5,
    text: 'The bridal party makeup was done with sheer perfection! Authentic MAC and premium products. Everyone complimented my hair and makeup all night long.',
    serviceMentioned: 'Bridal & Party Makeover',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Bride Client',
    initials: 'RF'
  },
  {
    id: 'rev-6',
    author: 'Karan Shah',
    rating: 5,
    text: 'Consistent quality every single month. Easily the best unisex salon in Mulund West. Fair pricing, no pushy upselling, just genuinely skilled professionals.',
    serviceMentioned: 'Haircut & Scalp Treatment',
    date: 'Verified Google Review',
    verifiedGoogleReview: true,
    userType: 'Loyal Customer',
    initials: 'KS'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'stylist-1',
    name: 'Sameer Khan',
    role: 'Creative Hair Director & Colorist',
    specialty: 'French Balayage, Layered Cuts & Color Correction',
    experience: '12+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=700&auto=format&fit=crop',
    bio: 'Trained with international academies. Renowned for natural seamless gradients and precision texture work.'
  },
  {
    id: 'stylist-2',
    name: 'Ananya Deshmukh',
    role: 'Senior Aesthetician & Skincare Specialist',
    specialty: 'Clinical Facials, Hydra Therapy & Brow Artistry',
    experience: '9+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
    bio: 'Specialist in custom skin diagnostics, pore detox therapies, and painless brow architectural threading.'
  },
  {
    id: 'stylist-3',
    name: 'Vikram Joshi',
    role: 'Master Barber & Men Grooming Expert',
    specialty: 'Fade Art, Hot Towel Straight Razor Shaving, Beard Sculpting',
    experience: '8+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=700&auto=format&fit=crop',
    bio: 'Craftsman dedicated to classic grooming traditions, sharp modern fades, and revitalizing scalp massages.'
  },
  {
    id: 'stylist-4',
    name: 'Pooja Nair',
    role: 'Lead Bridal Makeup & Nail Artist',
    specialty: 'HD Airbrush Bridal Makeup & Polygel Nail Art',
    experience: '7+ Years Experience',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=700&auto=format&fit=crop',
    bio: 'Passionate about creating luminous, photogenic bridal looks and bespoke contemporary nail art.'
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Ash Blonde Balayage & Gloss Finish',
    category: 'color',
    serviceName: 'Balayage & Bond Repair',
    description: 'Transforming brassy overgrown roots into seamless, soft multi-tonal dimensional blonde with Olaplex glow.',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    duration: '3.5 hours'
  },
  {
    id: 'ba-2',
    title: 'Precision Textured Bob & Tone',
    category: 'hair',
    serviceName: 'Women Signature Haircut',
    description: 'Eliminating split ends and restoring bounce with a weightless chin-length textured French bob.',
    beforeImage: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    duration: '45 mins'
  },
  {
    id: 'ba-3',
    title: 'Classic Taper Fade & Beard Sculpt',
    category: 'grooming',
    serviceName: 'Executive Grooming',
    description: 'Sharp zero-fade transition with crisp geometric beard lines and skin moisture infusion.',
    beforeImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    duration: '40 mins'
  },
  {
    id: 'ba-4',
    title: 'HD Bridal Glow & Hair Styling',
    category: 'makeup',
    serviceName: 'Luxury Bridal Glam',
    description: 'Luminous skin preparation, defined smokey bronze eyes, and elegant floral updo for reception.',
    beforeImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    duration: '2.5 hours'
  },
  {
    id: 'ba-5',
    title: 'French Ombre Acrylic Nail Extension',
    category: 'nails',
    serviceName: 'Acrylic Extensions',
    description: 'Short damaged nails sculpted into elegant almond-shaped French ombré gel extensions.',
    beforeImage: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    duration: '75 mins'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Luxury Salon Ambiance',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop',
    caption: 'Modern luxury styling stations at Marathon Monte Plaza, Mulund West.'
  },
  {
    id: 'gal-2',
    title: 'Signature Dimensional Balayage',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
    caption: 'Hand-painted warm caramel balayage with high-gloss mirror finish.'
  },
  {
    id: 'gal-3',
    title: 'Hydra Glow Skincare Ritual',
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop',
    caption: 'Restorative deep hydration facial in our private aesthetic room.'
  },
  {
    id: 'gal-4',
    title: 'Precision Men Grooming',
    category: 'styling',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop',
    caption: 'Traditional straight-razor shave and beard styling experience.'
  },
  {
    id: 'gal-5',
    title: 'Bespoke Nail Art & Gel Extensions',
    category: 'nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop',
    caption: 'Almond gel nail extensions with minimalist gold leaf detailing.'
  },
  {
    id: 'gal-6',
    title: 'Royal Bridal Hair & Makeup',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    caption: 'Photogenic, flawless bridal styling for traditional & modern ceremonies.'
  },
  {
    id: 'gal-7',
    title: 'Voluminous Blowout & Layering',
    category: 'hair',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    caption: 'Butterfly layers with voluminous bouncy blowout styling.'
  },
  {
    id: 'gal-8',
    title: 'Clean Sanitized Wash Stations',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=900&auto=format&fit=crop',
    caption: 'Ergonomic reclining shampoo wash stations with scalp massage.'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What services does Cre8 Salon offer?',
    answer: 'Cre8 Salon Unisex in Mulund West offers a complete suite of luxury grooming and beauty services including Precision Haircuts, Hair Coloring & Balayage, Hair Botox & Spas, Clinical & Glow Facials, Eyebrow Shaping & Threading, Beard Grooming & Shaving, Rica Waxing, Brazilian Waxing, Deluxe Manicures & Pedicures, Acrylic Nail Extensions, HD Bridal & Event Makeup, and Restorative Spa therapies.',
    category: 'Services'
  },
  {
    id: 'faq-2',
    question: 'Is Cre8 Salon unisex?',
    answer: 'Yes! Cre8 Salon is a full-fledged unisex salon catering to both men and women. We have specialized stylists, private aesthetic suites, dedicated barber chairs, and sanitized treatment rooms designed for complete customer comfort and privacy.',
    category: 'General'
  },
  {
    id: 'faq-3',
    question: 'Where is Cre8 Salon located?',
    answer: 'We are conveniently located at Marathon Monte Plaza, Asha Nagar, Mulund West, Mumbai, Maharashtra 400080. The location has easy street access and parking availability nearby in Mulund West.',
    category: 'Location'
  },
  {
    id: 'faq-4',
    question: 'How can I book an appointment?',
    answer: 'You can easily book online in less than 60 seconds through our website booking form, directly message us on WhatsApp with your preferred timing, or call us at 090042 39091. Walk-ins are also welcome subject to availability, though prior booking is recommended for weekends.',
    category: 'Booking'
  },
  {
    id: 'faq-5',
    question: 'Can I book through WhatsApp?',
    answer: 'Yes, absolutely! Our WhatsApp booking hotline (+91 90042 39091) is active throughout salon hours. Simply click any WhatsApp button on this site to start a chat with our front-desk team, choose your slot, and receive instant confirmation.',
    category: 'Booking'
  },
  {
    id: 'faq-6',
    question: 'Does the salon offer bridal services?',
    answer: 'Yes, we provide comprehensive pre-bridal skincare regimens, nail extensions, trial sessions, and full day-of HD & Airbrush bridal makeup with hair styling and saree/lehenga draping for brides and wedding parties.',
    category: 'Bridal'
  },
  {
    id: 'faq-7',
    question: 'Does Cre8 offer hair coloring and balayage?',
    answer: 'Yes, we specialize in modern French Balayage, root touch-ups, global high-fashion colors, ombres, and highlights. We use authentic, professional products like L\'Oréal Professionnel, Schwarzkopf, and Olaplex bond repair treatments to ensure vibrant color with zero hair damage.',
    category: 'Hair'
  },
  {
    id: 'faq-8',
    question: 'Does Cre8 provide waxing and grooming services?',
    answer: 'Yes, we offer full-body waxing (including sensitive-skin Italian Rica Wax and painless peel-off Brazilian/Bikini waxing), precision eyebrow and facial threading, and complete men\'s grooming (hot towel straight-razor shave, beard sculpting, and hair fades).',
    category: 'Grooming'
  },
  {
    id: 'faq-9',
    question: 'What are the salon\'s opening hours?',
    answer: 'Cre8 Salon Unisex is open 7 days a week, Monday through Sunday from 10:00 AM to 9:00 PM (Closes at 9:00 PM). Last appointment bookings are generally taken at 8:15 PM.',
    category: 'Hours'
  }
];
