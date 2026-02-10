'use client';
import { motion } from 'framer-motion';
import { Clock, Leaf, MapPin, Users, Zap, CheckCircle } from 'lucide-react';

export default function TiffinBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'No cooking, no prep. Just eat and enjoy!',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Leaf,
      title: 'Healthy & Nutritious',
      description: 'Balanced meals designed by nutritionists.',
      color: 'from-teal-400 to-green-500',
    },
    {
      icon: Zap,
      title: 'Fresh Daily',
      description: 'Cooked fresh every morning, delivered hot.',
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Family Plans',
      description: 'Customizable plans for individuals and families.',
      color: 'from-lime-400 to-green-500',
    },
    {
      icon: MapPin,
      title: 'Easy Delivery',
      description: 'Doorstep delivery across Pune.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: CheckCircle,
      title: 'Flexible Commitment',
      description: 'Pause or cancel anytime, no lockup.',
      color: 'from-emerald-500 to-green-600',
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
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
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
            Why Choose Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Tiffin Service?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just food - it's your daily nutrition partner
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-green-300 hover:border-green-500"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className={`relative mb-6 inline-block`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-20 group-hover:opacity-40 rounded-full blur-lg transition-all duration-300`}></div>
                  <div className={`relative bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>

                {/* Accent */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${benefit.color} transition-all duration-300`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
