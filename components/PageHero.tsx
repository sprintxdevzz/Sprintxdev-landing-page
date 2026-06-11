import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade opacity-60" />
      <div
        aria-hidden
        className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[760px] h-[640px] aura opacity-60 pointer-events-none"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow text-brand-primary justify-center mb-5">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-ink tracking-[-0.03em] leading-[1.02] mb-6 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-ink-500 leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
