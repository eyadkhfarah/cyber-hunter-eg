import React from "react";
import Email from "./Email";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import { Zap, Target, Network, ShieldCheck } from "lucide-react";

export const metadata: Metadata = generateStaticMetadata({
  title: "Partnerships",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber-attacks, with a particular focus on the Mena region.`,
  url: "/partnerships",
});

export default function page() {
  return (
    <main className="min-h-screen">
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
            <Network className="w-3 h-3" />
            <span>Alliance_Network_Protocol</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Strategic <span className="text-blue-600">Partnerships</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We collaborate with technology vendors and service providers to
            architect a more resilient digital landscape.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-blue-100 shadow-xl shadow-blue-500/5 text-blue-700 font-bold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Program Launching Soon
          </div>
        </div>
      </header>

      {/* --- CONTENT GRID --- */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:gap-12">
          {/* Why Partner - Light Card */}
          <div className="group relative p-8 md:p-10 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
            <div className="absolute top-6 right-8 font-mono text-[10px] text-slate-300">
              ID: ALLIANCE_BENEFITS
            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why partner with Cyber Hunter
            </h2>

            <ul className="space-y-6">
              {[
                "Joint go-to-market opportunities and co-branded programs to expand reach.",
                "Technical enablement: training, run books and integration support.",
                "Revenue share and partner-first commercial models for long-term growth.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-1.5 w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 transition-colors">
                    <ShieldCheck className="w-3 h-3 text-blue-600 group-hover/item:text-white" />
                  </div>
                  <span className="text-slate-600 leading-relaxed font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Partners - Dark Accent Card */}
          <div className="group relative p-8 md:p-10 bg-[#0f172a] rounded-[2.5rem] shadow-2xl text-white overflow-hidden">
            {/* Visual highlight using v4 linear */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-50" />
            <div className="absolute top-6 right-8 font-mono text-[10px] text-blue-400/50 tracking-widest uppercase">
              Target_Profile
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-blue-400" />
              </div>

              <h2 className="text-3xl font-bold mb-4">Ideal partners</h2>
              <p className="text-slate-400 mb-10 text-lg">
                We work best with cloud-native platform vendors, managed service
                providers, and software firms focused on secure products.
              </p>

              <div className="space-y-6">
                <h3 className="font-mono text-xs text-blue-400 tracking-[0.2em] uppercase">
                  Onboarding_Logic
                </h3>
                <div className="space-y-4">
                  {[
                    "Intro call to align on goals and fit.",
                    "Technical integration workshop.",
                    "Co-marketing plan and pilot engagements.",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="font-mono text-sm text-blue-500">
                        0{i + 1}
                      </span>
                      <div className="h-px grow bg-slate-800" />
                      <span className="text-slate-300 text-sm font-medium">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="container mx-auto px-6 py-20 mb-20">
        <div className="max-w-3xl mx-auto p-12 md:p-16 rounded-[3rem] bg-white border border-slate-200 text-center relative">
          {/* Decorative Corners */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-slate-200" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-slate-200" />

          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Interested in <span className="text-blue-600">partnering?</span>
          </h3>
          <p className="text-slate-500 mb-10 text-lg">
            We are accepting expressions of interest now — formal partnership
            program launches soon.
          </p>

          <div className="mx-auto relative z-10">
            <Email />
          </div>

          <p className="text-xs font-mono text-slate-400 mt-8 tracking-widest uppercase">
            Secure_Transmission_Active // AES_256
          </p>
        </div>
      </section>
    </main>
  );
}
