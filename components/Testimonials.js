'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: 'Priya Sharma',
      locality: 'Pune, Koregaon Park',
      rating: 5,
      quote: 'Finally found authentic Maharashtrian food that tastes like my mom makes! The quality is consistent and they deliver hot meals right on time.',
    },
    {
      name: 'Rahul Desai',
      locality: 'Pune, Baner',
      rating: 5,
      quote: 'The hygiene standards they follow are top-notch. I can really feel the care in every dish. Worth every penny!',
    },
    {
      name: 'Anjali Patel',
      locality: 'Pune, Wakad',
      rating: 5,
      quote: 'Ordering from here for 3 months now. The taste never changes, quality is premium, and they always deliver on time. Highly recommend!',
    },
    {
      name: 'Vikram Singh',
      locality: 'Pune, Viman Nagar',
      rating: 5,
      quote: 'Best cloud kitchen in Pune. The butter chicken here is absolutely mouthwatering. A must-try for butter chicken lovers!',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

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
            {t('testimonials.title')} <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="mb-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="text-orange-500" size={32} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs">{testimonial.locality}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-4xl font-bold gradient-text">5000+</h3>
            <p className="text-gray-600 mt-2">{t('testimonials.stat1')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold gradient-text">4.8★</h3>
            <p className="text-gray-600 mt-2">{t('testimonials.stat2')}</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold gradient-text">98%</h3>
            <p className="text-gray-600 mt-2">{t('testimonials.stat3')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
