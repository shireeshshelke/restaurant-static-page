'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function TiffinPlans() {
  const plans = [
    {
      name: 'Solo Plan',
      description: 'Perfect for individuals',
      price: '₹150',
      period: 'per meal',
      meals: '1 meal/day',
      color: 'from-green-400 to-emerald-600',
      items: [
        'Daily tiffin service',
        'Mix & match menus',
        'Flexible days',
        'Hot & fresh delivery',
        'Customizable portions',
      ],
      featured: false,
    },
    {
      name: 'Family Plan',
      description: 'Most popular choice',
      price: '₹2,400',
      period: 'per month',
      meals: '2 meals/day',
      color: 'from-emerald-400 to-teal-600',
      items: [
        'Breakfast + Lunch/Dinner',
        'Weekly menu variety',
        'Family portions',
        'Priority delivery',
        'Customizable for family taste',
        'Special dietary options',
      ],
      featured: true,
    },
    {
      name: 'Premium Plan',
      description: 'Complete nutrition solution',
      price: '₹3,600',
      period: 'per month',
      meals: '3 meals/day',
      color: 'from-teal-400 to-cyan-600',
      items: [
        'Breakfast + Lunch + Dinner',
        'Professional meal planning',
        'Nutritionist consultation',
        'Premium ingredients',
        'Special preparations',
        'Flexible modifications',
        'Smoothies & snacks included',
      ],
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
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
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
            Choose Your <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Meal Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible plans tailored to your lifestyle
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.featured
                  ? 'ring-2 ring-emerald-500 scale-105 shadow-2xl'
                  : 'shadow-lg hover:shadow-xl hover:scale-105'
              }`}
              variants={itemVariants}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 text-center font-bold">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10`}></div>

              {/* Content */}
              <div className="relative bg-white p-8 flex flex-col h-full">
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.color} rounded-2xl p-6 text-white mb-6`}>
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-white/80 text-sm">{plan.period}</span>
                  </div>
                  <div className="mt-4 text-white/90">{plan.meals}</div>
                </div>

                {/* Features */}
                <div className="space-y-3 flex-grow mb-6">
                  {plan.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={24} className={`text-transparent bg-gradient-to-r ${plan.color} bg-clip-text flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {plan.featured ? 'Subscribe Now' : 'Get Started'}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Plans CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Need a custom plan?</h3>
          <p className="text-lg mb-6 opacity-90">
            We create personalized meal plans based on your dietary needs and preferences
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Consult Nutritionist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
