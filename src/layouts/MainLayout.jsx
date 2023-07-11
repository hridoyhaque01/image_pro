import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { ThemeContext } from "../contexts/ThemeProvider/ThemeContext";

const MainLayout = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`font-dmSans ${isDarkMode ? "dark" : "light"}`}
      // className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <Navbar fixedTop={true}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default MainLayout;
