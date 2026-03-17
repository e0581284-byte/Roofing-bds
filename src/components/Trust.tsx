import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Didsbury, Manchester",
    text: "Brilliant service from start to finish. They fixed our leaking flat roof within 24 hours of calling. Highly professional and left everything spotless.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    location: "Salford",
    text: "Needed a complete new roof on our Victorian terrace. The team was incredibly hard-working, honest about pricing, and the final result looks fantastic.",
    rating: 5
  },
  {
    name: "David Chen",
    location: "Altrincham",
    text: "Called them out for emergency chimney repairs after a storm. They arrived fast, secured it immediately, and returned to finish the job perfectly.",
    rating: 5
  }
];

export function Trust() {
  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Trusted by Homeowners Across Manchester
          </h2>
          <div className="flex justify-center items-center gap-2 text-xl font-medium text-zinc-600">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500" />
              ))}
            </div>
            <span>5.0 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-zinc-700 text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-zinc-900">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
