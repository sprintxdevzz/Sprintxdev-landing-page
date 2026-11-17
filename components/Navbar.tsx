'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NeonButton } from './ui/neon-button';
import { useI18n } from '@/lib/i18n';

const solutionLinks = [
  { href: '/solutions#cx-solutions', labelKey: 'cx_solutions' as const },
  { href: '/solutions#enterprise', labelKey: 'enterprise' as const },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { t, locale, setLocale, isRtl } = useI18n();

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
            : 'bg-brand-dark/70 backdrop-blur-md border border-white/[0.1] shadow-[0_2px_12px_-6px_rgba(10,15,31,0.3)] py-3 px-4 sm:py-3.5 sm:px-8'
        }`}
      >
        <div className="relative z-10 flex justify-between items-center">
          {/* Logo */}
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Solutions dropdown */}
            <div className="relative group/sol">
              <Link
                href="/solutions"
                className={`text-[0.8rem] font-semibold transition-colors flex items-center gap-1 py-1 ${
                  scrolled ? 'text-ink-500 hover:text-brand-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {t.nav.solutions}
                <ChevronDown
                  size={12}
                  className="opacity-60 group-hover/sol:rotate-180 transition-transform duration-200"
                />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 pointer-events-none transition-all duration-200 group-hover/sol:opacity-100 group-hover/sol:pointer-events-auto group-focus-within/sol:opacity-100 group-focus-within/sol:pointer-events-auto">
                <div className="bg-white border border-black/[0.07] rounded-2xl shadow-[var(--shadow-pop)] p-2 min-w-[210px]">
                  {solutionLinks.map((l) => (
                    <DropdownItem key={l.href} href={l.href}>
                      {t.nav[l.labelKey]}
                    </DropdownItem>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/methodology" scrolled={scrolled}>{t.nav.process}</NavLink>
            <NavLink href="/#technologies" scrolled={scrolled}>{t.nav.stack}</NavLink>
            <NavLink href="/#contact" scrolled={scrolled}>{t.nav.contact}</NavLink>

            <div className="flex items-center gap-3 ml-4">
              {/* Language toggle */}
              <div className={`flex items-center rounded-full border text-[0.72rem] font-bold overflow-hidden ${scrolled ? 'border-black/[0.1]' : 'border-white/[0.15]'}`}>
                <button
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1.5 transition-all duration-150 ${
                    locale === 'en'
                      ? 'bg-brand-secondary text-brand-dark'
                      : scrolled
                      ? 'text-ink-500 hover:text-brand-primary'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLocale('ar')}
                  className={`px-3 py-1.5 transition-all duration-150 ${
                    locale === 'ar'
                      ? 'bg-brand-secondary text-brand-dark'
                      : scrolled
                      ? 'text-ink-500 hover:text-brand-primary'
                      : 'text-white/50 hover:text-white'
                  }`}
                  style={{ fontFamily: 'var(--font-arabic)' }}
                >
                  عر
                </button>
              </div>

              {/* CTA */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <NeonButton
                    variant="solid"
                    size="sm"
                    className="border-brand-primary/25 text-brand-primary flex items-center gap-1.5"
                  >
                    <Phone size={13} />
                    {t.nav.contact_cta}
                  </NeonButton>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language toggle */}
            <div className={`flex items-center rounded-full border text-[0.7rem] font-bold overflow-hidden ${scrolled ? 'border-black/[0.1]' : 'border-white/[0.15]'}`}>
              <button
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1 transition-all duration-150 ${locale === 'en' ? 'bg-brand-secondary text-brand-dark' : scrolled ? 'text-ink-500' : 'text-white/50'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('ar')}
                className={`px-2.5 py-1 transition-all duration-150 ${locale === 'ar' ? 'bg-brand-secondary text-brand-dark' : scrolled ? 'text-ink-500' : 'text-white/50'}`}
                style={{ fontFamily: 'var(--font-arabic)' }}
              >
                عر
              </button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${scrolled ? 'text-brand-dark' : 'text-white'}`}
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4"
            >
              <div className={`pt-4 pb-6 space-y-1 border-t ${scrolled ? 'border-black/5' : 'border-white/[0.1]'}`}>
                <MobileNavLink href="/solutions" onClick={close} scrolled={scrolled}>
                  {t.nav.solutions}
                </MobileNavLink>
                <div className={`pl-3 border-l ml-1 space-y-1 ${scrolled ? 'border-black/[0.06]' : 'border-white/[0.08]'}`}>
                  {solutionLinks.map((l) => (
                    <MobileNavLink key={l.href} href={l.href} onClick={close} scrolled={scrolled}>
                      {t.nav[l.labelKey]}
                    </MobileNavLink>
                  ))}
                </div>
                <MobileNavLink href="/methodology" onClick={close} scrolled={scrolled}>{t.nav.process}</MobileNavLink>
                <MobileNavLink href="/#technologies" onClick={close} scrolled={scrolled}>{t.nav.stack}</MobileNavLink>
                <MobileNavLink href="/contact" onClick={close} scrolled={scrolled}>{t.nav.contact}</MobileNavLink>
                <div className="pt-3">
                  <Link href="/contact" onClick={close}>
                    <NeonButton
                      variant="glass"
                      size="default"
                      className="w-full border-brand-primary/25 text-brand-primary flex items-center justify-center gap-2"
                    >
                      <Phone size={14} />
                      {t.nav.contact_cta}
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
  children,
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}) => (
  <Link
    href={href}
    className={`text-[0.8rem] font-semibold transition-colors relative group ${
      scrolled ? 'text-ink-500 hover:text-brand-primary' : 'text-white/70 hover:text-white'
    }`}
  >
    {children}
    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 rounded-full bg-brand-secondary transition-all duration-300 group-hover:w-full" />
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
  scrolled,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  scrolled: boolean;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`w-full text-left block text-sm font-semibold py-2 transition-colors ${
      scrolled ? 'text-ink-500 hover:text-brand-primary' : 'text-white/70 hover:text-white'
    }`}
  >
    {children}
  </Link>
);
