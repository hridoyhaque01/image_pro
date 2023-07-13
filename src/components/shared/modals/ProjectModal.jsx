import React, { useRef } from "react";

function ProjectModal({ projects, setProjects }) {
  const formRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const projectName = form.projectName.value;
    const description = form.description.value;
    const data = {
      id: projects?.length + 1,
      projectName,
      description,
      imageUrls: [],
    };
    setProjects((prevProjects) => [...prevProjects, data]);
    formRef.current.reset();
  };
  return (
    <div
      id="project-modal"
      className="hs-overlay hs-overlay-open:bg-black-70 hidden w-full h-full fixed top-0 left-0 z-[90] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:scale-100 hs-overlay-open:opacity-100  hs-overlay-open:duration-300 scale-75 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="flex flex-col bg-white dark:bg-black w-[36rem] max-w-xl shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] pt-20 pb-14 px-10 mx-auto relative">
          <div className="flex flex-col">
            <form
              action=""
              className="mt-10 flex flex-col gap-6"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              {/* projectName number */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="projectName"
                  className="font-bold text-blackText dark:text-white"
                >
                  Project Name <span className="text-errorColor">*</span>
                </label>
                <input
                  required
                  id="projectName"
                  type="text"
                  name="projectName"
                  placeholder="Enter Project Name"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
              {/* description */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="description"
                  className="font-bold text-blackText dark:text-white"
                >
                  Project Description
                </label>
                <textarea
                  required
                  id="description"
                  name="description"
                  placeholder="Write your comment"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full h-28 p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText resize-none"
                ></textarea>
              </div>
              {/* submit button */}
              <div className="flex justify-end" type="submit">
                <button
                  type="submit"
                  className="w-full py-5 px-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          <button
            type="button"
            data-hs-overlay="#project-modal"
            className="p-2 bg-fadeSemi dark:bg-slateDark rounded-full absolute top-5 right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.94251 7.99982L12.4712 4.47113C12.7318 4.21113 12.7318 3.78851 12.4712 3.52851C12.2105 3.26784 11.7892 3.26784 11.5285 3.52851L7.99984 7.05715L4.47118 3.52851C4.21051 3.26784 3.78917 3.26784 3.52851 3.52851C3.26784 3.78851 3.26784 4.21113 3.52851 4.47113L7.05717 7.99982L3.52851 11.5285C3.26784 11.7885 3.26784 12.2111 3.52851 12.4711C3.65851 12.6011 3.82917 12.6665 3.99984 12.6665C4.17051 12.6665 4.34118 12.6011 4.47118 12.4711L7.99984 8.94249L11.5285 12.4711C11.6585 12.6011 11.8292 12.6665 11.9998 12.6665C12.1705 12.6665 12.3412 12.6011 12.4712 12.4711C12.7318 12.2111 12.7318 11.7885 12.4712 11.5285L8.94251 7.99982Z"
                className="fill-slateDark dark:fill-white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
