import AnimatedNum from "@/Components/Client/AnimatedNum";
import { BentoGridCards } from "@/Components/Client/BentoGridCard";
import { EncryptedText } from "@/Components/ui/encrypted-text";
import Image from "next/image";
import Link from "next/link";
import TestimonialCards from "@/Components/Client/testimonialCards";
import FQACards from "@/Components/Client/FQACards";
import { AcademyCoursesSection } from "@/Components/Client/AcademyCoursesSection";
import { Terminal, Activity, Lock } from "lucide-react";

const risk = [
  {
    title: "Exposed Attack Surface",
    numbers: 60,
    nextNumber: "%",
    code: "SEC_VULN_01",
    description:
      "60% of data breaches come from unpatched known vulnerabilities. Without regular penetration testing, organizations risk breaches even if policies exist.",
  },
  {
    title: "Automation is Missing Risk",
    numbers: 20,
    nextNumber: "x",
    code: "MANUAL_BYPASS_02",
    description:
      "Human-led, manual penetration tests discover 20x more critical vulnerabilities than automation alone. We reveal issues automation overlooks.",
  },
  {
    title: "Breach Prevention",
    numbers: 72,
    nextNumber: "%",
    code: "THREAT_SHIELD_03",
    description:
      "72% of security leaders credit penetration testing with averting breaches. We replicate adversaries to validate your controls.",
  },
  {
    title: "AI Adoption Concerns",
    numbers: 48,
    nextNumber: "%",
    code: "AI_GUARD_04",
    description:
      "Nearly 48% of executives cite security risks as a major barrier to AI. Leaders worry sensitive data could be exposed without independent validation.",
  },
];

