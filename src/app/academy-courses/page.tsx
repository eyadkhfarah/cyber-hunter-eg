import React from "react";
import {
  Shield,
  Zap,
  GraduationCap,
  Clock,
  Building2,
  ChevronRight,
  Target,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { GuaranteeBanner } from "@/Components/Client/GuaranteeBanner";
import {
  AcademyCoursesBlue,
  AcademyCoursesRed,
  AcademyCoursesGRC,
} from "@/lib/Data/AcademyCourses";

// --- Types ---
interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  focus: string;
  color: "indigo" | "red" | "purple";
}

interface LearnSectionProps {
  title: string;
  points: string[];
  colorClass: string;
  icon: React.ReactNode;
}

// --- Curriculum Points ---
const socLearnPoints = [
  "Network Fundamentals (OSI, TCP/IP, Protocols)",
  "In-depth Linux & Windows Log Analysis for SOC",
  "Threats, Vulnerabilities, & Mitigation (Security+ focus)",
  "Security Operations Center (SOC) L1, L2, L3 workflows",
  "Hands-on SIEM (QRadar / Splunk / ELK)",
  "Advanced Incident Response procedures",
  "Practical Threat Hunting & Query Languages",
  "Certification readiness for CompTIA Security+ and CSA",
  "Final SOC Graduation Project simulating real-world incidents",
];

const pentestLearnPoints = [
  "Operating System Deep Dive (Linux & Windows Server)",
  "General Security Concepts (CompTIA Security+ focus)",
  "Core Penetration Testing Methodology",
  "Vulnerability Assessment & Network Exploitation",
  "Web Attack Vectors: XSS, SQLi, Data Exposure (eWPTv2)",
  "File and Resource Attack techniques",
  "Encoding, Filtering, and Injection bypasses",
  "Certification readiness for eJPTv2 and eWPTv2.",
];

const grcLearnPoints = [
  "Introduction to GRC: Governance & Risk Management",
  "Cybersecurity Governance: IAM, PAM, and Access",
  "Security Policies & Standards (ISO 27001)",
  "Regulatory Compliance: GDPR, HIPAA, PCI-DSS",
  "Security Frameworks: NIST and CBE Mapping",
  "Risk Management Process: Identify, Analyze, Mitigate",
  "Business Continuity Planning (BCP) & Incident Planning",
  "Data Privacy & Protection Best Practices",
];

