import { NavLink, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { logOut, user, loading } = useAuth();
  const handleLogOut = () => {
    logOut().then(console.log("Log out success"));
  };
  return (
    <div className="navbar mb-8 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn-ghost btn text-xl normal-case">
          Voice Gifted
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-secondary"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-secondary"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/class"
            >
              All Classes
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-secondary"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/all-instructor"
            >
              Instructors
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img
                src={
                  user
                    ? user.photoURL
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content menu rounded-box z-50 mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {loading ? (
              <div>Loading</div>
            ) : user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Log Out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
