import React from "react";
import logo from "../images/banquee..png";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="container max-w-[1400px] mx-auto">
        <div className="grid grid-cols-5 my-16">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-[18px] leading-[25px] font-medium text-black">
                About
              </h1>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-[16px] leading-[25px] font-medium">
                  Features
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Pricing
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Support
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-[18px] leading-[25px] font-medium text-black">
                Blog
              </h1>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-[16px] leading-[25px] font-medium">
                  Products
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Technology
                </p>
                <p className="text-[16px] leading-[25px] font-medium">Crypto</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-[18px] leading-[25px] font-medium text-black">
                Webflow
              </h1>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-[16px] leading-[25px] font-medium">
                  Styleguide
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Licensing
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Changelog
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="text-[18px] leading-[25px] font-medium text-black">
                Social Media
              </h1>
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-[16px] leading-[25px] font-medium">
                  Twitter
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Facebook
                </p>
                <p className="text-[16px] leading-[25px] font-medium">
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center py-5">
          <p className="text-[14px] leading-[22px] font-medium">
            © Made by <span className="text-primary">Pawel Gola</span> - Powered
            by <span className="text-primary">Webflow</span>
          </p>
          <div className="flex gap-3 items-center">
            <p className="text-[14px] leading-[22px] font-medium">Impressum</p>
            <p className="text-[14px] leading-[22px] font-medium">
              Datenschutz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
