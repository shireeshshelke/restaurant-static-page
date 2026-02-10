'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, MapPin } from 'lucide-react';
import { getImagePath } from '../lib/imageUtils';

export default function LandingHero() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('${getImagePath('/images/hero.jpg')}')` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/65"></div>
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
        <motion.div className="text-center w-full text-white" initial="hidden" animate="show" variants={container}>
          <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            HomeEats — <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Ghar Jaisa Khana</span>
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Fresh, hygienic, home-cooked meals and curated food services — restaurant menu, party catering essentials, and daily tiffin subscriptions.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/restaurant" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform">
              <Flame size={18} />
              Explore Restaurant
            </Link>
            <Link href="/party" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform">
              <span>🎉</span>
              Party Services
            </Link>
            <Link href="/tiffin" className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-3 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform">
              <span>🧾</span>
              Tiffin Plans
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 text-sm text-white/80">
            <p>Order on WhatsApp or call us — quick pickup available. <a href="#pickup-location" className="underline">Pickup details</a></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
