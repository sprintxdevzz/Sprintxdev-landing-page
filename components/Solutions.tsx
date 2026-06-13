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
  CheckCircle2,
  Check,
} from 'lucide-react';

type Feature = { label: string; desc: string; icon: React.ReactNode };
type Section = { name: string; features: Feature[] };

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
    tagline: 'From Raw Data to Radical Growth',
    description:
      'Your strategic command center engineered to transform every customer signal into a roadmap for success. A 360-degree lens across Customer Experience, Contact Centers, Employee pulse, and Digital Journey.',
    icon: <BarChart2 />,
    sections: [
      {
        name: 'Survey Platform',
        features: [
          { label: 'Conversational Data Entry', desc: 'Chat or voice-guided prompts for seamless survey creation.', icon: <MessageSquare size={13} /> },
          { label: 'Fully Bilingual', desc: 'Native Arabic & English with integrated translation.', icon: <Globe size={13} /> },
          { label: 'Adaptive Logic Paths', desc: 'Visual tree builder for complex conditional journeys.', icon: <Layers size={13} /> },
          { label: 'Executive Dashboards', desc: 'Real-time BI reports for executive decision-making.', icon: <BarChart3 size={13} /> },
        ],
      },
      {
        name: 'Knowledge Base',
        features: [
          { label: 'AI-Powered Search', desc: 'Instantly surface answers across all your documentation.', icon: <FileSearch size={13} /> },
          { label: 'Self-Service Hub', desc: 'Empower customers to resolve issues without an agent.', icon: <Bot size={13} /> },
          { label: 'Centralized Content', desc: 'Consolidate articles, guides, and FAQs in one source of truth.', icon: <Database size={13} /> },
        ],
      },
    ],
    benefits: [
      'True Omnichannel Mastery across every channel',
      'Predictive action turning insights into revenue',
      'Real-Time Velocity for rapid team accountability',
    ],
  },
  {
    id: '2',
    anchor: 'enterprise',
    title: 'Enterprise Solutions',
    tagline: 'The Infrastructure Backbone of Your Business',
    description:
      'Purpose-built ERP, CRM, and performance management platforms tailored to your industry and integrated seamlessly with your existing systems. Built for enterprises demanding reliability, scalability, and precision.',
    icon: <Code2 />,
    sections: [
      {
        name: 'CRM',
        features: [
          { label: 'Microsoft CRM Customization', desc: 'Tailor-fit CRM workflows to your sales and service model.', icon: <Users size={13} /> },
          { label: '360° Customer View', desc: 'Sales, marketing, and service automation in one platform.', icon: <Target size={13} /> },
          { label: 'Revenue Forecasting', desc: 'Pipeline analytics with real-time performance dashboards.', icon: <TrendingUp size={13} /> },
        ],
      },
      {
        name: 'ERP & Performance KPI',
        features: [
          { label: 'End-to-End Resource Planning', desc: 'Unify finance, supply chain, and operations in real time.', icon: <Layers size={13} /> },
          { label: 'Power BI Integration', desc: 'Customizable modules with cross-department data flow.', icon: <BarChart3 size={13} /> },
          { label: 'KPI Frameworks', desc: 'Link individual output to organizational objectives.', icon: <CheckCircle2 size={13} /> },
        ],
      },
    ],
    benefits: [
      'Seamless connectivity with your existing stack',
      'Workflow automation maximizing team productivity',
      'Scalable architecture built for enterprise growth',
      '24/7 dedicated maintenance & support',
    ],
  },
  {
    id: '3',
    anchor: 'automation',
    title: 'Automation',
    tagline: 'Eliminate Friction. Maximize Throughput.',
    description:
      'We identify every repetitive, manual process in your operations and engineer intelligent automation that runs around the clock—freeing your team to focus on what drives real business value.',
    icon: <Bot />,
    sections: [
      {
        name: 'Intelligent Automation',
        features: [
          { label: 'Workflow Automation', desc: 'Streamline repetitive tasks across departments and systems.', icon: <Zap size={13} /> },
          { label: 'AI-Powered Decision Routing', desc: 'Intelligent task assignment based on complexity and skill.', icon: <Bot size={13} /> },
          { label: 'Document Processing & OCR', desc: 'Form reading and intelligent data capture at scale.', icon: <FileSearch size={13} /> },
          { label: 'Custom Integrations', desc: 'Connect every tool in your stack into one ecosystem.', icon: <GitMerge size={13} /> },
        ],
      },
      {
        name: 'Operations & RPA',
        features: [
          { label: 'Process Monitoring & Alerting', desc: 'Real-time visibility and automatic escalation for critical flows.', icon: <Bell size={13} /> },
        ],
      },
    ],
    benefits: [
      'Proven ROI with measurable time-to-value',
      'Scalable automation architecture',
      'Maximized team productivity',
      'Dedicated support & continuous optimization',
    ],
  },
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            CX intelligence, enterprise infrastructure, and end-to-end automation.
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

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.06]">
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

                {/* Column 2: Features */}
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                    {sol.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <p className="flex items-center gap-2 text-brand-primary font-semibold text-[0.65rem] uppercase tracking-[0.18em] mb-4">
                          <span className="h-1 w-1 rounded-full bg-brand-secondary" />
                          {sec.name}
                        </p>
                        <div className="space-y-1">
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
