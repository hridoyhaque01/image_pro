import React from "react";
import { logo } from "../../../Assets/getImages";

function ChatBot() {
  return (
    <div className="fixed left-0 right-0 bottom-10 px-6 z-[60]">
      <div className="max-w-[75rem] mx-auto flex flex-col">
        <div className="flex flex-col w-[23rem] max-w-[23rem] bg-white border border-fadeHigh rounded-md ml-auto">
          <div className="w-full flex  items-center justify-between gap-6 p-3 bg-white">
            <div></div>
            <div>
              <img src={logo} alt="" className="w-36 lg:w-auto" />
            </div>
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <path
                  d="M16.1506 14L22.3258 7.82479C22.7819 7.36979 22.7819 6.63019 22.3258 6.17519C21.8696 5.71903 21.1323 5.71903 20.6761 6.17519L14.5009 12.3503L8.32578 6.17519C7.86961 5.71903 7.13228 5.71903 6.67611 6.17519C6.21994 6.63019 6.21994 7.36979 6.67611 7.82479L12.8513 14L6.67611 20.1752C6.21994 20.6302 6.21994 21.3698 6.67611 21.8248C6.90361 22.0523 7.20228 22.1667 7.50094 22.1667C7.79961 22.1667 8.09828 22.0523 8.32578 21.8248L14.5009 15.6497L20.6761 21.8248C20.9036 22.0523 21.2023 22.1667 21.5009 22.1667C21.7996 22.1667 22.0983 22.0523 22.3258 21.8248C22.7819 21.3698 22.7819 20.6302 22.3258 20.1752L16.1506 14Z"
                  fill="#555568"
                />
              </svg>
            </button>
          </div>
          <div className="h-[23rem] bg-fadeMid p-4"></div>
          <div>
            <form
              action=""
              className="w-full flex  items-center justify-between gap-6 p-3 bg-white"
            ></form>
          </div>
        </div>

        <button
          type="button"
          className="p-3 bg-black rounded-full max-w-max ml-auto"
        >
          <svg
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 md:w-14 md:h-14"
          >
            <path
              d="M30.0027 7.5C17.5777 7.5 7.50518 17.5726 7.50518 29.9976C7.50518 33.3476 8.25537 36.5475 9.58037 39.395C10.1054 40.495 10.1055 41.7699 9.73052 42.9449L7.6303 49.1949C6.9803 51.1449 8.85535 53.02 10.8054 52.37L17.0554 50.2699C18.2304 49.8949 19.5052 49.8951 20.6052 50.4201C23.4552 51.7451 26.6552 52.495 30.0052 52.495C42.4302 52.495 52.5027 42.4226 52.5027 29.9976C52.5002 17.5726 42.4277 7.5 30.0027 7.5ZM20.0052 32.5C18.6252 32.5 17.493 31.38 17.493 30C17.493 28.62 18.6002 27.5 19.9802 27.5H20.0052C21.3877 27.5 22.5052 28.62 22.5052 30C22.5052 31.38 21.3877 32.5 20.0052 32.5ZM30.0052 32.5C28.6252 32.5 27.493 31.38 27.493 30C27.493 28.62 28.6002 27.5 29.9802 27.5H30.0052C31.3877 27.5 32.5052 28.62 32.5052 30C32.5052 31.38 31.3877 32.5 30.0052 32.5ZM40.0052 32.5C38.6252 32.5 37.493 31.38 37.493 30C37.493 28.62 38.6002 27.5 39.9802 27.5H40.0052C41.3877 27.5 42.5052 28.62 42.5052 30C42.5052 31.38 41.3877 32.5 40.0052 32.5Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
