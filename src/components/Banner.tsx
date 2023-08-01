import * as React from "react";
import { Address } from "../types/Address";
import Cta from "./Cta";

export interface BannerProps {
  name?: string;
  address?: Address;
}

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: BannerProps) => {
  const { name, address } = props;

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center bg-opacity-50 h-96 bg-[url(/src/assets/images/kitchenimage.jpeg)] `}
      >
        <div className=" absolute w-full left-0 right-0 top-10 flex flex-col items-center">
          <div className=" my-8 rounded-xl bg-black shadow-xl bg-opacity-75 px-12 py-8 text-center">
            <div>
              <h1 className="text-white text-5xl font-bold">{name}</h1>
              <p className="text-2xl py-6 pt-4 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
            </div>
            <div className="flex justify-between justify-center px-10 py-4">
              <Cta
                buttonText="Order Pickup"
                url="#"
                style="text-green-500 bg-white"
              ></Cta>
              <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-green-500 bg-white"
              ></Cta>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
