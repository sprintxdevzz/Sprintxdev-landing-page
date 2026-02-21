import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  PenTool, 
  Code2, 
  LineChart 
} from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      title: "Analysis",
      desc: "We identify your core challenges and map out a clear path to resolution.",
      icon: <Search className="text-white" />,
      color: "bg-brand-secondary shadow-[0_0_20px_rgba(0,210,255,0.3)]"
    },
    {
      title: "Design",
      desc: "Creating tailored blueprints that prioritize user experience and system speed.",
      icon: <PenTool className="text-white" />,
      color: "bg-brand-primary shadow-[0_0_20px_rgba(110,69,255,0.3)]"
    },
    {
      title: "Implementation",
      desc: "Clean execution with minimal impact on your current operations.",
      icon: <Code2 className="text-white" />,
      color: "bg-brand-secondary shadow-[0_0_20px_rgba(0,210,255,0.3)]"
    },
    {
      title: "Optimization",
      desc: "Continuous monitoring and support via our responsive ticketing system.",
      icon: <LineChart className="text-white" />,
      color: "bg-brand-primary shadow-[0_0_20px_rgba(110,69,255,0.3)]"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-3 md:mb-4"
            >
              How We Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
            >
              The Sprint Methodology
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-sm font-medium"
          >
            A streamlined approach to engineering high-velocity digital systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className={`w-12 md:w-14 h-12 md:h-14 rounded-xl md:rounded-2xl ${step.color} flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 20, className: "opacity-100" })}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
              <p className="text-white/40 leading-relaxed text-xs md:text-sm">
                {step.desc}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>
    </section>
  );
};
