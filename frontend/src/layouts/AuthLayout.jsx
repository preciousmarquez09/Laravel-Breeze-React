import AuthHeader from "../shared/Nav/AuthHeader";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" />;

  return (
    <>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
