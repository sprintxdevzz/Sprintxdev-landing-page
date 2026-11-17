'use client';

import { useI18n } from '@/lib/i18n';
import { PageHero } from '@/components/PageHero';
import { AIAssistantContent } from '@/components/products/AIAssistantContent';
import { CtaBlock } from '@/components/CtaBlock';

export default function AIAssistantClientPage() {
  const { t } = useI18n();
  const p = t.products_pages.ai_assistant;
  return (
    <div className="theme-rafiq">
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.h2_a} <span className="gradient-text">{p.h2_gradient}</span>
          </>
        }
        subtitle={p.subtitle}
      />
      <AIAssistantContent />
      <CtaBlock />
    </div>
  );
}
