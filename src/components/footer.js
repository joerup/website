import Link from 'next/link';

export default function Footer({ apps, app }) {
  return (
    <div className="relative">
      <footer className="relative flex flex-col lg:flex-row items-center px-4 py-4 bg-gray-700 bg-opacity-0.5">

        {/* Profile Image */}
        <div className="flex-shrink-0 z-10 mb-4 lg:mb-0">
          <Link href={'/'}>
            <img
              className={`h-12 w-12 rounded-full border-4 border-gray-600`}
              src="/images/Profile.png"
              alt="Profile Image"
            />
          </Link>
        </div>

        {/* Centered Text */}
          <div className="relative lg:absolute inset-x-0 text-center z-0">
            <div className="inline-block">
              <p className={`text-xs md:text-sm text-gray-400`}>
                Copyright © 2024 Joseph Rupertus
              </p>
              {app && (
                <Link href={`/${app.string}/privacy`}>
            <p className={`text-xs md:text-sm text-gray-400`}>
                <u>Privacy Policy</u>
            </p>
                </Link>
              )}
            </div>
          </div>

          {/* App Icons */}
        <div className="flex space-x-3 mt-4 lg:mt-0 lg:ml-auto z-10">
          {apps.map((app) => (
            <Link key={app.string} href={`/${app.string}/`}>
              <img
                className="h-10 w-10 rounded-lg"
                src={`/images/${app.string}/icon.png`}
                alt={`${app.name} Icon`}
              />
            </Link>
          ))}
        </div>

      </footer>
    </div>
  );
}
