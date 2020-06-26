import React, { createContext, useCallback, useState, useEffect, useContext } from "react";

import api from '../services/api';
import * as auth from '../services/auth';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  loading: boolean;
  signed: boolean;
  user?: User;
  signIn(): void;
  signOut(): void;
}


const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@CE:user');
    const storagedToken = localStorage.getItem('@CE:token');

    if (storagedUser && storagedToken) {
      api.defaults.headers.Autorization = `Bearer ${storagedToken}`;
      setUser(JSON.parse(storagedUser));
    }
  }, [])

  const signIn = useCallback(() => {
    async function loadSignIn() {
      setLoading(true);

      const response = await auth.signIn();

      api.defaults.headers.Autorization = `Bearer ${response.token}`;

      localStorage.setItem('@CE:token', response.token);
      localStorage.setItem('@CE:user', JSON.stringify(response.user));

      setUser(response.user);
      setLoading(false);
    }

    loadSignIn();
  }, [])

  const signOut = useCallback(() => {
    setUser(undefined);
  }, [])

  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
