import { Link } from "react-router-dom";
export default function GuestHeader() {
  return (
    <div>
      <p>Guest Navbar</p>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
