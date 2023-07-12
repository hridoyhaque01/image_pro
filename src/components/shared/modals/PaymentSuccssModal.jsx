import React from "react";

function PaymentSuccessModal({ item }) {
  return (
    <>
      <div
        id="payment-modal"
        className="hs-overlay hs-overlay-open:bg-black-70 hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100  hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="flex flex-col bg-white dark:bg-black w-[36rem] max-w-xl shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] p-8 mx-auto">
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <img
                  className="w-48 mx-auto"
                  //   style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);"
                  src="https://s3-alpha-sig.figma.com/img/21f3/c289/3c7c72a3844bff6780290e5c66444a92?Expires=1690156800&amp;Signature=GMpWC8v-CbUmjDRP2udKS-5KBqJ3jQbhxunE4itPH5xEuD3NyfW0PzF5MjOePZ2HoaxG1DhfnscW3ZZVqpGyQQLGDSsOfmkmNRl4rmp114ZmDUj5AfBp-fhGcBnZSeTEhHm4CnrcMOubP50nV61kBwRBioVrw2yQMUr8DGWCYvc3lOgwWHVZnG6wNHfXehUaHzc1FpyWFn~qEvMRLmKH8LzcPDLT8PPe~z82ZVwq3NZPxGJE-SyYumRDenN6zPv0YhL6gjbaxegfGX7hF84A4hXPsQSDBwC~M0po1Ssl7sbzEaUE1xBZ4eiIcSE9Gvx9SDzRW9CeETmSiRXAcI95Rg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-secondaryColor text-center duration-300 my-3">
                Congratulation
              </h2>
              <p className="text-sm md:text-base text-slateDark dark:text-slateSemi">
                Premium Package Purchas successfully
              </p>
            </div>

            <div className="mt-10">
              <button
                className="w-full flex items-center justify-center p-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg"
                data-hs-overlay="#payment-modal"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentSuccessModal;
