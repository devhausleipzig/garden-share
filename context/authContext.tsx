import { useRouter } from "next/router";
import React, { ReactNode, useContext, useState } from "react";
import { getToken } from "../utils/token";
import { User } from "../utils/types";

export interface loginUser extends User {
  password: string;
}

export const useAuth = () => useContext(AuthContext);

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  token: string;
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
  token: "",
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const tokenFromStorage = () => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("token") || "";
    }
    return "";
  };
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState(tokenFromStorage());
  const isAuthenticated = Boolean(user);

  const login = async (email: string, password: string) => {
    try {
      const token = await getToken(email, password);
      if (token) {
        setUser(token.user);
        return user;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    setToken("");
    if (typeof window !== "undefined") localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
