'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, PenTool, Code2, LineChart } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Analysis',
      desc: 'We identify your core challenges and map a clear path to resolution — understanding your business, data flows, and operational bottlenecks.',
      icon: <Search />,
    },
    {
      number: '02',
      title: 'Design',
      desc: 'Tailored blueprints that prioritize user experience and system speed, designed for your industry requirements and future growth.',
      icon: <PenTool />,
    },
    {
      number: '03',
      title: 'Implementation',
      desc: 'Clean execution with minimal impact on current operations — real-time progress tracking and transparent delivery milestones.',
      icon: <Code2 />,
    },
    {
      number: '04',
      title: 'Optimization',
      desc: 'Continuous monitoring and support via our responsive ticketing system, ensuring sustained performance and reliability.',
      icon: <LineChart />,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-dark mask-fade opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-secondary mb-4"
            >
              The Next Automation methodology
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              A streamlined approach to engineering high-velocity digital systems
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base md:text-lg max-w-sm text-pretty"
          >
            Building on the proven Sprint methodology, we deliver intelligent solutions through
            discovery, design, implementation, and optimization.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.08] rounded-[var(--radius-xl)] overflow-hidden border border-white/[0.08]">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, ease: 'easeOut' }}
              className="relative p-7 md:p-8 bg-brand-dark hover:bg-white/[0.03] transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-brand-secondary transition-colors duration-300 group-hover:border-brand-secondary/40">
                  {React.cloneElement(
                    step.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>,
                    { size: 19, strokeWidth: 1.75 }
                  )}
                </div>
                <span className="font-mono text-xs font-medium text-white/30 tabular-nums">
                  {step.number}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-2.5">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </section>
  );
};
