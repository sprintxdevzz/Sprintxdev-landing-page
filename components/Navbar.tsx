'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NeonButton } from './ui/neon-button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-4 md:top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative overflow-visible w-full max-w-full sm:max-w-5xl transition-all duration-300 ease-out rounded-2xl md:rounded-full ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-black/[0.07] shadow-[0_8px_30px_-12px_rgba(10,15,31,0.18)] py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-md border border-black/[0.05] shadow-[0_2px_12px_-6px_rgba(10,15,31,0.12)] py-3 px-4 sm:py-3.5 sm:px-8'
        }`}
      >
        <div className="relative z-10 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 group cursor-pointer">
            <a href="#" className="w-40 md:w-30 flex-shrink-0">
              <img
                src="/nextautomationlogo.webp"
                alt="Next Automation logo"
                className="w-full h-full object-contain"
              />
            </a>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {/* Solutions Dropdown */}
            <div className="relative group/sol">
              <button className="text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary transition-colors flex items-center gap-1 py-1">
                Solutions
                <ChevronDown
                  size={12}
                  className="opacity-60 group-hover/sol:rotate-180 transition-transform duration-200"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none group-hover/sol:opacity-100 group-hover/sol:pointer-events-auto transition-all duration-200">
                <div className="bg-white border border-black/[0.07] rounded-2xl shadow-[var(--shadow-pop)] p-2 min-w-[210px]">
                  <DropdownItem href="#solutions">CX Solutions</DropdownItem>
                  <DropdownItem href="#solutions">Enterprise Solutions</DropdownItem>
                  <DropdownItem href="#solutions">Automation</DropdownItem>
                </div>
              </div>
            </div>

            <NavLink href="#process">Process</NavLink>
            <NavLink href="#technologies">Stack</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            <div className="flex items-center gap-4 ml-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#contact">
                  <NeonButton
                    variant="solid"
                    size="sm"
                    className="border-brand-primary/25 text-brand-primary flex items-center gap-1.5"
                  >
                    <Phone size={13} />
                    Contact Us
                  </NeonButton>
                </a>
              </motion.div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className="pt-4 pb-6 space-y-2 border-t border-black/5">
                <MobileNavLink href="#solutions" onClick={close}>CX Solutions</MobileNavLink>
                <MobileNavLink href="#solutions" onClick={close}>Enterprise Solutions</MobileNavLink>
                <MobileNavLink href="#solutions" onClick={close}>Automation</MobileNavLink>
                <MobileNavLink href="#process" onClick={close}>Process</MobileNavLink>
                <MobileNavLink href="#technologies" onClick={close}>Stack</MobileNavLink>
                <MobileNavLink href="#contact" onClick={close}>Contact</MobileNavLink>
                <div className="pt-2">
                  <a href="#contact" onClick={close}>
                    <NeonButton
                      variant="glass"
                      size="default"
                      className="w-full border-brand-primary/25 text-brand-primary flex items-center justify-center gap-2"
                    >
                      <Phone size={14} />
                      Contact Us
                    </NeonButton>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 rounded-full bg-brand-primary transition-all duration-300 group-hover:w-full" />
  </a>
);

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-4 py-2.5 text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary hover:bg-brand-primary/[0.06] rounded-xl transition-all duration-150"
  >
    {children}
  </a>
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
    className="w-full text-left block text-sm font-semibold text-ink-500 hover:text-brand-primary py-2 transition-colors"
  >
    {children}
  </a>
);
