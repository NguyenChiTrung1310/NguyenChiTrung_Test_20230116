import React, { ReactNode } from 'react';

interface Props {
  text: string | ReactNode;
  className?: string;
}

const Tag: React.FC<Props> = ({ text, className }) => {
  return (
    <div
      className={[
        'w-full min-w-[120px] h-auto min-h-[32px] bg-primary-300 flex-center p-1',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className='text-[15px] font-normal leading-[18px] tracking-[0.15px] text-white font-inter'>
        {text}
      </p>
    </div>
  );
};

export default Tag;
