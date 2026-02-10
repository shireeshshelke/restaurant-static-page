'use client';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { getImagePath } from '../../lib/imageUtils';

export default function TiffinHero() {
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
      {/* Overlay with green gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 via-emerald-900/50 to-teal-900/60"></div>

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
            <Sparkles size={18} className="text-green-300" />
            <span className="text-sm font-semibold">Daily Meal Subscription</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Nutrition Made <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Convenient</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-2xl text-white/90 mb-10 font-light"
            variants={itemVariants}
          >
            Delicious, healthy home-cooked meals delivered daily. No cooking, just healthy eating!
          </motion.p>

          {/* Three Pillars */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🥗</div>
              <div className="font-semibold">100% Healthy</div>
              <div className="text-sm text-white/80">Nutritionist approved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <div className="font-semibold">Daily Delivery</div>
              <div className="text-sm text-white/80">Fresh every morning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💪</div>
              <div className="font-semibold">Flexible Plans</div>
              <div className="text-sm text-white/80">Customize as needed</div>
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg md:text-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
            >
              <span className="flex items-center gap-2 justify-center">
                <Heart size={20} />
                Start Subscription
              </span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              View Plans
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
              <span className="text-sm text-white/70">Discover plans</span>
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
