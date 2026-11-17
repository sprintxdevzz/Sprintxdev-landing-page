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

  // Rehydrate from localStorage after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('nxtaut_locale') as Locale | null;
      if (stored === 'ar' || stored === 'en') setLocaleState(stored);
    } catch {}
  }, []);

  // Push direction + lang to the document
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
