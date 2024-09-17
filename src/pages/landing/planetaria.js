import React from 'react';
import { motion } from 'framer-motion';
import Download from 'src/components/download';
import CTA from 'src/components/cta';

export default function Landing_Planetaria({ link }) {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center text-center py-5 px-6 pt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="text-xl md:text-2xl max-w-3xl mb-4 font-bold">
          Explore the celestial worlds of the Solar System.
        </p>
        <p className="text-sm md:text-lg max-w-xl mb-8 font-bold text-gray-300">
          Now available for iPhone, iPad, and Apple Vision Pro.
        </p>
        <Download href={link}/>
      </motion.section>

      {/* Offset Image */}
      <motion.img 
        src="/images/planetaria/header.png" 
        alt="Solar System Orbit" 
        className="hidden md:block w-full relative -mt-[25%] z-0" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 1.5 }}
      />
      <motion.img 
        src="/images/planetaria/headercompact.jpeg" 
        alt="Solar System Orbit" 
        className="md:hidden w-full relative -mt-[55%] z-0" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      />

      {/* Welcome Section */}
      <motion.section 
        className="pt-[150px] pb-20 px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/planetaria/symbol.png" alt="Planetaria" className="max-w-[100px] xl:max-w-[200px] mx-auto mb-8" />
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Planetaria</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto font-semibold text-gray-300">
          Planetaria is an interactive to-scale 3D simulator of the Solar System. You’ll see the planets and moons in their current orbits, along with beautiful 3D models of their surfaces. You can move around and explore many different celestial worlds.
        </p>
      </motion.section>

      {/* Features Section */}
      <section className="mx-auto">
        <Feature 
          title="Experience Full Immersion" 
          description="Become surrounded by the Solar System on Apple Vision Pro. And use AR on iPhone and iPad to bring the Solar System to you."
          image="preview1.png"
        />
        <Feature 
          title="Track Orbits in Real-Time" 
          description="The Solar System is constantly in motion. Each object is shown at its live position in its orbit, and it moves at its actual rate."
          image="preview2.png"
        />
        <Feature 
          title="Visit Planets and Moons" 
          description="Visit the Sun, the 8 planets, 5 dwarf planets, and over 20 moons. All objects are represented by beautiful and detailed 3D models."
          image="preview3.png"
        />
        <Feature 
          title="Learn About Other Worlds" 
          description="You'll find fascinating stories and interesting stats about each celestial object that reveal what makes each one unique."
          image="preview4.png"
        />
        <Feature 
          title="Discover Stunning Photos" 
          description="Enjoy these mesmerizing photos of the Sun, the planets, and moons taken by various spacecraft."
          image="preview5.png"
        />
      </section>

      {/* Call to Action Section */}
      <motion.div 
        className="relative flex items-center justify-center bg-cover bg-top pt-25"
        style={{ backgroundImage: 'url(/images/planetaria/preview6.png)' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CTA href={link} text="Explore the Solar System" footnote="Photos and 3D models provided by NASA/JPL."/>
      </motion.div>
    </div>
  );
}

function Feature({ title, description, image }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src={`/images/planetaria/${image}`} 
        alt={title}
        className="w-full mb-12" 
      />
      <h3 className="text-xl md:text-3xl font-bold mb-4 mx-4">{title}</h3>
      <p className="max-w-2xl text-md md:text-xl font-semibold text-gray-300 mx-4">{description}</p>
    </motion.div>
  );
}
