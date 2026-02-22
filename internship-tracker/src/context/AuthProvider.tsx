import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");

    if (storedEmail && storedToken) {
      setEmail(storedEmail);
      setToken(storedToken);
    }
  }, []);

  const login = (email: string, token: string) => {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setEmail(null);
    setToken(null);
    localStorage.removeItem("email");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ email, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
