'use client';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PHONE_NUMBER = '+91 9876543210';
const WHATSAPP_LINK = 'https://wa.me/919876543210';

export default function HowToOrder() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE_NUMBER.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platforms = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Send your order directly on WhatsApp. Click to start a chat.',
      link: WHATSAPP_LINK,
      buttonText: 'Chat on WhatsApp',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Call us directly to place your order. We\'re always ready to help!',
      link: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
      buttonText: 'Call Now',
      gradient: 'from-blue-400 to-cyan-500',
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
        {/* Pickup Notification Banner */}
        <motion.div
          className="mb-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 text-white shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-start md:items-center flex-col md:flex-row">
              <Clock size={32} className="flex-shrink-0" />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">📍 Pickup Location Only</h3>
                <p className="text-white/90 text-lg mb-2">
                  Currently, we operate from a fixed pickup location only. Home delivery will be available very soon!
                </p>
                <p className="text-white/80">
                  <strong>Pickup Address:</strong> Pune, Maharashtra, India | <strong>Coming Soon:</strong> Full home delivery service
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Order <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Place your order via WhatsApp or give us a call. We accept orders through these channels only.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto"
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

                {/* Display Phone Number with Copy */}
                {platform.title === 'Phone Call' && (
                  <div className="mb-6 p-4 bg-gray-100 rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{PHONE_NUMBER}</span>
                    <motion.button
                      onClick={handleCopyPhone}
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 ml-2 whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? '✓ Copied' : 'Copy'}
                    </motion.button>
                  </div>
                )}

                {/* Button */}
                <motion.a
                  href={platform.link}
                  target={platform.title === 'WhatsApp' ? '_blank' : undefined}
                  rel={platform.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
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

        {/* Process Steps */}
        <motion.div
          className="bg-white rounded-2xl shadow-soft p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">How to Order</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: 1, title: 'Choose Your Items', description: 'Browse our menu and select what you love' },
              { number: 2, title: 'Contact Us', description: 'WhatsApp or call us with your order' },
              { number: 3, title: 'Pickup Your Food', description: 'Pick up your fresh, hot meal at our location' },
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
