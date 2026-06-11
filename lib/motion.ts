import type { Variants, Transition } from 'motion/react';

/** Shared spring — natural, slightly weighted. Used for reveals & layout. */
export const spring: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 28,
  mass: 0.9,
};

/** Snappier spring for small interactive elements (magnetic, hover). */
export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 350,
  damping: 26,
};

/** Fade + rise — the default entrance for blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: spring },
};

/** Mask reveal — child slides up from behind an overflow-hidden parent. */
export const maskRise: Variants = {
  hidden: { y: '115%' },
  show: { y: '0%', transition: { type: 'spring', stiffness: 200, damping: 24 } },
};

/** Container that staggers its motion children. */
export const stagger = (childDelay = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: childDelay, delayChildren },
  },
});

/** Standard viewport config for scroll reveals — fire once, a little early. */
export const inView = { once: true, margin: '-80px' } as const;
