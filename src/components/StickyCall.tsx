import { Phone } from 'lucide-react';

export function StickyCall() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <a 
        href="tel:01611234567" 
        className="flex items-center justify-center gap-3 bg-orange-500 text-white py-4 font-bold text-lg shadow-[0_-4px_10px_rgba(0,0,0,0.1)] active:bg-orange-600 transition-colors"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        Call Now for Free Quote
      </a>
    </div>
  );
}
