'use client';

import { useI18n } from '@/lib/i18n';
import { PageHero } from '@/components/PageHero';
import { NextCXContent } from '@/components/products/NextCXContent';
import { CtaBlock } from '@/components/CtaBlock';

export default function NextCXClientPage() {
  const { t } = useI18n();
  const p = t.products_pages.next_cx;
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
      <NextCXContent />
      <CtaBlock />
    </>
  );
}
