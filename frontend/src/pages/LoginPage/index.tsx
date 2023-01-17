import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/Auth';
import { ROUTES } from '@/utils/routes';

import Button from '@/components/@cores/Button';

const LoginPage = () => {
  const { onLogin, token } = useAuth();
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  return (
    <div className='w-full'>
      <div className='mt-14 block w-fit mx-auto'>
        <Button onClick={onLogin} className=''>
          Login
        </Button>

        <div className='mt-14'>
          <NavLink to={ROUTES.COLUMNS} className='text-primary'>
            Go to Columns Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
