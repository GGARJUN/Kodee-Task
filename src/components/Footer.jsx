import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#2F1893] h-[240px]  ">
        <div className="flex justify-between pt-16 px-28 text-white">
          <h1 className="font-bold">Startup 3</h1>
          <div className="flex gap-5 items-center">
            <h1>Privacy policy</h1>
            <h1>Terms</h1>
            <img src="/icon/t.png" alt="" className="object-cover " />
            <img src="/icon/facebook.png" alt="" className="object-cover " />
            <img src="/icon/google.png" alt="" className="object-cover " />
          </div>
        </div>
        <span className="mx-28 border-2 flex mt-10"></span>
        <div className="flex justify-between pt-10 px-28 text-white">
          <div className="flex gap-5 items-center">
            <h1>Tour</h1>
            <h1>Features</h1>
            <h1>Pricing Plans</h1>
            <h1>Our Works</h1>
            <h1>Brands</h1>
            <h1>Contacts</h1>
          </div>
          <h1 className="">© 2017 Designmodo. All rights reserved.</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
