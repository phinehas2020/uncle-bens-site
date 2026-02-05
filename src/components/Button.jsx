import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const variantClasses = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  ghost: 'btn btn-ghost',
};

const sizeClasses = {
  sm: 'text-[0.7rem] px-4 py-2.5',
  md: 'text-[0.76rem] px-5 py-3',
  lg: 'text-[0.8rem] px-7 py-3.5',
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
