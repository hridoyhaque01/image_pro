import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../Assets/getImages";

function Footer() {
  return (
    <footer className="px-6 py-10 lg:py-20 bg-navyDark text-slateSemi">
      <div className="max-w-[74rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="max-w-[276px]">
            <div>
              <img src={logo} alt="" />
            </div>
            <p className="text-base lg:text-xl leading-6 mt-6 md:mt-10 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </p>
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 5.29412C23.1166 5.69559 22.1644 5.95941 21.1778 6.08559C22.1874 5.47765 22.9675 4.51412 23.3346 3.35559C22.3824 3.92912 21.327 4.33059 20.2141 4.56C19.3078 3.57353 18.0344 3 16.5889 3C13.8929 3 11.6902 5.20235 11.6902 7.92088C11.6902 8.31088 11.7361 8.68941 11.8164 9.045C7.73231 8.83853 4.0956 6.87706 1.67495 3.90618C1.25048 4.62882 1.00956 5.47765 1.00956 6.37235C1.00956 8.08147 1.86998 9.59559 3.20077 10.4559C2.38623 10.4559 1.62906 10.2265 0.963671 9.88235V9.91676C0.963671 12.3026 2.66157 14.2985 4.91013 14.7459C4.18822 14.9434 3.43032 14.9709 2.69599 14.8262C3.00758 15.804 3.61782 16.6596 4.44094 17.2728C5.26405 17.8859 6.25864 18.2257 7.2849 18.2444C5.54527 19.6214 3.38891 20.3657 1.17017 20.355C0.780115 20.355 0.390057 20.3321 0 20.2862C2.17973 21.6856 4.77247 22.5 7.54876 22.5C16.5889 22.5 21.5564 14.9982 21.5564 8.49441C21.5564 8.27647 21.5564 8.07 21.5449 7.85206C22.5086 7.16382 23.3346 6.29206 24 5.29412Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_577_56818)">
                      <path
                        d="M24 12.0301C24 5.38947 18.624 0 12 0C5.376 0 0 5.38947 0 12.0301C0 17.8526 4.128 22.7007 9.6 23.8195V15.6391H7.2V12.0301H9.6V9.02256C9.6 6.70075 11.484 4.81203 13.8 4.81203H16.8V8.42105H14.4C13.74 8.42105 13.2 8.96241 13.2 9.62406V12.0301H16.8V15.6391H13.2V24C19.26 23.3985 24 18.2737 24 12.0301Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_56818">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_577_56820)">
                      <path
                        d="M11.944 3.26667e-05C8.77112 0.0148396 5.73324 1.28566 3.4949 3.53449C1.25656 5.78332 -3.4549e-05 8.82711 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2349 3.51472 20.4853C5.76515 22.7358 8.8174 24 12 24C15.1826 24 18.2348 22.7358 20.4853 20.4853C22.7357 18.2349 24 15.1826 24 12C24 8.81743 22.7357 5.76519 20.4853 3.51475C18.2348 1.26431 15.1826 3.26667e-05 12 3.26667e-05C11.9813 -1.08889e-05 11.9627 -1.08889e-05 11.944 3.26667e-05ZM16.906 7.22403C17.006 7.22203 17.227 7.24703 17.371 7.36403C17.4667 7.44713 17.5277 7.56311 17.542 7.68903C17.558 7.78203 17.578 7.99503 17.562 8.16103C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.96403C14.243 9.90203 14.139 9.92303 14.064 9.94003C13.958 9.96403 12.271 11.08 9.003 13.285C8.523 13.615 8.09 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.566 12.32 4.864 12.099 5.432 11.873C8.93 10.349 11.262 9.34403 12.43 8.85903C15.762 7.47303 16.455 7.23203 16.906 7.22403Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_56820">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_577_56823)">
                      <path
                        d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_577_56823">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-base md:text-lg lg:text-xl text-white font-bold mb-4 md:mb-10">
              Company
            </h2>
            <ul className="text-sm md:text-base lg:text-xl flex flex-col gap-3 md:gap-6 whitespace-nowrap">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About us</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-base md:text-lg lg:text-xl text-white font-bold mb-4 md:mb-10">
              Support Us
            </h2>
            <ul className="text-sm md:text-base lg:text-xl flex flex-col gap-3 md:gap-6 whitespace-nowrap">
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Help center</Link>
              </li>
              <li>
                <Link to="">FAQ`s</Link>
              </li>
              <li>
                <Link to="">Product Updates</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-base md:text-lg lg:text-xl text-white font-bold mb-4 md:mb-10">
              Resources
            </h2>
            <ul className="text-sm md:text-base lg:text-xl flex flex-col gap-3 md:gap-6 whitespace-nowrap">
              <li>
                <Link to="">Community</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
              <li>
                <Link to="">Terms of service</Link>
              </li>
              <li>
                <Link to="">Product Updates</Link>
              </li>
            </ul>
          </div>
          <div className="text-sm md:text-base lg:text-xl max-w-[240px]">
            <h2 className="text-base md:text-lg lg:text-xl text-white font-bold mb-4 md:mb-10">
              Company
            </h2>
            <p>101 Marlow Street. #12-05 Clife Parkview. Singapore 059020.</p>
            <h2 className="text-xl text-white font-bold my-6">Inquiries</h2>
            <p className="md:text-sm lg:text-xl">+88 01234 567 890</p>
            <p>user@website.com</p>
          </div>
        </div>

        <div className="text-white text-center mt-12 md:mt-20">
          <p>
            © 2023
            <Link to="/" className="text-primaryColor font-bold">
              Image Pro
            </Link>{" "}
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
