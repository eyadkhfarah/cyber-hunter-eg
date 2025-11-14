"use client";

import { faqData } from "@/lib/Data/FQAData";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FQACards() {
  // State for FAQ Accordion
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => {
        const isOpen = index === openQuestionIndex;
        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left font-semibold text-black transition-colors duration-300 hover:bg-blue-50 focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-xl font-bold">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen
                    ? "transform rotate-180 text-blue-600"
                    : "text-gray-500"
                }`}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen
                  ? "max-h-96 opacity-100 p-5 pt-0"
                  : "max-h-0 opacity-0 p-0"
              }`}
            >
              <p className="text-gray-700 text-base border-t border-gray-200 pt-3">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
