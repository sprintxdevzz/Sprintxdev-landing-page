import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is high-velocity digital infrastructure?",
      answer: "It refers to engineering software systems that are optimized for maximum speed, scalability, and reliability, allowing your business to grow without technical bottlenecks."
    },
    {
      question: "How long does a typical project take?",
      answer: "Our sprint-based methodology allows us to deliver initial versions in as little as 2-4 weeks, with full systems typically taking 8-12 weeks depending on complexity."
    },
    {
      question: "Do you offer maintenance after delivery?",
      answer: "Yes, we provide dedicated maintenance and scaling support to ensure your systems remain updated and performant as your user base grows."
    },
    {
      question: "Can you integrate with my existing tools?",
      answer: "Absolutely. We specialize in bridging the gap between modern custom solutions and your legacy software or third-party APIs."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6"
          >
            Common <span className="gradient-text">Questions</span>
          </motion.h2>
          <p className="text-brand-dark/50 text-lg font-medium">Everything you need to know about working with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-black/5 rounded-3xl overflow-hidden transition-all hover:border-brand-primary/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left bg-white hover:bg-black/[0.01] transition-colors"
      >
        <span className="font-bold text-brand-dark">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-brand-primary"
        >
          <Plus />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 text-brand-dark/50 font-medium leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};
