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
    'w-full px-6 py-4 rounded-2xl bg-brand-dark/[0.02] border border-black/5 focus:border-brand-primary/30 focus:bg-white transition-all outline-none text-brand-dark font-medium placeholder:text-brand-dark/30';

  return (
    <section className="py-20 md:py-32 bg-[#F5F5FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4"
            >
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6 leading-tight"
            >
              Let&apos;s build your <br />
              <span className="gradient-text">next big thing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-dark/50 text-lg max-w-md font-medium mb-10"
            >
              Ready to accelerate your digital growth? Send us a message and our team will get
              back to you within 24 hours.
            </motion.p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Send size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest leading-none mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:info@nxtaut.com"
                    className="text-brand-dark font-bold hover:text-brand-primary transition-colors"
                  >
                    info@nxtaut.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden p-8 md:p-12 rounded-[40px] border border-white/15 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/60 via-white/20 to-white/0 opacity-80" />

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
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  className={inputClass}
                />
                <input type="tel" name="phone" placeholder="Phone" className={inputClass} />
              </div>
              <textarea
                name="message"
                placeholder="Message (optional)"
                rows={4}
                className={`${inputClass} resize-none`}
              />

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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${
                    result === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : 'bg-red-50 text-red-700 border border-red-100'
                  }`}
                >
                  {result === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <p className="text-sm font-bold">{message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-brand-secondary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};
