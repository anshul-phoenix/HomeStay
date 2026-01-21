import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">
            Guest Experiences
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="font-bold text-earth-900">4.9/5</span>
            <span className="text-earth-500 text-sm">(128 reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-earth-100 relative">
              <Quote className="absolute top-6 right-6 text-brand-100 w-10 h-10 rotate-180" />
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-earth-900">{review.name}</h4>
                  <p className="text-xs text-earth-500 uppercase tracking-wide">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-earth-600 italic leading-relaxed">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;