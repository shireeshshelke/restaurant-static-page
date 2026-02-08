'use client';
import { motion } from 'framer-motion';
import { Sparkles, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
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
    <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          className="text-center text-white max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20"
            variants={itemVariants}
          >
            <Sparkles size={16} className="text-yellow-300" />
            <span className="text-sm font-medium">{t('hero.trustedBadge')}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            {t('hero.headline').split('Authentic').map((part, i) => (
              i === 0 ? part : <span key={i} className="text-orange-400">Authentic</span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-lg text-white/90"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{t('hero.subtext1')}</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{t('hero.subtext2')}</span>
            </div>
            <div className="w-1 h-1 bg-white/50 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>{t('hero.subtext3')}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <button className="btn-primary text-lg md:text-xl">
              <span className="flex items-center gap-2 justify-center">
                <Flame size={20} />
                {t('hero.orderBtn')}
              </span>
            </button>
            <button className="btn-secondary text-lg md:text-xl">
              {t('hero.watchBtn')}
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            variants={itemVariants}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-white/70">{t('hero.scrollText')}</span>
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
