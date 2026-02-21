import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("loading");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7e374832-4453-42da-86c5-28abd9bd9862");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("success");
        setMessage("Thank you! Your message has been sent successfully.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("error");
      setMessage("Failed to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
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
              Let's build your <br /> <span className="gradient-text">next big thing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-dark/50 text-lg max-w-md font-medium mb-8"
            >
              Ready to accelerate your digital growth? Send us a message and our team will get back to you within 24 hours.
            </motion.p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Send size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-dark/40 uppercase tracking-widest leading-none mb-1">Email Us</div>
                  <div className="text-brand-dark font-bold">sprintxdevz@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden p-8 md:p-12 rounded-[40px] border border-white/15 bg-white/5 shadow-[0_24px_80px_rgba(15,23,42,0.40)] backdrop-blur-2xl"
          >
            {/* Glassy gradient overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/30 via-white/10 to-white/0 opacity-80" />

            <form onSubmit={onSubmit} className="relative z-10 space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    required 
                    className="w-full px-6 py-4 rounded-2xl bg-brand-dark/[0.02] border border-black/5 focus:border-brand-primary/30 focus:bg-white transition-all outline-none text-brand-dark font-medium placeholder:text-brand-dark/30"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required 
                    className="w-full px-6 py-4 rounded-2xl bg-brand-dark/[0.02] border border-black/5 focus:border-brand-primary/30 focus:bg-white transition-all outline-none text-brand-dark font-medium placeholder:text-brand-dark/30"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full px-6 py-4 rounded-2xl bg-brand-dark/[0.02] border border-black/5 focus:border-brand-primary/30 focus:bg-white transition-all outline-none text-brand-dark font-medium placeholder:text-brand-dark/30"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    name="message" 
                    placeholder="Message (optional)" 
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-dark/[0.02] border border-black/5 focus:border-brand-primary/30 focus:bg-white transition-all outline-none text-brand-dark font-medium placeholder:text-brand-dark/30 resize-none"
                  ></textarea>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={result === "loading"}
                type="submit"
                className="w-full py-5 gradient-brand text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {result === "loading" ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {result !== "idle" && result !== "loading" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${result === "success" ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}
                >
                  {result === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <p className="text-sm font-bold">{message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-brand-primary/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-brand-secondary/5 blur-[100px] rounded-full -z-10" />
    </section>
  );
};
