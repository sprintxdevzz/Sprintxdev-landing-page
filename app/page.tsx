import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { SolutionsTeaser } from '@/components/SolutionsTeaser';
import { TheEdge } from '@/components/TheEdge';
import { CtaBlock } from '@/components/CtaBlock';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Next Automation — Automate. Optimize. Accelerate Growth.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumb([{ name: 'Home', url: '/' }])} />
      <Hero />
      <SolutionsTeaser />
      <TheEdge />
      <CtaBlock />
    </>
  );
}
