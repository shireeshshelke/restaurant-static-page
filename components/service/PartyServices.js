'use client';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Package, Cake, Users, Clock, Leaf } from 'lucide-react';

export default function PartyServices() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Premium Catering',
      description: 'Customized menus with diverse cuisine options. From traditional to modern, we have it all.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Package,
      title: 'Party Packages',
      description: 'All-in-one solutions including food, serving dishes, and disposable items.',
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Cake,
      title: 'Desserts & Sweets',
      description: 'Special desserts, cakes, and sweet preparations for your celebration.',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'We accommodate your schedule. Early morning to late night service available.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Leaf,
      title: 'Healthy Options',
      description: 'Vegan, vegetarian, and health-conscious menu options available.',
      color: 'from-teal-400 to-green-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
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
            What We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive party solutions tailored to your event needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-purple-300 hover:border-purple-500"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`relative mb-6 inline-block`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 rounded-full blur-lg transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>

                {/* Accent */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-300`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
