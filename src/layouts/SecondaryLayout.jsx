import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

function SecondaryLayout() {
  return (
    <div>
      <Navbar fixedTop={false}></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default SecondaryLayout;
