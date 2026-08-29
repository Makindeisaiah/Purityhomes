import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Building2, CircleDollarSign, ChevronDown, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onSearch?: (criteria: { location: string; type: string; budget: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  // State for search fields
  const [selectedLocation, setSelectedLocation] = useState('Miami Beach, FL');
  const [selectedType, setSelectedType] = useState('Modern Villa');
  const [selectedBudget, setSelectedBudget] = useState('$500,000 - $1,200,000');

  // Dropdown open states
  const [activeDropdown, setActiveDropdown] = useState<'location' | 'type' | 'budget' | null>(null);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locationOptions = [
    'Miami Beach, FL',
    'Beverly Hills, CA',
    'Austin, TX',
    'Malibu, CA',
    'Aspen, CO',
    'Manhattan, NY',
    'Seattle, WA',
  ];

  const typeOptions = [
    'Modern Villa',
    'Beachfront House',
    'Luxury Penthouse',
    'Contemporary Mansion',
    'Townhouse',
    'Duplex Residence',
  ];

  const budgetOptions = [
    '$150,000 - $350,000',
    '$350,000 - $750,000',
    '$500,000 - $1,200,000',
    '$1,200,000 - $2,500,000',
    '$2,500,000 - $5,000,000',
    '$5,000,000+',
  ];

  const handleSeeProperty = () => {
    const criteria = {
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    };
    onSearch?.(criteria);
    setSearchFeedback(`Filtering ${selectedType}s in ${selectedLocation} (${selectedBudget})`);
    setTimeout(() => setSearchFeedback(null), 4000);
  };

  return (
    <section className="relative z-30 w-full bg-white pt-4 sm:pt-8 md:pt-12 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Hero Row: Heading on Left, Large Framed Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Multi-Color Heading (Fade + slide-up on page load) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[58px] xl:text-[64px] font-extrabold leading-[1.12] tracking-[-0.03em] text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
              <span className="text-[#4cb882]">Find The </span>
              <span>Most</span>
              <br className="hidden sm:inline" />{' '}
              <span>Appropriate Residence</span>
              <br className="hidden sm:inline" />{' '}
              <span>For You </span>
              <span className="text-[#4cb882]">To Live In</span>
            </h1>
          </motion.div>

          {/* Right Column: Hero House Image with Emerald Rounded Frame (Fade + slide-up on load) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-[2rem] sm:rounded-[2.5rem] p-1 border-[3px] sm:border-[3.5px] border-[#4cb882] shadow-sm overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Residence with Pool and Deck"
                className="w-full h-full object-cover object-center rounded-[1.7rem] sm:rounded-[2.2rem] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle light reflection overlay */}
              <div className="absolute inset-0 rounded-[1.7rem] sm:rounded-[2.2rem] bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Search Bar: Horizontal Pill-Shaped with 3 Fields & Green Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="relative z-30 mt-10 sm:mt-14 lg:mt-18"
          ref={containerRef}
        >
          <div className="w-full bg-white rounded-3xl lg:rounded-full border-[2.5px] border-[#4cb882] p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-2">
              
              {/* 3 Fields Container */}
              <div className="grid grid-cols-1 sm:grid-cols-3 flex-1 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
                
                {/* Field 1: Location (staggered) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38, ease: 'easeOut' }}
                  className="relative px-3 sm:px-5 py-2"
                >
                  <button
                    id="search-field-location"
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
                    className="w-full flex items-center gap-3.5 text-left group focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 group-hover:border-[#4cb882] group-hover:text-[#4cb882] transition-colors shrink-0">
                      <MapPin className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-[15px] font-bold text-neutral-950 truncate flex items-center gap-1">
                        Location
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${activeDropdown === 'location' ? 'rotate-180 text-[#4cb882]' : ''}`} />
                      </div>
                      <div className="text-xs sm:text-[13px] text-neutral-500 font-medium truncate">
                        {selectedLocation || 'Search Location'}
                      </div>
                    </div>
                  </button>

                  {/* Location Dropdown */}
                  {activeDropdown === 'location' && (
                    <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl border border-neutral-200 shadow-xl p-2 z-50 animate-in fade-in duration-150">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1.5">
                        Select Location
                      </div>
                      <div className="space-y-0.5 max-h-56 overflow-y-auto">
                        {locationOptions.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => {
                              setSelectedLocation(loc);
                              setActiveDropdown(null);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-xl font-medium text-left transition-colors ${
                              selectedLocation === loc
                                ? 'bg-[#4cb882]/10 text-[#2d7752] font-semibold'
                                : 'text-neutral-700 hover:bg-neutral-50'
                            }`}
                          >
                            <span>{loc}</span>
                            {selectedLocation === loc && <Check className="w-4 h-4 text-[#4cb882]" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Field 2: Select Type (staggered) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.46, ease: 'easeOut' }}
                  className="relative px-3 sm:px-5 py-2"
                >
                  <button
                    id="search-field-type"
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
                    className="w-full flex items-center gap-3.5 text-left group focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 group-hover:border-[#4cb882] group-hover:text-[#4cb882] transition-colors shrink-0">
                      <Building2 className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-[15px] font-bold text-neutral-950 truncate flex items-center gap-1">
                        Select Type
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${activeDropdown === 'type' ? 'rotate-180 text-[#4cb882]' : ''}`} />
                      </div>
                      <div className="text-xs sm:text-[13px] text-neutral-500 font-medium truncate">
                        {selectedType || 'Search Type'}
                      </div>
                    </div>
                  </button>

                  {/* Property Type Dropdown */}
                  {activeDropdown === 'type' && (
                    <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl border border-neutral-200 shadow-xl p-2 z-50 animate-in fade-in duration-150">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1.5">
                        Property Type
                      </div>
                      <div className="space-y-0.5 max-h-56 overflow-y-auto">
                        {typeOptions.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              setSelectedType(type);
                              setActiveDropdown(null);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-xl font-medium text-left transition-colors ${
                              selectedType === type
                                ? 'bg-[#4cb882]/10 text-[#2d7752] font-semibold'
                                : 'text-neutral-700 hover:bg-neutral-50'
                            }`}
                          >
                            <span>{type}</span>
                            {selectedType === type && <Check className="w-4 h-4 text-[#4cb882]" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Field 3: Budget (staggered) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.54, ease: 'easeOut' }}
                  className="relative px-3 sm:px-5 py-2"
                >
                  <button
                    id="search-field-budget"
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'budget' ? null : 'budget')}
                    className="w-full flex items-center gap-3.5 text-left group focus:outline-none"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 group-hover:border-[#4cb882] group-hover:text-[#4cb882] transition-colors shrink-0">
                      <CircleDollarSign className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-[15px] font-bold text-neutral-950 truncate flex items-center gap-1">
                        Budget
                        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform ${activeDropdown === 'budget' ? 'rotate-180 text-[#4cb882]' : ''}`} />
                      </div>
                      <div className="text-xs sm:text-[13px] text-neutral-500 font-medium truncate">
                        {selectedBudget || 'Determine Your Budget'}
                      </div>
                    </div>
                  </button>

                  {/* Budget Dropdown */}
                  {activeDropdown === 'budget' && (
                    <div className="absolute left-0 sm:right-0 sm:left-auto top-full mt-2 w-72 bg-white rounded-2xl border border-neutral-200 shadow-xl p-2 z-50 animate-in fade-in duration-150">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 py-1.5">
                        Price Range
                      </div>
                      <div className="space-y-0.5 max-h-56 overflow-y-auto">
                        {budgetOptions.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => {
                              setSelectedBudget(budget);
                              setActiveDropdown(null);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm rounded-xl font-medium text-left transition-colors ${
                              selectedBudget === budget
                                ? 'bg-[#4cb882]/10 text-[#2d7752] font-semibold'
                                : 'text-neutral-700 hover:bg-neutral-50'
                            }`}
                          >
                            <span>{budget}</span>
                            {selectedBudget === budget && <Check className="w-4 h-4 text-[#4cb882]" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Action Button: "See Property" (staggered) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.62, ease: 'easeOut' }}
                className="pt-2 lg:pt-0 shrink-0"
              >
                <button
                  id="btn-see-property"
                  type="button"
                  onClick={handleSeeProperty}
                  className="w-full lg:w-auto bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap text-center"
                >
                  See Property
                </button>
              </motion.div>
            </div>
          </div>

          {/* Active Search Criteria Notification / Toast */}
          {searchFeedback && (
            <div className="mt-4 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-neutral-900 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200">
                <Sparkles className="w-4 h-4 text-[#4cb882]" />
                <span>{searchFeedback}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
