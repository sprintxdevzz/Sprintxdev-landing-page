import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SurveyPlatformContent } from '@/components/products/SurveyPlatformContent';
import { CtaBlock } from '@/components/CtaBlock';

export const metadata: Metadata = {
  title: 'Qyas — Survey Platform',
  description:
    'A bilingual survey and feedback platform — build in minutes with AI, distribute across web, SMS, QR, email and live agent, then analyze with built-in AI insights.',
  alternates: { canonical: '/products/survey-platform' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function SurveyPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Survey Platform · Qyas"
        title={
          <>
            Create surveys with AI. Turn answers into{' '}
            <span className="gradient-text">decisions.</span>
          </>
        }
        subtitle="A bilingual survey and feedback platform — build in minutes with AI, distribute across every channel, and analyze responses with built-in AI insights."
      />
      <SurveyPlatformContent />
      <CtaBlock />
    </>
  );
}
