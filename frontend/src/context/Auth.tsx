import { createContext, ReactNode, useContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

interface IAuthContext {
  token: string | null;
  onLogin: () => void;
  onLogout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  token: null,
  onLogin: () => undefined,
  onLogout: () => undefined,
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | null>('ss');

  const handleLogin = async () => {
    const token = 'ok';

    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
