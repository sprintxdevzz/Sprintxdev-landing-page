import Link from 'next/link';
import { Rocket } from 'lucide-react';

export function CtaBlock() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 universe-glow opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-secondary font-bold text-xs uppercase tracking-[0.3em] mb-5">
          Ready to Ship?
        </p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          Let's build your next big thing
        </h2>
        <p className="text-white/50 text-lg font-medium mb-10">
          Book a demo and our team will get back to you within 24 hours.
        </p>
        <Link href="/contact" className="btn-primary inline-flex">
          Book a Demo
          <Rocket size={20} />
        </Link>
      </div>
    </section>
  );
}
