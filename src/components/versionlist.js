import React from 'react';
import VersionCard from './versioncard';

const VersionList = ({ app, versions }) => {
  return (
    versions && versions.length > 0 ? (
      <ul className="space-y-4">
        {versions.map((version, index) => (
          <li key={index}>
            <VersionCard app={app} version={version} theme={app.theme} />
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
