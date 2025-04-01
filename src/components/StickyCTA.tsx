import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const StickyCTA: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // Show the sticky CTA after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.button
            onClick={() => navigate("/electrician")}
            className="bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            Book an Electrician
          </motion.button>

          <motion.button
            onClick={() => navigate("/plumber")}
            className="bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              ></path>
            </svg>
            Book a Plumber
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
