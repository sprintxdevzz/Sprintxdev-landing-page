import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-brand-dark">
      {/* Dark grid texture */}
      <div aria-hidden className="absolute inset-0 bg-grid-dark mask-fade opacity-60" />

      {/* Primary glow — behind the heading */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[720px] h-[560px] pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(21,21,107,0.7) 0%, rgba(5,216,156,0.08) 60%, transparent 100%)',
        }}
      />

      {/* Teal accent — lower-right */}
      <div
        aria-hidden
        className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(5,216,156,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Bottom fade to white */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 100%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-brand-secondary text-[0.72rem] font-bold uppercase tracking-[0.18em] mb-5">
          <span className="h-px w-6 bg-brand-secondary/60 inline-block" />
          {eyebrow}
          <span className="h-px w-6 bg-brand-secondary/60 inline-block" />
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-[-0.03em] leading-[1.02] mb-6 text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/55 leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
