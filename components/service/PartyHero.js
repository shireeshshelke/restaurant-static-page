'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PartyPopper, Sparkles } from 'lucide-react';
import { getImagePath } from '../../lib/imageUtils';

export default function PartyHero() {
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
      {/* Overlay with purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-900/50 to-pink-900/60"></div>

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
            <Sparkles size={18} className="text-yellow-400" />
            <span className="text-sm font-semibold">Premium Party Services</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Celebrate <span className="bg-gradient-to-r from-yellow-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">Without Worries</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-2xl text-white/90 mb-10 font-light"
            variants={itemVariants}
          >
            Complete party food solutions — food, serving dishes, disposables and essentials. We provide food and materials only (no manpower).
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span>🍽️</span>
              <span>Premium Catering</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span>🎉</span>
              <span>Complete Packages</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span>✨</span>
              <span>Quality Food & Materials</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
            >
              <span className="flex items-center gap-2 justify-center">
                <PartyPopper size={20} />
                Plan Your Event
              </span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get Quote
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
              <span className="text-sm text-white/70">Explore packages</span>
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
