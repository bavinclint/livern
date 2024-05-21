"use client";
import Image from "next/image";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import slideOne from "@/assets/images/slide/slide-1.jpg";
import slideTwo from "@/assets/images/slide/slide-2.jpg";
import slideThree from "@/assets/images/slide/slide-3.jpg";

const Hero = () => {
  const slides = [{ url: slideOne }, { url: slideTwo }, { url: slideThree }];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[95vh] mt-16 rounded-md overflow-hidden group relative">
      <Image
        src={slides[currentIndex].url}
        className="w-full h-full  bg-center bg-cover duration-500"
        alt=""
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-main text-black cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-main text-black cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div
        style={{ translate: "-50%" }}
        className="absolute flex left-1/2 bottom-6"
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <BsDashLg className="w-10 h-10 text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
