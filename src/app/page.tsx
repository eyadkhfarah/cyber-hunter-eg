import AnimatedNum from "@/Components/Client/AnimatedNum";
import { BentoGridCards } from "@/Components/Client/BentoGridCard";
import { EncryptedText } from "@/Components/ui/encrypted-text";
import Link from "next/link";

const risk = [
  {
    title: "Exposed Attack Surface",
    numbers: 60,
    nextNumber: "%",
    description:
      "60% of data breaches come from unpatched known vulnerabilities. Without regular penetration testing to uncover critical flaws, organizations risk noncompliance and costly breaches even if policies exist.",
  },
  {
    title: "Automation is Missing Ris",
    numbers: 20,
    nextNumber: "x",
    description:
      "Human-led, manual penetration tests discover 20× more critical vulnerabilities than automation alone. Redline’s hacker‑driven assessments reveal issues automation consistently overlooks.",
  },
  {
    title: "Breach Prevention",
    numbers: 72,
    nextNumber: "%",
    description:
      "Fortra’s 2024 survey shows 72 % of security leaders credit penetration testing with averting breaches. Redline replicates adversaries, validating controls and guiding fixes that transform preventative intent into measurable risk reduction.",
  },
  {
    title: "AI Adoption Concerns",
    numbers: 48,
    nextNumber: "%",
    description:
      "Nearly 48 % of executives cite security and privacy risks as a major barrier to adopting AI solutions. Leaders worry that sensitive data used in training or inference could be exposed, and that AI systems might introduce compliance gaps, bias, or uncontrolled decision-making. Without independent validation, organizations hesitate to fully embrace AI despite the efficiency and innovation it offers",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero - full viewport, modern gradient, centered */}
      <section className="relative h-screen flex items-center bg-linear-to-b from-[#0f172a] via-[#0b1220] to-dark text-white">
        {/* Animated background blobs (decorative) */}
        <div className="hero-bg pointer-events-none" aria-hidden="true">
          <div className="blob b1 z-20" />
          <div className="blob b2 z-20" />
          <div className="blob b3 z-20" />
        </div>

        <div className="mx-auto text-center max-w-4xl px-6 md:pt-0 pt-26 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight hero-title text-black">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500">
              Cyber Hunter
            </span>
            <span className="block text-xl md:text-2xl font-medium mt-3">
              <EncryptedText
                text="Your path to cybersecurity"
                encryptedClassName="text-gray-300"
                revealedClassName="dark:text-white text-black"
                revealDelayMs={50}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-8 hero-sub">
            Enterprise-grade cybersecurity: penetration testing, 24/7 detection
            & response, cloud hardening, and security training — tailored for
            your organization.
          </p>

          <div className="flex items-center justify-center gap-4 hero-ctas">
            <Link
              href={"/contact"}
              className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transform hover:-translate-y-0.5 transition hero-cta-pulse"
            >
              Get Started
            </Link>

            <Link
              href={"/services"}
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition"
            >
              Our Services
            </Link>
          </div>

          {/* Key benefits */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-sm md:text-base">
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">Fast results</strong>
              <span className="text-gray-300">
                Actionable findings within days.
              </span>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">24/7 Monitoring</strong>
              <span className="text-gray-300">
                Threat detection and response.
              </span>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <strong className="block text-white">Trusted experts</strong>
              <span className="text-gray-300">
                Certified and experienced team.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center grid place-items-center gap-2 mb-14">
            <h2 className="text-5xl font-bold text-white">
              Why Your Business Need Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 justify-center items-center">
            {risk.map((item, i) => {
              return (
                <div
                  key={i}
                  className="border border-blue-900 h-full rounded-2xl p-7 md:flex grid gap-6"
                >
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500 text-5xl font-bold mb-3">
                    <AnimatedNum from={0} to={item.numbers} />
                    {item.nextNumber}
                  </span>
                  <div className="">
                    <h3 className="text-white text-2xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-24 rounded-b-4xl bg-dark">
        <div className="container mx-auto px-6">
          <div className="text-center grid place-items-center gap-2 mb-14">
            <h2 className="text-5xl font-bold text-white">
              Secure Your Company
            </h2>
            <p className="text-gray-400 w-2xl ">
              With our uniquely experienced team, we offer a wide range of
              Cybersecurity services. Following is an example, but feel free to
              get in touch for the full services catalog.
            </p>
          </div>
          <BentoGridCards />
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-linear-to-r from-white to-gray-50 py-16 px-24">
        <div className="container mx-auto px-6">
          <div className="text-center grid place-items-center gap-2 mb-14">
            <h2 className="text-5xl font-bold">Who are Cyber Hunter?</h2>
            <p className="text-gray-400 w-2xl "></p>
          </div>
        </div>
        {/* <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm text-gray-500">Client satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold">+250</div>
              <div className="text-sm text-gray-500">Assessments completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-500">Security operations</div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-black">
            Trusted by organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                Cyber Hunter found critical issues in our environment and helped
                us remediate them quickly — great team.
              </p>
              <footer className="text-sm text-gray-500">
                — CTO, FinTech Co.
              </footer>
            </blockquote>

            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                Their MDR service reduced our mean time to detect and respond
                significantly.
              </p>
              <footer className="text-sm text-gray-500">
                — Security Lead, HealthTech
              </footer>
            </blockquote>

            <blockquote className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-700 mb-4">
                Clear reporting and prioritized remediation made our audit a
                breeze.
              </p>
              <footer className="text-sm text-gray-500">
                — Compliance Officer, Retail Group
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">
            Get in touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Tell us about your project and we&#39;ll recommend the right
            services.
          </p>

          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                aria-label="Name"
                placeholder="Full name"
                className="border rounded-lg px-4 py-3"
              />
              <input
                aria-label="Email"
                placeholder="Email address"
                className="border rounded-lg px-4 py-3"
              />
            </div>
            <input
              aria-label="Company"
              placeholder="Company (optional)"
              className="border rounded-lg px-4 py-3"
            />
            <textarea
              aria-label="Message"
              placeholder="How can we help?"
              rows={5}
              className="border rounded-lg px-4 py-3"
            />

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
