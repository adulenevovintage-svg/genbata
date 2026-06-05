import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [solution, setSolution] = useState('Sales');
  const [powerNeeds, setPowerNeeds] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      return;
    }

    const emailTo = 'lenevovintage@gmail.com';
    const subject = encodeURIComponent(`[GENBATA Mission] Inquiry: ${solution} from ${name}`);
    const body = encodeURIComponent(
      `GENBATA INDUSTRIAL INQUIRY REPORT\n` +
      `=========================================\n\n` +
      `• Client Name: ${name}\n` +
      `• Contact Email: ${email}\n` +
      `• Required Solution Mode: ${solution}\n\n` +
      `POWER SYSTEM DETAILS / COORDINATES:\n` +
      `-----------------------------------------\n` +
      `${powerNeeds || 'No details specified.'}\n` +
      `-----------------------------------------\n\n` +
      `Generated via Genbata Solar Supremacy Portal.`
    );

    // Redirect to the mailto client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    
    // Auto-reset submission state after some seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 8000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-0 border-4 border-slate-900 rounded-[3rem] overflow-hidden bg-white shadow-[20px_20px_0px_#cbc5e1]">
          
          {/* Left panel */}
          <div className="lg:col-span-5 bg-slate-900 p-16 text-white flex flex-col justify-between">
            <div>
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
            </div>

            <div className="mt-20 pt-12 border-t border-slate-800 flex gap-8">
              {['LN', 'TW', 'IG'].map(s => (
                <span key={s} className="text-sm font-black text-slate-500 hover:text-amber-400 transition-colors cursor-pointer italic">/{s}</span>
              ))}
            </div>
          </div>

          {/* Form panel */}
          <div className="lg:col-span-7 p-16 lg:p-24 relative">
            {isSubmitted ? (
              // Success feedback frame
              <div className="absolute inset-0 bg-white p-16 lg:p-24 flex flex-col justify-center items-center text-center z-10 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-8 border-2 border-green-500">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4 italic">
                  Mission Transmitted
                </h4>
                <p className="text-slate-600 text-lg max-w-md font-bold leading-snug mb-2">
                  Coordinates sent directly to <span className="text-amber-500">lenevovintage@gmail.com</span>.
                </p>
                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                  Your mail client has been opened to finalize delivery. Our engineering core will monitor transmission and draft response parameters shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Submit Another Report
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Identity</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-4 outline-none focus:border-slate-900 transition-all font-black uppercase tracking-tighter text-xl placeholder:text-slate-300 text-slate-900"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Communication</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b-2 border-slate-200 px-0 py-4 outline-none focus:border-slate-900 transition-all font-black uppercase tracking-tighter text-xl placeholder:text-slate-300 text-slate-900"
                  />
                </div>
              </div>

              {/* Dynamic Solution Selector */}
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Solution Required</label>
                <div className="flex flex-wrap gap-3">
                  {['Sales', 'Install', 'Maintain', 'Upgrade'].map(type => {
                    const isActive = solution === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSolution(type)}
                        className={`px-8 py-3 rounded-full border-2 text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-amber-405 bg-amber-400 border-slate-900 text-slate-900 shadow-[4px_4px_0px_#000]' 
                            : 'border-slate-200 text-slate-600 hover:border-slate-900 hover:text-slate-900'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 pt-6">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 italic">Mission Details</label>
                <textarea
                  rows={4}
                  value={powerNeeds}
                  onChange={(e) => setPowerNeeds(e.target.value)}
                  placeholder="OUTLINE YOUR DETAILED POWER CAPACITY REQUIREMENTS OR LOAD PROFILE"
                  className="w-full bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 outline-none focus:ring-4 focus:ring-amber-400/20 transition-all font-black uppercase tracking-tighter text-lg placeholder:text-slate-300 text-slate-900 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-8 rounded-full text-2xl font-black uppercase tracking-tighter italic group flex items-center justify-center gap-4 hover:bg-amber-400 hover:text-slate-900 transition-all cursor-pointer shadow-[8px_8px_0px_rgba(0,0,0,0.15)]"
              >
                Submit Mission <Send size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
