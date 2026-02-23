import React from "react";
import { motion } from "motion/react";
import { 
  Database, 
  BarChart3, 
  Code2, 
  Activity,
  Search,
  Globe,
  MessageSquare,
  Layers,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

export const Solutions: React.FC = () => {
  const solutions = [
    {
      id: "1",
      title: "Information Hub",
      subtitle: "Centralized Knowledge System",
      icon: <Database className="text-brand-primary" />,
      features: [
        {
          label: "Interactive Assistant",
          desc: "Provides direct answers pulled from your internal resource library.",
          icon: <MessageSquare size={14} />,
        },
        {
          label: "High-Speed Search",
          desc: "Delivers precise, filtered results across all your company data.",
          icon: <Search size={14} />,
        },
        {
          label: "Contextual Logic",
          desc: "Understands user intent to minimize search time and friction.",
          icon: <Activity size={14} />,
        },
        {
          label: "Knowledge Optimization",
          desc: "Enhances team self-sufficiency by organizing scattered data.",
          icon: <Layers size={14} />,
        },
        {
          label: "Bilingual Capability",
          desc: "Native support for both Arabic and English technical content.",
          icon: <Globe size={14} />,
        },
      ],
    },
    {
      id: "2",
      title: "Survey System",
      subtitle: "Smart Survey & Feedback Platform",
      icon: <BarChart3 className="text-brand-secondary" />,
      features: [
        {
          label: "Conversational Data Entry",
          desc: "Generate surveys easily through chat or voice-guided prompts.",
          icon: <MessageSquare size={14} />,
        },
        {
          label: "Localized Reach",
          desc: "Fully bilingual surveys with integrated translation for diverse audiences.",
          icon: <Globe size={14} />,
        },
        {
          label: "Adaptive Logic Paths",
          desc: "Visual tree builder for creating complex, conditional user journeys.",
          icon: <Layers size={14} />,
        },
        {
          label: "Business Intelligence",
          desc: "Advanced data processing that uncovers actionable growth trends.",
          icon: <BarChart3 size={14} />,
        },
        {
          label: "Automated Visuals",
          desc: "Real-time dashboards and reports designed for executive decision-making.",
          icon: <Activity size={14} />,
        },
      ],
    },
    {
      id: "3",
      title: "Custom Solutions",
      subtitle: "Sprint Custom Development",
      icon: <Code2 className="text-brand-primary" />,
      features: [
        {
          label: "Targeted Engineering",
          desc: "We build tools designed exclusively for your specific operational goals.",
          icon: <Target size={14} />,
        },
        {
          label: "Seamless Connectivity",
          desc: "New systems integrate effortlessly with your current software stack.",
          icon: <Layers size={14} />,
        },
        {
          label: "Workflow Automation",
          desc: "Streamline repetitive tasks to maximize your team's billable hours.",
          icon: <Zap size={14} />,
        },
        {
          label: "Scalable Architecture",
          desc: "Future-proof code built to expand as your enterprise grows larger.",
          icon: <TrendingUp size={14} />,
        },
        {
          label: "Continuous Maintenance",
          desc: "Dedicated technical support to ensure 24/7 system reliability.",
          icon: <Activity size={14} />,
        },
      ],
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-4 md:mb-6"
          >
            Our <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/50 max-w-2xl mx-auto font-medium"
          >
            High-velocity tools engineered for modern business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 md:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-black/5 hover:border-brand-primary/20 transition-all hover:shadow-2xl hover:shadow-brand-primary/5"
            >
              <div className="flex items-start justify-between mb-8 md:mb-10">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-brand-dark/[0.03] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(sol.icon as React.ReactElement, {
                    size: 28,
                  })}
                </div>
                <span className="text-3xl md:text-4xl font-display font-black text-brand-dark/5">
                  0{index + 1}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2">
                {sol.title}
              </h3>
              <p className="text-brand-primary font-bold text-xs md:text-sm uppercase tracking-wider mb-6 md:mb-8">
                {sol.subtitle}
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {sol.features.map((feat, fIndex) => (
                  <div key={fIndex} className="flex gap-3 md:gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-xs md:text-sm mb-1">
                        {feat.label}
                      </h4>
                      <p className="text-brand-dark/50 text-xs md:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-secondary/5 blur-[100px] rounded-full" />
    </section>
  );
};
