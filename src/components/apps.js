import AppLink from './applink';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Apps({ apps }) {
  return (
    <div className="container mx-auto text-center pt-0 md:pt-8">
      <div className="max-w-lg xl:max-w-5xl mx-auto px-0 md:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-8 space-y-4 md:space-y-0 pb-6 md:pb-4"
        >
          {apps.map((app, idx) => {
            const isLastOdd = idx === apps.length - 1 && apps.length % 2 !== 0;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${isLastOdd ? 'xl:col-span-2' : ''}`}
              >
                <div className={`${isLastOdd ? 'mx-auto w-full xl:w-1/2' : 'w-full'} px-4 md:px-0`}>
                  <div className="rounded-xl">
                    <AppLink app={app} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
      <div className="block md:hidden border-b border-gray-200 dark:border-gray-700"></div>
    </div>
  );
} 