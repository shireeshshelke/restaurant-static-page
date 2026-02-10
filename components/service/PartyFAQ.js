'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function PartyFAQ() {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      q: 'How far in advance should I book?',
      a: 'We recommend booking at least 2 weeks in advance for better customization options. For large events (100+ people), 3-4 weeks is ideal.',
    },
    {
      q: 'Can you accommodate dietary restrictions?',
      a: 'Absolutely! We offer vegan, vegetarian, gluten-free, and other dietary accommodations. Just let us know when booking.',
    },
    {
      q: 'What if we need to change the guest count?',
      a: 'No problem! You can adjust guest count up to 48 hours before the event. We\'ll recalculate pricing accordingly.',
    },
    {
      q: 'Do you provide staff for serving?',
      a: 'Yes! Staff availability depends on the package. Premium and Deluxe packages include professional service staff.',
    },
    {
      q: 'What areas do you deliver to?',
      a: 'We deliver across Pune and surrounding areas. Contact us for delivery to your specific location.',
    },
    {
      q: 'Can I customize the menu completely?',
      a: 'Yes! We work with you to create a menu tailored to your preferences and dietary needs.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
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
            Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our party services
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
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: expanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-purple-600" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expanded === index ? 'auto' : 0,
                  opacity: expanded === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-purple-50"
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
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6">Reach out to us on WhatsApp - we're here to help!</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
          >
            Chat with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
