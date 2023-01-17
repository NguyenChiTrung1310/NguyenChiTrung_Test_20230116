import { useAuth } from '@/context/Auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  position: {
    top: number;
    left: number;
  };
}

const MenuBox: React.FC<Props> = ({ position }) => {
  const navigate = useNavigate();
  const { onLogout, token } = useAuth();

  if (token) {
    navigate('/login');
  }
  return (
    <div
      style={{
        top: position.top + 32,
        left: position.left - 280 + 32,
      }}
      className='absolute w-[280px] h-auto bg-black text-white'
    >
      <ul>
        <li>Menu</li>
        {token && (
          <li className='cursor-pointer'>
            <p onClick={onLogout}>Logout</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuBox;
