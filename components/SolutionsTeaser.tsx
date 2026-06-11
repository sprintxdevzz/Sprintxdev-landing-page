'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BarChart2, Code2, Bot, ArrowRight } from 'lucide-react';

const teasers = [
  {
    anchor: 'cx-solutions',
    title: 'CX Solutions',
    tagline: 'From Raw Data to Radical Growth',
    description:
      'A 360-degree lens across Customer Experience, Contact Centers, Employee pulse, and Digital Journey.',
    icon: <BarChart2 size={24} />,
  },
  {
    anchor: 'enterprise',
    title: 'Enterprise Solutions',
    tagline: 'The Infrastructure Backbone of Your Business',
    description:
      'Purpose-built ERP, CRM, and performance management platforms tailored to your industry.',
    icon: <Code2 size={24} />,
  },
  {
    anchor: 'automation',
    title: 'Automation',
    tagline: 'Eliminate Friction. Maximize Throughput.',
    description:
      'Intelligent automation that runs around the clock—freeing your team to focus on real business value.',
    icon: <Bot size={24} />,
  },
];

export const SolutionsTeaser: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="eyebrow text-brand-primary justify-center mb-5">Our solutions</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink text-balance">
            Three pillars. One unified system.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teasers.map((t, i) => (
            <motion.div
              key={t.anchor}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={`/solutions#${t.anchor}`}
                className="group card card-hover block p-8 h-full"
              >
                <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 transition-transform duration-300 group-hover:scale-105">
                  {t.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-ink mb-1.5">{t.title}</h3>
                <p className="text-brand-primary font-semibold text-[0.78rem] mb-4">{t.tagline}</p>
                <p className="text-ink-500 text-sm leading-relaxed mb-6">{t.description}</p>
                <span className="inline-flex items-center gap-1.5 text-brand-primary font-semibold text-xs group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:gap-4 transition-all"
          >
            View all solutions <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
