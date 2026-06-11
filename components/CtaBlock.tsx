import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaBlock() {
  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-dark mask-fade opacity-50" />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] aura opacity-40 pointer-events-none"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-brand-secondary justify-center mb-5">Ready to ship?</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-[1.05] text-balance">
          Let&apos;s build your next big thing
        </h2>
        <p className="text-white/60 text-lg mb-10 text-pretty">
          Book a demo and our team will get back to you within 24 hours.
        </p>
        <Link href="/contact" className="btn-primary group inline-flex">
          Book a demo
          <ArrowRight
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
