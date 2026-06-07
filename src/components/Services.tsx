import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Wrench, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Services() {
  const { t } = useApp();

  const services = [
    {
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      icon: ShoppingCart,
      color: "bg-blue-500",
      features: ["Hybrid Inverters", "LifePO4 Batteries", "Smart Monitoring"]
    },
    {
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      icon: Settings,
      color: "bg-amber-500",
      features: ["Roof & Ground Mount", "Grid-Tied Systems", "Off-Grid Setups"]
    },
    {
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      icon: Wrench,
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
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-12 bg-white dark:bg-slate-950 flex flex-col items-start ${
                i !== 2 ? 'border-r-2 border-slate-900 dark:border-slate-750' : ''
              } hover:bg-amber-400 dark:hover:bg-amber-400 hover:text-slate-900 dark:hover:text-slate-900 transition-all duration-300 group`}
            >
              <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-slate-800 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 italic group-hover:text-slate-900">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-10 font-medium leading-relaxed group-hover:text-slate-800">
                {item.desc}
              </p>
              <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800 w-full group-hover:border-slate-900/10">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-slate-900">
                  {t('explore_solution')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
