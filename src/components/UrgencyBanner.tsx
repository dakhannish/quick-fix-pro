import React from "react";
import { motion } from "framer-motion";

export const UrgencyBanner: React.FC = () => {
  return (
    <motion.div 
      className="bg-secondary-50 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
          <motion.div
            className="flex items-center mb-2 sm:mb-0"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <svg 
              className="w-5 h-5 text-secondary mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" 
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-bold text-secondary">Limited Time Offer</span>
          </motion.div>
          <p className="text-gray-700 ml-0 sm:ml-2">
            <span className="font-semibold">20% OFF</span> on all services today! <span className="font-semibold">Limited slots available!</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
