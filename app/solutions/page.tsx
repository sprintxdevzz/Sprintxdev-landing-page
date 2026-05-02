import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Solutions } from '@/components/Solutions';
import { CtaBlock } from '@/components/CtaBlock';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb, serviceSchemas } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Solutions — CX, Enterprise ERP/CRM & Automation',
  description:
    'AI-powered CX platforms, ERP & CRM systems, and intelligent workflow automation engineered for enterprise scale.',
  alternates: { canonical: '/solutions' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/solutions' },
        ])}
      />
      <JsonLd data={serviceSchemas as unknown as Record<string, unknown>[]} />
      <PageHero
        eyebrow="Our Solutions"
        title={
          <>
            Built for modern <span className="gradient-text">enterprise complexity</span>
          </>
        }
        subtitle="Three interconnected pillars: CX intelligence, enterprise infrastructure, and end-to-end automation."
      />
      <Solutions />
      <CtaBlock />
    </>
  );
}
