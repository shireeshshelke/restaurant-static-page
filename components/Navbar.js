'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#story' },
    { label: 'Hygiene', href: '#hygiene' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-gradient-orange p-2 rounded-full">
            <ChefHat className="text-white" size={28} />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Cloud Kitchen
            </h1>
            <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
              Ghar Jaisa Khana
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-orange-500'
                  : 'text-white hover:text-orange-200'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Order Now Button & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <motion.button
            className="btn-primary hidden md:inline-block text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' })}
          >
            Order Now
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} size={28} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-medium hover:text-orange-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="btn-primary w-full text-sm mt-2"
              onClick={() => {
                document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Order Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
