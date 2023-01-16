import React from 'react';

interface Props {
  position: {
    top: number;
    left: number;
  };
}

const MenuBox: React.FC<Props> = ({ position }) => {
  return (
    <div
      style={{
        top: position.top + 32,
        left: position.left - 280 + 32,
      }}
      className='absolute w-[280px] h-auto bg-black text-white'
    >
      MenuBox
    </div>
  );
};

export default MenuBox;
