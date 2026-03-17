import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does a new roof cost in Manchester?",
    answer: "The cost of a new roof varies depending on the size of your property, the materials chosen (slate, tile, flat roof), and access requirements. We provide free, no-obligation quotes so you know exactly what to expect before any work begins."
  },
  {
    question: "How long does a roof repair take?",
    answer: "Minor repairs like replacing a few slipped slates or fixing a small leak can often be completed in a few hours. Larger repairs or complete re-roofs typically take between 2 to 5 days, weather permitting."
  },
  {
    question: "Do you offer free roofing quotes?",
    answer: "Yes, absolutely. We offer free, comprehensive roof inspections and written quotations for all potential work in the Manchester area."
  },
  {
    question: "Are you fully insured and guaranteed?",
    answer: "Yes, BDS Roofing Ltd is fully insured with comprehensive public liability insurance. All our new roofs come with a solid guarantee for your peace of mind."
  },
  {
    question: "Do you handle emergency roof repairs?",
    answer: "Yes, we offer a rapid response service for emergency roofing issues like severe storm damage or major leaks to secure your property quickly."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
          <h3 className="text-4xl font-extrabold text-zinc-900 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-zinc-600">
            Got a question about our roofing services? Find the answers below or give us a call.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-lg text-zinc-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
