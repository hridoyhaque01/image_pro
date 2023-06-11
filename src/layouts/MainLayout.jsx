import { Outlet } from "react-router-dom";
import CollapseSection from "../components/CollapseSection";
import GridImageGallery from "../components/GridImageGallery";

const MainLayout = () => {
  const items = [
    {
      key: "1",
      label: "This is panel header 1",
      children: (
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      ),
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: (
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      ),
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: (
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      ),
    },
  ];

  return (
    <section
      className={`min-h-screen flex flex-col justify-start md:justify-between bg-mainBg bg-no-repeat bg-top`}
    >
      <Outlet></Outlet>
      <CollapseSection items={items}></CollapseSection>
      <GridImageGallery></GridImageGallery>
    </section>
  );
};

export default MainLayout;
