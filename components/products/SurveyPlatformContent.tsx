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
import { ProductShowcase } from './ProductShowcase';

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
    tour: {
      eyebrow: 'Product tour',
      h2_a: 'See Qyas',
      h2_b: 'in action',
      note: 'Real product screens · sample data',
      items: [
        { title: 'Create with AI', desc: 'Describe the survey in one sentence, or upload a document, and AI drafts the whole thing in English or Arabic.', image: '01-create-ai-prompt' },
        { title: '12 question types', desc: 'Rating, choice, ranking, grids, file upload and more, with a live preview as you build.', image: '21-question-types' },
        { title: 'One survey, every channel', desc: 'Separate links for web, email, SMS, QR, social and live agent, each tracking its own responses.', image: '30-distributions' },
        { title: 'Arabic and English', desc: 'Add a language and auto-translate the whole survey with AI in one click, then fine-tune any string.', image: '07-auto-translate' },
        { title: 'Results by channel', desc: 'Responses, completion rate and average time at a glance, broken down by the channel they came from.', image: '40-results-overview' },
        { title: 'Ask your results', desc: 'Ask the AI copilot a question about your data and get a grounded answer, with suggested follow-ups.', image: '04-copilot-answer' },
      ],
    },
    back_link: 'Back to CX Solutions',
    related: [
      { label: 'Next CX', href: '/products/next-cx' },
      { label: 'Knowledge Base', href: '/products/knowledge-base' },
      { label: 'AI Assistant', href: '/products/ai-assistant' },
    ],
  },
  ar: {
    stats: [
      { value: '12', label: 'نوعاً من الأسئلة' },
      { value: '6', label: 'قنوات للتوزيع' },
      { value: 'AI', label: 'للإنشاء والتحليل' },
      { value: 'AR + EN', label: 'ثنائية اللغة بالكامل' },
    ],
    pillars: [
      {
        title: 'أنشئ',
        color: 'bg-brand-primary/[0.06] border-brand-primary/10',
        iconColor: 'text-brand-primary',
        items: [
          'إنشاء بالذكاء الاصطناعي: صِف استبيانك بجملة واحدة',
          'الاستيراد من مستند جاهز',
          '12 نوعاً من الأسئلة (تقييم، وNPS، ومصفوفة، ونص مفتوح، وغيرها)',
          'منطق تفرّع وشروط تخطٍّ للأسئلة',
          'ثنائي اللغة: العربية والإنجليزية في استبيان واحد',
        ],
      },
      {
        title: 'وزِّع',
        color: 'bg-brand-secondary/[0.05] border-brand-secondary/10',
        iconColor: 'text-brand-secondary',
        items: [
          'تضمين في موقعك أو رابط مستقل',
          'البريد الإلكتروني (مباشرةً أو عبر مزوّد البريد لديك)',
          'الرسائل النصية SMS',
          'رمز QR (مطبوع، أو رقمي، أو داخل التطبيق)',
          'منصات التواصل الاجتماعي',
          'موظف خدمة العملاء (يُرسل تلقائياً بعد حل الطلب)',
        ],
      },
      {
        title: 'حلِّل',
        color: 'bg-brand-orange/[0.06] border-brand-orange/10',
        iconColor: 'text-brand-orange',
        items: [
          'لوحات معلومات لحظية ورسوم بيانية للاتجاهات',
          'تحليل متقاطع حسب أي معيار',
          'تحليل النصوص بالذكاء الاصطناعي: استخراج المحاور والانطباعات من الإجابات المفتوحة',
          'مساعد النتائج: حاور بيانات استبيانك',
          'التصدير إلى Excel وPDF وأدوات ذكاء الأعمال',
        ],
      },
    ],
    features: [
      { name: 'إنشاء الاستبيانات بالذكاء الاصطناعي', desc: 'صِف هدف استبيانك بجملة واحدة، ودع الذكاء الاصطناعي يصيغ الأسئلة والمنطق واللغة في ثوانٍ، أو استورد المحتوى من مستند جاهز.' },
      { name: '12 نوعاً من الأسئلة', desc: 'اختيار واحد، واختيار متعدد، ومقياس تقييم، وNPS، وCSAT، وCES، ومصفوفة، وترتيب، ونص مفتوح، ورفع ملف، ورقم، وتاريخ.' },
      { name: 'توزيع عبر جميع القنوات', desc: 'التضمين في الموقع، والبريد الإلكتروني، والرسائل النصية، ورمز QR، ومنصات التواصل الاجتماعي، وموظفو خدمة العملاء؛ لتصل إلى المشاركين أينما كانوا.' },
      { name: 'تحليلات متقدمة', desc: 'لوحات معلومات لحظية، ومتابعة لمعدلات الاستجابة، وتحليل متقاطع حسب أي فئة ديموغرافية أو مجموعة إجابات.' },
      { name: 'تحليل النصوص بالذكاء الاصطناعي', desc: 'يستخرج تلقائياً المحاور المتكررة والانطباعات من الإجابات المفتوحة، دون أي تصنيف يدوي.' },
      { name: 'مساعد النتائج', desc: 'اسأل بيانات استبيانك بلغة طبيعية، مثل: "ماذا قال المشاركون في الرياض عن سرعة التوصيل؟"، واحصل على إجابة فورية موثّقة بالمصادر.' },
    ],
    audiences: [
      { title: 'الجهات الحكومية والعامة', desc: 'الوزارات والأمانات والهيئات التنظيمية التي تقيس رضا المستفيدين وجودة الخدمات.' },
      { title: 'الشركات الكبرى', desc: 'البنوك وشركات الاتصالات والتجزئة التي تقيس CSAT وNPS وCES باستمرار في جميع نقاط التواصل مع العملاء.' },
      { title: 'التعليم والرعاية الصحية', desc: 'المدارس والجامعات والعيادات التي تُجري التقييمات، واستطلاعات آراء الفعاليات، واستبيانات تجربة المرضى.' },
    ],
    tour: {
      eyebrow: 'جولة في المنصة',
      h2_a: 'شاهد قياس',
      h2_b: 'على أرض الواقع',
      note: 'شاشات حقيقية من المنصة · بيانات تجريبية',
      items: [
        { title: 'أنشئ بالذكاء الاصطناعي', desc: 'صِف الاستبيان بجملة واحدة أو ارفع مستنداً، وسيُعدّ الذكاء الاصطناعي مسودته كاملة بالعربية أو الإنجليزية.', image: '01-create-ai-prompt' },
        { title: '12 نوعاً من الأسئلة', desc: 'تقييم، واختيار، وترتيب، وجداول، ورفع ملفات وغيرها، مع معاينة مباشرة أثناء الإنشاء.', image: '21-question-types' },
        { title: 'استبيان واحد لكل القنوات', desc: 'رابط مستقل لكل قناة: الموقع، والبريد، والرسائل النصية، ورمز QR، ومنصات التواصل، وموظفي خدمة العملاء، مع تتبّع ردود كل قناة على حدة.', image: '30-distributions' },
        { title: 'بالعربية والإنجليزية', desc: 'أضف لغة جديدة وترجم الاستبيان كاملاً بالذكاء الاصطناعي بنقرة واحدة، ثم عدّل أي عبارة كما تشاء.', image: '07-auto-translate' },
        { title: 'النتائج حسب القناة', desc: 'عدد الردود، ونسبة الإكمال، ومتوسط وقت الإجابة في لمحة واحدة، مصنّفة حسب القناة التي وردت منها.', image: '40-results-overview' },
        { title: 'اسأل نتائجك', desc: 'اطرح على المساعد الذكي أي سؤال عن بياناتك، واحصل على إجابة مبنية عليها، مع أسئلة مقترحة للمتابعة.', image: '04-copilot-answer' },
      ],
    },
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

      <ProductShowcase
        basePath="/products/qyas"
        url="survey.nxtaut.com"
        className="bg-brand-light"
        {...d.tour}
      />

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
