import type { Metadata } from 'next';
import SurveyPlatformClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Qyas — Survey Platform',
  description:
    'A bilingual survey and feedback platform — build in minutes with AI, distribute across web, SMS, QR, email and live agent, then analyze with built-in AI insights.',
  alternates: { canonical: '/products/survey-platform' },
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function SurveyPlatformPage() {
  return <SurveyPlatformClientPage />;
}
