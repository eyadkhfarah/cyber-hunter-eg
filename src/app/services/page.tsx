import { Metadata } from "next";
import {
  Shield,
  GraduationCap,
  Clock,
  Bug,
  Target,
  FileSearch,
  Zap,
  Mail,
  Monitor,
} from "lucide-react";

import StepByStep from "@/Components/ui/StepByStep";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";

export const metadata: Metadata = generateStaticMetadata({
  title: "Services",
  description:
    "CyberHunter provides comprehensive cybersecurity solutions including Threat Intelligence, SOC-as-a-Service, and Incident Response.",
  url: "/services",
});

const serviceGroups = [
  {
    icon: Shield,
    title: "Cyber Threat Intelligence & Awareness",
    description:
      "Actionable intelligence for security teams and executives. In-depth analysis of APT groups and global campaigns with complete IOC packages.",
    subIcon: GraduationCap,
    subTitle: "Trainings for Individuals",
    subDescription:
      "Practical, hands-on learning covering foundational Blue & Red team concepts aligned with modern tools.",
  },
  {
    icon: Clock,
    title: "SOC-as-a-Service",
    description:
      "24/7 managed detection and response. Continuous monitoring, alert triage, and real-time investigation for enterprise environments.",
    subIcon: Bug,
    subTitle: "Penetration Testing",
    subDescription:
      "Comprehensive assessment and controlled exploitation with full technical reporting and prioritized remediation.",
  },
  {
    icon: Target,
    title: "Threat Hunting",
    description:
      "Advanced proactive investigations using MITRE ATT&CK frameworks to uncover hidden attacker behavior and anomalies.",
    subIcon: FileSearch,
    subTitle: "Digital Forensics",
    subDescription:
      "Evidence acquisition and timeline reconstruction to identify attacker techniques and point of entry.",
  },
  {
    icon: Zap,
    title: "Incident Response Service",
    description:
      "Rapid containment and expert recovery for ongoing attacks. Immediate triage, root cause analysis, and strategic recommendations.",
    subIcon: Mail,
    subTitle: "Phishing Simulation Campaigns",
    subDescription:
      "Realistic phishing exercises to reduce human-risk vectors with detailed analytics on high-risk user segments.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}

      <header className="relative py-24 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6 font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase">
            <Monitor className="w-3 h-3" />
            <span>Capabilities_Matrix</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Modern <span className="text-blue-600">Cyber</span> Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            CyberHunter provides enterprise-grade protection and specialized
            forensics to ensure your business stays resilient in a light-speed
            digital world.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceGroups.map((group, idx) => (
            <div key={idx} className="group relative">
              {/* Soft Ambient Glow */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-indigo-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

              {/* Main Card */}
              <div className="relative h-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
                <div className="relative z-10 space-y-8">
                  {/* Primary Service Section */}
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <group.icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  {/* Subtle Divider */}
                  <div className="h-px bg-slate-100" />

                  {/* Secondary Service Section */}
                  <div className="bg-slate-50/80 p-5 rounded-xl border border-slate-100 group-hover:bg-blue-50/30 group-hover:border-blue-100 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm">
                        <group.subIcon className="w-4 h-4 text-blue-600" />
                      </div>
                      <h4 className="font-bold text-slate-800">
                        {group.subTitle}
                      </h4>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {group.subDescription}
                    </p>
                  </div>
                </div>

                {/* Aesthetic Corner Flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "Coming Soon" Status */}
      <section className="text-center mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 bg-white text-slate-500 text-sm shadow-sm font-medium">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          New specialized services in development
        </div>
      </section>

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto pt-20 border-t border-slate-200">
        <StepByStep />
      </section>
    </main>
  );
}
