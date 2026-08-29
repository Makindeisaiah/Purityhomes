import React from 'react';
import { motion } from 'framer-motion';

interface PropertyItem {
  id: string;
  name: string;
  address: string;
  price: string;
  image: string;
}

export const PropertyListings: React.FC = () => {
  const properties: PropertyItem[] = [
    {
      id: 'alexandria-house',
      name: 'Alexandria House',
      address: '22037 Fig Tree Ln, Chatsworth, CA 91311',
      price: '$450,000',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'lorenzo-apartment',
      name: 'Lorenzo Apartment',
      address: '8250 Lankershim, North Hollywood, CA 91605',
      price: '$550,000',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'golden-spring-villa',
      name: 'Golden Spring Villa',
      address: '7401 Costello Ave, Van Nuys, CA 91405',
      price: '$500,000',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'tossi-mansion',
      name: 'Tossi Mansion',
      address: '2046 Thomas St, Los Angeles, CA 90031',
      price: '$650,600',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'kellystone-villa',
      name: 'Kellystone Villa',
      address: '1300 Linda Flora Dr, Los Angeles, CA 90049',
      price: '$700,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'convent-hill',
      name: 'Convent Hill',
      address: '5606 Park Oak Pl, Los Angeles, CA 90068',
      price: '$520,000',
      image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <section id="property" className="w-full bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Row: Title & Subtext on Left, Action Button on Right */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 sm:mb-14"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 leading-[1.15] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif]">
              <span>All The </span>
              <span className="text-[#4cb882]">Best Residences</span>
              <br />
              <span>From Us For You</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-neutral-500">
              We Have Developed A Total Of 10,500+ Properties
            </p>
          </div>

          {/* Action Button: Top-Right */}
          <div className="shrink-0 pt-1">
            <button
              id="btn-see-our-property"
              type="button"
              className="bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap"
            >
              Let’s See Our Property
            </button>
          </div>
        </motion.div>

        {/* 3-Column Property Grid with Staggered Fade + Slide-up */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              id={`property-card-${property.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Card Image Container with price badge overlaid */}
              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-[1.35rem] overflow-hidden bg-neutral-100 shadow-sm">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Price Badge on bottom-right of the image */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#4cb882] text-white font-bold text-sm sm:text-[15px] px-3.5 sm:px-4 py-1.5 rounded-lg sm:rounded-xl shadow-md tracking-tight">
                  {property.price}
                </div>
              </div>

              {/* Card Information: Name in green, Address underneath */}
              <div className="mt-4 flex flex-col space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-[#4cb882] group-hover:text-[#3fa06f] transition-colors leading-snug">
                  {property.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-neutral-800 leading-relaxed">
                  {property.address}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
