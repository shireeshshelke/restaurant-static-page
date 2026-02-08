'use client';
import { motion } from 'framer-motion';
import { ChefHat, Phone, MapPin, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#story' },
      { label: 'Hygiene & Safety', href: '#hygiene' },
      { label: 'Menu', href: '#menu' },
      { label: 'Reviews', href: '#reviews' },
    ],
    Service: [
      { label: 'How to Order', href: '#order-section' },
      { label: 'Service Area', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    Legal: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cancellation Policy', href: '#' },
      { label: 'FSSAI License', href: '#' },
    ],
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Pune, Maharashtra, India' },
    { icon: Phone, label: 'Phone', value: '+91 9876543210' },
    { icon: Mail, label: 'Email', value: 'hello@cloudkitchen.com' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand */}
            <motion.div
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-orange p-2 rounded-full">
                  <ChefHat className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Cloud Kitchen</h2>
                  <p className="text-xs text-gray-400">Ghar Jaisa Khana</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                Authentic, hygienic, home-cooked meals delivered fresh to your doorstep.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 hover:bg-orange-500 transition-all duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links], colIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold mb-6">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-3">
                    <info.icon size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Cloud Kitchen. All rights reserved. Made with <span className="text-red-500">❤</span> in Pune.
          </p>

          {/* Certifications */}
          <div className="flex gap-4 items-center">
            <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs text-gray-400">
              FSSAI Licensed
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg text-xs text-gray-400">
              100% Hygienic
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-orange w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: false }}
      >
        ↑
      </motion.button>
    </footer>
  );
}
