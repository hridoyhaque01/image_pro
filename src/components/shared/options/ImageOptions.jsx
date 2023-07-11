import React from "react";

function ImageOptions({ handler, item, selectedItem }) {
  return (
    <div>
      <button
        className="absolute bottom-5 right-2.5"
        onClick={() => handler(item?.id)}
      >
        <svg
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 lg:w-8 lg:h-8"
        >
          <rect
            x="0.859375"
            width="32"
            height="32"
            rx="16"
            fill="black"
            fillOpacity="0.2"
          />
          <path
            d="M17.1421 11.4666C16.2589 11.4666 15.5381 10.7498 15.5381 9.8666C15.5381 8.9834 16.2501 8.2666 17.1341 8.2666H17.1421C18.0253 8.2666 18.7421 8.9834 18.7421 9.8666C18.7421 10.7498 18.0261 11.4666 17.1421 11.4666ZM18.7421 16.2666C18.7421 15.3834 18.0253 14.6666 17.1421 14.6666H17.1341C16.2509 14.6666 15.5381 15.3834 15.5381 16.2666C15.5381 17.1498 16.2581 17.8666 17.1421 17.8666C18.0261 17.8666 18.7421 17.1498 18.7421 16.2666ZM18.7421 22.6666C18.7421 21.7834 18.0253 21.0666 17.1421 21.0666H17.1341C16.2509 21.0666 15.5381 21.7834 15.5381 22.6666C15.5381 23.5498 16.2581 24.2666 17.1421 24.2666C18.0261 24.2666 18.7421 23.5498 18.7421 22.6666Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        className={`flex flex-col gap-1 lg:gap-2 absolute bottom-12 lg:bottom-16 right-2.5 ${
          selectedItem === item?.id ? "opacity-100" : "opacity-0"
        } duration-500 origin-bottom transform`}
      >
        <button type="button">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 lg:w-8 lg:h-8"
          >
            <rect
              x="0.140625"
              width="32"
              height="32"
              rx="16"
              fill="black"
              fillOpacity="0.2"
            />
            <path
              d="M17.5385 16.2667L21.7729 12.0323C22.0857 11.7203 22.0857 11.2131 21.7729 10.9011C21.4601 10.5883 20.9545 10.5883 20.6417 10.9011L16.4073 15.1355L12.1729 10.9011C11.8601 10.5883 11.3545 10.5883 11.0417 10.9011C10.7289 11.2131 10.7289 11.7203 11.0417 12.0323L15.2761 16.2667L11.0417 20.5011C10.7289 20.8131 10.7289 21.3203 11.0417 21.6323C11.1977 21.7883 11.4025 21.8667 11.6073 21.8667C11.8121 21.8667 12.0169 21.7883 12.1729 21.6323L16.4073 17.3979L20.6417 21.6323C20.7977 21.7883 21.0025 21.8667 21.2073 21.8667C21.4121 21.8667 21.6169 21.7883 21.7729 21.6323C22.0857 21.3203 22.0857 20.8131 21.7729 20.5011L17.5385 16.2667Z"
              fill="white"
            />
          </svg>
        </button>
        <button type="button">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 lg:w-8 lg:h-8"
          >
            <g filter="url(#filter0_b_786_31490)">
              <rect
                x="0.140625"
                width="32"
                height="32"
                rx="16"
                fill="black"
                fillOpacity="0.2"
              />
              <path
                d="M11.057 15.2338C10.5362 14.7418 10.8842 13.8659 11.601 13.8667H13.5387V9.86665C13.5387 9.42505 13.8971 9.06665 14.3387 9.06665H19.1387C19.5803 9.06665 19.9387 9.42505 19.9387 9.86665V13.8667H22.0139C22.7307 13.8667 23.0786 14.7418 22.5578 15.2338L17.5379 19.9763C17.1283 20.3635 16.4874 20.3635 16.077 19.9763L11.057 15.2338ZM22.4074 22.8667H11.2074C10.8762 22.8667 10.6074 23.1355 10.6074 23.4667C10.6074 23.7979 10.8762 24.0667 11.2074 24.0667H22.4074C22.7386 24.0667 23.0074 23.7979 23.0074 23.4667C23.0074 23.1355 22.7386 22.8667 22.4074 22.8667Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_786_31490"
                x="-4.85938"
                y="-5"
                width="42"
                height="42"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_786_31490"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_786_31490"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button type="button">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 lg:w-8 lg:h-8"
          >
            <g filter="url(#filter0_b_786_31493)">
              <rect
                x="0.140625"
                width="32"
                height="32"
                rx="16"
                fill="black"
                fillOpacity="0.2"
              />
              <path
                d="M20.1701 16.0016L12.9404 23.2001H8.94043V19.2001L16.1389 11.9705C16.2325 11.8761 16.3845 11.8761 16.4789 11.9705L20.1709 15.6625C20.2645 15.7561 20.2645 15.908 20.1701 16.0016ZM21.0268 14.8224C21.1204 14.916 21.2724 14.916 21.366 14.8224L22.8684 13.3201C23.4956 12.6929 23.4956 11.6753 22.8684 11.0481L21.0924 9.27204C20.4652 8.64484 19.4477 8.64484 18.8205 9.27204L17.318 10.7745C17.2244 10.8681 17.2244 11.02 17.318 11.1136L21.0268 14.8224ZM23.3404 22.6001H17.7404C17.4092 22.6001 17.1404 22.8689 17.1404 23.2001C17.1404 23.5313 17.4092 23.8001 17.7404 23.8001H23.3404C23.6716 23.8001 23.9404 23.5313 23.9404 23.2001C23.9404 22.8689 23.6716 22.6001 23.3404 22.6001Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_786_31493"
                x="-4.85938"
                y="-5"
                width="42"
                height="42"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_786_31493"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_786_31493"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button type="button">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 lg:w-8 lg:h-8"
          >
            <g filter="url(#filter0_b_786_31496)">
              <rect
                x="0.140625"
                width="32"
                height="32"
                rx="16"
                fill="black"
                fillOpacity="0.2"
              />
              <path
                d="M21.2073 12.2666H17.2073L14.8073 9.86658H11.6073C10.0073 9.86658 9.20728 10.6666 9.20728 12.2666V20.2666C9.20728 21.8666 10.0073 22.6666 11.6073 22.6666H21.2073C22.8073 22.6666 23.6073 21.8666 23.6073 20.2666V14.6666C23.6073 13.0666 22.8073 12.2666 21.2073 12.2666ZM18.4073 18.0666H17.0073V19.4666C17.0073 19.7978 16.7385 20.0666 16.4073 20.0666C16.0761 20.0666 15.8073 19.7978 15.8073 19.4666V18.0666H14.4073C14.0761 18.0666 13.8073 17.7978 13.8073 17.4666C13.8073 17.1354 14.0761 16.8666 14.4073 16.8666H15.8073V15.4666C15.8073 15.1354 16.0761 14.8666 16.4073 14.8666C16.7385 14.8666 17.0073 15.1354 17.0073 15.4666V16.8666H18.4073C18.7385 16.8666 19.0073 17.1354 19.0073 17.4666C19.0073 17.7978 18.7385 18.0666 18.4073 18.0666Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_786_31496"
                x="-4.85938"
                y="-5"
                width="42"
                height="42"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_786_31496"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_786_31496"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <button type="button">
          <svg
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 lg:w-8 lg:h-8"
          >
            <rect
              x="0.140625"
              width="32"
              height="32"
              rx="16"
              fill="black"
              fillOpacity="0.2"
            />
            <path
              d="M23.4713 15.8386C22.5329 20.6786 16.4074 23.4666 16.4074 23.4666C16.4074 23.4666 10.2817 20.6786 9.34251 15.8386C8.76651 12.869 10.025 9.88182 13.2242 9.86662C15.6074 9.85542 16.4074 12.257 16.4074 12.257C16.4074 12.257 17.2074 9.85462 19.5898 9.86662C22.7962 9.88182 24.0473 12.8698 23.4713 15.8386Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ImageOptions;
