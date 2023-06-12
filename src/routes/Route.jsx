import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../pages/dashboard/admin-home/AdminHome";
import App from "../layouts/App";
import Dashboard from "../layouts/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";
import UserList from "../pages/dashboard/user-management/UserList";
import AdminRoute from "./AdminRoute";
import AddClass from "../pages/dashboard/manage-classes/AddClass";
import ClassList from "../pages/dashboard/manage-classes/ClassList";
import InstructorClassList from "../pages/dashboard/manage-classes/InstructorClassList";
import EditClass from "../pages/dashboard/manage-classes/EditClass";
import SelectedClasses from "../pages/dashboard/student-classes/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/student-classes/EnrolledClasses";
import AllClass from "../pages/class/AllClass";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/payment/PaymentHistory";
import ErrorPage from "../pages/error/404";
import InstructorPage from "../pages/dashboard/instructor/InstructorPage";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/class",
        element: <AllClass />,
      },
      {
        path: "/all-instructor",
        element: <InstructorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <AdminHome />,
      },
      {
        path: "user-list",
        element: (
          <AdminRoute>
            <UserList />
          </AdminRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "edit-class/:id",
        element: (
          <InstructorRoute>
            <EditClass />
          </InstructorRoute>
        ),
      },
      {
        path: "class-list",
        element: (
          <AdminRoute>
            <ClassList />
          </AdminRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <InstructorRoute>
            <InstructorClassList />
          </InstructorRoute>
        ),
      },
      {
        path: "my-selected-classes",
        element: (
          <StudentRoute>
            <SelectedClasses />
          </StudentRoute>
        ),
      },
      {
        path: "my-enrolled-classes",
        element: (
          <StudentRoute>
            <EnrolledClasses />
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
