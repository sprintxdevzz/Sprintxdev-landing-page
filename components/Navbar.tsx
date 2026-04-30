'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NeonButton } from './ui/neon-button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative overflow-visible w-full max-w-full sm:max-w-5xl transition-all duration-500 ease-in-out rounded-3xl md:rounded-full border border-white/30 shadow-[0_4px_18px_rgba(15,23,42,0.10)] ${
          scrolled
            ? 'bg-white/25 backdrop-blur-2xl py-3 px-4 sm:px-6'
            : 'bg-white/15 backdrop-blur-xl py-3.5 px-4 sm:py-4 sm:px-8'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-full bg-gradient-to-br from-white/40 via-white/10 to-white/0 opacity-90" />

        <div className="relative z-10 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3 group">
            <Link href="/" className="w-40 md:w-30 flex-shrink-0">
              <img
                src="/nextautomationlogo.webp"
                alt="Next Automation logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
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
                  <DropdownItem href="/solutions#cx-solutions">CX Solutions</DropdownItem>
                  <DropdownItem href="/solutions#enterprise">Enterprise Solutions</DropdownItem>
                  <DropdownItem href="/solutions#automation">Automation</DropdownItem>
                </div>
              </div>
            </div>

            <NavLink href="/methodology" active={pathname === '/methodology'}>
              Process
            </NavLink>
            <NavLink href="/methodology#edge" active={false}>
              Why Us
            </NavLink>
            <NavLink href="/faq" active={pathname === '/faq'}>
              FAQ
            </NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>
              Contact
            </NavLink>

            <div className="flex items-center gap-4 ml-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <NeonButton
                    variant="solid"
                    size="sm"
                    className="border-brand-primary/25 text-brand-primary flex items-center gap-1.5"
                  >
                    <Phone size={13} />
                    Contact Us
                  </NeonButton>
                </Link>
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
                <MobileNavLink href="/solutions#cx-solutions" onClick={close}>
                  CX Solutions
                </MobileNavLink>
                <MobileNavLink href="/solutions#enterprise" onClick={close}>
                  Enterprise Solutions
                </MobileNavLink>
                <MobileNavLink href="/solutions#automation" onClick={close}>
                  Automation
                </MobileNavLink>
                <MobileNavLink href="/methodology" onClick={close}>
                  Process
                </MobileNavLink>
                <MobileNavLink href="/methodology#edge" onClick={close}>
                  Why Us
                </MobileNavLink>
                <MobileNavLink href="/faq" onClick={close}>
                  FAQ
                </MobileNavLink>
                <MobileNavLink href="/contact" onClick={close}>
                  Contact
                </MobileNavLink>
                <div className="pt-2">
                  <Link href="/contact" onClick={close}>
                    <NeonButton
                      variant="glass"
                      size="default"
                      className="w-full border-brand-primary/25 text-brand-primary flex items-center justify-center gap-2"
                    >
                      <Phone size={14} />
                      Contact Us
                    </NeonButton>
                  </Link>
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
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <Link href={href}>
    <motion.span
      whileHover={{ y: -1 }}
      className={`text-xs font-bold transition-colors relative group cursor-pointer ${
        active ? 'text-brand-primary' : 'text-brand-dark/70 hover:text-brand-primary'
      }`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
    </motion.span>
  </Link>
);

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-4 py-2.5 text-xs font-bold text-brand-dark/65 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all duration-150"
  >
    {children}
  </Link>
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
  <Link
    href={href}
    onClick={onClick}
    className="w-full text-left block text-sm font-bold text-brand-dark/70 hover:text-brand-primary py-2"
  >
    {children}
  </Link>
);
