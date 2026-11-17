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
import { useI18n } from '@/lib/i18n';

const FEATURE_ICONS = [
  <Search size={20} key="search" />,
  <BookOpen size={20} key="book" />,
  <Bot size={20} key="bot" />,
  <GitBranch size={20} key="git" />,
  <ClipboardList size={20} key="clip" />,
  <ShieldCheck size={20} key="shield" />,
];

const AUDIENCE_ICONS = [
  <Users size={22} key="users" />,
  <Database size={22} key="db" />,
  <ShieldCheck size={22} key="shield" />,
];

const DATA = {
  en: {
    stats: [
      { value: 'AR + EN', label: 'bilingual, right-to-left' },
      { value: 'AI', label: 'chat with source citations' },
      { value: '5', label: 'access roles' },
      { value: '90d', label: 'content freshness threshold' },
    ],
    steps: [
      { n: '01', title: 'Write', desc: 'Authors create articles, decision trees and assessments in a rich bilingual editor. Every article is versioned.' },
      { n: '02', title: 'Approve', desc: 'Approval managers review, comment and publish. Only approved content is visible to agents and AI.' },
      { n: '03', title: 'Find', desc: 'Agents search by keyword, by meaning, or ask the AI assistant — which only answers from verified, approved articles.' },
      { n: '04', title: 'Track', desc: 'Content health scores, freshness alerts, usage analytics and knowledge-gap reports keep the base accurate.' },
    ],
    features: [
      { name: 'Global Search', desc: 'Keyword, semantic and cross-language search across all approved articles — in Arabic or English, regardless of which language the article was written in.' },
      { name: 'Articles & Versioning', desc: 'Rich bilingual editor with inline images and tables. Every revision is saved. Approved articles carry a verification badge and freshness date.' },
      { name: 'AI Chat Assistant', desc: 'Answers questions using only approved knowledge — cites the exact article and section. Maintains conversation context across a session.' },
      { name: 'Decision Trees', desc: 'Guided step-by-step troubleshooters that walk agents or customers through any process. Embeds directly into AI chat answers.' },
      { name: 'Assessments', desc: 'Build knowledge tests with up to 100 questions. AI can generate questions from existing articles. Results and certificates stored automatically.' },
      { name: 'Roles & Permissions', desc: 'Five roles — Admin, Manager, Author, Reviewer, Viewer — with department-level access control. All activity logged.' },
    ],
    roles: [
      { title: 'Admin', desc: 'Manages users, departments, settings and integrations.' },
      { title: 'Manager (Approval)', desc: 'Reviews, approves and publishes articles and assessments.' },
      { title: 'Author', desc: 'Creates and edits articles, decision trees and assessments.' },
      { title: 'Reviewer', desc: 'Comments and suggests edits without publishing rights.' },
      { title: 'Viewer', desc: 'Reads approved content only — agents, support staff, end-users.' },
    ],
    audiences: [
      { title: 'Contact Centre Teams', desc: 'Support agents who need fast, accurate answers without escalating or searching multiple systems.' },
      { title: 'Internal Help Desks', desc: 'HR, IT and Operations teams managing internal policies, procedures and troubleshooting guides.' },
      { title: 'Regulated Teams', desc: 'Banks, government entities and healthcare organisations where answer accuracy and audit trails are non-negotiable.' },
    ],
    back_link: 'Back to CX Solutions',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'Survey Platform', href: '/products/survey-platform' },
      { label: 'AI Assistant', href: '/products/ai-assistant' },
    ],
  },
  ar: {
    stats: [
      { value: 'AR + EN', label: 'ثنائي اللغة، من اليمين' },
      { value: 'AI', label: 'دردشة بمصادر موثقة' },
      { value: '5', label: 'أدوار وصول' },
      { value: '90d', label: 'حد حداثة المحتوى' },
    ],
    steps: [
      { n: '01', title: 'اكتب', desc: 'يُنشئ المؤلفون مقالات وأشجار قرار واختبارات في محرر غني ثنائي اللغة. كل مقال موثَّق بإصدارات.' },
      { n: '02', title: 'اعتمد', desc: 'يراجع مديرو الموافقة ويعلِّقون وينشرون. المحتوى المعتمد فقط مرئي للوكلاء والذكاء الاصطناعي.' },
      { n: '03', title: 'ابحث', desc: 'يبحث الوكلاء بالكلمات المفتاحية أو المعنى أو يسألون مساعد الذكاء الاصطناعي — الذي يجيب فقط من المقالات المعتمدة.' },
      { n: '04', title: 'تتبع', desc: 'مؤشرات صحة المحتوى وتنبيهات الحداثة وتحليلات الاستخدام وتقارير الفجوات المعرفية تحافظ على دقة القاعدة.' },
    ],
    features: [
      { name: 'بحث شامل', desc: 'بحث بالكلمات المفتاحية والمعنى وعبر اللغات في جميع المقالات المعتمدة — بالعربية أو الإنجليزية بصرف النظر عن لغة المقال.' },
      { name: 'المقالات والإصدارات', desc: 'محرر غني ثنائي اللغة بصور وجداول مضمَّنة. كل مراجعة محفوظة. المقالات المعتمدة تحمل شارة التحقق وتاريخ الحداثة.' },
      { name: 'مساعد دردشة ذكي', desc: 'يجيب على الأسئلة من المعرفة المعتمدة فقط — مع ذكر المقال والقسم المحدد. يحتفظ بسياق المحادثة عبر الجلسة.' },
      { name: 'أشجار القرار', desc: 'مرشدون خطوة بخطوة يقودون الوكلاء أو العملاء عبر أي عملية. تُدمج مباشرة في إجابات دردشة الذكاء الاصطناعي.' },
      { name: 'الاختبارات', desc: 'بناء اختبارات معرفية بحتى 100 سؤال. يستطيع الذكاء الاصطناعي توليد أسئلة من المقالات الموجودة. النتائج والشهادات تُخزَّن تلقائياً.' },
      { name: 'الأدوار والصلاحيات', desc: 'خمسة أدوار — مدير وأمين وكاتب ومراجع وعارض — مع تحكم في الوصول على مستوى الأقسام. جميع النشاطات مسجَّلة.' },
    ],
    roles: [
      { title: 'المدير', desc: 'يدير المستخدمين والأقسام والإعدادات والتكاملات.' },
      { title: 'المدير (الموافقة)', desc: 'يراجع ويعتمد وينشر المقالات والاختبارات.' },
      { title: 'المؤلف', desc: 'ينشئ ويحرر المقالات وأشجار القرار والاختبارات.' },
      { title: 'المراجع', desc: 'يعلِّق ويقترح تعديلات بدون صلاحية النشر.' },
      { title: 'العارض', desc: 'يقرأ المحتوى المعتمد فقط — الوكلاء وموظفو الدعم والمستخدمون النهائيون.' },
    ],
    audiences: [
      { title: 'فرق مراكز الاتصال', desc: 'وكلاء الدعم الذين يحتاجون إجابات سريعة ودقيقة بدون تصعيد أو البحث في أنظمة متعددة.' },
      { title: 'مكاتب المساعدة الداخلية', desc: 'فرق الموارد البشرية وتقنية المعلومات والعمليات التي تدير السياسات الداخلية والإجراءات وأدلة استكشاف الأخطاء.' },
      { title: 'الفرق المنظَّمة', desc: 'البنوك والجهات الحكومية ومنظمات الرعاية الصحية حيث دقة الإجابات ومسارات التدقيق غير قابلة للتفاوض.' },
    ],
    back_link: 'العودة إلى حلول تجربة العملاء',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'منصة الاستطلاع', href: '/products/survey-platform' },
      { label: 'المساعد الذكي', href: '/products/ai-assistant' },
    ],
  },
};

