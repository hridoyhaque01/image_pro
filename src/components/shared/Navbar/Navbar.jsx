import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, user } from "../../../Assets/getImages";
import ThemeToggler from "../themeToggler/ThemeToggler";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  const isLoggedIn = true;

  return (
    <header
      className={`${
        scroll && !showMenu
          ? "dark:bg-darkNavbarBg bg-navbarBg backdrop-blur shadow-sm duration-300"
          : scroll
          ? "md:dark:bg-darkNavbarBg md:bg-navbarBg md:backdrop-blur md:shadow-sm"
          : ""
      } flex flex-wrap md:justify-center z-[70] w-full text-sm px-4 py-5 fixed top-0 left-0`}
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
              <Link className="" to="/contact-us">
                Contact us
              </Link>
            </li>

            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14.167 20.2521C13.711 21.0331 12.903 21.5001 12.005 21.5001C11.107 21.5001 10.298 21.0331 9.84295 20.2521C9.75295 20.0971 9.75295 19.9061 9.84195 19.7511C9.93095 19.5961 10.096 19.5001 10.276 19.5001H13.7359C13.9149 19.5001 14.0799 19.5961 14.1699 19.7511C14.2599 19.9061 14.257 20.0981 14.167 20.2521ZM20.3999 17.6901C20.3799 17.6601 18.5 15.2801 18.5 12.5001V9.00006C18.5 8.86406 18.495 8.73106 18.487 8.59806C18.478 8.45806 18.3839 8.38406 18.3439 8.35606C18.3079 8.33106 18.2129 8.28405 18.0899 8.32505C17.7559 8.43705 17.3979 8.49705 17.0249 8.49905C15.3239 8.51105 13.793 7.23006 13.541 5.54806C13.414 4.69606 13.5869 3.89006 13.9909 3.22206C14.0949 3.05006 14.0299 2.82106 13.8379 2.76506C12.8019 2.46006 11.6489 2.40105 10.4739 2.68005C7.51195 3.38405 5.50995 6.16906 5.50995 9.21406V12.5001C5.50995 15.2801 3.62995 17.6601 3.60995 17.6901C3.48995 17.8401 3.46995 18.0401 3.54995 18.2201C3.63995 18.3901 3.80995 18.5001 3.99995 18.5001H20C20.2 18.5001 20.37 18.3901 20.46 18.2201C20.54 18.0401 20.5199 17.8401 20.3999 17.6901ZM17 3.00006C15.895 3.00006 15 3.89506 15 5.00006C15 6.10506 15.895 7.00006 17 7.00006C18.105 7.00006 19 6.10506 19 5.00006C19 3.89506 18.105 3.00006 17 3.00006Z"
                        fill="#A0A1BB"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="hs-dropdown relative sm:inline-flex z-20">
                  <button
                    id="hs-dropdown-transform-style"
                    type="button"
                    className="hs-dropdown-toggle"
                  >
                    <img src={user} alt="" className="w-10 h-10 rounded-full" />
                  </button>
                  <div className="hs-dropdown-menu w-52 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10">
                    <div
                      className="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-right  bg-white dark:bg-blackbg border border-slateHigh dark:border-slateDark shadow-md rounded-lg  p-4"
                      aria-labelledby="hs-dropdown-transform-style"
                      data-hs-transition
                    >
                      <ul className="flex flex-col divide-y divide-slateHigh dark:divide-slateDark text-xl font-bold text-blackText dark:text-white leading-none ">
                        <li>
                          <Link to="/" className="pb-3 flex">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="py-3 flex">
                            Go Pro
                          </Link>
                        </li>
                        <li>
                          <Link to="/settings" className="py-3 flex">
                            Setting
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="pt-3 flex">
                            Log out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="" to="/">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex justify-center px-4 py-4 lg:px-6 lg:py-5 bg-primaryColor text-white rounded-lg text-center text-base lg:text-xl duration-300"
                    to="/"
                  >
                    Create free account
                  </Link>
                </li>
              </>
            )}

            <li>
              <ThemeToggler></ThemeToggler>
            </li>
          </ul>
        </div>
        <div
          className={`${
            showMenu ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed top-0 left-0 right-0 bottom-0 h-full bg-white dark:bg-blackbg z-[999] duration-300 block md:hidden `}
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
                  <Link className="" to="/contact-us">
                    Contact us
                  </Link>
                </li>
                <li>
                  <ThemeToggler></ThemeToggler>
                </li>
              </ul>
            </div>
            {isLoggedIn ? (
              <div className="flex flex-col gap-4 w-full p-4 bg-white dark:bg-black border border-fadeHigh dark:border-blackText rounded-xl">
                <div className="flex items-start gap-3 font-bold w-full p-3">
                  <div>
                    <img src={user} alt="" className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <h2 className="text-sm font-dmSans  text-blackText dark:text-white">
                      Mahmud Saimon
                    </h2>
                    <p className="text-xs text-slateDark">user@website.com</p>
                  </div>
                  <div className="ml-auto">
                    <button
                      type="button"
                      className="py-2 px-6 text-sm bg-primaryColor rounded-lg text-white"
                    >
                      Free
                    </button>
                  </div>
                </div>
                <Link
                  className="flex justify-center px-6 py-5 border border-primaryColor rounded-lg text-xl text-center text-primaryColor"
                  to="/"
                >
                  Logout
                </Link>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
