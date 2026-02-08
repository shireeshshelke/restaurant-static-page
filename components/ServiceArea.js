'use client';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function ServiceArea() {
  const areas = [
    'Koregaon Park',
    'Baner',
    'Wakad',
    'Viman Nagar',
    'Pune Station',
    'Shivajinagar',
    'Peth',
    'Camp',
    'Sadashivpeth',
    'Vishrantwadi',
    'Kothrud',
    'Kharadi',
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '10:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 10:00 PM' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-white">
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
            Service Area & <span className="gradient-text">Timings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check if we deliver to your area and our operating hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Areas */}
          <motion.div
            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-soft"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-orange w-12 h-12 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Service Areas</h3>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {areas.map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white px-4 py-3 rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-orange flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 p-4 bg-white rounded-xl border-2 border-orange-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-700">
                <span className="font-bold text-orange-600">⚡ Quick Note:</span> Check your area during checkout. Minimum order ₹200. Free delivery on orders above ₹500.
              </p>
            </motion.div>
          </motion.div>

          {/* Operating Hours */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-soft"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
            </div>

            <div className="space-y-6">
              {businessHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{schedule.day}</h4>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-blue-500" />
                    <span className="text-lg">{schedule.time}</span>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mt-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-2 border-green-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-semibold text-green-800">
                  ✓ Delivery time: 30-45 minutes from order confirmation
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
