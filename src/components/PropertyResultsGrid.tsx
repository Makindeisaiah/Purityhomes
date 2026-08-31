import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Maximize, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface PropertyCardData {
  id: string;
  name: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  status?: string;
}

interface PropertyResultsGridProps {
  className?: string;
  totalProperties?: number;
}

const SAMPLE_PROPERTIES: PropertyCardData[] = [
  {
    id: 'prop-1',
    name: 'Alexandria House',
    address: '22037 Fig Tree Ln, Chatsworth, CA 91311',
    price: '$450,000',
    beds: 4,
    baths: 4,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-2',
    name: 'Lorenzo Apartment',
    address: '8250 Lankershim, North Hollywood, CA 91605',
    price: '$550,000',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-3',
    name: 'Golden Spring Villa',
    address: '7401 Costello Ave, Van Nuys, CA 91311',
    price: '$500,000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-4',
    name: 'Alexandria House',
    address: '22037 Fig Tree Ln, Chatsworth, CA 91311',
    price: '$450,000',
    beds: 4,
    baths: 4,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-5',
    name: 'Lorenzo Apartment',
    address: '8250 Lankershim, North Hollywood, CA 91605',
    price: '$550,000',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-6',
    name: 'Golden Spring Villa',
    address: '7401 Costello Ave, Van Nuys, CA 91311',
    price: '$500,000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-7',
    name: 'Alexandria House',
    address: '22037 Fig Tree Ln, Chatsworth, CA 91311',
    price: '$450,000',
    beds: 4,
    baths: 4,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-8',
    name: 'Lorenzo Apartment',
    address: '8250 Lankershim, North Hollywood, CA 91605',
    price: '$550,000',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
  {
    id: 'prop-9',
    name: 'Golden Spring Villa',
    address: '7401 Costello Ave, Van Nuys, CA 91311',
    price: '$500,000',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    status: 'For Sale',
  },
];

const SORT_OPTIONS = [
  'Newest First',
  'Price: Low to High',
  'Price: High to Low',
  'Most Popular',
  'Largest Area',
];

export const PropertyResultsGrid: React.FC<PropertyResultsGridProps> = ({
  className = '',
  totalProperties = 150,
}) => {
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState('Newest First');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleSaveProperty = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPropertyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`w-full ${className}`}>
      {/* 1. Results Header: Showing Count & Sort Dropdown */}
      <div className="flex flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
        <p className="text-sm sm:text-base font-semibold text-neutral-700 font-['Plus_Jakarta_Sans',sans-serif]">
          Showing 1-9 of {totalProperties}+ properties
        </p>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-2 relative">
          <span className="text-xs sm:text-sm font-semibold text-neutral-800 whitespace-nowrap hidden sm:inline">
            Sort By:
          </span>
          <div className="relative">
            <button
              type="button"
              id="sort-dropdown-btn"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 border border-neutral-300 rounded-xl px-3.5 sm:px-4 py-2 bg-white text-xs sm:text-sm font-semibold text-neutral-800 hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#5dbd8c]/30 transition-all cursor-pointer shadow-xs"
            >
              <span>{selectedSort}</span>
              <ChevronDown
                className={`w-4 h-4 text-neutral-600 transition-transform duration-200 ${
                  isSortOpen ? 'rotate-180 text-[#5dbd8c]' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 py-1.5 z-40"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors hover:bg-neutral-50 ${
                        selectedSort === opt
                          ? 'text-[#5dbd8c] font-bold bg-[#5dbd8c]/10'
                          : 'text-neutral-700'
                      }`}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && (
                        <Check className="w-3.5 h-3.5 text-[#5dbd8c]" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 2. 3-Column Property Card Grid (Responsive to 2 cols on tablet / 1 col on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {SAMPLE_PROPERTIES.map((property, index) => {
          const isSaved = savedPropertyIds.includes(property.id);

          return (
            <motion.div
              key={`${property.id}-${index}`}
              id={`property-item-${property.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl sm:rounded-[1.25rem] border border-neutral-200/80 p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group cursor-pointer"
            >
              {/* Photo Container */}
              <div className="relative w-full aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 mb-3.5">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Top-Left: "For Sale" Green Rounded Badge */}
                <div className="absolute top-3 left-3 bg-[#5dbd8c] text-white text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-md sm:rounded-lg shadow-sm">
                  {property.status || 'For Sale'}
                </div>

                {/* Top-Right: Heart/Save Toggle Icon */}
                <button
                  type="button"
                  id={`save-property-${property.id}-${index}`}
                  onClick={(e) => toggleSaveProperty(property.id, e)}
                  aria-label={isSaved ? 'Unsave property' : 'Save property'}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/25 backdrop-blur-xs flex items-center justify-center text-white hover:bg-black/40 active:scale-90 transition-all cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors stroke-[2.2] ${
                      isSaved ? 'fill-red-500 text-red-500 stroke-red-500' : 'text-white'
                    }`}
                  />
                </button>
              </div>

              {/* Property Details */}
              <div className="flex flex-col flex-1">
                {/* Price in Bold Green */}
                <span className="text-lg sm:text-xl font-extrabold text-[#5dbd8c] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.price}
                </span>

                {/* Property Name in Bold Black */}
                <h4 className="text-base sm:text-[17px] font-bold text-neutral-950 mt-0.5 tracking-tight group-hover:text-[#4cb882] transition-colors line-clamp-1 font-['Plus_Jakarta_Sans',sans-serif]">
                  {property.name}
                </h4>

                {/* Address with Pin Icon (Wraps cleanly) */}
                <div className="flex items-start gap-1.5 mt-1.5 text-neutral-500 text-xs sm:text-[13px] font-medium leading-snug min-h-[36px]">
                  <MapPin className="w-3.5 h-3.5 text-[#5dbd8c] shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{property.address}</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-100 my-3.5" />

                {/* Bottom Row: Icons + Text (Evenly Spaced) */}
                <div className="flex items-center justify-between text-neutral-600 text-xs sm:text-[13px] font-medium pt-0.5">
                  {/* Beds */}
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4 text-neutral-700 stroke-[1.8]" />
                    <span>{property.beds} Beds</span>
                  </div>

                  {/* Baths */}
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4 text-neutral-700 stroke-[1.8]" />
                    <span>{property.baths} Baths</span>
                  </div>

                  {/* Area Sqft */}
                  <div className="flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5 text-neutral-700 stroke-[1.8]" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
