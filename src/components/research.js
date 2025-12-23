import researchData from '../../data/research.json'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Research() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto text-center max-w-2xl xl:max-w-4xl">
        <div className="p-0 md:p-4 px-0 md:px-4 lg:px-6">
          <ol className="space-y-0 md:space-y-4 border-t border-b border-gray-200 dark:border-gray-700 md:border-0">
            {researchData.map((project, index) => (
              <motion.li 
                key={project.id} 
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/research/${project.id}`}
                  className={`block py-6 px-0 md:px-6 rounded-none md:rounded-xl shadow-none md:shadow-sm border-b border-zinc-200 dark:border-gray-600 md:border transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg ${index === researchData.length - 1 ? 'border-b-0' : ''} ${project.prominent ? 'bg-orange-50/50 dark:bg-amber-900/20 md:border-orange-200 dark:md:border-amber-800/50 md:shadow-md md:hover:bg-orange-50/70 dark:md:hover:bg-amber-900/30' : 'bg-white dark:bg-[#18202F] md:hover:bg-gray-50 dark:md:hover:bg-gray-700/50'}`}
                >
                  <div className="flex items-start justify-between mb-3 px-4 md:px-0">
                    <div>
                      <h3 className={`text-base md:text-xl font-semibold font-host-grotesk text-zinc-900 dark:text-white mb-1 ${project.prominent ? 'md:text-2xl' : ''}`}>
                        {project.title}
                      </h3>
                      <div className="space-y-1 py-1">
                        <p className={`text-xs md:text-sm text-zinc-700 dark:text-gray-300 ${project.prominent ? 'text-sm md:text-base' : ''}`}>
                          {project.authors.join(', ')}
                          {project.date && (
                            <span className="text-zinc-500 dark:text-zinc-400 ml-1">
                              • {(new Date(project.date).getFullYear())}
                            </span>
                          )}
                        </p>
                      </div>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className={`inline-flex items-center px-2.5 py-1 rounded-md bg-orange-100 dark:bg-amber-900/40 text-orange-800 dark:text-amber-200 text-xs font-medium border border-orange-200 dark:border-amber-800 ${project.prominent ? 'text-sm px-3 py-1.5' : ''}`}
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm md:text-sm text-blue-600 dark:text-blue-400 group px-4 md:px-0">
                    <span className="font-semibold">Learn more</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  )
} 