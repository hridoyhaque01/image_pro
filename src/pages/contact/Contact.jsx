import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";

function Contact() {
  const [value, setValue] = useState();

  return (
    <section className="bg-white px-6  sm:px-16 md:px-24 lg:px-6 pt-28 md:pt-32 lg:pt-36  pb-10 dark:bg-blackbg text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="max-w-[49rem] mx-auto">
        <div className="flex flex-col justify-center w-full bg-slateHigh dark:bg-black rounded-3xl py-14 px-4 sm:px-7 md:px-10">
          <h1 className="text-blackText dark:text-white text-2xl md:text-4xl  font-bold">
            Settings
          </h1>

          {/* user profile details  */}
          <form action="" className="mt-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="fullName"
                className="font-bold text-blackText dark:text-white"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your name"
                className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
              />
            </div>
            {/* phone number */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="font-bold text-blackText dark:text-white"
              >
                Phone
              </label>
              <PhoneInput
                international
                defaultCountry="RU"
                value={value}
                onChange={setValue}
                className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText flex items-center gap-2"
              ></PhoneInput>
            </div>
            {/* email number */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-bold text-blackText dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ex: user@website.com"
                className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
              />
            </div>
            {/* description */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="description"
                className="font-bold text-blackText dark:text-white"
              >
                Descriptions
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Write your comment"
                className="border border-blueLight text-black dark:text-white dark:border-blackText w-full h-28 p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
              ></textarea>
            </div>
            {/* submit button */}
            <div className="flex justify-end" type="submit">
              <button className="w-56 py-5 px-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
