import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  withAnimation?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      withAnimation = true,
      ...props
    },
    ref
  ) => {
    const textareaClasses = cn(
      "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
      error && "border-red-500 focus:ring-red-500",
      className
    );

    const textareaComponent = (
      <textarea
        className={textareaClasses}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={helperText || error ? `${props.id}-description` : undefined}
        rows={props.rows || 4}
        {...props}
      />
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
            {textareaComponent}
          </motion.div>
        ) : (
          textareaComponent
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

TextArea.displayName = "TextArea";
