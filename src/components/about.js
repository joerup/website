import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About({ onPhotoClick }) {
  const photos = [
    {
      src: "/images/about/philly.jpeg",
      alt: "Philly from Art Museum steps",
    },
    {
      src: "/images/about/lakecarnegie.jpeg",
      alt: "Lake Carnegie sunset",
    },
    {
      src: "/images/about/nassau.jpeg",
      alt: "Nassau Hall, Princeton",
    },
    {
      src: "/images/about/shinjuku.jpeg",
      alt: "Shinjuku, Tokyo",
    },
    {
      src: "/images/about/trolley.jpeg",
      alt: "San Francisco cable car",
    },
     {
      src: "/images/about/apple.jpeg",
      alt: "Apple Park",
    },
    {
      src: "/images/about/citifield.jpeg",
      alt: "Sunset over Citi Field",
    },
    {
      src: "/images/about/spiafountain.jpeg",
      alt: "SPIA fountain",
    },
    {
      src: "/images/about/sunrise.jpeg",
      alt: "Sunrise over Poe Field",
    },
    {
      src: "/images/about/timessquare.jpeg",
      alt: "Times Square",
    },
    {
      src: "/images/about/epcot.jpeg",
      alt: "Epcot Ball",
    },
    {
      src: "/images/about/lakecarnegie2.jpeg",
      alt: "Lake Carnegie",
    },
    {
      src: "/images/about/jerseycity.jpeg",
      alt: "Hudson River sunset",
    },
    {
      src: "/images/about/whigclio.jpeg",
      alt: "Whig-Clio",
    },
    {
      src: "/images/about/wtc.jpeg",
      alt: "World Trade Center",
    },
  ];

  // Duplicate photos for seamless loop
  const doubledPhotos = [...photos, ...photos];

  const introText = `Hello!
My name is Joe.
    `;

  const funFacts = [
    {
      emoji: "🏡",
      text: "I was born and raised in South Jersey in the Philly suburbs."
    },
    {
      emoji: "🏃",
      text: "I really enjoy running and being outside and exploring new places."
    },
    {
      emoji: "🎥",
      text: "I love photography and also making videos. I even have a few vlogs on YouTube."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Personal Introduction */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          <Image
            src="/images/about/aboutpic.JPG"
            alt="A portrait of me"
            width={200}
            height={200}
            className="rounded-xl object-cover shadow-md"
          />
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed px-4">
            {introText}
          </p>
        </div>
      </motion.div> */}

      {/* Fun Facts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-0 md:mb-16 max-w-full md:max-w-3xl mx-auto p-[2px]"
      >
        <div className="py-6 px-4 md:p-6 rounded-none md:rounded-2xl bg-white/50 dark:bg-[#18202F]/50 border-t border-b md:border border-gray-200 dark:border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01]">
          <div className="space-y-3 md:space-y-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl flex-none">{fact.emoji}</span>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1 font-semibold">
                  {fact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Photo Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="pt-12 md:pt-0 pb-0 md:pb-8 w-screen relative left-1/2 right-1/2 -mx-[50vw]"
      >
        <div className="w-full inline-flex flex-nowrap overflow-hidden will-change-transform">
          <div className="flex animate-infinite-scroll gap-4 md:gap-6">
            {doubledPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl group aspect-[4/3] flex-none w-56 md:w-80 cursor-pointer"
                onClick={() => onPhotoClick(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Add CSS animation for infinite scroll */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Hide scrollbar */
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
} 