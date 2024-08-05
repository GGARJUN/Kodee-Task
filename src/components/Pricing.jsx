import React, { useState } from "react";

const Pricing = () => {
  const [activeForm, setActiveForm] = useState('signUp');

  const toggleForm = (formName) => {
    setActiveForm(formName);
  };
  return (
    <>
      <div className="relative mt-56  min-h-screen ">
        <div
          className="absolute "
          style={{ backgroundColor: "rgba(47, 24, 147, 1)" }}
        >
          <img
            src="/Hero/4.jpeg"
            alt=""
            className="opacity-50 object-cover h-[700px]  "
          />
        </div>
        <div className="absolute text-white w-[369px] h-[318px] top-[216px] left-[116px]">
          <h1 className="text-3xl ">
            We solve digital problems with an outstanding creative flare
          </h1>
          <p className="text-base mt-3 text-gray-300">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="bg-white absolute  top-[100px] left-[615px] rounded-md">
          <div className="flex items-center  justify-center ">
            <div className="w-[400px] h-[450px] p-8    relative overflow-hidden">
              <div className="flex justify-between mb-8">
                <button
                  className={`border-b-2 px-4 py-2 font-semibold ${
                    activeForm === "signUp"
                      ? "border-blue-700 text-blue-700"
                      : "text-gray-400"
                  }`}
                  onClick={() => toggleForm("signUp")}
                >
                  SIGN UP
                </button>
                <button
                  className={`border-b-2 px-4 py-2 font-semibold ${
                    activeForm === "login"
                      ? "border-blue-700 text-blue-700"
                      : "text-gray-400"
                  }`}
                  onClick={() => toggleForm("login")}
                >
                  LOGIN
                </button>
              </div>
              <div
                className={`transform transition-transform duration-500 ${
                  activeForm === "signUp"
                    ? "translate-x-0"
                    : "-translate-x-[130%]"
                }`}
              >
                <form className="w-full">
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Your password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Create an Account
                    </button>
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-400 mx-2">or</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Login via Twitter
                    </button>
                  </div>
                </form>
              </div>
              <div
                className={`transform transition-transform duration-500 absolute top-28 w-full ${
                  activeForm === "login" ? "-translate-x-7" : "translate-x-full"
                }`}
              >
                <form className="w-full">
                  <div className="mb-6 flex justify-center items-center">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6 flex justify-center items-center">
                    <input
                      type="password"
                      placeholder="Your password"
                      className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-6 flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-96    py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Login
                    </button>
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-400 mx-2">or</span>
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <button
                      type="button"
                      className="w-96 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Login via Twitter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
