import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumb, contactPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact — Book a Demo or Get In Touch',
  description:
    'Book a demo or send us a message. Our team will get back to you within 24 hours.',
  alternates: { canonical: '/contact' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ])}
      />
      <JsonLd data={contactPageSchema} />
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Let&apos;s build your <span className="gradient-text">next big thing</span>
          </>
        }
        subtitle="Ready to accelerate your digital growth? Book a demo and our team will get back to you within 24 hours."
      />
      <ContactForm />
    </>
  );
}
