import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Socials from './socials';

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* New About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 py-4 md:py-6"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="w-[90%] md:w-[80%] mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/about/aboutpic.JPG"
                alt="A portrait of me"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Hello 👋
              </h1>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">🏡</span>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I grew up in South Jersey in the Philly area
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">🏃</span>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I love running and exploring new places
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">🎥</span>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  I also like photography and making videos
                </p>
              </div>
            </div>
            <div className="pt-5 md:pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                <i>Currently in Princeton, NJ 🐯</i>
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-3">
                <b>Let's connect ⬇️</b>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto"
        >
          <div className="pt-5 md:pt-4">
            <Socials size="large" branded />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 