import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for conditionally joining classNames together
 * @param {...(string|object)} inputs - Class names or conditional objects
 * @returns {string} Merged and deduplicated class string
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
