
import React from 'react';

const Strategy: React.FC = () => {
  const steps = [
    {
      title: "Building Foundation",
      description: "Establishing authority with high-converting scripts and winning content strategies.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Running Ads",
      description: "Surgical Meta Ad funnels designed specifically to capture $1,500+ ticket leads.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Point of Sale",
      description: "Mastering the close with proven sales frameworks to maximize every single lead.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="strategy" className="py-24 bg-black scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic uppercase tracking-tighter">THE <span className="text-red-600">3-PILLAR</span> METHOD</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[10px] uppercase tracking-[0.3em] font-black">Foundation • Ads • Conversion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-black p-10 hover:bg-white/[0.02] transition-colors group">
              <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-500 inline-block">
                {step.icon}
              </div>
              <h3 className="text-lg font-black mb-3 uppercase tracking-tight italic">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
