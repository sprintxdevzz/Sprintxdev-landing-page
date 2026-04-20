import React from "react";
import { motion } from "motion/react";
import {
  MessageSquare,
  Globe,
  Layers,
  BarChart3,
  Activity,
  Target,
  Zap,
  TrendingUp,
  Users,
  Database,
  Code2,
  Bot,
  FileSearch,
  GitMerge,
  Bell,
  BarChart2,
  CheckCircle2,
} from "lucide-react";

type Feature = { label: string; desc: string; icon: React.ReactNode };
type Section = { name: string; features: Feature[] };

type Solution = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  sections: Section[];
  benefits: string[];
  icon: React.ReactNode;
};

const solutions: Solution[] = [
  {
    id: "1",
    title: "CX Solutions",
    tagline: "From Raw Data to Radical Growth",
    description:
      "Your strategic command center engineered to transform every customer signal into a roadmap for success. A 360-degree lens across Customer Experience, Contact Centers, Employee pulse, and Digital Journey.",
    icon: <BarChart2 />,
    sections: [
      {
        name: "Survey Platform",
        features: [
          {
            label: "Conversational Data Entry",
            desc: "Chat or voice-guided prompts for seamless survey creation.",
            icon: <MessageSquare size={13} />,
          },
          {
            label: "Fully Bilingual",
            desc: "Native Arabic & English with integrated translation.",
            icon: <Globe size={13} />,
          },
          {
            label: "Adaptive Logic Paths",
            desc: "Visual tree builder for complex conditional journeys.",
            icon: <Layers size={13} />,
          },
          {
            label: "Executive Dashboards",
            desc: "Real-time BI reports for executive decision-making.",
            icon: <BarChart3 size={13} />,
          },
        ],
      },
      {
        name: "Event Tracking System",
        features: [
          {
            label: "Real-Time Behavioral Capture",
            desc: "Track operational data across all channels instantly.",
            icon: <Activity size={13} />,
          },
          {
            label: "Predictive Analytics",
            desc: "Identify revenue opportunities before they're missed.",
            icon: <TrendingUp size={13} />,
          },
          {
            label: "Omnichannel Intelligence",
            desc: "Consolidate all data into one unified dashboard.",
            icon: <Database size={13} />,
          },
        ],
      },
    ],
    benefits: [
      "True Omnichannel Mastery across every channel",
      "Predictive action turning insights into revenue",
      "Real-Time Velocity for rapid team accountability",
    ],
  },
  {
    id: "2",
    title: "Enterprise Solutions",
    tagline: "The Infrastructure Backbone of Your Business",
    description:
      "Purpose-built ERP, CRM, and performance management platforms tailored to your industry and integrated seamlessly with your existing systems. Built for enterprises demanding reliability, scalability, and precision.",
    icon: <Code2 />,
    sections: [
      {
        name: "CRM",
        features: [
          {
            label: "Microsoft CRM Customization",
            desc: "Tailor-fit CRM workflows to your sales and service model.",
            icon: <Users size={13} />,
          },
          {
            label: "360° Customer View",
            desc: "Sales, marketing, and service automation in one platform.",
            icon: <Target size={13} />,
          },
          {
            label: "Revenue Forecasting",
            desc: "Pipeline analytics with real-time performance dashboards.",
            icon: <TrendingUp size={13} />,
          },
        ],
      },
      {
        name: "ERP & Performance KPI",
        features: [
          {
            label: "End-to-End Resource Planning",
            desc: "Unify finance, supply chain, and operations in real time.",
            icon: <Layers size={13} />,
          },
          {
            label: "Power BI Integration",
            desc: "Customizable modules with cross-department data flow.",
            icon: <BarChart3 size={13} />,
          },
          {
            label: "KPI Frameworks",
            desc: "Link individual output to organizational objectives.",
            icon: <CheckCircle2 size={13} />,
          },
        ],
      },
    ],
    benefits: [
      "Seamless connectivity with your existing stack",
      "Workflow automation maximizing team productivity",
      "Scalable architecture built for enterprise growth",
      "24/7 dedicated maintenance & support",
    ],
  },
  {
    id: "3",
    title: "Automation",
    tagline: "Eliminate Friction. Maximize Throughput.",
    description:
      "We identify every repetitive, manual process in your operations and engineer intelligent automation that runs around the clock—freeing your team to focus on what drives real business value.",
    icon: <Bot />,
    sections: [
      {
        name: "Intelligent Automation",
        features: [
          {
            label: "Workflow Automation",
            desc: "Streamline repetitive tasks across departments and systems.",
            icon: <Zap size={13} />,
          },
          {
            label: "AI-Powered Decision Routing",
            desc: "Intelligent task assignment based on complexity and skill.",
            icon: <Bot size={13} />,
          },
          {
            label: "Document Processing & OCR",
            desc: "Form reading and intelligent data capture at scale.",
            icon: <FileSearch size={13} />,
          },
          {
            label: "Custom Integrations",
            desc: "Connect every tool in your stack into one ecosystem.",
            icon: <GitMerge size={13} />,
          },
        ],
      },
      {
        name: "Operations & RPA",
        features: [
          {
            label: "Process Monitoring & Alerting",
            desc: "Real-time visibility and automatic escalation for critical flows.",
            icon: <Bell size={13} />,
          },
        ],
      },
    ],
    benefits: [
      "Proven ROI with measurable time-to-value",
      "Scalable automation architecture",
      "Maximized team productivity",
      "Dedicated support & continuous optimization",
    ],
  },
];

