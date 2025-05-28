export default function Socials({ compact = false }) {
  return (
    <div className={`flex items-center ${compact ? 'space-x-3' : 'space-x-4 md:space-x-6'}`}>
      <a href="mailto:joerup@princeton.edu" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <svg viewBox="0 0 24 24" className={`${compact ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} fill-current ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      </a>
      <a href="https://github.com/joerup" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <svg viewBox="0 0 24 24" className={`${compact ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} fill-current ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/joerup/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <svg viewBox="0 0 24 24" className={`${compact ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} fill-current ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href="https://www.youtube.com/@joerup" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" className={`${compact ? 'w-6 h-6' : 'w-6 h-6 md:w-7 md:h-7'} ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zM10 9l5 3l-5 3z"/>
        </svg>
      </a>
      <a href="https://twitter.com/joerupertus" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <svg viewBox="0 0 24 24" className={`${compact ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} fill-current ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/joerupertus/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
        <svg viewBox="0 0 24 24" className={`${compact ? 'w-5 h-5' : 'w-5 h-5 md:w-6 md:h-6'} fill-current ${compact ? 'text-gray-500' : 'text-gray-600'} dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors`}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  );
}