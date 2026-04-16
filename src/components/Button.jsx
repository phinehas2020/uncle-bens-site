import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const variantClasses = {
  primary: 'btn btn-primary',
  brand: 'btn btn-brand',
  ghost: 'btn btn-ghost',
  secondary: 'btn btn-ghost',
};

const sizeClasses = {
  sm: 'btn-sm',
  md: '',
  lg: 'text-base px-7 py-4',
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
      className={cn(variantClasses[variant], sizeClasses[size], className)}
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
  const classes = cn(variantClasses[variant], sizeClasses[size], className);

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
