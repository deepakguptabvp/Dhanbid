"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
  // Banner images from public folder
  const banners = [
    "/banners/banner-1.png",
    "/banners/banner-2.jpg",
    "/banners/banner-3.jpeg",
    "/banners/banner-4.png",
    "/banners/banner-5.jpg",
    "/banners/banner-6.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        goToNextSlide();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentSlide(index); 
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xs shadow-lg lg:my-2">
      {/* Carousel container */}
      <div
        className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] w-full"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-300 cursor-pointer"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-all duration-300 cursor-pointer"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10 ">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer duration-300 border-amber-600 ${
              currentSlide === index ? "bg-white scale-125 border border-amber-600" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
