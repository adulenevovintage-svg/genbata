import { motion } from 'motion/react';
import { Target, Users, Zap, ShieldCheck, Leaf } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      title: "Advanced Technology",
      description: "Proprietary solid-state photovoltaic cells and smart hybrid inverters that outperform standard market solutions by 40%.",
      icon: Zap
    },
    {
      title: "Experienced Team",
      description: "Over 200 grid-scale projects completed by our tier-1 electrical engineers and certified solar technicians.",
      icon: Users
    },
    {
      title: "Eco-Commitment",
      description: "Radical sustainability. We use 100% recyclable battery components and carbon-neutral supply chains.",
      icon: Leaf
    },
    {
      title: "Reliability First",
      description: "All Genbata systems come with a signature 20-year performance guarantee and real-time remote health monitoring.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-6">The Genbata Edge</h2>
            <h3 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Why<br /><span className="text-slate-300">Choose</span><br />GENBATA?
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-md italic mb-12">
              We don't just sell components; we engineer autonomy. Our core values of technical supremacy and environmental stewardship drive every installation.
            </p>
            <div className="relative group overflow-hidden rounded-[2rem] border-4 border-slate-900 shadow-[15px_15px_0px_#fbbf24]">
               <img 
                 src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2670&auto=format&fit=crop" 
                 alt="Engineers at work" 
                 className="w-full h-80 object-cover grayscale brightness-50"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 border-2 border-slate-900">
                     <Target size={32} strokeWidth={3} />
                  </div>
               </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border-2 border-slate-100 rounded-[2rem] hover:border-slate-900 hover:bg-slate-900 transition-all cursor-default"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-slate-900 border-2 border-slate-900 group-hover:scale-110 transition-transform">
                    <adv.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900 group-hover:text-white mb-2 italic">
                      {adv.title}
                    </h4>
                    <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
