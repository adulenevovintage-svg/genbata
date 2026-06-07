import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'am' | 'om' | 'ti' | 'fr' | 'la';
export type Theme = 'light' | 'dark';

export interface TranslationDict {
  // Navbar
  nav_products: string;
  nav_services: string;
  nav_portfolio: string;
  nav_location: string;
  btn_quote: string;
  btn_started: string;
  
  // Hero
  system_online: string;
  hero_title_1: string;
  hero_title_2: string;
  hero_tag: string;
  hero_autonomy: string;
  always_on: string;
  reliable: string;
  industrial: string;
  sustainable: string;
  
  // Services
  services_sub: string;
  services_title_1: string;
  services_title_2: string;
  services_desc: string;
  service_1_title: string;
  service_1_desc: string;
  service_2_title: string;
  service_2_desc: string;
  service_3_title: string;
  service_3_desc: string;
  explore_solution: string;

  // Catalog
  catalog_sub: string;
  catalog_title: string;
  catalog_desc: string;
  buy_now: string;
  included: string;
  battery_cap: string;
  inverter_size: string;
  warranty: string;
  
  // Why Us
  why_sub: string;
  why_title_1: string;
  why_title_2: string;
  why_desc: string;
  metric_1_val: string;
  metric_1_lbl: string;
  metric_2_val: string;
  metric_2_lbl: string;
  metric_3_val: string;
  metric_3_lbl: string;

  // Contact
  ready_question: string;
  ready_sub: string;
  contact_identity: string;
  contact_communication: string;
  contact_solution: string;
  contact_mission: string;
  contact_submit: string;
  contact_success_title: string;
  contact_success_text: string;
  contact_success_subtext: string;
}

