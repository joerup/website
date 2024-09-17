import { useState } from 'react';
import Link from 'next/link';

export default function Header({ app }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: `/${app.string}/about`, text: 'About' },
    { href: `/${app.string}/updates`, text: 'Updates' },
    { href: `/${app.string}/support`, text: 'Support' },
  ];

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-opacity-85 ${app.theme === 'dark' ? 'bg-black' : 'bg-white'} flex justify-between items-center px-3 py-3`}
        style={{
          backgroundColor: `rgba(${parseInt(app.backgroundColor.slice(0, 2), 16)}, ${parseInt(app.backgroundColor.slice(2, 4), 16)}, ${parseInt(app.backgroundColor.slice(4, 6), 16)}, 0.85)`,
        }}
      >
        <Link href={`/${app.string}/`}>
          <div className="flex items-center cursor-pointer">
            <img
              className="h-8 w-8 mr-2 rounded-lg"
              src={`/images/${app.string}/icon.png`}
              alt={`${app.name} Logo`}
            />
            <h1
              className={`text-lg font-bold ${app.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
            >
              {app.name}
            </h1>
          </div>
        </Link>

        <div className="flex md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className={`w-6 h-6 ${app.theme === 'dark' ? 'text-white' : 'text-black'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-5 w-full md:w-auto md:flex-grow md:justify-end items-center">
          {links.map(({ href, text }) => (
            <Link key={href} href={href}>
              <p
                className={`font-bold cursor-pointer ${app.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
              >
                {text}
              </p>
            </Link>
          ))}
          <Link key={app.link} href={app.link}>
            <p
              className="font-bold cursor-pointer px-3 py-1 rounded-lg text-white"
              style={{
                backgroundColor: `#${app.color}`,
                lineHeight: '1.5rem',
              }}
            >
              Download
            </p>
            <style jsx>{`
              p:hover {
                background-color: #${app.color};
                opacity: 0.9;
              }
            `}</style>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="flex flex-col space-y-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href={`/${app.string}`}>
              <p
                onClick={() => setMenuOpen(false)}
                className={`font-bold text-2xl cursor-pointer ${
                  app.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-white'
                }`}
              >
                Home
              </p>
            </Link>

            {links.map(({ href, text }) => (
              <Link key={href} href={href}>
                <p
                  onClick={() => setMenuOpen(false)}
                  className={`font-bold text-2xl cursor-pointer ${
                    app.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-white'
                  }`}
                >
                  {text}
                </p>
              </Link>
            ))}

            <Link href={app.link}>
              <p
                onClick={() => setMenuOpen(false)}
                className={`font-bold text-2xl cursor-pointer ${
                  app.theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-white'
                }`}
              >
                Download
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
