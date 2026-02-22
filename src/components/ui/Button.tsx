import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const classes = [
    'hero-button',
    `hero-button--${variant}`,
    `hero-button--${size}`,
    fullWidth ? 'hero-button--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};

export default Button;
