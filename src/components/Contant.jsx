import React from "react";

const Contant = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute"
          style={{ backgroundColor: "rgba(47, 24, 147, 1)" }}
        >
          <img
            src="/Hero/2.jpeg"
            alt=""
            className="opacity-50 object-cover  w-full"
          />
        </div>
        <div className="absolute text-white top-[20%] left-1/2 transform -translate-x-1/2">
          <h1 className="text-center font-medium ">FREE SAMPLE</h1>
          <h1 className="text-center text-4xl mt-7 font-bold">Powerful Generator and Free Figma Sources </h1>
          <p className="text-center mt-6 text-gray-50 text-sm">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design. All of the components
            are made in the same style, and can easily be integrated into
            projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contant;
