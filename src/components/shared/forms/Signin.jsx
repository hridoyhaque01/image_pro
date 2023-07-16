import React from "react";

function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
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
        {/* password */}

        <div className="flex flex-col gap-3 mt-1">
          <label
            htmlFor="password"
            className="font-bold text-blackText dark:text-white"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
          />
        </div>

        <div className="text-right">
          <button className="text-primaryColor font-bold">
            Forgot Password?
          </button>
        </div>

        {/* submit button  */}
        <div className="w-full mt-7">
          <button
            type="submit"
            className="w-full p-6 text-xl font-bold bg-primaryColor text-white rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signin;
