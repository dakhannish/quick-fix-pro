import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, ButtonProps } from "./Button.tsx";

export interface StickyCallToActionProps extends Omit<ButtonProps, "ref"> {
  show?: boolean;
  message?: string;
  position?: "bottom" | "bottom-right";
  zIndex?: number;
  showAfterScroll?: number; // Show after scrolling this many pixels
}

export const StickyCallToAction: React.FC<StickyCallToActionProps> = ({
  show = true,
  message,
  position = "bottom",
  zIndex = 40,
  showAfterScroll = 0,
  ...buttonProps
}) => {
  const [isVisible, setIsVisible] = React.useState(showAfterScroll === 0);
  
  React.useEffect(() => {
    if (!show) return;
    
    if (showAfterScroll > 0) {
      const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollY > showAfterScroll);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [show, showAfterScroll]);

  const positionClasses = {
    "bottom": "bottom-4 left-1/2 transform -translate-x-1/2",
    "bottom-right": "bottom-4 right-4"
  }[position];

  return (
    <AnimatePresence>
      {show && isVisible && (
        <motion.div
          className={`fixed ${positionClasses} z-${zIndex}`}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="shadow-lg rounded-full">
            {message && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded whitespace-nowrap">
                {message}
              </div>
            )}
            <Button
              size="lg"
              variant="primary"
              withAnimation={true}
              className="shadow-xl"
              {...buttonProps}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
