import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "Operations Manager, Vertex Logistics",
      text: "GENBATA transformed our warehouse operations. The solar generator system they installed has reduced our energy costs by 65% in just 6 months. Their maintenance team is truly world-class.",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "Homeowner",
      text: "Energy independence used to be a dream. Now, with our GENBATA residential setup, we don't even notice when the neighborhood grid goes down. Highly recommend their professional installation team.",
      avatar: "https://i.pravatar.cc/150?u=elena"
    },
    {
      name: "Sam Chen",
      role: "CEO, EcoResort Hawaii",
      text: "Installing a massive off-grid system on a remote island was a challenge other companies turned down. GENBATA executed it flawlessly. They are the leaders in sustainable power.",
      avatar: "https://i.pravatar.cc/150?u=sam"
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

        <div className="grid lg:grid-cols-3 gap-12">
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
