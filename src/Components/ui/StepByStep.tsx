import { howItWorksData } from '@/lib/Data/HowItWorksData';
import { Waypoints } from "lucide-react";

export default function StepByStep() {
  return (
    <div className="max-w-full">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-medium mb-4">
            Our Process
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Our 4-Step Security Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure comprehensive coverage,
            clear communication, and fast, actionable results.
          </p>
        </div>

        <div className="relative px-5 flex flex-col items-center">
          {/* Vertical Connector Line with Gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block z-0 rounded-full opacity-20"></div>

          {howItWorksData.map((item, index) => {
            const IconComponent = item.icon;
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={item.step}
                className={`relative lg:flex grid w-full max-w-6xl py-6 md:py-10 ${
                  isOdd ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Timeline Icon Circle - Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br from-blue-600 to-purple-600 border-4 border-white shadow-xl shadow-blue-500/30 z-10 hover:scale-110 transition-transform duration-300">
                  <Waypoints className="w-6 h-6 text-white" />
                </div>

                {/* Content Card */}
                <div className="group relative w-full md:w-5/12 ml-8 md:m-0">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="shrink-0 p-3 rounded-xl bg-linear-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        {/* Step number badge */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 border border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-300">
                          <span className="text-xl font-bold text-blue-600 group-hover:text-white transition-colors duration-300">{item.step}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-blue-100/50 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-blue-500 block md:hidden rounded-full opacity-20"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1.5 md:hidden flex items-center justify-center w-6 h-6 rounded-full bg-linear-to-br from-blue-600 to-purple-600 border-2 border-white shadow-lg shadow-blue-500/30 z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}