import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { AIAssistantContent } from '@/components/products/AIAssistantContent';
import { CtaBlock } from '@/components/CtaBlock';

export const metadata: Metadata = {
  title: 'Rafiq — AI Assistant',
  description:
    'An AI assistant for your website that answers only from your approved content — bilingual, embeddable with one line of code, with full control over what it knows.',
  alternates: { canonical: '/products/ai-assistant' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function AIAssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Assistant · Rafiq"
        title={
          <>
            Your companion for every{' '}
            <span className="gradient-text">answer.</span>
          </>
        }
        subtitle="An AI assistant for your website that answers only from your approved content — bilingual, embeddable with one line of code, with full control over what it knows."
      />
      <AIAssistantContent />
      <CtaBlock />
    </>
  );
}
