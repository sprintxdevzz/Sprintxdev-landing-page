'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NeonButton } from './ui/neon-button';

const solutionLinks = [
  { href: '/solutions#cx-solutions', label: 'CX Solutions' },
  { href: '/solutions#enterprise', label: 'Enterprise Solutions' },
  { href: '/solutions#automation', label: 'Automation' },
];

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
            <Link href="/" className="w-40 md:w-36 shrink-0">
              <Image
                src="/nextautomationlogo.webp"
                alt="Next Automation"
                width={493}
                height={120}
                priority
                quality={100}
                sizes="160px"
                className="w-full h-auto select-none"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {/* Solutions — clickable link + hover/focus dropdown */}
            <div className="relative group/sol">
              <Link
                href="/solutions"
                className="text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary transition-colors flex items-center gap-1 py-1"
              >
                Solutions
                <ChevronDown
                  size={12}
                  className="opacity-60 group-hover/sol:rotate-180 transition-transform duration-200"
                />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none transition-all duration-200 group-hover/sol:opacity-100 group-hover/sol:pointer-events-auto group-focus-within/sol:opacity-100 group-focus-within/sol:pointer-events-auto">
                <div className="bg-white border border-black/[0.07] rounded-2xl shadow-[var(--shadow-pop)] p-2 min-w-[210px]">
                  {solutionLinks.map((l) => (
                    <DropdownItem key={l.href} href={l.href}>
                      {l.label}
                    </DropdownItem>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/methodology">Process</NavLink>
            <NavLink href="/#technologies">Stack</NavLink>
            <NavLink href="/#contact">Contact</NavLink>

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
              <div className="pt-4 pb-6 space-y-1 border-t border-black/5">
                <MobileNavLink href="/solutions" onClick={close}>
                  All Solutions
                </MobileNavLink>
                <div className="pl-3 border-l border-black/[0.06] ml-1 space-y-1">
                  {solutionLinks.map((l) => (
                    <MobileNavLink key={l.href} href={l.href} onClick={close}>
                      {l.label}
                    </MobileNavLink>
                  ))}
                </div>
                <MobileNavLink href="/methodology" onClick={close}>Process</MobileNavLink>
                <MobileNavLink href="/#technologies" onClick={close}>Stack</MobileNavLink>
                <MobileNavLink href="/contact" onClick={close}>Contact</MobileNavLink>
                <div className="pt-3">
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

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 rounded-full bg-brand-primary transition-all duration-300 group-hover:w-full" />
  </Link>
);

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-4 py-2.5 text-[0.8rem] font-semibold text-ink-500 hover:text-brand-primary hover:bg-brand-primary/[0.06] rounded-xl transition-all duration-150"
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
    className="w-full text-left block text-sm font-semibold text-ink-500 hover:text-brand-primary py-2 transition-colors"
  >
    {children}
  </Link>
);
