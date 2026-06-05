import { motion } from 'motion/react';
import { ShoppingCart, Wrench, Settings, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Premium Sales",
      desc: "Top-tier solar-powered generators from leading global manufacturers, tailored to your capacity needs.",
      icon: ShoppingCart,
      color: "bg-blue-500",
      features: ["Hybrid Inverters", "LifePO4 Batteries", "Smart Monitoring"]
    },
    {
      title: "Precision Installation",
      desc: "Expert engineering teams ensure your system is mounted, wired, and optimized for maximum sun exposure.",
      icon: Settings,
      color: "bg-amber-500",
      features: ["Roof & Ground Mount", "Grid-Tied Systems", "Off-Grid Setups"]
    },
    {
      title: "Lifetime Maintenance",
      desc: "Regular checkups and 24/7 emergency support to keep your power flowing without interruptions.",
      icon: Wrench,
      color: "bg-green-500",
      features: ["Cleaning Services", "Software Updates", "Load Testing"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-4">Our Services</h2>
            <h3 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
              Integrated <br /> Energy <span className="text-slate-400">Hub.</span>
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 font-bold uppercase text-[10px] tracking-widest leading-loose">
            From industrial engineering to residential battery backups, we provide the full stack of solar technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-slate-900 rounded-[2rem] overflow-hidden">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-12 bg-white flex flex-col items-start ${i !== 2 ? 'border-r-2 border-slate-900' : ''} hover:bg-amber-400 transition-colors group`}
            >
              <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 italic">{item.title}</h4>
              <p className="text-slate-600 mb-10 font-medium leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-8 border-t border-slate-100 w-full">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900">Explore Solution</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
