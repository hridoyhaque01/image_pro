import React from "react";

function ChatBot() {
  return (
    <div className="fixed left-0 right-0 bottom-10 px-6 z-[60]">
      <div className="max-w-[75rem] mx-auto flex justify-end">
        <button type="button" className="p-3 bg-black rounded-full">
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