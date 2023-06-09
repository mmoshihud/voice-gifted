import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Dashboard from "../layouts/Dashboard";
import AdminHome from "../pages/dashboard/user-home/AdminHome";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/sign-up/SignUp";

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
