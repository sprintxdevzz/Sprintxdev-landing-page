import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { NextCXContent } from '@/components/products/NextCXContent';
import { CtaBlock } from '@/components/CtaBlock';

export const metadata: Metadata = {
  title: 'Next CX — Omnichannel CX Platform',
  description:
    'AI-powered customer experience for Saudi enterprises — omnichannel inbox, AI agents, knowledge base, surveys and quality management, hosted in the Kingdom.',
  alternates: { canonical: '/products/next-cx' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function NextCXPage() {
  return (
    <>
      <PageHero
        eyebrow="CX Platform"
        title={
          <>
            One platform. Every{' '}
            <span className="gradient-text">conversation.</span>
          </>
        }
        subtitle="Answer every customer on every channel — WhatsApp, voice, web chat, email and more — from one AI-powered platform built for Saudi Arabia."
      />
      <NextCXContent />
      <CtaBlock />
    </>
  );
}
