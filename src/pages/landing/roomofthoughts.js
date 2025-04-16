import React from 'react';
import { motion } from 'framer-motion';

export default function Landing_RoomOfThoughts({ link }) {
  return (
    // change w-full → w-screen (the full viewport width)
    <div className="min-h-screen w-screen bg-[#E5CFE5] overflow-x-hidden">
      
      {/* center your content inside a max-width container */}
      <div className="max-w-3xl mx-auto">
        <motion.section
          className="relative z-10 flex flex-col items-center justify-center text-center py-5 px-6 pt-10 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img 
            src="/images/roomofthoughts/logo.svg" 
            alt="Room of Thoughts Logo" 
            className="max-w-[600px] w-full h-auto mb-6 p-10" 
          />
          <p className="text-xl md:text-2xl mb-4 font-bold">
            A spatial AI assistant.
          </p>
          <p className="text-sm md:text-lg mb-8 font-bold text-gray-600">
            Coming soon to Apple Vision Pro.
          </p>
        </motion.section>
      </div>
    </div>
  );
}

