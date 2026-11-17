'use client';

import { Marquee } from './ui/Marquee';
import { useI18n } from '@/lib/i18n';

export function CapabilityMarquee() {
  const { t } = useI18n();
  return (
    <section className="py-8 bg-white border-y border-black/[0.06]" aria-label="Capabilities">
      <Marquee items={[...t.capability_marquee.items]} duration={42} />
    </section>
  );
}
