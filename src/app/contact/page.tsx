import React from "react";
import Email from "./Email";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have a question or need help with your security program? Send us a
          message or reach out via email and social media — we usually respond
          within one business day.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/6">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <Email />
        </div>

        <aside className="p-6 rounded-2xl border border-white/6 bg-white/3">
          <h3 className="text-xl font-semibold mb-3">Other ways to reach us</h3>

          <div className="space-y-4 text-slate-700">
            <div className="flex items-center gap-3">
              <FiMail className="h-5 w-5 text-cyan-500" />
              <a href="mailto:hello@cyber-hunter.com" className="font-medium text-slate-900">hello@cyber-hunter.com</a>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="h-5 w-5 text-cyan-500" />
              <span className="text-slate-700">+1 (555) 123-4567</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3">Follow us</h4>
            <div className="flex items-center gap-4">
              <a aria-label="LinkedIn" href="#" className="text-slate-800 hover:text-cyan-500">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a aria-label="Twitter" href="#" className="text-slate-800 hover:text-cyan-500">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a aria-label="GitHub" href="#" className="text-slate-800 hover:text-cyan-500">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
