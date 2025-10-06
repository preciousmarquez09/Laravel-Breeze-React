import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { GiCoffeeBeans } from "react-icons/gi";

export default function Register() {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    birthday: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, errors } = useAuthContext();

  const handleRegister = async (event) => {
    event.preventDefault();
    register({ formData });
  };

  return (
    <section className="flex-center my-15 w-full">
      <form onSubmit={handleRegister}>
        <div className="card bg-white border-t-5 border-mocha">
          <div className="flex-center mb-8">
            <GiCoffeeBeans className="w-15 h-15 text-mocha" />
          </div>

          <h1 className="card-title text-start mb-5  text-espresso">
            Register
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 md:mb-8">
            <div>
              <label className="mb-1">First Name:</label>
              <div className="flex-center  border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type="text"
                  value={formData.f_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      f_name: e.target.value,
                    })
                  }
                  placeholder="First Name"
                  className="border-none outline-none"
                />
              </div>
              {errors.f_name && (
                <span className="error">{errors.f_name[0]}</span>
              )}
            </div>

            <div>
              <label className="mb-1">Last Name:</label>
              <div className="flex-center  border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type="text"
                  value={formData.l_name}
                  placeholder="Last Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      l_name: e.target.value,
                    })
                  }
                  className="border-none outline-none"
                />
              </div>
              {errors.l_name && (
                <span className="error">{errors.l_name[0]}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 md:mb-8">
            <div>
              <label className="mb-1">Email:</label>
              <div className="flex-center  border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type="text"
                  value={formData.email}
                  placeholder="Email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="border-none outline-none"
                />
              </div>
              {errors.email && <span className="error">{errors.email[0]}</span>}
            </div>
            <div>
              <label className="mb-1">Birthday:</label>
              <div className="flex-center  border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type="date"
                  value={formData.birthday}
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      birthday: e.target.value,
                    })
                  }
                  className="border-none outline-none"
                />
              </div>
              {errors.birthday && (
                <span className="error">{errors.birthday[0]}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div>
              <label className="mb-1">Password:</label>
              <div className="flex-center border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
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
            </div>

            <div>
              <label className="mb-1">Password Confirmation:</label>
              <div className="flex-center border rounded-md border-latte px-3 focus-border-1 focus-within:border-espresso focus:outline-none">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.password_confirmation}
                  placeholder="Password Confirmation"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password_confirmation: e.target.value,
                    })
                  }
                  className="border-none outline-none"
                />
                {showConfirmPassword ? (
                  <LuEye
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowConfirmPassword(!showConfirmPassword);
                    }}
                    className="h-5 w-5 text-latte cursor-pointer"
                  />
                ) : (
                  <LuEyeClosed
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowConfirmPassword(!showConfirmPassword);
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
          </div>

          <button className="primary-btn">Register</button>
        </div>
      </form>
    </section>
  );
}
