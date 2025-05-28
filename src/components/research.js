import researchData from '../../data/research.json'

export default function Research() {
  return (
    <section data-aos="fade-up">
      <div className="container mx-auto text-center max-w-2xl xl:max-w-4xl">
        <div className="p-0 md:p-4 px-0 md:px-4 lg:px-6">
          <ol className="space-y-0 md:space-y-4 border-t border-b border-gray-200 dark:border-gray-700 md:border-0">
            {researchData.map((project, index) => (
              <li key={project.id} className="text-left">
                <a
                  href={project.publication}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-white dark:bg-[#18202F] py-6 px-0 md:px-6 rounded-none md:rounded-xl shadow-none md:shadow-sm border-b border-zinc-200 dark:border-gray-600 md:border hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 md:hover:scale-[1.02] md:hover:shadow-lg ${index === researchData.length - 1 ? 'border-b-0' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3 px-4 md:px-0">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white mb-1">
                        {project.title}
                      </h3>
                      <div className="space-y-1 py-1">
                        <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-gray-300">
                          {project.authors.join(', ')}
                        </p>
                        {/* <p className="text-xs md:text-sm text-zinc-500 dark:text-gray-400">
                          {project.institution}
                        </p> */}
                      </div>
                      {project.conference && (
                        <div className="mt-2 mb-1 inline-flex items-center px-2.5 py-1 rounded-md bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 text-xs font-medium border border-orange-200 dark:border-orange-800">
                          {project.conference} • {project.conferenceLocation}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <p className="text-xs md:text-sm text-zinc-600 dark:text-gray-300 leading-relaxed mb-4 px-4 md:px-0">
                    {project.description}
                  </p> */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-blue-600 dark:text-blue-400 group px-4 md:px-0">
                    <span className="group-hover:underline">View Publication</span>
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
} 