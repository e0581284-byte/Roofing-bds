import { motion } from 'motion/react';
import { ArrowRight, Hammer, Home, Layers, Wind, Grid } from 'lucide-react';

const services = [
  {
    title: "Roof Repairs",
    description: "Fast, reliable fixes for leaks, storm damage, and missing slates.",
    icon: Hammer,
    image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "New Roof Installation",
    description: "Complete re-roofing and new builds. Built to last decades.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Flat Roofing",
    description: "EPDM rubber, felt, and fiberglass flat roofs for extensions and garages.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1590203569850-25e6e2257d76?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Chimney Repairs",
    description: "Repointing, leadwork, and structural chimney stack repairs.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Tile & Slate Roofing",
    description: "Traditional and modern tiling solutions for any property style.",
    icon: Grid,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Comprehensive Roofing Solutions
          </h3>
          <p className="text-lg text-zinc-600">
            From emergency leak repairs to complete new roof installations, our experienced Manchester team handles it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white p-2 rounded-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-bold text-zinc-900 mb-3">{service.title}</h4>
                <p className="text-zinc-600 mb-6 flex-1">{service.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors group/btn"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
