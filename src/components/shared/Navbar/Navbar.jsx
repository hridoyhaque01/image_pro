import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoDark, logoWhite } from "../../../utils/getImages";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={`${
        scroll ? "dark:bg-darkNavbarBg bg-navbarBg backdrop-blur" : ""
      } flex flex-wrap md:justify-center z-50 w-full fixed top-0 left-0 text-sm px-4 py-5 dark:bg-gray-800 duration-300`}
    >
      <nav
        className="max-w-[74rem] w-full mx-auto  md:flex md:items-center md:justify-between "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none" to="/">
            <img
              src={logoWhite}
              alt=""
              className="w-36 lg:w-auto  block dark:hidden"
            />
            <img
              src={logoDark}
              alt=""
              className="w-36 lg:w-auto hidden dark:block"
            />
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle outline-none"
              data-hs-collapse="#navbar-image-1"
              aria-controls="navbar-image-1"
              aria-label="Toggle navigation"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hs-collapse-open:hidden"
              >
                <path
                  opacity="0.25"
                  d="M29.375 5H10.625C6.875 5 5 6.875 5 10.625V29.375C5 33.125 6.875 35 10.625 35H29.375C33.125 35 35 33.125 35 29.375V10.625C35 6.875 33.125 5 29.375 5Z"
                  fill="#555568"
                  className="fill-blueLight dark:fill-slateDark"
                />
                <path
                  d="M26.6667 16.25H13.3334C12.6434 16.25 12.0834 15.69 12.0834 15C12.0834 14.31 12.6434 13.75 13.3334 13.75H26.6667C27.3567 13.75 27.9167 14.31 27.9167 15C27.9167 15.69 27.3567 16.25 26.6667 16.25ZM27.9167 20C27.9167 19.31 27.3567 18.75 26.6667 18.75H13.3334C12.6434 18.75 12.0834 19.31 12.0834 20C12.0834 20.69 12.6434 21.25 13.3334 21.25H26.6667C27.3567 21.25 27.9167 20.69 27.9167 20ZM27.9167 25C27.9167 24.31 27.3567 23.75 26.6667 23.75H20C19.31 23.75 18.75 24.31 18.75 25C18.75 25.69 19.31 26.25 20 26.25H26.6667C27.3567 26.25 27.9167 25.69 27.9167 25Z"
                  className="fill-blackText dark:fill-white "
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hs-collapse-open:block hidden"
              >
                <path
                  d="M29.3833 5H10.6333C6.88334 5 5 6.86666 5 10.6167V29.3667C5 33.1167 6.88334 35 10.6333 35H29.3833C33.1333 35 35 33.1167 35 29.3667V10.6167C35 6.86666 33.1333 5 29.3833 5ZM25.8834 24.1166C26.3667 24.6 26.3667 25.4 25.8834 25.8834C25.6334 26.1334 25.3167 26.25 25 26.25C24.6833 26.25 24.3666 26.1334 24.1166 25.8834L20 21.7667L15.8834 25.8834C15.6334 26.1334 15.3167 26.25 15 26.25C14.6833 26.25 14.3666 26.1334 14.1166 25.8834C13.6333 25.4 13.6333 24.6 14.1166 24.1166L18.2333 20L14.1166 15.8834C13.6333 15.4 13.6333 14.6 14.1166 14.1166C14.6 13.6333 15.4 13.6333 15.8834 14.1166L20 18.2333L24.1166 14.1166C24.6 13.6333 25.4 13.6333 25.8834 14.1166C26.3667 14.6 26.3667 15.4 25.8834 15.8834L21.7667 20L25.8834 24.1166Z"
                  fill="#555568"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end bg-white dark:bg-blackbg md:dark:bg-transparent md:bg-transparent text-blackText dark:text-slateLow font-dmSans text-lg lg:text-xl font-normal gap-4 lg:gap-6 xl:gap-8 duration-300">
            {/* <Link className="md:hidden lg:block" to="/" aria-current="page">
              With prompt
            </Link>
            <Link className="md:hidden lg:block" to="/">
              With Images
            </Link> */}
            <Link className="" to="/">
              Generate
            </Link>
            <Link className="" to="/pricing">
              Go Pro
            </Link>
            <Link className="" to="/">
              Project
            </Link>
            <Link className="" to="/">
              Log In
            </Link>
            <Link
              className=" px-4 py-4 lg:px-6  lg:py-5 bg-primaryColor text-white rounded-lg"
              to="/"
            >
              Create free account
            </Link>
            <ThemeToggler></ThemeToggler>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
