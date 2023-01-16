import { useAuth } from '@/context/Auth';
import DashboardPage from '@/pages/Dashboard';
import HomePage from '@/pages/Home';
import Page404 from '@/pages/Page404';
import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

type IRoutes = {
  path: string;
  element: ReactElement;
  private?: boolean;
};

export enum ROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
}

export const routes: IRoutes[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <DashboardPage />,
    private: true,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export { ProtectedRoute };
