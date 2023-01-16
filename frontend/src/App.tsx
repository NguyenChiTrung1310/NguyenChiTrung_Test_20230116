import Layout from '@/components/layouts';
import AuthProvider from '@/context/Auth';
import HomePage from '@/pages/Home';
import { ProtectedRoute, routes } from '@/utils/routes';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          {routes.map((route) => {
            if (route?.private) {
              // PRIVATE ROUTES
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                />
              );
            }

            // PUBLIC ROUTES
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
