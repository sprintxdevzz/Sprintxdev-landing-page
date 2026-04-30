export const SITE_URL = 'https://www.nxtaut.com';

export const siteSchemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Next Automation',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logoicon.jpg`,
    email: 'info@nxtaut.com',
    description: 'Next Automation delivers AI-powered CX platforms, enterprise ERP/CRM systems, and intelligent business automation.',
    serviceArea: { '@type': 'Place', name: 'Global' },
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Next Automation',
    url: `${SITE_URL}/`,
  },
};

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'CX Solutions',
    serviceType: 'Customer Experience Platform',
    url: `${SITE_URL}/solutions#cx-solutions`,
    description:
      'Your strategic command center engineered to transform every customer signal into a roadmap for success. A 360-degree lens across Customer Experience, Contact Centers, Employee pulse, and Digital Journey.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: `${SITE_URL}/` },
    areaServed: { '@type': 'Place', name: 'Global' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CX Modules',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Survey Platform' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Tracking System' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Enterprise Solutions',
    serviceType: 'Enterprise ERP and CRM Platform',
    url: `${SITE_URL}/solutions#enterprise`,
    description:
      'Purpose-built ERP, CRM, and performance management platforms tailored to your industry and integrated seamlessly with your existing systems.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: `${SITE_URL}/` },
    areaServed: { '@type': 'Place', name: 'Global' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Enterprise Modules',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ERP & Performance KPI' } },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automation',
    serviceType: 'Business Process Automation and RPA',
    url: `${SITE_URL}/solutions#automation`,
    description:
      'We identify every repetitive, manual process in your operations and engineer intelligent automation that runs around the clock.',
    provider: { '@type': 'Organization', name: 'Next Automation', url: `${SITE_URL}/` },
    areaServed: { '@type': 'Place', name: 'Global' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Automation Modules',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intelligent Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Operations & RPA' } },
      ],
    },
  },
];

export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Next Automation Delivery Methodology',
  description: 'A streamlined 4-step delivery process — discovery, design, implementation, and continuous optimization.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Analysis',
      text: 'We identify your core challenges and map out a clear path to resolution. Understanding your business, data flows, and operational bottlenecks.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Design',
      text: 'Creating tailored blueprints that prioritize user experience and system speed. Designing for your specific industry requirements and future growth.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Implementation',
      text: 'Clean execution with minimal impact on your current operations. Real-time progress tracking and transparent delivery milestones.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Optimization',
      text: 'Continuous monitoring and support via our responsive ticketing system. We ensure sustained performance, innovation, and reliability.',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is high-velocity digital infrastructure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It refers to engineering software systems that are optimized for maximum speed, scalability, and reliability, allowing your business to grow without technical bottlenecks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our sprint-based methodology allows us to deliver initial versions in as little as 2-4 weeks, with full systems typically taking 8-12 weeks depending on complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer maintenance after delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide dedicated maintenance and scaling support to ensure your systems remain updated and performant as your user base grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you integrate with my existing tools?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We specialize in bridging the gap between modern custom solutions and your legacy software or third-party APIs.',
      },
    },
  ],
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Next Automation',
  url: `${SITE_URL}/contact`,
  description: 'Book a demo or get in touch with the Next Automation team.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Next Automation',
    email: 'info@nxtaut.com',
    telephone: '+966500598757',
    url: `${SITE_URL}/`,
  },
};
