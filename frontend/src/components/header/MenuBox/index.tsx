import { useAuth } from '@/context/Auth';
import { menu_1st, menu_2nd } from '@/utils/routes';
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface Props {
  position: {
    top: number;
    left: number;
  };
}

const MenuBox: React.FC<Props> = ({ position }) => {
  const navigate = useNavigate();
  const { onLogout, token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div
      style={{
        top: position.top + 32,
        left: position.left - 280 + 32,
      }}
      className='absolute w-[280px] h-auto'
    >
      <ul className='bg-gray-400 text-white'>
        {menu_1st.map((menu, idx) => (
          <NavLink key={idx} to={menu.path} className='block md:hidden'>
            <li className='flex items-center md:py-6 md:px-8 py-3 px-4 cursor-pointer border-b border-solid border-white-opacity-15'>
              <span>{menu.icon}</span>
              <p className='pl-2'>{menu.name}</p>
            </li>
          </NavLink>
        ))}

        {menu_2nd.map((menu, idx) => (
          <NavLink to={menu.path} key={idx}>
            <li className='md:py-6 md:px-8 py-3 px-4 cursor-pointer border-b border-solid border-white-opacity-15'>
              {menu.name}
            </li>
          </NavLink>
        ))}
        {token && (
          <li
            onClick={onLogout}
            className='md:py-6 md:px-8 py-3 px-4 cursor-pointer border-b border-solid border-white-opacity-15'
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuBox;
