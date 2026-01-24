import { Wifi, Car, Wind, MapPin, ShieldCheck, Utensils, BedDouble, Coffee, Sparkles, Users } from 'lucide-react';
import { Amenity, GalleryImage, Testimonial, Room } from './types';

// --- CONFIGURATION START ---

// 1. Identity & Contact
export const HOMESTAY_NAME = "Hotel Shivnandani Palace";
export const WHATSAPP_NUMBER = "918109494267"; 
export const PHONE_NUMBER = "+91 81094 94267";
export const CURRENCY = "₹";
export const DOMAIN = "hotelshivnandanipalace.com";

// 2. Hero Section Config (SEO Optimized)
export const HERO_CONFIG = {
  tagline: "Rated 4.9★ on Google • Best Budget Guest House",
  headline: "Hotel Shivnandani Palace\nNear Mahakal Temple",
  subtext: "Rooms starting from ₹2099. Experience comfort and heritage at Hotel Shivnandani Palace. Just 200m from temple exit. Clean AC rooms & Secure parking. Book now!"
};

// 3. Contact & Location Config
export const CONTACT_CONFIG = {
  address: "No 116, Choubis Khamba Marg, Harsiddhi Road, Near Mahakaleshwar Mandir, Harsiddhi Gate, Ujjain - 456006, Madhya Pradesh",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.2248202789172!2d75.7699537!3d23.1848997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963759b18bb4b37%3A0xdd0d2e6ec7c4bc89!2sShivnandani!5e0!3m2!1sen!2sin!4v1769090267433!5m2!1sen!2sin",
  googleMapsRedirectUrl: "https://maps.app.goo.gl/LBSGGBnZtAzVFeBs5",
  locationTitle: "Walking Distance from Major Temples",
  locationSubtitle: "Perfectly located for Bhasma Aarti and Temple Darshan",
  landmarks: [
    { name: "Mahakaleshwar Temple", distance: "200 m", icon: "temple" },
    { name: "Mahakal Lok Nandi Dwar", distance: "240 m", icon: "temple" },
    { name: "Harsiddhi Mata Mandir", distance: "540 m", icon: "temple" },
    { name: "Ram Ghat (Shipra River)", distance: "600 m", icon: "temple" },
    { name: "Ujjain Railway Station", distance: "1.2 km", icon: "train" },
    { name: "Kal Bhairav Temple", distance: "4.5 km", icon: "temple" },
    { name: "Mangalnath Temple", distance: "5.2 km", icon: "temple" },
    { name: "Sandipani Ashram", distance: "4.8 km", icon: "temple" }
  ],
  checkoutTime: "9:00 AM",
  policies: ["ID Proof is mandatory for all guests", "Smoking is prohibited in rooms"]
};

// 4. Festival Banner Config
export const SHOW_FESTIVAL_BANNER = true;
export const FESTIVAL_BANNER_TEXT = "Special Offer: 10% Discount on 3+ nights stay. Book now for Bhasma Aarti!";

// 5. WhatsApp Message Template
export const BOOKING_MESSAGE = `Hello,
I would like to book a room at ${HOMESTAY_NAME}.
Room Type:
Guests:
Check-in date:
Number of nights:`;

// 6. Rooms & Pricing
export const ROOMS: Room[] = [
  {
    id: 'deluxe',
    name: 'Three-Bed Deluxe AC Room',
    price: 2099,
    description: 'Perfect for families or groups of 3. Features 1 Queen bed + 1 Single bed, AC, and private bathroom with geyser. High hygiene standards and landmark view.',
    image: '/deluxe-room-1.jpg',
    images: ['/deluxe-room-1.jpg', '/deluxe-room-2.jpg', '/deluxe-room-3.jpg'],
    capacity: 3,
    roomSize: '13 m² / 140 ft²',
    bedType: '1 Queen Bed + 1 Single Bed',
    features: ['Air Conditioning', 'High-speed Wi-Fi', '24h Hot Water', 'Bathtub', 'Landmark View', 'Daily Housekeeping'],
    amenities: {
      bathroom: ['Bathtub', 'Shower', 'Private Bathroom', 'Geyser/Hot Water', 'Toiletries', 'Towels'],
      comfort: ['Air Conditioning', 'Fan', 'Linens', 'Socket Near Bed', 'Wake-up Service'],
      entertainment: ['LED TV with Cable'],
      kitchen: ['Free Bottled Water', 'Tea/Coffee Maker on demand'],
      safety: ['Smoke Detector', 'Fire Extinguisher']
    }
  },
  {
    id: 'family',
    name: 'Six-Bed Super Family AC Room',
    price: 2999,
    description: 'Large 6-bed room ideal for group pilgrims. Features 3 Double beds, private balcony, and spacious area. Closest family stay at Shivnandani Palace.',
    image: '/family-room-1.jpg',
    images: ['/family-room-1.jpg', '/family-room-2.jpg', '/family-room-3.jpg', '/family-room-bathroom.jpg'],
    capacity: 6,
    roomSize: '18 m² / 195 ft²',
    bedType: '3 Double Beds',
    features: ['Air Conditioning', 'Private Balcony', 'Secure Parking', 'LCD TV', 'In-Room Safe', 'Doctor on Call'],
    amenities: {
      bathroom: ['Shower', 'Private Bathroom', 'Geyser', 'Toiletries', 'Towels'],
      comfort: ['Air Conditioning', 'Fan', 'Linens', 'Socket Near Bed', 'Wake-up Service', 'Luggage Storage'],
      entertainment: ['LCD TV'],
      kitchen: ['Free Bottled Water'],
      safety: ['In-Room Safe Box', 'Fire Extinguisher']
    }
  }
];

