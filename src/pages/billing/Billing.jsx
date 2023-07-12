import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useLocation } from "react-router-dom";
import PaymentSuccessModal from "../../components/shared/modals/PaymentSuccssModal";

function Billing() {
  const { state } = useLocation();

  const { pricing, packageDetails } = state || {};
  const [value, setValue] = useState();
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [isSelectedMethod, setIsSelectedMethod] = useState("paypal");

  return (
    <section className="bg-white px-6  pt-28 md:pt-32 lg:pt-36  pb-10 dark:bg-blackbg text-gray-600 body-font overflow-hidden">
      <div className="max-w-[74rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="border border-slateHigh dark:border-none bg-white dark:bg-black py-14 px-4 sm:px-10 rounded-3xl">
              <h2 className="text-2xl sm:text-4xl font-bold leading-none text-blackText dark:text-white">
                Billing Details
              </h2>
              <form
                action="#"
                className="flex flex-col gap-6 text-sm md:text-base"
              >
                {/* names */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
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
                {/* country */}

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-bold text-blackText dark:text-white"
                  >
                    Country / Region
                  </label>

                  <CountrySelect
                    onChange={(e) => {
                      setCountryid(e.id);
                    }}
                    placeHolder="Select Country"
                    className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                  />
                </div>
                {/* state */}

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-bold text-blackText dark:text-white"
                  >
                    State
                  </label>

                  <StateSelect
                    countryid={countryid}
                    onChange={(e) => {
                      setstateid(e.id);
                    }}
                    placeHolder="Select State"
                  />
                </div>
                {/* city  */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="font-bold text-blackText dark:text-white"
                  >
                    Town / City
                  </label>

                  <CitySelect
                    countryid={countryid}
                    stateid={stateid}
                    onChange={(e) => {
                      console.log(e);
                    }}
                    placeHolder="Select City"
                  />
                </div>
                {/* emStreet Address */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="address"
                    className="font-bold text-blackText dark:text-white"
                  >
                    Street Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Ex: House: 4A/72, New York City, New York"
                    className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                  />
                </div>
                {/* Zip Code */}
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="zipCode"
                    className="font-bold text-blackText dark:text-white"
                  >
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    placeholder="Enter Zip Code"
                    className="border border-blueLight text-black dark:text-white dark:border-blackText w-full p-4 dark:placeholder:text-slateDark placeholder:text-disabled outline-none rounded-lg bg-white dark:bg-blackText"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="capitalize text-pureWhite text-center bg-slateHigh dark:bg-blackText rounded-3xl p-6 flex flex-col gap-8 text-base">
              <h4 className=" text-xl font-bold text-center text-blackText dark:text-white">
                Your Order
              </h4>
              <table className=" w-full text-start ">
                <tbody className="w-full">
                  <tr className=" text-blackText dark:text-slateMid font-bold text-base sm:text-xl">
                    <td className="">Product</td>
                    <td className="text-right">Price</td>
                  </tr>
                  <tr className="border-b border-blueLight dark:border-white text-slateDark dark:text-slateMid font-bold text-sm sm:text-base">
                    <td className="py-3">{packageDetails?.packageName}</td>
                    <td className="py-3 text-right">
                      ${packageDetails?.price}
                    </td>
                  </tr>
                  <tr className="text-slateDark dark:text-slateMid font-bold text-sm sm:text-base">
                    <td className="py-3">Subtotal</td>
                    <td className="py-3 text-right">
                      ${packageDetails?.price}
                    </td>
                  </tr>
                  <tr className="text-slateDark dark:text-slateMid font-bold text-sm sm:text-base">
                    <td className="">Total</td>
                    <td className="text-right text-primaryColor">
                      ${packageDetails?.price}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="">
                <button
                  className="w-full flex items-center justify-center p-6 text-xl font-bold bg-primaryColor text-white leading-none rounded-lg"
                  data-hs-overlay="#payment-modal"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentSuccessModal></PaymentSuccessModal>
    </section>
  );
}

export default Billing;
