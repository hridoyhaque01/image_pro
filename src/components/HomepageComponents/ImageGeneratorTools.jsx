import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import getData from "../../utils/getData.json";

// Import Swiper styles
import "swiper/css";

function ImageGeneratorTools() {
  const { generatorTools } = getData || {};

  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
      <div className="mb-4 sm:mb-8 lg:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blackText dark:text-slateLow duration-300">
          A fully integrated suite of image-generation tools
        </h1>
      </div>
      <div>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          breakpoints={{
            430: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {generatorTools?.map((tool) => (
            <SwiperSlide key={tool?.id}>
              <div className="p-6 rounded-xl flex flex-col gap-4 bg-white dark:bg-blackHigh border border-blueLight dark:border-navyDark">
                <div className="">
                  <img src={tool?.imageUrl} alt="" />
                </div>
                <h4 className="text-xl font-bold leading-6  text-blackText dark:text-slateLow">
                  {tool?.title}
                </h4>
                <p className="text-slateDark dark:text-slateSemi">
                  {tool?.text?.length > 55
                    ? tool?.text?.slice(0, 55) + "..."
                    : tool?.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ImageGeneratorTools;
