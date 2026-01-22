import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="scroll-mt-28 py-20 bg-earth-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
              Gallery
            </h2>
            <p className="text-earth-600 max-w-md">
              A glimpse of your stay.
            </p>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
          {GALLERY_IMAGES.map((image, idx) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-2xl shadow-sm bg-earth-200 group ${
                // Bento-grid style: 1st and 4th images span 2 columns on large screens
                (idx === 0 || idx === 3) ? 'lg:col-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;