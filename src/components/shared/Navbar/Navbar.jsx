import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../Assets/getImages";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = ({ fixedTop }) => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={`${
        scroll && !showMenu
          ? "dark:bg-darkNavbarBg bg-navbarBg backdrop-blur shadow-sm"
          : scroll
          ? "md:dark:bg-darkNavbarBg md:bg-navbarBg md:backdrop-blur md:shadow-sm"
          : ""
      } flex flex-wrap md:justify-center z-[70] w-full ${
        fixedTop ? "fixed top-0 left-0" : "md:shadow-sm"
      } text-sm px-4 py-5  dark:bg-gray-800 duration-300`}
    >
      <nav className="max-w-[74rem] w-full mx-auto  flex items-center justify-between ">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-36 lg:w-auto" />
          </Link>
        </div>
        <div className="block md:hidden">
          <button type="button" onClick={() => setShowMenu(true)}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.25"
                d="M29.375 5H10.625C6.875 5 5 6.875 5 10.625V29.375C5 33.125 6.875 35 10.625 35H29.375C33.125 35 35 33.125 35 29.375V10.625C35 6.875 33.125 5 29.375 5Z"
                fill="#555568"
              />
              <path
                d="M26.6667 16.25H13.3334C12.6434 16.25 12.0834 15.69 12.0834 15C12.0834 14.31 12.6434 13.75 13.3334 13.75H26.6667C27.3567 13.75 27.9167 14.31 27.9167 15C27.9167 15.69 27.3567 16.25 26.6667 16.25ZM27.9167 20C27.9167 19.31 27.3567 18.75 26.6667 18.75H13.3334C12.6434 18.75 12.0834 19.31 12.0834 20C12.0834 20.69 12.6434 21.25 13.3334 21.25H26.6667C27.3567 21.25 27.9167 20.69 27.9167 20ZM27.9167 25C27.9167 24.31 27.3567 23.75 26.6667 23.75H20C19.31 23.75 18.75 24.31 18.75 25C18.75 25.69 19.31 26.25 20 26.25H26.6667C27.3567 26.25 27.9167 25.69 27.9167 25Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="w-full hidden md:block">
          <ul className="flex items-center justify-end gap-6 lg:gap-10 text-blackText dark:text-slateLow font-dmSans text-lg lg:text-xl whitespace-nowrap">
            <li>
              <Link to="/generate">Generate</Link>
            </li>
            <li>
              <Link className="" to="/pricing">
                Go Pro
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                Project
              </Link>
            </li>
            <li>
              <Link className="" to="/">
                Log In
              </Link>
            </li>
            <li>
              <Link
                className="flex justify-center px-4 py-4 lg:px-6 lg:py-5 bg-primaryColor text-white rounded-lg text-center text-base lg:text-xl"
                to="/"
              >
                Create free account
              </Link>
            </li>

            <li>
              <ThemeToggler></ThemeToggler>
            </li>
          </ul>
        </div>
        <div
          className={`${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed top-0 left-0 right-0 bottom-0 h-full bg-white dark:bg-blackbg z-[999] duration-100 block md:hidden `}
        >
          <div className="h-full flex flex-col items-center justify-between p-4">
            <div className="w-full flex justify-end">
              <button type="button" onClick={() => setShowMenu(false)}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3833 5H10.6333C6.88334 5 5 6.86666 5 10.6167V29.3667C5 33.1167 6.88334 35 10.6333 35H29.3833C33.1333 35 35 33.1167 35 29.3667V10.6167C35 6.86666 33.1333 5 29.3833 5ZM25.8834 24.1166C26.3667 24.6 26.3667 25.4 25.8834 25.8834C25.6334 26.1334 25.3167 26.25 25 26.25C24.6833 26.25 24.3666 26.1334 24.1166 25.8834L20 21.7667L15.8834 25.8834C15.6334 26.1334 15.3167 26.25 15 26.25C14.6833 26.25 14.3666 26.1334 14.1166 25.8834C13.6333 25.4 13.6333 24.6 14.1166 24.1166L18.2333 20L14.1166 15.8834C13.6333 15.4 13.6333 14.6 14.1166 14.1166C14.6 13.6333 15.4 13.6333 15.8834 14.1166L20 18.2333L24.1166 14.1166C24.6 13.6333 25.4 13.6333 25.8834 14.1166C26.3667 14.6 26.3667 15.4 25.8834 15.8834L21.7667 20L25.8834 24.1166Z"
                    fill="#555568"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col justify-between items-center text-blackText dark:text-slateLow font-dmSans text-2xl lg:text-xl font-bold ">
              <ul className="flex flex-col gap-10">
                <li>
                  <Link to="/generate">Generate</Link>
                </li>
                <li>
                  <Link className="" to="/pricing">
                    Go Pro
                  </Link>
                </li>
                <li>
                  <Link className="" to="/">
                    Project
                  </Link>
                </li>
                <li>
                  <Link className="" to="/">
                    Log In
                  </Link>
                </li>

                <li>
                  <ThemeToggler></ThemeToggler>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-6 font-bold">
              <Link
                className="flex justify-center px-6 py-5 border border-primaryColor rounded-lg text-xl text-center text-primaryColor"
                to="/"
              >
                Login
              </Link>
              <Link
                className="flex justify-center px-6 py-5 bg-primaryColor text-white rounded-lg text-xl text-center"
                to="/"
              >
                Create free account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
