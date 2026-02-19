import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const variantClasses = {
  primary: 'bg-slate-900 text-white border border-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-slate-800',
  secondary:
    'bg-white text-slate-900 border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-slate-300',
  ghost: 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-100',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl font-medium tracking-wide',
  lg: 'px-8 py-4 text-base rounded-2xl font-bold tracking-wide',
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
