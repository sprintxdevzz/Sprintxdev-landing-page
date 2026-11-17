'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Pause, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export type ShowcaseItem = { title: string; desc: string; image: string };

type Props = {
  basePath: string;
  eyebrow: string;
  h2_a: string;
  h2_b: string;
  note: string;
  url: string;
  items: ShowcaseItem[];
  className?: string;
};

const DURATION_MS = 6000;
const LABELS = {
  en: { viewFull: 'View full size', paused: 'Paused', close: 'Close', prev: 'Previous screen', next: 'Next screen' },
  ar: { viewFull: 'عرض بالحجم الكامل', paused: 'متوقف مؤقتاً', close: 'إغلاق', prev: 'الشاشة السابقة', next: 'الشاشة التالية' },
};
const EASE = 'cubic-bezier(0.77,0,0.18,1)';

export function ProductShowcase({ basePath, eyebrow, h2_a, h2_b, note, url, items, className = '' }: Props) {
  const { locale, isRtl } = useI18n();
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const t = LABELS[locale];
  const frameRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = items[active];

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAutoplay(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = (i: number, fromAuto = false) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
    const tab = tabRefs.current[i];
    const strip = tab?.parentElement;
    if (fromAuto && tab && strip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    }
  };

  const step = (dir: 1 | -1) => goTo((active + dir + items.length) % items.length);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowRight') step(isRtl ? -1 : 1);
      if (e.key === 'ArrowLeft') step(isRtl ? 1 : -1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  });

  const paused = hovered || !inView || lightbox;
  // Entering screen wipes in from the reading-start edge.
  const hiddenClip = isRtl ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';

  return (
    <section className={`py-20 md:py-28 relative overflow-hidden ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-brand-primary justify-center mb-4"
          >
            {eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-4xl font-display font-bold text-ink"
          >
            {h2_a} <span className="gradient-text">{h2_b}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] gap-6 lg:gap-8 items-start">
          {/* Feature tabs */}
          <div
            role="tablist"
            className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-1 lg:pb-0 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <button
                  key={item.image}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => goTo(i)}
                  className={`group relative shrink-0 snap-start overflow-hidden text-start rounded-xl border px-4 py-3 lg:px-5 lg:py-4 transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-brand-primary/20 shadow-[0_6px_24px_-10px_rgba(21,21,107,0.25)]'
                      : 'bg-white/40 border-black/[0.06] hover:bg-white hover:border-black/[0.1]'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-y-3 start-0 w-[3px] rounded-full bg-gradient-to-b from-brand-primary to-brand-secondary transition-transform duration-300 origin-center ${
                      isActive ? 'scale-y-100' : 'scale-y-0'
                    }`}
                  />
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[0.65rem] font-bold tabular-nums transition-colors duration-300 ${
                        isActive ? 'text-brand-secondary' : 'text-ink-400'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-sm font-bold whitespace-nowrap lg:whitespace-normal transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-ink-500 group-hover:text-ink'
                      }`}
                    >
                      {item.title}
                    </span>
                  </span>
                  <span
                    className={`hidden lg:grid transition-all duration-500 ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-1.5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <span className="overflow-hidden text-xs text-ink-500 leading-relaxed">{item.desc}</span>
                  </span>

                  {/* Progress bar — its animationend advances the tour */}
                  {isActive && autoplay && (
                    <span aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-black/[0.04]">
                      <span
                        key={`${active}-${locale}`}
                        className={`tour-progress block h-full bg-gradient-to-r from-brand-primary to-brand-secondary ${
                          isRtl ? 'origin-right' : 'origin-left'
                        }`}
                        style={{
                          ['--tour-duration' as string]: `${DURATION_MS}ms`,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                        onAnimationEnd={() => goTo((active + 1) % items.length, true)}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Browser frame */}
          <div>
            <div className="rounded-2xl border border-black/[0.08] bg-white shadow-[0_24px_60px_-24px_rgba(10,15,31,0.28)] overflow-hidden">
              <div dir="ltr" className="flex items-center gap-3 px-4 py-2.5 border-b border-black/[0.06] bg-[#F7F8FA]">
                <span className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </span>
                <span className="flex-1 max-w-sm mx-auto truncate rounded-md bg-white border border-black/[0.06] px-3 py-1 text-center font-mono text-[0.65rem] text-ink-400">
                  {url}
                </span>
                <span className="w-[42px]" />
              </div>
              <div
                ref={frameRef}
                className="group/frame relative aspect-video bg-[#F4F6F8] overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {items.map((item, i) => {
                  const isActive = i === active;
                  const isPrev = i === prev;
                  const style: React.CSSProperties = isActive
                    ? {
                        zIndex: 2,
                        clipPath: 'inset(0 0 0 0)',
                        transform: 'scale(1)',
                        filter: 'none',
                        transition: `clip-path 900ms ${EASE}, transform 1200ms ${EASE}`,
                      }
                    : isPrev
                      ? {
                          zIndex: 1,
                          clipPath: 'inset(0 0 0 0)',
                          transform: 'scale(0.96)',
                          filter: 'brightness(0.9) blur(2px)',
                          transition: `transform 900ms ${EASE}, filter 900ms ${EASE}`,
                        }
                      : { zIndex: 0, clipPath: hiddenClip, transform: 'scale(1.06)', opacity: 0, transition: 'none' };
                  return (
                    <div key={`${locale}-${item.image}`} className="absolute inset-0 will-change-[clip-path,transform]" style={style} aria-hidden={!isActive}>
                      <Image
                        src={`${basePath}/${locale}/${item.image}.webp`}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1280px) 860px, (min-width: 1024px) 66vw, 100vw"
                        className="object-cover object-top"
                        priority={i === 0}
                      />
                    </div>
                  );
                })}
                {/* Light sweep that rides the wipe edge */}
                <span
                  key={`sweep-${active}`}
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 z-[3] w-1/3 ${isRtl ? 'tour-sweep-rtl' : 'tour-sweep'} ${prev === null ? 'hidden' : ''}`}
                />
                {/* Hover: paused state + open full size */}
                <button
                  type="button"
                  onClick={() => setLightbox(true)}
                  aria-label={t.viewFull}
                  className="absolute inset-0 z-[4] flex items-center justify-center bg-brand-dark/0 transition-colors duration-300 group-hover/frame:bg-brand-dark/25 focus-visible:bg-brand-dark/25 cursor-zoom-in"
                >
                  <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-brand-primary shadow-[0_8px_30px_-8px_rgba(10,15,31,0.45)] opacity-0 translate-y-2 transition-all duration-300 group-hover/frame:opacity-100 group-hover/frame:translate-y-0 group-focus-visible/frame:opacity-100">
                    <Maximize2 size={14} />
                    {t.viewFull}
                  </span>
                </button>
                {autoplay && (
                  <span
                    className={`pointer-events-none absolute top-3 end-3 z-[5] flex items-center gap-1.5 rounded-full bg-brand-dark/70 backdrop-blur px-2.5 py-1 text-[0.65rem] font-semibold text-white transition-opacity duration-300 ${
                      hovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Pause size={10} fill="currentColor" />
                    {t.paused}
                  </span>
                )}
              </div>
            </div>
            <p key={`desc-${active}`} className="mt-4 text-sm text-ink-500 leading-relaxed lg:hidden animate-[tour-fade_500ms_ease-out]">
              {current.desc}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden>
                {items.map((item, i) => (
                  <span
                    key={item.image}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? 'w-5 bg-brand-primary' : 'w-1.5 bg-black/15'}`}
                  />
                ))}
              </div>
              <p className="text-[0.7rem] text-ink-400">{note}</p>
            </div>
          </div>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {lightbox && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={current.title}
                dir={isRtl ? 'rtl' : 'ltr'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark/85 backdrop-blur-md p-4 sm:p-8"
                onClick={() => setLightbox(false)}
              >
                <button
                  type="button"
                  aria-label={t.close}
                  onClick={() => setLightbox(false)}
                  className="absolute top-4 end-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>

                <motion.div
                  key={`${locale}-${current.image}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative w-full max-w-[1400px] aspect-video rounded-xl overflow-hidden shadow-2xl bg-[#F4F6F8]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={`${basePath}/${locale}/${current.image}.webp`}
                    alt={current.title}
                    fill
                    sizes="(min-width: 1400px) 1400px, 100vw"
                    className="object-contain"
                  />
                </motion.div>

                <div
                  className="mt-5 flex w-full max-w-[1400px] items-center justify-between gap-4 text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    aria-label={t.prev}
                    onClick={() => step(-1)}
                    className="w-10 h-10 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {isRtl ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                  </button>
                  <div className="text-center min-w-0">
                    <p className="text-sm font-bold">
                      <span className="font-mono text-brand-secondary me-2">
                        {String(active + 1).padStart(2, '0')}/{String(items.length).padStart(2, '0')}
                      </span>
                      {current.title}
                    </p>
                    <p className="mt-1 text-xs text-white/70 leading-relaxed max-w-xl mx-auto">{current.desc}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={t.next}
                    onClick={() => step(1)}
                    className="w-10 h-10 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {isRtl ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
