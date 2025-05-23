'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const taglines = [
  "Optimizing website performance...",
  "Loading your digital experience...",
  "Initializing data streams...",
  "Compiling awesome features...",
  "Preparing portfolio..."
];

const Loader = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <FaTerminal className="w-16 h-16 text-blue-400 mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-mono"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Praharshitha Piduru
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-400 text-lg mb-4"
          >
            Data Analyst & Developer
          </motion.p>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-blue-400 text-sm mb-4"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="h-1 bg-blue-400 mt-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader; 