export default function Home() {
  return (
    <main className="md:min-h-screen bg-gray-50 overflow-x-hidden">
      {/* --- HERO SECTION: Uses bg-linear-to-b --- */}
      <section className="relative m-0 mt-0 mx-0 py-20 max-w-full h-screen flex items-center bg-linear-to-b from-[#0f172a] via-[#0b1220] to-dark text-white">
        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Animated Scan Line */}
        <div className="absolute w-full h-px bg-blue-500/30 top-0 animate-[scan_8s_linear_infinite]" />

        <div className="mx-auto text-center max-w-4xl px-6 z-10 relative">
          {/* Header Label */}
          <div className="flex items-center justify-center gap-2 mb-6 font-mono text-[10px] tracking-[0.4em] text-cyan-400 opacity-80 uppercase">
            <Lock className="w-3 h-3" />
            <span>Connection: Secure</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-logoBold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500">
              Cyber<span className="font-logoRegular">Hunter</span>
            </span>
          </h1>

          <div className="mb-8">
            <EncryptedText
              text="Your path to cybersecurity"
              revealedClassName="text-white tracking-widest uppercase font-bold text-xl md:text-2xl"
            />
          </div>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade protection: penetration testing, 24/7 detection &
            response, and technical training — architected for resilience.
          </p>

          <div className="md:flex grid items-center justify-center gap-6">
            <Link
              href="/contact"
              className="btnPrimary px-10 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
            <Link href="/services" className="btnSecondary ">
              [ SERVICES_CATALOG ]
            </Link>
          </div>
        </div>

        {/* Decorative Corner Brackets */}
        <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-white/20" />
        <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-white/20" />
      </section>

      {/* --- RISK SECTION --- */}
      <section
        id="services"
        className="relative py-24 bg-[#0b1220] border-y border-white/5 m-0 max-w-full"
      >
        <div className="container mx-auto max-w-7xl md:p-0 px-6">
          <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Critical Risk Metrics
            </h2>
            <div className="hidden md:flex items-center gap-4 text-blue-500 font-mono text-xs">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>LIVE_DATA_FEED</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {risk.map((item, i) => (
              <div
                key={i}
                className="group relative bg-[#0f172a] border border-blue-900/30 rounded-xl p-8 hover:border-blue-500/50 transition-all overflow-hidden"
              >
                {/* ID Tag */}
                <div className="absolute top-4 right-6 font-mono text-[9px] text-blue-500 opacity-40">
                  REF::{item.code}
                </div>

                <div className="flex flex-col items-start lg:flex-row gap-8 relative z-10">
                  <div className="flex flex-col items-start justify-center">
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-blue-500 text-6xl font-bold">
                      <AnimatedNum from={0} to={item.numbers} />
                      {item.nextNumber}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-white text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                {/* Visual scan bar on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION: Light Theme with Cyber Frame --- */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-blue-600" />
                <h2 className="text-5xl font-bold text-slate-900">
                  Who are Cyber Hunter?
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  CyberHunter is a leading firm specializing in information
                  security. We deliver comprehensive reports on cyber-attacks,
                  focusing on up-to-date insights and elite technical response.
                </p>
              </div>

              {/* <div className="grid grid-cols-2 gap-8 border-y border-slate-100 py-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 font-bold">98%</div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Success</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 font-bold">+250</div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Deployments</p>
                </div>
              </div> */}

              <Link href="/about" className="btnPrimary inline-block">
                Get to Know Us
              </Link>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Image Frame Decor */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-600/20 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-blue-600/20 rounded-bl-3xl" />

              <Image
                src="/Images/Cyber-security.webp"
                alt="Cyber Analysis"
                className="rounded-3xl shadow-2xl relative z-10"
                height={600}
                width={700}
              />

              <div className="absolute -bottom-8 right-8 bg-[#0f172a] p-5 rounded-2xl shadow-xl z-20 border border-blue-500/30">
                <div className="flex items-center gap-4">
                  <Terminal className="text-cyan-400 w-8 h-8" />
                  <div>
                    <p className="text-[10px] text-blue-400 font-mono uppercase tracking-tighter">
                      Auth_Token
                    </p>
                    <p className="text-white font-bold text-sm uppercase">
                      Verified_Vendor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="bg-dark rounded-4xl max-w-full py-24 relative overflow-hidden border-t border-slate-100">
        {/* Technical Background Grid (Light Version) */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            {/* Technical Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-600 font-bold text-[10px] tracking-[0.2em] mb-7">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Capabilities_Matrix
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              Secure Your{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
                Company
              </span>
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Strategic cybersecurity services following industry-standard
              frameworks to bridge the gap between intent and defense.
            </p>

            {/* Decorative Line with Dots */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <div className="w-24 h-px bg-linear-to-r from-blue-600 to-transparent" />
            </div>
          </div>

          {/* Bento Grid Container */}
          <div className="relative group lg:px-24">
            {/* Subtle corner accents around the grid */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-blue-200" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-blue-200" />

            <BentoGridCards />
          </div>

          {/* Bottom Status Label */}
          <div className="mt-16 flex justify-center">
            <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest px-4 py-2 rounded-full border border-slate-100">
              System_Load: Optimal // Framework: NIST_800-53
            </div>
          </div>
        </div>
      </section>

      <AcademyCoursesSection />

      {/* --- SOCIAL PROOF & FAQ --- */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-5xl font-bold text-slate-900 mb-16 text-center">
            Trusted Partners
          </h2>
          <TestimonialCards />
        </div>
      </section>

      {/* --- FAQ SECTION: Responsive Light-Cyber Retrieval Interface --- */}
      <section className="bg-slate-50 py-16 md:py-24 relative overflow-hidden">
        {/* Background Decor: Subtle Monospace Watermark */}
        <div className="absolute top-10 right-10 text-6xl md:text-[100px] text-slate-200/30 select-none pointer-events-none font-bold tracking-tighter">
          FAQ
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          {/* Header Section using Flex */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 w-full">
            {/* Module Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 md:w-10 bg-linear-to-r from-transparent to-blue-500" />
              <span className="text-[9px] md:text-[11px] text-blue-600 tracking-[0.3em] uppercase font-bold whitespace-nowrap">
                Data_Query_Module
              </span>
              <div className="h-px w-6 md:w-10 bg-linear-to-l from-transparent to-blue-500" />
            </div>

            {/* Title with Responsive Brackets */}
            <div className="flex items-center justify-center gap-4 md:gap-8 w-full">
              {/* Left Bracket - Hidden on small mobile */}
              <div className="hidden sm:block w-3 h-12 md:h-16 border-l-2 border-y-2 border-slate-200 rounded-l-xl opacity-60" />

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Common <span className="text-blue-600">Questions</span>
              </h2>

              {/* Right Bracket - Hidden on small mobile */}
              <div className="hidden sm:block w-3 h-12 md:h-16 border-r-2 border-y-2 border-slate-200 rounded-r-xl opacity-60" />
            </div>

            {/* Dynamic Status Bar */}
            <div className="mt-8 flex items-center gap-3 px-4 py-2 bg-white/80 border border-slate-200 rounded-lg shadow-xs backdrop-blur-xs">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-tighter whitespace-nowrap">
                DB_Status: <span className="text-green-600">Sync_Complete</span>
              </span>
            </div>
          </div>

          {/* FAQ Cards Container - Flex Column */}
          <div className="flex flex-col gap-4 w-full">
            {/* Wrapper for FQACards to ensure they are responsive. 
          Assuming FQACards returns a list of items or a container.
      */}
            <div className="relative p-2 md:p-4 bg-white/40 rounded-4xl border border-slate-200/50">
              {/* Corner Accents for the List */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-400/40 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-400/40 rounded-br-lg" />

              <div className="w-full">
                <FQACards />
              </div>
            </div>
          </div>

          {/* Bottom Metadata - Flex Row Responsive */}
          <div className="mt-10 flex flex-row justify-between items-center px-4 w-full">
            <div className="flex flex-col">
              <span className="font-mono text-[8px] text-slate-400 uppercase">
                Archive_ID
              </span>
              <span className="font-mono text-[10px] text-slate-600">
                #CH-772-09
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block font-mono text-[9px] text-slate-400 italic">
                SECURE_ACCESS_GRANTED
              </div>
              <div className="flex gap-1.5">
                <div className="w-1 h-3 bg-blue-600/20" />
                <div className="w-1 h-3 bg-blue-600/40" />
                <div className="w-1 h-3 bg-blue-600/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style> */}
    </main>
  );
}
