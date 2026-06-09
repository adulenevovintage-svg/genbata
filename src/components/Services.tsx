import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Services() {
  const { t, addToCart, cart } = useApp();

  const services = [
    {
      id: "srv-sales",
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      price: 20000,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      color: "bg-blue-500",
      features: ["Hybrid Inverters", "LifePO4 Batteries", "Smart Monitoring"]
    },
    {
      id: "srv-install",
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      price: 40000,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop",
      color: "bg-amber-500",
      features: ["Roof & Ground Mount", "Grid-Tied Systems", "Off-Grid Setups"]
    },
    {
      id: "srv-maint",
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      price: 100000,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      color: "bg-green-500",
      features: ["Cleaning Services", "Software Updates", "Load Testing"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-4">
              {t('services_sub')}
            </h2>
            <h3 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] uppercase">
              {t('services_title_1')} <br /> {t('services_title_2')}
            </h3>
          </div>
          <p className="max-w-xs text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px] tracking-widest leading-loose">
            {t('services_desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-2 border-slate-900 dark:border-slate-700 rounded-[2rem] overflow-hidden">
          {services.map((item, i) => {
            const isAdded = cart.some((c) => c.id === item.id);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`p-10 bg-white dark:bg-slate-950 flex flex-col items-start ${
                  i !== 2 ? 'border-r-2 border-slate-900 dark:border-slate-750' : ''
                } hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-all duration-300 group relative`}
              >
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 border-2 border-slate-900/10 dark:border-slate-800 relative group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 dark:brightness-90 group-hover:brightness-100 transition-all duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/5">
                    SERVICE 0{i + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-2 italic">
                  {item.title}
                </h4>
                <div className="text-lg font-black text-amber-500 uppercase italic tracking-tighter mb-4">
                  {item.price.toLocaleString()} BIRR
                </div>
                <p className="text-slate-600 dark:text-slate-305 mb-10 font-medium leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-between">
                  <button
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.title,
                        price: item.price,
                        type: 'Service',
                      })
                    }
                    className={`w-full py-4.5 px-6 rounded-xl font-black uppercase tracking-widest text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-emerald-500 text-white border-none'
                        : 'bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-900 hover:bg-amber-400 dark:hover:bg-white hover:text-slate-900'
                    }`}
                  >
                    {isAdded ? (
                      'In Cart ✓'
                    ) : (
                      <>
                        <Plus size={14} strokeWidth={3} /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
