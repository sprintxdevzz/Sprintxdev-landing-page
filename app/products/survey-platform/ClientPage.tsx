'use client';

import { useI18n } from '@/lib/i18n';
import { PageHero } from '@/components/PageHero';
import { SurveyPlatformContent } from '@/components/products/SurveyPlatformContent';
import { CtaBlock } from '@/components/CtaBlock';

export default function SurveyPlatformClientPage() {
  const { t } = useI18n();
  const p = t.products_pages.survey_platform;
  return (
    <div className="theme-qyas">
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.h2_a} <span className="gradient-text">{p.h2_gradient}</span>
          </>
        }
        subtitle={p.subtitle}
      />
      <SurveyPlatformContent />
      <CtaBlock />
    </div>
  );
}
