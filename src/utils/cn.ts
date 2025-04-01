/**
 * Utility function to merge class names with tailwind-merge
 */
export function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ").trim();
  }
  