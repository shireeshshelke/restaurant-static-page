'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <motion.div
      className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full border border-white/30"
      whileHover={{ scale: 1.05 }}
    >
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full font-semibold text-sm transition-all ${
          language === 'en'
            ? 'bg-white text-orange-600'
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <div className="w-px h-4 bg-white/50"></div>
      <button
        onClick={() => switchLanguage('mr')}
        className={`px-3 py-1 rounded-full font-semibold text-sm transition-all ${
          language === 'mr'
            ? 'bg-white text-orange-600'
            : 'text-white hover:bg-white/20'
        }`}
      >
        मराठी
      </button>
    </motion.div>
  );
}
