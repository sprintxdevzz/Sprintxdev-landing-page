import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { CapabilityMarquee } from '@/components/CapabilityMarquee';
import { Solutions } from '@/components/Solutions';
import { Methodology } from '@/components/Methodology';
import { TheEdge } from '@/components/TheEdge';
import { Partners } from '@/components/Partners';
import { Technologies } from '@/components/Technologies';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Next Automation — Automate. Optimize. Accelerate Growth.',
  alternates: { canonical: '/' },
};

export const dynamic = 'force-static';
export const revalidate = false;

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Next Automation — CX Solutions, Enterprise ERP/CRM & Business Automation',
  url: 'https://www.nxtaut.com/',
  description: 'Next Automation delivers AI-powered CX platforms, enterprise ERP/CRM, and workflow automation.',
  about: [
    {
      '@type': 'Service',
      name: 'CX Solutions',
      url: 'https://www.nxtaut.com/#solutions',
      description: 'Survey platform and knowledge base for 360-degree customer intelligence.',
      provider: { '@type': 'Organization', name: 'Next Automation' },
    },
    {
      '@type': 'Service',
      name: 'Enterprise Solutions',
      url: 'https://www.nxtaut.com/#solutions',
      description: 'ERP, CRM, and performance management platforms for enterprise operations.',
      provider: { '@type': 'Organization', name: 'Next Automation' },
    },
    {
      '@type': 'Service',
      name: 'Automation',
      url: 'https://www.nxtaut.com/#solutions',
      description: 'Workflow automation, RPA, and AI-powered process orchestration.',
      provider: { '@type': 'Organization', name: 'Next Automation' },
    },
  ],
};

const siteNavSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Solutions',
    url: 'https://www.nxtaut.com/solutions',
    description: 'CX, Enterprise ERP/CRM, and Automation platforms.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Methodology',
    url: 'https://www.nxtaut.com/methodology',
    description: 'Our 4-step delivery process: Analysis, Design, Implementation, Optimization.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'FAQ',
    url: 'https://www.nxtaut.com/faq',
    description: 'Answers to common questions about timelines, integrations, and maintenance.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: 'Contact',
    url: 'https://www.nxtaut.com/contact',
    description: 'Book a demo or get in touch with the Next Automation team.',
  },
];

const solutionsListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Next Automation Solutions',
  description: 'AI-powered business automation solutions by Next Automation',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'CX Solutions — Survey Platform & Knowledge Base',
      url: 'https://www.nxtaut.com/solutions#cx-solutions',
      description: 'Transform customer data into actionable intelligence with AI-powered survey and knowledge base tools.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Enterprise Solutions — ERP & CRM',
      url: 'https://www.nxtaut.com/solutions#enterprise',
      description: 'Purpose-built ERP and CRM platforms with Power BI integration for enterprise operations.',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Automation — Workflow & RPA',
      url: 'https://www.nxtaut.com/solutions#automation',
      description: 'Intelligent workflow automation and RPA solutions that run around the clock.',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Our Methodology',
      url: 'https://www.nxtaut.com/methodology',
      description: 'Analysis, Design, Implementation, Optimization — our 4-step delivery process.',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Frequently Asked Questions',
      url: 'https://www.nxtaut.com/faq',
      description: 'Answers about timelines, integrations, maintenance, and our delivery model.',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Contact Us',
      url: 'https://www.nxtaut.com/contact',
      description: 'Book a demo or get in touch with the Next Automation team.',
    },
  ],
};

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CX Solutions',
    serviceType: 'Customer Experience Platform',
    url: 'https://www.nxtaut.com/#solutions',
    description:
      'Your strategic command center engineered to transform every customer signal into a roadmap for success.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: 'https://www.nxtaut.com/' },
    areaServed: { '@type': 'Place', name: 'Global' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Solutions',
    serviceType: 'Enterprise ERP and CRM Platform',
    url: 'https://www.nxtaut.com/#solutions',
    description:
      'Purpose-built ERP, CRM, and performance management platforms tailored to your industry.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: 'https://www.nxtaut.com/' },
    areaServed: { '@type': 'Place', name: 'Global' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automation',
    serviceType: 'Business Process Automation and RPA',
    url: 'https://www.nxtaut.com/#solutions',
    description:
      'Intelligent automation that runs around the clock—freeing your team to focus on real business value.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: 'https://www.nxtaut.com/' },
    areaServed: { '@type': 'Place', name: 'Global' },
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      {siteNavSchema.map((s, i) => (
        <JsonLd key={`nav-${i}`} data={s} />
      ))}
      <JsonLd data={solutionsListSchema} />
      {serviceSchemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <Hero />
      <CapabilityMarquee />
      <Solutions />
      <Methodology />
      <TheEdge />
      <Partners />
      <Technologies />
      <ContactForm />
    </>
  );
}
