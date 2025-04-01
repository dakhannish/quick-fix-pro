import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  withAnimation?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      withAnimation = true,
      ...props
    },
    ref
  ) => {
    const inputClasses = cn(
      "flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      error && "border-red-500 focus:ring-red-500",
      className
    );

    const inputComponent = (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={helperText || error ? `${props.id}-description` : undefined}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    );

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        {withAnimation ? (
          <motion.div
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {inputComponent}
          </motion.div>
        ) : (
          inputComponent
        )}
        {(helperText || error) && (
          <p
            id={`${props.id}-description`}
            className={cn(
              "text-sm",
              error ? "text-red-500" : "text-gray-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
