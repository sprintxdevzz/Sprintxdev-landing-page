'use client';

import { motion, useScroll, useSpring } from 'motion/react';

/** Thin gradient bar pinned to the top, tracking page scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-primary via-brand-primary to-brand-secondary"
      aria-hidden="true"
    />
  );
}
