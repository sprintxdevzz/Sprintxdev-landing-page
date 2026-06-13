import { Marquee } from './ui/Marquee';

const capabilities = [
  'Workflow Automation',
  'Enterprise ERP',
  'Microsoft CRM',
  'AI Decision Routing',
  'RPA',
  'Power BI Integration',
  'Document AI & OCR',
  'Survey Platform',
  'Predictive Analytics',
  'Knowledge Base',
  'Custom Integrations',
  '24/7 Optimization',
];

export function CapabilityMarquee() {
  return (
    <section className="py-8 bg-white border-y border-black/[0.06]" aria-label="Capabilities">
      <Marquee items={capabilities} duration={42} />
    </section>
  );
}
