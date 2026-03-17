import { motion } from 'motion/react';
import { ClipboardList, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: "1. Request Quote",
    description: "Contact us via phone or our online form. We'll arrange a convenient time to visit your property."
  },
  {
    icon: Search,
    title: "2. Inspection & Pricing",
    description: "Our experts conduct a thorough roof inspection and provide a transparent, no-obligation written quote."
  },
  {
    icon: CheckCircle,
    title: "3. Work Completed",
    description: "We complete the work to the highest standards, clean up the site, and ensure you are 100% satisfied."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Simple, Stress-Free Process
          </h3>
          <p className="text-lg text-zinc-600">
            Getting your roof fixed shouldn't be a headache. We've streamlined our process to make it as easy and transparent as possible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-zinc-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-zinc-100 text-center relative"
              >
                <div className="w-20 h-20 mx-auto bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-md shadow-orange-500/20 border-4 border-white relative z-10">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-4">{step.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
