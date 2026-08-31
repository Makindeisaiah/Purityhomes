import React, { useState } from 'react';
import { RotateCcw, ChevronDown, Check, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FilterState {
  location: string;
  propertyTypes: string[];
  priceRange: number;
  bedrooms: string[];
  bathrooms: string[];
}

export interface PropertyFilterSidebarProps {
  initialFilters?: Partial<FilterState>;
  onApplyFilter?: (filters: FilterState) => void;
  onResetFilter?: () => void;
  className?: string;
}

const DEFAULT_FILTERS: FilterState = {
  location: 'Select location',
  propertyTypes: ['Villa', 'Condo', 'Townhouse'],
  priceRange: 750000,
  bedrooms: ['3 Bedroom', '4 Bedroom', '5 Bedroom'],
  bathrooms: ['3 Bathroom', '4 Bathroom', '5 Bathroom'],
};

const LOCATIONS = [
  'Select location',
  'Miami Beach, FL',
  'Beverly Hills, CA',
  'Austin, TX',
  'Los Angeles, CA',
  'New York, NY',
];

const PROPERTY_TYPES = [
  { label: 'House', count: 74 },
  { label: 'Apartment', count: 56 },
  { label: 'Villa', count: 38 },
  { label: 'Condo', count: 22 },
  { label: 'Townhouse', count: 18 },
];

const BEDROOM_OPTIONS = [
  { label: '1 Bedroom', count: 25 },
  { label: '2 Bedroom', count: 48 },
  { label: '3 Bedroom', count: 62 },
  { label: '4 Bedroom', count: 36 },
  { label: '5 Bedroom', count: 17 },
];

const BATHROOM_OPTIONS = [
  { label: '1 Bathroom', count: 25 },
  { label: '2 Bathroom', count: 48 },
  { label: '3 Bathroom', count: 62 },
  { label: '4 Bathroom', count: 36 },
  { label: '5 Bathroom', count: 17 },
];

export const PropertyFilterSidebar: React.FC<PropertyFilterSidebarProps> = ({
  initialFilters,
  onApplyFilter,
  onResetFilter,
  className = '',
}) => {
  const [filters, setFilters] = useState<FilterState>({
    ...DEFAULT_FILTERS,
    ...initialFilters,
  });

  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS);
    setIsLocationDropdownOpen(false);
    onResetFilter?.();
    onApplyFilter?.(DEFAULT_FILTERS);
  };

  const handleTypeToggle = (type: string) => {
    setFilters((prev) => {
      const exists = prev.propertyTypes.includes(type);
      return {
        ...prev,
        propertyTypes: exists
          ? prev.propertyTypes.filter((t) => t !== type)
          : [...prev.propertyTypes, type],
      };
    });
  };

  const handleBedroomToggle = (bed: string) => {
    setFilters((prev) => {
      const exists = prev.bedrooms.includes(bed);
      return {
        ...prev,
        bedrooms: exists
          ? prev.bedrooms.filter((b) => b !== bed)
          : [...prev.bedrooms, bed],
      };
    });
  };

  const handleBathroomToggle = (bath: string) => {
    setFilters((prev) => {
      const exists = prev.bathrooms.includes(bath);
      return {
        ...prev,
        bathrooms: exists
          ? prev.bathrooms.filter((b) => b !== bath)
          : [...prev.bathrooms, bath],
      };
    });
  };

  const handleApply = () => {
    onApplyFilter?.(filters);
    setIsMobileDrawerOpen(false);
  };

  const formattedCurrentPrice = `$${Number(filters.priceRange).toLocaleString()}`;

  // Filter content component reused in both desktop sidebar & mobile drawer
  const FilterContent = (
    <div className="flex flex-col space-y-6">
      {/* 1. Header Row */}
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-lg font-bold text-neutral-900 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
          Filter By
        </h3>
        <button
          type="button"
          id="btn-reset-filters"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer focus:outline-none"
        >
          <RotateCcw className="w-3.5 h-3.5 stroke-[2.2]" />
          <span>Reset</span>
        </button>
      </div>

      {/* 2. Location */}
      <div className="space-y-2">
        <label className="block text-sm sm:text-[15px] font-bold text-neutral-900">
          Location
        </label>
        <div className="relative">
          <button
            type="button"
            id="sidebar-location-select"
            onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
            className="w-full flex items-center justify-between border border-neutral-300 rounded-xl px-3.5 py-2.5 bg-white text-sm font-medium text-neutral-700 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5dbd8c]/30 transition-all cursor-pointer"
          >
            <span className="truncate">{filters.location}</span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-600 transition-transform duration-200 ${
                isLocationDropdownOpen ? 'rotate-180 text-[#5dbd8c]' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {isLocationDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl shadow-lg border border-neutral-200 py-1.5 z-40 max-h-48 overflow-y-auto"
              >
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, location: loc }));
                      setIsLocationDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                      filters.location === loc
                        ? 'text-[#5dbd8c] font-bold bg-[#5dbd8c]/10'
                        : 'text-neutral-700'
                    }`}
                  >
                    <span>{loc}</span>
                    {filters.location === loc && (
                      <Check className="w-3.5 h-3.5 text-[#5dbd8c]" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Property Type Checklist */}
      <div className="space-y-3">
        <label className="block text-sm sm:text-[15px] font-bold text-neutral-900">
          Property Type
        </label>
        <div className="space-y-2.5">
          {PROPERTY_TYPES.map((type) => {
            const isChecked = filters.propertyTypes.includes(type.label);
            return (
              <label
                key={type.label}
                className="flex items-center justify-between cursor-pointer group select-none"
              >
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleTypeToggle(type.label)}
                    className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-[#5dbd8c] text-white'
                        : 'border border-neutral-300 group-hover:border-neutral-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    onClick={() => handleTypeToggle(type.label)}
                    className="text-sm font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors"
                  >
                    {type.label}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-normal text-neutral-400">
                  {type.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Price Range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-sm sm:text-[15px] font-bold text-neutral-900">
            Price Range
          </label>
          <span className="text-xs font-bold text-[#5dbd8c] bg-[#5dbd8c]/10 px-2 py-0.5 rounded-full">
            {formattedCurrentPrice}
          </span>
        </div>

        {/* Range Slider Container */}
        <div className="pt-1">
          <input
            type="range"
            min="100000"
            max="1000000"
            step="25000"
            value={filters.priceRange}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: Number(e.target.value),
              }))
            }
            className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#5dbd8c]"
          />
          <div className="flex items-center justify-between text-xs font-medium text-neutral-500 mt-2">
            <span>$100,000</span>
            <span>$1,000,000+</span>
          </div>
        </div>
      </div>

      {/* 5. Bedrooms Checklist */}
      <div className="space-y-3">
        <label className="block text-sm sm:text-[15px] font-bold text-neutral-900">
          Bedrooms
        </label>
        <div className="space-y-2.5">
          {BEDROOM_OPTIONS.map((bed) => {
            const isChecked = filters.bedrooms.includes(bed.label);
            return (
              <label
                key={bed.label}
                className="flex items-center justify-between cursor-pointer group select-none"
              >
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleBedroomToggle(bed.label)}
                    className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-[#5dbd8c] text-white'
                        : 'border border-neutral-300 group-hover:border-neutral-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    onClick={() => handleBedroomToggle(bed.label)}
                    className="text-sm font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors"
                  >
                    {bed.label}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-normal text-neutral-400">
                  {bed.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. Bathrooms Checklist */}
      <div className="space-y-3">
        <label className="block text-sm sm:text-[15px] font-bold text-neutral-900">
          Bathrooms
        </label>
        <div className="space-y-2.5">
          {BATHROOM_OPTIONS.map((bath) => {
            const isChecked = filters.bathrooms.includes(bath.label);
            return (
              <label
                key={bath.label}
                className="flex items-center justify-between cursor-pointer group select-none"
              >
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => handleBathroomToggle(bath.label)}
                    className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-[#5dbd8c] text-white'
                        : 'border border-neutral-300 group-hover:border-neutral-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span
                    onClick={() => handleBathroomToggle(bath.label)}
                    className="text-sm font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors"
                  >
                    {bath.label}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-normal text-neutral-400">
                  {bath.count}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 7. Bottom CTA: Outline Pill Button */}
      <div className="pt-2">
        <motion.button
          type="button"
          id="btn-apply-sidebar-filter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
          onClick={handleApply}
          className="w-full border-[1.5px] border-[#5dbd8c] hover:bg-[#5dbd8c] text-[#5dbd8c] hover:text-white font-bold text-sm sm:text-[15px] py-3 rounded-full transition-colors duration-150 cursor-pointer"
        >
          Apply Filter
        </motion.button>
      </div>
    </div>
  );

  return (
    <aside className={`w-full ${className}`}>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-sm py-3 px-4 rounded-2xl border border-neutral-300 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#5dbd8c]" />
          <span>Filters & Specifications</span>
          {(filters.propertyTypes.length > 0 || filters.bedrooms.length > 0) && (
            <span className="w-2 h-2 rounded-full bg-[#5dbd8c]" />
          )}
        </button>
      </div>

      {/* Desktop Sticky/Fixed Sidebar Box */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:block w-full max-w-[290px] xl:max-w-[300px]"
      >
        <div className="w-full bg-white rounded-[24px] border-[2px] border-[#5dbd8c] p-6 shadow-sm">
          {FilterContent}
        </div>
      </motion.div>

      {/* Mobile Drawer (Slide-over overlay) */}
      <AnimatePresence>
        {isMobileDrawerOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileDrawerOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative w-[85%] max-w-[340px] bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-neutral-100">
                <span className="text-base font-extrabold text-neutral-900">
                  Filter Properties
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileDrawerOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {FilterContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </aside>
  );
};
