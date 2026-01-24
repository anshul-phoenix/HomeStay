'use client';

import React from 'react';
import { MapPin, Train, LandPlot, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { HOMESTAY_NAME, CONTACT_CONFIG } from '../constants';

const Location: React.FC = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'train':
        return <Train className="w-5 h-5 text-blue-600" />;
      case 'temple':
      default:
        return <LandPlot className="w-5 h-5 text-orange-600" />;
    }
  };

  return (
    <section id="location" className="scroll-mt-28 py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Location & Policies
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 text-earth-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-orange-600" />
              <p className="font-medium">{HOMESTAY_NAME}</p>
            </div>
            <p className="text-lg">{CONTACT_CONFIG.locationTitle}</p>
            <p className="text-sm text-earth-500">{CONTACT_CONFIG.locationSubtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1 space-y-8">
            {/* Landmarks Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-6">
              <h3 className="text-lg font-bold text-earth-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                Closest Landmarks
              </h3>
              <ul className="space-y-4">
                {CONTACT_CONFIG.landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      {getIcon(landmark.icon)}
                      <span className="text-earth-700">{landmark.name}</span>
                    </div>
                    <span className="font-semibold text-earth-900 bg-earth-100 px-2 py-1 rounded">
                      {landmark.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-earth-100 p-6">
              <h3 className="text-lg font-bold text-earth-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-500" />
                Hotel Policies
              </h3>
              <div className="space-y-4">
                {CONTACT_CONFIG.checkoutTime && (
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-500 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-earth-900">Check-out Time</p>
                      <p className="text-sm text-earth-600">{CONTACT_CONFIG.checkoutTime} (Sharp)</p>
                    </div>
                  </div>
                )}
                {CONTACT_CONFIG.policies && (
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-earth-900">Important Rules</p>
                      <ul className="mt-1 space-y-1">
                        {CONTACT_CONFIG.policies.map((policy, idx) => (
                          <li key={idx} className="text-sm text-earth-600 list-disc list-inside">
                            {policy}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-full min-h-[400px] bg-earth-200 rounded-2xl overflow-hidden shadow-sm border border-earth-100 relative group">
            <iframe 
              src={CONTACT_CONFIG.googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title={`${HOMESTAY_NAME} Location`}
              className="filter grayscale-[10%] hover:grayscale-0 transition-all duration-500 h-full"
            ></iframe>
            
            {CONTACT_CONFIG.googleMapsRedirectUrl && (
              <a 
                href={CONTACT_CONFIG.googleMapsRedirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white hover:bg-earth-50 text-earth-900 px-4 py-2 rounded-lg font-bold shadow-lg border border-earth-100 flex items-center gap-2 transition-all hover:scale-105 z-10"
              >
                <MapPin className="w-4 h-4 text-brand-500" />
                View on Google Maps
              </a>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="text-center text-earth-600 text-sm mt-8 p-4 bg-white/50 rounded-xl border border-earth-100 max-w-2xl mx-auto">
          <p className="font-medium mb-1">Full Address</p>
          <p>{CONTACT_CONFIG.address}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;