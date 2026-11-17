import type { Metadata } from 'next';
import NextCXClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Next CX — Omnichannel CX Platform',
  description:
    'AI-powered customer experience for Saudi enterprises — omnichannel inbox, AI agents, knowledge base, surveys and quality management, hosted in the Kingdom.',
  alternates: { canonical: '/products/next-cx' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function NextCXPage() {
  return <NextCXClientPage />;
}
