import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import { Scale, ShieldAlert, BookOpen, Terminal, Globe, Gavel } from "lucide-react";
import React from "react";

export const metadata: Metadata = generateStaticMetadata({
  title: "Terms and Conditions",
  description: "Review the Terms and Conditions for CyberHunter services and Academy enrollment. Understanding our service agreement and ethical guidelines.",
  url: "/terms",
});

export default function TermsPage() {
  const agreements = [
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Ethical Use Policy",
      content: "All skills and tools taught in CyberHunter Academy must be used exclusively for authorized testing and educational purposes. Unauthorized exploitation of systems is strictly prohibited."
    },
    {
      icon: <Terminal className="w-5 h-5" />,
      title: "Lab Environments",
      content: "Academy students are granted temporary access to virtual ranges. Any attempt to bypass lab boundaries or interfere with the infrastructure will result in immediate termination of access."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Intellectual Property",
      content: "Training materials, methodology, and threat intelligence reports are the exclusive property of CyberHunter. Redistribution or commercial use without written consent is forbidden."
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: "Service Delivery",
      content: "CyberHunter provides security insights based on current landscape data. While we strive for 100% accuracy, we are not liable for external changes in threat actor behavior post-reporting."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* --- HEADER --- */}
      <header className="relative pt-24 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="flex items-center justify-center gap-2 mb-6 font-mono text-[10px] tracking-[0.4em] text-blue-600 uppercase">
            <Gavel className="w-3 h-3" />
            <span>Service_Agreement_v1.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter">
            Terms <span className="text-blue-600">& Conditions</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            These terms govern your use of the CyberHunter platform and enrollment in our 
            specialized cybersecurity training modules.
          </p>
        </div>
      </header>

      {/* --- CORE PILLARS --- */}
      <section className="container mx-auto md:px-0 px-3 py-20 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {agreements.map((item, idx) => (
            <div key={idx} className="p-8 rounded-4xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>

        {/* --- DETAILED LEGAL SECTION --- */}
        <div className="prose prose-slate max-w-none bg-slate-900 text-slate-300 p-10 md:p-16 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Technical background decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Scale size={200} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">1. Limitation of Liability</h3>
            <p className="mb-8 opacity-80 leading-relaxed">
              CyberHunter provides intelligence and training to help mitigate risk. However, no security program is infallible. CyberHunter shall not be held liable for any damages resulting from cyber-attacks or data breaches occurring on the client&apos;s infrastructure after the delivery of services.
            </p>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">2. Enrollment & Refunds</h3>
            <p className="mb-8 opacity-80 leading-relaxed">
              Academy course fees are generally non-refundable once access to the lab environment has been provisioned. In exceptional cases, credit may be issued toward future modules at the discretion of the admissions team.
            </p>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">3. Governing Law</h3>
            <p className="mb-8 opacity-80 leading-relaxed">
              These terms are governed by the laws of the jurisdictions within the MENA region in which we operate. Any disputes shall be settled in accordance with local regulations and international cybersecurity standards.
            </p>

            <div className="pt-8 border-t border-slate-800 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500">Legal_Scope: International_Cyber_Law</p>
              </div>
              <div className="px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/20">
                Last_Updated: DEC_2025
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}