import { motion } from 'motion/react';
import { Phone, ArrowRight, Clock } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-orange-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-900 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-bold text-sm mb-8 border border-white/30 backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              Limited availability this week
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Get Your Free Roofing Quote Today
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Don't wait for a small leak to become a major problem. Contact Manchester's trusted roofing experts now.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:01611234567" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-900/20"
              >
                <Phone className="w-6 h-6" />
                Call 0161 123 4567
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-orange-600 px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-white/10"
              >
                Request Quote Online
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
