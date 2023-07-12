import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../../Assets/getImages";
import ImageOptions from "../shared/options/ImageOptions";

function ImageGallery() {
  const items = [
    { id: 1, imageUrl: image1 },
    { id: 2, imageUrl: image2 },
    { id: 3, imageUrl: image3 },
    { id: 4, imageUrl: image4 },
    { id: 5, imageUrl: image5 },
    { id: 6, imageUrl: image6 },
    { id: 7, imageUrl: image7 },
    { id: 8, imageUrl: image8 },
  ];

  const [selectedPicture, setSelectedPicture] = useState();

  const handleOptions = (id) => {
    if (selectedPicture && selectedPicture === id) {
      setSelectedPicture("");
    } else {
      setSelectedPicture(id);
    }
  };

  return (
    <section className="pt-10 md:pt-20 lg:pt-32">
      <div className="mb-4 sm:mb-8 lg:mb-16 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold  text-blackText dark:text-slateLow duration-300">
          Discover
        </h1>
      </div>
      <div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 768: 3, 1024: 4 }}
        >
          <Masonry gutter="24px">
            {items?.map((item) => (
              <div key={item?.id} className="relative">
                <div className="rounded-md overflow-hidden">
                  <img
                    src={item?.imageUrl}
                    alt=""
                    className="w-full h-auto object-cover bg-cover"
                  />
                </div>
                <ImageOptions
                  item={item}
                  handler={handleOptions}
                  selectedItem={selectedPicture}
                ></ImageOptions>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <div className="flex justify-center mt-20">
          <Link
            className="p-6 border border-blueMid whitespace-nowrap rounded-lg text-xl font-bold text-blueMid flex items-center gap-4 max-w-max"
            type="button"
            to="/discover"
          >
            <span>Load More</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.07909 15.9017C6.03614 15.9017 6.81199 15.1259 6.81199 14.1688C6.81199 13.2118 6.03614 12.4359 5.07909 12.4359C4.12204 12.4359 3.34619 13.2118 3.34619 14.1688C3.34619 15.1259 4.12204 15.9017 5.07909 15.9017Z"
                fill="#5454C0"
              />
              <path
                d="M16.2286 14.365C17.0593 14.365 17.7327 13.6916 17.7327 12.861C17.7327 12.0303 17.0593 11.3569 16.2286 11.3569C15.398 11.3569 14.7246 12.0303 14.7246 12.861C14.7246 13.6916 15.398 14.365 16.2286 14.365Z"
                fill="#828ED8"
              />
              <path
                d="M14.8552 6.77947C15.5414 6.77947 16.0977 6.2232 16.0977 5.53701C16.0977 4.85082 15.5414 4.29456 14.8552 4.29456C14.1691 4.29456 13.6128 4.85082 13.6128 5.53701C13.6128 6.2232 14.1691 6.77947 14.8552 6.77947Z"
                fill="#828ED8"
              />
              <path
                d="M3.714 11.6717C4.72965 11.6717 5.55299 10.8684 5.55299 9.87754C5.55299 8.88665 4.72965 8.08337 3.714 8.08337C2.69835 8.08337 1.875 8.88665 1.875 9.87754C1.875 10.8684 2.69835 11.6717 3.714 11.6717Z"
                fill="#5454C0"
              />
              <path
                d="M8.99702 18.125C9.92034 18.125 10.6688 17.3956 10.6688 16.4959C10.6688 15.5962 9.92034 14.8668 8.99702 14.8668C8.0737 14.8668 7.3252 15.5962 7.3252 16.4959C7.3252 17.3956 8.0737 18.125 8.99702 18.125Z"
                fill="#5454C0"
              />
              <path
                d="M13.2933 17.4112C14.1704 17.4112 14.8815 16.7189 14.8815 15.8648C14.8815 15.0107 14.1704 14.3184 13.2933 14.3184C12.4161 14.3184 11.7051 15.0107 11.7051 15.8648C11.7051 16.7189 12.4161 17.4112 13.2933 17.4112Z"
                fill="#828ED8"
              />
              <path
                d="M5.70333 7.50503C6.76513 7.50503 7.6259 6.66482 7.6259 5.62837C7.6259 4.59192 6.76513 3.75171 5.70333 3.75171C4.64152 3.75171 3.78076 4.59192 3.78076 5.62837C3.78076 6.66482 4.64152 7.50503 5.70333 7.50503Z"
                fill="#5454C0"
              />
              <path
                d="M16.7038 10.3476C17.4886 10.3476 18.1248 9.72318 18.1248 8.95292C18.1248 8.18265 17.4886 7.55823 16.7038 7.55823C15.9189 7.55823 15.2827 8.18265 15.2827 8.95292C15.2827 9.72318 15.9189 10.3476 16.7038 10.3476Z"
                fill="#828ED8"
              />
              <path
                d="M10.4739 5.92933C11.5935 5.92933 12.5011 5.02173 12.5011 3.90216C12.5011 2.78259 11.5935 1.875 10.4739 1.875C9.35437 1.875 8.44678 2.78259 8.44678 3.90216C8.44678 5.02173 9.35437 5.92933 10.4739 5.92933Z"
                fill="#5454C0"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
