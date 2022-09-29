import React from "react";
import vector from "../images/Vector.svg";
import banko from "../images/b..png";
import btnArrow from "../images/buttor-arrow.svg";
const Notifications = () => {
  return (
    <div className="container max-w-[1200px] mx-auto my-24">
      <div className="grid grid-cols-2 gap-24">
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-[20px] leading-[24px] font-medium text-black">
            Notifications
          </h2>
          <h1 className="text-[64px] leading-[70px] font-medium text-black">
            Stay notified
          </h1>
          <p className="text-[20px] leading-[36px] font-medium text-black py-5">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Malesuada Ipsum</p>
          </div>
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Vestibulum</p>
          </div>
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Parturient Lorem</p>
          </div>
          <button class="btn btn-primary px-0 btn-link no-underline hover:no-underline mt-8">
            <div className="flex gap-2 items-center text-lg leading-[18px]">
              Compare Cards
              <img src={btnArrow} alt="" />
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-base-200 p-3 max-w-[500px] items-center rounded-md">
            <div className="flex gap-3">
              <div className="bg-primary p-2 rounded-md">
                <img src={banko} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  Banko.
                </h1>
                <p className="text-[16px] leading-[25px] font-medium">
                  You payment of 49€ has been processed!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 max-w-[500px] items-center rounded-md">
            <div className="flex gap-3">
              <div className="bg-primary p-2 rounded-md">
                <img src={banko} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  Banko.
                </h1>
                <p className="text-[16px] leading-[25px] font-medium">
                  You got a new support message!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 max-w-[500px] items-center rounded-md">
            <div className="flex gap-3">
              <div className="bg-primary p-2 rounded-md">
                <img src={banko} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  Banko.
                </h1>
                <p className="text-[16px] leading-[25px] font-medium">
                  You payment was declined!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 max-w-[500px] items-center rounded-md">
            <div className="flex gap-3">
              <div className="bg-primary p-2 rounded-md">
                <img src={banko} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  Banko.
                </h1>
                <p className="text-[16px] leading-[25px] font-medium">
                  Please verify your payment of 99€!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-base-200 p-3 max-w-[500px] items-center rounded-md">
            <div className="flex gap-3">
              <div className="bg-primary p-2 rounded-md">
                <img src={banko} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  Banko.
                </h1>
                <p className="text-[16px] leading-[25px] font-medium">
                  New account statistics are available!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
