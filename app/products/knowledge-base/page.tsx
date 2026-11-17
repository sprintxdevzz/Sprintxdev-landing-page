import type { Metadata } from 'next';
import KnowledgeBaseClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Razqora — Knowledge Base System',
  description:
    'A bilingual knowledge base where employees and support teams find correct, approved answers fast — in Arabic and English, with AI assistance and an approval workflow.',
  alternates: { canonical: '/products/knowledge-base' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function KnowledgeBasePage() {
  return <KnowledgeBaseClientPage />;
}
