'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UtensilsCrossed, PartyPopper, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceSelector() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'restaurant',
      title: 'Restaurant Menu',
      subtitle: 'Order Fresh Daily Meals',
      description: 'Enjoy authentic home-cooked meals delivered fresh to your doorstep. Perfect for daily hunger!',
      icon: UtensilsCrossed,
      gradient: 'from-orange-400 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      href: '/restaurant',
      color: '#ff6b5b',
      features: ['✓ Daily Fresh Meals', '✓ 85+ Menu Items', '✓ Fast Pickup/Delivery'],
    },
    {
      id: 'party',
      title: 'Party Services',
      subtitle: 'Celebrations Made Easy',
      description: 'Complete party solutions - catering, dishes, décor essentials, and premium menu items for your special events!',
      icon: PartyPopper,
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      href: '/party',
      color: '#a855f7',
      features: ['✓ Party Catering', '✓ Premium Dishes', '✓ Event Solutions'],
    },
    {
      id: 'tiffin',
      title: 'Tiffin Service',
      subtitle: 'Daily Nutrition Program',
      description: 'Nutritious, healthy meal plans delivered daily. Perfect for daily lunch/dinner with customizable menus.',
      icon: Utensils,
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      href: '/tiffin',
      color: '#10b981',
      features: ['✓ Daily Delivery', '✓ Healthy Plans', '✓ Customizable'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the service that best fits your needs. From daily meals to grand celebrations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-opacity-30`}
                style={{ borderColor: service.color }}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <IconComponent size={40} className="text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className={`text-sm font-semibold mb-3`} style={{ color: service.color }}>
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <p key={idx} className="text-sm font-medium text-gray-700">
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={service.href}
                    className={`inline-block bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full group-hover:shadow-lg`}
                  >
                    Explore {service.title}
                  </Link>

                  {/* Accent line */}
                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Why Choose HomeEats?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">🏆</div>
              <p className="font-semibold">100% Quality</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">⚡</div>
              <p className="font-semibold">Lightning Fast</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">🔒</div>
              <p className="font-semibold">Hygiene First</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">💚</div>
              <p className="font-semibold">With Love</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
