import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  onHeaderSearch?: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'HOME',
  onSelectTab,
  onHeaderSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleHeaderSearchSubmit = () => {
    if (searchQuery.trim()) {
      onHeaderSearch?.(searchQuery.trim());
      setIsSearchActive(false);
    }
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'PROPERTY', href: '#property' },
    { label: 'PRODUCT', href: '#product' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'ABOUT US', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-white sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-6 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <button
          type="button"
          id="brand-logo"
          onClick={() => onSelectTab?.('HOME')}
          className="flex items-center gap-1 group select-none cursor-pointer focus:outline-none text-left"
        >
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
            Purity
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#4cb882] font-['Plus_Jakarta_Sans',sans-serif]">
            Homes
          </span>
        </button>

        {/* Center: Nav links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab?.(item.label);
                }}
                className={`text-xs lg:text-sm font-bold tracking-wider transition-colors duration-150 relative py-1 ${
                  isActive
                    ? 'text-[#4cb882]'
                    : 'text-neutral-900 hover:text-[#4cb882]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Search & Profile Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Quick Search Popover / Trigger */}
          <div className="relative">
            <button
              id="header-search-btn"
              type="button"
              onClick={() => setIsSearchActive(!isSearchActive)}
              aria-label="Search"
              className="p-2 sm:p-2.5 rounded-full text-neutral-900 hover:text-[#4cb882] hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30"
            >
              <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
            </button>

            {isSearchActive && (
              <div className="absolute right-0 top-12 w-72 sm:w-80 bg-white border border-neutral-200 shadow-xl rounded-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center gap-2 bg-neutral-50 rounded-xl px-3 py-2 border border-neutral-200/80 focus-within:border-[#4cb882] focus-within:bg-white transition-colors">
                  <Search className="w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleHeaderSearchSubmit()}
                    placeholder="Search properties, cities... (Press Enter)"
                    className="w-full text-sm bg-transparent outline-none text-neutral-800 placeholder:text-neutral-400"
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-xs text-neutral-400 hover:text-neutral-600"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Profile Icon */}
          <button
            id="header-profile-btn"
            type="button"
            aria-label="User Profile"
            className="p-2 sm:p-2.5 rounded-full text-neutral-900 hover:text-[#4cb882] hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4cb882]/30"
          >
            <User className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
          </button>

          {/* Mobile menu toggle */}
          <button
            id="header-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab?.(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-sm font-semibold tracking-wider ${
                  activeTab === item.label ? 'text-[#4cb882]' : 'text-neutral-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};
