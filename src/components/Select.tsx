import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const selectVariants = cva(
  "block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 text-sm",
        md: "h-11 text-base",
        lg: "h-12 text-lg",
      },
      error: {
        true: "border-red-500 focus:ring-red-500",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  options: { value: string; label: string }[];
  withAnimation?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      size,
      label,
      helperText,
      error,
      options,
      withAnimation = true,
      ...props
    },
    ref
  ) => {
    const selectClasses = cn(selectVariants({ size, error: !!error, className }));

    const selectComponent = (
      <select
        className={selectClasses}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={helperText || error ? `${props.id}-description` : undefined}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
            {selectComponent}
          </motion.div>
        ) : (
          selectComponent
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

Select.displayName = "Select";
