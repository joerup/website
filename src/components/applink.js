import React from 'react';
import Link from 'next/link';

const AppLink = ({ app }) => {
  return (
    <Link href={`./${app.string}`}>
      <div
        className="shadow-md cursor-pointer transition transform sm:rounded-2xl sm:hover:scale-105"
        style={{ background: `#${app.color}66` }} // Adding 99 to the hex color to set opacity to 0.6
      >
        <div className="mx-auto flex flex-col md:flex-row p-4">
          <div className="flex flex-col justify-center p-4 text-center">
            <img
              className="w-12 h-12 lg:w-16 lg:h-16 mb-4 rounded-lg lg:rounded-xl mx-auto"
              src={`/images/${app.string}/icon.png`}
              alt={`${app.name} Icon`}
            />
            <h2
              className={`text-xl lg:text-2xl font-semibold mb-2 text-gray-800`}
            >
              {app.name}
            </h2>
            <p
              className={`text-sm lg:text-md mb-4 text-gray-600`}
            >
              {app.desc}
            </p>
            <p
              className={`text-xs lg:text-sm font-medium text-center text-blue-600`}
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
