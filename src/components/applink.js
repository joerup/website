import React from 'react';
import Link from 'next/link';

export default function AppLink({ app }) {
  return (
    <Link href={`./${app.string}`}>
      <div
        className="cursor-pointer transition-all duration-300 sm:rounded-2xl sm:hover:scale-[1.02] sm:hover:shadow-lg bg-white"
        style={{ 
          background: `linear-gradient(to bottom right, #${app.color}33, #${app.color}22)`
        }}
      >
        <div className="mx-auto flex flex-col p-6">
          <div className="flex flex-col justify-center text-left">
            <div className="flex items-center gap-4 mb-4">
              <img
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl shadow-md"
                src={`/images/${app.string}/icon.png`}
                alt={`${app.name} Icon`}
              />
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  {app.name}
                </h2>
                <div className="flex gap-2 text-xs text-gray-500 mt-0.5">
                  <span>{app.platforms.join(', ')}</span>
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4">
              {app.desc}
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
