import React from 'react';
import { motion } from 'framer-motion';

const ShootingStars = () => {
  const stars = Array.from({ length: 100 });

  const generateRandomDelay = () => Math.random() * 5;

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {stars.map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full shadow-lg"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() * 3}px rgba(255, 255, 255, 0.6)`,
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: `${Math.random() * 100 - 50}vh`,
              x: `${Math.random() > 0.5 ? '-' : ''}${Math.random() * 100 - 50}vw`,
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                delay: generateRandomDelay(),
              },
            }}
          />
        ))}
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-25 blur-2xl" /> */}
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default ShootingStars;

