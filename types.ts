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
  capacity: number;
  features: string[];
}