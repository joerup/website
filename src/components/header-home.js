import { useState, useEffect } from 'react';
import ThemeToggle from './theme-toggle';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useActiveSection } from '../context/ActiveSectionContext';
import Head from 'next/head';

export default function HeaderHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const { activeSection } = isHomePage ? useActiveSection() : { activeSection: null };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation with offset
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto'
        });
      }
    }
  }, [isHomePage]);

  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      // First navigate to home page
      router.push('/');
      
      // Create a handler function that we can reference for cleanup
      const handleRouteChange = () => {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            const headerOffset = 60;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);

        // Remove this listener after it's been used
        router.events.off('routeChangeComplete', handleRouteChange);
      };

      // Add the event listener
      router.events.on('routeChangeComplete', handleRouteChange);
      return;
    }

    // If we're already on the home page, just scroll
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 60;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getButtonClasses = (sectionId) => {
    const baseClasses = "font-['Clash_Display'] font-extrabold text-transparent bg-clip-text hover:scale-105 transition-all duration-300 relative";
    let gradientClasses = "";
    
    switch(sectionId) {
      case 'apps':
        gradientClasses = "bg-gradient-to-r from-rose-600 to-pink-500";
        break;
      case 'experience':
        gradientClasses = "bg-gradient-to-r from-lime-500 to-emerald-500";
        break;
      case 'research':
        gradientClasses = "bg-gradient-to-r from-orange-500 to-amber-500";
        break;
      case 'skills':
        gradientClasses = "bg-gradient-to-r from-sky-500 to-blue-600";
        break;
      case 'about':
        gradientClasses = "bg-gradient-to-r from-purple-500 to-pink-500";
        break;
    }

    return `${baseClasses} ${gradientClasses}`;
  };

  const getUnderlineClasses = (sectionId) => {
    const baseClasses = "absolute -bottom-1 left-0 w-full h-0.5 rounded-full transform scale-x-0 transition-transform duration-300";
    let gradientClasses = "";
    
    switch(sectionId) {
      case 'apps':
        gradientClasses = "bg-gradient-to-r from-rose-600 to-pink-500";
        break;
      case 'experience':
        gradientClasses = "bg-gradient-to-r from-lime-500 to-emerald-500";
        break;
      case 'research':
        gradientClasses = "bg-gradient-to-r from-orange-500 to-amber-500";
        break;
      case 'skills':
        gradientClasses = "bg-gradient-to-r from-sky-500 to-blue-600";
        break;
      case 'about':
        gradientClasses = "bg-gradient-to-r from-purple-500 to-pink-500";
        break;
    }

    return `${baseClasses} ${gradientClasses} ${isHomePage && activeSection === sectionId ? 'scale-x-100' : ''}`;
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet"/>
      </Head>
      <header className={`relative md:fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name */}
            <div className="hidden md:block w-40">
              <Link href="/">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                  className="text-xl font-['Clash_Display'] font-extrabold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-200 hover:scale-105 transform whitespace-nowrap relative"
                >
                  Joe Rupertus
                  <div className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 rounded-full transform transition-transform duration-300 ${isHomePage && !activeSection ? 'scale-x-100' : 'scale-x-0'}`}></div>
                </button>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex space-x-8">
                <button
                  onClick={() => scrollToSection('apps')}
                  className={getButtonClasses('apps')}
                >
                  Apps
                  <div className={getUnderlineClasses('apps')} />
                </button>
                <button
                  onClick={() => scrollToSection('research')}
                  className={getButtonClasses('research')}
                >
                  Research
                  <div className={getUnderlineClasses('research')} />
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className={getButtonClasses('experience')}
                >
                  Experience
                  <div className={getUnderlineClasses('experience')} />
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className={getButtonClasses('skills')}
                >
                  Skills
                  <div className={getUnderlineClasses('skills')} />
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={getButtonClasses('about')}
                >
                  About
                  <div className={getUnderlineClasses('about')} />
                </button>
              </div>
            </nav>

            {/* Theme Toggle */}
            <div className="w-full md:w-32 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 