export const KnowledgeBaseContent: React.FC = () => {
  const { t, locale } = useI18n();
  const p = t.products_pages.knowledge_base;
  const d = DATA[locale];

  const features = d.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }));
  const audiences = d.audiences.map((a, i) => ({ ...a, icon: AUDIENCE_ICONS[i] }));

  return (
    <>
      {/* Stats strip */}
      <section className="border-b hairline bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 hairline">
            {d.stats.map((s, i) => (
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
              {p.how_it_works}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              {p.how_it_works_h2_a}{' '}
              <span className="gradient-text">{p.how_it_works_h2_b}</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {d.steps.map((step, i) => (
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
              {p.capabilities}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              {p.capabilities_h2_a} <span className="gradient-text">{p.capabilities_h2_b}</span>
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
                {p.access_eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-display font-bold text-ink mb-5"
              >
                {p.access_h2_a}{' '}
                <span className="gradient-text">{p.access_h2_b}</span>
              </motion.h2>
              <p className="text-ink-500 text-sm leading-relaxed">
                {p.access_desc}
              </p>
            </div>
            <div className="space-y-3">
              {d.roles.map((r, i) => (
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
              {p.who_eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl font-display font-bold text-ink"
            >
              {p.who_h2_a} <span className="gradient-text">{p.who_h2_b}</span>
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
          <ArrowRight size={14} className="rotate-180" /> {d.back_link}
        </a>
        <div className="flex flex-wrap gap-3 mt-2">
          {d.related.map((r) => (
            <a key={r.href} href={r.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-primary/15 text-brand-primary text-xs font-semibold hover:bg-brand-primary/[0.04] transition-colors">
              {r.label} <ArrowRight size={12} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
