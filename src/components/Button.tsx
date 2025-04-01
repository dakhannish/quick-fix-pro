import React from "react";
import { motion } from "framer-motion";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-600 focus:ring-primary-500",
        secondary: "bg-secondary text-white hover:bg-secondary-600 focus:ring-secondary-500",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
        link: "bg-transparent underline-offset-4 hover:underline text-primary hover:text-primary-600 p-0 h-auto",
      },
      size: {
        sm: "text-sm h-9 px-4 py-2",
        md: "text-base h-11 px-6 py-3",
        lg: "text-lg h-12 px-8 py-3",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  withAnimation?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      children,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      withAnimation = true,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
          </svg>
        )}
        {isLoading && loadingText ? loadingText : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </>
    );

    const buttonClasses = cn(buttonVariants({ variant, size, fullWidth, className }));

    if (withAnimation) {
      return (
        <motion.button
          className={buttonClasses}
          ref={ref}
          disabled={isLoading || props.disabled}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";
