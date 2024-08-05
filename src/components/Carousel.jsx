// src/components/Carousel.jsx
import React, { useState } from "react";

import Feature from "./Feature";
import Contant from "./Contant";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";
import ShowCase from "./ShowCase";
import Team from "./Team";
import Contact from "./Contact";
import LastPage from "./LastPage";
import Footer from "./Footer";

const Carousel = () => {
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const slides = [
    {
      id: 1,
      title: "Startup",
      text: "Forgot About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      id: 2,
      title: "Startup",
      text: "Forgot About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      id: 3,
      title: "Startup",
      text: "Forgot About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      id: 4,
      title: "Startup",
      text: "Forgot About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    {
      id: 5,
      title: "Startup",
      text: "Forgot About Code",
      description:
        "Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding.",
    },
    // Add more slides here
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu when a section is selected
  };
  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute w-full"
          style={{ backgroundColor: "rgba(47, 24, 147, 1)" }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/2e9d/962f/4c269f57807850115899b4611a2bf3ba?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PrK-zr3LJD5qiK8F58s~9WvRCQn6hK-7h3VhjbmwUIuttLsLhXABZjZ8lLmxSuwXE63izsC~9Sk-nGyOq7CfgEKzgFsfMzePEhSYHG~3ao~QWh5nEW8hgE-EGlL9moH2qGS-MvTYKLMihwxqxRpESfJByB5dgmcWke-sr3KSCvzG9i7A9J05oOh3O8Lo-RqyypNfvkmvNcOWUaTKekqhhu5a6BQ77i-qZDNssyBX2TwbfDvU-Q65CoE3o7q0h9XSwodtguiF6C4O0CHMwLRP~c87VmtLMNII-k1aSX~zl5bcuxop2Tz6RiT27RIgVBBYzarw3CXD95lGJWAuqMXuvg__"
            alt=""
            className="opacity-50 object-cover h-screen w-full "
          />
        </div>
        <section id="home">
          <div className="relative ">
            <div className="  w-full h-20 ">
              <ul className=" text-white  flex justify-center items-center pt-10 gap-10">
                <button
                  onClick={() => scrollToSection("home")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("feature")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  Feature
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("blog")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  <img src="/Hero/icon.png" alt="" />
                </button>
                <button
                  onClick={() => scrollToSection("be")}
                  className=" hover:text-[#48E4EE] flex items-center gap-1  font-semibold"
                >
                  Be
                </button>
              </ul>
            </div>
          </div>

          <div className="relative overflow-hidden h-96">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0  flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h1 className="font-bold text-xl">{slide.title}</h1>
                    <h2 className="font-bold text-4xl mt-4">{slide.text}</h2>
                    <p className="px-44 mt-4 text-center">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button className=" absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create account
          </button>
        </section>
      </div>
      <Contant />
      <section id="feature" className="-mt-[86px]">
        <Feature />
      </section>
      <Pricing />
      
      <div className="mt-32">
      <Testimonial/>
      </div>
      <div>
        <CallToAction/>
      </div>
      <section id="blog" className="mt-10">
        <ShowCase/>
      </section>
      <section id="be">
        <Team/>
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
      <section id="pricing" className="">
        <LastPage/>
      </section>
      <div className="mt-[350px]">
        <Footer/>
      </div>
      
    </>
  );
};

export default Carousel;

