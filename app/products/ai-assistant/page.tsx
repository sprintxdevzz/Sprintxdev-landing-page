import type { Metadata } from 'next';
import AIAssistantClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Rafiq — AI Assistant',
  description:
    'An AI assistant for your website that answers only from your approved content — bilingual, embeddable with one line of code, with full control over what it knows.',
  alternates: { canonical: '/products/ai-assistant' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function AIAssistantPage() {
  return <AIAssistantClientPage />;
}
