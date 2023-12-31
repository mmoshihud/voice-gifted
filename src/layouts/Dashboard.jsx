import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  return (
    <>
      {isAdminLoading ? (
        <div>Loading</div>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-16">
            <label
              htmlFor="my-drawer-2"
              className="drawer-button btn-primary btn lg:hidden"
            >
              Open drawer
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu h-full w-80 bg-base-200 p-4 text-base-content">
              <>
                {isAdmin ? (
                  <>
                    <li>
                      <Link to="/dashboard">Admin Home</Link>
                    </li>
                    <li>
                      <Link to="user-list">User List</Link>
                    </li>
                    <li>
                      <Link to="class-list">Class List</Link>
                    </li>
                  </>
                ) : null}
                {isInstructor ? (
                  <>
                    <li>
                      <Link to="add-class">Add Class</Link>
                    </li>
                    <li>
                      <Link to="my-class">My Class</Link>
                    </li>
                  </>
                ) : null}
                {isStudent ? (
                  <>
                    <li>
                      <Link to="my-selected-classes">My Selected Class</Link>
                    </li>
                    <li>
                      <Link to="my-enrolled-classes">My Enrolled Class</Link>
                    </li>
                    <li>
                      <Link to="payment">Payment</Link>
                    </li>
                    <li>
                      <Link to="payment-history">Payment History</Link>
                    </li>
                  </>
                ) : null}
              </>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
