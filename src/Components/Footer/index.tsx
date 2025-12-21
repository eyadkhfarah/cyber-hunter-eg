import { FooterLink } from "@/lib/FooterLink";
import { SocialLink } from "@/lib/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";
import { NavLinks } from "@/lib/NavList";
import { Mail, Phone } from "lucide-react"; // Matching the Lucide style from services

export default function Footer() {
  const social = SocialLink;

  return (
    <>
      {/* CTA Section - Clean & High Contrast */}
      <div className="max-w-7xl md:mx-auto mx-7 mb-12">
        <div className="relative group overflow-hidden bg-white border border-blue-100 shadow-xl shadow-blue-500/5 p-8 md:p-12 py-16 rounded-[2.5rem] text-center">
          {/* --- CYBERSECURITY DECORATIVE BACKGROUND ELEMENTS --- */}

          {/* 1. Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40H0V0h40v40zM1 39h38V1H1v38z' fill='%233b82f6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          {/* 2. Large Radar Circle (Bottom Left) */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-blue-200/30 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 border border-blue-100/40 rounded-full pointer-events-none" />

          {/* 3. Pulsing Scanner Circle (Top Right) */}
          <div className="absolute -top-12 -right-12 w-64 h-64 border-2 border-dashed border-blue-100/50 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
          <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-blue-500/10 animate-ping pointer-events-none" />

          {/* 4. Technical Markers (Plus signs) */}
          <div className="absolute top-8 left-8 text-blue-200 font-mono text-xs opacity-50 select-none">
            0x//PROT_SEC
          </div>
          <div className="absolute bottom-8 right-8 text-blue-200 font-mono text-xs opacity-50 select-none uppercase">
            Status: Active
          </div>

          {/* --- CONTENT --- */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Secure Infrastructure
            </div>

            <h2 className="text-slate-900 text-3xl md:text-5xl mb-6 font-bold tracking-tight">
              Ready to secure your{" "}
              <span className="text-blue-600">future?</span>
            </h2>

            <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg md:text-xl leading-relaxed">
              Our experts are ready to provide the intelligence and protection
              your business needs to stay ahead of evolving threats.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btnPrimary group/btn">
                <span>Contact Us Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Light Theme */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 px-6 md:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Logo & Tagline */}
            <div className="space-y-6">
              <Link
                href="/"
                aria-label="Cyber Hunter Logo"
                className="flex items-center gap-3"
              >
                <Image
                  src="/Logo.svg" // Assuming you have a non-white version or using the colored one
                  alt="Cyber Hunter Logo"
                  width={48}
                  height={48}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-logoBold text-2xl text-slate-900">
                  Cyber
                  <span className="text-blue-600 font-logoRegular">Hunter</span>
                </span>
              </Link>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                Advanced security services: assessments, managed detection,
                incident response, and elite technical training.
              </p>
            </div>

            {/* Social & Direct Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-slate-900 mb-6">
                Follow & Contact
              </h4>
              <div className="mb-6">
                <SocialLinks />
              </div>

              <div className="space-y-4">
                <Link
                  href={`mailto:${social.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium">{social.email}</span>
                </Link>

                <Link
                  href={`tel:${social.phone}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100">
                    <Phone className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="font-medium">{social.phone}</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-slate-900 mb-6">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[...NavLinks, ...FooterLink].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.link}
                      className="text-slate-500 hover:text-blue-600 transition-colors inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Cyber Hunter. Protecting digital
              frontiers.
            </p>
            <p className="flex items-center gap-1">
              Made with precision by{" "}
              <Link
                href={"https://designs-by-eyad.vercel.app/"}
                className="text-slate-900 font-bold hover:text-blue-600 transition-colors"
              >
                Designs by Eyad
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
