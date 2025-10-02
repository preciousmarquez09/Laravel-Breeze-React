import GuestHeader from "../shared/GuestNav/GuestHeader";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <>
      <GuestHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
