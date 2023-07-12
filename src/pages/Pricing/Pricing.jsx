import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [pricing, setPricing] = useState("monthly");
  const navigate = useNavigate();

  const freePirce = pricing === "monthly" ? "00" : "00";
  const starterPirce = pricing === "monthly" ? "9.99" : "19.99";
  const premiumPirce = pricing === "monthly" ? "14.99" : "37.99";
  const businessPirce = pricing === "monthly" ? "29.99" : "49.99";

  const handleNavigateWithBilling = (selectedPackage) => {
    navigate("/billing", {
      state: { pricing, packageDetails: selectedPackage },
    });
  };

  return (
    <section className="bg-white px-6  sm:px-16 md:px-24 lg:px-6 pt-32 md:pt-36 lg:pt-40  pb-10 dark:bg-blackbg text-gray-600 body-font overflow-hidden">
      <div className="max-w-[74rem] mx-auto">
        <div className="flex flex-col justify-center text-center w-full ">
          <h1 className="text-blackText dark:text-white text-2xl md:text-4xl font-bold">
            Pricing
          </h1>
          <p className="text-slateDark dark:text-white text-sm md:text-base mt-2 mb-4 md:mt-4 md:mb-10">
            Annually you get 20% off, which is 2 months free
          </p>
          <div className="flex items-center border border-fadeHigh dark:border-slateDark rounded-full p-3 max-w-max mx-auto text-xl font-bold bg-fadeMid dark:bg-blackHigh text-blackText dark:text-white mb-10">
            <button
              className={`${
                pricing === "annually" ? "bg-primaryColor text-white" : ""
              }  px-6 py-4 rounded-full whitespace-nowrap`}
              onClick={() => setPricing("annually")}
            >
              Annually
            </button>
            <button
              className={`${
                pricing === "monthly" ? "bg-primaryColor text-white" : ""
              }  px-6 py-4 rounded-full whitespace-nowrap`}
              onClick={() => setPricing("monthly")}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-4 gap-6">
          {/* Free */}
          <div className="px-6 pt-14 pb-10 rounded-3xl border-2 border-slateHigh dark:border-slateDark flex flex-col relative overflow-hidden hover:bg-slateHigh dark:hover:bg-navyDark duration-200 group">
            <div className="h-full ">
              <h2 className="text-2xl text-center font-bold text-blackText dark:text-white ">
                Free
              </h2>
              <div className="border border-slateHigh dark:border-blackText group-hover:border-blueLight dark:group-hover:border-slateDark my-5"></div>
              <h1 className="text-4xl text-blackText dark:text-white font-bold relative pl-4">
                <span className="text-xl absolute top-0 left-0">$</span>{" "}
                {freePirce} USD
              </h1>
              <p className="text-slateDark dark:text-slateMid text-sm">
                per person, per month
              </p>
              <ul className="text-slateDark dark:text-slateMid text-sm flex flex-col gap-4 my-10">
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>2 Images par day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Video Adds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>1 Ratio size</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4143 12.0002L18.7073 6.70719C19.0983 6.31719 19.0983 5.68325 18.7073 5.29325C18.3163 4.90225 17.6843 4.90225 17.2933 5.29325L12.0003 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68325 4.90225 6.31719 5.29325 6.70719L10.5862 12.0002L5.29325 17.2933C4.90225 17.6833 4.90225 18.3172 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0003 13.4142L17.2933 18.7072C17.4883 18.9022 17.7443 19.0002 18.0003 19.0002C18.2563 19.0002 18.5123 18.9022 18.7073 18.7072C19.0983 18.3172 19.0983 17.6833 18.7073 17.2933L13.4143 12.0002Z"
                        fill="#FF5858"
                      />
                    </svg>
                  </span>
                  <span>Bulk Create</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4143 12.0002L18.7073 6.70719C19.0983 6.31719 19.0983 5.68325 18.7073 5.29325C18.3163 4.90225 17.6843 4.90225 17.2933 5.29325L12.0003 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68325 4.90225 6.31719 5.29325 6.70719L10.5862 12.0002L5.29325 17.2933C4.90225 17.6833 4.90225 18.3172 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0003 13.4142L17.2933 18.7072C17.4883 18.9022 17.7443 19.0002 18.0003 19.0002C18.2563 19.0002 18.5123 18.9022 18.7073 18.7072C19.0983 18.3172 19.0983 17.6833 18.7073 17.2933L13.4143 12.0002Z"
                        fill="#FF5858"
                      />
                    </svg>
                  </span>
                  <span>Download Images</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4143 12.0002L18.7073 6.70719C19.0983 6.31719 19.0983 5.68325 18.7073 5.29325C18.3163 4.90225 17.6843 4.90225 17.2933 5.29325L12.0003 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68325 4.90225 6.31719 5.29325 6.70719L10.5862 12.0002L5.29325 17.2933C4.90225 17.6833 4.90225 18.3172 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0003 13.4142L17.2933 18.7072C17.4883 18.9022 17.7443 19.0002 18.0003 19.0002C18.2563 19.0002 18.5123 18.9022 18.7073 18.7072C19.0983 18.3172 19.0983 17.6833 18.7073 17.2933L13.4143 12.0002Z"
                        fill="#FF5858"
                      />
                    </svg>
                  </span>
                  <span>Live Support 24/7</span>
                </li>
              </ul>

              <button
                className="text-white bg-primaryColor py-4 w-full outline-none rounded-lg"
                onClick={() =>
                  handleNavigateWithBilling({
                    price: freePirce,
                    packageName: "free",
                  })
                }
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Starter */}
          <div className="px-6 pt-14 pb-10 rounded-3xl border-2 border-slateHigh dark:border-slateDark flex flex-col relative overflow-hidden hover:bg-slateHigh dark:hover:bg-navyDark duration-200 group">
            <div className="h-full ">
              <h2 className="text-2xl text-center font-bold text-blackText dark:text-white ">
                Starter
              </h2>
              <div className="border border-slateHigh dark:border-blackText group-hover:border-blueLight dark:group-hover:border-slateDark my-5"></div>
              <h1 className="text-4xl text-blackText dark:text-white font-bold relative pl-4">
                <span className="text-xl absolute top-0 left-0">$</span>{" "}
                {starterPirce} USD
              </h1>
              <p className="text-slateDark dark:text-slateMid text-sm">
                per person, per month
              </p>
              <ul className="text-slateDark dark:text-slateMid text-sm flex flex-col gap-4 my-10">
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>30 Images par day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>No Adds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Unlock all Aspect Ratios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Bulk Create</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Download Images</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Live Support 24/7</span>
                </li>
              </ul>

              <button
                className="text-white bg-primaryColor py-4 w-full outline-none rounded-lg"
                onClick={() =>
                  handleNavigateWithBilling({
                    price: starterPirce,
                    packageName: "sarter",
                  })
                }
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Premium */}
          <div className="px-6 pt-14 pb-10 rounded-3xl border-2  border-slateHigh dark:border-slateDark flex flex-col relative overflow-hidden bg-slateHigh dark:bg-navyDark duration-200 group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 py-2 px-6 bg-primaryColor text-white text-xs rounded-b-2xl">
              <span>Popular</span>
            </div>
            <div className="h-full ">
              <h2 className="text-2xl text-center font-bold text-blackText dark:text-white ">
                Premium
              </h2>
              <div className="border border-blueLight dark:border-slateDark my-5"></div>
              <h1 className="text-4xl text-blackText dark:text-white font-bold relative pl-4">
                <span className="text-xl absolute top-0 left-0">$</span>{" "}
                {premiumPirce} USD
              </h1>
              <p className="text-slateDark dark:text-slateMid text-sm">
                per person, per month
              </p>
              <ul className="text-slateDark dark:text-slateMid text-sm flex flex-col gap-4 my-10">
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>50 Images par day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>No Adds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Unlock all Aspect Ratios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Bulk Create</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Download Images</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Live Support 24/7</span>
                </li>
              </ul>

              <button
                className="text-white bg-primaryColor py-4 w-full outline-none rounded-lg"
                onClick={() =>
                  handleNavigateWithBilling({
                    price: premiumPirce,
                    packageName: "premium",
                  })
                }
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Business */}
          <div className="px-6 pt-14 pb-10 rounded-3xl border-2 border-slateHigh dark:border-slateDark flex flex-col relative overflow-hidden hover:bg-slateHigh dark:hover:bg-navyDark duration-200 group">
            <div className="h-full ">
              <h2 className="text-2xl text-center font-bold text-blackText dark:text-white ">
                Business
              </h2>
              <div className="border border-slateHigh dark:border-blackText group-hover:border-blueLight dark:group-hover:border-slateDark my-5"></div>
              <h1 className="text-4xl text-blackText dark:text-white font-bold relative pl-4">
                <span className="text-xl absolute top-0 left-0">$</span>
                {businessPirce} USD
              </h1>
              <p className="text-slateDark dark:text-slateMid text-sm">
                per person, per month
              </p>
              <ul className="text-slateDark dark:text-slateMid text-sm flex flex-col gap-4 my-10">
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>150 Images par day</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>No Adds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Unlock all Aspect Ratios</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Bulk Create</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Download Images</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99978 18.0002C8.99878 18.0002 8.99778 18.0002 8.99578 18.0002C8.72878 17.9992 8.47477 17.8922 8.28777 17.7022L4.28778 13.6402C3.89978 13.2462 3.90478 12.6132 4.29878 12.2262C4.69278 11.8392 5.32478 11.8432 5.71278 12.2372L9.00577 15.5812L18.2938 6.29423C18.6848 5.90323 19.3168 5.90323 19.7078 6.29423C20.0988 6.68423 20.0988 7.31823 19.7078 7.70823L9.70777 17.7082C9.51977 17.8952 9.26478 18.0002 8.99978 18.0002Z"
                        fill="#2CC672"
                      />
                    </svg>
                  </span>
                  <span>Live Support 24/7</span>
                </li>
              </ul>

              <button
                className="text-white bg-primaryColor py-4 w-full outline-none rounded-lg"
                onClick={() =>
                  handleNavigateWithBilling({
                    price: businessPirce,
                    packageName: "business",
                  })
                }
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
