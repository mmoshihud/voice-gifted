import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-24">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="drawer-button btn-primary btn lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu h-full w-80 bg-base-200 p-4 text-base-content">
            <li>
              <Link to="/dashboard">Admin Home</Link>
            </li>
            <li>
              <Link to="user-list">User List</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
