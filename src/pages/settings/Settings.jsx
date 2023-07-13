import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { user } from "../../Assets/getImages";

function Settings() {
  const thumbnailRef = useRef();
  const [profile, setProfile] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [value, setValue] = useState();

  const handleProfileChange = (event) => {
    const file = event.target.files[0];
    if (
      file?.type === "image/jpg" ||
      file?.type === "image/jpeg" ||
      file?.type === "image/png"
    ) {
      setProfile(file);
      const imageURL = URL.createObjectURL(file);
      setProfilePreview(imageURL);
    } else {
      setProfile(null);
    }
  };

  return (
    <section className="bg-white px-6 sm:px-16 md:px-24 lg:px-6 pt-28 md:pt-32 lg:pt-36  pb-10 dark:bg-blackbg text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="max-w-[49rem] mx-auto">
        <div className="flex flex-col justify-center w-full bg-slateHigh dark:bg-black rounded-3xl py-14 px-4 sm:px-7 md:px-10">
          <h1 className="text-blackText dark:text-white text-2xl md:text-4xl  font-bold">
            Settings
          </h1>

          {/* user profile details  */}
          <form action="" className="mt-10 flex flex-col gap-6">
            {/* profile */}
            <div className="flex items-center gap-4">
              <div className="">
                <img
                  src={profilePreview || user}
                  alt=""
                  className="w-20 h-20 rounded-full bg-cover object-cover"
                />
              </div>
              <div>
                <input
                  type="file"
                  className="h-1 w-1 opacity-0  "
                  id="course"
                  ref={thumbnailRef}
                  onChange={handleProfileChange}
                  name="course"
                />
                <label
                  htmlFor="course"
                  className="px-6 py-2 bg-primaryColor text-sm font-bold text-white rounded-lg whitespace-nowrap"
                >
                  Add Image
                </label>
              </div>
            </div>
            {/* names */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="firstName"
                  className="font-bold text-blackText dark:text-white"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label
                  htmlFor="lastName"
                  className="font-bold text-blackText dark:text-white"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
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
                placeholder="Enter email address"
                className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
              />
            </div>
            {/* submit button */}
            <div className="flex justify-end" type="submit">
              <button className="py-5 px-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg">
                Update
              </button>
            </div>
          </form>
          {/* password details  */}

          <div className="mt-10">
            <h2 className="text-blackText dark:text-white text-lg md:text-2xl font-bold">
              Change Password
            </h2>

            <form action="" className="mt-6 flex flex-col gap-6">
              {/* old password  */}
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="oldPassword"
                  className="font-bold text-blackText dark:text-white"
                >
                  Old Password
                </label>
                <input
                  id="oldPassword"
                  type="password"
                  name="oldPassword"
                  placeholder="Enter old password"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
              {/* new password  */}

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="newPassword"
                  className="font-bold text-blackText dark:text-white"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
              {/* confirm password  */}

              <div className="flex flex-col gap-3">
                <label
                  htmlFor="confirmPassword"
                  className="font-bold text-blackText dark:text-white"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter confirm password"
                  className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                />
              </div>
              {/* submit button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-5 px-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
          {/* delete account  */}

          <div className="flex flex-col gap-6 mt-10">
            <h2 className="text-blackText dark:text-white text-lg md:text-2xl font-bold">
              Delete your account
            </h2>

            <p className="text-slateDark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Delete account
            </p>

            <div className="flex justify-end">
              <button
                type="button"
                className="py-4 px-6 text-xl font-bold bg-errorColor text-white leading-none rounded-lg"
              >
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
