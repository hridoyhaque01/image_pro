import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRouter";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Pricing from "../pages/Pricing/Pricing";
import MainLayout from "../layouts/MainLayout";

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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
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
