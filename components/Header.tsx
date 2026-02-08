
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Auto Gen X Logo" className="h-8 md:h-10 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#strategy" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Strategy</a>
          <a href="https://cal.com/autogenx-oraiqe/15min" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-sm hover:bg-red-700 transition-all transform active:scale-95">
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
