import { motion } from 'motion/react';
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-slate-900">
              <Sun size={18} strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase text-slate-900 italic">GENBATA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-400 hover:text-slate-900 transition-all">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
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
          className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-900 py-2 border-b border-gray-50"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-amber-500 text-white py-4 rounded-xl text-lg font-bold mt-2">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
}
