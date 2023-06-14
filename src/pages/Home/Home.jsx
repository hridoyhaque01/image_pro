import Banner from "../../components/HomepageComponents/Banner";
import Faq from "../../components/HomepageComponents/Faq";
import GenerateImages from "../../components/HomepageComponents/GenerateImages";
import ImageGeneratorTools from "../../components/HomepageComponents/ImageGeneratorTools";
import Testimonial from "../../components/HomepageComponents/Testimonial";
import Trustpilot from "../../components/HomepageComponents/Trustpilot";

const Home = () => {
  return (
    <div className="bg-white dark:bg-blackbg">
      <Banner widthClass="max-w-[74rem] mx-auto"></Banner>
      <div className="px-6">
        <div className="max-w-[74rem] mx-auto">
          <ImageGeneratorTools></ImageGeneratorTools>
          <GenerateImages></GenerateImages>
          <Trustpilot></Trustpilot>
          <Testimonial></Testimonial>
          <Faq></Faq>
        </div>
      </div>
    </div>
  );
};

export default Home;
