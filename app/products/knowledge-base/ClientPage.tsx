'use client';

import { useI18n } from '@/lib/i18n';
import { PageHero } from '@/components/PageHero';
import { KnowledgeBaseContent } from '@/components/products/KnowledgeBaseContent';
import { CtaBlock } from '@/components/CtaBlock';

export default function KnowledgeBaseClientPage() {
  const { t } = useI18n();
  const p = t.products_pages.knowledge_base;
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.h2_a} <span className="gradient-text">{p.h2_gradient}</span>
          </>
        }
        subtitle={p.subtitle}
      />
      <KnowledgeBaseContent />
      <CtaBlock />
    </>
  );
}
