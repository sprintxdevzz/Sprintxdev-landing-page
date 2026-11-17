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
import { useI18n } from '@/lib/i18n';
import { ProductShowcase } from './ProductShowcase';

const PILLAR_ICONS = [
  <Bot size={20} key="bot" />,
  <Code2 size={20} key="code" />,
  <ShieldCheck size={20} key="shield" />,
  <Search size={20} key="search" />,
  <BookOpen size={20} key="book" />,
  <BarChart2 size={20} key="chart" />,
];

const FEATURE_ICONS = [
  <Zap size={20} key="zap" />,
  <MessageSquare size={20} key="msg" />,
  <Search size={20} key="search" />,
  <Globe size={20} key="globe" />,
];

const AUDIENCE_ICONS = [
  <Users size={22} key="users" />,
  <ShieldCheck size={22} key="shield" />,
  <Bot size={22} key="bot" />,
];

const DATA = {
  en: {
    stats: [
      { value: '1', label: 'line of code to embed' },
      { value: 'AR + EN', label: 'bilingual, RTL ready' },
      { value: '100%', label: 'approved content only' },
      { value: 'AI', label: 'content gap detection' },
    ],
    pillars: [
      {
        title: 'Answer',
        desc: "Rafiq answers only from your approved content — with the exact article and section shown as the source. If the answer isn't in the knowledge base, it says so.",
      },
      {
        title: 'Embed',
        desc: 'Add Rafiq to any website with a single script tag. Choose your persona name, colors, greeting message and allowed domains from the builder — no developer required.',
      },
      {
        title: 'Control',
        desc: 'Restrict Rafiq to specific domains, limit it to certain topics, or block it from discussing subjects outside its scope. Full editorial control at all times.',
      },
      {
        title: 'Learn',
        desc: "Every question that Rafiq couldn't answer from approved content is flagged as a content gap. You see exactly what knowledge is missing.",
      },
      {
        title: 'Create',
        desc: 'From the content-gaps list, you can generate article drafts for review in Razqora. Missed questions become new knowledge — automatically.',
      },
      {
        title: 'Measure',
        desc: 'View all conversations, response ratings, common topics and unanswered questions. Track whether the assistant is actually helping.',
      },
    ],
    embed_items: [
      'Customize persona name, colors, and greeting',
      'Restrict to specific domains and topics',
      'Chat widget or inline embed',
      'Works on any website or web app',
    ],
    features: [
      {
        name: 'Multiple Assistants',
        desc: 'Create separate assistants for different products, departments or websites — each with its own knowledge scope, persona and settings — all managed from one place.',
      },
      {
        name: 'Conversation Browser',
        desc: 'View every conversation, filter by rating or topic, and see exactly what users asked and how Rafiq answered. Full audit trail.',
      },
      {
        name: 'Content Gap Analysis',
        desc: "A ranked list of questions Rafiq couldn't answer from approved content — ordered by frequency so you know what to write first.",
      },
      {
        name: 'Bilingual with RTL Support',
        desc: "Answers in Arabic or English based on the user's input. Full right-to-left rendering for Arabic conversations.",
      },
    ],
    audiences: [
      {
        title: 'Customer-facing Websites',
        desc: 'Banks, telecoms and retailers adding a self-service layer to their website that only says what has been approved.',
      },
      {
        title: 'Internal Support Portals',
        desc: 'HR, IT and Operations portals where employees expect fast, accurate answers to policies and procedures.',
      },
      {
        title: 'Product Documentation Sites',
        desc: 'Product and SaaS teams reducing support tickets by letting customers self-serve from approved docs.',
      },
    ],
    tour: {
      eyebrow: 'Product tour',
      h2_a: 'It answers from your content',
      h2_b: 'and shows the source',
      note: 'Product preview · sample data',
      items: [
        { title: 'On your website', desc: 'Visitors ask in Arabic or English and get an answer in seconds, with source chips and related topics underneath.', image: 'c04-assistant-answer-sources' },
        { title: 'Every assistant at a glance', desc: 'Conversations, helpful rate and unanswered questions for each assistant, with a 30-day activity chart.', image: 'a01-assistants-overview' },
        { title: 'Missed information', desc: 'Every question it could not answer, with the reason, how often it was asked and which assistant missed it.', image: 'a03-missed-information' },
        { title: 'Per-assistant analytics', desc: 'Track conversations, feedback and open content gaps for one assistant over time.', image: 'a07-assistant-analytics' },
        { title: 'Full transcripts', desc: 'Open any conversation to read what people asked, how Rafiq answered and which sources it used.', image: 'a09-conversation-transcript' },
        { title: 'AI-assisted editor', desc: 'Turn a gap into an article. Write in one language and AI drafts the other and suggests a category.', image: 'b04-bilingual-ai-translation' },
      ],
    },
    back_link: 'Back to CX Solutions',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'Knowledge Base', href: '/products/knowledge-base' },
      { label: 'Survey Platform', href: '/products/survey-platform' },
    ],
  },
  ar: {
    stats: [
      { value: '1', label: 'سطر كود للتضمين' },
      { value: 'AR + EN', label: 'ثنائي اللغة، جاهز للـ RTL' },
      { value: '100%', label: 'محتوى معتمد فقط' },
      { value: 'AI', label: 'كشف فجوات المحتوى' },
    ],
    pillars: [
      {
        title: 'أجب',
        desc: 'يجيب رفيق فقط من محتواك المعتمد — مع إظهار المقالة والقسم الدقيق كمصدر. إذا لم تكن الإجابة في قاعدة المعرفة، يقول ذلك.',
      },
      {
        title: 'اندمج',
        desc: 'أضف رفيق إلى أي موقع بعلامة script واحدة. اختر اسم الشخصية والألوان ورسالة الترحيب والنطاقات المسموحة من المنشئ — بدون مطور.',
      },
      {
        title: 'تحكم',
        desc: 'قيّد رفيق بنطاقات محددة، حدّه بمواضيع معينة، أو امنعه من مناقشة موضوعات خارج نطاقه. سيطرة تحريرية كاملة في كل الأوقات.',
      },
      {
        title: 'تعلّم',
        desc: 'كل سؤال لم يستطع رفيق الإجابة عنه من المحتوى المعتمد يُعلَّم كفجوة محتوى. ترى بالضبط ما هي المعرفة الناقصة.',
      },
      {
        title: 'أنشئ',
        desc: 'من قائمة فجوات المحتوى، يمكنك توليد مسودات مقالات للمراجعة في رازكورا. الأسئلة الفائتة تصبح معرفة جديدة — تلقائياً.',
      },
      {
        title: 'قِس',
        desc: 'اعرض جميع المحادثات وتقييمات الإجابات والمواضيع الشائعة والأسئلة غير المجابة. تابع ما إذا كان المساعد يساعد فعلاً.',
      },
    ],
    embed_items: [
      'خصِّص اسم الشخصية والألوان والترحيب',
      'قيّد النطاقات والمواضيع المحددة',
      'ودجت محادثة أو تضمين مضمّن',
      'يعمل على أي موقع أو تطبيق ويب',
    ],
    features: [
      {
        name: 'مساعدون متعددون',
        desc: 'أنشئ مساعدين منفصلين لمنتجات أو أقسام أو مواقع مختلفة — لكل منها نطاق معرفة وشخصية وإعدادات خاصة — كلها مدارة من مكان واحد.',
      },
      {
        name: 'متصفح المحادثات',
        desc: 'اعرض كل محادثة، صفِّ حسب التقييم أو الموضوع، وانظر بالضبط ما سأله المستخدمون وكيف أجاب رفيق. سجل تدقيق كامل.',
      },
      {
        name: 'تحليل فجوات المحتوى',
        desc: 'قائمة مرتبة بالأسئلة التي لم يستطع رفيق الإجابة عنها من المحتوى المعتمد — مرتبة حسب التكرار لتعرف ما تكتبه أولاً.',
      },
      {
        name: 'ثنائي اللغة مع دعم RTL',
        desc: 'يجيب بالعربية أو الإنجليزية بناءً على مدخل المستخدم. عرض كامل من اليمين لليسار للمحادثات العربية.',
      },
    ],
    audiences: [
      {
        title: 'المواقع التي تواجه العملاء',
        desc: 'البنوك والاتصالات وتجار التجزئة الذين يضيفون طبقة خدمة ذاتية لموقعهم تقول فقط ما تم اعتماده.',
      },
      {
        title: 'بوابات الدعم الداخلي',
        desc: 'بوابات HR وIT والعمليات حيث يتوقع الموظفون إجابات سريعة ودقيقة على السياسات والإجراءات.',
      },
      {
        title: 'مواقع توثيق المنتجات',
        desc: 'فرق المنتج والـ SaaS التي تقلل تذاكر الدعم بالسماح للعملاء بالخدمة الذاتية من الوثائق المعتمدة.',
      },
    ],
    tour: {
      eyebrow: 'جولة في المنتج',
      h2_a: 'يجيب من محتواك',
      h2_b: 'ويُظهر المصدر',
      note: 'معاينة للمنتج · بيانات تجريبية',
      items: [
        { title: 'على موقعك', desc: 'يسأل الزوار بالعربية أو الإنجليزية ويحصلون على إجابة في ثوانٍ، مع المصادر والمواضيع ذات الصلة أسفلها.', image: 'c04-assistant-answer-sources' },
        { title: 'كل المساعدين في لمحة', desc: 'المحادثات ونسبة الإفادة والأسئلة غير المجابة لكل مساعد، مع مخطط النشاط لآخر 30 يوماً.', image: 'a01-assistants-overview' },
        { title: 'المعلومات الناقصة', desc: 'كل سؤال لم يستطع الإجابة عنه، مع السبب وعدد مرات طرحه والمساعد الذي فاته.', image: 'a03-missed-information' },
        { title: 'تحليلات كل مساعد', desc: 'تابع المحادثات والتقييمات وفجوات المحتوى المفتوحة لمساعد واحد عبر الوقت.', image: 'a07-assistant-analytics' },
        { title: 'سجل المحادثات كاملاً', desc: 'افتح أي محادثة لتقرأ ما سأله الناس وكيف أجاب رفيق والمصادر التي استخدمها.', image: 'a09-conversation-transcript' },
        { title: 'محرر بمساعدة الذكاء الاصطناعي', desc: 'حوّل الفجوة إلى مقال. اكتب بلغة واحدة ويصيغ الذكاء الاصطناعي الأخرى ويقترح الفئة.', image: 'b04-bilingual-ai-translation' },
      ],
    },
    back_link: 'العودة إلى حلول تجربة العملاء',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'قاعدة المعرفة', href: '/products/knowledge-base' },
      { label: 'منصة الاستطلاع', href: '/products/survey-platform' },
    ],
  },
};

