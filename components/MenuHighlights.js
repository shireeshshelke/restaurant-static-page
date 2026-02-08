'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getImagePath } from '../lib/imageUtils';

export default function MenuHighlights() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t('menu.category1'),
      image: getImagePath('/images/maharashtrian.jpg'),
      dishes: ['Misal Pav', 'Batata Vada', 'Puran Poli', 'Ukdiche Modak', 'Amboli'],
      rating: 4.8,
    },
    {
      title: t('menu.category2'),
      image: getImagePath('/images/curries.jpg'),
      dishes: ['Butter Chicken', 'Paneer Tikka Masala', 'Chole Bhature', 'Dal Makhani', 'Biryani'],
      rating: 4.9,
    },
    {
      title: t('menu.category3'),
      image: getImagePath('/images/western.jpg'),
      dishes: ['Momos', 'Cheese Naan', 'Garlic Bread', 'Loaded Fries', 'Spring Rolls'],
      rating: 4.7,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('menu.title')} <span className="gradient-text">{t('menu.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(category.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold flex items-center gap-1">
                  <Star size={16} className="fill-current" />
                  {category.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{category.title}</h3>

                {/* Dishes List */}
                <div className="space-y-2 mb-6">
                  {category.dishes.map((dish, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-orange"></span>
                      <span className="text-sm">{dish}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' })}
                  className="w-full btn-primary text-sm hover:shadow-lg transition-shadow"
                >
                  {t('menu.viewMenu')}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Menu CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 text-center border-2 border-orange-200"
        >
          <h3 className="text-3xl font-bold mb-3 text-gray-900">Want More Options?</h3>
          <p className="text-gray-600 mb-6 text-lg">Browse our complete menu with 100+ delicious items</p>
          <motion.button
            onClick={() => document.getElementById('full-menu').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-orange text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-all"
          >
            View Full Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
