import React from "react";
import { motion } from "motion/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-80">
                <img
                  src="/logo.png"
                  alt="Next Automation logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-brand-dark/50 max-w-sm mb-4 font-medium leading-relaxed">
              Next Automation | Engineering high-velocity digital infrastructure,
              from AI-powered information hubs to survey systems and bespoke
              business platforms.
            </p>
            <p className="text-brand-dark font-bold mb-6">
              Email us:{" "}
              <a
                href="mailto:info@nxtaut.com"
                className="text-brand-primary hover:underline"
              >
                info@nxtaut.com
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary !px-8 !py-4 !text-sm"
              >
                Talk to Our Team
              </motion.button>
              <a
                href="https://wa.me/?text=Hi%20Next%20Automation%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-8 !py-4 !text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-brand-dark/50 font-bold">
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  Information Hub
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  Survey System
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-brand-primary transition-colors">
                  Custom Solutions
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
        </div>
      </div>
    </footer>
  );
};
