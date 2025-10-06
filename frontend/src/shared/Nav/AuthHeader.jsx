import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
export default function AuthHeader() {
  const { logout, user, getUser } = useAuthContext();
  return (
    <nav className="bg-espresso">
      <p className="text-white">Guest Navbar</p>
      <div className="">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>

        <button onClick={logout} className="nav-link">
          Logout
        </button>
      </div>
    </nav>
  );
}
