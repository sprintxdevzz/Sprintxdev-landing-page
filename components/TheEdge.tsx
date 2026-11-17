"use client";

import React from "react";
import { motion } from "motion/react";
import { Users2, Zap, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const TheEdge: React.FC = () => {
  const { t } = useI18n();
  const e = t.edge;
  const edgeIcons = [<Users2 key="u" />, <Zap key="z" />, <ShieldCheck key="s" />];
  const edges = e.items.map((item, i) => ({ ...item, icon: edgeIcons[i] }));

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
            {e.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-[1.05] text-balance"
          >
            {e.h2}
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
