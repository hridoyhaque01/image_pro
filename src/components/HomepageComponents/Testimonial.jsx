import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { avatar1, avatar2, avatar3, quote } from "../../Assets/getImages";

function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar1,
      name: "Maktum Mahe",
      address: "Sydney, Australia",
    },
    {
      id: 2,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar2,
      name: "Ahamed Lincon",
      address: "Sydney, Australia",
    },
    {
      id: 3,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar3,
      name: "Gianna Luna",
      address: "New York, USA",
    },
    {
      id: 4,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar1,
      name: "Jhon Doe",
      address: "Sydney, Australia",
    },
    {
      id: 5,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar2,
      name: "Will Smith",
      address: "Sydney, Australia",
    },
    {
      id: 6,
      icon: quote,
      texts:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.",
      avatar: avatar3,
      name: "Jim Carrey",
      address: "New York, USA",
    },
  ];

  return (
    <section className=" pt-10 md:pt-20 lg:pt-32">
      <div className="mb-4 sm:mb-8 lg:mb-16 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-blackText dark:text-slateLow duration-300">
          Our User Says
        </h1>
        <p className="text-sm sm:text-xl lg:text-2xl text-slateDark dark:text-slateSemi mt-3">
          Our user send us bunch of smiles with our services and we love them
        </p>
      </div>
      <div className="md:px-24 relative z-20">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          freeMode={true}
          loop={true}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 24,
            },

            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          navigation={{
            nextEl: ".slide-next",
            prevEl: ".slide-prev",
            disabledClass: "swiper-button-disabled",
          }}
          className="relative z-20 px-1"
        >
          {testimonialData?.map((testimonial) => {
            const { id, icon, texts, avatar, name, address } =
              testimonial || {};
            const text =
              texts?.length > 136 ? texts?.slice(0, 136) + "..." : texts;
            return (
              <SwiperSlide key={id}>
                <div className="relative flex flex-col justify-center text-center px-4 py-10 border border-blueLight dark:border-navyDark after:content-[''] after:absolute after:-right-1 after:top-0 after:h-full after:w-full after:rounded-2xl after:border-transparent after:hover:border-primaryColor after:border-r-8 rounded-2xl after:duration-200">
                  <div className="flex items-center justify-center gap-1 mb-8">
                    <img src={icon} alt="" className="max-w-[64px]" />
                  </div>
                  <p className="text-base leading-6 text-slateDark dark:text-white">
                    {text}
                  </p>
                  <div className="border border-fadeHigh dark:border-navyDark mt-10 mb-8"></div>
                  <div className="">
                    <img src={avatar} alt="" className="max-w-[60px] mx-auto" />
                  </div>
                  <h2 className="text-base md:text-xl text-blackText  font-bold dark:text-white mt-4 mb-1">
                    {name}
                  </h2>
                  <p className="text-sm text-slateDark dark:text-slateSemi">
                    {address}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="hidden md:flex justify-between items-center w-full absolute left-0 inset-y-0 z-10 ">
          <button
            type="button"
            className="slide-prev p-3 bg-black rounded-full cursor-pointer"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M29.3334 16.3057C29.3334 17.0417 28.7374 17.639 28.0001 17.639H7.21885L14.2761 24.6963C14.7975 25.2177 14.7975 26.0604 14.2761 26.5818C14.0161 26.8418 13.6748 26.9724 13.3334 26.9724C12.9921 26.9724 12.6507 26.8418 12.3907 26.5818L3.05869 17.2497C2.93469 17.1257 2.8373 16.9792 2.7693 16.8152C2.63464 16.4898 2.63464 16.1216 2.7693 15.7963C2.8373 15.6323 2.93469 15.4857 3.05869 15.3617L12.3907 6.02967C12.9121 5.50834 13.7548 5.50834 14.2761 6.02967C14.7975 6.55101 14.7975 7.39376 14.2761 7.91509L7.21885 14.9724H28.0001C28.7374 14.9724 29.3334 15.5697 29.3334 16.3057Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            type="button"
            className="slide-next p-3 bg-black rounded-full cursor-pointer"
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M28.9414 17.2497L19.6094 26.5818C19.3494 26.8418 19.008 26.9724 18.6667 26.9724C18.3254 26.9724 17.984 26.8418 17.724 26.5818C17.2026 26.0604 17.2026 25.2177 17.724 24.6963L24.7813 17.639H4.00002C3.26269 17.639 2.66669 17.0417 2.66669 16.3057C2.66669 15.5697 3.26269 14.9724 4.00002 14.9724H24.7813L17.724 7.91509C17.2026 7.39376 17.2026 6.55101 17.724 6.02967C18.2453 5.50834 19.0881 5.50834 19.6094 6.02967L28.9414 15.3617C29.0654 15.4857 29.1628 15.6323 29.2308 15.7963C29.3655 16.1216 29.3655 16.4898 29.2308 16.8152C29.1628 16.9792 29.0654 17.1257 28.9414 17.2497Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
