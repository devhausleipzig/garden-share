import React, { ReactNode, useContext, useState } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "Admin" | "User";
}

export const useAuth = () => useContext(AuthContext);

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  login: () => {
    throw new Error("Function not implemented");
  },
  logout: () => {
    throw new Error("Function not implemented");
  },
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = Boolean(user);

  const login = (email: string, password: string) => {
    if (email === "admin@rooted.de" && password === "password") {
      setUser({
        id: "123",
        email,
        password,
        name: "Admin",
        role: "Admin",
      });
    }
    if (email === "user@rooted.de" && password === "password") {
      setUser({
        id: "234",
        email,
        password,
        name: "User",
        role: "User",
      });
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
