import { createContext, useContext, useState, useEffect } from "react";
import api from "../auth/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await api.get("/api/user");
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) getUser();
    else setLoading(false);
  }, []);

  const login = async ({ email, password }) => {
    setErrors([]);
    try {
      const { data } = await api.post("/api/login", { email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (e) {
      setErrors(e.response?.data?.errors || ["Invalid credentials"]);
    }
  };

  const register = async (formData) => {
    setErrors([]);
    try {
      const { data } = await api.post("/api/register", formData);
      localStorage.setItem("token", data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (e) {
      setErrors(e.response?.data?.errors || ["Registration failed"]);
    }
  };

  const logout = async () => {
    try {
      await api.post("/api/logout");
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, errors, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
