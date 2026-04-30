import type { Metadata, Viewport } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { siteSchemas } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nxtaut.com'),
  title: {
    default: 'Next Automation — CX Solutions, Enterprise ERP/CRM & Business Automation',
    template: '%s | Next Automation',
  },
  description:
    'Next Automation delivers AI-powered CX platforms, enterprise ERP/CRM systems, and intelligent automation that drives measurable growth.',
  keywords: [
    'Next Automation',
    'CX solutions',
    'survey platform',
    'ERP',
    'CRM',
    'business automation',
    'AI-powered platforms',
    'workflow automation',
    'enterprise software',
    'digital transformation',
    'nxtaut',
  ],
  authors: [{ name: 'Next Automation' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Next Automation',
    title: 'Next Automation — Automate. Optimize. Accelerate Growth.',
    description: 'Engineering intelligent systems that transform data into competitive advantage.',
    url: 'https://www.nxtaut.com/',
    images: [{ url: '/logoicon.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Automation — Automate. Optimize. Accelerate Growth.',
    description: 'Engineering intelligent systems that transform data into competitive advantage.',
    images: ['/logoicon.jpg'],
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  },
};

export const viewport: Viewport = { themeColor: '#15156B' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body>
        <JsonLd data={siteSchemas.organization} />
        <JsonLd data={siteSchemas.website} />
        <div className="min-h-screen flex flex-col selection:bg-brand-primary/20">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
