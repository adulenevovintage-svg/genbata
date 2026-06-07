import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Didiskiya Mulugeta",
      role: "Co-Founder, Rift Valley Agro",
      text: "The off-grid battery modules from GENBATA kept our processing mills fully operational during peak harvest. Their modular stack-and-go architecture is highly reliable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Nathnael Haile",
      role: "Infrastructure Lead, Blue Nile Logistics",
      text: "GENBATA transformed our cold-storage warehouses in Addis Ababa. The industrial solar generator system reduced our secondary grid reliance by 70%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Ahmed Mohammed",
      role: "Chief Technical Officer, Ethio-Tech Hub",
      text: "Transitioning our data servers to solar power was a major project. GENBATA executed it flawlessly. We now run completely on clean energy with zero downtime.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Enjifano Ebsa",
      role: "Operations Director, Oromia Energy Cooperative",
      text: "Deploying backup power arrays to rural clinic networks was seamless with GENBATA. Their systems are durable, expandable, and built for heavy-duty use.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center pointer-events-none opacity-5">
        <h2 className="text-[200px] font-black uppercase text-white whitespace-nowrap">FEEDBACK / FEEDBACK / FEEDBACK</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 flex items-center gap-8">
          <div className="h-px bg-amber-400 flex-1" />
          <h2 className="text-xs font-black text-amber-400 uppercase tracking-[0.4em] px-8 border-x border-amber-400 py-2">Testimonials</h2>
          <div className="h-px bg-amber-400 flex-1" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col h-full"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-2xl leading-tight font-black uppercase tracking-tighter mb-10 italic">
                "{t.text}"
              </p>
              <div className="mt-auto flex items-center gap-6 pt-10 border-t border-slate-800">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-amber-400 p-0.5 grayscale" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-black uppercase tracking-tighter text-white">{t.name}</div>
                  <div className="text-[10px] text-amber-400 font-bold uppercase tracking-[0.2em]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
