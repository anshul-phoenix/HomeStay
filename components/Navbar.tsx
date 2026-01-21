'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { HOMESTAY_NAME, WHATSAPP_NUMBER, BOOKING_MESSAGE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className={`flex items-center gap-2 font-serif text-xl font-bold ${isScrolled ? 'text-earth-900' : 'text-white'}`}>
              <Home className="h-6 w-6" />
              <span>{HOMESTAY_NAME}</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-earth-800' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-earth-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-earth-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-earth-800 hover:text-brand-600 hover:bg-brand-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold shadow-md"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;