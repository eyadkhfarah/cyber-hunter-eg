"use client";

import { faqData } from "@/lib/Data/FQAData";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FQACards() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => {
        const isOpen = index === openQuestionIndex;
        return (
          <div
            key={index}
            className="group relative"
          >
            {/* Glow effect */}
            <div className={`absolute w-full -inset-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur transition duration-500 ${
              isOpen ? "opacity-40" : "opacity-0 group-hover:opacity-20"
            }`} />
            
            {/* Card */}
            <div className={`relative w-full bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen 
                ? "border-blue-400 shadow-xl shadow-blue-500/20" 
                : "border-gray-200 shadow-lg group-hover:border-blue-300 group-hover:shadow-xl"
            }`}>
              {/* Button */}
              <button
                className="w-full flex justify-between items-center p-6 text-left transition-all duration-300 focus:outline-none group/button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-bold transition-colors duration-300 pr-4 ${
                  isOpen 
                    ? "text-blue-600" 
                    : "text-gray-900 group-hover/button:text-blue-600"
                }`}>
                  {item.question}
                </span>
                
                <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                  isOpen 
                    ? "bg-linear-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30" 
                    : "bg-blue-100 group-hover/button:bg-blue-200"
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${
                      isOpen
                        ? "transform rotate-180 text-white"
                        : "text-blue-600"
                    }`}
                  />
                </div>
              </button>
              
              {/* Answer */}
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 transform transition-transform duration-500 ${
                isOpen ? "scale-x-100" : "scale-x-0"
              }`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}