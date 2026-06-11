'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import {
  Mail,
  Phone,
  Clock,
  User,
  Building2,
  MessageSquare,
  Send,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { fadeUp, stagger, inView } from '@/lib/motion';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Values = { name: string; email: string; company: string; phone: string; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d][\d\s()+-]{5,}$/;

const validators: Partial<Record<keyof Values, (v: string) => string>> = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
  email: (v) =>
    !v.trim()
      ? 'Please enter your email.'
      : EMAIL_RE.test(v.trim())
        ? ''
        : 'Enter a valid email address.',
  phone: (v) => (!v.trim() || PHONE_RE.test(v.trim()) ? '' : 'Enter a valid phone number.'),
};

const channels = [
  { icon: Mail, label: 'Email us', value: 'info@nxtaut.com', href: 'mailto:info@nxtaut.com' },
  { icon: Phone, label: 'Call us', value: '+966 50 059 8757', href: 'tel:+966500598757' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: undefined },
];

const emptyValues: Values = { name: '', email: '', company: '', phone: '', message: '' };

export const ContactForm: React.FC = () => {
  const reduce = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);

  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const runField = (name: string, value: string) => {
    const fn = validators[name as keyof Values];
    return fn ? fn(value) : '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
    if (touched[name as keyof Values]) {
      setErrors((p) => ({ ...p, [name]: runField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: runField(name, value) }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const next: Partial<Record<keyof Values, string>> = {
      name: validators.name!(values.name),
      email: validators.email!(values.email),
      phone: validators.phone!(values.phone),
    };
    const filtered = Object.fromEntries(Object.entries(next).filter(([, v]) => v));
    setErrors(filtered);
    setTouched({ name: true, email: true, phone: true });

    const firstInvalid = (['name', 'email', 'phone'] as const).find((k) => filtered[k]);
    if (firstInvalid) {
      (formRef.current?.querySelector(`[name="${firstInvalid}"]`) as HTMLElement | null)?.focus();
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(formRef.current!),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setValues(emptyValues);
        setTouched({});
        setErrors({});
      } else {
        setStatus('error');
        setServerMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMsg('Failed to connect. Check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid mask-fade opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — pitch + contact channels */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
          >
            <motion.div variants={fadeUp} className="eyebrow text-brand-primary mb-5">
              Get in touch
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-display font-bold text-ink mb-6 leading-[1.05] text-balance"
            >
              Let&apos;s build your <span className="text-brand-primary">next big thing</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink-500 text-lg max-w-md mb-9 text-pretty">
              Tell us about your project and our team will get back to you within one business day —
              no obligations, no sales pressure.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-3">
              {channels.map((c) => {
                const Inner = (
                  <>
                    <div className="w-11 h-11 shrink-0 rounded-[var(--radius-md)] bg-brand-primary/[0.07] border border-brand-primary/10 flex items-center justify-center text-brand-primary transition-colors group-hover/ch:border-brand-primary/30">
                      <c.icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[0.66rem] font-semibold text-ink-400 uppercase tracking-[0.14em] leading-none mb-1.5">
                        {c.label}
                      </div>
                      <div className="text-ink font-semibold text-[0.95rem]">{c.value}</div>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group/ch flex items-center gap-4 rounded-[var(--radius-lg)] p-2 -m-2 hover:bg-white/70 transition-colors"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-4 p-2 -m-2">
                    {Inner}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — the form card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative p-6 sm:p-8 md:p-10 rounded-[var(--radius-2xl)] border border-black/[0.07] bg-white shadow-[var(--shadow-pop)]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <SuccessPanel
                  key="success"
                  reduce={!!reduce}
                  onReset={() => {
                    setStatus('idle');
                    setServerMsg('');
                  }}
                />
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={onSubmit}
                  noValidate
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                >
                  {/* Honeypot — hidden from real users, bots fill it */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <motion.div
                    variants={stagger(0.06)}
                    initial="hidden"
                    whileInView="show"
                    viewport={inView}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        name="name"
                        label="Name"
                        icon={User}
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        value={values.name}
                        error={errors.name}
                        touched={touched.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Field
                        name="email"
                        label="Email"
                        icon={Mail}
                        type="email"
                        inputMode="email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        name="company"
                        label="Company"
                        icon={Building2}
                        autoComplete="organization"
                        placeholder="Acme Inc."
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Field
                        name="phone"
                        label="Phone"
                        icon={Phone}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+966 …"
                        value={values.phone}
                        error={errors.phone}
                        touched={touched.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <Field
                      name="message"
                      label="Message"
                      icon={MessageSquare}
                      as="textarea"
                      placeholder="Tell us about your project…"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <motion.div variants={fadeUp} className="pt-1">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary w-full group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <Send
                              size={17}
                              className="transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                          </>
                        )}
                      </button>
                    </motion.div>

                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          key="server-error"
                          role="alert"
                          aria-live="polite"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex items-center gap-3 p-4 rounded-[var(--radius-md)] bg-red-50 text-red-700 border border-red-200">
                            <AlertCircle size={19} className="shrink-0" />
                            <p className="text-sm font-semibold">{serverMsg}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.p variants={fadeUp} className="text-center text-xs text-ink-400 pt-1">
                      We&apos;ll never share your details. Required fields are marked
                      <span className="text-brand-primary"> *</span>.
                    </motion.p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */

type FieldProps = {
  name: keyof Values;
  label: string;
  icon: LucideIcon;
  type?: string;
  as?: 'input' | 'textarea';
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  inputMode?: 'text' | 'email' | 'tel';
  value: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function Field({
  name,
  label,
  icon: Icon,
  type = 'text',
  as = 'input',
  required,
  autoComplete,
  placeholder,
  inputMode,
  value,
  error,
  touched,
  onChange,
  onBlur,
}: FieldProps) {
  const id = `cf-${name}`;
  const invalid = !!touched && !!error;
  const fieldClass = `w-full pl-11 pr-4 rounded-[var(--radius-md)] bg-white border outline-none text-ink placeholder:text-ink-400/60 transition-[border-color,box-shadow] duration-200 focus:ring-2 ${
    invalid
      ? 'border-red-300 focus:border-red-400 focus:ring-red-500/15'
      : 'border-black/[0.1] focus:border-brand-primary focus:ring-brand-primary/15'
  }`;

  return (
    <motion.div variants={fadeUp}>
      <label htmlFor={id} className="block text-[0.72rem] font-semibold text-ink-700 mb-1.5 tracking-wide">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      <div className="relative">
        <Icon
          size={17}
          strokeWidth={1.75}
          className={`pointer-events-none absolute left-3.5 transition-colors ${
            as === 'textarea' ? 'top-3.5' : 'top-1/2 -translate-y-1/2'
          } ${invalid ? 'text-red-400' : 'text-ink-400'}`}
        />
        {as === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid ? `${id}-err` : undefined}
            className={`${fieldClass} py-3.5 resize-none`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            inputMode={inputMode}
            autoComplete={autoComplete}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid || undefined}
            aria-describedby={invalid ? `${id}-err` : undefined}
            className={`${fieldClass} py-3.5`}
          />
        )}
      </div>
      <AnimatePresence initial={false}>
        {invalid && (
          <motion.p
            key="err"
            id={`${id}-err`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <span className="flex items-center gap-1.5 pt-1.5 text-xs font-medium text-red-600">
              <AlertCircle size={13} className="shrink-0" />
              {error}
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SuccessPanel({ reduce, onReset }: { reduce: boolean; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="text-center py-8 md:py-10"
    >
      <div className="relative mx-auto mb-6 w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-brand-secondary/12" />
        <svg viewBox="0 0 64 64" className="relative w-20 h-20">
          <motion.circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke="var(--color-brand-secondary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ rotate: -90, transformOrigin: 'center' }}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <motion.path
            d="M21 33 l8 8 l15 -17"
            fill="none"
            stroke="var(--color-brand-secondary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.45, ease: 'easeOut' }}
          />
        </svg>
      </div>
      <h3 className="text-2xl font-display font-bold text-ink mb-2">Message sent</h3>
      <p className="text-ink-500 mb-7 max-w-xs mx-auto text-pretty">
        Thanks for reaching out — our team will get back to you within 24 hours.
      </p>
      <button onClick={onReset} className="btn-secondary mx-auto">
        Send another message
      </button>
    </motion.div>
  );
}
