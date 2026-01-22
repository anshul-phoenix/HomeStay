import { LucideIcon } from 'lucide-react';

export interface Amenity {
  id: string;
  name: string;
  description: string;
  Icon: LucideIcon;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'bedroom' | 'exterior' | 'living' | 'view';
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  images?: string[];
  capacity: number;
  features: string[];
  roomSize?: string;
  bedType?: string;
  amenities?: {
    bathroom?: string[];
    comfort?: string[];
    entertainment?: string[];
    kitchen?: string[];
    safety?: string[];
  };
}

export interface Landmark {
  name: string;
  distance: string;
  icon: string;
}

export interface ContactConfig {
  address: string;
  googleMapsEmbedUrl: string;
  locationTitle: string;
  locationSubtitle: string;
  landmarks: Landmark[];
  checkoutTime?: string;
  policies?: string[];
  googleMapsRedirectUrl?: string;
}