import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-zinc-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center font-bold text-xl">
              BDS
            </div>
            <span className="font-bold text-xl tracking-tight">Roofing Ltd</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
            <a 
              href="tel:01611234567" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              0161 123 4567
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-800 border-t border-zinc-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-zinc-700 rounded-md">Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-zinc-700 rounded-md">Gallery</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-zinc-700 rounded-md">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:bg-zinc-700 rounded-md">Contact</a>
            <a 
              href="tel:01611234567" 
              className="block px-3 py-2 bg-orange-500 text-white rounded-md font-bold mt-4 text-center"
            >
              Call 0161 123 4567
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
