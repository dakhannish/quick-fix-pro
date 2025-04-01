import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button.tsx";
import { cn } from "../utils/cn.ts";

export interface ServiceCardProps {
  id: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
  items?: string[];
  buttonText: string;
  onClick?: () => void;
  color?: "primary" | "secondary";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  items,
  buttonText,
  onClick,
  color = "primary",
  className,
}) => {
  return (
    <motion.div
      className={cn(
        `rounded-lg shadow-lg overflow-hidden border-t-4 ${color === "primary" ? "border-primary" : "border-secondary"}`,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="bg-white p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-2xl font-bold ml-4">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        {items && items.length > 0 && (
          <ul className="mb-6 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center">
                <svg
                  className={`w-5 h-5 ${color === "primary" ? "text-primary" : "text-secondary"} mr-2`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <Button
          variant={color}
          fullWidth={true}
          onClick={onClick}
          withAnimation={true}
        >
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};
