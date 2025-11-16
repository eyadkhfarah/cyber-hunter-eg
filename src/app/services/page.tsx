import StepByStep from "@/Components/ui/StepByStep";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { HatGlasses } from "lucide-react";
import { Metadata } from "next";
import { GrShieldSecurity } from "react-icons/gr";
import { RiFingerprintLine } from "react-icons/ri";
import { TbFishHook } from "react-icons/tb";

export const metadata: Metadata = generateStaticMetadata({
  title: "Services",
  description: "CyberHunter provides comprehensive cybersecurity solutions to protect your business. Our expert services include Digital Forensics & Incident Response (DF&IR), proactive Threat Hunting, 24/7 SOC as a Service, and Phishing Simulations.",
  url: "/services",
});

const services = [
  {
    name: "DF & IR",
    description:
      "Rapid incident response and digital forensics to contain breaches, preserve evidence, identify root cause, and deliver practical remediation playbooks.",
    icon: RiFingerprintLine,
  },
  {
    name: "Threat Hunting",
    description:
      "Proactive threat hunting to discover hidden adversaries, investigate indicators of compromise, and tune detections to your environment.",
    icon: HatGlasses,
  },
  {
    name: "SOC as a Service",
    description:
      "24/7 managed security operations with expert triage, tailored detections, and automated response to reduce dwell time and operational risk.",
    icon: GrShieldSecurity,
  },
  {
    name: "Phishing Campaign Simulation",
    description:
      "Realistic phishing simulations and targeted awareness training that measure employee risk and provide actionable remediation to strengthen human defenses.",
    icon: TbFishHook,
  },
];

export default function page() {
  return (
    <main className="container mx-auto md:px-24 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
        <p className="text-lg text-slate-600">
          CyberHunter provides comprehensive cybersecurity solutions to protect your business. Our expert services include Digital Forensics & Incident Response (DF&IR), proactive Threat Hunting, 24/7 SOC as a Service, and Phishing Simulations.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-5">
        {services.map((service, i) => {
          return (
            <div className="bg-dark text-white p-5 rounded-3xl md:flex grid gap-5" key={i}>
              <span className="bg-blue-600 h-fit w-fit text-4xl rounded-4xl text-white p-2">
                <service.icon className="w-8 h-8" />
              </span>
              <div className="">
                <h2 className="text-2xl mb-1 font-bold">{service.name}</h2>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section>
        <h3 className="font-bold text-xl text-dark text-center">More services coming <span className="text-blue-500 uppercase">soon...</span></h3>
      </section>

      <StepByStep />
    </main>
  );
}
