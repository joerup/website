import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout-home';
import { getSortedAppsData } from '/lib/apps';
import Socials from '../components/socials';
import Projects from '../components/projects';
import Experience from '../components/experience';
import Research from '../components/research';
import Skills from '../components/skills';
import Apps from '../components/apps';
import About from '../components/about';
import { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../context/ActiveSectionContext';
import { ActiveSectionProvider } from '../context/ActiveSectionContext';
import Image from 'next/image';

export async function getStaticProps() {
  const apps = getSortedAppsData();
  return {
    props: {
      apps,
    },
  };
}

function HomeContent({ apps }) {
  const sections = useRef([]);
  const { setActiveSection, activeSection } = useActiveSection();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sectionElements = sections.current.filter(Boolean);
      
      // Only proceed if we have sections
      if (sectionElements.length === 0) return;
      
      const viewportCenter = window.innerHeight / 2;
      
      // Find the section whose center is closest to the viewport center
      const mostCenteredSection = sectionElements.reduce((best, current) => {
        const rect = current.getBoundingClientRect();
        const currentCenter = rect.top + (rect.height / 2);
        const currentDistance = Math.abs(currentCenter - viewportCenter);
        
        const bestRect = best.getBoundingClientRect();
        const bestCenter = bestRect.top + (bestRect.height / 2);
        const bestDistance = Math.abs(bestCenter - viewportCenter);
        
        return currentDistance < bestDistance ? current : best;
      });

      // Add fade-in animation to all sections
      sectionElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.classList.add('animate-fade-in');
          section.classList.remove('opacity-0');
        }
      });

      // Get the hero section's position
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const heroCenter = heroRect.top + (heroRect.height / 2);
        const heroDistance = Math.abs(heroCenter - viewportCenter);

        // If hero section is more centered than any other section, don't select any section
        if (heroDistance < Math.abs(mostCenteredSection.getBoundingClientRect().top + (mostCenteredSection.getBoundingClientRect().height / 2) - viewportCenter)) {
          setActiveSection(null);
          return;
        }
      }

      // Set the active section
      setActiveSection(mostCenteredSection.id);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const getUnderlineClasses = (sectionId) => {
    const baseClasses = "w-16 md:w-20 lg:w-24 h-0.5 md:h-1 mt-2 rounded-full transition-all duration-300 transform scale-x-0";
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

    return `${baseClasses} ${gradientClasses} ${activeSection === sectionId ? 'scale-x-100' : ''}`;
  };

  const getTitleClasses = (sectionId) => {
    const baseClasses = "text-2xl md:text-3xl lg:text-4xl font-extrabold text-center font-['Clash_Display'] tracking-tight transition-all duration-300 md:pt-12";
    const activeClasses = "scale-110 brightness-110";
    let gradientClasses = "";
    
    switch(sectionId) {
      case 'apps':
        gradientClasses = "bg-gradient-to-r from-rose-600 to-pink-500 text-transparent bg-clip-text";
        break;
      case 'experience':
        gradientClasses = "bg-gradient-to-r from-lime-500 to-emerald-500 text-transparent bg-clip-text";
        break;
      case 'research':
        gradientClasses = "bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text";
        break;
      case 'skills':
        gradientClasses = "bg-gradient-to-r from-sky-500 to-blue-600 text-transparent bg-clip-text";
        break;
      case 'about':
        gradientClasses = "bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text";
        break;
    }

    return `${baseClasses} ${gradientClasses} ${activeSection === sectionId ? activeClasses : ''}`;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 60; // Height of the header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout home apps={apps}>
      <Head>
        <title>{siteTitle}</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet" />
        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          /* Prevent horizontal scrollbar flicker */
          html, body {
            overflow-x: hidden;
          }
        `}</style>
      </Head>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-b from-[#DBFFF7] to-white dark:bg-gradient-to-b dark:from-[#0A2F2D] dark:to-gray-900 pt-4 md:pt-16 lg:pt-24 pb-8 px-4 -mt-20 pt-20">
        <div className="container mx-auto text-center pt-16 md:pt-32">
          <div className="flex flex-col items-center space-y-4 lg:space-y-6">
            <img
              src="/images/Profile.png"
              alt="Profile"
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full shadow-2xl transform transition-transform duration-300 md:hover:scale-110"
            />
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-['Clash_Display'] font-extrabold text-gray-900 dark:text-white tracking-tight transition-transform duration-300 md:hover:scale-105">
              Joe Rupertus
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              I am an undergraduate student at Princeton and an indie developer interested in human-computer interaction. I like to use tech
              to create engaging, interactive experiences that people enjoy using. 
            </p>
            <div className="pt-2">
              <Socials/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16 pt-4 md:pt-8 pb-0 md:pb-8 w-full max-w-5xl">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#40E0D0]/5 to-[#20B2AA]/5 dark:from-[#40E0D0]/8 dark:to-[#20B2AA]/8 p-4 md:p-8 transition-all duration-300 md:hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/3 to-[#20B2AA]/3 dark:from-[#40E0D0]/5 dark:to-[#20B2AA]/5 backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center mb-2 md:mb-4">
                    <span className="text-2xl md:text-3xl mb-2 md:mb-3">🎓</span>
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">CS @ Princeton</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-center">B.S.E. in Computer Science, Minor in Robotics (Class of 2026)</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#40E0D0]/5 to-[#20B2AA]/5 dark:from-[#40E0D0]/8 dark:to-[#20B2AA]/8 p-4 md:p-8 transition-all duration-300 md:hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/3 to-[#20B2AA]/3 dark:from-[#40E0D0]/5 dark:to-[#20B2AA]/5 backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center mb-2 md:mb-4">
                    <span className="text-2xl md:text-3xl mb-2 md:mb-3">📱</span>
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">Indie App Developer</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-center">Published 4 apps on the App Store, Swift Student Challenge Winner 2021</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#40E0D0]/5 to-[#20B2AA]/5 dark:from-[#40E0D0]/8 dark:to-[#20B2AA]/8 p-4 md:p-8 transition-all duration-300 md:hover:scale-[1.02] border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#40E0D0]/3 to-[#20B2AA]/3 dark:from-[#40E0D0]/5 dark:to-[#20B2AA]/5 backdrop-blur-sm"></div>
                <div className="relative">
                  <div className="flex flex-col items-center text-center mb-2 md:mb-4">
                    <span className="text-2xl md:text-3xl mb-2 md:mb-3">🤖</span>
                    <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white">HCI Researcher</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-center">Exploring Human-AI collaboration, presented at CHI 2025 LBW in Yokohama, Japan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Portfolio Section */}
      <section
        id="apps"
        ref={el => sections.current[0] = el}
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-gray-50 dark:md:bg-gray-800 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col items-center mb-8 transition-all duration-300 cursor-pointer md:hover:scale-[1.05]"
            onClick={() => scrollToSection('apps')}
          >
            <h2 className={getTitleClasses('apps')}>
              Apps
            </h2>
            <div className={getUnderlineClasses('apps')} />
          </div>
          <Apps apps={apps} />
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        ref={el => sections.current[1] = el}
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-white dark:md:bg-gray-900 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col items-center mb-8 transition-all duration-300 cursor-pointer md:hover:scale-[1.05]"
            onClick={() => scrollToSection('research')}
          >
            <h2 className={getTitleClasses('research')}>
              Research
            </h2>
            <div className={getUnderlineClasses('research')} />
          </div>
          <Research />
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={el => sections.current[2] = el}
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-gray-50 dark:md:bg-gray-800 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col items-center mb-8 transition-all duration-300 cursor-pointer md:hover:scale-[1.05]"
            onClick={() => scrollToSection('experience')}
          >
            <h2 className={getTitleClasses('experience')}>
              Experience
            </h2>
            <div className={getUnderlineClasses('experience')} />
          </div>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={el => sections.current[3] = el}
        className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 md:bg-none md:bg-white dark:md:bg-gray-900 pt-12 md:pt-0 pb-0 md:pb-16"
      >
        <div className="container mx-auto max-w-4xl">
          <div 
            className="flex flex-col items-center mb-8 transition-all duration-300 cursor-pointer md:hover:scale-[1.05]"
            onClick={() => scrollToSection('skills')}
          >
            <h2 className={getTitleClasses('skills')}>
              Skills
            </h2>
            <div className={getUnderlineClasses('skills')} />
          </div>
          <div className="space-y-4">
            <Skills />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={el => sections.current[4] = el} id="about" className="pt-12 pb-16 md:pt-0 pb-0 md:pb-16 bg-gray-50 dark:bg-gray-800 opacity-0">
        <div>
          <div 
            className="flex flex-col items-center mb-8 transition-all duration-300 cursor-pointer md:hover:scale-[1.05]"
            onClick={() => scrollToSection('about')}
          >
            <h2 className={getTitleClasses('about')}>
              About
            </h2>
            <div className={getUnderlineClasses('about')} />
          </div>
          <About onPhotoClick={handlePhotoClick} />
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <div 
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="relative w-[90vw] h-[80vh] max-w-screen-lg max-h-screen-lg">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-center text-white text-sm md:text-base">
              {selectedPhoto.alt}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default function Home(props) {
  return (
    <ActiveSectionProvider>
      <HomeContent {...props} />
    </ActiveSectionProvider>
  );
}
