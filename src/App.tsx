import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { MapSection } from './components/MapSection';
import { PropertyListings } from './components/PropertyListings';
import { InteriorShowcase } from './components/InteriorShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');

  const handleSearch = (criteria: { location: string; type: string; budget: string }) => {
    console.log('Searching properties with criteria:', criteria);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#4cb882]/20 selection:text-[#2d7752]">
      {/* Header with Logo, Navigation Links, Search & Profile */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-start">
        <Hero onSearch={handleSearch} />
        <StatsBanner />
        <MapSection />
        <PropertyListings />
        <InteriorShowcase />
        <Testimonials />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
