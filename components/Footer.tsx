'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-80">
                <img
                  src="/nextautomationlogo.webp"
                  alt="Next Automation logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-brand-dark/50 max-w-sm mb-4 font-medium leading-relaxed">
              Next Automation | Engineering high-velocity digital
              infrastructure, from AI-powered to survey systems
              and bespoke business platforms.
            </p>
            <p className="text-brand-dark font-bold mb-6">
              Email us:{' '}
              <a href="mailto:info@nxtaut.com" className="text-brand-primary hover:underline">
                info@nxtaut.com
              </a>
            </p>
            <p className="text-brand-dark font-bold mb-6">
              Call us:{' '}
              <a href="tel:+966500598757" className="text-brand-primary hover:underline">
                +966 50 059 8757
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="#contact" className="btn-primary !px-8 !py-4 !text-sm">
                  Talk to Our Team
                </a>
              </motion.div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-brand-dark/50 font-bold">
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  CX Solutions
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  Enterprise Solutions
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-brand-dark/50 font-bold">
              <li>
                <a href="#process" className="hover:text-brand-primary transition-colors">
                  The Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-dark/30 font-bold">
            © 2026 Next Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <motion.a
              href="https://www.linkedin.com/company/nextautomationsa/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-brand-dark/50 hover:text-brand-primary transition-colors"
              title="Follow us on LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.728-2.004 1.431-.103.25-.129.599-.129.948v5.426h-3.554s.05-8.736 0-9.646h3.554v1.364c.43-.664 1.201-1.608 2.923-1.608 2.136 0 3.75 1.395 3.75 4.398v5.492zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.916-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.916 1.71zm1.575 11.019H3.762V8.787h3.15v11.665zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
