import { motion } from 'motion/react';
import { HelpCircle, Plus } from 'lucide-react';
import { useState } from 'react';
import { useApp, Language } from '../context/AppContext';

interface FAQItem {
  question: string;
  answer: string;
}

const faqsTranslations: Record<Language, FAQItem[]> = {
  en: [
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
  ],
  am: [
    {
      question: "መደበኛ የኢንዱስትሪ ተከላ ምን ያህል ጊዜ ይወስዳል?",
      answer: "የተለመደው መካከለኛ ደረጃ ያለው የኢንዱስትሪ ዝግጅት ከጣቢያ ፍተሻ እስከ መጨረሻው ስራ ማስጀመር ከ2 እስከ 4 ሳምንታት ይወስዳል። ይህም የስርዓት ጥንካሬ እቅድ እና የኔትወርክ ማመሳሰል ሙከራን ያካትታል።"
    },
    {
      question: "ዋናዎቹ የጥገና መስፈርቶች ምንድናቸው?",
      answer: "በየሶስት ወሩ የገጽታ ማጽዳት እና በዓመት ሁለት ጊዜ የሶፍትዌር ምርመራዎችን እንመክራለን። የእኛ የጥገና ውል ሁሉንም የሃርድዌር ፍተሻዎችን፣ የኢንቨርተር ልኬቶችን እና የባትሪ ጤና ሪፖርቶችን በራስ-ሰር ይሸፍናል።"
    },
    {
      question: "በኋላ ላይ የባትሪ አቅሜን ማሻሻል እችላለሁ?",
      answer: "አዎ። የእኛ ስርዓቶች በተደራራቢ እና ሊሰፋ በሚችል የስነ-ህንጻ ግንባታ ላይ የተገነቡ ናቸው። ዋናውን የኢንቨርተር መዋቅር መተካት ሳያስፈልግዎት በማንኛውም ጊዜ የባትሪ ማከማቻ ክፍሎችዎን ማስፋት ይችላሉ።"
    },
    {
      question: "የተለመደው የኢንቨስትመንት ተመላሽ (ROI) ምንድነው?",
      answer: "አብዛኛዎቹ የንግድ ደንበኞች በአካባቢያቸው የኃይል ዋጋ እና አጠቃቀም ሁኔታ ላይ በመመስረት በ4 እና 6 ዓመታት ውስጥ ሙሉ የኢንቨስትመንት ተመላሽ ያያሉ።"
    },
    {
      question: "ጄንባታ የመንግስት ድጋፍ ወረቀቶችን ያከናውናል?",
      answer: "በፍጹም። የህግ እና የአስተዳደር ቡድናችን ሁሉንም የአገር ውስጥ እና የፌደራል የእርዳታ ማመልከቻዎችን፣ የግብር ብድር ፋይሎችን እና የመገልገያ ስምምነቶችን ለእርስዎ ያከናውናል።"
    }
  ],
  om: [
    {
      question: "Dhaabbichi jajjabaan yeroo hammamii fudhata?",
      answer: "Dhaabbanni giddu-galeessaa typikaala ta'e erga iddoon qoratamee jalqabee hanga xumuraatti torban 2 hanga 4 fudhata. Kunis karoorfamuu humnaa fi qorannoo sirna wal-simachuu gridii dabalata."
    },
    {
      question: "Ulaagaaleen suphaa ijoon maali?",
      answer: "Qulqullina gubbaa ji'aan sadii fi to'annoo sooftiweerii waggaatti dila lama akka gootan gorsina. Kontraatni suphaa keenyaa to'annoo hardware, sirreessuu inverter fi gabaasa fayyaa baatirii hunda ni hammata."
    },
    {
      question: "Booda dandeettii baatirii koo dabaluu nan danda'aa?",
      answer: "Eeyyee. Sirnoonni keenya bu'uura modular 'Stack-and-Go' irratti ijaaraman. Inverter bu'uuraa osoo hin jijjiriin yeroo barbaaddanitti baatirii dabalataa qunnamsiisuu dandeessu."
    },
    {
      question: "Deebiin maallaqaa (ROI) yeroo hammamii gidduutti argama?",
      answer: "Mamiltoonni daldalaa hedduun waggaa 4 hanga 6 gidduutti maallaqa invesit gochanii deebisanii argatu, kunis gatii humna naannoo fi haala fayyadamaarratti hundaa'a."
    },
    {
      question: "GENBATAn waraqaa eeyyama mootummaa ni hojjataa?",
      answer: "Gutummaatti. Gareen keenya seeraa fi bulchiinsaa gaaffii pirograamii, kireeditii canfaa fi waliigalteewan waliiggalaa hunda isiniif raawwata."
    }
  ],
  ti: [
    {
      question: "መደበኛ የኢንዱስትሪ ተከላ ክንደይ ግዜ ይወስድ?",
      answer: "ልሙድ ማእከላይ ደረጃ ዘለዎ ናይ ኢንዱስትሪ ተከላ ካብ ፍተሻ ቦታ ጀሚሩ ክሳብ ስራሕ ምጅማር ካብ 2 ክሳብ 4 ሳምንታት ይወስድ። እዚ ድማ ትልሚ ጥንካሬ ስርዓትን ፈተነ ምስግጋር ጸዓትን የጠቓልል::"
    },
    {
      question: "ቀንዲ ጠለብ ክንክን ጸዓት እንታይ እዩ?",
      answer: "ኣብ ሰለስተ ወርሒ ሓንሳብ ምጽራይን ኣብ ዓመት ክልተ ግዜ ናይ ሶፍትዌር ፍተሻን ክግበር ንመክር። ውዕል ምክትታልና ኩሉ ፍተሻ ሃርድዌር፣ ኢንቨርተርን ጸብጻብ ባትሪን ዘጠቓልል እዩ::"
    },
    {
      question: "ደሓር ዓቕሚ ባትሪይ ክውስኽ ይኽእል ድየ?",
      answer: "እወ። ስርዓታትና ብሞዱላር 'Stack-and-Go' እዩ ተሃኒጹ። ዋና መዋቕር ኢንቨርተር ምስራዝ ከየድለየኩም ኣብ ዝደለኹምዎ ግዜ ባትሪታትኩም ከተስፍሑ ትኽእሉ ኢኹም::"
    },
    {
      question: "ልሙድ ናይ ወፍሪ መመለሲ ግዜ (ROI) ክንደይ እዩ?",
      answer: "መብዛሕትኦም ዓማዊል ንግዲ ኣብ ከባቢኦም ዘሎ ዋጋ ጸዓትን ኣጠቓቕማን መሰረት ብምግባር ኣብ ውሽጢ 4 ክሳብ 6 ዓማዊል ሙሉእ መመለሲ ወፍሪ ይረኽቡ::"
    },
    {
      question: "ጄንባታ ናይ መንግስቲ ደገፍ ፎርማሊቲ የሳልጥ ድዩ?",
      answer: "ብርግጽ። ናይ ሕግን ምሕደራን ጉጅለና ኩሉ ናይ ከባቢን ፌደራልን ናይ ሓገዝ ሕቶታትን መመዝገቢ ግብርን ንዓኹም የሳልጠልኩም::"
    }
  ],
  fr: [
    {
      question: "Combien de temps prend une installation industrielle standard ?",
      answer: "Une configuration industrielle typique de moyenne envergure prend entre 2 et 4 semaines, de l'audit initial à la mise en service finale. Cela comprend la planification des renforts structurels et les tests de synchronisation réseau."
    },
    {
      question: "Quelles sont les principales exigences d'entretien ?",
      answer: "Nous recommandons un nettoyage de surface trimestriel et des diagnostics logiciels semestriels. Nos contrats de maintenance couvrent automatiquement l'inspection du matériel, l'étalonnage de l'onduleur et les rapports de santé des batteries."
    },
    {
      question: "Puis-je augmenter la capacité de ma batterie plus tard ?",
      answer: "Oui. Nos systèmes reposent sur une architecture modulaire 'Stack-and-Go'. Vous pouvez ajouter des unités de stockage à tout moment sans modifier l'onduleur central."
    },
    {
      question: "Quel est le retour sur investissement (ROI) typique ?",
      answer: "La plupart de nos clients professionnels récupèrent l'intégralité de leur investissement en 4 à 6 ans grâce aux économies d'énergie et aux incitations fiscales locales."
    },
    {
      question: "GENBATA gère-t-il les démarches de subventions gouvernementales ?",
      answer: "Absolument. Notre équipe juridique et administrative gère pour vous toutes les demandes d'aides locales et fédérales, les crédits d'impôt et de raccordement."
    }
  ],
  la: [
    {
      question: "Quantum temporis capit structura industrialis?",
      answer: "Aetate usitata intra duas vel quattuor septimanas ab auditu ad commissionem finalem durat, instructionem firmitatis et probationem synchronisationis comprehendens."
    },
    {
      question: "Quae sunt praecipua criteria tutelae?",
      answer: "Quaterno quoque anno emundationem et bis in anno probationem programmationis commendamus. Contractus noster omnes inspectiones et valetudinem accumulatoris ipse curat."
    },
    {
      question: "Possumne capacitatem accumulatoris postea augere?",
      answer: "Etiam. Systemata nostra in structura modularis 'Stack-and-Go' aedificantur. Quolibet tempore cellulas augere potes sine mutatione inversoris principalis."
    },
    {
      question: "Quod est tempus recipiendi pecuniam (ROI)?",
      answer: "Plerique negotiatores intra quattuor vel sex annos omnem pecuniam recipiunt per compendia energiae et beneficia publica tributaria."
    },
    {
      question: "Num GENBATA documenta publica administrat?",
      answer: "Certe. Legati et administratores nostri omnes petitiones auxiliorum publicorum, tributa, et pactiones pro te conficiunt."
    }
  ]
};

