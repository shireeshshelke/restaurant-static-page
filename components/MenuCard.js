'use client';
import { motion } from 'framer-motion';
import { Utensils, PartyPopper, Award } from 'lucide-react';
import { getImagePath } from '../lib/imageUtils';

export default function MenuCard() {
  const menuCategories = [
    { name: 'Pizza', count: '24 items', icon: '🍕' },
    { name: 'Burger', count: '12 items', icon: '🍔' },
    { name: 'Starters', count: '12 items', icon: '🍟' },
    { name: 'Soups', count: '5 items', icon: '🍲' },
    { name: 'Salad', count: '4 items', icon: '🥗' },
    { name: 'Indian Snacks', count: '5 items', icon: '🥟' },
    { name: 'Indian Main Course', count: '6 items', icon: '🍛' },
    { name: 'Pasta', count: '8 items', icon: '🍝' },
    { name: 'Snacks', count: '9 items', icon: '🍪' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Hungry? Let Us Cook For You Today.
          </h2>
          <p className="text-gray-600 text-lg mt-4">Explore our diverse menu with 85+ delicious items</p>
        </motion.div>

        {/* Main Menu Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url('${getImagePath('/images/hero.jpg')}')` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-red-900/70 to-orange-800/80"></div>

          {/* Content */}
          <div className="relative p-10 md:p-16 text-white">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-yellow-400 p-3 rounded-xl">
                <Utensils className="text-orange-900" size={32} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold">Our Full Menu</h3>
                <p className="text-orange-100">Premium ingredients, authentic recipes</p>
              </div>
            </div>

            {/* Menu Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {menuCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl p-4 text-center cursor-pointer transition-all duration-300 hover:scale-105 border border-white/20"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h4 className="font-bold text-sm md:text-base">{category.name}</h4>
                  <p className="text-xs text-orange-100">{category.count}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {/* Feature 1 */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Fresh Daily</h4>
                  <p className="text-sm text-orange-100">Made fresh with premium ingredients every single day</p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <PartyPopper className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Party Orders</h4>
                  <p className="text-sm text-orange-100">Order &gt;₹1000? Free home delivery available!</p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="flex gap-4 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Utensils className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Hygienic</h4>
                  <p className="text-sm text-orange-100">FSSAI certified kitchen with highest safety standards</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-orange-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
              >
                View Full Menu
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 text-white px-8 py-3 rounded-full font-bold text-lg border border-white/50 hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                Order Now
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200"
        >
          <p className="text-center text-gray-800">
            <span className="font-bold text-purple-600">💡 Party Orders Benefit:</span> Place an order above ₹1000 and enjoy{' '}
            <span className="bg-yellow-200 px-2 py-1 rounded font-bold">FREE HOME DELIVERY!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
