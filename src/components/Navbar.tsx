import { motion } from 'motion/react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { useApp, Language } from '../context/AppContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useApp();

  const navLinks = [
    { name: t('nav_products'), href: '#catalog' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_portfolio'), href: '#portfolio' },
    { name: t('nav_location'), href: '#location' },
  ];

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'am', label: 'አማርኛ', flag: '🇪🇹' },
    { code: 'om', label: 'Afaan Oromoo', flag: '🇪🇹' },
    { code: 'ti', label: 'ትግርኛ', flag: '🇪🇹' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'la', label: 'Latina', flag: '🏛️' },
  ];

  const handleScrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3 group">
            <Logo size={40} className="text-slate-900 dark:text-amber-400" />
            <span className="text-2xl font-black tracking-tighter uppercase text-slate-900 dark:text-white italic group-hover:text-amber-500 transition-colors">GENBATA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:border-amber-400 transition-all cursor-pointer"
              >
                <Globe size={14} className="text-amber-400" />
                <span>{languagesList.find(l => l.code === language)?.code}</span>
              </button>

              {showLangDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden py-1 z-50">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                        language === lang.code
                          ? 'bg-amber-400/10 text-amber-500 dark:text-amber-300 font-bold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {language === lang.code && <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-amber-400 transition-all cursor-pointer"
              title="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400 animate-pulse" />
              ) : (
                <Moon size={15} className="text-indigo-600" />
              )}
            </button>

            <button 
              onClick={handleScrollToCatalog}
              className="bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400 dark:hover:bg-white hover:text-slate-900 transition-all cursor-pointer shadow-lg shadow-amber-400/5 dark:shadow-amber-400/20"
            >
              {t('btn_quote')}
            </button>
          </div>

          {/* Mobile Menu Actions & Toggle */}
          <div className="flex md:hidden items-center gap-4">
            {/* Quick Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white cursor-pointer">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-6 pt-4 pb-8 flex flex-col gap-5 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-black uppercase tracking-tight text-gray-950 dark:text-white py-2 border-b border-slate-100 dark:border-slate-800"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="flex flex-col gap-2 pt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select Language</span>
            <div className="grid grid-cols-3 gap-2">
              {languagesList.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-tighter border transition-all ${
                    language === lang.code
                      ? 'bg-amber-400 border-slate-900 dark:border-amber-400 text-slate-950 font-bold'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="mr-1">{lang.flag}</span>
                  <span>{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              setIsOpen(false);
              handleScrollToCatalog();
            }}
            className="w-full bg-slate-900 dark:bg-amber-400 text-white dark:text-slate-950 py-4.5 rounded-xl text-base font-black uppercase tracking-widest mt-2 cursor-pointer transition-transform active:scale-95"
          >
            {t('btn_started')}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
