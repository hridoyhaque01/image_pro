import { Link } from "react-router-dom";
import { logoDark, logoWhite } from "../../../utils/getImages";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Navbar = () => {
  return (
    <header className="flex flex-wrap md:justify-center z-50 w-full fixed top-0 left-0 text-sm px-4 py-5 dark:bg-gray-800">
      <nav
        className="max-w-[74rem] w-full mx-auto  md:flex md:items-center md:justify-between "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none" href="#">
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
              className="hs-collapse-toggle p-2  bg-blackLight dark:bg-slateLight rounded-md outline-none"
              data-hs-collapse="#navbar-image-1"
              aria-controls="navbar-image-1"
              aria-label="Toggle navigation"
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hs-collapse-open:hidden w-4 h-4"
              >
                <path
                  d="M18 3.5H2C1.172 3.5 0.5 2.828 0.5 2C0.5 1.172 1.172 0.5 2 0.5H18C18.828 0.5 19.5 1.172 19.5 2C19.5 2.828 18.828 3.5 18 3.5ZM19.5 8C19.5 7.172 18.828 6.5 18 6.5H2C1.172 6.5 0.5 7.172 0.5 8C0.5 8.828 1.172 9.5 2 9.5H18C18.828 9.5 19.5 8.828 19.5 8ZM19.5 14C19.5 13.172 18.828 12.5 18 12.5H10C9.172 12.5 8.5 13.172 8.5 14C8.5 14.828 9.172 15.5 10 15.5H18C18.828 15.5 19.5 14.828 19.5 14Z"
                  className="fill-slateDark dark:fill-white"
                />
              </svg>

              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-1"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end text-blackText dark:text-slateLow font-dmSans text-lg lg:text-xl font-normal gap-4 lg:gap-6 xl:gap-8 duration-300">
            {/* <Link className="md:hidden lg:block" href="#" aria-current="page">
              With prompt
            </Link>
            <Link className="md:hidden lg:block" href="#">
              With Images
            </Link> */}
            <Link className="" href="#">
              Generate
            </Link>
            <Link className="" href="#">
              Go Pro
            </Link>
            <Link className="" href="#">
              Project
            </Link>
            <Link className="" href="#">
              Log In
            </Link>
            <Link
              className=" px-4 py-4 lg:px-6  lg:py-5 bg-primaryColor text-white rounded-lg"
              href="#"
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
