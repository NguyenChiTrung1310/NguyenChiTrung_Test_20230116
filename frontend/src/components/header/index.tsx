import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '@/assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '@/assets/images/icon_menu.svg';
import { menu_1st, ROUTES } from '@/utils/routes';

const Header = () => {
  return (
    <header className='bg-dark-500 h-auto'>
      <div className='container-xl flex-between h-16'>
        <NavLink to={ROUTES.HOME}>
          <LogoIcon />
        </NavLink>

        <div className='flex-center gap-8'>
          <nav className='w-full'>
            <ul className='flex-center text-white'>
              {menu_1st.map((menu) => (
                <NavLink key={menu.path} to={menu.path}>
                  <li className='flex-center p-4'>
                    <span>{menu.icon}</span>
                    <p className='pl-2'>{menu.name}</p>
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className='cursor-pointer'>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
