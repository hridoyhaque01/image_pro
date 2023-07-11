import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import { ThemeContext } from "../contexts/ThemeProvider/ThemeContext";

function SecondaryLayout() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`font-dmSans ${isDarkMode ? "dark" : "light"}`}
      // className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <Navbar fixedTop={false}></Navbar>
      <Outlet></Outlet>
    </section>
  );
}

export default SecondaryLayout;
