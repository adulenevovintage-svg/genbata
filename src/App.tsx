/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductCatalog from './components/ProductCatalog';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Marquee from './components/Marquee';

function SectionWrapper({ children, showMarquee = true }: { children: React.ReactNode, showMarquee?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [30, 0, 0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  // Ultra-smooth spring physics for the "wiggle" effect
  const springScale = useSpring(scale, { stiffness: 40, damping: 15, mass: 1 });
  const springRotate = useSpring(rotateX, { stiffness: 40, damping: 15, mass: 1 });
  const springY = useSpring(y, { stiffness: 40, damping: 15, mass: 1 });

  return (
    <div ref={containerRef} className="perspective-2000 relative">
      <motion.div
        style={{
          scale: springScale,
          rotateX: springRotate,
          opacity,
          y: springY
        }}
        className="w-full origin-center"
      >
        {children}
      </motion.div>
      {showMarquee && <Marquee />}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden selection:bg-amber-500 selection:text-white">
      <Navbar />
      <main className="space-y-0">
        <SectionWrapper><Hero /></SectionWrapper>
        <SectionWrapper><Services /></SectionWrapper>
        <SectionWrapper><ProductCatalog /></SectionWrapper>
        <SectionWrapper><WhyUs /></SectionWrapper>
        <SectionWrapper><FAQ /></SectionWrapper>
        <SectionWrapper><Portfolio /></SectionWrapper>
        <SectionWrapper><Testimonials /></SectionWrapper>
        <SectionWrapper showMarquee={false}><Contact /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

