import React from "react";
import card from "../images/card.png";
import vector from "../images/Vector.svg";
import btnArrow from "../images/buttor-arrow.svg";

const Banner = () => {
  return (
    <div className="container max-w-[1200px] mx-auto py-32">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-[100px] leading-[110px] text-black font-medium">
            Banking starts here.
          </h1>
          <p className="text-2xl leading-10 text-black font-medium pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-8">
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-accent py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Instant Transfer</p>
            </div>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-accent py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Payments worldwide</p>
            </div>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-accent py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Saving accounts</p>
            </div>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-accent py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>100% mobile banking</p>
            </div>
          </div>
          <div className="flex gap-5 items-center pt-20">
            <button class="btn btn-primary text-white hover:bg-accent hover:text-primary border-none text-lg leading-[18px]">
              Open Account
            </button>
            <button class="btn btn-primary btn-link no-underline hover:no-underline">
              <div className="flex gap-2 items-center text-lg leading-[18px]">
                Compare Cards
                <img src={btnArrow} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
