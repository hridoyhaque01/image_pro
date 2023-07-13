import React, { useState } from "react";
import ProjectModal from "../../components/shared/modals/ProjectModal";
import UpgradeProfile from "../../components/shared/upgradeProfile/UpgradeProfile";

function Generate() {
  // const thumbnailRef = useRef();
  const [imagePrompt, setImagePrompt] = useState(null);
  const [imagePromptPreview, setImagePromptPreview] = useState(null);
  const [category, setCategory] = useState("");
  const [ratio, setRatio] = useState("");
  const [projects, setProjects] = useState([]);
  const [showMessages, setShowMessages] = useState();

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/png"
    ) {
      setImagePrompt(file);
      const imageURL = URL.createObjectURL(file);
      setImagePromptPreview(imageURL);
    } else {
      setImagePrompt(null);
    }
  };

  return (
    <section className="bg-white px-6 pt-28 md:pt-32 lg:pt-36 pb-10 dark:bg-blackbg text-gray-600 body-font overflow-auto h-screen">
      <div className="max-w-[74rem] mx-auto h-full">
        <div className="grid grid-cols-12 gap-6 items-center h-full">
          <div className="col-span-4 flex flex-col justify-between gap-6 h-full bg-fadeMid dark:bg-blackHigh p-4 rounded-2xl overflow-auto generate-option">
            <div className="hs-accordion-group flex flex-col gap-4">
              {/* image prompt  */}
              <div
                className="hs-accordion bg-white dark:bg-blackText border border-fadeSemi dark:border-blackText rounded-lg"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group flex justify-between items-center text-left w-full  text-blackText dark:text-white text-base md:text-xl font-bold transition gap-6 p-4 "
                  aria-controls=""
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 3.25H6C3.582 3.25 2.25 4.582 2.25 7V17C2.25 19.418 3.582 20.75 6 20.75H18C20.418 20.75 21.75 19.418 21.75 17V7C21.75 4.582 20.418 3.25 18 3.25ZM6 4.75H18C19.577 4.75 20.25 5.423 20.25 7V14.25L15.71 9.70996C15.32 9.31996 14.68 9.31996 14.29 9.70996L9.34998 14.6499C9.15998 14.8399 8.84002 14.8399 8.65002 14.6499L7.70996 13.71C7.31996 13.32 6.68004 13.32 6.29004 13.71L3.75 16.25V7C3.75 5.423 4.423 4.75 6 4.75ZM6.75 9C6.75 8.31 7.30404 7.75 7.99304 7.75H8.00305C8.69205 7.75 9.25098 8.31 9.25098 9C9.25098 9.69 8.69305 10.25 8.00305 10.25C7.31405 10.25 6.75 9.69 6.75 9Z"
                        className="fill-slateSemi dark:fill-white"
                      />
                    </svg>
                    <span>Images</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 hs-accordion-active:rotate-180 duration-200"
                  >
                    <path
                      d="M12.0003 15.0003C11.7443 15.0003 11.4883 14.9023 11.2933 14.7073L7.29325 10.7073C6.90225 10.3163 6.90225 9.68425 7.29325 9.29325C7.68425 8.90225 8.31631 8.90225 8.70731 9.29325L12.0003 12.5862L15.2933 9.29325C15.6842 8.90225 16.3163 8.90225 16.7073 9.29325C17.0983 9.68425 17.0983 10.3163 16.7073 10.7073L12.7073 14.7073C12.5123 14.9023 12.2563 15.0003 12.0003 15.0003Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <input
                        type="file"
                        className="absolute opacity-0 invisible"
                        id="imagePrompt"
                        onChange={handleProfileChange}
                      />
                      <label
                        htmlFor="imagePrompt"
                        className="w-full h-20 bg-fadeMid dark:bg-slateDark rounded-lg flex items-center justify-center cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <path
                            d="M25.3335 15.1668H17.3335V7.16683C17.3335 6.43083 16.7362 5.8335 16.0002 5.8335C15.2642 5.8335 14.6668 6.43083 14.6668 7.16683V15.1668H6.66683C5.93083 15.1668 5.3335 15.7642 5.3335 16.5002C5.3335 17.2362 5.93083 17.8335 6.66683 17.8335H14.6668V25.8335C14.6668 26.5695 15.2642 27.1668 16.0002 27.1668C16.7362 27.1668 17.3335 26.5695 17.3335 25.8335V17.8335H25.3335C26.0695 17.8335 26.6668 17.2362 26.6668 16.5002C26.6668 15.7642 26.0695 15.1668 25.3335 15.1668Z"
                            className="fill-slateSemi dark:fill-white p-2"
                          />
                        </svg>
                      </label>
                    </div>
                    {imagePromptPreview && (
                      <div className="w-full h-20 rounded-lg overflow-hidden">
                        <img
                          src={imagePromptPreview}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* category prompt  */}
              <div
                className="hs-accordion bg-white dark:bg-blackText border border-fadeSemi dark:border-blackText rounded-lg"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group flex justify-between items-center text-left w-full  text-blackText dark:text-white text-base md:text-xl font-bold transition gap-6 p-4 "
                  aria-controls=""
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.19 17.59L13.6 20.65C12.59 21.12 11.41 21.12 10.4 20.65L3.81 17.59C2.73 17.09 2.73 15.55 3.81 15.05L3.95001 14.99L9.76999 17.68C10.47 18.01 11.22 18.18 12 18.18C12.78 18.18 13.53 18.01 14.23 17.68L20.05 14.99L20.19 15.05C21.27 15.55 21.27 17.09 20.19 17.59ZM20.19 10.72L20.06 10.66L15.4 12.83L14.23 13.37C13.53 13.69 12.78 13.86 12 13.86C11.22 13.86 10.47 13.69 9.76999 13.37L8.60001 12.83L3.94 10.66L3.81 10.72C2.73 11.23 2.73 12.77 3.81 13.27L5.73001 14.16L10.4 16.32C10.91 16.56 11.45 16.68 12 16.68C12.55 16.68 13.09 16.56 13.6 16.32L18.27 14.16L20.19 13.27C21.27 12.77 21.27 11.23 20.19 10.72ZM20.19 6.41L13.6 3.35001C13.09 3.12001 12.55 3 12 3C11.45 3 10.91 3.12001 10.4 3.35001L3.81 6.41C2.73 6.91 2.73 8.45001 3.81 8.95001L3.94 9.01001L4.82999 9.42001L5.72 9.84L10.4 12.01C10.91 12.24 11.45 12.36 12 12.36C12.55 12.36 13.09 12.24 13.6 12.01L18.28 9.84L19.17 9.42001L20.06 9.01001L20.19 8.95001C21.27 8.45001 21.27 6.91 20.19 6.41Z"
                        className="fill-slateSemi dark:fill-white"
                      />
                    </svg>
                    <span>Category</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 hs-accordion-active:rotate-180 duration-200"
                  >
                    <path
                      d="M12.0003 15.0003C11.7443 15.0003 11.4883 14.9023 11.2933 14.7073L7.29325 10.7073C6.90225 10.3163 6.90225 9.68425 7.29325 9.29325C7.68425 8.90225 8.31631 8.90225 8.70731 9.29325L12.0003 12.5862L15.2933 9.29325C15.6842 8.90225 16.3163 8.90225 16.7073 9.29325C17.0983 9.68425 17.0983 10.3163 16.7073 10.7073L12.7073 14.7073C12.5123 14.9023 12.2563 15.0003 12.0003 15.0003Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
                  <ul className="p-4 flex flex-col text-xl font-bold text-blackText dark:text-white divide-y divide-fadeHigh">
                    <li
                      className="pb-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Art")}
                    >
                      Art
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Illustrations")}
                    >
                      Illustrations
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Novelistic")}
                    >
                      Novelistic
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Pen & Ink")}
                    >
                      Pen & Ink
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Magic")}
                    >
                      Magic
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("3D Render")}
                    >
                      3D Render
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Animation")}
                    >
                      Animation
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Digital Art")}
                    >
                      Digital Art
                    </li>
                    <li
                      className="py-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Cinematic")}
                    >
                      Cinematic
                    </li>
                    <li
                      className="pt-4 w-full cursor-pointer hs-accordion-toggle"
                      onClick={() => setCategory("Anime")}
                    >
                      Anime
                    </li>
                  </ul>
                </div>
              </div>
              {/* ratio */}
              <div
                className="hs-accordion bg-white dark:bg-blackText border border-fadeSemi dark:border-blackText rounded-lg"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group flex justify-between items-center text-left w-full  text-blackText dark:text-white text-base md:text-xl font-bold transition gap-6 p-4 "
                  aria-controls=""
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 9H17.5C15.958 9 15 8.042 15 6.5V3C15 2.448 15.447 2 16 2C16.553 2 17 2.448 17 3V6.5C17 6.949 17.052 7 17.5 7H21C21.553 7 22 7.448 22 8C22 8.552 21.553 9 21 9ZM9 6.5V3C9 2.448 8.553 2 8 2C7.447 2 7 2.448 7 3V6.5C7 6.949 6.948 7 6.5 7H3C2.447 7 2 7.448 2 8C2 8.552 2.447 9 3 9H6.5C8.042 9 9 8.042 9 6.5ZM9 21V17.5C9 15.958 8.042 15 6.5 15H3C2.447 15 2 15.448 2 16C2 16.552 2.447 17 3 17H6.5C6.948 17 7 17.051 7 17.5V21C7 21.552 7.447 22 8 22C8.553 22 9 21.552 9 21ZM17 21V17.5C17 17.051 17.052 17 17.5 17H21C21.553 17 22 16.552 22 16C22 15.448 21.553 15 21 15H17.5C15.958 15 15 15.958 15 17.5V21C15 21.552 15.447 22 16 22C16.553 22 17 21.552 17 21Z"
                        className="fill-slateSemi dark:fill-white"
                      />
                    </svg>

                    <span>Ratio</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 hs-accordion-active:rotate-180 duration-200"
                  >
                    <path
                      d="M12.0003 15.0003C11.7443 15.0003 11.4883 14.9023 11.2933 14.7073L7.29325 10.7073C6.90225 10.3163 6.90225 9.68425 7.29325 9.29325C7.68425 8.90225 8.31631 8.90225 8.70731 9.29325L12.0003 12.5862L15.2933 9.29325C15.6842 8.90225 16.3163 8.90225 16.7073 9.29325C17.0983 9.68425 17.0983 10.3163 16.7073 10.7073L12.7073 14.7073C12.5123 14.9023 12.2563 15.0003 12.0003 15.0003Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
                  <ul className="p-4 flex flex-col text-xl font-bold text-blackText dark:text-white divide-y divide-fadeHigh">
                    <li
                      className="pb-4 w-full flex items-center gap-3 cursor-pointer hs-accordion-toggle"
                      onClick={() => setRatio("1:1")}
                    >
                      <div className="w-5">
                        <span className="block w-5 h-5 rounded-sm border border-slateDark dark:border-white"></span>
                      </div>
                      <span>1:1</span>
                    </li>
                    <li
                      className="py-4 w-full flex items-center gap-3 cursor-pointer hs-accordion-toggle"
                      onClick={() => setRatio("2:3")}
                    >
                      <div className="w-5">
                        <span className="block w-3 h-5 rounded-sm border border-slateDark dark:border-white"></span>
                      </div>
                      <span>2:3</span>
                    </li>
                    <li
                      className="py-4 w-full flex items-center gap-3 cursor-pointer hs-accordion-toggle"
                      onClick={() => setRatio("3:2")}
                    >
                      <div className="w-5">
                        <span className="block w-5 h-3 rounded-sm border border-slateDark dark:border-white"></span>
                      </div>
                      <span>3:2</span>
                    </li>
                    <li
                      className="pt-4 w-full flex items-center gap-3 cursor-pointer hs-accordion-toggle"
                      onClick={() => setRatio("16:9")}
                    >
                      <div className="w-5">
                        <span className="block w-5 h-3 rounded-sm border border-slateDark dark:border-white"></span>
                      </div>
                      <span>16:9</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* project  */}
              <div
                className="hs-accordion bg-white dark:bg-blackText border border-fadeSemi dark:border-blackText rounded-lg"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group flex justify-between items-center text-left w-full  text-blackText dark:text-white text-base md:text-xl font-bold transition gap-6 p-4 "
                  aria-controls=""
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 3.25H6C3.582 3.25 2.25 4.582 2.25 7V17C2.25 19.418 3.582 20.75 6 20.75H18C20.418 20.75 21.75 19.418 21.75 17V7C21.75 4.582 20.418 3.25 18 3.25ZM6 4.75H18C19.577 4.75 20.25 5.423 20.25 7V14.25L15.71 9.70996C15.32 9.31996 14.68 9.31996 14.29 9.70996L9.34998 14.6499C9.15998 14.8399 8.84002 14.8399 8.65002 14.6499L7.70996 13.71C7.31996 13.32 6.68004 13.32 6.29004 13.71L3.75 16.25V7C3.75 5.423 4.423 4.75 6 4.75ZM6.75 9C6.75 8.31 7.30404 7.75 7.99304 7.75H8.00305C8.69205 7.75 9.25098 8.31 9.25098 9C9.25098 9.69 8.69305 10.25 8.00305 10.25C7.31405 10.25 6.75 9.69 6.75 9Z"
                        className="fill-slateSemi dark:fill-white"
                      />
                    </svg>
                    <span>Create Project</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 hs-accordion-active:rotate-180 duration-200"
                  >
                    <path
                      d="M12.0003 15.0003C11.7443 15.0003 11.4883 14.9023 11.2933 14.7073L7.29325 10.7073C6.90225 10.3163 6.90225 9.68425 7.29325 9.29325C7.68425 8.90225 8.31631 8.90225 8.70731 9.29325L12.0003 12.5862L15.2933 9.29325C15.6842 8.90225 16.3163 8.90225 16.7073 9.29325C17.0983 9.68425 17.0983 10.3163 16.7073 10.7073L12.7073 14.7073C12.5123 14.9023 12.2563 15.0003 12.0003 15.0003Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <button
                        className="w-full h-20 bg-fadeMid dark:bg-slateDark rounded-lg flex items-center justify-center cursor-pointer"
                        data-hs-overlay="#project-modal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="33"
                          viewBox="0 0 32 33"
                          fill="none"
                        >
                          <path
                            d="M25.3335 15.1668H17.3335V7.16683C17.3335 6.43083 16.7362 5.8335 16.0002 5.8335C15.2642 5.8335 14.6668 6.43083 14.6668 7.16683V15.1668H6.66683C5.93083 15.1668 5.3335 15.7642 5.3335 16.5002C5.3335 17.2362 5.93083 17.8335 6.66683 17.8335H14.6668V25.8335C14.6668 26.5695 15.2642 27.1668 16.0002 27.1668C16.7362 27.1668 17.3335 26.5695 17.3335 25.8335V17.8335H25.3335C26.0695 17.8335 26.6668 17.2362 26.6668 16.5002C26.6668 15.7642 26.0695 15.1668 25.3335 15.1668Z"
                            className="fill-slateSemi dark:fill-white p-2"
                          />
                        </svg>
                      </button>
                    </div>
                    {projects?.map((project, i) => (
                      <div className="relative" key={i}>
                        <div className="w-full h-20 rounded-lg bg-blackGradient bg-slateDark"></div>
                        <p className="text-white absolute bottom-1 left-2.5">
                          {project?.projectName}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* setting */}
              <div
                className="hs-accordion bg-white dark:bg-blackText border border-fadeSemi dark:border-blackText rounded-lg"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group flex justify-between items-center text-left w-full  text-blackText dark:text-white text-base md:text-xl font-bold transition gap-6 p-4 "
                  aria-controls=""
                >
                  <span className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.83 14.6C19.9 14.06 19.33 13.07 19.33 12C19.33 10.93 19.9 9.93999 20.83 9.39999C20.99 9.29999 21.05 9.1 20.95 8.94L19.28 6.06C19.22 5.95 19.11 5.89001 19 5.89001C18.94 5.89001 18.88 5.91 18.83 5.94C18.37 6.2 17.85 6.34 17.33 6.34C16.8 6.34 16.28 6.19999 15.81 5.92999C14.88 5.38999 14.31 4.41 14.31 3.34C14.31 3.15 14.16 3 13.98 3H10.02C9.83999 3 9.69 3.15 9.69 3.34C9.69 4.41 9.12 5.38999 8.19 5.92999C7.72 6.19999 7.20001 6.34 6.67001 6.34C6.15001 6.34 5.63001 6.2 5.17001 5.94C5.01001 5.84 4.81 5.9 4.72 6.06L3.04001 8.94C3.01001 8.99 3 9.05001 3 9.10001C3 9.22001 3.06001 9.32999 3.17001 9.39999C4.10001 9.93999 4.67001 10.92 4.67001 11.99C4.67001 13.07 4.09999 14.06 3.17999 14.6H3.17001C3.01001 14.7 2.94999 14.9 3.04999 15.06L4.72 17.94C4.78 18.05 4.89 18.11 5 18.11C5.06 18.11 5.12001 18.09 5.17001 18.06C6.11001 17.53 7.26 17.53 8.19 18.07C9.11 18.61 9.67999 19.59 9.67999 20.66C9.67999 20.85 9.82999 21 10.02 21H13.98C14.16 21 14.31 20.85 14.31 20.66C14.31 19.59 14.88 18.61 15.81 18.07C16.28 17.8 16.8 17.66 17.33 17.66C17.85 17.66 18.37 17.8 18.83 18.06C18.99 18.16 19.19 18.1 19.28 17.94L20.96 15.06C20.99 15.01 21 14.95 21 14.9C21 14.78 20.94 14.67 20.83 14.6ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                        className="fill-slateSemi dark:fill-white"
                      />
                    </svg>

                    <span>Settings</span>
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 hs-accordion-active:rotate-180 duration-200"
                  >
                    <path
                      d="M12.0003 15.0003C11.7443 15.0003 11.4883 14.9023 11.2933 14.7073L7.29325 10.7073C6.90225 10.3163 6.90225 9.68425 7.29325 9.29325C7.68425 8.90225 8.31631 8.90225 8.70731 9.29325L12.0003 12.5862L15.2933 9.29325C15.6842 8.90225 16.3163 8.90225 16.7073 9.29325C17.0983 9.68425 17.0983 10.3163 16.7073 10.7073L12.7073 14.7073C12.5123 14.9023 12.2563 15.0003 12.0003 15.0003Z"
                      className="fill-slateSemi dark:fill-white"
                    />
                  </svg>
                </button>
                <div className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300 ">
                  <div className="p-4">content</div>
                </div>
              </div>
            </div>
            <UpgradeProfile></UpgradeProfile>
          </div>
          <div className="col-span-8 h-full flex flex-col gap-5">
            <div className="w-full h-full bg-fadeMid dark:bg-blackText rounded-2xl flex items-center justify-center">
              <h2 className=" text-slateDark dark:text-white">
                No Creations yet!
              </h2>
            </div>
            <div>
              <div className="px-6 py-3 flex items-center justify-between text-blackText dark:text-white border-b border-fadeHigh dark:border-blackReg bg-fadeSemi dark:bg-black">
                <p className=" ">You’re viewing older messages</p>
                <div className="relative">
                  <select
                    className="w-full bg-transparent flex items-center text-darkSemi pr-3 text-sm font-bold text-blackText dark:text-white outline-none"
                    name="product1"
                  >
                    <option value="Jump To Present">Jump To Present</option>
                    <option value="Jump To old">Jump To old</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal
        projects={projects}
        setProjects={setProjects}
      ></ProjectModal>
    </section>
  );
}

export default Generate;
