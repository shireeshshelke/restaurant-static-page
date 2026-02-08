'use client';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

export default function OperatingHours() {
  const businessHours = [
    { day: 'Monday - Friday', time: '10:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '11:00 AM - 10:00 PM' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="pickup-location" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
            <span className="gradient-text">Operating Hours & Pickup</span>
          </h2>
          <p className="text-xl text-gray-600">Find us at our fixed pickup location</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Operating Hours */}
          <motion.div
            className="bg-white rounded-2xl shadow-soft p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
            </div>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {businessHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
                  variants={itemVariants}
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{schedule.day}</h4>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-lg font-semibold">{schedule.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-yellow-900">
                ⚡ <strong>Quick Note:</strong> Delivery time is 30-45 minutes from confirmation
              </p>
            </motion.div>
          </motion.div>

          {/* Pickup Location */}
          <motion.div
            className="bg-white rounded-2xl shadow-soft p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-pink-500 to-red-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pickup Location</h3>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Address */}
              <div className="p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl border-2 border-pink-200">
                <h4 className="font-bold text-gray-900 text-lg mb-2">🏠 Address</h4>
                <p className="text-gray-700 text-lg font-semibold">
                  Pune, Maharashtra, India
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Our fixed pickup location. Currently, we only operate from this location.
                </p>
              </div>

              {/* Coming Soon */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                <h4 className="font-bold text-gray-900 text-lg mb-2">🚀 Coming Soon</h4>
                <p className="text-gray-700 font-semibold">Full Home Delivery Service</p>
                <p className="text-gray-600 mt-2 text-sm">
                  We're expanding! Home delivery will be available in a few months. Stay tuned!
                </p>
              </div>

              {/* Party Orders */}
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200">
                <h4 className="font-bold text-gray-900 text-lg mb-2">🎉 Party Orders</h4>
                <p className="text-gray-700 font-semibold">Order &gt;₹1000 = Free Delivery</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Orders above ₹1000 qualify for free home delivery right now!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
