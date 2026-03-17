/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCall } from './components/StickyCall';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </div>
  );
}