const labels: Record<Language, { section: string; title1: string; title2: string; title3: string; help_title: string; help_text: string; help_btn: string }> = {
  en: {
    section: "Information Center",
    title1: "Frequently",
    title2: "Asked",
    title3: "Questions.",
    help_title: "Need more help?",
    help_text: "Our energy architects are available for a 1-on-1 consultation to discuss your specific infrastructure needs.",
    help_btn: "Contact Engineering →"
  },
  am: {
    section: "የመረጃ ማዕከል",
    title1: "ተደጋግመው",
    title2: "የሚጠየቁ",
    title3: "ጥያቄዎች።",
    help_title: "ተጨማሪ እርዳታ ይፈልጋሉ?",
    help_text: "ልዩ የመሠረተ ልማት ፍላጎቶችዎን ለመወያየት የእኛ የኃይል ባለሙያዎች ለአንድ ለአንድ ምክክር ዝግጁ ናቸው።",
    help_btn: "ምህንድስናን ያግኙ →"
  },
  om: {
    section: "Giddu-galeessa odeeffannoo",
    title1: "Gaffilee",
    title2: "Yeroo",
    title3: "Hedduu Gaffataman.",
    help_title: "Gargaarsa Dabalataa Barbaadduu?",
    help_text: "Injineroonni keenya fedhii humnaa keessan irratti isiniin mari'achuuf qophiidha.",
    help_btn: "Quunnamtii Injineringii →"
  },
  ti: {
    section: "ማእከል ሓበሬታ",
    title1: "ተደጋጋሚ",
    title2: "ሕቶታትና",
    title3: "መልስታትን።",
    help_title: "ተወሳኺ ሓገዝ የድልየኩም ድዩ?",
    help_text: "ናይ ምህንድስና ክኢላታትና ንፍሉይ ተጠቃሚነቶም ንምይይጥ ድሉዋት እዮም።",
    help_btn: "ምህንድስና ርከቡ →"
  },
  fr: {
    section: "Centre d'information",
    title1: "Foire",
    title2: "Aux",
    title3: "Questions.",
    help_title: "Besoin d'aide ?",
    help_text: "Nos architectes énergétiques sont disponibles pour une consultation personnalisée afin d'analyser vos besoins.",
    help_btn: "Contacter l'Ingénierie →"
  },
  la: {
    section: "Centrum Informationis",
    title1: "Saepe",
    title2: "Quasita",
    title3: "Responsa.",
    help_title: "Auxilium Quaeris?",
    help_text: "Architecti nostri praesto sunt ut necessitates tuas in personam collocent.",
    help_btn: "Ingetores Quaerere →"
  }
};

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useApp();

  const faqs = faqsTranslations[language] || faqsTranslations['en'];
  const l = labels[language] || labels['en'];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 border-t-2 border-slate-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-black text-amber-500 uppercase tracking-[0.4em] mb-6 underline decoration-2 underline-offset-8">
              {l.section}
            </h2>
            <h3 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8 italic text-slate-900 dark:text-white">
              {l.title1} <br /> <span className="text-slate-300 dark:text-slate-700">{l.title2}</span> <br /> {l.title3}
            </h3>
            <div className="p-8 bg-slate-900 dark:bg-slate-900 rounded-2xl text-white border-b-8 border-amber-400">
              <div className="flex items-center gap-4 mb-4">
                <HelpCircle className="text-amber-400" size={32} />
                <span className="text-xl font-black uppercase italic tracking-tighter">
                  {l.help_title}
                </span>
              </div>
              <p className="text-slate-400 font-medium mb-6">
                {l.help_text}
              </p>
              <button 
                onClick={handleScrollToContact}
                className="text-amber-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors cursor-pointer"
              >
                {l.help_btn}
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {faqs.map((faq, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div 
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className={`cursor-pointer p-8 rounded-2xl transition-all border-2 ${
                      isActive 
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-900 dark:border-amber-400 shadow-[10px_10px_0px_#0f172a] dark:shadow-[10px_10px_0px_#fbbf24]' 
                        : 'bg-transparent border-slate-200 dark:border-slate-850 hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center gap-4">
                      <h4 className="text-xl font-black uppercase tracking-tighter italic">
                        {faq.question}
                      </h4>
                      <div className={`transition-transform duration-300 ${isActive ? 'rotate-45' : ''}`}>
                         <Plus size={24} className={isActive ? 'text-amber-500' : 'text-slate-900 dark:text-white'} />
                      </div>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-6 text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-6 italic">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
