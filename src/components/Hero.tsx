import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.6)"
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center text-white">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={textVariants}
        >
          Affordable, Reliable & Quick Service
          <br />
          <motion.span 
            className="text-secondary"  
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            for Your Home Repairs!
          </motion.span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Professional plumbers and electricians ready to solve your home repair needs 24/7.
          Expert solutions with upfront pricing and guaranteed satisfaction.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          <motion.button
            onClick={() => navigate("/electrician")}
            className="bg-black hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg min-w-[200px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book an Electrician
          </motion.button>

          <motion.button
            onClick={() => navigate("/plumber")}
            className="bg-black hover:bg-secondary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg min-w-[200px]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Plumber
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </div>
  );
};
