import React from 'react';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const VersionCard = ({ app, version, theme }) => {
  // Helper function to generate theme-specific classes
  const getThemeClass = (baseClass, lightClass, darkClass) => {
    if (theme === 'dark') return `${baseClass} ${darkClass}`;
    if (theme === 'light') return `${baseClass} ${lightClass}`;
    return `${baseClass} ${lightClass} dark:${darkClass}`;
  };

  const wrapperClasses = getThemeClass(
    'rounded-lg',
    'bg-gray-50',
    'bg-gray-800'
  );

  const cardClasses = getThemeClass(
    'p-3 rounded-lg w-full h-full',
    'text-gray-800',
    'text-white'
  );

  const dateClasses = getThemeClass(
    'text-sm font-bold whitespace-nowrap',
    'text-gray-600',
    'text-gray-300'
  );

  const descriptionClasses = getThemeClass(
    'text-sm font-bold',
    'text-gray-700',
    'text-gray-200'
  );

  const versionClasses = getThemeClass(
    'font-bold font-mono',
    'text-gray-800',
    'text-white'
  );

  return (
    <div className={wrapperClasses}>
      <div 
        className={cardClasses}
        style={{ 
          border: `1px solid #${app.color}11`,
          background: theme === 'dark' 
            ? `linear-gradient(to bottom right, #${app.color}08, #${app.color}04)`
            : `linear-gradient(to bottom right, #${app.color}11, #${app.color}06)`
        }}
      >
        {/* Small screens: Icon, version number, date aligned with date to the right */}
        <div className="flex items-center gap-2 sm:hidden">
          <div className="flex items-center gap-2 flex-grow">
            <img
              src={`/images/${app.string}/icon.png`}
              alt="App Icon"
              className="w-5 h-5 rounded-md object-cover"
            />
            <h3 className={`text-md ${versionClasses}`}>{version.number}</h3>
          </div>
          <p className={dateClasses}>{formatDate(version.date)}</p>
        </div>

        {/* Description below for small screens */}
        {version.description !== "" && (
          <p className={`mt-2 text-xs font-bold sm:hidden ${descriptionClasses}`}>
            {version.description}
          </p>
        )}

        {/* Large screens: Icon, version number, description, date aligned horizontally */}
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <img
            src={`/images/${app.string}/icon.png`}
            alt="App Icon"
            className="w-6 h-6 rounded-md object-cover"
          />
          <h3 className={`text-lg ${versionClasses}`}>{version.number}</h3>
          {version.description !== "" && (
            <p className={descriptionClasses}>{version.description}</p>
          )}
          <p className={`ml-auto text-md font-bold ${dateClasses}`}>{formatDate(version.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default VersionCard;

