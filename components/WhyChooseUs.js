'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Utensils } from 'lucide-react';

export default function WhyChooseUs() {
  const items = [
    { icon: ShieldCheck, title: "Hygienic Kitchen" },
    { icon: Leaf, title: "Fresh Ingredients" },
    { icon: Utensils, title: "Authentic Recipes" },
  ];

  return (
    <div className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
      <div className="flex justify-center gap-10">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 bg-white shadow-lg rounded-xl w-60"
          >
            <item.icon size={40} className="mx-auto mb-4 text-orange-500" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
