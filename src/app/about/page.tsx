import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import Link from "next/link";
import ClickingCard from "./ClickingCard";

export const metadata: Metadata = generateStaticMetadata({
  title: "About",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the MENA region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.`,
  url: "/about",
});

const values: { title: string; desc: string }[] = [
    {
      title: "Practicality",
      desc: "Advice and controls you can implement today — prioritized by risk and impact.",
    },
    {
      title: "Transparency",
      desc: "Clear findings, reproducible steps and pragmatic remediation guidance.",
    },
    {
      title: "Collaboration",
      desc: "We work with your engineers, product and leadership — knowledge transfer is core to engagements.",
    },
    {
      title: "Curiosity",
      desc: "We continuously research emerging threats and improve detections.",
    },
    {
      title: "Responsibility",
      desc: "Protecting customer data and respecting privacy by design.",
    },
    {
      title: "Excellence",
      desc: "Measurable outcomes, reliable processes and rigorous testing.",
    },
  ];

export default function AboutPage() {

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          About Cyber Hunter
        </h1>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            body: "We help businesses secure their operations by identifying, prioritizing, and mitigating real-world threats. We enable teams to operate safely and confidently, with a focus on outcomes: fewer incidents, faster detection, and more resilient systems. Additionally, we assist young professionals in learning about cybersecurity through specialized training courses, preparing them to become successful, skilled professionals in the field.",
          },
          {
            title: "Our Vision",
            body: "A world where robust cybersecurity is accessible to organizations of every size. We envision seamless security that empowers innovation rather than slowing it down — security engineered into the product lifecycle.",
          },
          {
            title: "Our Message",
            body: "Security is a continuous process, not a one-time project. We partner with your team to build capabilities, transfer knowledge, and leave you stronger.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="p-6 bg-dark rounded-xl border border-white/6 transform transition-transform duration-200 hover:-translate-y-1 focus-within:-translate-y-1"
            tabIndex={0}
            aria-labelledby={`card-${idx}`}
          >
            <h2
              id={`card-${idx}`}
              className="text-2xl font-bold mb-2 text-white"
            >
              {card.title}
            </h2>
            <p className="text-slate-400">{card.body}</p>
          </div>
        ))}
      </section>

      <section className="">
        <div className="bg-linear-to-r from-[#0f172a] to-blue-800 p-8 rounded-2xl border border-white/6">
          <h2 className="text-3xl font-bold mb-4 text-white">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <ClickingCard key={i} v={v} i={i}/>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-3 text-black">
          A note from our Founder
        </h3>
        <p className="text-slate-600 mb-6">
          I have worked on both sides of security — building systems and
          breaking them — and I founded Cyber Hunter to bridge that gap. Our
          goal is simple: help teams ship features securely and keep their
          customers safe.
        </p>
        <p className="text-sm text-slate-400">— Zeyad Zain, Founder</p>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h4 className="text-2xl font-bold mb-4 text-black">
          Ready to strengthen your security posture?
        </h4>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="btnPrimary"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
