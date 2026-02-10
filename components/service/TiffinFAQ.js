'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TiffinFAQ() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      q: 'How does the daily delivery work?',
      a: 'We deliver fresh-cooked meals every morning to your doorstep. You can choose your delivery time slot, and meals are prepared the same day.',
    },
    {
      q: 'Can I customize my meals?',
      a: 'Absolutely! We offer menu choices each week. You can mix & match dishes based on your preferences, dietary needs, and allergies.',
    },
    {
      q: 'What if I want to skip a day?',
      a: 'No problem! You can skip any day without penalty. Just notify us 24 hours in advance through WhatsApp or call.',
    },
    {
      q: 'How is quality maintained?',
      a: 'All meals are prepared in FSSAI-certified kitchens using premium ingredients. We maintain strict hygiene standards.',
    },
    {
      q: 'Can I switch plans?',
      a: 'Yes! You can upgrade or downgrade your plan anytime. Changes take effect from the next week.',
    },
    {
      q: 'What areas do you cover?',
      a: 'We cover most of Pune and surrounding areas. Check your location on WhatsApp or call us to confirm.',
    },
    {
      q: 'Is there a minimum commitment?',
      a: 'No lockup period! You can pause or cancel anytime. We believe in earning your business every day.',
    },
    {
      q: 'Do you offer special diets?',
      a: 'Yes! We accommodate keto, vegan, gluten-free, low-salt, high-protein, and other dietary requirements.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our tiffin service
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-green-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-green-600" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expanded === index ? 'auto' : 0,
                  opacity: expanded === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-green-50"
              >
                <div className="px-6 py-4 text-gray-700">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
          <p className="mb-6">Join hundreds of happy customers who trust HomeEats for their daily nutrition</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
          >
            Start with a free consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
