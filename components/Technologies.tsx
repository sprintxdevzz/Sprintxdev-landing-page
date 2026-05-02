'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Orbit, Workflow, Radar, Sparkles, ShieldCheck } from 'lucide-react';

type Tech = {
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  accent: 'emerald' | 'sky' | 'violet' | 'amber';
};

const technologies: Tech[] = [
  {
    name: 'Antigravity',
    category: 'Compute',
    description:
      'High-performance distributed compute that scales horizontally without breaking a sweat — the engine room behind every system we ship.',
    icon: <Orbit strokeWidth={1.5} />,
    accent: 'sky',
  },
  {
    name: 'Relplit',
    category: 'Workflows',
    description:
      'Enterprise-grade workflow orchestration and RPA that turn brittle manual processes into reliable, observable, always-on pipelines.',
    icon: <Workflow strokeWidth={1.5} />,
    accent: 'emerald',
  },
  {
    name: 'Claude Code',
    category: 'AI',
    description:
      'AI-powered intelligence — from code synthesis to decision routing — embedded directly into the solutions we design, build, and deliver.',
    icon: <Sparkles strokeWidth={1.5} />,
    accent: 'amber',
  },
];

const accentMap: Record<Tech['accent'], { dot: string; ring: string; tagText: string; iconText: string; glow: string }> = {
  sky: {
    dot: 'bg-sky-400',
    ring: 'ring-sky-400/30',
    tagText: 'text-sky-300',
    iconText: 'text-sky-300',
    glow: 'group-hover:shadow-[0_0_60px_-12px_rgba(56,189,248,0.45)]',
  },
  emerald: {
    dot: 'bg-brand-secondary',
    ring: 'ring-brand-secondary/30',
    tagText: 'text-brand-secondary',
    iconText: 'text-brand-secondary',
    glow: 'group-hover:shadow-[0_0_60px_-12px_rgba(5,216,156,0.5)]',
  },
  violet: {
    dot: 'bg-violet-400',
    ring: 'ring-violet-400/30',
    tagText: 'text-violet-300',
    iconText: 'text-violet-300',
    glow: 'group-hover:shadow-[0_0_60px_-12px_rgba(167,139,250,0.45)]',
  },
  amber: {
    dot: 'bg-amber-300',
    ring: 'ring-amber-300/30',
    tagText: 'text-amber-200',
    iconText: 'text-amber-200',
    glow: 'group-hover:shadow-[0_0_60px_-12px_rgba(252,211,77,0.4)]',
  },
};

export const Technologies: React.FC = () => {
  return (
    <section
      id="technologies"
      aria-labelledby="technologies-heading"
      className="relative py-20 md:py-32 bg-brand-dark overflow-hidden isolate"
    >
      {/* Layered background — dot grid, brand glow blobs, top/bottom hairlines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-32 w-[520px] h-[520px] bg-brand-secondary/20 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 w-[520px] h-[520px] bg-brand-primary/30 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-secondary font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
            >
              <span className="w-6 h-px bg-brand-secondary/60" />
              OUR TECHNOLOGY STACK
            </motion.div>
            <motion.h2
              id="technologies-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.05]"
            >
              Built on{' '}
              <span className="bg-gradient-to-r from-white via-brand-secondary to-white bg-clip-text text-transparent">
                enterprise-grade
              </span>{' '}
              technology
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md lg:max-w-sm space-y-5"
          >
            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
              We accelerate your success using the most modern tools — engineered
              by expert teams to ensure best practices and production-grade
              quality.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-[11px] font-bold uppercase tracking-[0.18em]">
              <ShieldCheck size={13} className="text-brand-secondary" />
              Exert Engineering Team
            </div>
          </motion.div>
        </div>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 justify-items-center">
          {technologies.map((tech, index) => {
            const a = accentMap[tech.accent];
            return (
              <motion.article
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                className={`group relative p-6 md:p-7 rounded-[24px] md:rounded-[28px] bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 ${a.glow}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${a.iconText} group-hover:scale-110 transition-transform duration-500 ring-1 ${a.ring}`}
                  >
                    {React.cloneElement(
                      tech.icon as React.ReactElement<{ size?: number; className?: string }>,
                      { size: 22 }
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 ${a.tagText}  text-[10px] font-bold uppercase tracking-[0.16em]`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 leading-tight">
                  {tech.name}
                </h3>
                <p className="text-white/55 text-xs md:text-sm leading-relaxed">
                  {tech.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Footer manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 md:mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-medium">
            At Next Automation, we don&apos;t cut corners. We leverage industry-leading
            technology — combined with expert engineering — to design and build
            solutions that scale, perform, and last.
          </p>
          <p className="mt-4 text-white/40 text-sm md:text-base leading-relaxed">
            Every implementation is grounded in proven best practices, not trends or
            shortcuts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
