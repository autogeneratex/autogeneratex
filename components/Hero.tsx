
import React from 'react';

const Hero: React.FC = () => {
  const CAL_LINK = "https://cal.com/autogenx-oraiqe/15min";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Background Subtle Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-5 py-1 glass-card rounded-full border border-red-900/50">
          <span className="text-red-500 text-[10px] font-black tracking-[0.3em] uppercase">The Detailing Growth Standard</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tighter italic uppercase">
          #1 GROWTH PARTNER FOR <br />
          <span className="text-red-600">PREMIUM SHOPS.</span>
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-12 uppercase tracking-widest font-bold">
          CERAMIC • PPF • TINT • DETAILING
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-5 bg-red-600 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-1">
            Apply to Scale
          </a>
          <a href="#strategy" className="w-full sm:w-auto px-12 py-5 border border-white/10 rounded-sm font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Our Method
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 max-w-4xl mx-auto">
          <div>
            <div className="text-sm font-black text-white mb-1 uppercase tracking-widest">Optimized</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">Leads</div>
          </div>
          <div>
            <div className="text-sm font-black text-white mb-1 uppercase tracking-widest">Proven</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">Funnels</div>
          </div>
          <div>
            <div className="text-sm font-black text-white mb-1 uppercase tracking-widest">Scalable</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">Systems</div>
          </div>
          <div>
            <div className="text-sm font-black text-white mb-1 uppercase tracking-widest">Elite</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gray-600">Training</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
