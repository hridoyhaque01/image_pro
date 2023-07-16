import React from "react";
import Signin from "../forms/Signin";
import Signup from "../forms/Signup";

function AuthModal({ type, setType }) {
  const handleType = () => {
    if (type === "signin") {
      setType("signup");
    } else {
      setType("signin");
    }
  };

  return (
    <div
      id="auth-modal"
      className="hs-overlay hs-overlay-open:bg-black-70 hidden w-full h-full fixed top-0 left-0 z-[80] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100  hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="flex flex-col bg-white dark:bg-black w-[31rem] max-w-[31rem] shadow-sm rounded-xl  dark:border-gray-700 dark:shadow-slate-700/[.7] py-16 px-10 mx-auto relative">
          <div className="absolute top-5 right-5">
            <button
              className="p-2 rounded-full bg-slateLow dark:bg-slateDark"
              data-hs-overlay="#auth-modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8.94251 8L12.4712 4.47132C12.7318 4.21132 12.7318 3.78869 12.4712 3.52869C12.2105 3.26802 11.7892 3.26802 11.5285 3.52869L7.99984 7.05734L4.47118 3.52869C4.21051 3.26802 3.78917 3.26802 3.52851 3.52869C3.26784 3.78869 3.26784 4.21132 3.52851 4.47132L7.05717 8L3.52851 11.5287C3.26784 11.7887 3.26784 12.2113 3.52851 12.4713C3.65851 12.6013 3.82917 12.6667 3.99984 12.6667C4.17051 12.6667 4.34118 12.6013 4.47118 12.4713L7.99984 8.94267L11.5285 12.4713C11.6585 12.6013 11.8292 12.6667 11.9998 12.6667C12.1705 12.6667 12.3412 12.6013 12.4712 12.4713C12.7318 12.2113 12.7318 11.7887 12.4712 11.5287L8.94251 8Z"
                  className="fill-slateDark dark:fill-white"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="mb-6 lg:mb-10">
              <h2 className="text-2xl lg:text-4xl leading-none font-bold text-blackText dark:text-white">
                Welcome back!
              </h2>
              <p className="text-slateDark dark:text-white mt-2">
                Start managing your finance faster and better
              </p>
            </div>
            {type === "signin" ? <Signin></Signin> : <Signup></Signup>}
            <div className="flex flex-col justify-center items-center mt-8">
              <p className="text-sm text-slateSemi">Or Continue With</p>
              <div className="flex items-center gap-3 mt-3 mb-8">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-fadeHigh dark:border-blackText bg-fadeMid dark:bg-black rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_10_15238)">
                      <path
                        d="M19.2446 8.26138L11.0868 8.26099C10.7266 8.26099 10.4346 8.55294 10.4346 8.91317V11.5192C10.4346 11.8794 10.7266 12.1714 11.0868 12.1714H15.6807C15.1777 13.4769 14.2388 14.5702 13.0409 15.2649L14.9998 18.6559C18.142 16.8386 19.9998 13.65 19.9998 10.0805C19.9998 9.57227 19.9623 9.20895 19.8874 8.79985C19.8304 8.48903 19.5606 8.26138 19.2446 8.26138Z"
                        fill="#167EE6"
                      />
                      <path
                        d="M9.99957 16.0871C7.75137 16.0871 5.78871 14.8587 4.73461 13.041L1.34375 14.9955C3.06934 17.9862 6.30191 20.0001 9.99957 20.0001C11.8135 20.0001 13.5251 19.5117 14.9996 18.6606V18.6559L13.0407 15.2649C12.1447 15.7846 11.1078 16.0871 9.99957 16.0871Z"
                        fill="#12B347"
                      />
                      <path
                        d="M15 18.6606V18.6559L13.0411 15.2649C12.1451 15.7845 11.1083 16.087 10 16.087V20.0001C11.8139 20.0001 13.5256 19.5117 15 18.6606Z"
                        fill="#0F993E"
                      />
                      <path
                        d="M3.91305 9.99999C3.91305 8.89183 4.21547 7.85507 4.73504 6.95909L1.34418 5.00464C0.488359 6.47444 0 8.1814 0 9.99999C0 11.8186 0.488359 13.5255 1.34418 14.9953L4.73504 13.0409C4.21547 12.1449 3.91305 11.1082 3.91305 9.99999Z"
                        fill="#FFD500"
                      />
                      <path
                        d="M9.99957 3.91305C11.4656 3.91305 12.8123 4.43398 13.8641 5.30051C14.1236 5.51426 14.5007 5.49883 14.7384 5.26113L16.5849 3.41465C16.8546 3.14496 16.8354 2.70352 16.5473 2.45359C14.785 0.924726 12.492 0 9.99957 0C6.30191 0 3.06934 2.01395 1.34375 5.00465L4.73461 6.9591C5.78871 5.14141 7.75137 3.91305 9.99957 3.91305Z"
                        fill="#FF4B26"
                      />
                      <path
                        d="M13.8645 5.30051C14.124 5.51426 14.5012 5.49883 14.7389 5.26113L16.5854 3.41465C16.855 3.14496 16.8358 2.70352 16.5477 2.45359C14.7854 0.924688 12.4925 0 10 0V3.91305C11.466 3.91305 12.8127 4.43398 13.8645 5.30051Z"
                        fill="#D93F21"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_15238">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm text-slateDark dark:text-slateMid">
                    Google
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-fadeHigh dark:border-blackText bg-fadeMid dark:bg-black rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_10_3808)">
                      <path
                        d="M20.5 10C20.5 14.9914 16.843 19.1285 12.0625 19.8785V12.8906H14.3926L14.8359 10H12.0625V8.12422C12.0625 7.3332 12.45 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8086 3.90625 12.7145 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C4.15703 19.1285 0.5 14.9914 0.5 10C0.5 4.47734 4.97734 0 10.5 0C16.0227 0 20.5 4.47734 20.5 10Z"
                        fill="#1877F2"
                      />
                      <path
                        d="M14.3926 12.8906L14.8359 10H12.0625V8.12418C12.0625 7.33336 12.4499 6.5625 13.6921 6.5625H14.9531V4.10156C14.9531 4.10156 13.8088 3.90625 12.7146 3.90625C10.4304 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.44664 19.9584 9.96844 20 10.5 20C11.0316 20 11.5534 19.9584 12.0625 19.8785V12.8906H14.3926Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_3808">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm text-slateDark dark:text-slateMid">
                    Facebook
                  </span>
                </button>
              </div>
              <p className="text-slateDark dark:text-fadeSemi">
                If you haven't account?{" "}
                <button
                  className="text-primaryColor font-bold"
                  onClick={handleType}
                >
                  {type === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
