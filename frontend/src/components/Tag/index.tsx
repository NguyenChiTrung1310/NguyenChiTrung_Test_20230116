import React from 'react';

interface Props {
  text: string;
}

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <div className='w-full min-w-[120px] h-full min-h-[32px] bg-primary-300 flex-center'>
      <p className='text-[15px] font-normal leading-[18px] tracking-[0.15px] text-white font-inter'>
        {text}
      </p>
    </div>
  );
};

export default Tag;
