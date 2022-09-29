import React from "react";
import btnArrow from "../images/buttor-arrow.svg";
import laptop from "../images/twemoji_laptop.png";
import bicycle from "../images/twemoji_bicycle.png";
import airplane from "../images/twemoji_airplane.png";
import camera from "../images/twemoji_camera-with-flash.png";
import fill from "../images/ri_add-fill.png";

const Savings = () => {
  return (
    <div className="container max-w-[1200px] mx-auto my-24">
      <div className="grid grid-cols-2 gap-24">
        <div>
          <h2 className="text-[20px] leading-[24px] font-medium text-black">
            Saving Accounts
          </h2>
          <h1 className="text-[64px] leading-[70px] font-medium text-black py-5">
            Organize your money the right way
          </h1>
          <p className="text-[20px] leading-[36px] font-medium text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex justify-end items-end">
          <button class="btn btn-primary btn-link no-underline hover:no-underline">
            <div className="flex gap-2 items-center text-lg leading-[18px]">
              All Features
              <img src={btnArrow} alt="" />
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5 my-20">
        <div>
          <div className="bg-accent flex items-center justify-center h-[214px] rounded-lg">
            <img src={laptop} alt="" />
          </div>
          <h1 className="text-[20px] leading-[24px] font-medium text-black my-2">
            New Laptop
          </h1>
          <p className="text-[14px] leading-[22px] font-medium">400$</p>
        </div>
        <div>
          <div className="bg-accent flex items-center justify-center h-[214px] rounded-lg">
            <img src={bicycle} alt="" />
          </div>
          <h1 className="text-[20px] leading-[24px] font-medium text-black my-2">
            Dream bike
          </h1>
          <p className="text-[14px] leading-[22px] font-medium">200$</p>
        </div>
        <div>
          <div className="bg-accent flex items-center justify-center h-[214px] rounded-lg">
            <img src={airplane} alt="" />
          </div>
          <h1 className="text-[20px] leading-[24px] font-medium text-black my-2">
            Holiday
          </h1>
          <p className="text-[14px] leading-[22px] font-medium">14000$</p>
        </div>
        <div>
          <div className="bg-accent flex items-center justify-center h-[214px] rounded-lg">
            <img src={camera} alt="" />
          </div>
          <h1 className="text-[20px] leading-[24px] font-medium text-black my-2">
            Camera
          </h1>
          <p className="text-[14px] leading-[22px] font-medium">100$</p>
        </div>
        <div>
          <div className="bg-accent flex items-center justify-center h-[214px] rounded-lg">
            <img className="bg-black rounded-full" src={fill} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;
