import React from 'react';
import { Sparkles, Bell } from 'lucide-react';
import { SHOW_FESTIVAL_BANNER, FESTIVAL_BANNER_TEXT } from '../constants';

const FestivalBanner: React.FC = () => {
  if (!SHOW_FESTIVAL_BANNER) return null;

  return (
    <section className="bg-orange-50 border-y border-orange-200 relative overflow-hidden shadow-inner">
      {/* Decorative top stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-red-500 to-orange-300"></div>
      
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-orange-900">
           <div className="flex items-center gap-2">
             <Bell className="h-5 w-5 text-orange-600 fill-orange-100 animate-[swing_2s_ease-in-out_infinite]" />
             <span className="font-bold text-orange-700 uppercase text-xs tracking-wider border border-orange-300 rounded px-2 py-0.5 bg-white/50">
               Update
             </span>
           </div>
           
           <span className="text-sm sm:text-base font-serif font-medium tracking-wide">
             {FESTIVAL_BANNER_TEXT}
           </span>
           
           <Sparkles className="hidden sm:block h-4 w-4 text-orange-500" />
        </div>
      </div>
    </section>
  );
};

export default FestivalBanner;