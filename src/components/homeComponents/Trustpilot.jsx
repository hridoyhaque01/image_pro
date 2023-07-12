import React from "react";
import { reviewStar, star } from "../../Assets/getImages";

function Trustpilot() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
      <div className="bg-white dark:bg-blackHigh border border-blueLight dark:border-navyDark rounded-2xl p-8 md:p-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="flex items-center text-2xl sm:text-4xl lg:text-6xl font-dmSans font-semibold text-blackText dark:text-white duration-200">
            <img src={star} alt="" className="w-8 md:w-16" />{" "}
            <span>Trustpilot</span>
          </h2>
          <div className="">
            <img src={reviewStar} alt="" className="w-44 md:w-auto" />
          </div>
          <p className="text-xl text-slateDark">Rated 4.5/5.0</p>
        </div>
      </div>
    </section>
  );
}

export default Trustpilot;
