'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Leaf, Utensils } from 'lucide-react';

const menuData = [
  // Pizza - Non Veg
  { category: 'Pizza - Non Veg', name: 'Chicken Cheese Pizza', veg: false, price: 250 },
  { category: 'Pizza - Non Veg', name: 'Chicken Tikka Pizza', veg: false, price: 280 },
  { category: 'Pizza - Non Veg', name: 'Chicken BBQ Pizza', veg: false, price: 290 },
  { category: 'Pizza - Non Veg', name: 'Chicken Peri Peri Pizza', veg: false, price: 290 },
  { category: 'Pizza - Non Veg', name: 'Egg Pizza', veg: false, price: 200 },
  { category: 'Pizza - Non Veg', name: 'Malai Chicken Pizza', veg: false, price: 300 },
  { category: 'Pizza - Non Veg', name: 'Mutton Cheese Pizza', veg: false, price: 320 },
  { category: 'Pizza - Non Veg', name: 'Chicken Kebab Pizza', veg: false, price: 300 },
  { category: 'Pizza - Non Veg', name: 'Chicken Macaroni Pizza', veg: false, price: 280 },
  { category: 'Pizza - Non Veg', name: 'Chicken Keema Pizza', veg: false, price: 280 },
  { category: 'Pizza - Non Veg', name: 'Mutton Keema Pizza', veg: false, price: 320 },

  // Pizza - Veg
  { category: 'Pizza - Veg', name: 'Margherita Pizza', veg: true, price: 180 },
  { category: 'Pizza - Veg', name: 'Veg Cheese Pizza (Onion, Capsicum)', veg: true, price: 200 },
  { category: 'Pizza - Veg', name: 'Sweet Corn Pizza', veg: true, price: 220 },
  { category: 'Pizza - Veg', name: 'Baby Corn Pizza', veg: true, price: 220 },
  { category: 'Pizza - Veg', name: 'Double Cheese Pizza', veg: true, price: 240 },
  { category: 'Pizza - Veg', name: 'Chocolate Pizza', veg: true, price: 200 },
  { category: 'Pizza - Veg', name: 'Paneer Tikka Pizza', veg: true, price: 260 },
  { category: 'Pizza - Veg', name: 'Mushroom Pizza', veg: true, price: 230 },
  { category: 'Pizza - Veg', name: 'Pan Pizza', veg: true, price: 210 },
  { category: 'Pizza - Veg', name: 'Paneer Shawarma Pizza', veg: true, price: 270 },

  // Pizza - Italian Special
  { category: 'Pizza - Italian Special', name: 'Pizza Alla Bufala (Buffalo Mozzarella)', veg: true, price: 350 },
  { category: 'Pizza - Italian Special', name: 'Pizza Carrettiera (Sausage, Broccoli)', veg: false, price: 340 },
  { category: 'Pizza - Italian Special', name: 'Pesto Chicken Pizza (Cherry Tomato, Basil)', veg: false, price: 330 },
  { category: 'Pizza - Italian Special', name: 'Cajun Spice Pizza (Cajun Chicken, Red Paprika)', veg: false, price: 320 },

  // Burger
  { category: 'Burger', name: 'Classic Veg Burger', veg: true, price: 120 },
  { category: 'Burger', name: 'Cheese Veg Burger', veg: true, price: 140 },
  { category: 'Burger', name: 'Veggie Burger', veg: true, price: 130 },
  { category: 'Burger', name: 'Fish Burger', veg: false, price: 160 },
  { category: 'Burger', name: 'BBQ Burger (Paneer/Chicken)', veg: false, price: 180 },
  { category: 'Burger', name: 'Mutton Burger', veg: false, price: 190 },
  { category: 'Burger', name: 'Zinger Chicken Burger', veg: false, price: 170 },
  { category: 'Burger', name: 'Double Patty Burger', veg: false, price: 200 },
  { category: 'Burger', name: 'Guddi Special Burger', veg: false, price: 210 },
  { category: 'Burger', name: 'Turkey Burger', veg: false, price: 220 },
  { category: 'Burger', name: 'Chicken Tikka Patty Burger', veg: false, price: 190 },
  { category: 'Burger', name: 'Cheese Corn Burger', veg: true, price: 150 },

  // Starters
  { category: 'Starters', name: 'French Fries', veg: true, price: 80 },
  { category: 'Starters', name: 'Peri Peri Fries', veg: true, price: 100 },
  { category: 'Starters', name: 'Pizza Sticks', veg: true, price: 120 },
  { category: 'Starters', name: 'Cheese Fries', veg: true, price: 110 },
  { category: 'Starters', name: 'Sweet Potato Fries', veg: true, price: 100 },
  { category: 'Starters', name: 'Cheese Batata Vada', veg: true, price: 90 },
  { category: 'Starters', name: 'Smilies', veg: true, price: 80 },
  { category: 'Starters', name: 'Cheese Smilies', veg: true, price: 100 },
  { category: 'Starters', name: 'Cheese Sticks', veg: true, price: 110 },
  { category: 'Starters', name: 'Onion Rings', veg: true, price: 90 },
  { category: 'Starters', name: 'Chicken Sticks', veg: false, price: 130 },
  { category: 'Starters', name: 'Fish Sticks', veg: false, price: 140 },

  // Soups
  { category: 'Soups', name: 'Lemon Chicken Orzo Soup', veg: false, price: 150 },
  { category: 'Soups', name: 'Tomato Soup', veg: true, price: 120 },
  { category: 'Soups', name: 'Creamy Tortellini Soup with Sausage', veg: false, price: 160 },
  { category: 'Soups', name: 'White Chicken Soup', veg: false, price: 150 },
  { category: 'Soups', name: 'Manchow Soup', veg: true, price: 130 },

  // Salads
  { category: 'Salads', name: 'Italian Pasta Salad', veg: true, price: 140 },
  { category: 'Salads', name: 'Orzo Pasta Salad', veg: true, price: 130 },
  { category: 'Salads', name: 'Macaroni Salad', veg: true, price: 120 },
  { category: 'Salads', name: 'Greek Pasta Salad', veg: true, price: 150 },

  // Indian Snacks
  { category: 'Indian Snacks', name: 'Pav Bhaji', veg: true, price: 100 },
  { category: 'Indian Snacks', name: 'Cheese Pav Bhaji', veg: true, price: 120 },
  { category: 'Indian Snacks', name: 'Special Pav Bhaji', veg: false, price: 140 },
  { category: 'Indian Snacks', name: 'Misal Pav', veg: true, price: 110 },
  { category: 'Indian Snacks', name: 'Veg Cutlets', veg: true, price: 90 },

  // Pasta
  { category: 'Pasta', name: 'Pasta with Pesto and Burrata', veg: true, price: 220 },
  { category: 'Pasta', name: 'One Pot Pasta with Salmon', veg: false, price: 280 },
  { category: 'Pasta', name: 'Creamy Vegetable Pasta', veg: true, price: 200 },
  { category: 'Pasta', name: 'Pasta Salad with Grilled Chicken', veg: false, price: 240 },
  { category: 'Pasta', name: 'Creamy White Chicken and Spinach Lasagna', veg: false, price: 300 },
  { category: 'Pasta', name: 'Shrimp Alfredo', veg: false, price: 290 },
  { category: 'Pasta', name: 'Spaghetti and Meatballs', veg: false, price: 250 },
  { category: 'Pasta', name: 'Creamy Mushroom Pasta', veg: true, price: 210 },

  // Snacks
  { category: 'Snacks', name: 'Fried Mac and Cheese Balls', veg: true, price: 100 },
  { category: 'Snacks', name: 'Curd Cheese Balls', veg: true, price: 90 },
  { category: 'Snacks', name: 'Mozzarella Sticks', veg: true, price: 110 },
  { category: 'Snacks', name: 'Corn Cheese Balls', veg: true, price: 95 },
  { category: 'Snacks', name: 'Vegetable Cheese Balls', veg: true, price: 85 },
  { category: 'Snacks', name: 'Paneer Nuggets', veg: true, price: 120 },
  { category: 'Snacks', name: 'Chicken Cheese Balls', veg: false, price: 130 },
  { category: 'Snacks', name: 'Mutton Cheese Balls', veg: false, price: 140 },
  { category: 'Snacks', name: 'Aloo Cabbage Balls', veg: true, price: 80 },
];

