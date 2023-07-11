import React from "react";
import { Link } from "react-router-dom";
import { generateImage } from "../../Assets/getImages";

function GenerateImages() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-7">
        <div className="order-2 md:order-1">
          <p className="text-blueMid">Image to Images</p>
          <h2 className="text-2xl lg:text-4xl font-bold text-blackText dark:text-slateLow duration-300 mt-4 mb-6">
            Generate original images at scale.
          </h2>
          <p className="text-slateDark dark:text-slateSemi mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.{" "}
          </p>
          <Link
            to=""
            className="hidden md:inline-flex max-w-max items-center gap-4 px-4 py-5 lg:p-6 text-base lg:text-xl font-bold text-white bg-primaryColor rounded-lg whitespace-nowrap "
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
        </div>
        <div className="order-1 md:order-2">
          <img src={generateImage} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default GenerateImages;
