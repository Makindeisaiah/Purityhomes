import React, { useState } from 'react';
import { Sparkles, Maximize2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const InteriorShowcase: React.FC = () => {
  // User specified apartment video ID: L0nhTU_PPpo
  const videoId = 'L0nhTU_PPpo';
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="product" className="w-full bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Centered Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-neutral-950 leading-[1.18] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif]">
            <span>Check out our </span>
            <span className="text-[#4cb882]">beautiful interior</span>
            <br />
            <span>with stunning view</span>
          </h2>
          <p className="mt-3 text-neutral-500 text-sm sm:text-base max-w-xl mx-auto">
            Experience our flagship luxury apartment walkthrough and architectural tour.
          </p>
        </motion.div>

        {/* Media Block: Luxury Apartment Tour Video (Fade + scale-in from 0.95 to 1 on scroll) */}
        <motion.div
          id="apartment-video-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/10] md:aspect-[2.2/1] min-h-[360px] sm:min-h-[460px] md:min-h-[520px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl bg-neutral-950 group"
        >
          {/* YouTube Embed Player */}
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&iv_load_policy=3`}
            title="Luxury Apartment Interior Showcase Video Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full object-cover border-0 rounded-[1.5rem] sm:rounded-[2rem]"
          />

          {/* Bottom Live Tour Badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4cb882] animate-pulse" />
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold tracking-wide">Purity Homes • Luxury Apartment Walkthrough Tour</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Below the Video: Centered Outline Pill Button with subtle hover scale */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <motion.button
            id="btn-interior-view-more"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border-[2px] border-[#4cb882] hover:bg-[#4cb882]/5 text-neutral-950 font-bold text-sm sm:text-[15px] px-10 sm:px-14 py-3 sm:py-3.5 rounded-full transition-colors duration-150 cursor-pointer whitespace-nowrap shadow-xs"
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


