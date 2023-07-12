import React from "react";
import { Link } from "react-router-dom";
import { banner } from "../../Assets/getImages";

function Banner({ widthClass }) {
  return (
    <section
      className="bg-heroLightBg dark:bg-heroDarkBg bg-no-repeat bg-cover bg-right-top pt-32 md:pt-36
     lg:pt-48 pb-10 md:pb-20 lg:pb-32 px-6"
    >
      <div className={widthClass}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-7">
          <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
            <h1 className="text-blackText dark:text-white text-4xl md:text-5xl lg:text-6xl leading-[110%] font-bold duration-300">
              Create amazing <span className="text-blueMid">photos</span> with
              the power of <span className="text-blueMid">AI</span>
            </h1>
            <p className="dark:text-slateMid text-slateDark text-sm sm:text-xl xl:text-2xl mb-3 xl:mb-9">
              Image Pro is a suite of magical AI tools. Generate original images
              at scale, modify photos, expand pictures beyond their original or
              create custom AI models.
            </p>
            <Link
              to=""
              className="inline-flex max-w-max items-center gap-4 px-4 py-5 lg:p-6 text-base lg:text-xl font-bold text-white bg-primaryColor rounded-lg whitespace-nowrap"
            >
              <span>Start creating for free</span>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7061 8.70805L12.707 15.7071C12.512 15.9021 12.256 16 12 16C11.744 16 11.488 15.9021 11.293 15.7071C10.902 15.3161 10.902 14.684 11.293 14.293L16.5859 9.00004H1C0.447 9.00004 0 8.55204 0 8.00004C0 7.44804 0.447 7.00004 1 7.00004H16.5859L11.293 1.70707C10.902 1.31607 10.902 0.684006 11.293 0.293006C11.684 -0.0979941 12.316 -0.0979941 12.707 0.293006L19.7061 7.29203C19.7991 7.38503 19.8721 7.49496 19.9231 7.61796C20.0241 7.86196 20.0241 8.13812 19.9231 8.38212C19.8721 8.50512 19.7991 8.61504 19.7061 8.70805Z"
                  fill="#EEEEF4"
                />
              </svg>
            </Link>
            <p className="text-sm sm:text-base text-slateDark dark:text-slateMid">
              100/mo images for free • No credit card required
            </p>
          </div>
          <div className="duration-300 ">
            <img src={banner} alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
