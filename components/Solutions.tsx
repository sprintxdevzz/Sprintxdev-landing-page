'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
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
  FileSearch,
  GitMerge,
  Bell,
  BarChart2,
  Check,
  Search,
  RefreshCw,
  Phone,
  AudioLines,
  BookOpen,
  Gauge,
  GitBranch,
  ShieldCheck,
  Boxes,
  Workflow,
  Repeat,
  Clock,
  ScrollText,
  Route,
  Cpu,
  GraduationCap,
} from 'lucide-react';

type Feature = { label: string; desc: string; icon: React.ReactNode };
type Section = { name: string; features: Feature[]; outcome?: string };

type Solution = {
  id: string;
  anchor: string;
  title: string;
  tagline: string;
  description: string;
  sections: Section[];
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
    sections: [
      {
        name: 'Engage & Resolve',
        features: [
          { label: 'Omnichannel', desc: '12+ channels in one place — voice, chat, WhatsApp, email and more.', icon: <Globe size={13} /> },
          { label: 'AI Voice Agent', desc: 'Every major language and every Saudi dialect, handling calls end-to-end.', icon: <Phone size={13} /> },
          { label: 'AI Chat Agent', desc: 'Instant answers on web, WhatsApp, and app — around the clock.', icon: <Bot size={13} /> },
          { label: 'Live Agent', desc: 'Full customer record in every chat, so agents never start from scratch.', icon: <Users size={13} /> },
        ],
        outcome: 'AHT reduced by 40%, CSAT up to 90%+, with 60% of interactions fully handled by AI — no human handoff needed.',
      },
      {
        name: 'Understand',
        features: [
          { label: 'Unified Contacts', desc: 'One 360° profile per customer, built from every interaction across every channel.', icon: <Database size={13} /> },
          { label: 'Journey Mapping', desc: 'Map and personalize every touchpoint from first contact to resolution.', icon: <Route size={13} /> },
          { label: 'Survey Platform', desc: 'Voice and chat surveys in Arabic and English — response rates up 35%.', icon: <MessageSquare size={13} /> },
          { label: 'CX Dashboard', desc: 'Live performance at a glance — CSAT, FCR, AHT in real time.', icon: <BarChart3 size={13} /> },
        ],
        outcome: 'First Contact Resolution up to 85%, with feedback reaching decision-makers within 24 hours instead of weeks.',
      },
      {
        name: 'Empower & Improve',
        features: [
          { label: 'Knowledge Base', desc: 'One source of truth that AI agents answer from — updated once, applied everywhere.', icon: <BookOpen size={13} /> },
          { label: 'Speech-to-Text', desc: 'Real-time Arabic and English transcription across every voice interaction.', icon: <AudioLines size={13} /> },
          { label: 'QA & Agent Coaching', desc: 'Score every call and coach every agent with automated quality analysis.', icon: <Check size={13} /> },
          { label: 'CX Automation', desc: '700+ integrations to automate workflows across your entire CX stack.', icon: <Zap size={13} /> },
        ],
      },
    ],
    benefits: [
      'One unified platform — 12+ channels, 700+ integrations',
      'Native Arabic and every Saudi dialect',
      'Hosted in Jeddah or fully on-premises',
      'DGA-aligned accessibility for government',
    ],
  },
  {
    id: '2',
    anchor: 'automation',
    title: 'Automation',
    tagline: 'Eliminate friction. Maximize throughput.',
    description:
      'We replace fragmented manual workflows with intelligent, autonomous systems engineered to scale. We don\'t replace people — we free them for the work that matters.',
    icon: <Bot />,
    sections: [
      {
        name: 'Consulting · Plan',
        features: [
          { label: 'Process Audits', desc: 'Find where time and money are actually lost before recommending a fix.', icon: <Search size={13} /> },
          { label: 'Automation Roadmap', desc: 'A phased plan prioritized by impact and effort, delivered in under 4 weeks.', icon: <Route size={13} /> },
          { label: 'Tech Stack Evaluation', desc: 'Assess what you have and recommend what you need — no duplicate tools.', icon: <Cpu size={13} /> },
          { label: 'Change Management & Training', desc: 'Hands-on rollout support so adoption actually sticks after launch.', icon: <GraduationCap size={13} /> },
        ],
        outcome: 'Automation roadmap delivered in under 4 weeks, with a clear ROI case before a line of code is written.',
      },
      {
        name: 'Intelligent Automation · Build',
        features: [
          { label: 'Workflow Automation', desc: 'Multi-step tasks automated across departments and systems.', icon: <Workflow size={13} /> },
          { label: 'AI Decision Routing', desc: 'Tasks assigned by complexity, urgency and skill — automatically.', icon: <Bot size={13} /> },
          { label: 'Document Processing & OCR', desc: 'Structured data from forms in Arabic and English, at scale.', icon: <FileSearch size={13} /> },
          { label: 'Custom Integrations', desc: 'Every tool in your stack connected into one ecosystem.', icon: <GitMerge size={13} /> },
        ],
        outcome: '~70% faster document turnaround with near-zero entry errors; invoice processing down from days to hours.',
      },
      {
        name: 'Operations & RPA · Run',
        features: [
          { label: 'Process Monitoring & Alerting', desc: 'Real-time visibility with automatic escalation on exceptions.', icon: <Bell size={13} /> },
          { label: 'Zero-Fatigue Bots', desc: 'High-volume tasks handled with total accuracy, 24 hours a day.', icon: <Repeat size={13} /> },
          { label: 'Always-On Operations', desc: 'Processing that never sleeps or slows down — cloud or on-premises.', icon: <Clock size={13} /> },
          { label: 'Audit-Ready Logging', desc: 'Full traceability on every automated action, built for compliance.', icon: <ScrollText size={13} /> },
        ],
        outcome: '24/7 SLA coverage with no added FTEs; reconciliation cycles cut from 5 days to under 1.',
      },
    ],
    benefits: [
      'AR | EN document OCR — Arabic and English out of the box',
      '24/7 operations with audit-ready logging',
      'Hosted in Jeddah, KSA or fully on-premises',
      'Integrates with your existing systems from day one',
    ],
  },
  {
    id: '3',
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
            Three interconnected pillars designed to work as one unified system:
            CX intelligence, end-to-end automation, and strategic performance.
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

                {/* Column 2: Modules */}
                <div className="p-8 md:p-10">
                  <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
                    {sol.sections.map((sec, sIdx) => (
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
