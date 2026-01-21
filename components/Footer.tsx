import React from 'react';
import { Home, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import { HOMESTAY_NAME, WHATSAPP_NUMBER, CONTACT_CONFIG } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-earth-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif text-2xl font-bold text-white">
              <Home className="h-8 w-8" />
              <span>{HOMESTAY_NAME}</span>
            </div>
            <p className="text-earth-400 leading-relaxed text-sm">
              Authentic homestay experience near Mahakaleshwar Temple. Simple, clean, and family-friendly.
              <br/>
              महाकालेश्वर मंदिर के पास प्रामाणिक होमस्टे। सरल, स्वच्छ और पारिवारिक।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Menu / मेनू</h3>
            <ul className="space-y-2 text-sm">
              {[
                { en: 'Home', hi: 'होम' }, 
                { en: 'Rooms', hi: 'कमरे' }, 
                { en: 'Facilities', hi: 'सुविधाएं' }, 
                { en: 'Location', hi: 'पता' }
              ].map(link => (
                <li key={link.en}>
                  <a href={`#${link.en.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                    {link.en} / {link.hi}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact / संपर्क</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>{CONTACT_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white">
                  +91 {WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-earth-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-earth-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-800 pt-8 text-center">
          <p className="text-xs text-earth-500">
            &copy; {new Date().getFullYear()} {HOMESTAY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;