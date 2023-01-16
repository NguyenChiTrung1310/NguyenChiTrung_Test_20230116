import AuthProvider from '@/context/Auth';
import HomePage from '@/pages/Home';
import { ProtectedRoute, routes } from '@/utils/routes';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<HomePage />} />
        {routes.map((route) => {
          if (route?.private) {
            // PRIVATE ROUTES
            return (
              <Route
                path={route.path}
                element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              />
            );
          }

          // PUBLIC ROUTES
          return <Route path={route.path} element={route.element} />;
        })}
      </Routes>
    </AuthProvider>
  );
}

export default App;
