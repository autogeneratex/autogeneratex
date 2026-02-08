
import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  TrendingUp, 
  PhoneCall, 
  Clock, 
  Bot, 
  CheckCircle2, 
  ChevronRight, 
  Instagram, 
  ArrowRight,
  Menu,
  X,
  BarChart3
} from 'lucide-react';

const CAL_LINK = "autogenx-oraiqe/15min";
const ACCENT_RED = "#f22c3d";

const Logo = ({ className = "h-7 md:h-8" }: { className?: string }) => (
  <div className="flex items-center">
    <img 
      src="logo.png" 
      alt="AUTOGENX" 
      className={`${className} w-auto object-contain transition-opacity duration-300`}
      onError={(e) => {
        // Fallback styling if image fails to load
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML = `
          <div class="flex items-center text-xl font-black italic tracking-tighter brand-font">
            <span class="text-white">AUTOGEN</span><span class="text-[${ACCENT_RED}]">X</span>
          </div>
        `;
      }}
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCal = () => {
    // @ts-ignore
    window.Cal && window.Cal("modal", {
      calLink: CAL_LINK,
      config: {"layout":"month_view"}
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
          <Logo />
        </a>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#problem" className="text-[12px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors">THE PROBLEM</a>
          <a href="#services" className="text-[12px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors">SERVICES</a>
          <a href="#process" className="text-[12px] font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors">HOW IT WORKS</a>
          <button 
            onClick={openCal}
            className="bg-[#f22c3d] hover:bg-white text-white hover:text-black px-8 py-3 rounded-sm font-bold text-xs tracking-widest transition-all duration-300"
          >
            BOOK ANALYSIS
          </button>
        </div>

        <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 absolute top-full left-0 right-0 py-12 px-10 flex flex-col space-y-8 animate-in fade-in slide-in-from-top-2 duration-300 shadow-2xl">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-tight border-b border-white/5 pb-4">The Problem</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-tight border-b border-white/5 pb-4">Our Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold tracking-tight border-b border-white/5 pb-4">How it Works</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); openCal(); }}
            className="bg-[#f22c3d] text-white py-5 rounded-sm font-bold text-base tracking-widest mt-6"
          >
            BOOK FREE ANALYSIS
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const openCal = () => {
    // @ts-ignore
    window.Cal && window.Cal("modal", {
      calLink: CAL_LINK,
      config: {"layout":"month_view"}
    });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#f22c3d05_0%,_transparent_60%)]"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto md:mx-0">
          <div className="inline-flex items-center space-x-4 text-white/40 mb-10">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#f22c3d]">#1 Automotive Growth Partner</span>
            <div className="w-12 h-[1px] bg-white/20"></div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight text-white">
            We Build Growth Systems <br className="hidden lg:block" />
            <span className="text-white/30">For Auto Shops.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl leading-relaxed font-medium">
            Leads → Automation → Scale. <br/>
            Proven Google & Meta Ads, AI Automation, and 24/7 AI Receptionists.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            <button 
              onClick={openCal}
              className="group bg-white text-black px-12 py-6 rounded-sm font-bold text-sm tracking-[0.2em] flex items-center gap-6 transition-all hover:bg-[#f22c3d] hover:text-white"
            >
              BOOK FREE ANALYSIS CALL 🔧
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section id="problem" className="py-40 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mb-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight uppercase">Tired of Inconsistent Leads?</h2>
        <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-medium">We solve the three biggest bottlenecks preventing shop owners from scaling their revenue.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {[
          { title: "No Bookings", desc: "Slow months where the phone doesn't ring and your bays sit empty. We fix your lead volume." },
          { title: "Wasted Ad Spend", desc: "Spending money on ads that don't convert. We build campaigns focused on booked appointments." },
          { title: "Missed Calls", desc: "You're working on cars and missing calls. Every missed call is a customer lost to a competitor." }
        ].map((item, idx) => (
          <div key={idx} className="group border-l border-white/5 pl-8">
            <div className="text-xs font-black tracking-[0.4em] text-[#f22c3d] mb-8 uppercase">Point 0{idx + 1}</div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-[#f22c3d] transition-colors">{item.title}</h3>
            <p className="text-white/40 leading-relaxed text-lg font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="services" className="py-40 bg-black border-y border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-5 sticky top-40">
          <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tight uppercase">We Handle Your <br className="hidden md:block" />Growth.</h2>
          <p className="text-white/40 mb-12 leading-relaxed text-xl font-medium">Focus on the cars. We'll handle the leads, the follow-ups, and the bookings.</p>
          <div className="h-[2px] w-24 bg-[#f22c3d]"></div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {[
            { title: "Google & Meta Ads", desc: "Get booked solid with proven ad campaigns that target people looking for your specific services." },
            { title: "AI Chatbots", desc: "Convert website visitors 24/7, even while you sleep. Our AI qualifies and books them automatically." },
            { title: "AI Receptionists", desc: "Never miss a call again. Our AI phone system handles inquiries and schedules appointments 24/7." },
            { title: "Marketing Automation", desc: "Follow-ups, reminders, and review generation—all automated so your shop runs like a machine." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all rounded-sm">
              <h3 className="text-xl font-bold mb-6 tracking-tight">{item.title}</h3>
              <p className="text-base text-white/40 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="py-32 bg-[#050505]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="flex flex-col gap-4">
          <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">98%</div>
          <div className="text-[11px] font-bold tracking-[0.3em] text-[#f22c3d] uppercase">Lead Capture Rate</div>
        </div>
        <div className="flex flex-col gap-4 border-l border-white/5 md:pl-16">
          <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">24/7</div>
          <div className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase">Response Time</div>
        </div>
        <div className="flex flex-col gap-4 border-l border-white/5 md:pl-16">
          <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">3X</div>
          <div className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase">Average ROI</div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-40 bg-black overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight uppercase">Your Road to Growth</h2>
        <div className="text-[11px] font-bold tracking-[0.5em] text-white/20 uppercase italic">3 Simple Steps</div>
      </div>
      
      <div className="space-y-16">
        {[
          { step: "01", title: "Book Free Analysis", desc: "A 15-minute call where we audit your current marketing and show you exactly where to improve." },
          { step: "02", title: "Custom Strategy", desc: "We build your custom growth system, including your ads, AI receptionist, and automation." },
          { step: "03", title: "Scale & Automate", desc: "We launch your system and you watch your bookings increase while the operations stay automated." }
        ].map((item, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center group">
            <div className="md:col-span-1 text-5xl font-bold text-white/10 group-hover:text-[#f22c3d] transition-colors duration-500">{item.step}</div>
            <div className="md:col-span-4 text-2xl font-bold tracking-tight">{item.title}</div>
            <div className="md:col-span-7 text-white/40 leading-relaxed text-lg max-w-2xl font-medium">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => {
  const openCal = () => {
    // @ts-ignore
    window.Cal && window.Cal("modal", {
      calLink: CAL_LINK,
      config: {"layout":"month_view"}
    });
  };

  return (
    <section className="py-56 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold mb-12 tracking-tighter leading-none uppercase">Ready to Fill <br className="hidden md:block" /><span className="text-white/20">Your Schedule?</span></h2>
          <p className="text-2xl md:text-3xl text-white/50 mb-16 font-medium leading-relaxed">
            Book your free 15-minute analysis call. We'll show you exactly how to get more customers. No pressure. No sales pitch.
          </p>
          
          <button 
            onClick={openCal}
            className="inline-flex items-center gap-8 bg-white text-black px-16 py-8 rounded-sm font-bold text-base tracking-[0.2em] transition-all hover:bg-[#f22c3d] hover:text-white"
          >
            BOOK YOUR FREE ANALYSIS CALL
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-32 bg-black border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-24">
        <div className="space-y-8">
          <Logo className="h-10" />
          <p className="text-white/30 text-[12px] font-bold tracking-[0.2em] uppercase max-w-sm leading-relaxed italic">
            #1 Automotive Growth Partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.5em] text-white/20 uppercase">Connect</h4>
            <a href="https://instagram.com/autogenx" target="_blank" className="block text-sm font-bold text-white/50 hover:text-[#f22c3d] transition-colors tracking-widest uppercase italic">Instagram</a>
          </div>
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold tracking-[0.5em] text-white/20 uppercase">Action</h4>
            <a href={`https://cal.com/${CAL_LINK}`} target="_blank" className="block text-sm font-bold text-white/50 hover:text-[#f22c3d] transition-colors tracking-widest uppercase italic underline underline-offset-[12px] decoration-[#f22c3d]">Book Analysis 🔧</a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-white/5">
        <div className="text-[11px] font-bold tracking-[0.4em] text-white/20 uppercase">© 2026 AUTOGENX. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-12">
          <a href="#" className="text-[11px] font-bold tracking-[0.4em] text-white/20 hover:text-white transition-colors uppercase">Privacy</a>
          <a href="#" className="text-[11px] font-bold tracking-[0.4em] text-white/20 hover:text-white transition-colors uppercase">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#f22c3d] selection:text-white">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <Process />
      <FinalCTA />
      <Footer />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Agency",
          "name": "AutoGenX",
          "url": "https://autogenx.ai",
          "description": "Professional growth systems for automotive specialists.",
          "sameAs": ["https://www.instagram.com/autogenx"] 
        })}
      </script>
    </div>
  );
};

export default App;
