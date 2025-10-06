import { createContext, useContext, useState, useEffect } from "react";
import api from "../auth/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const csrf = () => api.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    setLoading(true);
    try {
      console.log("Fetching user...");
      const { data } = await api.get("/api/user");
      console.log("User data:", data);
      setUser(data);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const login = async ({ email, password }) => {
    await csrf();
    setErrors([]);
    try {
      await api.post("/login", { email, password });
      await getUser();
      navigate("/dashboard");
    } catch (e) {
      setErrors(e.response?.data?.errors || ["Something went wrong"]);
      console.error(e.response?.data?.errors);
    }
  };

  const register = async ({ formData }) => {
    await csrf();
    setErrors([]);
    try {
      await api.post("/register", formData);
      await getUser();
      navigate("/dashboard");
    } catch (e) {
      setErrors(e.response?.data?.errors || ["Something went wrong"]);
      console.error(e.response?.data?.errors);
    }
  };

  const logout = async () => {
    await api.post("logout").then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, errors, getUser, login, register, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
