import { motion } from 'motion/react';
import { ShieldCheck, Battery } from 'lucide-react';

export default function Marquee() {
  return (
    <div className="relative z-20 pointer-events-none select-none py-4 overflow-hidden">
      <div className="bg-amber-400 py-3 border-y-4 border-slate-900 flex items-center whitespace-nowrap shadow-[0px_0px_50px_rgba(251,191,36,0.3)]">
        <div className="flex gap-20 animate-infinite-scroll">
          {[...Array(10)].map((_, i) => (
            <motion.div 
              key={i} 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              className="flex items-center gap-8 text-slate-900 font-black uppercase italic tracking-tighter text-2xl"
            >
              <span className="opacity-80">Solar Supremacy</span>
              <ShieldCheck size={28} strokeWidth={3} className="text-slate-900" />
              <span className="opacity-80">Genbata Industrial</span>
              <Battery size={28} strokeWidth={3} className="text-slate-900" />
              <span className="opacity-80">Unlimited Autonomy</span>
              <div className="w-3 h-3 bg-slate-900 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
