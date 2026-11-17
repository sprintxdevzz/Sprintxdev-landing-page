'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import { ArrowRight, TrendingUp, TrendingDown, Circle } from 'lucide-react';
import Link from 'next/link';
import { Magnetic } from './ui/Magnetic';
import { maskRise, stagger } from '@/lib/motion';
import { useI18n } from '@/lib/i18n';

/* ─── Dashboard card ──────────────────────────────────────────────────── */
function DashboardCard() {
  const { t, locale } = useI18n();
  const d = t.dashboard;
  const isMono = locale === 'en';

  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const id = setTimeout(() => setProgress(78), 900);
    return () => clearTimeout(id);
  }, []);

  const metrics = [
    { val: d.m1_val, label: d.m1_label, trend: d.m1_trend, up: true },
    { val: d.m2_val, label: d.m2_label, trend: d.m2_trend, up: true },
    { val: d.m3_val, label: d.m3_label, trend: d.m3_trend, up: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[22rem] mx-auto"
    >
      {/* Soft outer glow */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(5,216,156,0.14) 0%, rgba(21,21,107,0.12) 60%, transparent 100%)',
        }}
      />

      <div className="relative rounded-2xl border border-white/[0.1] overflow-hidden shadow-[0_32px_64px_-16px_rgba(5,216,156,0.08),0_0_0_1px_rgba(255,255,255,0.04)] bg-gradient-to-b from-white/[0.07] to-white/[0.03] backdrop-blur-sm">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
            </span>
            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Live</span>
          </div>
          <span className="text-[10px] font-semibold text-white/40">{d.title}</span>
        </div>

        {/* Metric tiles */}
        <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 + i * 0.1 }}
              className="px-3 py-4 text-center"
            >
              <div
                className={`text-xl font-bold text-white ${isMono ? 'font-mono tabular-nums' : ''}`}
              >
                {m.val}
              </div>
              <div className="text-[9px] text-white/35 mt-0.5 leading-tight">{m.label}</div>
              <div
                className={`flex items-center justify-center gap-0.5 mt-1.5 text-[9px] font-bold ${
                  m.up ? 'text-brand-secondary' : 'text-brand-secondary'
                }`}
              >
                {m.up ? <TrendingUp size={8} /> : <TrendingDown size={8} />}
                {m.trend}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI resolution bar */}
        <div className="px-5 py-4 border-t border-white/[0.07]">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[10px] font-semibold text-white/50">{d.ai_label}</span>
            <span className="text-[10px] font-bold text-brand-secondary">{d.ai_value}</span>
          </div>
          <div className="h-1 w-full rounded-full bg-white/[0.08] overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, var(--color-brand-secondary), var(--color-brand-primary))',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        {/* Channel dots */}
        <div className="px-5 py-3 border-t border-white/[0.07] flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-[9px] text-white/35 uppercase tracking-widest font-semibold shrink-0">
            {d.channels}
          </span>
          {['WhatsApp', 'Voice', 'Web', 'Email'].map((ch) => (
            <div key={ch} className="flex items-center gap-1">
              <Circle size={5} className="fill-brand-secondary text-brand-secondary" />
              <span className="text-[9px] text-white/45">{ch}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Word rise (mask pattern) ─────────────────────────────────────────── */
function Word({ children }: { children: string }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom mr-[0.22em]">
      <motion.span variants={maskRise} className="inline-block text-white">
        {children}
      </motion.span>
    </span>
  );
}
function GradWord({ children }: { children: string }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom mr-[0.22em]">
      <motion.span
        variants={maskRise}
        className="inline-block bg-gradient-to-r from-brand-secondary via-teal-300 to-brand-secondary bg-clip-text text-transparent"
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
export const Hero: React.FC = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { t, isRtl } = useI18n();

  /* Pointer-driven parallax */
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const cfg = { stiffness: 100, damping: 24, mass: 0.6 };
  const auraX = useSpring(useTransform(px, (v) => v * 44), cfg);
  const auraY = useSpring(useTransform(py, (v) => v * 44), cfg);
  const gridX = useSpring(useTransform(px, (v) => v * -20), cfg);
  const gridY = useSpring(useTransform(py, (v) => v * -20), cfg);

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !sectionRef.current) return;
    const r = sectionRef.current.getBoundingClientRect();
    px.set((e.clientX - (r.left + r.width / 2)) / r.width);
    py.set((e.clientY - (r.top + r.height / 2)) / r.height);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  const h = t.hero;
  const credentials = [
    { value: h.stat_1_val, label: h.stat_1_label },
    { value: h.stat_2_val, label: h.stat_2_label },
    { value: h.stat_3_val, label: h.stat_3_label },
  ];

  /* Split headline words for the reveal animation */
  const lineA = h.h1_a.split(' ');
  const lineB = h.h1_b.split(' ');
  const lineC = h.h1_c.split(' ');

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative overflow-hidden bg-brand-dark"
      style={{ minHeight: '100svh' }}
    >
      {/* Dark grid — parallaxes gently counter to the cursor */}
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 -m-16 bg-grid-dark mask-fade opacity-70"
      />

      {/* Primary glow — deep indigo follows cursor */}
      <motion.div
        aria-hidden
        style={{ x: auraX, y: auraY }}
        className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-60"
        // inline style because we need a radial-gradient that isn't a Tailwind class
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(21,21,107,0.6) 0%, rgba(21,21,107,0.2) 55%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Teal accent — static, bottom-right */}
      <div
        aria-hidden
        className="absolute right-0 bottom-0 w-[560px] h-[560px] pointer-events-none"
        style={{
          background:
            'radial-gradient(closest-side, rgba(5,216,156,0.14) 0%, rgba(5,216,156,0.04) 60%, transparent 100%)',
        }}
      />

      {/* Bottom fade to white (smooth transition to next section) */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, var(--color-brand-dark) 60%, #fff 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: text | dashboard card */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-32 md:pt-40 ${
            isRtl ? 'lg:grid-flow-col-dense' : ''
          }`}
        >
          {/* ── Text column ── */}
          <div className={`flex flex-col ${isRtl ? 'items-end text-right' : 'items-start'}`}>
            {/* Animated badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm text-white/65 text-[0.72rem] font-semibold tracking-wide mb-9"
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-75" />
                )}
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-secondary" />
              </span>
              {h.badge}
            </motion.div>

            {/* Headline — word-by-word mask reveal */}
            <motion.h1
              variants={stagger(0.07, 0.12)}
              initial={reduce ? false : 'hidden'}
              animate="show"
              className="font-display font-bold text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.04] tracking-[-0.03em] mb-6"
            >
              <span className="block">
                {lineA.map((w) => (
                  <Word key={w}>{w}</Word>
                ))}
              </span>
              <span className="block">
                {lineB.map((w) => (
                  <GradWord key={w}>{w}</GradWord>
                ))}{' '}
                {lineC.map((w) => (
                  <Word key={w}>{w}</Word>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-xl"
            >
              {h.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className={`flex flex-col sm:flex-row items-start gap-4 ${
                isRtl ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <Magnetic strength={0.4} className="inline-flex">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-secondary text-brand-dark font-bold text-sm hover:brightness-110 transition-all duration-200 shadow-[0_0_28px_-4px_rgba(5,216,156,0.55)]"
                >
                  {h.cta_primary}
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 group-hover:translate-x-0.5 ${isRtl ? 'rotate-180' : ''}`}
                  />
                </Link>
              </Magnetic>
              <Magnetic strength={0.3} className="inline-flex">
                <Link
                  href="#solutions"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.14] text-white/65 font-semibold text-sm hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  {h.cta_secondary}
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 group-hover:translate-x-0.5 ${isRtl ? 'rotate-180' : ''}`}
                  />
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* ── Dashboard card column (desktop only) ── */}
          <div className={`hidden lg:flex items-center justify-center ${isRtl ? 'lg:order-first' : ''}`}>
            <DashboardCard />
          </div>
        </div>

        {/* Credential strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-stretch justify-center divide-x divide-white/[0.06] border-t border-white/[0.06] max-w-2xl mx-auto mt-16 md:mt-20"
        >
          {credentials.map((c) => (
            <div key={c.label} className="flex-1 px-4 py-6 text-center">
              <div className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                {c.value}
              </div>
              <div className="mt-1 text-[0.7rem] text-white/35 font-medium uppercase tracking-[0.12em]">
                {c.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Extra spacing so the bottom fade doesn't clip content */}
        <div className="h-16 md:h-20" />
      </div>
    </section>
  );
};
