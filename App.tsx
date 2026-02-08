
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strategy from './components/Strategy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Strategy />

      {/* High-Impact Focus Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 italic uppercase tracking-tighter">
            WE DOMINATE <span className="text-red-600">HIGH-TICKET.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium">
            We scale detailers into premium shops, focusing exclusively on high-ticket services.
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            <div className="text-center">
              <span className="block text-2xl font-black uppercase tracking-widest mb-2">Ceramic</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Protection</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black uppercase tracking-widest mb-2">PPF</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Defense</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-black uppercase tracking-widest mb-2">Tint</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Privacy</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
