import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import {
  image1,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../../Assets/getImages";
import ImageOptions from "../../components/shared/options/ImageOptions";
function Discover() {
  const [selectedPicture, setSelectedPicture] = useState();

  const handleOptions = (id) => {
    if (selectedPicture && selectedPicture === id) {
      setSelectedPicture("");
    } else {
      setSelectedPicture(id);
    }
  };

  const items = [
    { id: 1, imageUrl: image1 },
    { id: 2, imageUrl: image2 },
    { id: 3, imageUrl: image3 },
    { id: 4, imageUrl: image4 },
    { id: 5, imageUrl: image5 },
    { id: 6, imageUrl: image6 },
    { id: 7, imageUrl: image7 },
    { id: 8, imageUrl: image8 },
    { id: 9, imageUrl: image9 },
    { id: 10, imageUrl: image10 },
    { id: 11, imageUrl: image11 },
    { id: 12, imageUrl: image12 },
    { id: 13, imageUrl: image13 },
    { id: 14, imageUrl: image14 },
    { id: 15, imageUrl: image15 },
    { id: 16, imageUrl: image16 },
  ];

  return (
    <section className="bg-white px-6 sm:px-16 md:px-24 lg:px-6 pt-44 md:pt-56 lg:pt-64 pb-16 md:pb-20 dark:bg-blackbg text-gray-600 body-font overflow-hidden">
      <div className="max-w-[74rem] mx-auto">
        <div className="flex flex-col justify-center text-center w-full ">
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
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M22.5654 12.708L15.5664 19.7071C15.3714 19.9021 15.1154 20 14.8594 20C14.6034 20 14.3473 19.9021 14.1523 19.7071C13.7613 19.3161 13.7613 18.684 14.1523 18.293L19.4453 13H3.85938C3.30638 13 2.85938 12.552 2.85938 12C2.85938 11.448 3.30638 11 3.85938 11H19.4453L14.1523 5.70707C13.7613 5.31607 13.7613 4.68401 14.1523 4.29301C14.5433 3.90201 15.1754 3.90201 15.5664 4.29301L22.5654 11.292C22.6584 11.385 22.7315 11.495 22.7825 11.618C22.8835 11.862 22.8835 12.1381 22.7825 12.3821C22.7315 12.5051 22.6584 12.615 22.5654 12.708Z"
                    fill="#828ED8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
