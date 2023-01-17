import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  className,
  type,
  loading,
  onClick,
  ...props
}) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type={type}
      {...props}
      className={[
        className,
        'w-auto min-w-[296px] px-1 py-4 bg-btn-primary-300-400 rounded',
        'text-[18px] font-light leading-[26px] text-center text-white',
        'disabled:opacity-70',
        loading ? 'flex-center gap-6' : 'block',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
      {loading && (
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'
          ></circle>
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      )}
    </button>
  );
};

export default Button;
