'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Flame, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getImagePath } from '../../lib/imageUtils';

export default function RestaurantHero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${getImagePath('/images/hero.jpg')}')` }}>
      {/* Overlay with orange-red gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 via-orange-900/50 to-red-900/60"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          className="text-center text-white max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Service Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20"
            variants={itemVariants}
          >
            <Sparkles size={18} className="text-yellow-300" />
            <span className="text-sm font-semibold">Restaurant Menu Service</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Your Daily <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Food Cravings</span> Solved
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 text-lg text-white/90"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Fresh Daily Meals</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>85+ Menu Items</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Home-Cooked Quality</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="/menu"
              className="btn-primary text-lg md:text-xl"
            >
              <span className="flex items-center gap-2 justify-center">
                <Flame size={20} />
                View Menu
              </span>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg md:text-xl"
            >
              Order on WhatsApp
            </a>
            <a
              href="#pickup-location"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-bold text-lg md:text-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/30 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2 justify-center">
                <MapPin size={20} />
                Pickup Location
              </span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-white/70">Scroll to explore</span>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
