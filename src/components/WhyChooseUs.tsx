import { motion } from 'motion/react';
import { Shield, Clock, MapPin, PoundSterling } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Fully Qualified & Experienced",
    description: "Our team consists of certified roofing professionals with decades of combined experience."
  },
  {
    icon: PoundSterling,
    title: "Honest Pricing",
    description: "No hidden fees. We provide transparent, upfront quotes before any work begins."
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We understand roofing emergencies. Our rapid response team is ready when you need us most."
  },
  {
    icon: MapPin,
    title: "Local Manchester Experts",
    description: "We know the local weather challenges and build roofs designed to withstand them."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">Why Choose BDS Roofing</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Built on Trust, Quality, and Reliability
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We don't just fix roofs; we build peace of mind. Our commitment to excellence has made us Manchester's go-to roofing contractor for both residential and commercial properties.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Request a Free Quote
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 hover:border-orange-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
