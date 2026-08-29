import React from 'react';
import { Instagram, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const aboutLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Our People', href: '#people' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Blog', href: '#blog' },
  ];

  const servicesLinks = [
    { label: 'Property', href: '#property' },
    { label: 'Home Development', href: '#development' },
    { label: 'Interior Design', href: '#interior' },
    { label: 'Custom Furniture', href: '#furniture' },
  ];

  const eventsLinks = [
    { label: 'Property In Gallery', href: '#gallery' },
    { label: 'Full Calender', href: '#calendar' },
  ];

  const resourcesLinks = [
    { label: 'Furniture', href: '#furniture-resource' },
    { label: 'Agents', href: '#agents' },
    { label: 'Crew', href: '#crew' },
  ];

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className="w-full bg-black text-white pt-16 sm:pt-20 pb-16 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top CTA area */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Interested To Build Your Home?
          </h3>
          <a
            href="mailto:contact@purityhomes.com"
            id="footer-email-link"
            className="inline-block mt-3 text-lg sm:text-2xl font-bold text-white underline underline-offset-8 decoration-2 hover:text-[#4cb882] transition-colors"
          >
            contact@purityhomes.com
          </a>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full h-[1.5px] bg-white mb-12 sm:mb-16" />

        {/* Main Footer Links & Brand Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Far Left Column: Logo & Social/Contact Details */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Italic Bold Logo */}
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-extrabold italic tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                Purity
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold italic tracking-tight text-[#4cb882] font-['Plus_Jakarta_Sans',sans-serif]">
                Homes
              </span>
            </div>

            {/* Contact Rows with Icons */}
            <div className="flex flex-col space-y-4 pt-1">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-instagram"
                className="flex items-center gap-3 text-white/95 hover:text-[#4cb882] text-sm font-semibold transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span>Purityhomes</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+17203659867"
                id="footer-contact-phone"
                className="flex items-center gap-3 text-white/95 hover:text-[#4cb882] text-sm font-semibold transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <span>+1 720-365-9867</span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                id="footer-social-x"
                className="flex items-center gap-3 text-white/95 hover:text-[#4cb882] text-sm font-semibold transition-colors group"
              >
                <div className="w-6 h-6 flex items-center justify-center font-bold text-base">
                  <span className="group-hover:scale-110 transition-transform">𝕏</span>
                </div>
                <span>Purityhomes</span>
              </a>
            </div>
          </div>

          {/* 4 Link Columns on the Right */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {/* ABOUT */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-extrabold tracking-wider uppercase text-white">
                ABOUT
              </h4>
              <ul className="space-y-2.5">
                {aboutLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#4cb882] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-extrabold tracking-wider uppercase text-white">
                SERVICES
              </h4>
              <ul className="space-y-2.5">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#4cb882] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* EVENTS */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-extrabold tracking-wider uppercase text-white">
                EVENTS
              </h4>
              <ul className="space-y-2.5">
                {eventsLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#4cb882] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-sm font-extrabold tracking-wider uppercase text-white">
                RESOURCES
              </h4>
              <ul className="space-y-2.5">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#4cb882] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
