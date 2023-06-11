import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <p>Lol main layout</p>
      <Outlet></Outlet>
    </section>
  );
};

export default MainLayout;
