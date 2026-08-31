import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronRight, ChevronDown, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PropertySearchParams {
  query: string;
  type: string;
  minPrice: string;
  maxPrice: string;
}

interface PropertyHeroProps {
  onSearch?: (params: PropertySearchParams) => void;
  onNavigateHome?: () => void;
}

export const PropertyHero: React.FC<PropertyHeroProps> = ({
  onSearch,
  onNavigateHome,
}) => {
  // Search Form States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Select Type');
  const [selectedMinPrice, setSelectedMinPrice] = useState('Min Price');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('Max Price');

  // Dropdown Open States
  const [activeDropdown, setActiveDropdown] = useState<'type' | 'min' | 'max' | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const propertyTypes = [
    'All Types',
    'Modern Villa',
    'Luxury Apartment',
    'Penthouse Suite',
    'Waterfront Mansion',
    'Townhouse',
  ];

  const minPriceOptions = [
    'No Min',
    '$300,000',
    '$450,000',
    '$550,000',
    '$700,000',
    '$1,000,000',
  ];

  const maxPriceOptions = [
    'No Max',
    '$500,000',
    '$650,000',
    '$850,000',
    '$1,200,000',
    '$2,000,000+',
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = () => {
    onSearch?.({
      query: searchQuery,
      type: selectedType === 'Select Type' ? '' : selectedType,
      minPrice: selectedMinPrice === 'Min Price' ? '' : selectedMinPrice,
      maxPrice: selectedMaxPrice === 'Max Price' ? '' : selectedMaxPrice,
    });

    const listingsSection = document.getElementById('property-listings-grid') || document.getElementById('property');
    if (listingsSection) {
      listingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {/* Light Gray Full-Width Hero Section */}
      <section className="relative w-full bg-[#edf0f2] overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Side: Bold Two-Line Heading & Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col justify-center z-10 py-4 lg:py-8"
            >
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[58px] font-extrabold leading-[1.12] tracking-[-0.03em] text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
                <span>Find Your Perfect</span>
                <br />
                <span className="text-[#5dbd8c]">Residence</span>
              </h1>

              {/* Breadcrumb Row: Home > Property */}
              <div className="flex items-center gap-2 mt-6 sm:mt-8 text-neutral-900 font-semibold text-sm sm:text-base">
                <button
                  type="button"
                  id="breadcrumb-home"
                  onClick={onNavigateHome}
                  className="hover:text-[#5dbd8c] transition-colors cursor-pointer focus:outline-none"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4 text-neutral-900 stroke-[2.5]" />
                <span className="text-neutral-950 font-bold">Property</span>
              </div>
            </motion.div>

            {/* Right Side: High-Definition Luxury Residence Exterior Image Bleeding to Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-7 flex justify-end items-center relative"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/9] rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-l-[2.5rem] lg:rounded-r-none overflow-hidden shadow-sm bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85"
                  alt="Modern Luxury Residence with Glowing Interior and Landscape"
                  className="w-full h-full object-cover object-center"
                />
                {/* Gentle edge blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Search Bar Container: Half overlapping Hero banner & half on white background below */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-10 sm:-mt-12 lg:-mt-14 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          ref={containerRef}
          className="w-full bg-white rounded-2xl sm:rounded-3xl border-[2px] border-[#5dbd8c] p-3 sm:p-4 shadow-xl shadow-neutral-950/5"
        >
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 sm:gap-3.5">
            
            {/* Field 1: Text Input with Search Icon */}
            <div className="relative flex-1">
              <div className="flex items-center justify-between border border-[#5dbd8c] rounded-xl px-4 py-2.5 bg-white hover:border-[#4cb882] transition-colors focus-within:ring-2 focus-within:ring-[#5dbd8c]/30">
                <input
                  id="search-property-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
                  placeholder="Search by location, property or address..."
                  className="w-full bg-transparent text-sm sm:text-[15px] font-medium text-neutral-800 placeholder:text-neutral-400 focus:outline-none pr-2"
                />
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  aria-label="Search"
                  className="shrink-0 text-neutral-800 hover:text-[#5dbd8c] transition-colors cursor-pointer"
                >
                  <Search className="w-5 h-5 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Field 2: Select Type Dropdown */}
            <div className="relative w-full lg:w-48 xl:w-52">
              <button
                id="search-property-type"
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
                className={`w-full flex items-center justify-between border border-[#5dbd8c] rounded-xl px-4 py-2.5 bg-white text-sm sm:text-[15px] font-medium text-neutral-800 hover:border-[#4cb882] transition-colors cursor-pointer ${
                  activeDropdown === 'type' ? 'ring-2 ring-[#5dbd8c]/30' : ''
                }`}
              >
                <span className="truncate">{selectedType}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-700 transition-transform duration-200 ${activeDropdown === 'type' ? 'rotate-180 text-[#5dbd8c]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'type' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 max-h-56 overflow-y-auto"
                  >
                    {propertyTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setSelectedType(type === 'All Types' ? 'Select Type' : type);
                          setActiveDropdown(null);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                          (selectedType === type || (selectedType === 'Select Type' && type === 'All Types'))
                            ? 'text-[#5dbd8c] font-bold bg-[#5dbd8c]/10'
                            : 'text-neutral-700'
                        }`}
                      >
                        <span>{type}</span>
                        {(selectedType === type || (selectedType === 'Select Type' && type === 'All Types')) && (
                          <Check className="w-3.5 h-3.5 text-[#5dbd8c]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Field 3: Min Price Dropdown */}
            <div className="relative w-full lg:w-40 xl:w-44">
              <button
                id="search-property-min-price"
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'min' ? null : 'min')}
                className={`w-full flex items-center justify-between border border-[#5dbd8c] rounded-xl px-4 py-2.5 bg-white text-sm sm:text-[15px] font-medium text-neutral-800 hover:border-[#4cb882] transition-colors cursor-pointer ${
                  activeDropdown === 'min' ? 'ring-2 ring-[#5dbd8c]/30' : ''
                }`}
              >
                <span className="truncate">{selectedMinPrice}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-700 transition-transform duration-200 ${activeDropdown === 'min' ? 'rotate-180 text-[#5dbd8c]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'min' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 max-h-56 overflow-y-auto"
                  >
                    {minPriceOptions.map((price) => (
                      <button
                        key={price}
                        type="button"
                        onClick={() => {
                          setSelectedMinPrice(price === 'No Min' ? 'Min Price' : price);
                          setActiveDropdown(null);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                          (selectedMinPrice === price || (selectedMinPrice === 'Min Price' && price === 'No Min'))
                            ? 'text-[#5dbd8c] font-bold bg-[#5dbd8c]/10'
                            : 'text-neutral-700'
                        }`}
                      >
                        <span>{price}</span>
                        {(selectedMinPrice === price || (selectedMinPrice === 'Min Price' && price === 'No Min')) && (
                          <Check className="w-3.5 h-3.5 text-[#5dbd8c]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Field 4: Max Price Dropdown */}
            <div className="relative w-full lg:w-40 xl:w-44">
              <button
                id="search-property-max-price"
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'max' ? null : 'max')}
                className={`w-full flex items-center justify-between border border-[#5dbd8c] rounded-xl px-4 py-2.5 bg-white text-sm sm:text-[15px] font-medium text-neutral-800 hover:border-[#4cb882] transition-colors cursor-pointer ${
                  activeDropdown === 'max' ? 'ring-2 ring-[#5dbd8c]/30' : ''
                }`}
              >
                <span className="truncate">{selectedMaxPrice}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-700 transition-transform duration-200 ${activeDropdown === 'max' ? 'rotate-180 text-[#5dbd8c]' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'max' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1.5 w-full bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 z-50 max-h-56 overflow-y-auto"
                  >
                    {maxPriceOptions.map((price) => (
                      <button
                        key={price}
                        type="button"
                        onClick={() => {
                          setSelectedMaxPrice(price === 'No Max' ? 'Max Price' : price);
                          setActiveDropdown(null);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                          (selectedMaxPrice === price || (selectedMaxPrice === 'Max Price' && price === 'No Max'))
                            ? 'text-[#5dbd8c] font-bold bg-[#5dbd8c]/10'
                            : 'text-neutral-700'
                        }`}
                      >
                        <span>{price}</span>
                        {(selectedMaxPrice === price || (selectedMaxPrice === 'Max Price' && price === 'No Max')) && (
                          <Check className="w-3.5 h-3.5 text-[#5dbd8c]" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Far Right: Solid Green Pill Button "See Property" */}
            <div className="shrink-0 pt-1 lg:pt-0">
              <button
                id="btn-property-search-submit"
                type="button"
                onClick={handleSearchSubmit}
                className="w-full lg:w-auto bg-[#5dbd8c] hover:bg-[#4eb37f] active:scale-[0.98] text-white font-bold text-sm sm:text-[15px] px-7 sm:px-8 py-3 rounded-full transition-all duration-150 shadow-md shadow-[#5dbd8c]/25 cursor-pointer whitespace-nowrap"
              >
                See Property
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
