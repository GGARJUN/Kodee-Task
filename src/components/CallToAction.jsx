import React from "react";

const CallToAction = () => {
  return (
    <>
      <div className="relative  min-h-screen ">
        <div
          className="absolute"
          style={{ backgroundColor: "rgba(47, 24, 147, 1)" }}
        >
          <img
            src="/Hero/5.jpeg"
            alt=""
            className="opacity-50 object-cover h-[605px]  w-[1200px]"
          />
        </div>
        <div className="relative flex justify-center items-center flex-col gap-10 top-20">
          <h1 className="text-white text-6xl font-bold w-[480px] text-center">
            Easy to setup. Easy to maintain
          </h1>
          <p className="w-[518px] text-gray-200 text-center text-2xl ">
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end
            framework for faster and easier web development.
          </p>
        </div>
        <div className="relative items-center top-40 gap-5 flex justify-center ">
          <div className="bg-red-500 h-16  w-16 rounded-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="bg-[#25DAC5] px-9 py-4 rounded-full font-semibold text-white">Get Started</div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
