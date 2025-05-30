import AppLink from './applink';
import Link from 'next/link';
import VersionCard from './versioncard';
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
          className="grid grid-cols-1 xl:grid-cols-2 gap-0 xl:gap-8 space-y-4 md:space-y-0"
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
        
        {/* Version Updates Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-0 md:mt-8 px-4 py-8 md:pb-8 max-w-2xl mx-auto"
        >
          {/* Recent Updates Title - Hidden on small, visible on medium+ */}
          <h3 className="hidden md:block text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Recent Updates
          </h3>
          
          {/* Recent Updates List - Hidden on small, visible on medium+ */}
          <div className="hidden md:block space-y-4 text-left">
            {apps
              .reduce((versions, app) => {
                const appVersions = app.versions?.map(version => ({
                  ...version,
                  app: app
                })) || [];
                return [...versions, ...appVersions];
              }, [])
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 4)
              .map((version, index) => (
                <motion.div
                  key={`${version.app.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <VersionCard 
                    app={version.app}
                    version={version}
                  />
                </motion.div>
              ))}
          </div>

          <div className="md:pt-6 text-center">
            <Link 
              href="/updates"
              className="inline-flex items-center justify-center px-4 py-1.5 md:py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:scale-105"
            >
              View all updates
              <svg className="w-4 h-4 ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="block md:hidden border-b border-gray-200 dark:border-gray-700"></div>
    </div>
  );
} 