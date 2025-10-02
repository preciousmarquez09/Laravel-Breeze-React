import { Link } from "react-router-dom";
export default function GuestHeader() {
  return (
    <nav className="bg-espresso">
      <p className="text-white">Guest Navbar</p>
      <div className="">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </div>
    </nav>
  );
}
