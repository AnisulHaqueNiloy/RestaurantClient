import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import registere from "../assets/register.json";
import Lottie from "lottie-react";
const Register = () => {
  const { createUser, user, setPassError, updateProfileData, pass } =
    useContext(AuthContext);

  const [showPass, setshow] = useState(false);
  const [err, seterror] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    seterror("");
    setPassError("");
    const pass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!pass.test(password)) {
      setPassError(
        "Password should atleast one uppercase and one lowercase and atleast 6 character"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();

        Swal.fire({
          title: "Account Created",
          text: `Welcome !`,
          icon: "success",
          confirmButtonText: "OK",
        });
        updateProfileData({ displayName: name, photoURL: photo }).then(() => {
          navigate(location?.state ? location.state : "/");
        });
        const newUser = { name, email };
        fetch(" https://sportbackend-six.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": " application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {});
      })
      .catch((error) => {
        seterror(error.message);
        Swal.fire({
          title: "Ooppps!",
          text: ` ${err}!`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <div className="flex flex-col gap-5 md:flex-row-reverse md:flex-row items-center justify-center">
        <div>
          <Lottie animationData={registere}></Lottie>
        </div>
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>

          <form onSubmit={register} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setshow(!showPass)}
                className="bg-transparent btn btn-xs absolute right-4 bottom-3"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>

              {pass ? <p className="text-warning text-xs">{pass}</p> : ""}
            </div>

            {/* Error Message */}
            {/* {error && (
            <p className="text-sm text-red-500 bg-red-100 p-2 rounded">
              {error}
            </p>
          )} */}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-2 hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          {/* Footer Links */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <p className="text-blue-500 hover:underline">
              <NavLink to={"/login"}>Login</NavLink>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
