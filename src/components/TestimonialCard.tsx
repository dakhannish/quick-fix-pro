import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface TestimonialCardProps {
  id: number | string;
  name: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  rating,
  image,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 border border-gray-100",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>

        <div className="flex-grow">
          <p className="text-gray-700 mb-6 italic">"{content}"</p>
        </div>

        <div className="flex items-center mt-4">
          {image && (
            <div className="flex-shrink-0 mr-3">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={image}
                alt={name}
              />
            </div>
          )}
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            {role && <p className="text-gray-500 text-sm">{role}</p>}\n          </div>
        </div>
      </div>
    </motion.div>
  );
};
