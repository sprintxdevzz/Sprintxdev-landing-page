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
import { useI18n } from '@/lib/i18n';

const PILLAR_ICONS = [
  <Bot size={28} key="bot" />,
  <Globe size={28} key="globe" />,
  <BarChart2 size={28} key="chart" />,
];

const FEATURE_ICONS = [
  <Bot size={20} key="bot" />,
  <ClipboardList size={20} key="clip" />,
  <Globe size={20} key="globe" />,
  <BarChart2 size={20} key="chart" />,
  <Zap size={20} key="zap" />,
  <MessageSquare size={20} key="msg" />,
];

const AUDIENCE_ICONS = [
  <Users size={22} key="users" />,
  <TrendingUp size={22} key="trend" />,
  <BookOpen size={22} key="book" />,
];

const DATA = {
  en: {
    stats: [
      { value: '12', label: 'question types' },
      { value: '6', label: 'distribution channels' },
      { value: 'AI', label: 'builder and insights' },
      { value: 'AR + EN', label: 'bilingual, RTL ready' },
    ],
    pillars: [
      {
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
    ],
    features: [
      { name: 'AI Survey Builder', desc: 'Describe your survey goal in one sentence and let AI generate questions, logic and language in seconds. Or import content from an existing document.' },
      { name: '12 Question Types', desc: 'Single choice, multiple choice, rating scale, NPS, CSAT, CES, matrix, ranking, open text, file upload, number and date.' },
      { name: 'Omnichannel Distribution', desc: 'Web embed, email, SMS, QR code, social media and live-agent channels — reach respondents wherever they are.' },
      { name: 'Advanced Analytics', desc: 'Real-time dashboards, response-rate tracking and cross-tabulation across any demographic or response combination.' },
      { name: 'AI Text Analysis', desc: 'Automatically surfaces recurring themes and sentiment from open-ended responses — no manual coding required.' },
      { name: 'Results Copilot', desc: 'Chat with your survey data in plain language. Ask "What did respondents in Riyadh say about delivery speed?" and get an instant, cited answer.' },
    ],
    audiences: [
      { title: 'Government & Public Entities', desc: 'Ministries, municipalities and regulatory bodies measuring citizen satisfaction and service quality.' },
      { title: 'Enterprise Organizations', desc: 'Banks, telecoms and retail — continuous CSAT, NPS and CES measurement across every touchpoint.' },
      { title: 'Education & Healthcare', desc: 'Schools, universities and clinics running assessments, event feedback and patient-experience surveys.' },
    ],
    back_link: 'Back to CX Solutions',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'Knowledge Base', href: '/products/knowledge-base' },
      { label: 'AI Assistant', href: '/products/ai-assistant' },
    ],
  },
  ar: {
    stats: [
      { value: '12', label: 'نوع سؤال' },
      { value: '6', label: 'قنوات توزيع' },
      { value: 'AI', label: 'بناء وتحليل' },
      { value: 'AR + EN', label: 'ثنائي اللغة، جاهز للـ RTL' },
    ],
    pillars: [
      {
        title: 'أنشئ',
        color: 'bg-brand-primary/[0.06] border-brand-primary/10',
        iconColor: 'text-brand-primary',
        items: [
          'منشئ ذكاء اصطناعي — صِف استطلاعك بجملة واحدة',
          'استيراد من مستند موجود',
          '12 نوع سؤال (تقييم وNPS ومصفوفة ونص مفتوح والمزيد)',
          'تفريع منطقي وشروط تخطي',
          'ثنائي اللغة — العربية والإنجليزية في استطلاع واحد',
        ],
      },
      {
        title: 'وزِّع',
        color: 'bg-brand-secondary/[0.05] border-brand-secondary/10',
        iconColor: 'text-brand-secondary',
        items: [
          'تضمين ويب ورابط مستقل',
          'بريد إلكتروني (محلي أو عبر مزودك)',
          'رسائل SMS',
          'رمز QR (طباعة ورقمي وداخل التطبيق)',
          'قنوات التواصل الاجتماعي',
          'وكيل مباشر (مُشغَّل تلقائياً بعد الحل)',
        ],
      },
      {
        title: 'حلِّل',
        color: 'bg-brand-orange/[0.06] border-brand-orange/10',
        iconColor: 'text-brand-orange',
        items: [
          'لوحات بيانات لحظية ومخططات اتجاهات',
          'جداول متقاطعة بأي بُعد',
          'تحليل ذكاء اصطناعي للنصوص — مواضيع ومشاعر من الردود المفتوحة',
          'مساعد النتائج — تحدث مع بيانات استطلاعك',
          'تصدير إلى Excel وPDF وأدوات BI',
        ],
      },
    ],
    features: [
      { name: 'منشئ استطلاع بالذكاء الاصطناعي', desc: 'صِف هدف استطلاعك بجملة واحدة ودع الذكاء الاصطناعي يولِّد الأسئلة والمنطق واللغة في ثوانٍ. أو استورد المحتوى من مستند موجود.' },
      { name: '12 نوع سؤال', desc: 'اختيار فردي، اختيار متعدد، مقياس تقييم، NPS، CSAT، CES، مصفوفة، ترتيب، نص مفتوح، رفع ملف، رقم وتاريخ.' },
      { name: 'توزيع متعدد القنوات', desc: 'تضمين ويب، بريد إلكتروني، SMS، رمز QR، وسائل التواصل الاجتماعي وقنوات الوكيل المباشر — الوصول للمستجيبين أينما كانوا.' },
      { name: 'تحليلات متقدمة', desc: 'لوحات بيانات لحظية وتتبع معدل الاستجابة والجداول المتقاطعة عبر أي تركيبة ديموغرافية أو استجابة.' },
      { name: 'تحليل ذكاء اصطناعي للنصوص', desc: 'يكشف تلقائياً عن المواضيع المتكررة والمشاعر من الردود المفتوحة — بدون ترميز يدوي.' },
      { name: 'مساعد النتائج', desc: 'تحدث مع بيانات استطلاعك بلغة بسيطة. اسأل "ماذا قال المستجيبون في الرياض عن سرعة التوصيل؟" واحصل على إجابة فورية بمصادر.' },
    ],
    audiences: [
      { title: 'الجهات الحكومية والعامة', desc: 'الوزارات والبلديات والهيئات التنظيمية التي تقيس رضا المواطنين وجودة الخدمات.' },
      { title: 'المنظمات الكبرى', desc: 'البنوك والاتصالات والتجزئة — قياس مستمر للـ CSAT وNPS وCES عبر كل نقطة تواصل.' },
      { title: 'التعليم والرعاية الصحية', desc: 'المدارس والجامعات والعيادات التي تجري تقييمات واستطلاعات فعاليات وتجربة المريض.' },
    ],
    back_link: 'العودة إلى حلول تجربة العملاء',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'قاعدة المعرفة', href: '/products/knowledge-base' },
      { label: 'المساعد الذكي', href: '/products/ai-assistant' },
    ],
  },
};

export const SurveyPlatformContent: React.FC = () => {
  const { t, locale } = useI18n();
  const p = t.products_pages.survey_platform;
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pil, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
                className={`card p-7 border ${pil.color}`}
              >
                <div className={`w-12 h-12 rounded-[var(--radius-sm)] ${pil.color} flex items-center justify-center ${pil.iconColor} mb-5`}>
                  {pil.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-4">{pil.title}</h3>
                <ul className="space-y-2.5">
                  {pil.items.map((item, j) => (
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
