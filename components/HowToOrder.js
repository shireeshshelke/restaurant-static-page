'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Smartphone, HomeIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowToOrder() {
  const { t } = useLanguage();
  const platforms = [
    {
      icon: Smartphone,
      title: 'Zomato',
      description: t('howToOrder.zomatoDesc'),
      link: '#',
      buttonText: t('howToOrder.zomatoButton'),
      gradient: 'from-red-400 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Swiggy',
      description: t('howToOrder.swiggyDesc'),
      link: '#',
      buttonText: t('howToOrder.swiggyButton'),
      gradient: 'from-orange-400 to-red-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Direct',
      description: t('howToOrder.whatsappDesc'),
      link: 'https://wa.me/919876543210',
      buttonText: t('howToOrder.whatsappButton'),
      gradient: 'from-green-400 to-emerald-500',
    },
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
    <section id="order-section" className="py-20 bg-gradient-to-b from-green-50 via-white to-blue-50">
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
            {t('howToOrder.title')} <span className="gradient-text">{t('howToOrder.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howToOrder.subtitle')}
          </p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Color Bar */}
              <div className={`h-1 bg-gradient-to-r ${platform.gradient}`}></div>

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="text-white" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{platform.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-8">{platform.description}</p>

                {/* Button */}
                <motion.a
                  href={platform.link}
                  className={`inline-block w-full text-center bg-gradient-to-r ${platform.gradient} text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {platform.buttonText}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Steps */}
        <motion.div
          className="bg-white rounded-2xl shadow-soft p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">{t('howToOrder.stepsTitle')}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: 1, title: t('howToOrder.step1Title'), description: t('howToOrder.step1Desc') },
              { number: 2, title: t('howToOrder.step2Title'), description: t('howToOrder.step2Desc') },
              { number: 3, title: t('howToOrder.step3Title'), description: t('howToOrder.step3Desc') },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Number Circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-orange text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>

                {/* Arrow */}
                {index < 2 && (
                  <div className="hidden md:flex justify-center absolute right-0 translate-x-1/2">
                    <svg className="w-8 h-8 text-orange-300 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}

                <h4 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