const categories = [
  'All',
  'Pizza - Non Veg',
  'Pizza - Veg',
  'Pizza - Italian Special',
  'Burger',
  'Starters',
  'Soups',
  'Salads',
  'Indian Snacks',
  'Pasta',
  'Snacks',
];

export default function FullMenu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      const matchCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="full-menu" className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Utensils size={18} className="text-orange-600" />
            <span className="text-orange-600 font-semibold text-sm">OUR FULL MENU</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Explore <span className="gradient-text">Every Flavor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From authentic pizzas to gourmet burgers, discover our complete culinary collection
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors bg-white shadow-sm"
            />
          </div>
        </motion.div>

        {/* Category Tabs - Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeCategory === category
                    ? 'bg-gradient-orange text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-500'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden"
                >
                  {/* Veg/Non-Veg Indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`w-6 h-6 rounded flex items-center justify-center ${
                        item.veg
                          ? 'bg-green-100 border-2 border-green-500'
                          : 'bg-red-100 border-2 border-red-500'
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.veg ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {item.category.split(' - ')[0]}
                    </div>

                    {/* Item Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>

                    {/* Price Section */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold gradient-text">₹{item.price}</div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-orange text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all"
                      >
                        Add
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <Utensils size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 text-lg">No items found matching your search</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Showing <span className="font-bold text-orange-600">{filteredItems.length}</span> items
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-white shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-orange-100 mb-6 text-lg">
            All items prepared fresh with premium ingredients
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('order-section').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-orange-600 px-10 py-3 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors"
          >
            Order Now
          </motion.button>
        </motion.div>
      </div>

      {/* Hide scrollbar styling */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
