import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a standard industrial installation take?",
      answer: "A typical medium-scale industrial setup takes between 2 to 4 weeks from site audit to final commissioning. This includes structural reinforcement planning and grid synchronization testing."
    },
    {
      question: "What are the primary maintenance requirements?",
      answer: "We recommend quarterly surface cleaning and bi-annual software diagnostic checks. Our maintenance contracts cover all hardware inspections, inverter calibrations, and battery health reports automatically."
    },
    {
      question: "Can I upgrade my battery capacity later?",
      answer: "Yes. Our systems are built on a modular 'Stack-and-Go' architecture. You can expand your battery storage units at any time without needing to replace core inverter infrastructure."
    },
    {
      question: "What is the typical Return on Investment (ROI)?",
      answer: "Most commercial clients see a full investment recapture within 4 to 6 years through energy savings and government tax incentives, depending on local energy tariffs and usage patterns."
    },
    {
      question: "Does GENBATA handle government incentive paperwork?",
      answer: "Absolutely. Our legal and administrative team handles all local and federal grant applications, tax credit filings, and utility interconnect agreements for you."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-t-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-6 underline decoration-2 underline-offset-8">Information Center</h2>
            <h3 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8 italic">
              Frequently <br /> <span className="text-slate-300">Asked</span> <br /> Questions.
            </h3>
            <div className="p-8 bg-slate-900 rounded-2xl text-white border-b-8 border-amber-400">
              <div className="flex items-center gap-4 mb-4">
                <HelpCircle className="text-amber-400" size={32} />
                <span className="text-xl font-black uppercase italic tracking-tighter">Need more help?</span>
              </div>
              <p className="text-slate-400 font-medium mb-6">Our energy architects are available for a 1-on-1 consultation to discuss your specific infrastructure needs.</p>
              <button className="text-amber-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">Contact Engineering →</button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div 
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className={`cursor-pointer p-8 border-2 border-slate-900 rounded-2xl transition-all ${activeIndex === i ? 'bg-white shadow-[10px_10px_0px_#0f172a]' : 'bg-transparent hover:bg-slate-100'}`}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h4 className="text-xl font-black uppercase tracking-tighter italic">
                      {faq.question}
                    </h4>
                    <div className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-45' : ''}`}>
                       <Plus size={24} className={activeIndex === i ? 'text-amber-500' : 'text-slate-900'} />
                    </div>
                  </div>
                  
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-6 text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-6 italic">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
