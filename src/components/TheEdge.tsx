import React from 'react';
import { motion } from 'motion/react';
import { 
  Users2, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

export const TheEdge: React.FC = () => {
  const edges = [
    {
      title: "Real-Time Collaboration",
      desc: "Review progress and approve deliverables through our integrated platform.",
      icon: <Users2 className="text-brand-primary" />
    },
    {
      title: "Performance Focus",
      desc: "We optimize for speed, reducing staff training periods and increasing delivery time.",
      icon: <Zap className="text-brand-secondary" />
    },
    {
      title: "Reliability",
      desc: "Dedicated maintenance ensures your systems stay online and updated.",
      icon: <ShieldCheck className="text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4"
          >
            The Edge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark leading-tight"
          >
            Why businesses choose <br className="hidden md:block" /> <span className="gradient-text">Sprint X Dev</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group p-6 md:p-0"
            >
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-brand-dark/[0.03] flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:rotate-6 transition-transform duration-500">
                {React.cloneElement(edge.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 md:mb-4">{edge.title}</h3>
              <p className="text-brand-dark/50 leading-relaxed text-sm md:text-base font-medium">
                {edge.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32 p-8 md:p-20 rounded-[32px] md:rounded-[60px] gradient-brand text-white text-center relative overflow-hidden shadow-2xl shadow-brand-primary/30"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">Ready to build what's next?</h2>
            <div className="flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-brand-primary rounded-xl md:rounded-2xl text-base md:text-lg font-bold shadow-xl"
              >
                Talk to an Expert
              </motion.button>
            </div>
          </div>
          
          {/* Background decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