const translations: Record<Language, TranslationDict> = {
  en: {
    nav_products: "Products",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_location: "Location",
    btn_quote: "Get Quote",
    btn_started: "Get Started",
    system_online: "System.Status // Online",
    hero_title_1: "Powering",
    hero_title_2: "Futures.",
    hero_tag: "Engineering the apex of autonomous energy. GENBATA builds industrial-scale resilience into every watt.",
    hero_autonomy: "ABREN ENGEBA",
    always_on: "Always-On",
    reliable: "Reliable",
    industrial: "Industrial",
    sustainable: "Sustainable",
    services_sub: "Our Services",
    services_title_1: "Integrated",
    services_title_2: "Energy Hub.",
    services_desc: "From industrial engineering to residential battery backups, we provide the full stack of solar technology.",
    service_1_title: "Premium Sales",
    service_1_desc: "Top-tier solar-powered generators from leading global manufacturers, tailored to your capacity needs.",
    service_2_title: "Precision Installation",
    service_2_desc: "Expert engineering teams ensure your system is mounted, wired, and optimized for maximum sun exposure.",
    service_3_title: "Lifetime Maintenance",
    service_3_desc: "Regular checkups and 24/7 emergency support to keep your power flowing without interruptions.",
    explore_solution: "Explore Solution",
    catalog_sub: "Product Catalog",
    catalog_title: "Heavy Solar Ammunition.",
    catalog_desc: "Engineered specifically to endure persistent grid constraints with clean, absolute power delivery.",
    buy_now: "Order Generator",
    included: "Included Architecture",
    battery_cap: "Battery Capacity",
    inverter_size: "Inverter Output",
    warranty: "Full Warranty",
    why_sub: "Why GENBATA",
    why_title_1: "Power",
    why_title_2: "Without Apology.",
    why_desc: "We combine aerospace-grade microcontrollers with high-density iron-phosphate batteries to render blackouts completely obsolete.",
    metric_1_val: "4.2GW",
    metric_1_lbl: "Total Activated",
    metric_2_val: "12 Min",
    metric_2_lbl: "Rapid Deploy Limit",
    metric_3_val: "99.9%",
    metric_3_lbl: "System Autonomies",
    ready_question: "Ready For",
    ready_sub: "Autonomy?",
    contact_identity: "Identity",
    contact_communication: "Communication",
    contact_solution: "Solution Required",
    contact_mission: "Mission Details",
    contact_submit: "Submit Mission",
    contact_success_title: "Mission Transmitted",
    contact_success_text: "Coordinates sent directly to",
    contact_success_subtext: "Your mail client has been opened to finalize delivery. Our engineering core will monitor transmission.",
  },
  am: {
    nav_products: "ምርቶች",
    nav_services: "አገልግሎቶች",
    nav_portfolio: "ስራዎች",
    nav_location: "አድራሻ",
    btn_quote: "ዋጋ ይጠይቁ",
    btn_started: "ይጀምሩ",
    system_online: "የስርዓት ሁኔታ // ንቁ",
    hero_title_1: "የወደፊቱን",
    hero_title_2: "ማብራት።",
    hero_tag: "የራሱን የቻለ የኃይል ማመንጫ ምህንድስና። ጄንባታ በሁሉም ዋት ላይ የኢንዱስትሪ ደረጃ ጥንካሬን ይገነባል።",
    hero_autonomy: "አብረን እንገንባ",
    always_on: "ማያቋርጥ",
    reliable: "አስተማማኝ",
    industrial: "የኢንዱስትሪ",
    sustainable: "ዘላቂ",
    services_sub: "አገልግሎቶቻችን",
    services_title_1: "የተቀናጀ",
    services_title_2: "የኃይል ማዕከል።",
    services_desc: "ከኢንዱስትሪ ምህንድስና እስከ መኖሪያ ቤት የባትሪ መጠባበቂያዎች፣ ሙሉውን የሶላር ቴክኖሎጂ እናቀርባለን።",
    service_1_title: "ዋና ሽያጭ",
    service_1_desc: "ከታዋቂ ዓረፍተ-አምራቾች የተዘጋጁ ከፍተኛ ደረጃ ያላቸው የፀሐይ ኃይል ማመንጫዎች።",
    service_2_title: "ትክክለኛ ተከላ",
    service_2_desc: "ቴክኒሻኖቻችን ስርዓትዎ ለከፍተኛ የፀሐይ ብርሃን ተጋላጭነት እንዲስማማ ያረጋግጣሉ።",
    service_3_title: "የዕድሜ ልክ ጥገና",
    service_3_desc: "የኃይል ፍሰትዎ ያለ መቆራረጥ እንዲቀጥል መደበኛ ፍተሻ እና የ 24/7 ድጋፍ መስጠት።",
    explore_solution: "መፍትሄን ይመርምሩ",
    catalog_sub: "የምርት ካታሎግ",
    catalog_title: "ከባድ የፀሐይ መሣሪያዎች።",
    catalog_desc: "የኃይል መቆራረጥን ለመቋቋም የተነደፉ ንጹህ እና ፍጹም የኃይል አቅርቦቶች።",
    buy_now: "ጀነሬተር እዘዝ",
    included: "የተካተቱ መዋቅሮች",
    battery_cap: "የባትሪ አቅም",
    inverter_size: "የኢንቨርተር ውፅዓት",
    warranty: "ሙሉ ዋስትና",
    why_sub: "ለምን ጄንባታ",
    why_title_1: "ያለይቅርታ",
    why_title_2: "ማብራት።",
    why_desc: "የኃይል መቆራረጥን ሙሉ በሙሉ ጊዜ ያለፈበት ለማድረግ የላቁ ቁጥጥሮችን እና ከፍተኛ ጥንካሬ ያላቸውን ባትሪዎች እናቀናጃለን።",
    metric_1_val: "4.2 ጂ.ዋ",
    metric_1_lbl: "አጠቃላይ የነቃ ኃይል",
    metric_2_val: "12 ደቂቃ",
    metric_2_lbl: "ለማንቀሳቀስ የሚወስድ ደቂቃ",
    metric_3_val: "99.9%",
    metric_3_lbl: "የስርዓት አስተማማኝነት",
    ready_question: "ለራሳችሁ",
    ready_sub: "የኃይል ነፃነት?",
    contact_identity: "ማንነት",
    contact_communication: "ግንኙነት",
    contact_solution: "የሚፈለግ አማራጭ",
    contact_mission: "የተልዕኮ ዝርዝሮች",
    contact_submit: "ተልዕኮ አስገባ",
    contact_success_title: "የተላከ ተልዕኮ",
    contact_success_text: "መረጃው በቀጥታ ተልኳል ወደ",
    contact_success_subtext: "መልዕክቱ እንዲላክ የኢሜል መተግበሪያዎ ተከፍቷል። ምህንድስና ቡድናችን ክትትል ያደርጋል።",
  },
  om: {
    nav_products: "Meeshaalee",
    nav_services: "Tajaajiloota",
    nav_portfolio: "Portfolio",
    nav_location: "Argama",
    btn_quote: "Gatii Gaafadhu",
    btn_started: "Jalqabi",
    system_online: "Haala Sirnaa // Banamaa",
    hero_title_1: "Fuuldura",
    hero_title_2: "Ibsuu.",
    hero_tag: "Humna of danda'e uumuu. GENBATA humna dandeettii industirii guutuu nuffii malee siif fida.",
    hero_autonomy: "ABREN ENGEBA",
    always_on: "Yeroo-Hundaa",
    reliable: "Amanamaa",
    industrial: "Industirii",
    sustainable: "Itti-fufiinsa",
    services_sub: "Tajaajila Keenya",
    services_title_1: "Iddoo",
    services_title_2: "Humna Waliigalaa.",
    services_desc: "Diizaayini industiriirraa jalqabee hanga kuusaa baatiriitti, tajaajila teknoolojii aduu guutuu ni dhiyeessina.",
    service_1_title: "Gurgurtaa Olaanaa",
    service_1_desc: "Jenereetaroota aduu kan addunyaarratti bebbeekamoo ta'an fedhii keessaniif ta'u.",
    service_2_title: "Dhaabbii Sirrii",
    service_2_desc: "Injineroonni keenya sirni keessan aduu guutuu akka argatutti dhaabu.",
    service_3_title: "Suphaa Bara Hunda",
    service_3_desc: "Humni keessan addaan akka hin cinneef to'annoo fi deeggarsa yeroo hunda ni kennina.",
    explore_solution: "Furmaata Ilaali",
    catalog_sub: "Kaataaloogii Meeshaa",
    catalog_title: "Meeshaalee Aduu Jajjaboo.",
    catalog_desc: "Rakkoo dhiyeessii humnaa hiikuuf kan qophaaye, humna qulqulluu argachuuf.",
    buy_now: "Jenereetara Ajaji",
    included: "Dizayinii Keessaa",
    battery_cap: "Dandeettii Baatirii",
    inverter_size: "Gurgurtaa Inverter",
    warranty: "Wabi Guutuu",
    why_sub: "Maaliif GENBATA",
    why_title_1: "Humna",
    why_title_2: "Gabaasa Malee.",
    why_desc: "Teknoolojii baatirii ammayyaa wajjin hordofnee dukkanoota guutummaatti maqsina.",
    metric_1_val: "4.2GW",
    metric_1_lbl: "Waliigala Humnaa",
    metric_2_val: "Daq 12",
    metric_2_lbl: "Saffisa Banuuf",
    metric_3_val: "99.9%",
    metric_3_lbl: "Of-Danda'uu Sirnaa",
    ready_question: "Of dandeettii",
    ready_sub: "Humnaaf Qophiidhaa?",
    contact_identity: "Eenyummaa",
    contact_communication: "Quunnamtii",
    contact_solution: "Tajaajila Fedhan",
    contact_mission: "Bal'ina Hojii",
    contact_submit: "Hojii Ergi",
    contact_success_title: "Ergamuun Mirkanaa'e",
    contact_success_text: "Ergamuun kallattiin gara",
    contact_success_subtext: "Waliigaltee xumuruuf email keessan banamee jira. Injineroonni keenya hojii jalqabu.",
  },
  ti: {
    nav_products: "ፍርያት",
    nav_services: "ኣገልግሎት",
    nav_portfolio: "ስራሕትና",
    nav_location: "ቦታ",
    btn_quote: "ዋጋ ሕተቱ",
    btn_started: "ጀምር",
    system_online: "ኩነታት ስርዓት // ዝተረጋገጸ",
    hero_title_1: "ፅባሕ",
    hero_title_2: "ንምብራህ።",
    hero_tag: "ናጻ ዝኾነ ናይ ጸሓይ ጸዓት ምህንድስና። ጄንባታ ንኹሉ ጸዓት ናይ ዓንዲ-ሕቆ ኢንዱስትሪ ይገብሮ።",
    hero_autonomy: "አብረን እንገንባ",
    always_on: "ኩሉ-ግዜ",
    reliable: "እሙን",
    industrial: "ኢንዱስትሪ",
    sustainable: "ቀጻሊ",
    services_sub: "ኣገልግሎትና",
    services_title_1: "ዝተዋሃደ",
    services_title_2: "ማእከል ጸዓት።",
    services_desc: "ካብ ከቢድ ምህንድስና ክሳብ ናይ ገዛ ባትሪ መዐቀቢ ጸዓት፣ ሙሉእ ፍታሕ ነቕርብ።",
    service_1_title: "ሉዑል መሸጣ",
    service_1_desc: "ብሉጻት ጀነሬተራት ጸሓይ ካብ ዓለምለኸ ኣፍረይቲ ንተጠቃሚ ዝኸውን።",
    service_2_title: "ትክክለኛ ተከላ",
    service_2_desc: "ኢንጂነራትና ንስርዓትኩም ሙሉእ ብርሃን ኣብ ዝረኽበሉ ቦታ ይሰርዕዎ።",
    service_3_title: "ናይ ዘላቂ ጥገና",
    service_3_desc: "ኩሉ ግዜ ዘይቋረጽ ብርሃን ንምርካብ ብቑዕ ምክትታልን ደገፍን።",
    explore_solution: "ፍታሕ መርምር",
    catalog_sub: "ካታሎግ ፍርያት",
    catalog_title: "ከበድቲ መሳርሒታት ጸሓይ።",
    catalog_desc: "ነቲ ዘጋጥም ናይ ጸዓት ምቁራጽ ንምክልኻል ዝተዳለወ ጽሩይ ጸዓት።",
    buy_now: "ጀነሬተር እዘዝ",
    included: "ዝተካተቱ መዋቕራት",
    battery_cap: "ዓቕሚ ባትሪ",
    inverter_size: "ውጽኢት ኢንቨርተር",
    warranty: "ሙሉእ ውሕስነት",
    why_sub: "ስለምንታይ ጄንባታ",
    why_title_1: "ጸዓት",
    why_title_2: "ብዘይ ፍርሃት።",
    why_desc: "ነቲ ጸልማት ንምጥፋእ ግቡእ ባትሪታትን ዘመናዊ መቆጻጸሪታትን ነተኣሳስር።",
    metric_1_val: "4.2GW",
    metric_1_lbl: "ዝነቐሐ ሓይሊ",
    metric_2_val: "12 ደቒቕ",
    metric_2_lbl: "ናይ ምልዓል ቕልጣፈ",
    metric_3_val: "99.9%",
    metric_3_lbl: "ናጽነት ስርዓት",
    ready_question: "ድሉው ዲኻ",
    ready_sub: "ንናጽነት ጸዓት?",
    contact_identity: "መንነት",
    contact_communication: "ርክብ",
    contact_solution: "ዘድሊ ኣገልግሎት",
    contact_mission: "ዝርዝር ተልእኾ",
    contact_submit: "ተልእኾ ስደድ",
    contact_success_title: "ተልእኾ ተሰዲዱ",
    contact_success_text: "እቲ ዝርዝር ብቐጥታ ናብዚ ተሰዲዱ ኣሎ",
    contact_success_subtext: "ኢሜልኩም ተኸፊቱ ኣሎ እቲ ተልእኾ ንምዝዛም፤ ኢንጂነራት ንጥፈታት ክከታተሉ እዮም።",
  },
  fr: {
    nav_products: "Produits",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_location: "Localisation",
    btn_quote: "Devis rapide",
    btn_started: "Commencer",
    system_online: "System.Status // En ligne",
    hero_title_1: "Propulser",
    hero_title_2: "l'avenir.",
    hero_tag: "Ingénierie de l'énergie autonome d'élite. GENBATA intègre une résilience industrielle dans chaque watt.",
    hero_autonomy: "ABREN ENGEBA",
    always_on: "En Continu",
    reliable: "Fiable",
    industrial: "Industriel",
    sustainable: "Durable",
    services_sub: "Nos Services",
    services_title_1: "Pôle",
    services_title_2: "Énergétique Intégré.",
    services_desc: "De l'ingénierie industrielle aux batteries de secours résidentielles, nous fournissons la gamme complète.",
    service_1_title: "Ventes Premium",
    service_1_desc: "Générateurs solaires de premier choix des leaders mondiaux, adaptés à votre profil de charge.",
    service_2_title: "Installation de Précision",
    service_2_desc: "Des équipes d'experts garantissent un montage et un câblage optimisés pour une captation solaire maximale.",
    service_3_title: "Maintenance à Vie",
    service_3_desc: "Contrôles réguliers et assistance d'urgence 24h/24 et 7j/7 pour un flux d'énergie sans coupure.",
    explore_solution: "Explorer la solution",
    catalog_sub: "Catalogue de Produits",
    catalog_title: "Solutions Énergétiques Lourdes.",
    catalog_desc: "Conçu spécifiquement pour résister aux pannes de réseau en fournissant une énergie brute et stable.",
    buy_now: "Commander",
    included: "Architecture Incluse",
    battery_cap: "Capacité Batterie",
    inverter_size: "Capacité Onduleur",
    warranty: "Garantie Totale",
    why_sub: "Pourquoi GENBATA",
    why_title_1: "L'Énergie",
    why_title_2: "Sans Compromis.",
    why_desc: "Nous combinons régulations de pointe et blocs batteries lithium-fer-phosphate pour reléguer les pannes au passé.",
    metric_1_val: "4.2GW",
    metric_1_lbl: "Puissance Activée",
    metric_2_val: "12 Min",
    metric_2_lbl: "Délai de Déploiement",
    metric_3_val: "99.9%",
    metric_3_lbl: "Autonomie Système",
    ready_question: "Prêt pour",
    ready_sub: "L'Autonomie?",
    contact_identity: "Identité",
    contact_communication: "Communication",
    contact_solution: "Solution Requise",
    contact_mission: "Détails de Mission",
    contact_submit: "Transmettre la Mission",
    contact_success_title: "Mission Transmise",
    contact_success_text: "Informations envoyées directement à",
    contact_success_subtext: "Votre client mail a été ouvert pour finaliser l'envoi. Notre équipe examinera les données.",
  },
  la: {
    nav_products: "Producta",
    nav_services: "Officia",
    nav_portfolio: "Opera",
    nav_location: "Locus",
    btn_quote: "Precium Petere",
    btn_started: "Incipere",
    system_online: "Status.Systematis // Activus",
    hero_title_1: "Futura",
    hero_title_2: "Accendere.",
    hero_tag: "Energetica autonoma summa. GENBATA in omni vatto robur industriale instruit.",
    hero_autonomy: "ABREN ENGEBA",
    always_on: "Semper-On",
    reliable: "Certus",
    industrial: "Industrialis",
    sustainable: "Sustentabilis",
    services_sub: "Officia Nostra",
    services_title_1: "Centrum",
    services_title_2: "Energeticum Integratum.",
    services_desc: "Ab arte mechanica ad batteries domesticas, omnem technologiam solarem praebemus.",
    service_1_title: "Venditio Primaria",
    service_1_desc: "Generatores solares summi a fabricatoribus mundi ad vires tuas aptati.",
    service_2_title: "Instructio Accurata",
    service_2_desc: "Ingetores periti curent ut systema tuum ad maximum solem dirigatur.",
    service_3_title: "Tutela Perpetua",
    service_3_desc: "Supportatio perpetua ut fluxus energiae sine ulla intermissione perseveret.",
    explore_solution: "Explorare Solutionem",
    catalog_sub: "Catalogus Productorum",
    catalog_title: "Armatura Solaris Gravis.",
    catalog_desc: "Factum praecipue ut sine defectu reipublicae energeticae puram potestatem feras.",
    buy_now: "Mandare Generatorem",
    included: "Architectura Inclusa",
    battery_cap: "Capacitas Accumulatoris",
    inverter_size: "Potentia Inversoris",
    warranty: "Plenum Cautum",
    why_sub: "Cur GENBATA",
    why_title_1: "Potestas",
    why_title_2: "Sine Ignoscentia.",
    why_desc: "Microgubernatores summos et batteries optimas coniungimus ut tenebrae perpetuo pellantur.",
    metric_1_val: "4.2GW",
    metric_1_lbl: "Totalis Energetica",
    metric_2_val: "12 Min",
    metric_2_lbl: "Tempus Celeritatis",
    metric_3_val: "99.9%",
    metric_3_lbl: "Systematis Autonomia",
    ready_question: "Paratus Esne",
    ready_sub: "Ad Libertatem?",
    contact_identity: "Nomen",
    contact_communication: "Epistula",
    contact_solution: "Officium Expetitum",
    contact_mission: "Mandati Singula",
    contact_submit: "Mittere Mandatum",
    contact_success_title: "Mandatum Transmissum",
    contact_success_text: "Coordinata transmissa sunt ad",
    contact_success_subtext: "Cursus electronicus tuus apertus est ut mitteret. Mechanici nostri respondere parant.",
  }
};

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: keyof TranslationDict) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('gb-lang');
    return (saved as Language) || 'en';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('gb-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    // system preference default
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'dark'; // Industrial epic style fits dark mode best, so we default to dark
  });

  useEffect(() => {
    localStorage.setItem('gb-lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('gb-theme', theme);
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = (key: keyof TranslationDict): string => {
    const dict = translations[language];
    return dict[key] || translations['en'][key] || String(key);
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
