'use client';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf } from 'lucide-react';

export default function YourStory() {
  const storyPoints = [
    {
      icon: Heart,
      title: 'Started with Love',
      description: 'Began when our founder craved the warmth of home-cooked meals after moving to the city.',
    },
    {
      icon: Users,
      title: 'Family Recipes',
      description: 'Every dish is made using 30+ year old family recipes passed down through generations.',
    },
    {
      icon: Leaf,
      title: 'Pure Ingredients',
      description: 'Only the finest, farm-fresh ingredients. No preservatives, no artificial flavors.',
    },
  ];

  return (
    <section id="story" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-medium"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/story.jpg"
              alt="Our Story"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x600?text=Our%20Story';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Ghar Jaisa Khana</h3>
              <p className="text-white/90">"The taste of home in every bite"</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold text-sm mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              OUR STORY
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Started This <span className="gradient-text">Journey</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              In 2021, our founder left behind his grandmother's traditional kitchen to chase his dreams in the city. But nothing compared to the way grandma cooked—with love, care, and the finest ingredients. That longing inspired us to bring that same authentic, home-cooked experience to thousands of people.
            </p>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Today, we operate a licensed, hygienic kitchen where every meal is prepared with the same passion and attention to detail as if it were for our own family. We believe good food should be accessible, affordable, and absolutely delicious.
            </p>

            {/* Story points */}
            <div className="space-y-6 mb-8">
              {storyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-orange-100">
                      <point.icon className="text-orange-600" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Your First Meal
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
