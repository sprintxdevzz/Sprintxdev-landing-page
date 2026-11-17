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
  Headphones,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const FEATURE_ICONS = [
  <Globe size={20} key="globe" />,
  <Bot size={20} key="bot" />,
  <Phone size={20} key="phone" />,
  <Headphones size={20} key="headphones" />,
  <MessageSquare size={20} key="msg" />,
  <ShieldCheck size={20} key="shield" />,
];

const AUDIENCE_ICONS = [
  <BarChart2 size={22} key="chart" />,
  <Users size={22} key="users" />,
  <Zap size={22} key="zap" />,
];

const DATA = {
  en: {
    stats: [
      { value: '12+', label: 'channels in one inbox' },
      { value: 'AI', label: 'agents, Arabic-first' },
      { value: 'KSA', label: 'hosted, PDPL-ready' },
      { value: '24/7', label: 'zero-fatigue coverage' },
    ],
    steps: [
      { n: '01', title: 'Customer contacts on any channel', desc: 'WhatsApp, voice, web chat, email, SMS, Instagram or Facebook — one unified inbox, one customer record.' },
      { n: '02', title: 'AI agent responds instantly', desc: 'The AI reads from your approved knowledge base and answers with citations — in Arabic, English or any Saudi dialect.' },
      { n: '03', title: 'Seamless human handover', desc: 'When a human is needed, the agent gets the full conversation history and AI-suggested replies in real time.' },
      { n: '04', title: 'Survey auto-triggered after resolution', desc: 'CSAT, NPS or CES sent automatically on the channel the customer used. Response rates up 35% vs. email blasts.' },
      { n: '05', title: 'Closed loop — quality and knowledge', desc: "Low scores open cases automatically. Questions the AI couldn't answer create knowledge-base drafts for approval." },
    ],
    features: [
      { name: 'Omnichannel Inbox', desc: 'WhatsApp, voice, web chat, email, SMS, Instagram and Facebook — all in one place. One ticket, one history.' },
      { name: 'AI Chat Agent', desc: 'Handles tickets end-to-end, 24/7, citing sources from your approved knowledge base. Escalates only when needed.' },
      { name: 'AI Voice Agent', desc: 'Answers calls in every Saudi dialect. Full NLU, intent detection and call completion without a human on the line.' },
      { name: 'Agent Assist', desc: 'While an agent talks or types, AI surfaces the best answer, next action and upsell in real time.' },
      { name: 'Auto-triggered Surveys', desc: 'CSAT, NPS and CES sent on the right channel at the right moment — with AI analysis of open-text feedback.' },
      { name: 'Quality & Compliance', desc: 'Every interaction auto-scored. Coaching plans built from scores. PDPL-aligned, hosted in the Kingdom.' },
    ],
    audiences: [
      { title: 'Saudi Banks', desc: 'Tier-1 and tier-2 banks managing high-volume contact centres with strict SAMA and PDPL compliance requirements.' },
      { title: 'Government Entities', desc: 'Ministries and government organisations serving Arabic-speaking citizens across digital and voice channels.' },
      { title: 'Large Enterprises', desc: 'Telecoms, insurance, healthcare and retail — any regulated enterprise where CX quality directly drives revenue.' },
    ],
    benefits: [
      'One platform — one customer record across all channels',
      'AI agents answer only from your approved knowledge base',
      'Arabic-first with every Saudi dialect supported',
      'Hosted in Saudi Arabia — sovereign deployment option',
      'PDPL-aligned consent ledger and data residency',
      '700+ integrations with your existing stack',
    ],
    back_link: 'Back to CX Solutions',
    related: [
      { label: 'Knowledge Base', href: '/products/knowledge-base' },
      { label: 'Survey Platform', href: '/products/survey-platform' },
      { label: 'AI Assistant', href: '/products/ai-assistant' },
    ],
  },
  ar: {
    stats: [
      { value: '12+', label: 'قناة في صندوق واحد' },
      { value: 'AI', label: 'وكلاء، الأول عربياً' },
      { value: 'KSA', label: 'مستضاف، جاهز لـ PDPL' },
      { value: '24/7', label: 'تغطية بلا توقف' },
    ],
    steps: [
      { n: '01', title: 'العميل يتواصل من أي قناة', desc: 'واتساب والصوت والويب والبريد الإلكتروني والرسائل والإنستغرام والفيسبوك — صندوق وارد موحد وسجل عميل واحد.' },
      { n: '02', title: 'الوكيل الذكي يرد فوراً', desc: 'يقرأ الذكاء الاصطناعي من قاعدة معرفتك المعتمدة ويجيب بالمصادر — بالعربية أو الإنجليزية أو أي لهجة سعودية.' },
      { n: '03', title: 'إحالة سلسة للإنسان', desc: 'عند الحاجة لإنسان، يحصل الوكيل على كامل سجل المحادثة والردود المقترحة بالذكاء الاصطناعي لحظياً.' },
      { n: '04', title: 'استطلاع تلقائي بعد الحل', desc: 'CSAT وNPS وCES تُرسل تلقائياً على القناة ذاتها. معدلات استجابة أعلى بـ35% عن البريد الإلكتروني.' },
      { n: '05', title: 'الحلقة المغلقة — الجودة والمعرفة', desc: 'الدرجات المنخفضة تفتح حالات تلقائياً. الأسئلة التي لم يجب عنها الذكاء الاصطناعي تُنشئ مسودات لقاعدة المعرفة للمراجعة.' },
    ],
    features: [
      { name: 'صندوق وارد متعدد القنوات', desc: 'واتساب والصوت والويب والبريد والرسائل والإنستغرام والفيسبوك — كل شيء في مكان واحد. تذكرة واحدة، سجل واحد.' },
      { name: 'وكيل دردشة ذكي', desc: 'يتعامل مع التذاكر من البداية للنهاية على مدار الساعة، مستشهداً بمصادر من قاعدة معرفتك. يُصعّد عند الحاجة فقط.' },
      { name: 'وكيل صوتي ذكي', desc: 'يرد على المكالمات بكل لهجة سعودية. فهم لغة طبيعي كامل وكشف نوايا وإنهاء مكالمات بلا إنسان.' },
      { name: 'مساعد الوكيل', desc: 'بينما يتحدث الوكيل أو يكتب، يعرض الذكاء الاصطناعي أفضل إجابة والإجراء التالي وفرصة البيع لحظياً.' },
      { name: 'استطلاعات تلقائية', desc: 'CSAT وNPS وCES تُرسل على القناة الصحيحة في الوقت الصحيح — مع تحليل ذكاء اصطناعي للردود المفتوحة.' },
      { name: 'الجودة والامتثال', desc: 'كل تفاعل مُقيَّم تلقائياً. خطط تدريب مبنية على الدرجات. متوافق مع PDPL ومستضاف في المملكة.' },
    ],
    audiences: [
      { title: 'البنوك السعودية', desc: 'بنوك الدرجة الأولى والثانية التي تدير مراكز اتصال عالية الحجم مع متطلبات امتثال صارمة لـ SAMA وPDPL.' },
      { title: 'الجهات الحكومية', desc: 'الوزارات والمنظمات الحكومية التي تخدم المواطنين الناطقين بالعربية عبر القنوات الرقمية والصوتية.' },
      { title: 'كبرى الشركات', desc: 'الاتصالات والتأمين والرعاية الصحية والتجزئة — أي مؤسسة منظَّمة تؤثر فيها جودة تجربة العملاء مباشرة على الإيرادات.' },
    ],
    benefits: [
      'منصة واحدة — سجل عميل واحد عبر كل القنوات',
      'وكلاء ذكاء اصطناعي يجيبون فقط من قاعدة معرفتك المعتمدة',
      'الأول عربياً مع دعم كل اللهجات السعودية',
      'مستضاف في المملكة العربية السعودية — خيار النشر السيادي',
      'سجل موافقة PDPL وإقامة البيانات',
      '700+ تكامل مع منظومتك الحالية',
    ],
    back_link: 'العودة إلى حلول تجربة العملاء',
    related: [
      { label: 'قاعدة المعرفة', href: '/products/knowledge-base' },
      { label: 'منصة الاستطلاع', href: '/products/survey-platform' },
      { label: 'المساعد الذكي', href: '/products/ai-assistant' },
    ],
  },
};

export const NextCXContent: React.FC = () => {
  const { t, locale } = useI18n();
  const p = t.products_pages.next_cx;
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 card p-8"
          >
            <p className="eyebrow text-brand-primary mb-6">{p.benefits_eyebrow}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {d.benefits.map((b, i) => (
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
          <ArrowRight size={14} className="rotate-180" /> {d.back_link}
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-wrap gap-3">
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
