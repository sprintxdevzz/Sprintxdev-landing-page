'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { Rocket, Sparkles } from 'lucide-react';

const UniverseBackground = dynamic(
  () => import('./UniverseBackground').then((m) => m.UniverseBackground),
  { ssr: false }
);

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[95vh] flex flex-col items-center justify-center">
      <UniverseBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
          </span>
          AI-Powered Automation Platforms
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-6xl md:text-8xl font-display font-bold text-brand-dark tracking-tight leading-[0.95] mb-10"
        >
          Automate. Optimize. <br />
          <span className="gradient-text">Accelerate Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-brand-dark/60 mb-14 leading-relaxed font-medium"
        >
          Engineering intelligent systems that transform data into competitive
          advantage. From AI-powered CX platforms to enterprise ERP, CRM, and
          complete workflow automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
          >
            Book a Demo
            <Rocket size={20} />
          </motion.a>

          <motion.a
            href="#solutions"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary"
          >
            Explore Solutions
            <Sparkles size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] universe-glow -z-10 opacity-90" />
      <div className="hidden md:block">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.65, 0.45] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -right-[10%] w-[700px] h-[700px] bg-brand-secondary/15 blur-[120px] rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-[10%] -left-[10%] w-[700px] h-[700px] bg-brand-primary/15 blur-[120px] rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
          className="absolute top-[30%] left-[15%] w-[400px] h-[400px] bg-brand-secondary/10 blur-[100px] rounded-full -z-10"
        />
      </div>
    </section>
  );
};
