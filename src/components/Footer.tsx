import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-32 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-slate-900">
                <Sun size={24} strokeWidth={3} />
              </div>
              <span className="text-4xl font-black tracking-tighter uppercase italic">GENBATA</span>
            </div>
            <p className="text-slate-400 text-xl max-w-sm font-medium leading-relaxed italic opacity-80">
              Transforming solar potential into industrial reality. Always-on energy ecosystems designed, installed, and maintained by elite engineers.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black italic tracking-[0.4em] text-amber-400 mb-10">CORE</h4>
            <ul className="space-y-6 text-xl font-black uppercase tracking-tighter italic">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Fleet</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-black italic tracking-[0.4em] text-amber-400 mb-10">LEGAL</h4>
            <ul className="space-y-6 text-xl font-black uppercase tracking-tighter italic">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Security</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <div className="bg-amber-400 p-8 rounded-3xl text-slate-900 box-shadow-[10px_10px_0px_white]">
                <h5 className="text-[10px] font-black uppercase tracking-widest mb-4">Transmission</h5>
                <p className="font-black uppercase tracking-tighter text-lg leading-none">JOIN THE GRID FOR ENERGY UPDATES.</p>
                <div className="mt-8 relative">
                   <input type="text" placeholder="IDENTITY@DOMAIN" className="w-full bg-slate-900/10 border-b-2 border-slate-900 px-0 py-3 text-xs font-black uppercase outline-none placeholder:text-slate-900/30" />
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">© 2026 GENBATA / ENERGY SUPREMACY</p>
          <div className="flex gap-10">
            {['FB', 'TW', 'IG', 'LI'].map(s => <span key={s} className="text-[10px] font-black text-slate-500 hover:text-amber-400 transition-all cursor-pointer">/{s}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
