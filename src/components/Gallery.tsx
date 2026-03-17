import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const projects = [
  {
    title: "Complete Slate Roof Replacement",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
    category: "New Roofs"
  },
  {
    title: "Emergency Storm Damage Repair",
    image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&q=80&w=800",
    category: "Repairs"
  },
  {
    title: "Modern Flat Roof Installation",
    image: "https://images.unsplash.com/photo-1590203569850-25e6e2257d76?auto=format&fit=crop&q=80&w=800",
    category: "Flat Roofing"
  },
  {
    title: "Chimney Stack Rebuild",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    category: "Chimneys"
  },
  {
    title: "Victorian Terrace Re-roofing",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    category: "New Roofs"
  },
  {
    title: "Commercial EPDM Flat Roof",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=800",
    category: "Commercial"
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Recent Roofing Projects
          </h3>
          <p className="text-lg text-zinc-600">
            Browse our portfolio of completed roofing projects across Manchester. Seeing is believing when it comes to quality craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all aspect-square"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <button className="text-orange-400 hover:text-orange-300 flex items-center gap-2 text-sm font-medium">
                    <Maximize2 className="w-4 h-4" /> View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
