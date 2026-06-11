'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { NeonButton } from './ui/neon-button';

export const ContactForm: React.FC = () => {
  const [result, setResult] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('loading');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult('success');
        setMessage('Thank you! Your message has been sent successfully.');
        (event.target as HTMLFormElement).reset();
      } else {
        setResult('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setResult('error');
      setMessage('Failed to connect to the server. Please check your internet connection.');
    }
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-[var(--radius-md)] bg-white border border-black/[0.1] focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/15 transition-all outline-none text-ink placeholder:text-ink-400/70';
  const labelClass =
    'block text-[0.72rem] font-semibold text-ink-700 mb-1.5 tracking-wide';

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-primary mb-5"
            >
              Get in touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-ink mb-6 leading-[1.05] text-balance"
            >
              Let&apos;s build your <span className="text-brand-primary">next big thing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ink-500 text-lg max-w-md mb-10 text-pretty"
            >
              Ready to accelerate your digital growth? Send us a message and our team will get
              back to you within 24 hours.
            </motion.p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-[var(--radius-md)] bg-brand-primary/[0.08] border border-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Send size={19} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[0.68rem] font-semibold text-ink-400 uppercase tracking-[0.14em] leading-none mb-1.5">
                    Email us
                  </div>
                  <a
                    href="mailto:info@nxtaut.com"
                    className="text-ink font-semibold hover:text-brand-primary transition-colors"
                  >
                    info@nxtaut.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-7 md:p-10 rounded-[var(--radius-2xl)] border border-black/[0.07] bg-white shadow-[var(--shadow-pop)]"
          >
            <form onSubmit={onSubmit} className="relative z-10 space-y-4">
              {/* Honeypot — hidden from real users, bots fill it */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-name" className={labelClass}>
                    Name <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={labelClass}>
                    Email <span className="text-brand-primary">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="cf-company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Acme Inc."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+966 …"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cf-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Tell us about your project…"
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <NeonButton
                  variant="solid"
                  size="xl"
                  type="submit"
                  disabled={result === 'loading'}
                  className="w-full"
                >
                  {result === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </NeonButton>
              </motion.div>

              {result !== 'idle' && result !== 'loading' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  aria-live="polite"
                  className={`flex items-center gap-3 p-4 rounded-[var(--radius-md)] ${
                    result === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {result === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <p className="text-sm font-semibold">{message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
