'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Search,
  Bot,
  GitBranch,
  ClipboardList,
  Users,
  Check,
  ArrowRight,
  ShieldCheck,
  Database,
} from 'lucide-react';

const stats = [
  { value: 'AR + EN', label: 'bilingual, right-to-left' },
  { value: 'AI', label: 'chat with source citations' },
  { value: '5', label: 'access roles' },
  { value: '90d', label: 'content freshness threshold' },
];

const steps = [
  {
    n: '01',
    title: 'Write',
    desc: 'Authors create articles, decision trees and assessments in a rich bilingual editor. Every article is versioned.',
  },
  {
    n: '02',
    title: 'Approve',
    desc: 'Approval managers review, comment and publish. Only approved content is visible to agents and AI.',
  },
  {
    n: '03',
    title: 'Find',
    desc: 'Agents search by keyword, by meaning, or ask the AI assistant — which only answers from verified, approved articles.',
  },
  {
    n: '04',
    title: 'Track',
    desc: 'Content health scores, freshness alerts, usage analytics and knowledge-gap reports keep the base accurate.',
  },
];

const features = [
  {
    icon: <Search size={20} />,
    name: 'Global Search',
    desc: 'Keyword, semantic and cross-language search across all approved articles — in Arabic or English, regardless of which language the article was written in.',
  },
  {
    icon: <BookOpen size={20} />,
    name: 'Articles & Versioning',
    desc: 'Rich bilingual editor with inline images and tables. Every revision is saved. Approved articles carry a verification badge and freshness date.',
  },
  {
    icon: <Bot size={20} />,
    name: 'AI Chat Assistant',
    desc: 'Answers questions using only approved knowledge — cites the exact article and section. Maintains conversation context across a session.',
  },
  {
    icon: <GitBranch size={20} />,
    name: 'Decision Trees',
    desc: 'Guided step-by-step troubleshooters that walk agents or customers through any process. Embeds directly into AI chat answers.',
  },
  {
    icon: <ClipboardList size={20} />,
    name: 'Assessments',
    desc: 'Build knowledge tests with up to 100 questions. AI can generate questions from existing articles. Results and certificates stored automatically.',
  },
  {
    icon: <ShieldCheck size={20} />,
    name: 'Roles & Permissions',
    desc: 'Five roles — Admin, Manager, Author, Reviewer, Viewer — with department-level access control. All activity logged.',
  },
];

const roles = [
  { title: 'Admin', desc: 'Manages users, departments, settings and integrations.' },
  { title: 'Manager (Approval)', desc: 'Reviews, approves and publishes articles and assessments.' },
  { title: 'Author', desc: 'Creates and edits articles, decision trees and assessments.' },
  { title: 'Reviewer', desc: 'Comments and suggests edits without publishing rights.' },
  { title: 'Viewer', desc: 'Reads approved content only — agents, support staff, end-users.' },
];

const audiences = [
  {
    icon: <Users size={22} />,
    title: 'Contact Centre Teams',
    desc: 'Support agents who need fast, accurate answers without escalating or searching multiple systems.',
  },
  {
    icon: <Database size={22} />,
    title: 'Internal Help Desks',
    desc: 'HR, IT and Operations teams managing internal policies, procedures and troubleshooting guides.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Regulated Teams',
    desc: 'Banks, government entities and healthcare organisations where answer accuracy and audit trails are non-negotiable.',
  },
];

export const KnowledgeBaseContent: React.FC = () => {
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

      {/* How it works */}
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
              Write once. Find instantly.{' '}
              <span className="gradient-text">Always approved.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              Everything a knowledge base <span className="gradient-text">actually needs</span>
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

      {/* Roles */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="eyebrow text-brand-primary mb-4"
              >
                Access control
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-display font-bold text-ink mb-5"
              >
                Five roles, one system,{' '}
                <span className="gradient-text">zero confusion</span>
              </motion.h2>
              <p className="text-ink-500 text-sm leading-relaxed">
                Every user gets exactly the access their role requires — with department-level scoping so a finance author can only see finance content, and a support viewer can only read approved articles.
              </p>
            </div>
            <div className="space-y-3">
              {roles.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 card p-4"
                >
                  <span className="mt-0.5 w-[18px] h-[18px] rounded-full bg-brand-secondary/15 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand-secondary" strokeWidth={3} />
                  </span>
                  <div>
                    <span className="font-bold text-ink text-sm">{r.title}: </span>
                    <span className="text-ink-500 text-sm">{r.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Teams that can&apos;t afford <span className="gradient-text">wrong answers</span>
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
