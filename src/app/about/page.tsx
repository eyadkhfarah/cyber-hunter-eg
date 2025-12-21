import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import StepByStep from "@/Components/ui/StepByStep";
import Image from "next/image";

import {
  Shield,
  Clock,
  Target,
  Mail,
  MessageSquare,
  Users,
  Binary,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = generateStaticMetadata({
  title: "About",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber-attacks, with a particular focus on the MENA region.`,
  url: "/about",
});

export default function AboutPage() {
  const whoCards = [
    {
      title: "Our Mission",
      icon: <Target className="w-6 h-6" />,
      body: "We help businesses secure their operations by identifying, prioritizing, and mitigating real-world threats. We assist young professionals in learning about cybersecurity through specialized training courses, preparing them for the global landscape.",
    },
    {
      title: "Our Vision",
      icon: <Globe className="w-6 h-6" />,
      body: "A world where robust cybersecurity is accessible to organizations of every size. We envision seamless security that empowers innovation rather than slowing it down — security engineered into the product lifecycle.",
    },
    {
      title: "Our Message",
      icon: <MessageSquare className="w-6 h-6" />,
      body: "Security is a continuous process, not a one-time project. We partner with your team to build capabilities, transfer knowledge, and leave you stronger than we found you.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* --- HERO SECTION --- */}

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
            <Binary className="w-3 h-3" />
            <span>Operational_Profile_v4.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            About <span className="text-blue-600">CyberHunter</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Specializing in information security and high-fidelity threat
            reporting. Our focus is on the MENA region, providing actionable
            intelligence and engineering resilience into every lifecycle.
          </p>
        </div>
      </header>

      {/* --- QUICK NAVIGATION CARDS --- */}
      <section className="container mx-auto max-w-7xl px-6 -mt-12 mb-24 grid gap-6 md:grid-cols-3 relative z-20">
        {[
          {
            title: "OVERVIEW",
            body: "Intelligence, analysis, and regional focus for the MENA area.",
            num: "01",
          },
          {
            title: "SERVICES",
            body: "From SOC-as-a-Service to Red Team simulations.",
            num: "02",
          },
          {
            title: "CONTACT",
            body: "Reach out to our expert team for inquiries.",
            num: "03",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="group bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-4xl font-bold text-blue-600/30 group-hover:text-blue-500 transition-colors">
                {card.num}
              </span>
              <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-lg font-bold text-white mb-2 tracking-widest">
              {card.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </section>

      {/* --- MISSION / VISION / MESSAGE --- */}
      <section className="container mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-slate-100 rounded text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              Core_Values
            </div>
            <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter">
              Securing Innovation
            </h2>

            <div className="space-y-4 pt-8">
              {whoCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-4xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
                >
                  <div className="md:flex grid gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 rounded-[3rem] overflow-hidden border border-slate-200 sticky top-10">
            <Image
              src={"/Images/teamwork.webp"}
              alt={"CyberHunter Security Teamwork"}
              className="object-cover w-full md:h-[700px]"
              height={1700}
              width={800}
            />
          </div>
        </div>
      </section>

      {/* --- DIAGRAM SECTION --- */}
      <section className="container mx-auto max-w-7xl">
        <StepByStep />
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter">
            Specialized Services
          </h2>
          <p className="text-slate-500 mt-4">
            Enterprise-grade security solutions for a modern threat landscape.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {[
            {
              icon: Shield,
              title: "Cyber Threat Intelligence",
              description:
                "Actionable analysis of APT groups and IOC packages designed for executives and security teams.",
              subTitle: "Trainings for Individuals",
              subDescription:
                "Hands-on programs covering foundational Blue & Red team concepts aligned with modern tools.",
            },
            {
              icon: Clock,
              title: "SOC-as-a-Service",
              description:
                "24/7 managed detection and response with real-time triage and expert recommendations.",
              subTitle: "Penetration Testing",
              subDescription:
                "Detailed forensics and controlled exploitation to uncover attack timelines and remediation.",
            },
            {
              icon: Target,
              title: "Threat Hunting",
              description:
                "Advanced proactive investigations using MITRE ATT&CK to identify early risks.",
              subTitle: "Incident Response",
              subDescription:
                "Rapid containment, immediate triage, and root cause analysis with strategic prevention.",
            },
            {
              icon: Mail,
              title: "Phishing Simulations",
              description:
                "Realistic exercises to strengthen employee awareness with detailed risk segment analytics.",
              subTitle: "Contact Us",
              subDescription:
                "Reach out via our contact page for more information about specific training or services.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-600 rounded-2xl text-white">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {card.description}
              </p>

              <div className="pt-8 border-t border-slate-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <h4 className="font-bold text-slate-800 uppercase tracking-widest text-xs">
                    {card.subTitle}
                  </h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {card.subDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM MESSAGE --- */}
      <section className="container mx-auto max-w-7xl px-6 py-24">
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-slate-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-8" />
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
              A Note from the Team
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              &quot;We combine years of building and testing mission-critical
              systems to deliver clear, practical security outcomes. Our goal is
              simple: reduce incidents and improve resilience across your
              organization.&quot;
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-700 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
              Verified_Human_Input // Engineering_Resilience
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
