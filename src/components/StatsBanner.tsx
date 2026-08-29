import React from 'react';
import { motion } from 'framer-motion';

export const StatsBanner: React.FC = () => {
  // 5 diverse professional partner headshots
  const partnerAvatars = [
    {
      name: 'Michael Davis',
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      name: 'James Wilson',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      name: 'Sarah Jenkins',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      name: 'Marcus Chen',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      name: 'Robert Taylor',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  return (
    <section className="w-full bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Banner Container with ~24px rounded corners and overflow hidden (Fade in banner image on scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] min-h-[460px] sm:min-h-[500px] md:min-h-[540px] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-sm group"
        >
          {/* Background House Image with scroll fade-in */}
          <motion.img
            initial={{ scale: 1.06, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
            alt="Modern Luxury Residence Exterior with Lawn and Pool"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Bottom Gradient Overlays for maximum text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent sm:from-black/75 sm:via-black/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Content Overlaid in the Bottom Area */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-end">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 sm:gap-10">
              
              {/* Bottom-Left: Large Bold Heading & Overlapping Avatars (Slide-up on scroll) */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="flex flex-col space-y-5 sm:space-y-6"
              >
                <h2 className="text-3xl sm:text-5xl md:text-[54px] lg:text-[60px] font-extrabold text-white leading-[1.08] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif] drop-shadow-md">
                  We Are Here
                  <br />
                  For You.
                </h2>

                {/* Overlapping circular partner avatars */}
                <div className="flex items-center">
                  <div className="flex -space-x-3 sm:-space-x-3.5 items-center">
                    {partnerAvatars.map((partner, index) => (
                      <div
                        key={index}
                        className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full border-[2.5px] border-white shadow-md overflow-hidden bg-neutral-100 transition-transform duration-200 hover:scale-110 hover:z-10"
                      >
                        <img
                          src={partner.img}
                          alt={partner.name}
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}

                    {/* "19+" more partners pill circle */}
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full border-[2.5px] border-white shadow-md bg-white flex items-center justify-center text-neutral-950 font-bold text-xs sm:text-sm tracking-tight select-none">
                      19+
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-Right: Two Stat Blocks Side by Side with slight stagger */}
              <div className="flex items-center gap-8 sm:gap-14 md:gap-16 pb-1">
                {/* Stat 1: 150+ Property Available */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                    150+
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-white/90 tracking-normal drop-shadow-sm">
                    Property Available
                  </span>
                </motion.div>

                {/* Stat 2: 87 Total Partner (staggered delay) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.36, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none drop-shadow-sm font-['Plus_Jakarta_Sans',sans-serif]">
                    87
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-medium text-white/90 tracking-normal drop-shadow-sm">
                    Total Partner
                  </span>
                </motion.div>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
