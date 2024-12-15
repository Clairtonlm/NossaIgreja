import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  userName: string;
  login: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const { name } = JSON.parse(auth);
      setIsAuthenticated(true);
      setUserName(name);
    }
  }, []);

  const login = (name: string, email: string, password: string) => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setUserName(name);
      localStorage.setItem('auth', JSON.stringify({ name, email }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserName('');
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}