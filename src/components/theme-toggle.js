import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check if user has dark mode preference
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="transition-opacity duration-200 hover:opacity-75 p-3 sm:p-2"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <SunIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      ) : (
        <MoonIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900" />
      )}
    </button>
  );
}

