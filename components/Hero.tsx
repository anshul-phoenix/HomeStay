import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { WHATSAPP_NUMBER, BOOKING_MESSAGE, HERO_CONFIG } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-20 relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Homestay background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-4 rounded-full bg-orange-600/90 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 border border-orange-400/30 animate-fade-in-up">
          {HERO_CONFIG.tagline}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg whitespace-pre-line">
          {HERO_CONFIG.headline}
          <span className="block text-2xl md:text-4xl mt-4 font-sans font-medium text-orange-100">
            {HERO_CONFIG.headlineHi}
          </span>
        </h1>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          {HERO_CONFIG.subtext}
          <br/>
          <span className="text-white/80 block mt-2">
            {HERO_CONFIG.subtextHi}
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white text-lg px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Booking / बुकिंग
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-8 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
          >
            View Rooms / कमरे देखें
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;