import React from "react";
import webflow from "../images/logos/Vector (4).png";
import shopify from "../images/logos/Shopify_logo_2018 1.png";
import zapier from "../images/logos/Vector (5).png";
import bitcoin from "../images/logos/# 1.png";
import paypal from "../images/logos/PayPal 1.png";
import mastercard from "../images/logos/Mastercard-logo 1.png";
import visa from "../images/logos/path3789.png";
import googlePay from "../images/logos/Google_Pay_(GPay)_Logo_(2018-2020) 1.png";
import applePay from "../images/logos/Apple_Pay_logo 1.png";
import amazonPay from "../images/logos/Amazon_Pay_logo 1.png";
import vector from "../images/Vector.svg";

const Tools = () => {
  return (
    <div className="container max-w-[1200px] mx-auto my-24">
      <div className="flex flex-wrap gap-3 max-w-[740px]">
        <div className="bg-base-200 p-5 rounded-md">
          <img src={webflow} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={shopify} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={zapier} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={bitcoin} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={paypal} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={mastercard} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={visa} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={googlePay} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={applePay} alt="" />
        </div>
        <div className="bg-base-200 p-5 rounded-md">
          <img src={amazonPay} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-24 my-24">
        <div>
          <h2 className="text-[20px] leading-[24px] font-medium text-black">
            Notifications
          </h2>
          <h1 className="text-[64px] leading-[70px] font-medium text-black py-3">
            Stay notified
          </h1>
          <p className="text-[20px] leading-[36px] font-medium text-black">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Secure and encrypted integration</p>
          </div>
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Fully API interface</p>
          </div>
          <div className="flex gap-5 items-center text-lg leading-8 text-black font-medium">
            <div className="bg-accent py-2 px-[6px] rounded-full">
              <img src={vector} alt="" />
            </div>
            <p>Payments worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
