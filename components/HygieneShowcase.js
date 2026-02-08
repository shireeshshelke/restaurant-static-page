'use client';
import { motion } from 'framer-motion';
import { CheckCircle, Droplets, Wind, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getImagePath } from '../lib/imageUtils';

export default function HygieneShowcase() {
  const { t } = useLanguage();
  const hygienePractices = [
    {
      icon: ShieldCheck,
      title: t('hygiene.practice1'),
      description: t('hygiene.practice1Desc'),
      image: getImagePath('/images/hygiene-certification.jpg'),
    },
    {
      icon: Wind,
      title: t('hygiene.practice2'),
      description: t('hygiene.practice2Desc'),
      image: getImagePath('/images/hygiene-kitchen.jpg'),
    },
    {
      icon: Droplets,
      title: t('hygiene.practice3'),
      description: t('hygiene.practice3Desc'),
      image: getImagePath('/images/hygiene-vegetables.jpg'),
    },
    {
      icon: CheckCircle,
      title: t('hygiene.practice4'),
      description: t('hygiene.practice4Desc'),
      image: getImagePath('/images/hygiene-staff.jpg'),
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
    <section id="hygiene" className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">{t('hygiene.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('hygiene.title')} <span className="gradient-text">{t('hygiene.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('hygiene.subtitle')}
          </p>
        </motion.div>

        {/* Practices Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hygienePractices.map((practice, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="grid grid-cols-2 h-80 overflow-hidden">
                {/* Image */}
                <div className="relative bg-gray-200 overflow-hidden">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(practice.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="bg-gradient-to-br from-green-50 to-white p-6 flex flex-col justify-center">
                  {/* Icon */}
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <practice.icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{practice.title}</h3>
                  <p className="text-gray-700 text-sm">{practice.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Our Hygiene Commitments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('hygiene.commitment1')}</h4>
              <p className="text-gray-600">{t('hygiene.commitment1Desc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('hygiene.commitment2')}</h4>
              <p className="text-gray-600">{t('hygiene.commitment2Desc')}</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">{t('hygiene.commitment3')}</h4>
              <p className="text-gray-600">{t('hygiene.commitment3Desc')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
