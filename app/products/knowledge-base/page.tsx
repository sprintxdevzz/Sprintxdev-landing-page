import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { KnowledgeBaseContent } from '@/components/products/KnowledgeBaseContent';
import { CtaBlock } from '@/components/CtaBlock';

export const metadata: Metadata = {
  title: 'Razqora — Knowledge Base System',
  description:
    'A bilingual knowledge base where employees and support teams find correct, approved answers fast — in Arabic and English, with AI assistance and an approval workflow.',
  alternates: { canonical: '/products/knowledge-base' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function KnowledgeBasePage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Base · Razqora"
        title={
          <>
            One trusted place for every{' '}
            <span className="gradient-text">approved answer.</span>
          </>
        }
        subtitle="A bilingual knowledge base where employees find correct, approved answers fast — in Arabic and English, with AI assistance, an approval workflow, and smart search."
      />
      <KnowledgeBaseContent />
      <CtaBlock />
    </>
  );
}
