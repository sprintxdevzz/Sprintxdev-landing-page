'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  BookOpen,
  Code2,
  ShieldCheck,
  Search,
  BarChart2,
  MessageSquare,
  Check,
  ArrowRight,
  Users,
  Globe,
  Zap,
} from 'lucide-react';

const stats = [
  { value: '1', label: 'line of code to embed' },
  { value: 'AR + EN', label: 'bilingual, RTL ready' },
  { value: '100%', label: 'approved content only' },
  { value: 'AI', label: 'content gap detection' },
];

const pillars = [
  {
    icon: <Bot size={20} />,
    title: 'Answer',
    desc: 'Rafiq answers only from your approved content — with the exact article and section shown as the source. If the answer isn\'t in the knowledge base, it says so.',
  },
  {
    icon: <Code2 size={20} />,
    title: 'Embed',
    desc: 'Add Rafiq to any website with a single script tag. Choose your persona name, colors, greeting message and allowed domains from the builder — no developer required.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Control',
    desc: 'Restrict Rafiq to specific domains, limit it to certain topics, or block it from discussing subjects outside its scope. Full editorial control at all times.',
  },
  {
    icon: <Search size={20} />,
    title: 'Learn',
    desc: 'Every question that Rafiq couldn\'t answer from approved content is flagged as a content gap. You see exactly what knowledge is missing.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Create',
    desc: 'From the content-gaps list, you can generate article drafts for review in Razqora. Missed questions become new knowledge — automatically.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Measure',
    desc: 'View all conversations, response ratings, common topics and unanswered questions. Track whether the assistant is actually helping.',
  },
];

const features = [
  {
    icon: <Zap size={20} />,
    name: 'Multiple Assistants',
    desc: 'Create separate assistants for different products, departments or websites — each with its own knowledge scope, persona and settings — all managed from one place.',
  },
  {
    icon: <MessageSquare size={20} />,
    name: 'Conversation Browser',
    desc: 'View every conversation, filter by rating or topic, and see exactly what users asked and how Rafiq answered. Full audit trail.',
  },
  {
    icon: <Search size={20} />,
    name: 'Content Gap Analysis',
    desc: 'A ranked list of questions Rafiq couldn\'t answer from approved content — ordered by frequency so you know what to write first.',
  },
  {
    icon: <Globe size={20} />,
    name: 'Bilingual with RTL Support',
    desc: 'Answers in Arabic or English based on the user\'s input. Full right-to-left rendering for Arabic conversations.',
  },
];

const audiences = [
  {
    icon: <Users size={22} />,
    title: 'Customer-facing Websites',
    desc: 'Banks, telecoms and retailers adding a self-service layer to their website that only says what has been approved.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Internal Support Portals',
    desc: 'HR, IT and Operations portals where employees expect fast, accurate answers to policies and procedures.',
  },
  {
    icon: <Bot size={22} />,
    title: 'Product Documentation Sites',
    desc: 'Product and SaaS teams reducing support tickets by letting customers self-serve from approved docs.',
  },
];

export const AIAssistantContent: React.FC = () => {
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

      {/* Six pillars */}
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
              Answer. Embed. Control.{' '}
              <span className="gradient-text">And get better over time.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary">
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink text-sm mb-1">{p.title}</h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embed demo section */}
      <section className="py-20 md:py-28 bg-brand-light relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow text-brand-primary mb-4"
              >
                One line of code
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-display font-bold text-ink mb-5"
              >
                On your website in{' '}
                <span className="gradient-text">minutes, not days</span>
              </motion.h2>
              <p className="text-ink-500 text-sm leading-relaxed mb-6">
                Copy the embed code from the builder, paste it into your website&apos;s HTML, and Rafiq appears instantly. No backend, no API key management, no developer sprint required.
              </p>
              <ul className="space-y-3">
                {[
                  'Customize persona name, colors, and greeting',
                  'Restrict to specific domains and topics',
                  'Chat widget or inline embed',
                  'Works on any website or web app',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-[18px] h-[18px] rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-brand-secondary" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-ink-700 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <p className="eyebrow text-ink-400 mb-3">Embed code</p>
              <div className="rounded-lg bg-ink/[0.04] border border-black/[0.07] p-4 font-mono text-xs text-ink-700 leading-relaxed overflow-x-auto">
                <span className="text-brand-secondary">&lt;script</span>{' '}
                <span className="text-brand-primary">src</span>
                <span className="text-ink-400">=</span>
                <span className="text-brand-secondary">&quot;https://cdn.razqora.ai/rafiq.js&quot;</span>{' '}
                <span className="text-brand-primary">data-assistant</span>
                <span className="text-ink-400">=</span>
                <span className="text-brand-secondary">&quot;your-id&quot;</span>
                <span className="text-brand-secondary">&gt;&lt;/script&gt;</span>
              </div>
              <p className="text-ink-400 text-xs mt-3">That&apos;s it. Rafiq is live on your website.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Manage every assistant <span className="gradient-text">from one place</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
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
              Who it&apos;s for
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              Any website that answers <span className="gradient-text">the same questions</span>
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
          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 p-5 rounded-xl border border-brand-primary/10 bg-brand-primary/[0.03] flex items-start gap-3 max-w-2xl mx-auto"
          >
            <BookOpen size={16} className="text-brand-primary mt-0.5 shrink-0" />
            <p className="text-sm text-ink-500 leading-relaxed">
              <span className="font-semibold text-ink">Currently available as part of Razqora.</span>{' '}
              Rafiq is built into the Razqora Knowledge Base System. A standalone version for teams that need the AI assistant without the full knowledge base is planned.
            </p>
          </motion.div>
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
            { label: 'Survey Platform', href: '/products/survey-platform' },
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
