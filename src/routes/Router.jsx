import { createBrowserRouter } from "react-router-dom";
// import PrivateRoute from "./PrivateRouter";
import MainLayout from "../layouts/MainLayout";
import SecondaryLayout from "../layouts/SecondaryLayout";
import Generate from "../pages/Generate/Generate";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Pricing from "../pages/Pricing/Pricing";
import Register from "../pages/Register/Register";

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
  {
    path: "/",
    element: <SecondaryLayout></SecondaryLayout>,
    children: [
      {
        path: "/generate",
        element: <Generate></Generate>,
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
