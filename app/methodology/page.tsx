import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Methodology } from '@/components/Methodology';
import { TheEdge } from '@/components/TheEdge';
import { CtaBlock } from '@/components/CtaBlock';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb, howToSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Our Methodology — Analysis, Design, Implementation, Optimization',
  description:
    'A streamlined 4-step delivery process — discovery, design, build, and continuous optimization.',
  alternates: { canonical: '/methodology' },
};

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: 'Home', url: '/' },
          { name: 'Methodology', url: '/methodology' },
        ])}
      />
      <JsonLd data={howToSchema} />
      <PageHero
        eyebrow="The Next Automation Methodology"
        title={
          <>
            Engineering high-velocity <span className="gradient-text">digital systems</span>
          </>
        }
        subtitle="Discovery, design, implementation, and continuous optimization — delivered in sprints."
      />
      <Methodology />
      <TheEdge />
      <CtaBlock />
    </>
  );
}
