import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  className,
  text,
}) => {
  const sizeClass = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }[size];

  const colorClass = {
    primary: "text-primary",
    secondary: "text-secondary",
    white: "text-white",
  }[color];

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.svg
        className={cn(sizeClass, colorClass)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </motion.svg>
      {text && <p className={cn("mt-2 text-sm", colorClass)}>{text}</p>}
    </div>
  );
};

export const PageLoader: React.FC<{ message?: string }> = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600 font-medium">{message}</p>
      </div>
    </div>
  );
};
