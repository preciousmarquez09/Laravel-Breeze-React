import useAuthContext from "../../context/AuthContext";
import { useEffect } from "react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the protected page.</p>
    </div>
  );
}
