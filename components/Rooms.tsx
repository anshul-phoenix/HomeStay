import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { ROOMS, CURRENCY, WHATSAPP_NUMBER, BOOKING_MESSAGE } from '../constants';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="scroll-mt-28 py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Rooms & Pricing <br/>
            <span className="text-2xl text-earth-700">कमरे और किराया</span>
          </h2>
          <p className="text-earth-600 max-w-2xl mx-auto">
            Choose the perfect room for your family.
            <br/>
            अपने परिवार के लिए सही कमरा चुनें।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROOMS.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-earth-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-black/60 text-white px-3 py-1 text-sm font-medium">
                  Max {room.capacity} Guests / {room.capacity} लोग
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-earth-900">{room.name}</h3>
                </div>
                
                <p className="text-earth-600 text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-earth-700">
                      <Check className="w-4 h-4 text-brand-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-earth-100 mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-earth-500">Price / किराया</span>
                    <div className="text-2xl font-bold text-brand-700">
                      {CURRENCY}{room.price}<span className="text-sm font-normal text-earth-500">/night</span>
                    </div>
                  </div>
                  
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE + `\n(Room: ${room.name})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-earth-900 hover:bg-brand-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book on WhatsApp / बुक करें
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;