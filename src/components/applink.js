import React, { useState } from 'react';
import Link from 'next/link';

export default function AppLink({ app }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link href={`./${app.string}`}>
      <div
        className="cursor-pointer transition-all duration-300 sm:rounded-2xl md:hover:scale-[1.02] md:hover:shadow-lg bg-white border-0 md:border-2"
        style={{ 
          background: `linear-gradient(to bottom right, #${app.color}${isActive ? '66' : '33'}, #${app.color}${isActive ? '44' : '22'})`,
          borderColor: `#${app.color}22`
        }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div className="mx-auto flex flex-col py-6 md:py-6 px-4 md:px-6">
          <div className="flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 md:gap-4 mb-4">
              <img
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg md:rounded-xl shadow-md"
                src={`/images/${app.string}/icon.png`}
                alt={`${app.name} Icon`}
              />
              <div>
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                  {app.name}
                </h2>
                <div className="flex gap-2 text-[11px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  <span>{app.platforms.join(', ')}</span>
                </div>
              </div>
            </div>
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4">
              {app.desc}
            </p>
            <div className={`flex items-center ${app.comingsoon ? 'justify-center' : ''} text-sm font-medium text-blue-600 dark:text-blue-400`}>
              {app.comingsoon ? (
                <span className="bg-red-400 text-white px-2 rounded-full">COMING SOON</span>
              ) : (
                <React.Fragment>
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
