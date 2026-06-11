"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const solutionsLinks = [
  { href: "/solutions#cx-solutions", label: "CX Solutions" },
  { href: "/solutions#enterprise", label: "Enterprise Solutions" },
  { href: "/solutions#automation", label: "Automation" },
];

const companyLinks = [
  { href: "/methodology", label: "Methodology" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-light border-t border-black/[0.06] overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade-b opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 pb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="block w-44 mb-6">
              <img
                src="/nextautomationlogo.webp"
                alt="Next Automation logo"
                className="w-full h-auto object-contain"
              />
            </Link>
            <p className="text-ink-500 max-w-xs leading-relaxed text-sm">
              Engineering high-velocity digital infrastructure — from AI-powered
              platforms to enterprise ERP, CRM, and end-to-end automation.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <motion.a
                href="https://www.linkedin.com/company/nextautomationsa/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow Next Automation on LinkedIn"
                title="Follow us on LinkedIn"
                className="w-10 h-10 rounded-[var(--radius-sm)] bg-white border border-black/[0.08] flex items-center justify-center text-ink-500 hover:text-brand-primary hover:border-brand-primary/30 transition-colors"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.201-1.608 2.923-1.608 2.136 0 3.75 1.395 3.75 4.398v5.492zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.916-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.916 1.71zm1.575 11.019H3.762V8.787h3.15v11.665zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Get in touch */}
          <div className="col-span-2 md:col-span-3">
            <FooterHeading>Get in touch</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@nxtaut.com" className="group flex items-center gap-3">
                  <ContactIcon>
                    <Mail size={15} strokeWidth={1.75} />
                  </ContactIcon>
                  <span className="text-sm text-ink-700 font-medium group-hover:text-brand-primary transition-colors">
                    info@nxtaut.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+966500598757" className="group flex items-center gap-3">
                  <ContactIcon>
                    <Phone size={15} strokeWidth={1.75} />
                  </ContactIcon>
                  <span className="text-sm text-ink-700 font-medium group-hover:text-brand-primary transition-colors">
                    +966 50 059 8757
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <ContactIcon>
                  <MapPin size={15} strokeWidth={1.75} />
                </ContactIcon>
                <span className="text-sm text-ink-500 font-medium">Saudi Arabia</span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-span-1 md:col-span-3">
            <FooterHeading>Solutions</FooterHeading>
            <ul className="space-y-3.5">
              {solutionsLinks.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1 md:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.07] flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-[0.8rem] text-ink-400 font-medium">
            © 2026 Next Automation. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-ink-700 hover:text-brand-primary transition-colors"
          >
            Start a project
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-semibold text-ink mb-5 uppercase tracking-[0.16em] text-[0.7rem]">
    {children}
  </h4>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm text-ink-500 font-medium hover:text-brand-primary transition-colors"
  >
    {children}
  </Link>
);

const ContactIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="w-9 h-9 shrink-0 rounded-[var(--radius-sm)] bg-white border border-black/[0.08] flex items-center justify-center text-brand-primary group-hover:border-brand-primary/30 transition-colors">
    {children}
  </span>
);
