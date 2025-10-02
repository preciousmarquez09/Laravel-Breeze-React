import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { GiCoffeeBeans } from "react-icons/gi";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex-center min-h-[calc(100vh-72px)] w-full ">
      <div className="card bg-white border-t-5 border-mocha">
        <div className="flex-center mb-8">
          <GiCoffeeBeans className="w-15 h-15 text-mocha" />
        </div>

        <h1 className="card-title text-start mb-5  text-latte">Login</h1>

        <label className="mb-1">Email:</label>
        <div className="flex-center mb-8 border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
          <CiMail className="h-5 w-5 text-mocha" />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-none outline-none"
          />
        </div>

        <label className="mb-1">Password:</label>
        <div className="flex-center mb-8 border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
          <CiLock className="h-5 w-5 text-mocha" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
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

        <div className="mb-8 flex-center justify-between">
          <div className="flex-center gap-1 cursor-pointer">
            <input type="checkbox" id="remember" className="accent-mocha" />
            <label
              htmlFor="remember"
              className="text-sm text-espresso font-medium"
            >
              Remember me
            </label>
          </div>
          <div className="flex-center gap-1 cursor-pointer">
            <span className="text-sm text-espresso font-semibold">
              Forgot Password?
            </span>
          </div>
        </div>
        <button className="primary-btn">Login</button>
      </div>
    </div>
  );
}
