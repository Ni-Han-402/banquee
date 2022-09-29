import React from "react";
import mobileApp from "../images/app.svg";
import vector1 from "../images/Vector-1.png";
import vector2 from "../images/Vector-2.png";
import vector3 from "../images/Vector-3.png";
import vector4 from "../images/Vector-4.png";
import vector5 from "../images/Vector-5.png";
import vector6 from "../images/Vector-6.png";

const Features = () => {
  return (
    <div className="container max-w-[1200px] mx-auto py-32">
      <div className="grid grid-cols-2 gap-24">
        <div>
          <h1 className="text-[80px] leading-[88px] font-medium text-black">
            One app.
          </h1>
          <h1 className="text-[80px] leading-[88px] font-medium text-black">
            One banking.
          </h1>
          <div className="grid grid-cols-2 gap-6 mt-20">
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector1} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector2} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector3} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector4} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector5} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
            <div className="px-5 py-8 border rounded-lg">
              <div className="w-10 h-10 bg-accent rounded-full flex justify-center items-center">
                <img src={vector6} alt="" />
              </div>

              <h5 className="text-xl leading-6 font-medium text-black my-3">
                Instant transactions
              </h5>
              <p className="text-black">
                Odio euismod lacinia at quis. Amet purus gravida quis blandit
                turpis.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={mobileApp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
