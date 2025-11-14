import React from "react";
import Email from "./Email";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata({
  title: "Partnerships",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.`,
  url: "/partnerships",
});

export default function page() {
  return (
    <main className="container mx-auto px-4 md:px-24 py-16">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Partnerships
        </h1>
        <p className="text-lg text-slate-700 mb-6">
          We collaborate with technology vendors, service providers and
          resellers to bring better security products and services to market.
        </p>

        <div className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-400 text-white font-bold">
          Partnerships launching soon
        </div>
      </header>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="p-8 bg-dark rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Why partner with Cyber Hunter
          </h2>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>
                Joint go-to-market opportunities and co-branded programs to
                expand reach and win more customers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>
                Technical enablement: training, run books and integration support
                so your team can sell and deliver confidently.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">•</span>
              <span>
                Revenue share and partner-first commercial models tailored to
                long-term relationships.
              </span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-dark rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ideal partners
          </h2>
          <p className="text-slate-300 mb-4">
            We work best with cloud-native platform vendors, managed service
            providers, and software firms focused on secure products.
          </p>

          <h3 className="text-lg font-bold text-white mb-2">
            What to expect
          </h3>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Intro call to align on goals and fit.</li>
            <li>Technical integration and enablement workshop.</li>
            <li>Co-marketing plan and pilot engagements.</li>
          </ol>
        </div>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">
          Interested in partnering?
        </h3>
        <p className="text-slate-500 mb-6">
          We are accepting expressions of interest now — formal partnership
          program launches soon.
        </p>
        <Email />
        <p className="text-sm text-slate-400 mt-4">
          We will reach out with partnership details when the program opens.
        </p>
      </section>
    </main>
  );
}
