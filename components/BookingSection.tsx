'use client';

import React, { useState } from 'react';
import { MessageCircle, Calendar, Users, User } from 'lucide-react';
import { WHATSAPP_NUMBER, HOMESTAY_NAME } from '../constants';
import { BookingState } from '../types';

const BookingSection: React.FC = () => {
  const [booking, setBooking] = useState<BookingState>({
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the message
    const message = `Hello ${HOMESTAY_NAME},%0A%0AI'd like to inquire about a booking:%0A%0AName: ${booking.name}%0ACheck-in: ${booking.checkIn}%0ACheck-out: ${booking.checkOut}%0AGuests: ${booking.guests}%0A%0APlease let me know if this is available!`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Image/Info */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Booking ambiance" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="relative z-10 p-10 lg:p-16 flex flex-col justify-center h-full text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Ready for your getaway?
              </h2>
              <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                Book directly with us via WhatsApp for the best rates and personalized service. No hidden fees, instant confirmation.
              </p>
              <div className="flex items-center gap-4 text-brand-200">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/100/100?random=${i+20}`} className="w-10 h-10 rounded-full border-2 border-brand-900" alt="Guest" />
                  ))}
                </div>
                <p className="text-sm font-medium">Join 500+ happy guests this year</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-1/2 p-8 lg:p-16 bg-white">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={booking.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400 h-5 w-5" />
                    <input
                      type="date"
                      name="checkIn"
                      required
                      value={booking.checkIn}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-earth-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-700 mb-2">Check-out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400 h-5 w-5" />
                    <input
                      type="date"
                      name="checkOut"
                      required
                      value={booking.checkOut}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-earth-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-earth-700 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-earth-400 h-5 w-5" />
                  <select
                    name="guests"
                    value={booking.guests}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-earth-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all appearance-none bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  Inquire via WhatsApp
                </button>
                <p className="text-center text-xs text-earth-400 mt-4">
                  You'll be redirected to WhatsApp to send your pre-filled inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;