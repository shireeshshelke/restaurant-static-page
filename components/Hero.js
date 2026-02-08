'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/hero.jpg')"}}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-5xl font-bold mb-4">Authentic Home-Style Meals Delivered Fresh</h1>
          <button className="bg-orange-500 px-6 py-3 rounded-full text-lg">Order Now</button>
        </motion.div>
      </div>
    </div>
  );
}
