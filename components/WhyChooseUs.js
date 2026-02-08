'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Utensils, Zap } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    { icon: ShieldCheck, title: "Hygienic Kitchen", description: "FSSAI approved, certified clean" },
    { icon: Leaf, title: "Fresh Ingredients", description: "Daily sourced, premium quality" },
    { icon: Utensils, title: "Authentic Recipes", description: "Family recipes, home cooked taste" },
    { icon: Zap, title: "Fast Delivery", description: "30-40 mins, hot & fresh" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build trust in just 5 seconds. Everything you need to know about our service.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-orange opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <item.icon size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>

              {/* Accent line */}
              <div className="mt-4 h-1 w-0 group-hover:w-12 bg-gradient-orange transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
