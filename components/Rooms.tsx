'use client';

import React, { useState } from 'react';
import { MessageCircle, Check, Maximize2, Bed, ChevronLeft, ChevronRight } from 'lucide-react';
import { ROOMS, CURRENCY, WHATSAPP_NUMBER, BOOKING_MESSAGE } from '../constants';

const Rooms: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: string]: number}>({});

  const nextImage = (roomId: string, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (roomId: string, totalImages: number) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <section id="rooms" className="scroll-mt-28 py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Our Rooms
          </h2>
          <p className="text-earth-600 max-w-2xl mx-auto">
            Choose the perfect accommodation for your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ROOMS.map((room) => {
            const images = room.images || [room.image];
            const currentIndex = activeImageIndex[room.id] || 0;
            
            return (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-earth-100">
                {/* Image Gallery */}
                <div className="h-72 overflow-hidden relative group">
                  <img 
                    src={images[currentIndex]} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  
                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button 
                        onClick={() => prevImage(room.id, images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => nextImage(room.id, images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(prev => ({...prev, [room.id]: idx}))}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <div className="bg-black/60 text-white px-3 py-1 text-xs font-medium rounded-full">
                      Max {room.capacity} Guests
                    </div>
                    {room.roomSize && (
                      <div className="bg-white/90 text-earth-800 px-3 py-1 text-xs font-medium rounded-full flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        {room.roomSize}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3 flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-earth-900">{room.name}</h3>
                      {room.bedType && (
                        <div className="flex items-center gap-1.5 text-sm text-earth-600 mt-1">
                          <Bed className="w-4 h-4" />
                          <span>{room.bedType}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-earth-500 text-xs uppercase font-bold tracking-wider">Starts from</div>
                      <div className="text-2xl font-bold text-brand-600">
                        {CURRENCY}{room.price}
                      </div>
                      <div className="text-earth-400 text-[10px]">per night</div>
                    </div>
                  </div>
                  
                  <p className="text-earth-600 text-sm mb-4 leading-relaxed">
                    {room.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6 flex-grow">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-earth-700">
                        <Check className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-earth-100 mt-auto">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE + `\n(Room: ${room.name})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block text-center bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book Now via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;