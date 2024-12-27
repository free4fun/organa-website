import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
  rounded?: boolean;
  block?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size,
  outline,
  rounded,
  block,
  className = '',
  onClick,
  type = 'button',
  disabled
}) => {
  const classes = [
    'btn',
    `btn-${outline ? 'outline-' : ''}${variant}`,
    size && `btn-${size}`,
    rounded && 'btn-rounded',
    block && 'd-block w-100',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;