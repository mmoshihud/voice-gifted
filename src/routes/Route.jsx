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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <AddClass />,
      },
      {
        path: "class-list",
        element: <ClassList />,
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