export const AIAssistantContent: React.FC = () => {
  const { t, locale } = useI18n();
  const p = t.products_pages.ai_assistant;
  const d = DATA[locale];

  const pillars = d.pillars.map((pil, i) => ({ ...pil, icon: PILLAR_ICONS[i] }));
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

      <ProductShowcase
        basePath="/products/rafiq"
        url="kbs.nxtaut.com/assistants"
        className="bg-brand-light"
        {...d.tour}
      />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="card p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary">
                  {pil.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink text-sm mb-1">{pil.title}</h3>
                  <p className="text-ink-500 text-xs leading-relaxed">{pil.desc}</p>
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
                {p.embed_eyebrow}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="text-3xl md:text-4xl font-display font-bold text-ink mb-5"
              >
                {p.embed_h2_a}{' '}
                <span className="gradient-text">{p.embed_h2_b}</span>
              </motion.h2>
              <p className="text-ink-500 text-sm leading-relaxed mb-6">{p.embed_desc}</p>
              <ul className="space-y-3">
                {d.embed_items.map((item, i) => (
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
              <p className="text-ink-400 text-xs mt-3">{p.embed_code_note}</p>
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
              <span className="font-semibold text-ink">{p.availability_note_title}</span>{' '}
              {p.availability_note_desc}
            </p>
          </motion.div>
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
