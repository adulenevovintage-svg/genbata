import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-0 border-4 border-slate-900 rounded-[3rem] overflow-hidden bg-white shadow-[20px_20px_0px_#cbd5e1]">
          <div className="lg:col-span-5 bg-slate-900 p-16 text-white">
            <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-12">
              Ready For<br /><span className="text-amber-400">Autonomy?</span>
            </h3>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 italic">Electronic Mail</div>
                  <div className="text-xl font-black uppercase tracking-tighter italic">hello@genbata.solar</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border-2 border-amber-400 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 italic">Voice Line</div>
                  <div className="text-xl font-black uppercase tracking-tighter italic">1-800-SUN-GEN</div>
                </div>
              </div>
            </div>

            <div className="mt-32 pt-12 border-t border-slate-800 flex gap-8">
              {['LN', 'TW', 'IG'].map(s => (
                <span key={s} className="text-sm font-black text-slate-500 hover:text-amber-400 transition-colors cursor-pointer italic">/{s}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 p-16 lg:p-24">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Identity</label>
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-4 outline-none focus:border-slate-900 transition-all font-black uppercase tracking-tighter text-xl placeholder:text-slate-200"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Communication</label>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-4 outline-none focus:border-slate-900 transition-all font-black uppercase tracking-tighter text-xl placeholder:text-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Solution Required</label>
                <div className="flex flex-wrap gap-3">
                  {['Sales', 'Install', 'Maintain', 'Upgrade'].map(type => (
                    <button
                      key={type}
                      type="button"
                      className="px-8 py-3 rounded-full border-2 border-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all active:scale-95"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Mission Details</label>
                <textarea
                  rows={4}
                  placeholder="POWER NEEDS"
                  className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 outline-none focus:ring-4 focus:ring-amber-400/20 transition-all font-black uppercase tracking-tighter text-lg placeholder:text-slate-200 resize-none"
                />
              </div>

              <button className="w-full bg-slate-900 text-white py-8 rounded-full text-2xl font-black uppercase tracking-tighter italic group flex items-center justify-center gap-4 hover:bg-amber-400 hover:text-slate-900 transition-all">
                Submit Mission <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
