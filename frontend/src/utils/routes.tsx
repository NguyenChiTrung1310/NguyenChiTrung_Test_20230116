import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Page404 from '@/pages/Page404';
import DashboardPage from '@/pages/Dashboard';
import { useAuth } from '@/context/Auth';

import { ReactComponent as MemoIcon } from '@/assets/images/icon_memo.svg';
import { ReactComponent as ChallengeIcon } from '@/assets/images/icon_challenge.svg';
import { ReactComponent as InfoIcon } from '@/assets/images/icon_info.svg';

type Props = {
  children: ReactElement;
};

type IRoutes = {
  path: string;
  element: ReactElement;
  private?: boolean;
};

type IMenu = {
  path: string;
  name: string;
  icon?: ReactElement;
};

export enum ROUTES {
  HOME = '/',
  DASHBOARD = '/dashboard',
  PROFILE = '/profile',
  CHALLENGE = '/challenge',
  INFO = '/info',
  WEIGHT_CHART = '/weight-chart',
  GOAL = '/goal',
  MY_COURSES = '/my-courses',
  COLUMN_LIST = '/column-list',
  SETTING = '/setting',
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

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to='/' replace />;
  }

  return children;
};

export const menu_1st: IMenu[] = [
  {
    path: ROUTES.PROFILE,
    name: '自分の記録',
    icon: <MemoIcon />,
  },
  {
    path: ROUTES.CHALLENGE,
    name: 'チャレンジ',
    icon: <ChallengeIcon />,
  },
  {
    path: ROUTES.INFO,
    name: 'お知らせ',
    icon: <InfoIcon />,
  },
];

export const menu_2nd: IMenu[] = [
  {
    path: ROUTES.PROFILE,
    name: '自分の記録',
  },
  {
    path: ROUTES.WEIGHT_CHART,
    name: '自分の記録',
  },
  {
    path: ROUTES.GOAL,
    name: '目標',
  },
  {
    path: ROUTES.MY_COURSES,
    name: '選択中のコース',
  },
  {
    path: ROUTES.COLUMN_LIST,
    name: 'コラム一覧',
  },
  {
    path: ROUTES.SETTING,
    name: '設定',
  },
];
