import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NeonButton } from "./ui/neon-button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [pendingScroll, setPendingScroll] = React.useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = 96;
      window.scrollTo({
        top: Math.max(rect.top + window.scrollY - offset, 0),
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => scrollToId("contact");

  const handleMobileNavClick = (id: string) => {
    setPendingScroll(id);
    setIsOpen(false);
  };

  const handleMenuExitComplete = () => {
    if (pendingScroll) {
      scrollToId(pendingScroll);
      setPendingScroll(null);
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative overflow-visible w-full max-w-full sm:max-w-5xl transition-all duration-500 ease-in-out rounded-3xl md:rounded-full border border-white/30 shadow-[0_4px_18px_rgba(15,23,42,0.10)] ${
          scrolled
            ? "bg-white/25 backdrop-blur-2xl py-3 px-4 sm:px-6"
            : "bg-white/15 backdrop-blur-xl py-3.5 px-4 sm:py-4 sm:px-8"
        }`}
      >
        {/* Glassy overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-full bg-gradient-to-br from-white/40 via-white/10 to-white/0 opacity-90" />

        <div className="relative z-10 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-40 md:w-30 flex-shrink-0">
              <img
                src="/nextautomationlogo.webp"
                alt="Next Automation logo"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative group/sol">
              <button className="text-xs font-bold text-brand-dark/70 hover:text-brand-primary transition-colors flex items-center gap-1 py-1">
                Solutions
                <ChevronDown
                  size={11}
                  className="opacity-60 group-hover/sol:rotate-180 transition-transform duration-200"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover/sol:opacity-100 group-hover/sol:pointer-events-auto transition-all duration-200">
                <div className="bg-white/95 backdrop-blur-xl border border-black/8 rounded-2xl shadow-xl shadow-black/8 p-2 min-w-[200px]">
                  <DropdownItem href="#solutions">CX Solutions</DropdownItem>
                  <DropdownItem href="#solutions">Enterprise Solutions</DropdownItem>
                  <DropdownItem href="#solutions">Automation</DropdownItem>
                </div>
              </div>
            </div>

            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <div className="flex items-center gap-4 ml-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NeonButton
                  variant="solid"
                  size="sm"
                  onClick={scrollToContact}
                  className="border-brand-primary/25 text-brand-primary"
                >
                  Book a Demo
                </NeonButton>
              </motion.div>
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
        <AnimatePresence onExitComplete={handleMenuExitComplete}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="pt-4 pb-6 space-y-2 border-t border-black/5">
                <MobileNavLink
                  targetId="solutions"
                  onClick={() => handleMobileNavClick("solutions")}
                >
                  CX Solutions
                </MobileNavLink>
                <MobileNavLink
                  targetId="solutions"
                  onClick={() => handleMobileNavClick("solutions")}
                >
                  Enterprise Solutions
                </MobileNavLink>
                <MobileNavLink
                  targetId="solutions"
                  onClick={() => handleMobileNavClick("solutions")}
                >
                  Automation
                </MobileNavLink>
                <MobileNavLink
                  targetId="process"
                  onClick={() => handleMobileNavClick("process")}
                >
                  Process
                </MobileNavLink>
                <MobileNavLink
                  targetId="contact"
                  onClick={() => handleMobileNavClick("contact")}
                >
                  Contact
                </MobileNavLink>
                <div className="pt-2">
                  <NeonButton
                    variant="glass"
                    size="default"
                    onClick={() => handleMobileNavClick("contact")}
                    className="w-full border-brand-primary/25 text-brand-primary"
                  >
                    Book a Demo
                  </NeonButton>
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

const DropdownItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="block px-4 py-2.5 text-xs font-bold text-brand-dark/65 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all duration-150"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  targetId,
  children,
  onClick,
}: {
  targetId: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="w-full text-left block text-sm font-bold text-brand-dark/70 hover:text-brand-primary py-2 bg"
  >
    {children}
  </button>
);
