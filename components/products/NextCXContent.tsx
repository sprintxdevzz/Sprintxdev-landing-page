'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Bot,
  Phone,
  Users,
  MessageSquare,
  BarChart2,
  ShieldCheck,
  Zap,
  Check,
  ArrowRight,
  BookOpen,
  Headphones,
} from 'lucide-react';

const stats = [
  { value: '12+', label: 'channels in one inbox' },
  { value: 'AI', label: 'agents, Arabic-first' },
  { value: 'KSA', label: 'hosted, PDPL-ready' },
  { value: '24/7', label: 'zero-fatigue coverage' },
];

const steps = [
  {
    n: '01',
    title: 'Customer contacts on any channel',
    desc: 'WhatsApp, voice, web chat, email, SMS, Instagram or Facebook — one unified inbox, one customer record.',
  },
  {
    n: '02',
    title: 'AI agent responds instantly',
    desc: 'The AI reads from your approved knowledge base and answers with citations — in Arabic, English or any Saudi dialect.',
  },
  {
    n: '03',
    title: 'Seamless human handover',
    desc: 'When a human is needed, the agent gets the full conversation history and AI-suggested replies in real time.',
  },
  {
    n: '04',
    title: 'Survey auto-triggered after resolution',
    desc: 'CSAT, NPS or CES sent automatically on the channel the customer used. Response rates up 35% vs. email blasts.',
  },
  {
    n: '05',
    title: 'Closed loop — quality and knowledge',
    desc: 'Low scores open cases automatically. Questions the AI couldn\'t answer create knowledge-base drafts for approval.',
  },
];

const features = [
  {
    icon: <Globe size={20} />,
    name: 'Omnichannel Inbox',
    desc: 'WhatsApp, voice, web chat, email, SMS, Instagram and Facebook — all in one place. One ticket, one history.',
  },
  {
    icon: <Bot size={20} />,
    name: 'AI Chat Agent',
    desc: 'Handles tickets end-to-end, 24/7, citing sources from your approved knowledge base. Escalates only when needed.',
  },
  {
    icon: <Phone size={20} />,
    name: 'AI Voice Agent',
    desc: 'Answers calls in every Saudi dialect. Full NLU, intent detection and call completion without a human on the line.',
  },
  {
    icon: <Headphones size={20} />,
    name: 'Agent Assist',
    desc: 'While an agent talks or types, AI surfaces the best answer, next action and upsell in real time.',
  },
  {
    icon: <MessageSquare size={20} />,
    name: 'Auto-triggered Surveys',
    desc: 'CSAT, NPS and CES sent on the right channel at the right moment — with AI analysis of open-text feedback.',
  },
  {
    icon: <ShieldCheck size={20} />,
    name: 'Quality & Compliance',
    desc: 'Every interaction auto-scored. Coaching plans built from scores. PDPL-aligned, hosted in the Kingdom.',
  },
];

const audiences = [
  {
    icon: <BarChart2 size={22} />,
    title: 'Saudi Banks',
    desc: 'Tier-1 and tier-2 banks managing high-volume contact centres with strict SAMA and PDPL compliance requirements.',
  },
  {
    icon: <Users size={22} />,
    title: 'Government Entities',
    desc: 'Ministries and government organisations serving Arabic-speaking citizens across digital and voice channels.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Large Enterprises',
    desc: 'Telecoms, insurance, healthcare and retail — any regulated enterprise where CX quality directly drives revenue.',
  },
];

export const NextCXContent: React.FC = () => {
  return (
    <>
      {/* Stats strip */}
      <section className="border-b hairline bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 hairline">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-6 py-8 text-center"
              >
                <p className="text-3xl font-display font-black text-brand-primary mb-1">{s.value}</p>
                <p className="text-xs text-ink-500 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The closed loop */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-primary mb-4"
            >
              How it works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              The closed loop — from first message to{' '}
              <span className="gradient-text">continuous improvement</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card p-6 flex flex-col"
              >
                <span className="font-display font-black text-3xl text-brand-primary/10 mb-3 leading-none">{step.n}</span>
                <h3 className="font-bold text-ink text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-ink-400 text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-brand-light relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-primary justify-center mb-4"
            >
              Platform capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              Everything in <span className="gradient-text">one system</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card card-hover p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink text-sm mb-1">{f.name}</h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-primary justify-center mb-4"
            >
              Who it&apos;s for
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              Built for <span className="gradient-text">regulated enterprises</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-8 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary">
                  {a.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink text-base mb-2">{a.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 card p-8"
          >
            <p className="eyebrow text-brand-primary mb-6">Key benefits</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {[
                'One platform — one customer record across all channels',
                'AI agents answer only from your approved knowledge base',
                'Arabic-first with every Saudi dialect supported',
                'Hosted in Saudi Arabia — sovereign deployment option',
                'PDPL-aligned consent ledger and data residency',
                '700+ integrations with your existing stack',
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-[18px] h-[18px] rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand-secondary" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-ink-700 leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <a href="/solutions#cx-solutions" className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all">
          <ArrowRight size={14} className="rotate-180" /> Back to CX Solutions
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Knowledge Base', href: '/products/knowledge-base' },
            { label: 'Survey Platform', href: '/products/survey-platform' },
            { label: 'AI Assistant', href: '/products/ai-assistant' },
          ].map((p) => (
            <a key={p.href} href={p.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-primary/15 text-brand-primary text-xs font-semibold hover:bg-brand-primary/[0.04] transition-colors">
              {p.label} <ArrowRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
