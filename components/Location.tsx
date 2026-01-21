import React from 'react';
import { MapPin } from 'lucide-react';
import { HOMESTAY_NAME, CONTACT_CONFIG } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="scroll-mt-28 py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Location <br/>
            <span className="text-2xl text-earth-700">स्थान</span>
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 text-earth-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              <p className="font-medium">{HOMESTAY_NAME} / {HOMESTAY_NAME.split(' ')[0]} होमस्टे</p>
            </div>
            <p className="text-lg">{CONTACT_CONFIG.locationTitle}</p>
            <p className="text-sm text-earth-500">{CONTACT_CONFIG.locationSubtitle}</p>
          </div>
        </div>

        <div className="w-full h-[400px] bg-earth-200 rounded-2xl overflow-hidden shadow-md relative">
          <iframe 
            src={CONTACT_CONFIG.googleMapsEmbedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title={`${HOMESTAY_NAME} Location`}
            className="filter grayscale-[10%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export