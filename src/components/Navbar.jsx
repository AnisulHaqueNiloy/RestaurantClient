import { NavLink } from "react-router-dom";
import "../../src/index.css";
import { AuthContext } from "../authprovider/AuthProvider";
import { useContext, useEffect, useState } from "react";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allfoods">All Foods</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      {user ? (
        <li
          onClick={() => logout()}
          className="flex items-center justify-center cursor-pointer  "
        >
          {" "}
          Logout
        </li>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {!user ? (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="fixed w-full z-30 bg-red-600 ">
      <div className="navbar   backdrop-blur-lg w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn p-0 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 space-x-4 shadow nav-links"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 nav-links  ">{link}</ul>
          <button
            onClick={toggleTheme}
            className="btn bg-black text-white btn-sm text-white border-white hover:bg-gray-700 hidden md:block"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
        <div
          className={`dropdown navbar-end text-right dropdown-end ${
            user ? "block" : "hidden"
          } `}
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar  "
          >
            <div className="w-10 rounded-full ">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  "
          >
            <li>
              <NavLink to="/myfoods">My Foods</NavLink>
            </li>
            <li>
              <NavLink to="/addfood">AddFood</NavLink>
            </li>
            <li>
              <NavLink to="/myorders">My Order</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
