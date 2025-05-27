
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  to, 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-inter font-medium text-base rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg";
  
  const variants = {
    primary: "bg-soft-beige text-dark-blue hover:bg-light-beige",
    secondary: "bg-dark-blue text-soft-beige hover:bg-muted-blue border border-soft-beige/20"
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
