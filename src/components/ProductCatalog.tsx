import { motion } from 'motion/react';
import { ShoppingBag, Battery, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ProductCatalog() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const products = [
    {
      id: 'gen-110',
      name: "110W Energy Titan",
      price: "50,000 BIRR",
      specs: "2-3 Year Battery Health",
      desc: "High-output unit designed for heavy industrial tools and commercial backups.",
      image: "https://images.unsplash.com/photo-1548543604-a87a9909bfec?q=80&w=2574&auto=format&fit=crop",
      type: "Generator"
    },
    {
      id: 'gen-80',
      name: "80W Eco-Base",
      price: "40,000 BIRR",
      specs: "4-5 Year Battery Health",
      desc: "Sustained efficiency for residential lighting, tech hubs, and low-draw appliances.",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop",
      type: "Generator"
    },
    {
      id: 'maint-1',
      name: "Gen-Pro Maintenance",
      price: "4,000 BIRR",
      specs: "Per Visit",
      desc: "Comprehensive diagnostic check, panel cleaning, and battery health calibration.",
      image: "https://images.unsplash.com/photo-1558444479-c8482933074c?q=80&w=2574&auto=format&fit=crop",
      type: "Service"
    },
    {
      id: 'smart-hub',
      name: "Smart Monitor Hub",
      price: "12,000 BIRR",
      specs: "Cloud Integrated",
      desc: "AI-driven power management dashboard. Track consumption and health from your phone.",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2701&auto=format&fit=crop",
      type: "Accessory"
    }
  ];

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="catalog" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-4">Inventory & Services</h2>
            <h3 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
              Select Your <br /><span className="text-slate-300">Power.</span>
            </h3>
          </div>
          {selectedIds.length > 0 && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-amber-400 p-6 border-4 border-slate-900 rounded-3xl flex items-center gap-6 shadow-[10px_10px_0px_#0f172a]"
            >
              <div className="text-slate-900 font-black uppercase tracking-tighter">
                <div className="text-2xl leading-none">{selectedIds.length} ITEMS</div>
                <div className="text-xs">READY FOR DEPLOYMENT</div>
              </div>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-slate-900 transition-all">
                Proceed <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => {
            const isSelected = selectedIds.includes(p.id);
            return (
              <motion.div
                key={p.id}
                whileHover={{ 
                  scale: 1.02,
                  rotateZ: [0, -1, 1, -1, 0],
                  y: -10 
                }}
                transition={{ 
                  rotateZ: { duration: 0.4, ease: "easeInOut" },
                  type: "spring", stiffness: 300, damping: 15
                }}
                className={`relative border-4 border-slate-900 rounded-[2.5rem] overflow-hidden flex flex-col transition-all bg-white ${isSelected ? 'ring-8 ring-amber-400/20' : ''}`}
              >
                <div className="relative aspect-square overflow-hidden group">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isSelected ? 'scale-110 brightness-75' : 'group-hover:scale-110 grayscale group-hover:grayscale-0'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">
                      {p.type}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center bg-amber-400/20 backdrop-blur-[2px]">
                       <div className="bg-amber-400 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center border-4 border-slate-900 scale-125">
                          <CheckCircle size={32} strokeWidth={3} />
                       </div>
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-2xl font-black uppercase tracking-tighter italic leading-none mb-2">{p.name}</h4>
                    <div className="flex items-center gap-2 text-amber-500">
                      <Battery size={14} strokeWidth={3} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{p.specs}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10">
                    {p.desc}
                  </p>

                  <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Pricing</div>
                      <div className="text-xl font-black text-slate-900 italic tracking-tighter">{p.price}</div>
                    </div>
                    <button 
                      onClick={() => toggleSelection(p.id)}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 border-slate-900 transition-all ${isSelected ? 'bg-amber-400 text-slate-900 shadow-none' : 'bg-white hover:bg-slate-900 hover:text-white'}`}
                    >
                      {isSelected ? <CheckCircle size={20} strokeWidth={3} /> : <Zap size={20} />}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
