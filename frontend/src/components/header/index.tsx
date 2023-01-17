import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '@/assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '@/assets/images/icon_menu.svg';

import { menu_1st, ROUTES } from '@/utils/routes';

import ReactPortal from '@/components/ReactPortal';
import MenuBox from '@/components/header/MenuBox';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    if (ref.current) {
      setPosition({
        top: ref?.current?.offsetTop,
        left: ref?.current?.offsetLeft,
      });
    }
  }, []);

  return (
    <header className='bg-dark-500 h-auto'>
      <div className='container flex-between h-16'>
        <NavLink to={ROUTES.HOME}>
          <LogoIcon />
        </NavLink>

        <div className='flex-center gap-8'>
          <nav className='w-full'>
            <ul className='flex-center text-white'>
              {menu_1st.map((menu) => (
                <NavLink key={menu.path} to={menu.path}>
                  <li
                    className={[
                      'flex-center p-4',
                      pathname === menu.path && 'text-primary',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span>{menu.icon}</span>
                    <p className='pl-2'>{menu.name}</p>
                  </li>
                </NavLink>
              ))}
            </ul>
          </nav>
          <div
            ref={ref}
            className='cursor-pointer'
            onClick={() => setToggle(!toggle)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      <ReactPortal>{toggle && <MenuBox position={position} />}</ReactPortal>
    </header>
  );
};

export default Header;
