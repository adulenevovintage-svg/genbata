import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldCheck, Battery } from 'lucide-react';
import { useState, useEffect } from 'react';

const words = ["Always-On", "Reliable", "Industrial", "Sustainable"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500); // Pause at end
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-slate-50 min-h-screen flex flex-col justify-center">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      {/* High-Resolution Color Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-amber-400 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="lg:col-span-7"
          >
            {/* Technical Marker */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-slate-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">System.Status // Online</span>
            </div>

            <h1 className="text-[80px] md:text-[120px] lg:text-[160px] leading-[0.75] font-black uppercase tracking-tighter mb-12 translate-x-[-8px] text-slate-900 select-none">
              Powering<br />
              <span className="text-amber-400 relative inline-block">
                {words[index].substring(0, subIndex)}
                <motion.span 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-3 lg:w-6 h-[0.8em] bg-slate-900 align-middle ml-2"
                />
              </span><br />
              Futures.
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-600 mb-14 max-w-2xl font-bold leading-[1.1] tracking-tight">
              Engineering the apex of autonomous energy. GENBATA builds industrial-scale resilience into every watt.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
              <motion.button 
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-slate-900 text-white px-14 py-7 rounded-full text-2xl font-black uppercase tracking-tighter italic hover:bg-amber-400 hover:text-slate-900 transition-all group inline-flex items-center gap-4 shadow-[15px_15px_0px_rgba(251,191,36,0.4)]"
              >
                ABREN ENGEBA <ArrowRight size={32} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
              </motion.button>
              
              <div className="flex gap-12">
                <div className="group cursor-default">
                  <div className="text-4xl font-black italic tracking-tighter text-slate-900 group-hover:text-amber-500 transition-colors">4.2GW</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-400">Performance_Cap</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-black italic tracking-tighter text-slate-900 group-hover:text-amber-500 transition-colors">72H+</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-400">Stored_Reserve</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group overflow-visible">
              <motion.div 
                animate={{ 
                  x: [8, 12, 8],
                  y: [8, 4, 8],
                  rotate: [0, 1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-slate-900 rounded-[3rem] -z-10 transition-transform group-hover:bg-amber-400" 
              />
              <motion.div 
                whileHover={{ rotate: 1, scale: 1.02 }}
                className="relative rounded-[3.5rem] border-[10px] border-slate-900 overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                  alt="Industrial Solar PV"
                  className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-[3s] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay" />
              </motion.div>

              {/* High-Resolution Data Callouts */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-12 bg-white px-6 py-4 rounded-2xl border-4 border-slate-900 shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Active_Link</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-10 -left-16 bg-slate-900 p-8 rounded-[2rem] border-4 border-amber-400 text-white shadow-2xl z-20"
              >
                <div className="text-4xl font-black italic tracking-tighter mb-1">99.9%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Verified_Uptime</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