// --- Sub-Components ---

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  focus,
  color,
}) => {
  const colorMap = {
    indigo: "border-indigo-100 hover:border-indigo-400 text-indigo-600 bg-indigo-50",
    red: "border-red-100 hover:border-red-400 text-red-500 bg-red-50",
    purple: "border-purple-100 hover:border-purple-400 text-purple-600 bg-purple-50",
  };

  return (
    <div className={`group relative p-8 bg-white rounded-4xl border transition-all duration-500 hover:shadow-2xl hover:shadow-${color}-500/10 ${colorMap[color].split(' ').slice(0,2).join(' ')}`}>
      <div className="flex justify-between items-start mb-6">
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${colorMap[color].split(' ').slice(2).join(' ')}`}>
          {focus}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs">
          <Clock className="w-3.5 h-3.5" />
          {duration}
        </div>
      </div>
      
      <h3 className={`text-2xl font-bold text-slate-900 mb-3 group-hover:${colorMap[color].split(' ').slice(2,3).join(' ')} transition-colors uppercase tracking-tight`}>
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm mb-6">
        {description}
      </p>
      
      <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest pt-4 border-t border-slate-50">
        Course_Syllabus <ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};

const LearnSection: React.FC<LearnSectionProps> = ({ title, points, colorClass, icon }) => (
  <div className="mt-12 p-10 bg-slate-200 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
    {/* Background Pattern */}
    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
      {icon}
    </div>

    <div className="flex items-center gap-4 mb-10">
      <div className={`p-3 rounded-2xl bg-white shadow-sm border border-slate-200 ${colorClass}`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold text-slate-900 uppercase tracking-tight`}>{title}</h3>
    </div>

    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
      {points.map((point, index) => (
        <li key={index} className="flex items-start gap-3 group/item">
          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover/item:scale-150 ${colorClass.replace('text', 'bg')}`} />
          <span className="text-slate-600 text-sm font-medium leading-tight">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Main Academy Component ---
const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* --- HERO --- */}
      <header className="relative py-24 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6 font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase">
            <GraduationCap className="w-3 h-3" />
            <span>Academic_Training_Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            CyberHunter <span className="text-blue-600">Academy</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Built on real-world intelligence. We translate high-level threat analysis 
            into practical, defensive skills for the next generation of security experts.
          </p>
        </div>
      </header>

      <section className="container mx-auto px-6 py-24 space-y-32">
        
        {/* --- BLUE TEAM --- */}
        <div className="relative lg:px-27 px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-mono text-[10px] uppercase tracking-widest mb-6">
              <Shield className="w-4 h-4" /> Blue_Team_Defensive
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">SOC & Defensive Diplomas</h2>
            <p className="text-slate-500 max-w-xl">Master the art of monitoring, detection, and real-time incident response.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AcademyCoursesBlue.map((course, i) => (
              <CourseCard key={i} {...course} color="indigo" />
            ))}
            <div className="bg-slate-50 p-8 rounded-4xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center group">
              <Cpu className="w-10 h-10 text-slate-300 mb-4 group-hover:rotate-12 transition-transform" />
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Expansion_In_Progress</p>
            </div>
          </div>

          <LearnSection 
            title="SOC Diploma Curriculum" 
            points={socLearnPoints} 
            colorClass="text-indigo-600" 
            icon={<Target className="w-6 h-6" />} 
          />
        </div>

        {/* --- RED TEAM --- */}
        <div className="relative lg:px-27 px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 font-mono text-[10px] uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" /> Red_Team_Offensive
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ethical Hacking Diplomas</h2>
            <p className="text-slate-500 max-w-xl">Learn the mindset of an adversary to identify vulnerabilities before they are exploited.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AcademyCoursesRed.map((course, i) => (
              <CourseCard key={i} {...course} color="red" />
            ))}
             <div className="bg-slate-50 p-8 rounded-4xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
              <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">More Offensive Tracks Coming</p>
            </div>
          </div>

          <LearnSection 
            title="Pentesting Diploma Curriculum" 
            points={pentestLearnPoints} 
            colorClass="text-red-600" 
            icon={<Zap className="w-6 h-6" />} 
          />
        </div>

        {/* --- GRC --- */}
        <div className="relative lg:px-27 px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-mono text-[10px] uppercase tracking-widest mb-6">
              <Building2 className="w-4 h-4" /> Governance_Compliance
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Purple Team GRC</h2>
            <p className="text-slate-500 max-w-xl">Bridging defensive controls with adversarial techniques through risk management.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AcademyCoursesGRC.map((course, i) => (
              <CourseCard key={i} {...course} color="purple" />
            ))}
          </div>

          <LearnSection 
            title="GRC Diploma Curriculum" 
            points={grcLearnPoints} 
            colorClass="text-purple-600" 
            icon={<Building2 className="w-6 h-6" />} 
          />
        </div>
      </section>

      {/* --- GUARANTEE --- */}
      <div className="container mx-auto lg:px-27 px-6 mb-24">
        <GuaranteeBanner />
      </div>

      {/* --- CTA --- */}
      <section className="container mx-auto lg:px-27 px-6 pb-32">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-slate-900 overflow-hidden text-center">
          {/* Background Gradient v4 */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Secure Your Future?
            </h2>
            <Link 
              href="/academy-courses/registration" 
              className="group relative inline-flex items-center btnPrimary"
            >
              Register for a Course
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="mt-10 font-mono text-[10px] text-slate-500 uppercase tracking-[0.4em]">
              Secure_Handshake // Enrollment_Active
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;