import React from "react";
import { motion } from "motion/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-40">
                <img
                  src="/SprintXDevLogo.png"
                  alt="Sprint X Dev logo"
                  className="w-full h-full object-contain"
                />
              </div>

            </div>
            <p className="text-brand-dark/50 max-w-sm mb-10 font-medium leading-relaxed">
              Engineering the high-velocity digital infrastructure that powers
              modern business growth. Digital Excellence. Delivered Fast.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary !px-8 !py-4 !text-sm"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-brand-dark/50 font-bold">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Information Hub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Insight Systems
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Custom Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Event Tracking
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
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  The Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-dark/30 font-bold">
            © {new Date().getFullYear()} Sprint X Dev. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-brand-dark/30 font-bold">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
