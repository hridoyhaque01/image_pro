import React from "react";

function Faq() {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 md:px-24 pb-20 md:pb-32 lg:pb-40">
      <div className="mb-4 sm:mb-8 lg:mb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blackText dark:text-slateLow duration-300">
          Frequently Asked Questions
        </h1>
      </div>
      <div>
        <div className="hs-accordion-group flex flex-col gap-4">
          <div className="hs-accordion bg-navySemi shadow-md rounded-xl border border-blueLight dark:border-navyDark bg-white dark:bg-blackHigh p-4 md:p-6">
            <button
              className="hs-accordion-toggle group  flex justify-between items-center text-left w-full text-blackText dark:text-white text-base md:text-2xl font-bold transition gap-6"
              aria-controls=""
            >
              Can I use created images for commercial projects?
              <svg
                width="28"
                height="4"
                viewBox="0 0 28 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden hs-accordion-active:block w-4 md:w-7"
              >
                <path
                  d="M25.6667 3.66683H2.33335C1.41335 3.66683 0.666687 2.92016 0.666687 2.00016C0.666687 1.08016 1.41335 0.333496 2.33335 0.333496H25.6667C26.5867 0.333496 27.3334 1.08016 27.3334 2.00016C27.3334 2.92016 26.5867 3.66683 25.6667 3.66683Z"
                  fill="#5454C0"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block hs-accordion-active:hidden w-4 md:w-7"
              >
                <path
                  d="M25.6667 12.3332H15.6667V2.33317C15.6667 1.41317 14.92 0.666504 14 0.666504C13.08 0.666504 12.3334 1.41317 12.3334 2.33317V12.3332H2.33335C1.41335 12.3332 0.666687 13.0798 0.666687 13.9998C0.666687 14.9198 1.41335 15.6665 2.33335 15.6665H12.3334V25.6665C12.3334 26.5865 13.08 27.3332 14 27.3332C14.92 27.3332 15.6667 26.5865 15.6667 25.6665V15.6665H25.6667C26.5867 15.6665 27.3334 14.9198 27.3334 13.9998C27.3334 13.0798 26.5867 12.3332 25.6667 12.3332Z"
                  fill="#282546"
                />
              </svg>
            </button>
            <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
              <p className="mt-6 text-slateDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="hs-accordion bg-navySemi shadow-md rounded-xl border border-blueLight dark:border-navyDark bg-white dark:bg-blackHigh p-4 md:p-6">
            <button
              className="hs-accordion-toggle group  flex justify-between items-center text-left w-full text-blackText dark:text-white text-base md:text-2xl font-bold transition gap-6"
              aria-controls=""
            >
              How to generate beautiful AI Images?
              <svg
                width="28"
                height="4"
                viewBox="0 0 28 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden hs-accordion-active:block w-4 md:w-7"
              >
                <path
                  d="M25.6667 3.66683H2.33335C1.41335 3.66683 0.666687 2.92016 0.666687 2.00016C0.666687 1.08016 1.41335 0.333496 2.33335 0.333496H25.6667C26.5867 0.333496 27.3334 1.08016 27.3334 2.00016C27.3334 2.92016 26.5867 3.66683 25.6667 3.66683Z"
                  fill="#5454C0"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block hs-accordion-active:hidden w-4 md:w-7"
              >
                <path
                  d="M25.6667 12.3332H15.6667V2.33317C15.6667 1.41317 14.92 0.666504 14 0.666504C13.08 0.666504 12.3334 1.41317 12.3334 2.33317V12.3332H2.33335C1.41335 12.3332 0.666687 13.0798 0.666687 13.9998C0.666687 14.9198 1.41335 15.6665 2.33335 15.6665H12.3334V25.6665C12.3334 26.5865 13.08 27.3332 14 27.3332C14.92 27.3332 15.6667 26.5865 15.6667 25.6665V15.6665H25.6667C26.5867 15.6665 27.3334 14.9198 27.3334 13.9998C27.3334 13.0798 26.5867 12.3332 25.6667 12.3332Z"
                  fill="#282546"
                />
              </svg>
            </button>
            <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
              <p className="mt-6 text-slateDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="hs-accordion bg-navySemi shadow-md rounded-xl border border-blueLight dark:border-navyDark bg-white dark:bg-blackHigh p-4 md:p-6">
            <button
              className="hs-accordion-toggle group  flex justify-between items-center text-left w-full text-blackText dark:text-white text-base md:text-2xl font-bold transition gap-6"
              aria-controls=""
            >
              Is ImagePro really free?
              <svg
                width="28"
                height="4"
                viewBox="0 0 28 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden hs-accordion-active:block w-4 md:w-7"
              >
                <path
                  d="M25.6667 3.66683H2.33335C1.41335 3.66683 0.666687 2.92016 0.666687 2.00016C0.666687 1.08016 1.41335 0.333496 2.33335 0.333496H25.6667C26.5867 0.333496 27.3334 1.08016 27.3334 2.00016C27.3334 2.92016 26.5867 3.66683 25.6667 3.66683Z"
                  fill="#5454C0"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block hs-accordion-active:hidden w-4 md:w-7"
              >
                <path
                  d="M25.6667 12.3332H15.6667V2.33317C15.6667 1.41317 14.92 0.666504 14 0.666504C13.08 0.666504 12.3334 1.41317 12.3334 2.33317V12.3332H2.33335C1.41335 12.3332 0.666687 13.0798 0.666687 13.9998C0.666687 14.9198 1.41335 15.6665 2.33335 15.6665H12.3334V25.6665C12.3334 26.5865 13.08 27.3332 14 27.3332C14.92 27.3332 15.6667 26.5865 15.6667 25.6665V15.6665H25.6667C26.5867 15.6665 27.3334 14.9198 27.3334 13.9998C27.3334 13.0798 26.5867 12.3332 25.6667 12.3332Z"
                  fill="#282546"
                />
              </svg>
            </button>
            <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
              <p className="mt-6 text-slateDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="hs-accordion bg-navySemi shadow-md rounded-xl border border-blueLight dark:border-navyDark bg-white dark:bg-blackHigh p-4 md:p-6">
            <button
              className="hs-accordion-toggle group  flex justify-between items-center text-left w-full text-blackText dark:text-white text-base md:text-2xl font-bold transition gap-6"
              aria-controls=""
            >
              Can I create NSFW content?
              <svg
                width="28"
                height="4"
                viewBox="0 0 28 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden hs-accordion-active:block w-4 md:w-7"
              >
                <path
                  d="M25.6667 3.66683H2.33335C1.41335 3.66683 0.666687 2.92016 0.666687 2.00016C0.666687 1.08016 1.41335 0.333496 2.33335 0.333496H25.6667C26.5867 0.333496 27.3334 1.08016 27.3334 2.00016C27.3334 2.92016 26.5867 3.66683 25.6667 3.66683Z"
                  fill="#5454C0"
                />
              </svg>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block hs-accordion-active:hidden w-4 md:w-7"
              >
                <path
                  d="M25.6667 12.3332H15.6667V2.33317C15.6667 1.41317 14.92 0.666504 14 0.666504C13.08 0.666504 12.3334 1.41317 12.3334 2.33317V12.3332H2.33335C1.41335 12.3332 0.666687 13.0798 0.666687 13.9998C0.666687 14.9198 1.41335 15.6665 2.33335 15.6665H12.3334V25.6665C12.3334 26.5865 13.08 27.3332 14 27.3332C14.92 27.3332 15.6667 26.5865 15.6667 25.6665V15.6665H25.6667C26.5867 15.6665 27.3334 14.9198 27.3334 13.9998C27.3334 13.0798 26.5867 12.3332 25.6667 12.3332Z"
                  fill="#282546"
                />
              </svg>
            </button>
            <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
              <p className="mt-6 text-slateDark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
