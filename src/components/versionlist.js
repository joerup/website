import React from 'react';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const VersionList = ({ app, versions }) => {
  return (
    versions && versions.length > 0 ? (
      <ul className="space-y-4">
        {versions.map((version, index) => (
          <li
            key={index}
            className={`p-4 rounded-lg ${
              app.theme === 'dark' ? 'bg-gray-700 bg-opacity-50' : 'bg-white bg-opacity-50'
            }`}
          >
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4 pr-1`}>
              <div className="flex items-center space-x-2 flex-1">
                <img
                  src={`/images/${app.string}/icon.png`}
                  alt="App Icon"
                  className="w-6 h-6 rounded-md object-cover"
                />
                <h3
                  className={`text-xl font-bold ${
                    app.theme === 'dark' ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {version.number}
                </h3>
              </div>
              <p
                className={`text-md font-bold ${
                  app.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {formatDate(version.date)}
              </p>
            </div>
            {version.description !== "" ? <p
              className={`text-sm font-bold leading-relaxed mt-2 ${
                app.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              {version.description}
            </p> : <></>}
          </li>
        ))}
      </ul>
    ) : (
      <p
        className={`text-lg font-medium ${
          app.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        No updates available.
      </p>
    )
  );
};

export default VersionList;
