import { Wifi, Car, Wind, MapPin, ShieldCheck, Utensils } from 'lucide-react';
import { Amenity, GalleryImage, Testimonial, Room } from './types';

// --- CONFIGURATION START ---

// 1. Identity & Contact
export const HOMESTAY_NAME = "Nigam Homestay";
export const WHATSAPP_NUMBER = "919876543210"; 
export const CURRENCY = "₹";

// 2. Hero Section Config
export const HERO_CONFIG = {
  tagline: "Jai Mahakal / जय महाकाल 🙏",
  headline: "Your Home Near \n Mahakal Temple",
  headlineHi: "महाकाल मंदिर के पास आपका घर",
  subtext: "Walking distance to the temple. Clean, safe, and affordable stay for your family.",
  subtextHi: "मंदिर से पैदल दूरी। आपके परिवार के लिए साफ़, सुरक्षित और किफायती。"
};

// 3. Contact & Location Config
export const CONTACT_CONFIG = {
  address: "Near Mahakaleshwar Temple, Ujjain, MP",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4972626941164!2d75.7682853149726!3d23.18899498486948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00526d%3A0x675f0144f816c961!2sMahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1625624729388!5m2!1sen!2sin",
  locationTitle: "Just minutes away from Mahakaleshwar Jyotirlinga",
  locationSubtitle: "महाकालेश्वर ज्योतिर्लिंग से बस कुछ ही मिनटों की दूरी पर"
};

// 4. Festival Banner Config
export const SHOW_FESTIVAL_BANNER = true;
export const FESTIVAL_BANNER_TEXT = "Shravan Month Booking Open! Limited rooms available. / श्रावण मास बुकिंग शुरू! सीमित कमरे उपलब्ध।";

// 5. WhatsApp Message Template
export const BOOKING_MESSAGE = `Namaste,
Mujhe ${HOMESTAY_NAME} mein room chahiye.
Guests:
Check-in date:
Days:`;

// 6. Rooms & Pricing
export const ROOMS: Room[] = [
  {
    id: 'non-ac',
    name: 'Standard Non-AC / साधारण नॉन-एसी',
    price: 900,
    description: 'Clean and airy room with comfortable bed and fan. Perfect for budget travelers. / साफ और हवादार कमरा। बजट यात्रियों के लिए उत्तम।',
    image: 'https://picsum.photos/600/400?random=101',
    capacity: 2,
    features: ['Double Bed / डबल बेड', 'Fan / पंखा', 'Attached Bath / बाथरूम', '24h Water / पानी']
  },
  {
    id: 'ac',
    name: 'Deluxe AC Room / डीलक्स एसी रूम',
    price: 1800,
    description: 'Spacious room with Air Conditioning for a cool and relaxing stay after darshan. / दर्शन के बाद आराम के लिए एसी के साथ बड़ा कमरा।',
    image: 'https://picsum.photos/600/400?random=102',
    capacity: 3,
    features: ['Queen Bed / बड़ा बेड', 'AC / एसी', 'Hot Water / गर्म पानी', 'Wi-Fi / वाई-फाई']
  }
];

// --- END CONFIGURATION ---

export const AMENITIES: Amenity[] = [
  {
    id: 'location',
    name: 'Near Temple / मंदिर के पास',
    description: '5 mins walk to Mahakal / महाकाल से 5 मिनट',
    Icon: MapPin
  },
  {
    id: 'wifi',
    name: 'Free Wi-Fi / फ्री वाई-फाई',
    description: 'High speed internet / तेज़ इंटरनेट',
    Icon: Wifi
  },
  {
    id: 'food',
    name: 'Home Food / घर का खाना',
    description: 'Pure Veg Meals / शुद्ध शाकाहारी भोजन',
    Icon: Utensils
  },
  {
    id: 'water',
    name: '24/7 Water / 24 घंटे पानी',
    description: 'Hot & Cold Water / ठंडा और गर्म पानी',
    Icon: Wind
  },
  {
    id: 'security',
    name: 'Safe / सुरक्षित',
    description: 'CCTV & Family Environment / पारिवारिक माहौल',
    Icon: ShieldCheck
  },
  {
    id: 'transport',
    name: 'Auto Stand / ऑटो स्टैंड',
    description: 'Easy transport / आसान आवागमन',
    Icon: Car
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'https://picsum.photos/800/600?random=1',
    alt: 'Bedroom / कमरा',
    category: 'bedroom'
  },
  {
    id: '2',
    src: 'https://picsum.photos/800/600?random=2',
    alt: 'Temple View / मंदिर का दृश्य',
    category: 'view'
  },
  {
    id: '3',
    src: 'https://picsum.photos/800/600?random=3',
    alt: 'Entrance / प्रवेश द्वार',
    category: 'exterior'
  },
  {
    id: '4',
    src: 'https://picsum.photos/800/600?random=4',
    alt: 'Clean Bath / साफ़ बाथरूम',
    category: 'living'
  },
  {
    id: '5',
    src: 'https://picsum.photos/800/600?random=5',
    alt: 'Family Hall / हॉल',
    category: 'living'
  },
  {
    id: '6',
    src: 'https://picsum.photos/800/600?random=6',
    alt: 'Nearby Street / पास की गली',
    category: 'exterior'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Rahul Sharma",
    date: "Jan 2024",
    rating: 5,
    comment: "Best place to stay near Mahakal. Uncle and Aunty behavior is very good. / महाकाल के पास रुकने की सबसे अच्छी जगह।",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 't2',
    name: "Priya Patel",
    date: "Dec 2023",
    rating: 5,
    comment: "Very safe for families. Food was like home. / परिवार के लिए बहुत सुरक्षित। खाना बिल्कुल घर जैसा था।",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 't3',
    name: "Amit Verma",
    date: "Nov 2023",
    rating: 4,
    comment: "Clean rooms and budget friendly. / साफ़ कमरे और बजट में।",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];