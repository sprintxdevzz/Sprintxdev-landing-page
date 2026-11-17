'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'ar';

const translations = {
  en: {
    nav: {
      solutions: 'Solutions',
      cx_solutions: 'CX Solutions',
      enterprise: 'Enterprise Solutions',
      process: 'Process',
      stack: 'Stack',
      contact: 'Contact',
      contact_cta: 'Contact Us',
      products: {
        next_cx: 'Next CX',
        survey_platform: 'Survey Platform',
        knowledge_base: 'Knowledge Base',
        ai_assistant: 'AI Assistant',
      },
    },
    hero: {
      badge: 'AI-powered automation, ERP & CX platforms',
      h1_a: 'Automate. Optimize.',
      h1_b: 'Accelerate growth.',
      h1_c: '',
      subtitle:
        'We engineer intelligent systems that turn operational data into a competitive edge — from AI-powered CX platforms to enterprise ERP, CRM, and end-to-end workflow automation.',
      cta_primary: 'Book a demo',
      cta_secondary: 'Explore solutions',
      stat_1_val: '2–4 wks',
      stat_1_label: 'to first release',
      stat_2_val: '99.9%',
      stat_2_label: 'uptime SLA',
      stat_3_val: '24/7',
      stat_3_label: 'support & optimization',
    },
    dashboard: {
      title: 'Live CX Metrics',
      m1_val: '12.4K',
      m1_label: 'Tickets Today',
      m1_trend: '+23%',
      m2_val: '94.2%',
      m2_label: 'CSAT Score',
      m2_trend: '+4%',
      m3_val: '2.1s',
      m3_label: 'Avg Response',
      m3_trend: '−12%',
      ai_label: 'AI Resolution Rate',
      ai_value: '78% automated',
      channels: 'Channels Live',
    },
    capability_marquee: {
      items: [
        'Workflow Automation',
        'Enterprise ERP',
        'Microsoft CRM',
        'AI Decision Routing',
        'RPA',
        'Power BI Integration',
        'Document AI & OCR',
        'Survey Platform',
        'Predictive Analytics',
        'Knowledge Base',
        'Custom Integrations',
        '24/7 Optimization',
      ],
    },
    solutions_section: {
      eyebrow: 'Our solutions',
      h2: 'Built for modern',
      h2_gradient: 'enterprise complexity',
      subtitle:
        'Two integrated solutions designed to work together: AI-powered CX intelligence and strategic enterprise performance.',
      key_benefits: 'Key benefits',
      learn_more: 'Learn more',
    },
    methodology: {
      eyebrow: 'The Next Automation methodology',
      h2: 'A streamlined approach to engineering high-velocity digital systems',
      subtitle:
        'Building on the proven Sprint methodology, we deliver intelligent solutions through discovery, design, implementation, and optimization.',
      steps: [
        {
          title: 'Analysis',
          desc: 'We identify your core challenges and map a clear path to resolution — understanding your business, data flows, and operational bottlenecks.',
        },
        {
          title: 'Design',
          desc: 'Tailored blueprints that prioritize user experience and system speed, designed for your industry requirements and future growth.',
        },
        {
          title: 'Implementation',
          desc: 'Clean execution with minimal impact on current operations — real-time progress tracking and transparent delivery milestones.',
        },
        {
          title: 'Optimization',
          desc: 'Continuous monitoring and support via our responsive ticketing system, ensuring sustained performance and reliability.',
        },
      ],
    },
    edge: {
      eyebrow: 'Why teams choose us',
      h2: 'Built to ship, engineered to last',
      items: [
        {
          title: 'Real-time collaboration',
          desc: 'Review progress and approve deliverables through our integrated platform. Complete visibility at every stage of your project.',
        },
        {
          title: 'Performance focus',
          desc: 'We optimize for speed, reducing staff training periods and increasing delivery velocity. Maximum ROI with minimum disruption.',
        },
        {
          title: 'Reliability & support',
          desc: 'Dedicated maintenance ensures your systems stay online, updated, and performing — 99.9% uptime with responsive support teams.',
        },
      ],
    },
    partners: {
      eyebrow: 'Partners & clients',
      h2: 'Trusted by the organizations',
      h2_gradient: "shaping what's next",
      subtitle:
        "From government authorities and national enterprises to the world's leading cloud and AI providers — we partner with organizations that set the standard.",
      clients_label: 'Clients & organizations',
      tech_label: 'Technology & delivery partners',
      trust_badge: 'Enterprise-grade delivery, trusted at national scale',
    },
    technologies: {
      eyebrow: 'Our technology stack',
      h2_start: 'Built on',
      h2_highlight: 'enterprise-grade',
      h2_end: 'technology',
      description:
        'We accelerate your success using the most modern tools — engineered by expert teams to ensure best practices and production-grade quality.',
      expert_badge: 'Expert engineering team',
      footer1:
        "At Next Automation, we don't cut corners. We leverage industry-leading technology — combined with expert engineering — to design and build solutions that scale, perform, and last.",
      footer2:
        'Every implementation is grounded in proven best practices, not trends or shortcuts.',
    },
    contact: {
      eyebrow: 'Get in touch',
      h2_start: "Let's build your",
      h2_highlight: 'next big thing',
      subtitle:
        'Tell us about your project and our team will get back to you within one business day — no obligations, no sales pressure.',
      email_label: 'Email us',
      phone_label: 'Call us',
      response_label: 'Response time',
      response_value: 'Within 24 hours',
      field_name: 'Name',
      field_email: 'Email',
      field_company: 'Company',
      field_phone: 'Phone',
      field_message: 'Message',
      placeholder_name: 'Jane Doe',
      placeholder_email: 'jane@company.com',
      placeholder_company: 'Acme Inc.',
      placeholder_phone: '+966 …',
      placeholder_message: 'Tell us about your project…',
      submit: 'Send message',
      sending: 'Sending…',
      privacy: "We'll never share your details. Required fields are marked",
      success_title: 'Message sent',
      success_desc: 'Thanks for reaching out — our team will get back to you within 24 hours.',
      success_reset: 'Send another message',
      err_name: 'Please enter your name.',
      err_email_required: 'Please enter your email.',
      err_email_invalid: 'Enter a valid email address.',
      err_phone: 'Enter a valid phone number.',
      err_server_default: 'Something went wrong. Please try again.',
      err_connection: 'Failed to connect. Check your connection and try again.',
    },
    footer: {
      tagline:
        'Engineering high-velocity digital infrastructure — from AI-powered platforms to enterprise ERP, CRM, and end-to-end automation.',
      section_contact: 'Get in touch',
      section_solutions: 'Solutions',
      section_company: 'Company',
      copyright: '© 2026 Next Automation. All rights reserved.',
      start_project: 'Start a project',
      location: 'Saudi Arabia',
      solutions_links: ['CX Solutions', 'Enterprise Solutions', 'Automation'],
      company_links: ['Methodology', 'FAQ', 'Contact'],
    },
  },
  ar: {
    nav: {
      solutions: 'الحلول',
      cx_solutions: 'حلول تجربة العملاء',
      enterprise: 'حلول المؤسسات',
      process: 'المنهجية',
      stack: 'التقنيات',
      contact: 'تواصل',
      contact_cta: 'تواصل معنا',
      products: {
        next_cx: 'نكست CX',
        survey_platform: 'منصة الاستطلاع',
        knowledge_base: 'قاعدة المعرفة',
        ai_assistant: 'المساعد الذكي',
      },
    },
    hero: {
      badge: 'أتمتة ذكية • ERP • منصات تجربة العملاء',
      h1_a: 'أتمتة. تحسين.',
      h1_b: 'تسريع النمو.',
      h1_c: '',
      subtitle:
        'نهندس أنظمة ذكية تحوّل بياناتك التشغيلية إلى ميزة تنافسية — من منصات تجربة العملاء بالذكاء الاصطناعي إلى أنظمة ERP وCRM وأتمتة سير العمل الشاملة.',
      cta_primary: 'احجز عرضاً',
      cta_secondary: 'استكشف الحلول',
      stat_1_val: '٢–٤ أسابيع',
      stat_1_label: 'حتى أول إصدار',
      stat_2_val: '99.9%',
      stat_2_label: 'اتفاقية مستوى الخدمة',
      stat_3_val: '24/7',
      stat_3_label: 'دعم وتحسين مستمر',
    },
    dashboard: {
      title: 'مقاييس CX المباشرة',
      m1_val: '12.4K',
      m1_label: 'تذاكر اليوم',
      m1_trend: '+23%',
      m2_val: '94.2%',
      m2_label: 'معدل رضا العملاء',
      m2_trend: '+4%',
      m3_val: '2.1s',
      m3_label: 'متوسط وقت الاستجابة',
      m3_trend: '−12%',
      ai_label: 'معدل حل الذكاء الاصطناعي',
      ai_value: '٧٨٪ أتمتة',
      channels: 'القنوات النشطة',
    },
    capability_marquee: {
      items: [
        'أتمتة سير العمل',
        'تخطيط موارد المؤسسة',
        'مايكروسوفت CRM',
        'توجيه القرارات بالذكاء الاصطناعي',
        'أتمتة العمليات الروبوتية',
        'تكامل Power BI',
        'ذكاء الوثائق والـ OCR',
        'منصة الاستطلاع',
        'التحليلات التنبؤية',
        'قاعدة المعرفة',
        'تكاملات مخصصة',
        'تحسين مستمر 24/7',
      ],
    },
    solutions_section: {
      eyebrow: 'حلولنا',
      h2: 'مبني لتعقيد',
      h2_gradient: 'المؤسسات الحديثة',
      subtitle:
        'حلان متكاملان مصمّمان للعمل معاً: ذكاء تجربة عملاء مدعوم بالذكاء الاصطناعي وأداء مؤسسي استراتيجي.',
      key_benefits: 'الفوائد الرئيسية',
      learn_more: 'اعرف أكثر',
    },
    methodology: {
      eyebrow: 'منهجية نكست أوتوميشن',
      h2: 'نهج متكامل لهندسة أنظمة رقمية عالية السرعة',
      subtitle:
        'بناءً على منهجية سبرينت المجربة، نقدّم حلولاً ذكية عبر مراحل الاكتشاف والتصميم والتنفيذ والتحسين.',
      steps: [
        {
          title: 'التحليل',
          desc: 'نحدد تحدياتك الجوهرية ونرسم مساراً واضحاً للحل — بفهم عميق لأعمالك وتدفقات بياناتك وعقبات عملياتك.',
        },
        {
          title: 'التصميم',
          desc: 'مخططات مخصصة تُولي الأولوية لتجربة المستخدم وسرعة النظام، مصمّمة لمتطلبات قطاعك ونموك المستقبلي.',
        },
        {
          title: 'التنفيذ',
          desc: 'تنفيذ نظيف بأدنى تأثير على عملياتك الحالية — مع تتبع مباشر للتقدم ومعالم تسليم شفافة.',
        },
        {
          title: 'التحسين',
          desc: 'مراقبة ودعم مستمران عبر نظام تذاكر متجاوب، لضمان أداء موثوق ومستدام.',
        },
      ],
    },
    edge: {
      eyebrow: 'لماذا يختارنا الفرق',
      h2: 'مبني للإنجاز، مهندس للديمومة',
      items: [
        {
          title: 'تعاون فوري',
          desc: 'راجع التقدم واعتمد المخرجات عبر منصتنا المتكاملة. رؤية كاملة في كل مرحلة من مراحل مشروعك.',
        },
        {
          title: 'تركيز على الأداء',
          desc: 'نُحسّن السرعة، ونقلّص فترات تدريب الموظفين، ونرفع سرعة التسليم. أقصى عائد على الاستثمار بأدنى تعطل.',
        },
        {
          title: 'موثوقية ودعم',
          desc: 'صيانة مخصصة تبقي أنظمتك نشطة ومحدّثة وتعمل بكفاءة — اتفاقية 99.9% uptime مع فرق دعم متجاوبة.',
        },
      ],
    },
    partners: {
      eyebrow: 'الشركاء والعملاء',
      h2: 'تثق بنا المنظمات',
      h2_gradient: 'التي تصنع المستقبل',
      subtitle:
        'من الجهات الحكومية والمؤسسات الوطنية إلى كبرى مزودي الحوسبة السحابية والذكاء الاصطناعي في العالم — نتشارك مع منظمات تُحدد المعايير.',
      clients_label: 'العملاء والمنظمات',
      tech_label: 'الشركاء التقنيون والتنفيذيون',
      trust_badge: 'تسليم على مستوى المؤسسات، موثوق على النطاق الوطني',
    },
    technologies: {
      eyebrow: 'مكدس تقنياتنا',
      h2_start: 'مبني على',
      h2_highlight: 'تقنيات المؤسسات',
      h2_end: '',
      description:
        'نسرّع نجاحك باستخدام أحدث الأدوات — مهندسة من قِبل فرق متخصصة لضمان أفضل الممارسات وجودة الإنتاج.',
      expert_badge: 'فريق هندسي متخصص',
      footer1:
        'في نكست أوتوميشن، لا نتهاون بالجودة. نستثمر في التقنيات الرائدة في الصناعة — مقترنةً بهندسة متخصصة — لتصميم وبناء حلول تتوسع وتؤدي وتدوم.',
      footer2: 'كل تنفيذ مبني على أفضل الممارسات المثبتة، لا على الاتجاهات والاختصارات.',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      h2_start: 'لنبني معاً',
      h2_highlight: 'مشروعك الكبير القادم',
      subtitle:
        'أخبرنا عن مشروعك وسيتواصل معك فريقنا خلال يوم عمل واحد — دون التزامات أو ضغوط مبيعات.',
      email_label: 'راسلنا',
      phone_label: 'اتصل بنا',
      response_label: 'وقت الاستجابة',
      response_value: 'خلال 24 ساعة',
      field_name: 'الاسم',
      field_email: 'البريد الإلكتروني',
      field_company: 'الشركة',
      field_phone: 'رقم الهاتف',
      field_message: 'الرسالة',
      placeholder_name: 'محمد عبدالله',
      placeholder_email: 'mohammed@company.com',
      placeholder_company: 'شركة المثال',
      placeholder_phone: '+966 …',
      placeholder_message: 'أخبرنا عن مشروعك...',
      submit: 'أرسل رسالة',
      sending: 'جارٍ الإرسال...',
      privacy: 'لن نشارك بياناتك مع أي جهة. الحقول المطلوبة مُشار إليها',
      success_title: 'تم إرسال الرسالة',
      success_desc: 'شكراً لتواصلك — سيرد عليك فريقنا خلال 24 ساعة.',
      success_reset: 'أرسل رسالة أخرى',
      err_name: 'يرجى إدخال اسمك.',
      err_email_required: 'يرجى إدخال بريدك الإلكتروني.',
      err_email_invalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      err_phone: 'يرجى إدخال رقم هاتف صحيح.',
      err_server_default: 'حدث خطأ ما. يرجى المحاولة مجدداً.',
      err_connection: 'فشل الاتصال. تحقق من اتصالك وحاول مجدداً.',
    },
    footer: {
      tagline:
        'نهندس بنية رقمية عالية السرعة — من منصات الذكاء الاصطناعي إلى أنظمة ERP وCRM وأتمتة العمليات الشاملة.',
      section_contact: 'تواصل معنا',
      section_solutions: 'الحلول',
      section_company: 'الشركة',
      copyright: '© 2026 نكست أوتوميشن. جميع الحقوق محفوظة.',
      start_project: 'ابدأ مشروعاً',
      location: 'المملكة العربية السعودية',
      solutions_links: ['حلول تجربة العملاء', 'حلول المؤسسات', 'الأتمتة'],
      company_links: ['المنهجية', 'الأسئلة الشائعة', 'تواصل'],
    },
  },
} as const;

export type T = typeof translations.en;

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: T;
  isRtl: boolean;
}

const I18nContext = createContext<I18nCtx>({
  locale: 'en',
  setLocale: () => {},
  t: translations.en,
  isRtl: false,
});

export const useI18n = () => useContext(I18nContext);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nxtaut_locale') as Locale | null;
      if (stored === 'ar' || stored === 'en') setLocaleState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('nxtaut_locale', locale);
    } catch {}
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale: setLocaleState,
        t: translations[locale] as unknown as T,
        isRtl: locale === 'ar',
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
