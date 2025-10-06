import { useState } from "react";
import useAuthContext from "../../context/AuthContext";

import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { GiCoffeeBeans } from "react-icons/gi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <section className="flex-center my-15 px-5 w-full ">
      <form onSubmit={handleLogin}>
        <div className="card bg-white border-t-5 border-mocha">
          <div className="flex-center mb-8">
            <GiCoffeeBeans className="w-15 h-15 text-mocha" />
          </div>

          <h1 className="card-title text-start mb-5  text-latte">Login</h1>

          <div className="mb-8">
            <label className="mb-1">Email:</label>
            <div className="flex-center  border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
              <CiMail className="h-5 w-5 text-mocha" />
              <input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-none outline-none"
              />
            </div>
            {errors.email && <span className="error">{errors.email[0]}</span>}
          </div>

          <div className="mb-8">
            <label className="mb-1">Password:</label>
            <div className="flex-center border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
              <CiLock className="h-5 w-5 text-mocha" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-none outline-none"
              />
              {showPassword ? (
                <LuEye
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassword(!showPassword);
                  }}
                  className="h-5 w-5 text-latte cursor-pointer"
                />
              ) : (
                <LuEyeClosed
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPassword(!showPassword);
                  }}
                  className="h-5 w-5 text-latte cursor-pointer"
                />
              )}
            </div>
            {errors.password && (
              <span className="error">{errors.password[0]}</span>
            )}
            {errors.credentials && (
              <span className="error">{errors.credentials[0]}</span>
            )}
          </div>

          <div className="mb-8 flex-center justify-between">
            <div className="flex-center gap-1 cursor-pointer">
              <input type="checkbox" id="remember" className="accent-mocha" />
              <label
                htmlFor="remember"
                className="text-sm text-espresso font-medium hover:text-mocha cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="flex-center gap-1 cursor-pointer">
              <span className="text-sm text-espresso font-semibold hover:text-mocha cursor-pointer">
                Forgot Password?
              </span>
            </div>
          </div>
          <button className="primary-btn">Login</button>
        </div>
      </form>
    </section>
  );
}
