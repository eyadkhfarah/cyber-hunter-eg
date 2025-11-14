import React from "react";
import {
  Shield,
  Zap,
  CheckCircle,
  GraduationCap,
  Activity,
} from "lucide-react";
import Link from "next/link";

// NOTE: Next.js specific Metadata imports and Link component have been removed/replaced
// to ensure the component is runnable in a single-file React environment.

// --- Define Types ---
interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  focus: string;
}

interface LearnSectionProps {
  title: string;
  points: string[];
  color: string; // e.g., 'text-indigo-600' or 'text-red-600'
}

// --- Data for Curriculum Points ---
const socLearnPoints: string[] = [
  "Network Fundamentals (OSI, TCP/IP, Protocols)",
  "In-depth Linux & Windows Log Analysis for SOC",
  "Threats, Vulnerabilities, & Mitigation Strategies (CompTIA Security+ focus)",
  "Security Operations Center (SOC) structure and workflow (L1, L2, L3)",
  "Hands-on SIEM implementation and correlation rule creation (QRadar / Splunk / ELK)",
  "Advanced Incident Response and Reporting procedures",
  "Practical Threat Hunting techniques and query languages",
  "Certification readiness for CompTIA Security+ and Certified SOC Analyst (CSA)",
  "Final hands-on SOC Graduation Project simulating a real-world incident.",
];

const pentestLearnPoints: string[] = [
  "Operating System Deep Dive (Linux & Windows Server basics for Pentesters)",
  "General Security Concepts and Architecture (CompTIA Security+ focus)",
  "Core Penetration Testing Basics and Methodology",
  "Vulnerability Assessment and Network Attack Exploitation",
  "Mastering Web Attack Vectors: XSS, SQL Injection, and Sensitive Data Exposure (eWPTv2 focus)",
  "File and Resource Attack techniques",
  "Encoding, Filtering, and Injection Validation bypasses",
  "Certification readiness for eJPTv2 and eWPTv2.",
];

// --- Components ---

// A simple course card component for reusability
const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  focus,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-2xl font-bold text-indigo-700 mb-2">{title}</h2>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="flex justify-between items-center text-sm font-medium">
      <span className="text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
        {focus}
      </span>
      <span className="text-slate-500 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {duration}
      </span>
    </div>
  </div>
);

const LearnSection: React.FC<LearnSectionProps> = ({
  title,
  points,
  color,
}) => (
  <div className="mt-12 p-8 bg-gray-50 rounded-xl shadow-inner">
    <div className="flex items-center gap-2 mb-6">
      <GraduationCap className={`w-6 h-6 ${color}`} />
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-4">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <Activity className={`w-5 h-5 mt-1 mr-3 shrink-0 ${color}`} />
          <span className="text-slate-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const GuaranteeBanner: React.FC = () => (
  <section className="bg-linear-to-r from-green-500 to-green-700 p-8 rounded-2xl shadow-2xl text-white my-16  mx-auto">
    <div className="md:flex grid items-center space-x-4">
      <CheckCircle className="w-10 h-10 shrink-0 md:m-0 mb-4" />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-1">
          Our 100% Practical Guarantee
        </h2>
        <p className="text-lg opacity-90">
          Every CyberHunter course is designed with a focus on real-world,
          hands-on labs, ensuring you gain job-ready, practical skills that
          directly apply to the cybersecurity industry.
        </p>
      </div>
      <Link
        href="/academy-courses/guarantee"
        className="hidden md:block px-6 py-2 bg-white text-green-700 font-bold rounded-lg shadow-md hover:bg-green-100 transition duration-150 shrink-0"
      >
        Learn More
      </Link>
    </div>
  </section>
);

// NOTE: Since we cannot run Next.js's generateStaticMetadata, we remove the exports.

// --- Main Page Component ---
const App: React.FC = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          Academy Courses
        </h1>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Elevate your security expertise with CyberHunter Academy. Our
          courses are built on the real-world intelligence and analysis from our
          expert team. Gain practical, cutting-edge skills in information
          security, tailored to address the specific challenges and cyber
          threats affecting the MENA region and global landscape.
        </p>
      </header>

      {/* --- Courses Section --- */}
      <section className="mt-16">
        <div className="mx-auto">
          {/* Blue Team Courses */}
          <div className="mb-16">
            <div className="md:flex grid gap-3 place-items-center items-center justify-center gap-3 mb-4">
              <Shield className="text-2xl p-3 bg-indigo-50 border border-indigo-200 text-indigo-600" />
              <h2 className="text-3xl font-bold text-center text-black">
                Blue Team Defensive Diplomas
              </h2>
            </div>
            <p className="text-center text-lg text-slate-600 mb-8">
              Become an expert in monitoring, detection, and incident response
              with our SOC-focused training.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <CourseCard
                title="Cyber Security Blue Team (SOC) Diploma"
                description="Master the skills to monitor and defend an organization’s systems. Includes practical training in SIEM operations, log analysis, incident response, and preparation for globally recognized certifications."
                duration="3.5 - 4 Months"
                focus="SOC Analyst"
              />
              <div className="bg-gray-100 p-6 rounded-xl shadow-inner border border-dashed border-gray-400 flex items-center justify-center">
                <p className="text-center text-gray-500 italic">
                  More Blue Team courses coming soon!
                </p>
              </div>
            </div>

            {/* What You Will Learn - SOC */}
            <LearnSection
              title="What You Will Learn in the SOC Diploma"
              points={socLearnPoints}
              color="text-indigo-600"
            />
          </div>
          <div className="border-t pt-12 mt-12"></div> {/* Separator */}
          {/* Red Team Courses */}
          <div className="mb-16">
            <div className="md:flex grid place-items-center gap-3 items-center justify-center gap-3 mb-4">
              <Zap className="text-2xl p-3 text-red-600 bg-indigo-50 border border-indigo-200" />
              <h2 className="text-3xl font-bold text-center text-black">
                Red Team Offensive Diplomas
              </h2>
            </div>
            <p className="text-center text-lg text-slate-600 mb-8">
              Learn the mindset of an ethical hacker to find and fix weaknesses
              before attackers exploit them.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <CourseCard
                title="Cyber Security Penetration Testing Diploma"
                description="Simulate real-world attacks, master vulnerability assessment, and learn ethical hacking techniques. Prepare for industry-leading certifications like eJPTv2 and eWPTv2."
                duration="Contact for Details"
                focus="Penetration Tester"
              />
              <div className="bg-gray-100 p-6 rounded-xl shadow-inner border border-dashed border-gray-400 flex items-center justify-center">
                <p className="text-center text-gray-500 italic">
                  More Red Team courses coming soon!
                </p>
              </div>
            </div>

            {/* What You Will Learn - Pentesting */}
            <LearnSection
              title="What You Will Learn in the Penetration Testing Diploma"
              points={pentestLearnPoints}
              color="text-red-600"
            />
          </div>
        </div>
      </section>

      {/* --- Guarantee Banner (100% Granted) --- */}
      <GuaranteeBanner />

      {/* --- Call to Action --- */}
      <section className="mt-16">
        <div className="grid place-items-center mb-8 p-8 md:p-12 py-16 rounded-4xl bg-indigo-50 border border-indigo-200">
          <h2 className="text-2xl md:text-3xl mb-6 font-bold text-center text-gray-900">
            Ready to get started? We&apos;re here to help — Contact us NOW
          </h2>
          <Link
            href={"/academy-courses/registration"}
            className="btnPrimary"
          >
            Register for a Course
          </Link>
        </div>
      </section>
    </main>
  );
};

export default App;
