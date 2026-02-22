import React from "react";
export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-40">
                <img
                  src="/SprintXDevLogo.png"
                  alt="Sprint X Dev logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-brand-dark/50 max-w-sm mb-4 font-medium leading-relaxed">
              Engineering high-velocity digital infrastructure, from AI-powered
              information hubs to survey systems and bespoke business platforms.
            </p>
            <p className="text-brand-dark font-bold">
              Prefer email?{" "}
              <a
                href="mailto:info@sprintxdev.com"
                className="text-brand-primary hover:underline"
              >
                info@sprintxdev.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-brand-dark mb-8 uppercase tracking-widest text-xs">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-brand-dark/50 font-bold">
              <li>
                <a
                  href="#solutions"
                  className="hover:text-brand-primary transition-colors"
                >
                  Information Hub
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-brand-primary transition-colors"
                >
                  Survey System
                </a>
              </li>
              <li>
                <a
                  href="#solutions"
                  className="hover:text-brand-primary transition-colors"
                >
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col items-center gap-3">
          <p className="text-sm text-brand-dark/30 font-bold">
            © {new Date().getFullYear()} Sprint X Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
