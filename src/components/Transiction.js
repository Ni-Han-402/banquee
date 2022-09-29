import React from "react";
import vector from "../images/vector-white.png";
import apple from "../images/apple.png";

const Transiction = () => {
  return (
    <div className="bg-accent">
      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 gap-24">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[64px] leading-[70px] font-medium text-black">
              Send & receive money instantly
            </h1>
            <p className="text-[20px] leading-[36px] font-medium text-black py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-primary py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Malesuada Ipsum</p>
            </div>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-primary py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Vestibulum</p>
            </div>
            <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
              <div className="bg-primary py-2 px-[6px] rounded-full">
                <img src={vector} alt="" />
              </div>
              <p>Parturient Lorem</p>
            </div>
          </div>
          {/* Left Part */}
          <div className="grid grid-cols-1 gap-3 pt-16">
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Apple
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Macbook
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -999€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Amazon
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Electronics
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -49€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Twitter
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">Ads</p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -29€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Microsoft
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Office Suite
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -149€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Dropbox
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Cloud
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -14€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Paypal
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Shopping
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -200€
                </h1>
              </div>
            </div>
            <div className="bg-white p-3 max-w-[400px] flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <div className="bg-primary p-2 rounded-md">
                  <img src={apple} alt="" />
                </div>
                <div>
                  <h1 className="text-[18px] leading-[25px] font-medium text-black">
                    Apple
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium">
                    Macbook
                  </p>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] leading-[25px] font-medium text-black">
                  -999€
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transiction;
