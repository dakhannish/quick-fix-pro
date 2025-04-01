import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium",
  {
    variants: {
      variant: {
        primary: "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        danger: "bg-red-100 text-red-800",
        info: "bg-blue-100 text-blue-800",
        gray: "bg-gray-100 text-gray-800",
      },
      withIcon: {
        true: "pl-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  icon,
  children,
  animated = false,
  ...props
}) => {
  const badgeContent = (
    <>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </>
  );

  const badgeClasses = cn(badgeVariants({ variant, withIcon: !!icon, className }));

  if (animated) {
    return (
      <motion.div
        className={badgeClasses}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        {...props}
      >
        {badgeContent}
      </motion.div>
    );
  }

  return (
    <div className={badgeClasses} {...props}>
      {badgeContent}
    </div>
  );
};

// Trust badge variant
export interface TrustBadgeProps extends Omit<BadgeProps, 'variant'> {
  label: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ 
  label, 
  icon, 
  animated = true,
  className,
  ...props 
}) => {
  return (
    <Badge
      variant="success"
      icon={icon || (
        <svg 
          className="w-4 h-4" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
            clipRule="evenodd"
          ></path>
        </svg>
      )}
      animated={animated}
      className={cn("font-semibold", className)}
      {...props}
    >
      {label}
    </Badge>
  );
};
