import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FestivalBanner from './components/FestivalBanner';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Features from './components/Features';
import Location from './components/Location';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, BOOKING_MESSAGE } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-earth-50 scroll-smooth">
      <Navbar />
      
      <main>
        <Hero />
        <FestivalBanner />
        <Gallery />
        <Rooms />
        <Features />
        <Location />
      </main>
      
      <Footer />

      {/* Sticky WhatsApp Button for Mobile */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-4 left-4 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 md:hidden flex items-center justify-center gap-3 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold text-lg">Book on WhatsApp</span>
      </a>
    </div>
  );
}

export default App;