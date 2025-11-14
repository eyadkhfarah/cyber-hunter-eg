import AnimatedNum from "@/Components/Client/AnimatedNum";
import { BentoGridCards } from "@/Components/Client/BentoGridCard";
import { EncryptedText } from "@/Components/ui/encrypted-text";
import Image from "next/image";
import Link from "next/link";
import TestimonialCards from "@/Components/Client/testimonialCards";
import FQACards from "@/Components/Client/FQACards";
import StepByStep from "@/Components/ui/StepByStep";

const risk = [
  {
    title: "Exposed Attack Surface",
    numbers: 60,
    nextNumber: "%",
    description:
      "60% of data breaches come from unpatched known vulnerabilities. Without regular penetration testing to uncover critical flaws, organizations risk noncompliance and costly breaches even if policies exist.",
  },
  {
    title: "Automation is Missing Risk",
    numbers: 20,
    nextNumber: "x",
    description:
      "Human-led, manual penetration tests discover 20x more critical vulnerabilities than automation alone. Redline’s hacker‑driven assessments reveal issues automation consistently overlooks.",
  },
  {
    title: "Breach Prevention",
    numbers: 72,
    nextNumber: "%",
    description:
      "Fortra’s 2024 survey shows 72% of security leaders credit penetration testing with averting breaches. Redline replicates adversaries, validating controls and guiding fixes that transform preventative intent into measurable risk reduction.",
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
    <main className="md:min-h-screen bg-gray-50">
      {/* Hero - full viewport, modern gradient, centered */}
      <section className="relative m-0 mt-0 mx-0 py-20 max-w-full h-screen flex items-center bg-linear-to-b from-[#0f172a] via-[#0b1220] to-dark text-white">
        {/* Animated background blobs (decorative) */}
        <div className="hero-bg pointer-events-none z-0" aria-hidden="true">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <div className="mx-auto text-center max-w-4xl px-6 md:pt-0 pt-26 z-10">
          <h1 className="text-5xl md:text-7xl font-logoBold mb-4 leading-tight hero-title text-black">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-500">
              Cyber<span className="font-logoRegular">Hunter</span>
            </span>
          </h1>
          <span className="block font-bold mb-6 text-xl md:text-2xl font-medium">
            <EncryptedText
              text="Your path to cybersecurity"
              encryptedClassName="text-gray-300"
              revealedClassName="text-white"
              revealDelayMs={50}
            />
          </span>

          <p className="text-lg text-gray-300 mb-8">
            Enterprise-grade cybersecurity: penetration testing, 24/7 detection
            & response, cloud hardening, and security training — tailored for
            your organization.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href={"/contact"}
              className="from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 btnPrimary hero-cta-pulse"
            >
              Get Started
            </Link>

            <Link href={"/services"} className="btnSecondary">
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

      {/* --- New Component: Logo Cloud --- */}
      {/* <section className="bg-dark m-0 max-w-full py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-center text-sm font-bold text-white uppercase tracking-wider mb-8">
            Trusted by leading organizations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              LogoOne
            </div>
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              TechCorp
            </div>
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              FinBank
            </div>
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              HealthCo
            </div>
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              eComm Inc.
            </div>
            <div className="text-center text-gray-400 font-mono text-xl filter grayscale hover:grayscale-0 transition duration-300 opacity-60 hover:opacity-100">
              StartUp
            </div>
          </div>
        </div>
      </section> */}
      {/* --- End New Component --- */}

      <section
        id="services"
        className="relative m-0 max-w-full px-4 py-16 md:px-24 bg-dark overflow-hidden"
      >
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
                    <p className="text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-400 [&_b]:md:font-bold [&_strong]:md:font-bold">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services-grid"
        className="m-0 max-w-full px-4 py-16 md:px-24 rounded-b-4xl bg-dark"
      >
        <div className="container mx-auto px-6">
          <div className="text-center grid place-items-center gap-2 mb-14">
            <h2 className="text-5xl font-bold text-white">
              Secure Your Company
            </h2>
            <p className="text-gray-400 md:w-2xl ">
              With our uniquely experienced team, we offer a wide range of
              Cybersecurity services. Following is an example, but feel free to
              get in touch for the full services catalog.
            </p>
          </div>
          <BentoGridCards />
        </div>
      </section>

      {/* Stats strip */}
      <section className="mr-0 max-w-full flex md:flex-row-reverse flex-col justify-between items-center">
        <div className="container mx-auto md:p-16 p-10 space-y-10">
          <div className="grid place-items-start gap-2">
            <h2 className="text-5xl font-bold">Who are Cyber Hunter?</h2>
            <p className="text-gray-400 md:w-2xl">
              CyberHunter is a leading company specializing in information
              security. We are dedicated to delivering comprehensive reports on
              cyber- attacks, with a particular focus on the Mena region. Our
              team of expert information security reporters provides up-to-date
              insights and analyses to keep our clients informed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold text-blue-500">98%</div>
              <div className="text-sm text-gray-500">Client satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500">+250</div>
              <div className="text-sm text-gray-500">Assessments completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500">24/7</div>
              <div className="text-sm text-gray-500">Security operations</div>
            </div>
          </div>

          <Link href={"/about"} className="btnPrimary">
            Get to Know Us
          </Link>
        </div>

        <div className="w-full h-full md:m-0 mx-10">
          <Image
            src={"/Images/Cyber-security.webp"}
            alt={"Cyber Security"}
            className="md:rounded-r-4xl "
            height={700}
            width={700}
          />
        </div>
      </section>

      {/* --- New Component: Step-by-Step / How It Works --- */}
      <StepByStep />
      {/* --- End New Component --- */}

      {/* --- Testimonials Carousel (Modernized) --- */}
      <section className="m-0 overflow-hidden max-w-full px-4 py-16 md:px-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl text-dark font-bold mb-10 text-center">
            Trusted by Organizations
          </h2>
          <div className="max-w-7xl">
            <TestimonialCards />
          </div>
        </div>
      </section>
      {/* --- End Testimonials Carousel --- */}

      {/* --- FAQ Accordion (Modernized) --- */}
      <section className="bg-gray-50 m-0 max-w-full px-4 py-16 md:px-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-black">
            Frequently Asked Questions
          </h2>
          
          <FQACards />
        </div>
      </section>
      {/* --- End FAQ Accordion --- */}
    </main>
  );
}
