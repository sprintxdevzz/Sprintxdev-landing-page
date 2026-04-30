import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] universe-glow -z-10 opacity-60" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-5">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark tracking-tight leading-[1.05] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark/55 font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
