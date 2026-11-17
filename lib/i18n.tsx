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
    solutions_cards: [
      {
        title: 'CX Solutions',
        tagline: 'Powered by Next CX',
        description:
          'From the first WhatsApp message to the follow-up survey — every channel, agent and insight runs on Next CX, one AI-powered platform fluent in Arabic, English and every Saudi dialect.',
        products: [
          { name: 'Next CX', tagline: 'Omnichannel CX Platform', description: 'One inbox for every channel — WhatsApp, voice, web chat, email and more — with AI agents that answer from your approved knowledge base.' },
          { name: 'Razqora', tagline: 'Knowledge Base System', description: 'A bilingual knowledge base where employees find correct, approved answers fast — with AI chat, approval workflows, and smart search.' },
          { name: 'Qyas', tagline: 'Survey Platform', description: 'Create surveys with AI in minutes, distribute across every channel, and turn responses into decisions with built-in AI insights.' },
          { name: 'Rafiq', tagline: 'AI Assistant', description: 'An embeddable AI chatbot that answers only from your approved content — bilingual, with one line of code and full control.' },
        ],
        sections: [],
        benefits: [
          'One platform — one customer record across all channels',
          'AI that answers only from your approved knowledge base',
          'Arabic-first with every Saudi dialect supported',
          'Hosted in Saudi Arabia — sovereign deployment option',
          'PDPL-aligned consent ledger and data residency',
        ],
        outcome_label: 'Outcome —',
      },
      {
        title: 'Enterprise Solutions',
        tagline: 'Every layer, structured for scale.',
        description:
          'Whatever you run today, we customize it, implement proven platforms, or build exactly what you need — then connect it to your CX and automation.',
        products: [],
        sections: [
          {
            name: 'Strategy & Performance',
            features: [
              { label: 'Automated KPI Frameworks', desc: 'Link individual output directly to strategy with real-time tracking.' },
              { label: 'Goal Cascading', desc: 'OKRs from organization to individual — everyone aligned to the same north star.' },
              { label: 'Vision 2030 Alignment', desc: 'Map every KPI to national and entity strategy requirements.' },
              { label: 'Executive Dashboards', desc: 'Live reporting in full Arabic and English — no more waiting for weekly reports.' },
            ],
            outcome: 'Strategic reporting cycle cut from 3 weeks to real-time — leadership tracks OKR attainment continuously.',
          },
          {
            name: 'Governance, Risk & Compliance',
            features: [
              { label: 'One GRC Platform', desc: 'Governance, risk and compliance managed in one place.' },
              { label: 'Saudi Frameworks', desc: 'NCA ECC · SAMA CSF · PDPL · ISO 27001 — certified compliance.' },
              { label: 'Enterprise Risk & Audit', desc: 'Identify, assess and track every risk across your organization.' },
              { label: 'Audit-Ready Reporting', desc: 'Evidence and reports always up to date, ready when regulators ask.' },
            ],
            outcome: '',
          },
          {
            name: 'CRM, ERP & Workplace',
            features: [
              { label: 'CRM', desc: 'Dynamics 365 · Salesforce · Zoho · HubSpot — with custom logic and 360° view.' },
              { label: 'ERP', desc: 'Finance, HR, inventory and procurement — fitted to how you work.' },
              { label: 'Workplace', desc: 'Visitor management and attendance — connected to your broader systems.' },
              { label: 'Built Your Way', desc: 'Customize what you have, implement proven platforms, or build something new.' },
            ],
            outcome: '-25% shorter sales cycle, 90%+ forecast accuracy, and real-time strategic reporting down from 3 weeks.',
          },
        ],
        benefits: [
          'Vision 2030 aligned — NCA · SAMA · PDPL · ISO 27001',
          'Microsoft certified team — Dynamics 365 & Power BI',
          'Trusted by Saudi integrators: Ejada & BustanTech',
          'Dedicated maintenance & support with agreed SLAs',
        ],
        outcome_label: 'Outcome —',
      },
    ],
    cta: {
      eyebrow: 'Ready to ship?',
      h2: "Let's build your next big thing",
      subtitle: 'Book a demo and our team will get back to you within 24 hours.',
      cta: 'Book a demo',
    },
    products_pages: {
      back_to_cx: 'Back to CX Solutions',
      next_cx: {
        eyebrow: 'CX Platform',
        h2_a: 'Unified platform. Every',
        h2_gradient: 'conversation.',
        subtitle: 'Answer every customer on every channel — WhatsApp, voice, web chat, email and more — from one AI-powered platform built for Saudi Arabia.',
        how_it_works: 'How it works',
        how_it_works_h2_a: 'The closed loop — from first message to',
        how_it_works_h2_b: 'continuous improvement',
        capabilities: 'Platform capabilities',
        capabilities_h2_a: 'Everything in',
        capabilities_h2_b: 'one system',
        who_eyebrow: "Who it's for",
        who_h2_a: 'Built for',
        who_h2_b: 'regulated enterprises',
        benefits_eyebrow: 'Key benefits',
      },
      knowledge_base: {
        eyebrow: 'Knowledge Base · Razqora',
        h2_a: 'One trusted place for every',
        h2_gradient: 'approved answer.',
        subtitle: 'A bilingual knowledge base where employees find correct answers fast — with AI chat, smart search, approval workflows, and content health tracking.',
        how_it_works: 'How it works',
        how_it_works_h2_a: 'Write once. Find instantly.',
        how_it_works_h2_b: 'Always approved.',
        capabilities: 'Capabilities',
        capabilities_h2_a: 'Everything a knowledge base',
        capabilities_h2_b: 'actually needs',
        access_eyebrow: 'Access control',
        access_h2_a: 'Five roles, one system,',
        access_h2_b: 'zero confusion',
        access_desc: 'Every user gets exactly the access their role requires — with department-level scoping so a finance author can only see finance content, and a support viewer can only read approved articles.',
        who_eyebrow: "Who it's for",
        who_h2_a: "Teams that can't afford",
        who_h2_b: 'wrong answers',
      },
      survey_platform: {
        eyebrow: 'Survey Platform · Qyas',
        h2_a: 'Create surveys with AI. Turn answers into',
        h2_gradient: 'decisions.',
        subtitle: 'A bilingual survey and feedback platform — build in minutes with AI, distribute across every channel, and analyze responses with built-in AI insights.',
        how_it_works: 'How it works',
        how_it_works_h2_a: 'Three steps from question to',
        how_it_works_h2_b: 'decision',
        capabilities: 'Platform features',
        capabilities_h2_a: 'Built for the entire',
        capabilities_h2_b: 'feedback lifecycle',
        who_eyebrow: "Who it's for",
        who_h2_a: 'Anywhere you need to',
        who_h2_b: 'listen and act',
      },
      ai_assistant: {
        eyebrow: 'AI Assistant · Rafiq',
        h2_a: 'Your companion for every',
        h2_gradient: 'answer.',
        subtitle: 'An AI assistant for your website that answers only from your approved knowledge base — bilingual, embeddable with one line of code, and fully controlled.',
        how_it_works: 'How it works',
        how_it_works_h2_a: 'Answer. Embed. Control.',
        how_it_works_h2_b: 'And get better over time.',
        embed_eyebrow: 'One line of code',
        embed_h2_a: 'On your website in',
        embed_h2_b: 'minutes, not days',
        embed_desc: "Copy the embed code from the builder, paste it into your website's HTML, and Rafiq appears instantly. No backend, no API key management, no developer sprint required.",
        embed_code_note: "That's it. Rafiq is live on your website.",
        capabilities: 'Platform features',
        capabilities_h2_a: 'Manage every assistant',
        capabilities_h2_b: 'from one place',
        who_eyebrow: "Who it's for",
        who_h2_a: 'Any website that answers',
        who_h2_b: 'the same questions',
        availability_note_title: 'Currently available as part of Razqora.',
        availability_note_desc: 'Rafiq is built into the Razqora Knowledge Base System. A standalone version for teams that need the AI assistant without the full knowledge base is planned.',
      },
    },
  },
  ar: {
    nav: {
      solutions: 'الحلول',
      cx_solutions: 'حلول تجربة العملاء',
      enterprise: 'حلول المؤسسات',
      process: 'منهجيتنا',
      stack: 'التقنيات',
      contact: 'تواصل معنا',
      contact_cta: 'تواصل معنا',
      products: {
        next_cx: 'Next CX',
        survey_platform: 'منصة الاستبيانات',
        knowledge_base: 'قاعدة المعرفة',
        ai_assistant: 'المساعد الذكي',
      },
    },
    hero: {
      badge: 'أتمتة بالذكاء الاصطناعي، وأنظمة ERP، ومنصات تجربة العملاء',
      h1_a: 'أتمتة أذكى. كفاءة أعلى.',
      h1_b: 'ونموّ أسرع.',
      h1_c: '',
      subtitle:
        'نصمّم أنظمة ذكية تحوّل بياناتك التشغيلية إلى ميزة تنافسية؛ من منصات تجربة العملاء المدعومة بالذكاء الاصطناعي، إلى أنظمة ERP وCRM وأتمتة العمليات من البداية إلى النهاية.',
      cta_primary: 'اطلب عرضاً تجريبياً',
      cta_secondary: 'اكتشف حلولنا',
      stat_1_val: '2–4 أسابيع',
      stat_1_label: 'لإطلاق أول نسخة',
      stat_2_val: '99.9%',
      stat_2_label: 'نسبة تشغيل مضمونة',
      stat_3_val: '24/7',
      stat_3_label: 'دعم وتحسين على مدار الساعة',
    },
    dashboard: {
      title: 'مؤشرات تجربة العملاء لحظياً',
      m1_val: '12.4K',
      m1_label: 'تذاكر اليوم',
      m1_trend: '+23%',
      m2_val: '94.2%',
      m2_label: 'رضا العملاء (CSAT)',
      m2_trend: '+4%',
      m3_val: '2.1s',
      m3_label: 'متوسط زمن الرد',
      m3_trend: '−12%',
      ai_label: 'نسبة الحل بالذكاء الاصطناعي',
      ai_value: '78% مؤتمتة',
      channels: 'قنوات فعّالة',
    },
    capability_marquee: {
      items: [
        'أتمتة سير العمل',
        'أنظمة ERP للمؤسسات',
        'Microsoft CRM',
        'توجيه القرارات بالذكاء الاصطناعي',
        'أتمتة العمليات الروبوتية (RPA)',
        'التكامل مع Power BI',
        'المعالجة الذكية للمستندات وOCR',
        'منصة الاستبيانات',
        'التحليلات التنبؤية',
        'قاعدة المعرفة',
        'تكاملات مخصّصة',
        'تحسين مستمر على مدار الساعة',
      ],
    },
    solutions_section: {
      eyebrow: 'حلولنا',
      h2: 'مصمّمة لتواكب',
      h2_gradient: 'تعقيدات المؤسسات الحديثة',
      subtitle:
        'حلّان متكاملان يعملان معاً بانسجام: ذكاء تجربة العملاء المدعوم بالذكاء الاصطناعي، وإدارة الأداء المؤسسي الاستراتيجي.',
      key_benefits: 'أبرز المزايا',
      learn_more: 'اعرف المزيد',
    },
    methodology: {
      eyebrow: 'منهجية نكست أوتوميشن',
      h2: 'منهجية واضحة لبناء أنظمة رقمية سريعة الإنجاز',
      subtitle:
        'انطلاقاً من منهجية Sprint المجرّبة، نقدّم حلولاً ذكية عبر أربع مراحل: الاكتشاف، والتصميم، والتنفيذ، والتحسين.',
      steps: [
        {
          title: 'التحليل',
          desc: 'نحدّد التحديات الأساسية ونرسم طريقاً واضحاً لحلّها، بعد أن نفهم أعمالك وتدفّق بياناتك ومواطن التعثّر في عملياتك.',
        },
        {
          title: 'التصميم',
          desc: 'مخططات مصمّمة خصيصاً لك، تضع تجربة المستخدم وسرعة النظام في المقدمة، وتراعي متطلبات قطاعك ونموّك المستقبلي.',
        },
        {
          title: 'التنفيذ',
          desc: 'تنفيذ متقن لا يعطّل عملياتك الحالية، مع متابعة لحظية للتقدّم ومراحل تسليم واضحة.',
        },
        {
          title: 'التحسين',
          desc: 'مراقبة ودعم مستمرّان عبر نظام تذاكر سريع الاستجابة، لضمان أداء ثابت وموثوق.',
        },
      ],
    },
    edge: {
      eyebrow: 'لماذا تختارنا الفرق',
      h2: 'ننجز بسرعة، ونبني ما يدوم',
      items: [
        {
          title: 'تعاون لحظي',
          desc: 'تابع سير العمل واعتمد المخرجات من خلال منصتنا المتكاملة، مع وضوح كامل في كل مرحلة من مراحل مشروعك.',
        },
        {
          title: 'الأداء أولاً',
          desc: 'نختصر فترات تدريب الموظفين ونسرّع وتيرة التسليم، لتحقق أعلى عائد على استثمارك بأقل قدر من التعطيل.',
        },
        {
          title: 'موثوقية ودعم',
          desc: 'صيانة مخصّصة تُبقي أنظمتك متاحة ومحدّثة وبأفضل أداء، بنسبة تشغيل 99.9% وفريق دعم سريع الاستجابة.',
        },
      ],
    },
    partners: {
      eyebrow: 'شركاؤنا وعملاؤنا',
      h2: 'تثق بنا جهات',
      h2_gradient: 'تصنع المستقبل',
      subtitle:
        'من الجهات الحكومية والشركات الوطنية الكبرى إلى أبرز مزوّدي الحوسبة السحابية والذكاء الاصطناعي عالمياً؛ نعمل مع جهات ترسم المعايير.',
      clients_label: 'عملاؤنا',
      tech_label: 'شركاء التقنية والتنفيذ',
      trust_badge: 'تنفيذ بمعايير المؤسسات الكبرى، وثقة على المستوى الوطني',
    },
    technologies: {
      eyebrow: 'تقنياتنا',
      h2_start: 'نعتمد على',
      h2_highlight: 'تقنيات بمعايير',
      h2_end: 'المؤسسات الكبرى',
      description:
        'نسرّع نجاحك بأحدث الأدوات، على أيدي فرق خبيرة تلتزم بأفضل الممارسات وبجودة جاهزة للتشغيل الفعلي.',
      expert_badge: 'فريق هندسي خبير',
      footer1:
        'في نكست أوتوميشن لا نقبل بأنصاف الحلول. نوظّف أفضل التقنيات في السوق مع خبرة هندسية عميقة، لنصمّم ونبني حلولاً قابلة للتوسّع، عالية الأداء، وتدوم طويلاً.',
      footer2: 'كل مشروع ننفّذه يقوم على أفضل الممارسات المثبتة، لا على الصيحات العابرة أو الحلول المختصرة.',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      h2_start: 'لنبنِ معاً',
      h2_highlight: 'مشروعك الكبير القادم',
      subtitle:
        'حدّثنا عن مشروعك، وسيتواصل معك فريقنا خلال يوم عمل واحد، دون أي التزام أو ضغط بيعي.',
      email_label: 'راسلنا',
      phone_label: 'اتصل بنا',
      response_label: 'مدة الرد',
      response_value: 'خلال 24 ساعة',
      field_name: 'الاسم',
      field_email: 'البريد الإلكتروني',
      field_company: 'الشركة',
      field_phone: 'رقم الجوال',
      field_message: 'رسالتك',
      placeholder_name: 'محمد عبدالله',
      placeholder_email: 'mohammed@company.com',
      placeholder_company: 'اسم الشركة',
      placeholder_phone: '+966 …',
      placeholder_message: 'حدّثنا عن مشروعك…',
      submit: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال…',
      privacy: 'لن نشارك بياناتك مع أي طرف. الحقول المطلوبة مميّزة بالعلامة',
      success_title: 'تم إرسال رسالتك',
      success_desc: 'شكراً لتواصلك معنا، سيردّ عليك فريقنا خلال 24 ساعة.',
      success_reset: 'إرسال رسالة أخرى',
      err_name: 'يرجى إدخال اسمك.',
      err_email_required: 'يرجى إدخال بريدك الإلكتروني.',
      err_email_invalid: 'يرجى إدخال بريد إلكتروني صالح.',
      err_phone: 'يرجى إدخال رقم جوال صالح.',
      err_server_default: 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.',
      err_connection: 'تعذّر الاتصال. تحقّق من اتصالك بالإنترنت وحاول مرة أخرى.',
    },
    footer: {
      tagline:
        'نبني بنية رقمية سريعة وفعّالة؛ من منصات الذكاء الاصطناعي إلى أنظمة ERP وCRM وأتمتة العمليات من البداية إلى النهاية.',
      section_contact: 'تواصل معنا',
      section_solutions: 'الحلول',
      section_company: 'الشركة',
      copyright: '© 2026 نكست أوتوميشن. جميع الحقوق محفوظة.',
      start_project: 'ابدأ مشروعك',
      location: 'المملكة العربية السعودية',
      solutions_links: ['حلول تجربة العملاء', 'حلول المؤسسات', 'الأتمتة'],
      company_links: ['منهجيتنا', 'الأسئلة الشائعة', 'تواصل معنا'],
    },
    solutions_cards: [
      {
        title: 'حلول تجربة العملاء',
        tagline: 'بقوة منصة Next CX',
        description:
          'من أول رسالة واتساب حتى استبيان المتابعة؛ كل قناة، وكل موظف، وكل رؤية تحليلية تعمل على Next CX: منصة واحدة مدعومة بالذكاء الاصطناعي تتقن العربية والإنجليزية وجميع اللهجات السعودية.',
        products: [
          { name: 'Next CX', tagline: 'منصة تجربة العملاء متعددة القنوات', description: 'صندوق وارد موحّد لجميع القنوات: واتساب، والمكالمات، ودردشة الموقع، والبريد الإلكتروني وغيرها، مع وكلاء ذكاء اصطناعي يجيبون من قاعدة معرفتك المعتمدة.' },
          { name: 'رازكورا', tagline: 'نظام إدارة المعرفة', description: 'قاعدة معرفة ثنائية اللغة تمكّن الموظفين من الوصول إلى الإجابات الصحيحة والمعتمدة بسرعة، مع محادثة ذكية، وسير عمل للاعتماد، وبحث ذكي.' },
          { name: 'قياس', tagline: 'منصة الاستبيانات', description: 'أنشئ استبياناتك بالذكاء الاصطناعي في دقائق، ووزّعها عبر جميع القنوات، وحوّل الردود إلى قرارات بفضل التحليلات الذكية المدمجة.' },
          { name: 'رفيق', tagline: 'المساعد الذكي', description: 'مساعد محادثة ذكي يُضاف إلى موقعك ويجيب من محتواك المعتمد فقط؛ ثنائي اللغة، يعمل بسطر برمجي واحد، وتحت تحكّمك الكامل.' },
        ],
        sections: [],
        benefits: [
          'منصة واحدة وسجل موحّد للعميل عبر جميع القنوات',
          'ذكاء اصطناعي يجيب من قاعدة معرفتك المعتمدة فقط',
          'العربية أولاً، مع دعم جميع اللهجات السعودية',
          'استضافة داخل المملكة مع خيار النشر السيادي',
          'سجل موافقات متوافق مع نظام حماية البيانات الشخصية (PDPL) مع توطين البيانات',
        ],
        outcome_label: 'النتيجة:',
      },
      {
        title: 'حلول المؤسسات',
        tagline: 'كل طبقة من أعمالك، جاهزة للتوسّع.',
        description:
          'أياً كانت الأنظمة التي تعمل بها اليوم، نخصّصها لك، أو نطبّق منصات مجرّبة، أو نبني ما تحتاجه بالضبط، ثم نربطها بأنظمة تجربة العملاء والأتمتة لديك.',
        products: [],
        sections: [
          {
            name: 'الاستراتيجية والأداء',
            features: [
              { label: 'أطر مؤتمتة لمؤشرات الأداء', desc: 'اربط أداء كل فرد بالاستراتيجية مباشرةً، مع متابعة لحظية.' },
              { label: 'تسلسل الأهداف', desc: 'أهداف ونتائج رئيسية (OKRs) تمتد من مستوى المنظمة إلى مستوى الفرد، ليعمل الجميع نحو الوجهة نفسها.' },
              { label: 'التوافق مع رؤية 2030', desc: 'اربط كل مؤشر أداء بمتطلبات الاستراتيجية الوطنية واستراتيجية جهتك.' },
              { label: 'لوحات معلومات تنفيذية', desc: 'تقارير لحظية بالعربية والإنجليزية بالكامل، دون انتظار التقارير الأسبوعية.' },
            ],
            outcome: 'تقلّصت دورة التقارير الاستراتيجية من 3 أسابيع إلى تقارير لحظية، وأصبحت القيادة تتابع تحقيق الأهداف باستمرار.',
          },
          {
            name: 'الحوكمة والمخاطر والامتثال',
            features: [
              { label: 'منصة GRC موحّدة', desc: 'إدارة الحوكمة والمخاطر والامتثال في مكان واحد.' },
              { label: 'الأطر التنظيمية السعودية', desc: 'NCA ECC · SAMA CSF · PDPL · ISO 27001 — امتثال موثّق.' },
              { label: 'إدارة المخاطر والتدقيق', desc: 'رصد جميع المخاطر في مؤسستك وتقييمها ومتابعتها.' },
              { label: 'تقارير جاهزة للتدقيق', desc: 'أدلة وتقارير محدّثة دائماً، وجاهزة متى طلبتها الجهات الرقابية.' },
            ],
            outcome: '',
          },
          {
            name: 'CRM وERP وبيئة العمل',
            features: [
              { label: 'CRM', desc: 'Dynamics 365 · Salesforce · Zoho · HubSpot — بمنطق أعمال مخصّص ورؤية شاملة 360° للعميل.' },
              { label: 'ERP', desc: 'المالية، والموارد البشرية، والمخزون، والمشتريات؛ مهيّأة لتناسب طريقة عملك.' },
              { label: 'بيئة العمل', desc: 'إدارة الزوار والحضور والانصراف، مرتبطة بأنظمتك الأخرى.' },
              { label: 'كما تريده تماماً', desc: 'خصّص ما لديك، أو طبّق منصات مجرّبة، أو ابنِ حلاً جديداً.' },
            ],
            outcome: 'دورة مبيعات أقصر بنسبة 25%، ودقة توقعات تتجاوز 90%، وتقارير استراتيجية لحظية بعد أن كانت تستغرق 3 أسابيع.',
          },
        ],
        benefits: [
          'متوافقة مع رؤية 2030 — NCA · SAMA · PDPL · ISO 27001',
          'فريق معتمد من Microsoft في Dynamics 365 وPower BI',
          'محلّ ثقة شركات التكامل السعودية: إجادة وBustanTech',
          'صيانة ودعم مخصّصان وفق اتفاقيات مستوى خدمة واضحة',
        ],
        outcome_label: 'النتيجة:',
      },
    ],
    cta: {
      eyebrow: 'جاهز للانطلاق؟',
      h2: 'لنبنِ مشروعك الكبير القادم',
      subtitle: 'اطلب عرضاً تجريبياً، وسيتواصل معك فريقنا خلال 24 ساعة.',
      cta: 'اطلب عرضاً تجريبياً',
    },
    products_pages: {
      back_to_cx: 'العودة إلى حلول تجربة العملاء',
      next_cx: {
        eyebrow: 'منصة تجربة العملاء',
        h2_a: 'منصة موحّدة لكل',
        h2_gradient: 'محادثة.',
        subtitle: 'تواصل مع كل عميل عبر كل قناة: واتساب، والمكالمات، ودردشة الموقع، والبريد الإلكتروني وغيرها؛ من منصة واحدة مدعومة بالذكاء الاصطناعي، صُمّمت خصيصاً للسوق السعودي.',
        how_it_works: 'آلية العمل',
        how_it_works_h2_a: 'دورة متكاملة؛ من أول رسالة إلى',
        how_it_works_h2_b: 'التحسين المستمر',
        capabilities: 'قدرات المنصة',
        capabilities_h2_a: 'كل ما تحتاجه في',
        capabilities_h2_b: 'نظام واحد',
        who_eyebrow: 'لمن صُمّمت؟',
        who_h2_a: 'صُمّمت للمؤسسات',
        who_h2_b: 'في القطاعات المنظَّمة',
        benefits_eyebrow: 'أبرز المزايا',
      },
      knowledge_base: {
        eyebrow: 'قاعدة المعرفة · رازكورا',
        h2_a: 'مرجع موثوق واحد لكل',
        h2_gradient: 'إجابة معتمدة.',
        subtitle: 'قاعدة معرفة ثنائية اللغة تمكّن الموظفين من الوصول إلى الإجابات الصحيحة بسرعة، مع محادثة ذكية، وبحث ذكي، وسير عمل للاعتماد، ومتابعة مستمرة لجودة المحتوى.',
        how_it_works: 'آلية العمل',
        how_it_works_h2_a: 'اكتبها مرة، وجِدها فوراً.',
        how_it_works_h2_b: 'ومعتمدة دائماً.',
        capabilities: 'المزايا',
        capabilities_h2_a: 'كل ما تحتاجه قاعدة المعرفة',
        capabilities_h2_b: 'فعلاً',
        access_eyebrow: 'صلاحيات الوصول',
        access_h2_a: 'خمسة أدوار، ونظام واحد،',
        access_h2_b: 'دون أي التباس',
        access_desc: 'يحصل كل مستخدم على الصلاحيات التي يتطلبها دوره تماماً، مع تحديد النطاق على مستوى الأقسام؛ فلا يرى كاتب محتوى المالية إلا محتوى المالية، ولا يطّلع موظف الدعم إلا على المقالات المعتمدة.',
        who_eyebrow: 'لمن صُمّمت؟',
        who_h2_a: 'للفرق التي لا تحتمل',
        who_h2_b: 'الإجابات الخاطئة',
      },
      survey_platform: {
        eyebrow: 'منصة الاستبيانات · قياس',
        h2_a: 'أنشئ استبياناتك بالذكاء الاصطناعي، وحوّل الإجابات إلى',
        h2_gradient: 'قرارات.',
        subtitle: 'منصة ثنائية اللغة للاستبيانات وقياس الآراء؛ أنشئ استبيانك في دقائق بالذكاء الاصطناعي، ووزّعه عبر جميع القنوات، وحلّل الردود بفضل التحليلات الذكية المدمجة.',
        how_it_works: 'آلية العمل',
        how_it_works_h2_a: 'ثلاث خطوات من السؤال إلى',
        how_it_works_h2_b: 'القرار',
        capabilities: 'مزايا المنصة',
        capabilities_h2_a: 'مصمّمة لتغطي دورة قياس الآراء',
        capabilities_h2_b: 'بالكامل',
        who_eyebrow: 'لمن صُمّمت؟',
        who_h2_a: 'لكل جهة تحتاج إلى',
        who_h2_b: 'أن تُنصت وتتصرّف',
      },
      ai_assistant: {
        eyebrow: 'المساعد الذكي · رفيق',
        h2_a: 'رفيقك في كل',
        h2_gradient: 'إجابة.',
        subtitle: 'مساعد ذكي لموقعك يجيب من قاعدة معرفتك المعتمدة فقط؛ ثنائي اللغة، يُضاف بسطر برمجي واحد، وتحت تحكّمك الكامل.',
        how_it_works: 'آلية العمل',
        how_it_works_h2_a: 'يجيب. يندمج. يخضع لتحكّمك.',
        how_it_works_h2_b: 'ويتحسّن مع الوقت.',
        embed_eyebrow: 'سطر برمجي واحد',
        embed_h2_a: 'على موقعك خلال',
        embed_h2_b: 'دقائق لا أيام',
        embed_desc: 'انسخ كود التضمين من أداة الإنشاء، والصقه في HTML موقعك، وسيظهر رفيق فوراً. لا حاجة إلى خادم خلفي، ولا إلى إدارة مفاتيح API، ولا إلى فريق تطوير.',
        embed_code_note: 'هذا كل شيء. رفيق يعمل الآن على موقعك.',
        capabilities: 'مزايا المنصة',
        capabilities_h2_a: 'أدِر جميع مساعديك',
        capabilities_h2_b: 'من مكان واحد',
        who_eyebrow: 'لمن صُمّم؟',
        who_h2_a: 'لكل موقع يتلقّى',
        who_h2_b: 'الأسئلة نفسها مراراً',
        availability_note_title: 'متاح حالياً ضمن رازكورا.',
        availability_note_desc: 'رفيق مدمج في نظام قاعدة المعرفة رازكورا، ونعمل على إصدار مستقل للفرق التي تحتاج إلى المساعد الذكي دون نظام قاعدة المعرفة الكامل.',
      },
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
