import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  }, []);

  const logIn = async (username, password) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setIsSignedIn(true);
        setTimeout(() => {
          localStorage.removeItem('token');
          setIsSignedIn(false);
        }, 3600000); // 1 hour
        return data;
      } else {
        throw new Error(data.message || 'Error logging in');
      }
    } catch (error) {
      setIsSignedIn(false);
      throw new Error(error.message || 'Network error');
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
  };

  const value = useMemo(() => ({ isSignedIn, logIn, logOut }), [isSignedIn, logIn, logOut])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
