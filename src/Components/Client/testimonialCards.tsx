"use client";

import { testimonialData } from "@/lib/Data/TestimonialData";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, ShieldCheck, Activity } from "lucide-react";

export default function TestimonialCards() {
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
    <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
      {/* Top Technical Metadata */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2 font-mono text-[10px] text-blue-600 uppercase tracking-widest">
          <Activity className="w-3 h-3 animate-pulse" />
          <span>Client_Feedback_Verified</span>
        </div>
        <div className="font-mono text-[10px] text-slate-400">
          SEC_ID: 0x{currentTestimonialIndex + 1}7F
        </div>
      </div>

      {/* Carousel Content */}
      <div className="w-full overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-blue-500/5">
        <div
          className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
          style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
        >
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="shrink-0 w-full">
              <div className="group relative bg-white p-8 md:p-16 lg:p-20 overflow-hidden">
                {/* Subtle Technical Grid Background */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
                />

                {/* Decorative Quote Icon */}
                <div className="absolute top-10 right-10 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                  <Quote className="w-32 h-32 text-blue-600" />
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                  {/* Rating with Cyber Stars */}
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <ShieldCheck key={i} className="w-5 h-5 text-blue-500 fill-blue-50" />
                    ))}
                  </div>
                  
                  {/* Quote Text */}
                  <blockquote className="max-w-3xl">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                  
                  {/* Fancy Divider */}
                  <div className="flex items-center gap-4 w-full justify-center">
                    <div className="h-px w-12 bg-linear-to-r from-transparent to-slate-200" />
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <div className="h-px w-12 bg-linear-to-l from-transparent to-slate-200" />
                  </div>
                  
                  {/* Verified User Info */}
                  <footer className="flex flex-col items-center gap-4">
                    <div className="relative">
                       {/* Circle Accent */}
                      <div className="absolute -inset-2 border border-blue-100 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-500/20 relative z-10">
                        <span className="text-white font-bold text-xl">
                          {testimonial.footer.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900 uppercase tracking-tighter">
                        {testimonial.footer}
                      </p>
                      <p className="text-xs text-blue-600 uppercase font-bold tracking-widest mt-1">
                        Verified_Partner_Node
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls Wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
        
        {/* Navigation Dots */}
        <div className="flex items-center gap-3 order-2 md:order-1">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentTestimonialIndex
                  ? "bg-blue-600 w-10 h-2"
                  : "bg-slate-200 hover:bg-slate-300 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 order-1 md:order-2">
          <button
            onClick={prevSlide}
            className="p-4 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-900 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Monospace Background Label */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-mono text-[8px] text-slate-300 uppercase tracking-[1em] whitespace-nowrap opacity-50">
        System.Trust_Index_Encrypted
      </div>
    </div>
  );
}