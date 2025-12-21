import Link from "next/link";
import { Shield, Zap, Scale } from "lucide-react";
import { AcademyCoursesBlue, AcademyCoursesGRC, AcademyCoursesRed } from "@/lib/Data/AcademyCourses";

export const AcademyCoursesSection: React.FC = () => {
  const academyDiplomas = [
    {
      title: AcademyCoursesBlue[0].title,
      description: AcademyCoursesBlue[0].description,
      duration: AcademyCoursesBlue[0].duration,
      focus: AcademyCoursesBlue[0].focus,
      icon: Shield,
      color: "blue",
      badge: "Blue Team Defensive Diploma",
    },
    {
      title: AcademyCoursesRed[0].title,
      description: AcademyCoursesRed[0].description,
      duration: AcademyCoursesRed[0].duration,
      focus: AcademyCoursesRed[0].focus,
      icon: Zap,
      color: "red",
      badge: "Red Team Offensive Diploma",
    },
    {
      title: AcademyCoursesGRC[0].title,
      description: AcademyCoursesGRC[0].description,
      duration: AcademyCoursesGRC[0].duration,
      focus: AcademyCoursesGRC[0].focus,
      icon: Scale,
      color: "purple",
      badge: "GRC & Compliance Diploma",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-600 to-blue-700",
        text: "text-blue-600",
        bgLight: "bg-blue-50",
        border: "border-blue-200",
        borderHover: "group-hover:border-blue-400",
        glow: "from-blue-600 to-blue-500",
        shadow: "shadow-blue-500/30",
        badgeBg: "bg-blue-100",
      },
      red: {
        bg: "from-red-600 to-red-700",
        text: "text-red-600",
        bgLight: "bg-red-50",
        border: "border-red-200",
        borderHover: "group-hover:border-red-400",
        glow: "from-red-600 to-red-500",
        shadow: "shadow-red-500/30",
        badgeBg: "bg-red-100",
      },
      purple: {
        bg: "from-purple-600 to-purple-700",
        text: "text-purple-600",
        bgLight: "bg-purple-50",
        border: "border-purple-200",
        borderHover: "group-hover:border-purple-400",
        glow: "from-purple-600 to-purple-500",
        shadow: "shadow-purple-500/30",
        badgeBg: "bg-purple-100",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="academy"
      className="m-0 max-w-full px-4 py-20 md:px-24 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 max-w-full">
        {/* Header */}
        <div className="text-center grid gap-3 place-items-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-medium mb-2">
            Training Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cyber Hunter Academy
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl">
            Choose your specialization and master the skills needed for elite
            cybersecurity roles.
          </p>
        </div>

        {/* Diploma Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {academyDiplomas.map((diploma, index) => {
            const colors = getColorClasses(diploma.color);
            const IconComponent = diploma.icon;

            return (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-linear-to-r ${colors.glow} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
                {/* Card */}
                <div className={`relative h-full bg-white rounded-2xl border ${colors.border} ${colors.borderHover} hover:shadow-xl hover:${colors.shadow} transition-all duration-300 overflow-hidden`}>
                  {/* Background pattern */}
                  <div className={`absolute inset-0 bg-linear-to-br ${colors.bgLight} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-8 space-y-6">
                    {/* Icon and Badge */}
                    <div className="flex gap-4 items-center">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-linear-to-br ${colors.bg} shadow-lg ${colors.shadow} group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <span className={`${colors.text} ${colors.badgeBg} px-3 py-1 rounded-full text-sm font-bold tracking-wide`}>
                        {diploma.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold text-gray-900 group-hover:${colors.text} transition-colors duration-300`}>
                      {diploma.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {diploma.description}
                    </p>
                    
                    {/* Divider */}
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
                    
                    {/* Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          {diploma.duration}
                        </p>
                      </div>
                      <div>
                        <span className={`${colors.text} ${colors.badgeBg} px-4 py-2 rounded-full text-sm font-semibold`}>
                          {diploma.focus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Link
            href={"/academy-courses"}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            View Full Academy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AcademyCoursesSection;