"use client";

import { testimonialData } from "@/lib/Data/TestimonialData";
import { useState } from "react";
import { Swords, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialCards() {
  // State for FAQ Accordion
  // const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // const toggleAccordion = (index) => {
  //     setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  // };

  // State for Testimonial Carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextSlide = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
    <div className="relative p-4">
      {/* Carousel Content */}
      <div
        className="flex testimonial-slider"
        style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
      >
        {testimonialData.map((testimonial, index) => (
          <div key={index} className="shrink-0 w-full p-2">
            <blockquote className="p-8 bg-dark rounded-xl shadow-2xl space-y-4 border-l-4 border-cyan-400">
              <div className="flex items-center space-x-2 text-blue-400 mb-2">
                <Swords className="w-5 h-5" />
                <Swords className="w-5 h-5" />
                <Swords className="w-5 h-5" />
              </div>
              <p className="text-xl md:text-2xl text-gray-100 font-bold">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-base font-semibold text-blue-400 pt-4 border-t border-slate-700 block">
                — {testimonial.footer}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      

      {/* Mobile Navigation/Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonialData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonialIndex(index)}
            className={`w-3 h-3 cursor-pointer rounded-full transition-all duration-300 ${
              index === currentTestimonialIndex
                ? "bg-blue-500 w-6"
                : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer top-1/2 left-0 md:-left-8 transform -translate-y-1/2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg z-10 transition duration-300 hidden md:block"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute cursor-pointer top-1/2 right-0 md:-right-8 transform -translate-y-1/2 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg z-10 transition duration-300 hidden md:block"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>

    </>
  );
}
