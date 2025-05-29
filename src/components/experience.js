import React from 'react';
import { motion } from 'framer-motion';
import rolesData from '../../data/roles.json'

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-0 md:px-4 lg:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="md:space-y-4 border-t border-b border-gray-200 dark:border-gray-700 md:border-0 md:pl-4">
          {rolesData.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-0 md:pl-10 group"
            >
              <div className="hidden md:flex absolute -left-[1.625rem] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 items-center justify-center text-2xl text-white font-bold">
                {role.emoji}
              </div>
              <div className={`bg-white dark:bg-[#18202F] py-6 md:py-6 px-4 md:px-6 rounded-none md:rounded-2xl border-b border-gray-200 dark:border-gray-700 md:border transform transition-all duration-300 ease-out md:group-hover:scale-[1.02] ${index === rolesData.length - 1 ? 'border-b-0' : ''}`}>
                <div className="flex flex-col md:flex-row items-start justify-between gap-2 md:gap-4">
                  <div className="w-full md:w-auto">
                    <h5 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-0.5">
                      {role.position}
                    </h5>
                    <div className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300">
                      {role.company}
                    </div>
                  </div>
                  <div className="w-full md:w-auto text-left md:text-right">
                    <div className="text-sm md:text-base font-semibold text-lime-500 mb-2 md:mb-2">
                      {role.startDate} - {role.endDate}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {role.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 