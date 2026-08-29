import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'alexis-terry',
      name: 'Alexis Terry',
      role: 'Old Buyer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'Buying my first home felt overwhelming, but Purity Homes made it an enjoyable experience. They took the time to explain everything and provided fantastic insights into different neighborhoods. Their patience and dedication were key in helping me find a place that truly felt like home. I highly recommend Purity Homes to anyone looking to buy!',
    },
    {
      id: 'john-chris',
      name: 'John Chris',
      role: 'Old Buyer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'I can’t thank Purity Homes enough for helping me find my dream home! From our first meeting, they listened to my needs and preferences, guiding me through every step of the process. Their knowledge of the local market was invaluable, and they were always available to answer my questions. Thanks to Purity Homes, I found a perfect home that exceeded my expectations!',
    },
    {
      id: 'michael-jordan',
      name: 'Michael Jordan',
      role: 'Old Buyer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'Purity Homes was a fantastic partner in my home-buying journey. Their attention to detail and commitment to understanding my needs made all the difference. They negotiated fiercely on my behalf and ensured I got the best deal possible. I’m thrilled with my new home and grateful for the support and expertise Purity Homes provided throughout the process!',
    },
    {
      id: 'sarah-jenkins',
      name: 'Sarah Jenkins',
      role: 'Old Buyer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'The transparency and responsiveness from Purity Homes made all the difference. Every detail was handled with precision and care, making the closing seamless and effortless.',
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'Old Buyer',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80',
      text: 'Finding a contemporary residence with top-tier amenities in our price bracket felt impossible until we connected with Purity Homes. Exceptional team and service!',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // 1 = John Chris (middle highlight)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  // Compute 3 items relative to active index
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const prevIdx = (activeIndex - 1 + total) % total;
    const currIdx = activeIndex;
    const nextIdx = (activeIndex + 1) % total;
    return [
      { item: testimonials[prevIdx], position: 'left' },
      { item: testimonials[currIdx], position: 'middle' },
      { item: testimonials[nextIdx], position: 'right' },
    ];
  };

  const visibleItems = getVisibleTestimonials();

  return (
    <section id="about" className="w-full bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header: Centered Two-Line Heading with Mixed Green Spans */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-neutral-950 leading-[1.18] tracking-[-0.02em] font-['Plus_Jakarta_Sans',sans-serif]">
            <span>See Other People </span>
            <span className="text-[#4cb882]">Who Have</span>
            <br />
            <span className="text-[#4cb882]">Bought </span>
            <span>Our Apartment</span>
          </h2>
        </motion.div>

        {/* Testimonials 3-Column Grid with Staggered Fade + Slide-up from below & Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {visibleItems.map(({ item, position }, idx) => {
            const isHighlighted = position === 'middle';

            return (
              <motion.div
                key={`${item.id}-${activeIndex}`}
                id={`testimonial-card-${item.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -6 }}
                className={`rounded-[1.75rem] p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-colors duration-300 ${
                  isHighlighted
                    ? 'bg-[#4cb882] text-white shadow-lg shadow-[#4cb882]/20 md:scale-[1.02]'
                    : 'bg-[#d2d5db]/70 text-neutral-800'
                }`}
              >
                <div>
                  {/* Top Row: Circular Avatar + Name & Label */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white/60 shadow-xs bg-neutral-200">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className={`text-base sm:text-lg font-bold leading-tight ${
                          isHighlighted ? 'text-white' : 'text-neutral-900'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-xs sm:text-[13px] font-medium mt-0.5 ${
                          isHighlighted ? 'text-white/80' : 'text-neutral-500'
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p
                    className={`text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed font-normal ${
                      isHighlighted ? 'text-white/95' : 'text-neutral-700'
                    }`}
                  >
                    “{item.text}”
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation: Centered Arrow Circle Buttons */}
        <div className="mt-12 sm:mt-14 flex items-center justify-center gap-3">
          <button
            id="btn-testimonials-prev"
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            id="btn-testimonials-next"
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>
    </section>
  );
};
