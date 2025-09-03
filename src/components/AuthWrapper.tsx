import React, { useState, useEffect } from 'react';
import Login from './Login';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
    localStorage.setItem('currentUser', username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <div className="bg-white shadow-sm px-4 py-2 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Bienvenido, <span className="font-medium">{currentUser}</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-700 text-sm font-medium"
        >
          Cerrar Sesión
        </button>
      </div>
      {children}
    </div>
  );
}