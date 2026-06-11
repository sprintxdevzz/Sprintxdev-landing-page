'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const credentials = [
  { value: '2–4 wks', label: 'to first release' },
  { value: '99.9%', label: 'uptime SLA' },
  { value: '24/7', label: 'support & optimization' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24 md:pt-44 md:pb-28">
      {/* Engineered grid texture — replaces the glowing-orb soup */}
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade" />
      {/* One restrained light source, behind the headline */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[22%] -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] aura opacity-70 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_2px_rgba(10,15,31,0.04)] text-ink-700 text-[0.72rem] font-semibold tracking-wide mb-9"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
          AI-powered automation, ERP &amp; CX platforms
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
          className="font-display font-bold text-ink text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.03em] text-balance"
        >
          Automate. Optimize.
          <br />
          <span className="text-brand-primary">Accelerate growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="max-w-2xl mx-auto mt-8 text-lg md:text-xl text-ink-500 leading-relaxed text-pretty"
        >
          We engineer intelligent systems that turn operational data into a
          competitive edge — from AI-powered CX platforms to enterprise ERP, CRM,
          and end-to-end workflow automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-11"
        >
          <a href="#contact" className="btn-primary group">
            Book a demo
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a href="#solutions" className="btn-secondary">
            Explore solutions
          </a>
        </motion.div>

        {/* Credential strip — gives the hero substance instead of empty space */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="mt-16 md:mt-20 flex items-stretch justify-center divide-x divide-black/[0.08] border-y border-black/[0.07] max-w-2xl mx-auto"
        >
          {credentials.map((c) => (
            <div key={c.label} className="flex-1 px-4 py-5">
              <div className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight">
                {c.value}
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
