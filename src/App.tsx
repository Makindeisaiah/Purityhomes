import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyHero, PropertySearchParams } from './components/PropertyHero';
import { StatsBanner } from './components/StatsBanner';
import { MapSection } from './components/MapSection';
import { PropertyListings } from './components/PropertyListings';
import { InteriorShowcase } from './components/InteriorShowcase';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('PROPERTY');
  const [propertyFilters, setPropertyFilters] = useState<PropertySearchParams>({
    query: '',
    type: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleHomeSearch = (criteria: { location: string; type: string; budget: string }) => {
    console.log('Searching properties from Home:', criteria);
    setPropertyFilters({
      query: criteria.location,
      type: criteria.type,
      minPrice: '',
      maxPrice: criteria.budget,
    });
    setActiveTab('PROPERTY');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePropertySearch = (params: PropertySearchParams) => {
    console.log('Searching properties from PropertyHero:', params);
    setPropertyFilters(params);
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'HOME' || tab === 'PROPERTY') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'PRODUCT') {
      const el = document.getElementById('product');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'ABOUT US') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'CONTACT') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-[#4cb882]/20 selection:text-[#2d7752]">
      {/* Header with Logo, Navigation Links, Search & Profile */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
        onHeaderSearch={(query) => {
          setPropertyFilters({
            query,
            type: '',
            minPrice: '',
            maxPrice: '',
          });
          setActiveTab('PROPERTY');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-start">
        {activeTab === 'PROPERTY' ? (
          /* Dedicated Property Listings Page View */
          <div className="flex flex-col">
            <PropertyHero
              onSearch={handlePropertySearch}
              onNavigateHome={() => handleTabSelect('HOME')}
            />
            <PropertyListings
              isPropertyPage={true}
              searchQuery={propertyFilters.query}
              selectedType={propertyFilters.type}
              minPrice={propertyFilters.minPrice}
              maxPrice={propertyFilters.maxPrice}
              onResetFilters={() =>
                setPropertyFilters({
                  query: '',
                  type: '',
                  minPrice: '',
                  maxPrice: '',
                })
              }
              onNavigateToPropertyPage={() => {
                const el = document.getElementById('property-listings-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        ) : (
          /* Main Landing Page View */
          <div className="flex flex-col">
            <Hero onSearch={handleHomeSearch} />
            <StatsBanner />
            <MapSection />
            <PropertyListings
              isPropertyPage={false}
              onNavigateToPropertyPage={() => handleTabSelect('PROPERTY')}
            />
            <InteriorShowcase />
            <Testimonials />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
