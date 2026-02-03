import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

/**
 * Primary button component with consistent styling
 */
export function Button({
    children,
    variant = 'primary',
    size = 'default',
    type = 'button',
    className,
    ...props
}) {
    return (
        <button
            type={type}
            className={cn(
                'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-colors duration-150',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
                'disabled:pointer-events-none disabled:opacity-50',
                // Size variants
                size === 'default' && 'px-6 py-3 text-sm',
                size === 'lg' && 'px-8 py-4 text-sm',
                size === 'sm' && 'px-4 py-2 text-xs',
                // Style variants
                variant === 'primary' && 'bg-navy text-bone hover:bg-navy-light',
                variant === 'secondary' && 'border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-bone',
                variant === 'ghost' && 'text-charcoal hover:bg-charcoal/5',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}

/**
 * Link styled as button - uses React Router for internal links, <a> for external
 */
export function ButtonLink({
    children,
    href,
    to,
    variant = 'primary',
    size = 'default',
    className,
    ...props
}) {
    const classes = cn(
        'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
        // Size variants
        size === 'default' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-sm',
        size === 'sm' && 'px-4 py-2 text-xs',
        // Style variants
        variant === 'primary' && 'bg-navy text-bone hover:bg-navy-light',
        variant === 'secondary' && 'border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-bone',
        variant === 'ghost' && 'text-charcoal hover:bg-charcoal/5',
        className
    );

    // Use React Router Link for internal navigation
    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    // Use anchor for external links or href starting with tel:/mailto:
    return (
        <a href={href} className={classes} {...props}>
            {children}
        </a>
    );
}
