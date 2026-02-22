import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative overflow-hidden w-full max-w-full sm:max-w-5xl transition-all duration-500 ease-in-out rounded-3xl md:rounded-full border border-white/30 shadow-[0_18px_60px_rgba(15,23,42,0.35)] ${
          scrolled
            ? "bg-white/25 backdrop-blur-2xl py-3 px-4 sm:px-6"
            : "bg-white/15 backdrop-blur-xl py-3.5 px-4 sm:py-4 sm:px-8"
        }`}
      >
        {/* Glassy overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-white/0 opacity-90" />
        <div className="pointer-events-none absolute inset-x-4 top-px h-px bg-white/60/">
          {/* subtle top highlight */}
        </div>

        <div className="relative z-10 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-20 md:w-24 flex-shrink-0">
              <img
                src="/SprintXDevLogo.png"
                alt="Sprint X Dev logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#solutions">Solutions</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#tracking">Tracking</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="flex items-center gap-4 ml-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-2 bg-brand-primary text-white rounded-full text-xs font-bold shadow-lg shadow-brand-primary/20 transition-all"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="pt-4 pb-6 space-y-4 border-t border-black/5">
                <MobileNavLink
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </MobileNavLink>
                <MobileNavLink href="#process" onClick={() => setIsOpen(false)}>
                  Process
                </MobileNavLink>
                <MobileNavLink
                  href="#tracking"
                  onClick={() => setIsOpen(false)}
                >
                  Tracking
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </MobileNavLink>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      scrollToContact();
                    }}
                    className="w-full py-3 text-center font-bold text-white bg-brand-primary rounded-xl shadow-lg shadow-brand-primary/20 text-sm"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    whileHover={{ y: -1 }}
    className="text-xs font-bold text-brand-dark/70 hover:text-brand-primary transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
  </motion.a>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-sm font-bold text-brand-dark/70 hover:text-brand-primary py-2"
  >
    {children}
  </a>
);
