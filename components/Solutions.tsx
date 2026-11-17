'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Globe,
  Layers,
  BarChart3,
  Target,
  Zap,
  TrendingUp,
  Users,
  Database,
  Code2,
  Bot,
  GitMerge,
  BarChart2,
  Check,
  Search,
  BookOpen,
  Gauge,
  GitBranch,
  ShieldCheck,
  Boxes,
  ScrollText,
  ArrowRight,
} from 'lucide-react';

type Feature = { label: string; desc: string; icon: React.ReactNode };
type Section = { name: string; features: Feature[]; outcome?: string };
type Product = { name: string; tagline: string; description: string; icon: React.ReactNode; href: string };

type Solution = {
  id: string;
  anchor: string;
  title: string;
  tagline: string;
  description: string;
  sections?: Section[];
  products?: Product[];
  benefits: string[];
  icon: React.ReactNode;
};

const solutions: Solution[] = [
  {
    id: '1',
    anchor: 'cx-solutions',
    title: 'CX Solutions',
    tagline: 'Powered by Next CX',
    description:
      'From the first WhatsApp message to the follow-up survey — every channel, agent and insight runs on Next CX, one AI-powered platform fluent in Arabic, English and every Saudi dialect.',
    icon: <BarChart2 />,
    products: [
      {
        name: 'Next CX',
        tagline: 'Omnichannel CX Platform',
        description:
          'One inbox for every channel — WhatsApp, voice, web chat, email and more — with AI agents that answer from your approved knowledge base.',
        icon: <Globe />,
        href: '/products/next-cx',
      },
      {
        name: 'Razqora',
        tagline: 'Knowledge Base System',
        description:
          'A bilingual knowledge base where employees find correct, approved answers fast — with AI chat, approval workflows, and smart search.',
        icon: <BookOpen />,
        href: '/products/knowledge-base',
      },
      {
        name: 'Qyas',
        tagline: 'Survey Platform',
        description:
          'Create surveys with AI in minutes, distribute across every channel, and turn responses into decisions with built-in AI insights.',
        icon: <Target />,
        href: '/products/survey-platform',
      },
      {
        name: 'Rafiq',
        tagline: 'AI Assistant',
        description:
          'An embeddable AI chatbot that answers only from your approved content — bilingual, with one line of code and full control.',
        icon: <Bot />,
        href: '/products/ai-assistant',
      },
    ],
    benefits: [
      'One platform — one customer record across all channels',
      'AI that answers only from your approved knowledge base',
      'Arabic-first with every Saudi dialect supported',
      'Hosted in Saudi Arabia — sovereign deployment option',
      'PDPL-aligned consent ledger and data residency',
    ],
  },
  {
    id: '2',
    anchor: 'enterprise',
    title: 'Enterprise Solutions',
    tagline: 'Every layer, structured for scale.',
    description:
      'Whatever you run today, we customize it, implement proven platforms, or build exactly what you need — then connect it to your CX and automation.',
    icon: <Layers />,
    sections: [
      {
        name: 'Strategy & Performance',
        features: [
          { label: 'Automated KPI Frameworks', desc: 'Link individual output directly to strategy with real-time tracking.', icon: <Gauge size={13} /> },
          { label: 'Goal Cascading', desc: 'OKRs from organization to individual — everyone aligned to the same north star.', icon: <GitBranch size={13} /> },
          { label: 'Vision 2030 Alignment', desc: 'Map every KPI to national and entity strategy requirements.', icon: <Target size={13} /> },
          { label: 'Executive Dashboards', desc: 'Live reporting in full Arabic and English — no more waiting for weekly reports.', icon: <BarChart3 size={13} /> },
        ],
        outcome: 'Strategic reporting cycle cut from 3 weeks to real-time — leadership tracks OKR attainment continuously.',
      },
      {
        name: 'Governance, Risk & Compliance',
        features: [
          { label: 'One GRC Platform', desc: 'Governance, risk and compliance managed in one place.', icon: <ShieldCheck size={13} /> },
          { label: 'Saudi Frameworks', desc: 'NCA ECC · SAMA CSF · PDPL · ISO 27001 — certified compliance.', icon: <ScrollText size={13} /> },
          { label: 'Enterprise Risk & Audit', desc: 'Identify, assess and track every risk across your organization.', icon: <Search size={13} /> },
          { label: 'Audit-Ready Reporting', desc: 'Evidence and reports always up to date, ready when regulators ask.', icon: <Database size={13} /> },
        ],
      },
      {
        name: 'CRM, ERP & Workplace',
        features: [
          { label: 'CRM', desc: 'Dynamics 365 · Salesforce · Zoho · HubSpot — with custom logic and 360° view.', icon: <Users size={13} /> },
          { label: 'ERP', desc: 'Finance, HR, inventory and procurement — fitted to how you work.', icon: <Boxes size={13} /> },
          { label: 'Workplace', desc: 'Visitor management and attendance — connected to your broader systems.', icon: <Code2 size={13} /> },
          { label: 'Built Your Way', desc: 'Customize what you have, implement proven platforms, or build something new.', icon: <GitMerge size={13} /> },
        ],
        outcome: '-25% shorter sales cycle, 90%+ forecast accuracy, and real-time strategic reporting down from 3 weeks.',
      },
    ],
    benefits: [
      'Vision 2030 aligned — NCA · SAMA · PDPL · ISO 27001',
      'Microsoft certified team — Dynamics 365 & Power BI',
      'Trusted by Saudi integrators: Ejada & BustanTech',
      'Dedicated maintenance & support with agreed SLAs',
    ],
  },
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-brand-primary justify-center mb-5"
          >
            Our solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-ink mb-4 md:mb-6 text-balance"
          >
            Built for modern{' '}
            <span className="gradient-text">enterprise complexity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-ink-500 max-w-2xl mx-auto text-pretty"
          >
            Two integrated solutions designed to work together:
            AI-powered CX intelligence and strategic enterprise performance.
          </motion.p>
        </div>

        {/* Solution cards */}
        <div className="space-y-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              id={sol.anchor}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="group card card-hover overflow-hidden scroll-mt-28"
            >
              {/* Top accent — sweeps in on hover */}
              <div className="h-1 w-full bg-black/[0.04] overflow-hidden">
                <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-primary to-brand-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.06]">
                {/* Column 1: Identity */}
                <div className="relative p-8 md:p-10 flex flex-col">
                  <span className="pointer-events-none absolute top-6 right-7 font-display font-black text-6xl text-brand-primary/[0.06] select-none leading-none transition-colors duration-500 group-hover:text-brand-primary/[0.1]">
                    0{index + 1}
                  </span>
                  <div className="relative flex-1">
                    <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_20px_-6px_rgba(21,21,107,0.5)]">
                      {React.cloneElement(sol.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-3 leading-tight">
                      {sol.title}
                    </h3>
                    <span className="flex items-center gap-2 mb-5 text-[0.8rem] font-semibold text-brand-primary leading-snug">
                      <span className="h-3.5 w-0.5 shrink-0 rounded-full bg-brand-secondary" />
                      {sol.tagline}
                    </span>
                    <p className="text-ink-500 text-sm leading-relaxed">{sol.description}</p>
                  </div>
                </div>

                {/* Column 2: Products or Modules */}
                <div className="p-8 md:p-10">
                  {sol.products ? (
                    <div className="grid grid-cols-2 gap-3 h-full content-start">
                      {sol.products.map((product, pIdx) => (
                        <Link
                          key={pIdx}
                          href={product.href}
                          className="group/prod flex flex-col rounded-xl border border-black/[0.07] bg-white/50 p-5 hover:border-brand-primary/20 hover:bg-brand-primary/[0.03] transition-all duration-200"
                        >
                          <div className="w-9 h-9 rounded-lg bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-3 transition-all duration-200 group-hover/prod:bg-brand-primary group-hover/prod:text-white">
                            {React.cloneElement(product.icon as React.ReactElement<{ size?: number }>, { size: 16 })}
                          </div>
                          <p className="font-bold text-ink text-sm mb-0.5">{product.name}</p>
                          <p className="text-brand-primary text-[0.7rem] font-semibold mb-2 leading-snug">{product.tagline}</p>
                          <p className="text-ink-400 text-xs leading-relaxed flex-1">{product.description}</p>
                          <span className="mt-3 flex items-center gap-1 text-brand-primary text-xs font-semibold group-hover/prod:gap-2 transition-all">
                            Learn more <ArrowRight size={12} />
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                      {sol.sections?.map((sec, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <p className="flex items-center gap-2 text-brand-primary font-semibold text-[0.65rem] uppercase tracking-[0.18em] mb-4">
                            <span className="h-1 w-1 rounded-full bg-brand-secondary" />
                            {sec.name}
                          </p>
                          <div className="grid grid-cols-1 gap-y-1">
                            {sec.features.map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex gap-2.5 rounded-lg -mx-2 px-2 py-1.5 transition-colors hover:bg-brand-primary/[0.04]"
                              >
                                <div className="mt-0.5 w-5 h-5 rounded-md bg-brand-primary/[0.08] flex items-center justify-center text-brand-primary shrink-0">
                                  {feat.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-ink text-xs mb-0.5">{feat.label}</h4>
                                  <p className="text-ink-400 text-xs leading-relaxed">{feat.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          {sec.outcome && (
                            <div className="mt-auto pt-3.5">
                              <div className="flex gap-2.5 rounded-[var(--radius-sm)] bg-brand-primary/[0.04] border border-brand-primary/[0.07] px-3.5 py-2.5">
                                <TrendingUp size={13} strokeWidth={2.25} className="mt-0.5 text-brand-secondary shrink-0" />
                                <p className="text-[0.7rem] leading-relaxed text-ink-700">
                                  <span className="font-semibold text-ink">Outcome — </span>
                                  {sec.outcome}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Column 3: Benefits */}
                <div className="p-8 md:p-10 bg-brand-primary/[0.025] flex flex-col justify-center">
                  <p className="flex items-center gap-2 text-ink font-semibold text-[0.65rem] uppercase tracking-[0.18em] mb-5">
                    <Zap size={12} className="text-brand-secondary" strokeWidth={2.25} />
                    Key benefits
                  </p>
                  <ul className="space-y-3.5">
                    {sol.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="mt-0.5 w-[18px] h-[18px] rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0">
                          <Check size={11} className="text-brand-secondary" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-ink-700 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