// --- END CONFIGURATION ---

export const AMENITIES: Amenity[] = [
  {
    id: 'location',
    name: 'Closest to Mahakal',
    description: '200m from Temple Exit',
    Icon: MapPin
  },
  {
    id: 'wifi',
    name: 'High-speed Wi-Fi',
    description: 'Work or Stream with ease',
    Icon: Wifi
  },
  {
    id: 'parking',
    name: 'Secure Parking',
    description: 'Dedicated space for cars',
    Icon: Car
  },
  {
    id: 'ac',
    name: 'Full Air Conditioning',
    description: 'Powerful cooling in all rooms',
    Icon: Wind
  },
  {
    id: 'clean',
    name: 'Hygiene First',
    description: 'Daily sanitization',
    Icon: Sparkles
  },
  {
    id: 'host',
    name: 'Pilgrim Guidance',
    description: 'Expert local tour help',
    Icon: Users
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/deluxe-room-1.jpg',
    alt: 'Deluxe Room - Cozy Bed',
    category: 'bedroom'
  },
  {
    id: '2',
    src: '/deluxe-room-2.jpg',
    alt: 'Deluxe Room - Modern Interior',
    category: 'bedroom'
  },
  {
    id: '3',
    src: '/family-room-1.jpg',
    alt: 'Spacious Family Room',
    category: 'bedroom'
  },
  {
    id: '4',
    src: '/room-led-panel.jpg',
    alt: 'AC Room with LED Panel',
    category: 'bedroom'
  },
  {
    id: '5',
    src: '/bathroom-glass.jpg',
    alt: 'Modern Bathroom with Glass Partition',
    category: 'living'
  },
  {
    id: '6',
    src: '/reception-desk.jpg',
    alt: 'Reception Area',
    category: 'living'
  },
  {
    id: '7',
    src: '/hotel-corridor-1.jpg',
    alt: 'Hotel Corridor',
    category: 'living'
  },
  {
    id: '8',
    src: '/mahakal-temple-night.jpg',
    alt: 'Mahakal Temple Night View',
    category: 'view'
  },
  {
    id: '9',
    src: '/aarti-timings.jpg',
    alt: 'Temple Aarti Schedule',
    category: 'view'
  },
  {
    id: '10',
    src: '/twin-beds-room.jpg',
    alt: 'Family Room - Additional Beds',
    category: 'bedroom'
  },
  {
    id: '11',
    src: '/family-room-bathroom.jpg',
    alt: 'Spacious Bathroom',
    category: 'living'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Mukul Agarwal",
    date: "A week ago",
    rating: 5,
    comment: "Nice and pleasant stay. Host Mr Deepesh is very helpful and gentleman. He arranged all local tour for us and guided us throughout our stay. Hotel is very near to Mahakal Mandir, everyday we walked to Mahakal Mandir for Bhasm Aarti. The Main Mandir Corridor is only 500m away.",
    avatar: ""
  },
  {
    id: 't2',
    name: "Kavya Verma",
    date: "2 weeks ago",
    rating: 5,
    comment: "I stayed here with my Family. The rooms were clean, the host, Deepesh bhaiya was were helpful and supportive. The location of the hotel is in the city center, Walking distance to the corridor and ghat.",
    avatar: ""
  },
  {
    id: 't3',
    name: "Shruti Rai",
    date: "A week ago",
    rating: 5,
    comment: "The stay was comfortable and pleasant. Rooms were clean and well-maintained. Staff was polite and helpful. Food quality was good and service was on time. Overall, it was a nice experience.",
    avatar: ""
  },
  {
    id: 't4',
    name: "Pradip Patil",
    date: "2 weeks ago",
    rating: 5,
    comment: "Wonderful experience. Location is excellent..within 10 min walking distance from all the tourist attraction. Rooms are neat and clean. Host Dipesh is excellent and guiding you to plan your itinerary.",
    avatar: ""
  },
  {
    id: 't5',
    name: "Amey Sawant",
    date: "2 months ago",
    rating: 5,
    comment: "The biggest plus point of this homestay is its location. Mahakal Mandir and the temple corridor are both in very close proximity. The rooms are neat and clean. The owner Mr Dipesh is very humble person.",
    avatar: ""
  }
];