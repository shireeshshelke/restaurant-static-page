'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

export default function PartyPackages() {
  const packages = [
    {
      name: 'Basic',
      price: '₹2,500',
      description: 'Perfect for small gatherings',
      people: '10-20 people',
      features: [
        'Basic Menu Selection',
        'Standard Service',
        'Disposable Plates & Cutlery',
        'Delivery Included',
        'Setup Assistance',
      ],
      gradient: 'from-purple-400 to-purple-600',
      featured: false,
    },
    {
      name: 'Premium',
      price: '₹5,000',
      description: 'Most popular choice',
      people: '20-50 people',
      features: [
        'Customized Full Menu',
        'Premium Service Staff',
        'Nicer Serving Dishes',
        'Delivery & Setup',
        'Event Coordination',
        'Special Desserts',
        'Beverage Options',
      ],
      gradient: 'from-pink-400 to-rose-600',
      featured: true,
    },
    {
      name: 'Deluxe',
      price: 'Custom',
      description: 'For grand celebrations',
      people: '50+ people',
      features: [
        'Complete Custom Menu',
        'Professional Event Team',
        'Premium Serving Equipment',
        'Full Venue Setup',
        'Multiple Cuisines',
        'Catering Supervision',
        'Post-Event Cleanup',
        'Photography Coordination',
      ],
      gradient: 'from-amber-400 to-orange-600',
      featured: false,
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
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
            Party <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your celebration
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                pkg.featured
                  ? 'ring-2 ring-pink-500 scale-105 shadow-2xl'
                  : 'shadow-lg hover:shadow-xl hover:scale-105'
              }`}
              variants={itemVariants}
            >
              {/* Featured Badge */}
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 text-center font-bold">
                  🎯 MOST POPULAR
                </div>
              )}

              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-10`}></div>

              {/* Content */}
              <div className="relative bg-white p-8 flex flex-col h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${pkg.gradient} rounded-2xl p-6 text-white mb-6`}>
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    <span className="text-white/80">{pkg.people}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-grow mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={24} className={`text-transparent bg-gradient-to-r ${pkg.gradient} bg-clip-text flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {pkg.featured ? 'Book This Package' : 'Get Started'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Packages CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Don't see what you need?</h3>
          <p className="text-lg mb-6 opacity-90">
            We create custom packages tailored to your event requirements and budget
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
