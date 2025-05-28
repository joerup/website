import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Rest of the component content */}
    </motion.div>
  );
};

export default Hero; 