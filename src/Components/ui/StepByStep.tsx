import { howItWorksData } from '@/lib/Data/HowItWorksData';
import {
  Waypoints
} from "lucide-react";

// Helper to get Tailwind classes for odd/even steps (visual separation)
const getStepClasses = (index: number) => {
  return index % 2 === 0
    ? "bg-white shadow-xl transform hover:scale-[1.02] transition duration-300"
    : "bg-gray-50 border border-gray-200 transform hover:scale-[1.02] transition duration-300";
};

export default function StepByStep() {
  return (
    <div className="max-w-full px-4 py-16 md:px-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Our 4-Step Security Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure comprehensive coverage,
              clear communication, and fast, actionable results.
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* Vertical Connector Line (Hidden on Mobile) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block z-0"></div>

            {howItWorksData.map((item, index) => {
              const IconComponent = item.icon; // Component from lucide-react
              const isOdd = index % 2 !== 0;

              return (
                <div
                  key={item.step}
                  className={`relative lg:flex grid w-full max-w-6xl py-6 md:py-10 ${
                    isOdd ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Icon Circle (Timeline point) - Hidden on Mobile */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 border-4 border-white text-white z-10">
                    <Waypoints className="w-6 h-6" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 p-6 ml-8 md:m-0 rounded-xl space-y-3 ${getStepClasses(
                      index
                    )}`}
                  >
                    <div className="lg:flex grid items-center lg:space-x-4 space-y-4">
                      <div className="p-3 rounded-full w-fit h-fit bg-dark text-white shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-black grow">
                        {item.step}. {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>

                  {/* Connector line for mobile view */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 block md:hidden"></div>
                  {/* Icon marker for mobile view */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 md:hidden flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 border-2 border-white z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}
