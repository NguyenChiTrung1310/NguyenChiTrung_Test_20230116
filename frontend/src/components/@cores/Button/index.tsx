import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  type,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={[
        className,
        'w-auto min-w-[296px] px-1 py-4 bg-btn-primary-300-400 rounded',
        'text-[18px] font-light leading-[26px] text-center text-white',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
