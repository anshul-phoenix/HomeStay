'use client';

import React from 'react';
import { AMENITIES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="facilities" className="scroll-mt-28 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Facilities
          </h2>
          <p className="text-earth-600 max-w-2xl mx-auto">
            Everything for a comfortable stay.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity) => {
            const Icon = amenity.Icon;
            return (
              <div
                key={amenity.id}
                className="group p-6 rounded-2xl bg-earth-50 hover:bg-orange-50 transition-colors duration-300 border border-transparent hover:border-orange-100 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-earth-900 mb-1">
                  {amenity.name}
                </h3>
                <p className="text-earth-600 text-xs leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;