import React from 'react';

interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  className?: string;
}

/**
 * Seamless infinite marquee. Renders the item set twice in a single track and
 * slides exactly one copy-width, so the loop is invisible. CSS-driven, so it
 * runs off the main thread and is auto-paused under prefers-reduced-motion.
 */
export function Marquee({ items, duration = 38, className = '' }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={`marquee-pause relative overflow-hidden ${className}`}
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        maskImage:
          'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div
        className="flex w-max animate-marquee items-center"
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
        aria-hidden="true"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-sm font-medium tracking-tight text-ink-500 whitespace-nowrap">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
