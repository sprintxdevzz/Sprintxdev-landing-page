import React from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Target, 
  TrendingUp, 
  Users, 
  PieChart, 
  ArrowUpRight,
  DollarSign,
  Clock,
  Zap,
  Database,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <StatCard 
                label="System Velocity" 
                value="98.2%" 
                sub="High-performance" 
                icon={<Zap className="text-brand-secondary" size={20} />}
              />
              <StatCard 
                label="Data Throughput" 
                value="1.2 TB" 
                sub="Processed today" 
                icon={<Database className="text-brand-primary" size={20} />}
              />
              <StatCard 
                label="Active Integrations" 
                value="24" 
                sub="All systems online" 
                icon={<Layers className="text-brand-accent" size={20} />}
              />
            </div>
            <div className="bg-white/5 rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/5 h-64 md:h-72 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="text-white/80 font-bold text-xs md:text-sm">Real-time Infrastructure Load</h4>
                <div className="flex gap-2 md:gap-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-brand-primary" />
                    <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase">Primary</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-brand-secondary" />
                    <span className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase">Secondary</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-end gap-1.5 md:gap-3 relative z-10">
                {[40, 60, 45, 80, 55, 90, 70, 85, 65, 95, 75, 100, 80, 60, 40].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-brand-primary/10 to-brand-primary rounded-t-sm md:rounded-t-lg"
                  />
                ))}
              </div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            </div>
          </motion.div>
        );
      case 'Milestones':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 md:space-y-8"
          >
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { title: "Infrastructure Setup", status: "Completed", date: "Oct 24", progress: 100 },
                { title: "Data Migration", status: "In Progress", date: "Nov 12", progress: 65 },
                { title: "API Integration", status: "Pending", date: "Dec 05", progress: 0 },
              ].map((m, i) => (
                <div key={i} className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center ${m.progress === 100 ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-primary/20 text-brand-primary'}`}>
                      {m.progress === 100 ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm">{m.title}</h4>
                      <p className="text-white/40 text-[10px] md:text-xs">{m.status} • {m.date}</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full gradient-brand" style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'Performance':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            <div className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">14ms</div>
              <div className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Avg Latency</div>
            </div>
            <div className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/5 flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">99.9%</div>
              <div className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest">Uptime</div>
            </div>
            <div className="col-span-1 sm:col-span-2 p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white/5 border border-white/5">
              <h4 className="text-white font-bold text-xs md:text-sm mb-6">Resource Allocation</h4>
              <div className="space-y-4 md:space-y-6">
                {['Compute', 'Storage', 'Network'].map((r, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] md:text-xs font-bold">
                      <span className="text-white/60">{r}</span>
                      <span className="text-white">{(80 - i * 15)}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-secondary" style={{ width: `${(80 - i * 15)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'Collaboration':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex -space-x-2 md:-space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-brand-navy bg-brand-primary/20 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-brand-navy bg-white/10 flex items-center justify-center text-white/60 text-[10px] md:text-sm font-bold">
                +2
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              {[
                { user: "Alex M.", action: "approved the design", time: "2m ago" },
                { user: "Sarah K.", action: "pushed to production", time: "15m ago" },
                { user: "System", action: "auto-scaled compute nodes", time: "1h ago" },
              ].map((a, i) => (
                <div key={i} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-brand-primary mt-1.5 md:mt-1.5" />
                  <div>
                    <p className="text-white text-xs md:text-sm"><span className="font-bold">{a.user}</span> {a.action}</p>
                    <p className="text-white/30 text-[10px] md:text-xs">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="tracking" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-4 md:mb-6"
          >
            Live Progress <span className="gradient-text">Tracking</span>
          </motion.h2>
          <p className="text-brand-dark/50 text-base md:text-lg font-medium px-4">Review progress and approve deliverables in real-time.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Floating Cards */}
          <div className="absolute -left-4 md:-left-16 top-1/4 z-20 hidden lg:block">
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="p-5 rounded-2xl glass-card border border-brand-primary/20 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] leading-none mb-1.5">Status</div>
                  <div className="text-sm font-bold text-brand-dark">Milestone Reached</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -right-4 md:-right-16 bottom-1/4 z-20 hidden lg:block">
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1 
              }}
              className="p-5 rounded-2xl glass-card border border-brand-secondary/20 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-[0.2em] leading-none mb-1.5">Performance</div>
                  <div className="text-sm font-bold text-brand-dark">+12.4% Efficiency</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Container */}
          <div className="relative z-10 bg-brand-dark rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 dashboard-shadow">
            <div className="flex flex-col lg:flex-row h-auto lg:h-[700px] overflow-hidden">
              {/* Sidebar */}
              <div className="w-full lg:w-80 bg-brand-dark border-b lg:border-b-0 lg:border-r border-white/5 p-8 md:p-10 flex flex-col gap-8 md:gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl gradient-brand flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    X
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white font-bold text-sm md:text-base">SprintX Project</div>
                    <div className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black">Active Session</div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 md:gap-3">
                  <SidebarItem 
                    icon={<LayoutDashboard size={18} />} 
                    label="Dashboard" 
                    active={activeTab === 'Dashboard'} 
                    onClick={() => setActiveTab('Dashboard')}
                  />
                  <SidebarItem 
                    icon={<Target size={18} />} 
                    label="Milestones" 
                    active={activeTab === 'Milestones'} 
                    onClick={() => setActiveTab('Milestones')}
                  />
                  <SidebarItem 
                    icon={<TrendingUp size={18} />} 
                    label="Performance" 
                    active={activeTab === 'Performance'} 
                    onClick={() => setActiveTab('Performance')}
                  />
                  <SidebarItem 
                    icon={<Users size={18} />} 
                    label="Collaboration" 
                    active={activeTab === 'Collaboration'} 
                    onClick={() => setActiveTab('Collaboration')}
                  />
                </div>

                <div className="mt-auto p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 hidden lg:block">
                  <div className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-widest font-black mb-4">Project Status</div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white text-xs md:text-sm font-bold">In Progress</span>
                    <span className="text-brand-secondary text-xs md:text-sm font-bold">75%</span>
                  </div>
                  <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      className="h-full gradient-brand" 
                    />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-[#0A0F14] p-8 md:p-12 overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold">{activeTab}</h3>
                  <div className="px-4 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest">
                    Last update: 2m ago
                  </div>
                </div>

                <div className="h-full overflow-y-auto pr-2 no-scrollbar">
                  {renderContent()}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-primary/10 blur-[80px] md:blur-[120px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-secondary/10 blur-[80px] md:blur-[120px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const SidebarItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) => (
  <motion.div 
    whileHover={{ x: 4 }}
    onClick={onClick}
    className={`flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-5 rounded-xl md:rounded-2xl transition-all cursor-pointer whitespace-nowrap lg:whitespace-normal ${active ? 'bg-white/10 text-white shadow-2xl shadow-black/40 border border-white/10' : 'text-white/40 hover:text-white/60 hover:bg-white/5'}`}
  >
    <div className={`${active ? 'text-brand-secondary' : ''}`}>{icon}</div>
    <span className="text-xs md:text-sm font-bold tracking-tight">{label}</span>
    {active && <motion.div layoutId="active-indicator" className="ml-auto w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-brand-secondary shadow-[0_0_15px_rgba(0,210,255,1)] hidden lg:block" />}
  </motion.div>
);

const StatCard = ({ label, value, sub, icon }: { label: string, value: string, sub: string, icon: React.ReactNode }) => (
  <div className="bg-white/5 rounded-[20px] md:rounded-[32px] p-5 md:p-8 border border-white/5 hover:bg-white/[0.08] transition-all group">
    <div className="flex justify-between items-start mb-6 md:mb-8">
      <span className="text-white/40 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 group-hover:scale-110 transition-transform group-hover:rotate-6">{icon}</div>
    </div>
    <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:text-2xl lg:text-4xl tracking-tight">{value}</div>
    <div className="text-white/30 text-[8px] md:text-[10px] font-medium uppercase tracking-widest">{sub}</div>
  </div>
);
