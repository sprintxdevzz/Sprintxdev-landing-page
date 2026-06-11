"use client";

import React from "react";
import { motion } from "motion/react";
import { Users2, Zap, ShieldCheck } from "lucide-react";

export const TheEdge: React.FC = () => {
  const edges = [
    {
      title: "Real-time collaboration",
      desc: "Review progress and approve deliverables through our integrated platform. Complete visibility at every stage of your project.",
      icon: <Users2 />,
    },
    {
      title: "Performance focus",
      desc: "We optimize for speed, reducing staff training periods and increasing delivery velocity. Maximum ROI with minimum disruption.",
      icon: <Zap />,
    },
    {
      title: "Reliability & support",
      desc: "Dedicated maintenance ensures your systems stay online, updated, and performing — 99.9% uptime with responsive support teams.",
      icon: <ShieldCheck />,
    },
  ];

  return (
    <section
      id="edge"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-brand-primary justify-center mb-5"
          >
            Why teams choose us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-[1.05] text-balance"
          >
            Built to ship, engineered to last
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="py-10 md:py-0 md:px-12 first:pl-0 last:pr-0"
            >
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-mono text-sm font-medium text-brand-primary tabular-nums">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-black/[0.07]" />
              </div>
              <div className="flex items-center gap-3 mb-3 text-brand-primary">
                {React.cloneElement(
                  edge.icon as React.ReactElement<{ size?: number; strokeWidth?: number }>,
                  { size: 20, strokeWidth: 1.75 },
                )}
                <h3 className="text-xl font-display font-semibold text-ink">
                  {edge.title}
                </h3>
              </div>
              <p className="text-ink-500 leading-relaxed text-sm max-w-xs">
                {edge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
