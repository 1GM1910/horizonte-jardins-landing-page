/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Typologies } from './components/Typologies';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { Location } from './components/Location';
import { Simulator } from './components/Simulator';
import { FAQ } from './components/FAQ';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      {/* Top Header Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Facade and Primary CTA */}
        <Hero />

        {/* Tipologias & Plantas (84m², 132m², 210m²) */}
        <Typologies />

        {/* High-res Interiors & Finishes Gallery */}
        <Gallery />

        {/* Leisure, Wellness & Rooftop Infinity Pool */}
        <Amenities />

        {/* Prime Location, Points of Interest & Map Stand */}
        <Location />

        {/* Interactive Payment & Construction Simulator */}
        <Simulator />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Closing Conversion Block */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Subtle Floating Mobile/Desktop Quick CTA */}
      <FloatingCTA />
    </div>
  );
}
