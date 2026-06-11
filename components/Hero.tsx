'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { maskRise, fadeUp, stagger } from '@/lib/motion';

const line1 = ['Automate.', 'Optimize.'];
const line2 = ['Accelerate', 'growth.'];

const credentials = [
  { value: '2–4 wks', label: 'to first release' },
  { value: '99.9%', label: 'uptime SLA' },
  { value: '24/7', label: 'support & optimization' },
];

function Word({ children }: { children: string }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom mr-[0.26em]">
      <motion.span variants={maskRise} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Pointer-driven parallax for the light source + grid (subtle, opposite drift)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const cfg = { stiffness: 120, damping: 24, mass: 0.6 };
  const auraX = useSpring(useTransform(px, (v) => v * 36), cfg);
  const auraY = useSpring(useTransform(py, (v) => v * 36), cfg);
  const gridX = useSpring(useTransform(px, (v) => v * -16), cfg);
  const gridY = useSpring(useTransform(py, (v) => v * -16), cfg);

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    px.set((e.clientX - (r.left + r.width / 2)) / r.width);
    py.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative overflow-hidden bg-white pt-36 pb-24 md:pt-44 md:pb-28"
    >
      {/* Engineered grid texture — parallaxes opposite the light */}
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 -m-12 bg-grid mask-fade"
      />
      {/* One restrained light source, trailing the cursor */}
      <motion.div
        aria-hidden
        style={{ x: auraX, y: auraY }}
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] aura opacity-70 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_2px_rgba(10,15,31,0.04)] text-ink-700 text-[0.72rem] font-semibold tracking-wide mb-9"
        >
          <span className="relative flex h-1.5 w-1.5">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-75" />
            )}
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-secondary" />
          </span>
          AI-powered automation, ERP &amp; CX platforms
        </motion.div>

        {/* Headline — each word rises from behind a mask, staggered */}
        <motion.h1
          variants={stagger(0.08, 0.15)}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="font-display font-bold text-ink text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-[-0.03em]"
        >
          <span className="block">
            {line1.map((w) => (
              <Word key={w}>{w}</Word>
            ))}
          </span>
          <span className="block text-brand-primary">
            {line2.map((w) => (
              <Word key={w}>{w}</Word>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-ink-500 leading-relaxed text-pretty"
        >
          We engineer intelligent systems that turn operational data into a
          competitive edge — from AI-powered CX platforms to enterprise ERP, CRM,
          and end-to-end workflow automation.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-11"
        >
          <Magnetic strength={0.4} className="inline-flex">
            <a href="#contact" className="btn-primary group">
              Book a demo
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
          </Magnetic>
          <Magnetic strength={0.3} className="inline-flex">
            <a href="#solutions" className="btn-secondary">
              Explore solutions
            </a>
          </Magnetic>
        </motion.div>

        {/* Credential strip — numbers slide up from behind a mask, staggered */}
        <motion.div
          variants={stagger(0.1, 0.85)}
          initial={reduce ? false : 'hidden'}
          animate="show"
          className="mt-16 md:mt-20 flex items-stretch justify-center divide-x divide-black/[0.08] border-y border-black/[0.07] max-w-2xl mx-auto"
        >
          {credentials.map((c) => (
            <div key={c.label} className="flex-1 px-4 py-5">
              <div className="overflow-hidden pb-1 -mb-1">
                <motion.div
                  variants={maskRise}
                  className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight"
                >
                  {c.value}
                </motion.div>
              </div>
              <div className="mt-1 text-[0.72rem] md:text-xs text-ink-400 font-medium uppercase tracking-[0.12em]">
                {c.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
