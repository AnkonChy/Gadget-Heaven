import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="pt-4">
      <div
        className={
          location.pathname === "/"
            ? "navbar bg-bg-violet text-white md:w-11/12 mx-auto py-8 rounded-t-xl"
            : "navbar  text-black md:w-11/12 mx-auto py-8 rounded-t-xl"
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "px-4 py-2 rounded-lg bg-black text-white"
                      : "hover:text-black"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "px-4 py-2 rounded-lg bg-black text-white"
                      : "hover:text-black"
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "px-4 py-2 rounded-lg bg-black text-white"
                      : "hover:text-black"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? "px-4 py-2 rounded-lg bg-black text-white"
                      : "hover:text-black"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-2xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-lg font-medium items-center">
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "px-4 py-2 rounded-lg bg-black text-white"
                    : "hover:text-black"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "px-4 py-2 rounded-lg bg-black text-white"
                    : "hover:text-black"
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "px-4 py-2 rounded-lg bg-black text-white"
                    : "hover:text-black"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "px-4 py-2 rounded-lg bg-black text-white"
                    : "hover:text-black"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4 items-center">
            <button className="w-12 h-12 bg-red-500 rounded-full">
              <i className="fa-solid fa-cart-shopping text-xl"></i>
            </button>
            <button className="w-12 h-12 bg-red-500 rounded-full">
              <i className="fa-regular fa-heart text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
