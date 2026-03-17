import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-white text-lg">
                BDS
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Roofing Ltd</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              Manchester's trusted roofing specialists. Providing high-quality repairs, new installations, and emergency services for residential and commercial properties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-orange-500 transition-colors">Project Gallery</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Roof Repairs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">New Roofs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Flat Roofing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Chimney Repairs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Emergency Callouts</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} BDS Roofing Ltd. All rights reserved.</p>
          <p>Designed for high conversion in Manchester, UK.</p>
        </div>
      </div>
    </footer>
  );
}
