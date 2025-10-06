import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/authenticated/Dashboard.jsx";
import Home from "./pages/guest/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Unauthorized from "./shared/messages/Unauthorized.jsx";
import NotFound from "./shared/messages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
