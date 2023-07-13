import Banner from "../../components/homeComponents/Banner";
import Faq from "../../components/homeComponents/Faq";
import GenerateImages from "../../components/homeComponents/GenerateImages";
import ImageGallery from "../../components/homeComponents/ImageGallery";
import ImageGeneratorTools from "../../components/homeComponents/ImageGeneratorTools";
import Testimonial from "../../components/homeComponents/Testimonial";
import Trustpilot from "../../components/homeComponents/Trustpilot";

const Home = () => {
  return (
    <div className="bg-white dark:bg-blackbg">
      <Banner widthClass="max-w-[74rem] mx-auto"></Banner>
      {/* <ChatBot></ChatBot> */}
      <div className="px-6">
        <div className="max-w-[74rem] mx-auto">
          <ImageGeneratorTools></ImageGeneratorTools>
          <GenerateImages></GenerateImages>
          <ImageGallery></ImageGallery>
          <Trustpilot></Trustpilot>
          <Testimonial></Testimonial>
          <Faq></Faq>
        </div>
      </div>
    </div>
  );
};

export default Home;
