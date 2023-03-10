import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import HomePage from '@/pages/Home';
import Page404 from '@/pages/Page404';
import MyRecordPage from '@/pages/MyRecord';
import ColumnPage from '@/pages/ColumnPage';
import LoginPage from '@/pages/LoginPage';
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
  RECORD = '/my-record',
  CHALLENGE = '/challenge',
  INFO = '/info',
  WEIGHT_CHART = '/weight-chart',
  GOAL = '/goal',
  MY_COURSES = '/my-courses',
  COLUMNS = '/columns',
  SETTING = '/setting',
  LOGIN = '/login',
}

export const routes: IRoutes[] = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
    private: true,
  },
  {
    path: ROUTES.RECORD,
    element: <MyRecordPage />,
    private: true,
  },
  {
    path: ROUTES.COLUMNS,
    element: <ColumnPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
];

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export const menu_1st: IMenu[] = [
  {
    path: ROUTES.RECORD,
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
    path: ROUTES.RECORD,
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
    path: ROUTES.COLUMNS,
    name: 'コラム一覧',
  },
  {
    path: ROUTES.SETTING,
    name: '設定',
  },
];
