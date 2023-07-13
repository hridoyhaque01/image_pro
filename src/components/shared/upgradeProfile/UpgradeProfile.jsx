import React from "react";
import { Link } from "react-router-dom";
import { user } from "../../../Assets/getImages";

function UpgradeProfile() {
  return (
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
        className="flex font-bold justify-center px-6 py-5 border border-primaryColor rounded-lg text-xl text-center text-primaryColor"
        to="/"
      >
        Upgraded to Pro
      </Link>
    </div>
  );
}

export default UpgradeProfile;
