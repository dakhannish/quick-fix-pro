import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export interface Props {
  transparent?: boolean;
  bgColor?: string;
}

export const Navbar: React.FC<Props> = ({ transparent = false, bgColor = "bg-white" }) => {
  const navigate = useNavigate();

  return (
    <motion.nav
      className={`w-full py-4 z-50 ${transparent ? "absolute top-0 left-0" : `${bgColor || "bg-white"} shadow-md`}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold flex items-center" 
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <span className={`${transparent ? "text-white" : "text-primary"}`}>QuickFix</span>
          <span className={`${transparent ? "text-white" : "text-secondary"}`}>Pro</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-6">
          <motion.a 
            href="#services" 
            className={`font-medium ${transparent ? "text-white" : "text-gray-700"} hover:text-primary transition-colors`}
            whileHover={{ y: -2 }}
          >
            Services
          </motion.a>
          <motion.a 
            href="#testimonials" 
            className={`font-medium ${transparent ? "text-white" : "text-gray-700"} hover:text-primary transition-colors`}
            whileHover={{ y: -2 }}
          >
            Testimonials
          </motion.a>
          <motion.a 
            href="#contact" 
            className={`font-medium ${transparent ? "text-white" : "text-gray-700"} hover:text-primary transition-colors`}
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </div>
        
        <motion.button
          className="bg-black text-white px-5 py-2 rounded-full font-medium shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/electrician")}
        >
          Book Now
        </motion.button>
      </div>
    </motion.nav>
  );
};
