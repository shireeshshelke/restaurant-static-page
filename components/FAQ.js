'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is the food spicy? Can I customize the spice level?',
      answer: 'Most of our dishes are medium to high spice. However, we understand different preferences. You can always add special instructions during checkout to request mild, medium, or hot preparations. Our delivery partner will add a note with your order.'
    },
    {
      question: 'Do you use packaged masalas or fresh spices?',
      answer: 'We use a blend of fresh ground spices and premium quality masala powders. All our masalas are sourced from certified suppliers, and we grind them fresh daily to ensure maximum flavor and freshness.'
    },
    {
      question: 'How do you ensure veg and non-veg separation?',
      answer: 'We maintain strict segregation between vegetarian and non-vegetarian items. Different utensils, cutting boards, and preparation areas are used. Our FSSAI certification ensures compliance with all food safety regulations.'
    },
    {
      question: 'What is your refund/cancellation policy?',
      answer: 'Orders can be cancelled within 5 minutes of placement for a full refund. After that, it depends on the preparation status. In case of quality issues, we provide replacements or full refunds. Contact us immediately after delivery if there are any concerns.'
    },
    {
      question: 'Can I pre-order meals? What about bulk orders?',
      answer: 'Yes! You can pre-order meals up to 24 hours in advance. For bulk orders (10+ meals), please WhatsApp us directly for special pricing and customization. We handle corporate orders and event catering.'
    },
    {
      question: 'How do you maintain food quality during delivery?',
      answer: 'We use insulated, temperature-controlled containers for all deliveries. Our packaging is food-safe and designed to keep meals hot and fresh. All orders are dispatched within 5 minutes of preparation to minimize delivery time.'
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={18} className="text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm">COMMON QUESTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get quick answers to common queries
          </p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-soft overflow-hidden"
              variants={itemVariants}
            >
              <button
                className="w-full px-6 md:px-8 py-6 flex items-start md:items-center gap-4 hover:bg-orange-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {/* Number */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-orange text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Question */}
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                </div>

                {/* Chevron */}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={24} className="text-orange-500" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-6 pt-0">
                  <div className="ml-12 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/90 mb-6">
            Our customer service team is ready to help! Reach out to us on WhatsApp for instant support.
          </p>
          <motion.button
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
