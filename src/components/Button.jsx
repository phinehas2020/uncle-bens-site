import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const variantClasses = {
  primary: 'bg-slate-900 text-white border border-slate-900 hover:bg-slate-800',
  secondary:
    'bg-white text-slate-900 border border-slate-300 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-700 border border-transparent hover:text-slate-900 hover:bg-slate-100',
};

const sizeClasses = {
  sm: 'px-3 py-2 text-sm rounded-md',
  md: 'px-4 py-2.5 text-sm rounded-lg',
  lg: 'px-5 py-3 text-sm rounded-lg font-semibold',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
