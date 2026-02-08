'use client';
import { motion } from 'framer-motion';
import { Flame, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FinalCTA() {
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            variants={itemVariants}
          >
            {t('finalCta.headline')}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {t('finalCta.subtext')}
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center my-8"
            variants={itemVariants}
          >
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold">
              {t('finalCta.badge1')}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold">
              {t('finalCta.badge2')}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-semibold">
              {t('finalCta.badge3')}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-orange-50 transition-all duration-300 shadow-lg group"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' })}
            >
              {t('finalCta.orderButton')}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </motion.button>

            <motion.button
              className="flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('finalCta.menuButton')}
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-6 text-white"
            variants={itemVariants}
          >
            <div>
              <h4 className="text-3xl font-bold">5000+</h4>
              <p className="text-white/90">{t('finalCta.stat1')}</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">4.8★</h4>
              <p className="text-white/90">{t('finalCta.stat2')}</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold">30min</h4>
              <p className="text-white/90">{t('finalCta.stat3')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
