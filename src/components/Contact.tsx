import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">
            Contact BDS Roofing Ltd
          </h3>
          <p className="text-lg text-zinc-600">
            Ready for your free quote? Fill out the form below or call us directly. We aim to respond to all inquiries within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 p-10 rounded-2xl border border-zinc-200 shadow-sm"
          >
            <h4 className="text-2xl font-bold text-zinc-900 mb-8">Request a Callback</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow" placeholder="07123 456789" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-2">Service Needed</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow bg-white">
                  <option>Roof Repair</option>
                  <option>New Roof Installation</option>
                  <option>Flat Roofing</option>
                  <option>Chimney Repair</option>
                  <option>Emergency Callout</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message (Optional)</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-shadow resize-none" placeholder="Briefly describe your roofing issue..."></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-md shadow-orange-500/20">
                Get My Free Quote
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900 mb-2">Call Us Directly</h5>
                <p className="text-zinc-600 mb-2">Available for emergency callouts.</p>
                <a href="tel:01611234567" className="text-2xl font-extrabold text-orange-500 hover:text-orange-600 transition-colors">0161 123 4567</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900 mb-2">Email Us</h5>
                <p className="text-zinc-600 mb-2">Send us photos of your roof for a faster estimate.</p>
                <a href="mailto:info@bdsroofing.co.uk" className="text-lg font-bold text-zinc-900 hover:text-orange-500 transition-colors">info@bdsroofing.co.uk</a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900 mb-2">Service Area</h5>
                <p className="text-zinc-600 leading-relaxed">
                  Based in Manchester, we serve the entire Greater Manchester area including Salford, Trafford, Stockport, and surrounding boroughs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900 mb-2">Working Hours</h5>
                <p className="text-zinc-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-zinc-600">Saturday: 9:00 AM - 2:00 PM</p>
                <p className="text-orange-500 font-bold mt-1">24/7 Emergency Service Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
