import StepByStep from "@/Components/ui/StepByStep";
import { cyberSecurityServices } from "@/lib/Data/CyberSecurityServices";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata({
  title: "Services",
  description: "CyberHunter provides comprehensive cybersecurity solutions to protect your business. Our expert services include Digital Forensics & Incident Response (DF&IR), proactive Threat Hunting, 24/7 SOC as a Service, and Phishing Simulations.",
  url: "/services",
});

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
        {cyberSecurityServices.map((service, i) => {
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
