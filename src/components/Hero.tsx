import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80" 
          alt="Roofing work in progress" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-medium text-sm mb-6 border border-orange-500/30">
              <Star className="w-4 h-4 fill-orange-400" />
              Top Rated Roofers in Manchester
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Professional Roofing Services in Manchester You Can Trust
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Repairs, New Roofs, Flat Roofs & Emergency Services. Fast, reliable, and fully guaranteed workmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 active:scale-95"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:01611234567" 
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-zinc-900 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-700/50">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                </div>
                <span className="font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                </div>
                <span className="font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                </div>
                <span className="font-medium">Free Estimates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
