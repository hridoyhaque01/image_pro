import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRouter";
import MainLayout from "../layouts/MainLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Billing from "../pages/billing/Billing";
import Discover from "../pages/discover/Discover";
import Generate from "../pages/generate/Generate";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Pricing from "../pages/pricing/Pricing";
import Register from "../pages/register/Register";
import Settings from "../pages/settings/Settings";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/discover",
        element: <Discover></Discover>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/",
    element: <SecondaryLayout></SecondaryLayout>,
    children: [
      {
        path: "/generate",
        element: <Generate></Generate>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/billing",
        element: <Billing></Billing>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: (
  //     <PrivateRoute>
  //       <AuthLayout></AuthLayout>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "/pricing",
  //       element: <Pricing></Pricing>,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
