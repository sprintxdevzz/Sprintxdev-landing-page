import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { FAQ } from '@/components/FAQ';
import { CtaBlock } from '@/components/CtaBlock';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb, faqSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'FAQ — Common Questions About Next Automation',
  description:
    'Answers to frequently asked questions about our delivery process, project timelines, maintenance, and integrations.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ])}
      />
      <JsonLd data={faqSchema} />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Common <span className="gradient-text">Questions</span>
          </>
        }
        subtitle="Everything you need to know about working with us."
      />
      <FAQ />
      <CtaBlock />
    </>
  );
}
