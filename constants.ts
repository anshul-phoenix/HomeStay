import { Wifi, Car, Wind, MapPin, ShieldCheck, Utensils, BedDouble, Coffee, Sparkles, Users } from 'lucide-react';
import { Amenity, GalleryImage, Testimonial, Room } from './types';

// --- CONFIGURATION START ---

// 1. Identity & Contact
export const HOMESTAY_NAME = "Hotel Shivnandani";
export const WHATSAPP_NUMBER = "918109494267"; 
export const PHONE_NUMBER = "+91 81094 94267";
export const CURRENCY = "₹";

// 2. Hero Section Config
export const HERO_CONFIG = {
  tagline: "Rated 4.9★ on Google",
  headline: "Your Home Near\nMahakal Temple",
  subtext: "Just 500m from Mahakaleshwar Temple Corridor. Clean, comfortable rooms with exceptional hospitality by Mr. Deepesh."
};

// 3. Contact & Location Config
export const CONTACT_CONFIG = {
  address: "No 116, Choubis Khamba Marg, Harsiddhi Road, Near Mahakaleshwar Mandir, Harsiddhi Gate, Ujjain - 456006, Madhya Pradesh",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.2248202789172!2d75.7699537!3d23.1848997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963759b18bb4b37%3A0xdd0d2e6ec7c4bc89!2sShivnandani!5e0!3m2!1sen!2sin!4v1769090267433!5m2!1sen!2sin",
  googleMapsRedirectUrl: "https://maps.app.goo.gl/LBSGGBnZtAzVFeBs5",
  locationTitle: "Prime Location Near Major Temples",
  locationSubtitle: "Walking distance from all major tourist attractions",
  landmarks: [
    { name: "Mahakaleshwar Temple", distance: "240 m", icon: "temple" },
    { name: "Gopal Mandir Temple", distance: "380 m", icon: "temple" },
    { name: "Harsiddhi Mandir", distance: "540 m", icon: "temple" },
    { name: "Ram Ghat Kshira River", distance: "600 m", icon: "temple" },
    { name: "Ujjain Railway Station", distance: "1.2 km", icon: "train" },
    { name: "Gadkalika Temple", distance: "2.2 km", icon: "temple" }
  ],
  checkoutTime: "9:00 AM",
  policies: ["ID Proof is mandatory for all guests"]
};

// 4. Festival Banner Config
export const SHOW_FESTIVAL_BANNER = true;
export const FESTIVAL_BANNER_TEXT = "Book Now! Limited rooms available near Mahakal Temple.";

// 5. WhatsApp Message Template
export const BOOKING_MESSAGE = `Hello,
I would like to book a room at ${HOMESTAY_NAME}.
Guests:
Check-in date:
Number of nights:`;

// 6. Rooms & Pricing
export const ROOMS: Room[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Double Room with Extra Bed',
    price: 2099,
    description: 'Beautifully designed 13m² room with queen bed, landmark view, private bathroom with bathtub, AC, TV, and all modern amenities. Perfect for couples or small families.',
    image: '/deluxe-room-1.jpg',
    images: ['/deluxe-room-1.jpg', '/deluxe-room-2.jpg', '/deluxe-room-3.jpg'],
    capacity: 3,
    roomSize: '13 m² / 140 ft²',
    bedType: '1 Queen Bed + Extra Bed',
    features: ['Air Conditioning', 'Free Wi-Fi', 'Queen Bed', 'Bathtub', 'TV', 'Landmark View'],
    amenities: {
      bathroom: ['Bathtub', 'Shower', 'Private Bathroom', 'Hair Dryer', 'Toiletries', 'Towels', 'Additional Toilet'],
      comfort: ['Air Conditioning', 'Fan', 'Heating', 'Linens', 'Slippers', 'Socket Near Bed', 'Wake-up Service', 'Private Entrance', 'Hand Sanitizer'],
      entertainment: ['TV'],
      kitchen: ['Electric Kettle', 'Free Bottled Water'],
      safety: ['Smoke Detector', 'Fire Extinguisher', 'Accessible by Stairs']
    }
  },
  {
    id: 'family',
    name: 'Family Room with Private Bathroom',
    price: 2999,
    description: 'Spacious 16m² family room with 2 queen beds, private balcony, bathtub, landmark view, in-room safe, and all premium amenities. Perfect for larger families.',
    image: '/family-room-1.jpg',
    images: ['/family-room-1.jpg', '/family-room-2.jpg', '/family-room-3.jpg', '/family-room-bathroom.jpg'],
    capacity: 6,
    roomSize: '16 m² / 172 ft²',
    bedType: '2 Queen Beds (Extra Long)',
    features: ['Air Conditioning', 'Balcony/Terrace', '2 Queen Beds', 'Bathtub', 'TV', 'In-Room Safe'],
    amenities: {
      bathroom: ['Bathtub', 'Shower', 'Private Bathroom', 'Hair Dryer', 'Toiletries', 'Towels', 'Additional Toilet'],
      comfort: ['Air Conditioning', 'Fan', 'Heating', 'Linens', 'Slippers', 'Socket Near Bed', 'Wake-up Service', 'Private Entrance', 'Hand Sanitizer'],
      entertainment: ['TV'],
      kitchen: ['Electric Kettle', 'Free Bottled Water'],
      safety: ['Smoke Detector', 'Fire Extinguisher', 'In-Room Safe Box', 'Accessible by Stairs']
    }
  }
];

// --- END CONFIGURATION ---

export const AMENITIES: Amenity[] = [
  {
    id: 'location',
    name: 'Prime Location',
    description: '500m from Mahakal Temple',
    Icon: MapPin
  },
  {
    id: 'wifi',
    name: 'Free Wi-Fi',
    description: 'High speed internet',
    Icon: Wifi
  },
  {
    id: 'parking',
    name: 'Free Parking',
    description: 'Secure vehicle parking',
    Icon: Car
  },
  {
    id: 'ac',
    name: 'Air Conditioning',
    description: 'All rooms fully AC',
    Icon: Wind
  },
  {
    id: 'clean',
    name: 'Enhanced Cleaning',
    description: 'Daily housekeeping',
    Icon: Sparkles
  },
  {
    id: 'host',
    name: 'Helpful Host',
    description: 'Local tour guidance',
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