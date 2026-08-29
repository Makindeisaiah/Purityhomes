import React from 'react';
import { motion } from 'framer-motion';

export const MapSection: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Warm Dark Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative w-full bg-gradient-to-r from-[#594d4a] via-[#4d4240] to-[#433937] rounded-[1.75rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-14 lg:p-16 overflow-hidden shadow-sm"
        >
          {/* Responsive 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading and Action Buttons (Slide-in from left) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif]">
                Find The Most
                <br />
                Comfortable Residence
                <br />
                Near You Now
              </h2>

              {/* Action Buttons Side by Side */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1">
                {/* Solid Green Button */}
                <button
                  id="btn-nearest-residence"
                  type="button"
                  className="bg-[#4cb882] hover:bg-[#3fa06f] active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-150 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Nearest Residence
                </button>

                {/* Outline Green Button */}
                <button
                  id="btn-view-property"
                  type="button"
                  className="border-[1.5px] border-[#4cb882] hover:bg-[#4cb882]/10 active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  View Property
                </button>
              </div>
            </motion.div>

            {/* Right Column: Google Maps Style Screenshot with ~24px Rounded Corners (Slide-in from right) */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden shadow-lg border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="City Map with roads and neighborhood labels"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Visual map UI badge accent */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-neutral-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4cb882] animate-pulse" />
                  <span>Los Angeles & Vicinity</span>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
