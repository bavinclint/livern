"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import slideOne from "@/assets/images/slide/slide-1.jpg";
import slideTwo from "@/assets/images/slide/slide-2.jpg";
import slideThree from "@/assets/images/slide/slide-3.jpg";
import { Libre_Bodoni } from "next/font/google";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
});

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
    <div
      className={`${bodoni.className} w-full h-[90vh] overflow-hidden py-2 px-4 group`}
    >
      <Image
        src={slides[currentIndex].url}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div
        style={{ translate: "-50%" }}
        className="absolute flex left-1/2 bottom-4"
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <BsDashLg />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero;
