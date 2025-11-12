"use client";

import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

export default function AboutPage() {
  const [open, setOpen] = useState<number | null>(null);

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
    { title: "Curiosity", desc: "We continuously research emerging threats and improve detections." },
    { title: "Responsibility", desc: "Protecting customer data and respecting privacy by design." },
    { title: "Excellence", desc: "Measurable outcomes, reliable processes and rigorous testing." },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-black">
          About Cyber Hunter
        </h1>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          We help organizations proactively defend their digital assets with
          modern threat intelligence, continuous monitoring and pragmatic
          security engineering. Our team blends deep offensive security
          experience with engineering discipline to deliver measurable risk
          reduction.
        </p>
      </header>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            body:
              "To secure businesses by identifying, prioritizing and mitigating real-world threats — enabling teams to operate safely and with confidence. We focus on outcomes: fewer incidents, faster detection, and resilient systems.",
          },
          {
            title: "Our Vision",
            body:
              "A world where robust cybersecurity is accessible to organizations of every size. We envision seamless security that empowers innovation rather than slowing it down — security engineered into the product lifecycle.",
          },
          {
            title: "Our Message",
            body:
              "Security is a continuous process, not a one-time project. We partner with your team to build capabilities, transfer knowledge, and leave you stronger.",
          },
        ].map((card, idx) => (
          <article
            key={idx}
            className="p-6 bg-slate-800/60 hover:bg-slate-800/70 rounded-xl border border-white/6 transform transition-transform duration-200 hover:-translate-y-1 focus-within:-translate-y-1"
            tabIndex={0}
            aria-labelledby={`card-${idx}`}
          >
            <h2 id={`card-${idx}`} className="text-xl font-semibold mb-2 text-black">
              {card.title}
            </h2>
            <p className="text-slate-300">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 max-w-4xl mx-auto">
        <div className="bg-linear-to-r from-slate-900/60 via-slate-800/50 to-slate-900/60 p-8 rounded-2xl border border-white/6">
          <h3 className="text-2xl font-bold mb-4 text-black">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="relative">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full text-left p-4 bg-slate-800/40 hover:bg-slate-800/60 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black">{v.title}</span>
                    <span className={`${open === i ? "rotate-90" : "rotate-0"} transition-transform duration-200 text-sm text-slate-300 font-semibold`}><RiArrowRightSLine /></span>
                  </div>
                  <div
                    className={`mt-3 text-slate-300 overflow-hidden transition-all duration-300 ${
                      open === i ? "max-h-40" : "max-h-0"
                    }`}
                    aria-hidden={open !== i}
                  >
                    {v.desc}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center">
  <h3 className="text-2xl font-semibold mb-3 text-black">A note from our Founder</h3>
        <p className="text-slate-600 mb-6">
          I have worked on both sides of security — building systems and
          breaking them — and I founded Cyber Hunter to bridge that gap. Our
          goal is simple: help teams ship features securely and keep their
          customers safe.
        </p>
        <p className="text-sm text-slate-400">— Eyad Kh. Farah, Founder</p>
      </section>

      <section className="mt-12 max-w-3xl mx-auto text-center">
  <h4 className="text-xl font-semibold mb-4 text-black">Ready to strengthen your security posture?</h4>
        <div className="flex justify-center">
          <a href="/contact" className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transform hover:-translate-y-0.5 transition">
            Contact our team
          </a>
        </div>
      </section>
    </div>
  );
}
