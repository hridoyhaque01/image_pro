import React from "react";
import getFormatedTime from "../../../utils/getFormatedTime";

function Message({ message }) {
  return (
    <div
      className={`flex items-start gap-2 ${
        message?.sender === "user" ? "self-end flex-row-reverse" : "self-start"
      }`}
    >
      <div>
        {message?.sender === "user" ? (
          <img
            src={message?.imageUrl}
            alt=""
            className="w-6 h-6 rounded-full"
          />
        ) : (
          <div className="p-2.5 rounded-full bg-slateSemi dark:bg-slateDark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.33936 4.33335C5.33936 2.86269 6.53536 1.66669 8.00602 1.66669C9.47669 1.66669 10.6727 2.86269 10.6727 4.33335C10.6727 5.80402 9.47669 7.00002 8.00602 7.00002C6.53536 7.00002 5.33936 5.80402 5.33936 4.33335ZM9.33333 8.33335H6.66667C3.96 8.33335 3 10.3154 3 12.0127C3 13.5307 3.80737 14.3334 5.33537 14.3334H10.6646C12.1926 14.3334 13 13.5307 13 12.0127C13 10.3154 12.04 8.33335 9.33333 8.33335Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
      <div>
        <div
          className={`px-3 py-4 text-blackText dark:text-white rounded-lg ${
            message?.sender === "user"
              ? "bg-primaryColor text-white rounded-tr-none"
              : "bg-slateLow dark:bg-slateDark rounded-tl-none"
          }  `}
        >
          {message?.message}
        </div>
        <p className="text-slateDark text-xs dark:text-white">
          {getFormatedTime(message?.timestamp)}
        </p>
      </div>
    </div>
  );
}

export default Message;
