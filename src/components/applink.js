import React from 'react';
import Link from 'next/link';

const AppLink = ({ app }) => {
  return (
    <Link href={`./${app.string}`}>
      <div
        className="rounded-2xl shadow-md cursor-pointer transition transform xl:hover:scale-105"
        style={{ background: `#${app.backgroundColor}` }}
      >
        <div className="mx-auto flex flex-col md:flex-row p-4">
          <div className="flex flex-col justify-center p-4 text-center">
            <img
              className="w-12 h-12 lg:w-16 lg:h-16 mb-4 rounded-lg lg:rounded-xl mx-auto"
              src={`/images/${app.string}/icon.png`}
              alt={`${app.name} Icon`}
            />
            <h2
              className={`text-xl lg:text-2xl font-semibold mb-2 ${
                app.theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              {app.name}
            </h2>
            <p
              className={`text-sm lg:text-md mb-4 ${
                app.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {app.desc}
            </p>
            <p
              className={`text-xs lg:text-sm font-medium text-center ${
                app.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Learn more
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppLink;