export const Solutions: React.FC = () => {
  return (
    <section
      id="solutions"
      className="py-20 md:py-32 bg-[#F5F5FF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold text-xs uppercase tracking-[0.3em] mb-4"
          >
            OUR SOLUTIONS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-4 md:mb-6"
          >
            Built for modern{" "}
            <span className="gradient-text">enterprise complexity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/50 max-w-2xl mx-auto font-medium"
          >
            Three interconnected pillars designed to work as one unified system:
            CX intelligence, enterprise infrastructure, and end-to-end automation.
          </motion.p>
        </div>

        {/* Horizontal cards */}
        <div className="space-y-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-white rounded-[28px] md:rounded-[36px] border border-black/[0.06] hover:border-brand-primary/20 hover:shadow-2xl hover:shadow-brand-primary/[0.06] transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.05]">

                {/* ── Column 1: Identity ── */}
                <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
                  <div>
                    {/* Number + icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/[0.07] flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
                        {React.cloneElement(sol.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                      </div>
                      <span className="text-5xl font-display font-black text-brand-dark/[0.04] select-none">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title + tagline */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-dark mb-2 leading-tight">
                      {sol.title}
                    </h3>
                    <p className="text-brand-secondary font-bold text-xs mb-5 leading-snug">
                      {sol.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-brand-dark/50 text-sm leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>

                {/* ── Column 2: Features ── */}
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {sol.sections.map((sec, sIdx) => (
                      <div key={sIdx}>
                        <p className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.18em] mb-4">
                          {sec.name}
                        </p>
                        <div className="space-y-3.5">
                          {sec.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex gap-2.5">
                              <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-primary/[0.08] flex items-center justify-center text-brand-primary shrink-0">
                                {feat.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-brand-dark text-xs mb-0.5">
                                  {feat.label}
                                </h4>
                                <p className="text-brand-dark/45 text-xs leading-relaxed">
                                  {feat.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Column 3: Benefits ── */}
                <div className="p-8 md:p-10 bg-brand-primary/[0.02] flex flex-col justify-center">
                  <p className="text-brand-dark font-bold text-[10px] uppercase tracking-[0.18em] mb-5">
                    Key Benefits
                  </p>
                  <ul className="space-y-4">
                    {sol.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0" />
                        <span className="text-sm text-brand-dark/65 leading-snug font-medium">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-secondary/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
