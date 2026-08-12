'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

type Logo = {
  name: string;
  src: string;
};

/** Prestige clients & organizations — the names that build trust at a glance. */
const clients: Logo[] = [
  { name: 'Digital Government Authority', src: '/partners/digital-government-authority.svg' },
  { name: 'Insurance Authority', src: '/partners/insurance-authority.svg' },
  { name: 'Saudi Electricity Regulatory Authority', src: '/partners/saudi-electricity-regulatory-authority.jpg' },
  { name: 'Saudi National Bank', src: '/partners/saudi-national-bank.svg' },
  { name: 'Tawuniya', src: '/partners/tawuniya.png' },
  { name: 'Al Faisaliah Group', src: '/partners/al-faisaliah-group.jpg' },
  { name: 'New Murabba', src: '/partners/new-murabba.jpg' },
  { name: 'Dr. Soliman Fakeeh Hospital', src: '/partners/dr-soliman-fakeeh-hospital.png' },
  { name: 'HUMAIN', src: '/partners/humain.svg' },
];

/** Technology & delivery partners — the platforms we build on. */
const techPartners: Logo[] = [
  { name: 'Anthropic', src: '/partners/anthropic.svg' },
  { name: 'Microsoft Azure', src: '/partners/microsoft-azure.svg' },
  { name: 'Amazon Web Services', src: '/partners/amazon-web-services.svg' },
  { name: 'Google Cloud', src: '/partners/google-cloud.svg' },
  { name: 'Arabot', src: '/partners/arabot.svg' },
  { name: 'Ejada', src: '/partners/ejada.png' },
];

/** Rotating brand-accent palette — every card gets its own colour, so the wall reads
 *  vibrant rather than monochrome. Alpha suffixes give a soft wash + a stronger glow. */
const ACCENTS = ['#15156b', '#05d89c', '#f7650e', '#2f6bff', '#7c5cff', '#06b6d4'] as const;

const LogoCard: React.FC<{ logo: Logo; index: number }> = ({ logo, index }) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: Math.min(index * 0.05, 0.4),
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, boxShadow: `0 22px 44px -18px ${accent}66` }}
      style={{ boxShadow: 'var(--shadow-card)' }}
      className="group relative flex items-center justify-center w-[calc(50%-0.5rem)] sm:w-[160px] md:w-[176px] h-24 md:h-28 px-5
        rounded-[var(--radius-xl)] bg-white border border-black/[0.07] overflow-hidden
        transition-colors duration-300 hover:border-transparent"
    >
      {/* Soft colour wash that blooms up from the base on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(130% 120% at 50% 115%, ${accent}22, transparent 68%)` }}
      />
      {/* Animated accent bar that draws in from the left */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 rounded-full
          transition-transform duration-500 ease-out group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}00)` }}
      />
      {/* Thin coloured ring on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1.5px ${accent}55` }}
      />

      <div className="relative w-full h-12 md:h-14">
        <Image
          src={logo.src}
          alt={logo.name}
          title={logo.name}
          fill
          sizes="(max-width: 640px) 40vw, 176px"
          className="object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.06]"
        />
      </div>
    </motion.div>
  );
};

const GroupLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center justify-center gap-4 mb-8"
  >
    <span className="hidden sm:block h-px w-12 bg-gradient-to-r from-transparent via-brand-secondary/40 to-brand-primary/50" />
    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gradient-brand">
      {children}
    </span>
    <span className="hidden sm:block h-px w-12 bg-gradient-to-l from-transparent via-brand-orange/40 to-brand-primary/50" />
  </motion.div>
);

/** A softly-drifting colour orb used to warm up the background. */
const Orb: React.FC<{
  className: string;
  color: string;
  duration: number;
  animate: boolean;
}> = ({ className, color, duration, animate }) => (
  <span
    aria-hidden="true"
    className={`absolute rounded-full blur-3xl ${animate ? 'animate-orb' : ''} ${className}`}
    style={{ background: color, ['--orb-duration' as string]: `${duration}s` }}
  />
);

export const Partners: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative py-20 md:py-32 bg-brand-light border-y hairline overflow-hidden isolate"
    >
      {/* Colourful, slowly-drifting background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Orb className="w-[26rem] h-[26rem] -top-24 -left-16 opacity-[0.22]" color="var(--color-brand-primary)" duration={15} animate={animate} />
        <Orb className="w-[24rem] h-[24rem] top-1/3 -right-20 opacity-[0.2]" color="var(--color-brand-secondary)" duration={18} animate={animate} />
        <Orb className="w-[22rem] h-[22rem] -bottom-24 left-1/3 opacity-[0.16]" color="var(--color-brand-orange)" duration={21} animate={animate} />
      </div>

      {/* Fine engineering grid, faded toward the edges */}
      <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-brand-primary justify-center mb-4"
          >
            Partners &amp; clients
          </motion.div>
          <motion.h2
            id="partners-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-ink leading-[1.05] text-balance"
          >
            Trusted by the organizations{' '}
            <span className="text-gradient-brand">shaping what&apos;s next</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-ink-500 text-base md:text-lg leading-relaxed text-pretty"
          >
            From government authorities and national enterprises to the world&apos;s leading
            cloud and AI providers — we partner with organizations that set the standard.
          </motion.p>
        </div>

        {/* Clients & organizations */}
        <div className="mb-16 md:mb-20">
          <GroupLabel>Clients &amp; organizations</GroupLabel>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {clients.map((logo, i) => (
              <LogoCard key={logo.name} logo={logo} index={i} />
            ))}
          </div>
        </div>

        {/* Technology & delivery partners */}
        <div>
          <GroupLabel>Technology &amp; delivery partners</GroupLabel>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techPartners.map((logo, i) => (
              <LogoCard key={logo.name} logo={logo} index={i} />
            ))}
          </div>
        </div>

        {/* Trust footnote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 md:mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.07] text-ink-500 text-[11px] font-semibold uppercase tracking-[0.16em] shadow-[var(--shadow-card)]">
            <ShieldCheck size={13} className="text-brand-secondary" />
            Enterprise-grade delivery, trusted at national scale
          </div>
        </motion.div>
      </div>
    </section>
  );
};
