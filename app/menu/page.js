'use client';
import Link from 'next/link';
import FullMenu from '../../components/FullMenu';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity"
            >
              <ChevronLeft size={24} />
              <span className="text-lg font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold">Our Full Menu</h1>
            <p className="text-xl mt-4 opacity-90">Browse all our delicious offerings with 85+ items</p>
          </motion.div>
        </div>
      </div>

      {/* Menu Content */}
      <FullMenu />

      {/* Footer */}
      <Footer />
    </main>
  );
}
