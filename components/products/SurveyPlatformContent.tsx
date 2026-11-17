'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  MessageSquare,
  BarChart2,
  Globe,
  Zap,
  TrendingUp,
  Check,
  ArrowRight,
  Users,
  BookOpen,
  ClipboardList,
} from 'lucide-react';

const stats = [
  { value: '12', label: 'question types' },
  { value: '6', label: 'distribution channels' },
  { value: 'AI', label: 'builder and insights' },
  { value: 'AR + EN', label: 'bilingual, RTL ready' },
];

const pillars = [
  {
    icon: <Bot size={28} />,
    title: 'Create',
    color: 'bg-brand-primary/[0.06] border-brand-primary/10',
    iconColor: 'text-brand-primary',
    items: [
      'AI builder — describe your survey in one sentence',
      'Import from an existing document',
      '12 question types (rating, NPS, matrix, open text, and more)',
      'Logic branching and skip conditions',
      'Bilingual — Arabic and English in one survey',
    ],
  },
  {
    icon: <Globe size={28} />,
    title: 'Distribute',
    color: 'bg-brand-secondary/[0.05] border-brand-secondary/10',
    iconColor: 'text-brand-secondary',
    items: [
      'Web embed and standalone link',
      'Email (native or via your ESP)',
      'SMS',
      'QR code (print, digital, in-app)',
      'Social media channels',
      'Live agent (auto-triggered after resolution)',
    ],
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Analyze',
    color: 'bg-brand-orange/[0.06] border-brand-orange/10',
    iconColor: 'text-brand-orange',
    items: [
      'Real-time dashboards and trend charts',
      'Cross-tabulation by any dimension',
      'AI text analysis — themes and sentiment from open responses',
      'Results Copilot — chat with your survey data',
      'Export to Excel, PDF or BI tools',
    ],
  },
];

const features = [
  {
    icon: <Bot size={20} />,
    name: 'AI Survey Builder',
    desc: 'Describe your survey goal in one sentence and let AI generate questions, logic and language in seconds. Or import content from an existing document.',
  },
  {
    icon: <ClipboardList size={20} />,
    name: '12 Question Types',
    desc: 'Single choice, multiple choice, rating scale, NPS, CSAT, CES, matrix, ranking, open text, file upload, number and date.',
  },
  {
    icon: <Globe size={20} />,
    name: 'Omnichannel Distribution',
    desc: 'Web embed, email, SMS, QR code, social media and live-agent channels — reach respondents wherever they are.',
  },
  {
    icon: <BarChart2 size={20} />,
    name: 'Advanced Analytics',
    desc: 'Real-time dashboards, response-rate tracking and cross-tabulation across any demographic or response combination.',
  },
  {
    icon: <Zap size={20} />,
    name: 'AI Text Analysis',
    desc: 'Automatically surfaces recurring themes and sentiment from open-ended responses — no manual coding required.',
  },
  {
    icon: <MessageSquare size={20} />,
    name: 'Results Copilot',
    desc: 'Chat with your survey data in plain language. Ask "What did respondents in Riyadh say about delivery speed?" and get an instant, cited answer.',
  },
];

const audiences = [
  {
    icon: <Users size={22} />,
    title: 'Government & Public Entities',
    desc: 'Ministries, municipalities and regulatory bodies measuring citizen satisfaction and service quality.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Enterprise Organizations',
    desc: 'Banks, telecoms and retail — continuous CSAT, NPS and CES measurement across every touchpoint.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Education & Healthcare',
    desc: 'Schools, universities and clinics running assessments, event feedback and patient-experience surveys.',
  },
];

export const SurveyPlatformContent: React.FC = () => {
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

      {/* Three pillars */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-primary justify-center mb-4"
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
              Three steps from question to{' '}
              <span className="gradient-text">decision</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className={`card p-7 border ${p.color}`}
              >
                <div className={`w-12 h-12 rounded-[var(--radius-sm)] ${p.color} flex items-center justify-center ${p.iconColor} mb-5`}>
                  {p.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-4">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-[16px] h-[16px] rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0">
                        <Check size={10} className="text-brand-secondary" strokeWidth={3} />
                      </span>
                      <span className="text-ink-500 text-xs leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Platform features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              Built for the entire <span className="gradient-text">feedback lifecycle</span>
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
              Anywhere you need to <span className="gradient-text">listen and act</span>
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
        </div>
      </section>

      {/* Nav links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <a href="/solutions#cx-solutions" className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all mb-4">
          <ArrowRight size={14} className="rotate-180" /> Back to CX Solutions
        </a>
        <div className="flex flex-wrap gap-3 mt-2">
          {[
            { label: 'Next CX', href: '/products/next-cx' },
            { label: 'Knowledge Base', href: '/products/knowledge-base' },
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
