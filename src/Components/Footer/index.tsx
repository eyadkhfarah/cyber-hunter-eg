import { FooterLink } from "@/lib/FooterLink";
import { SocialLink } from "@/lib/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../SocialLinks";

export default function Footer() {
  const social = SocialLink;

  return (
    <>
      <div className="max-w-7xl md:mx-auto mx-7">
        <div className="grid place-items-center bg-linear-to-br from-[#0f172a] to-blue-800 mb-8 p-8 md:p-12 py-16 rounded-4xl">
          <h2 className="text-white text-2xl md:text-3xl mb-6 font-bold text-center">
            Ready to get started? We&apos;re here to help — Contact us NOW
          </h2>
          <Link
            href="/contact"
            className="btnPrimary"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <footer className="bg-linear-to-b from-[#0f172a] to-blue-950 text-white px-6 md:px-24 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Logo & tagline */}
            <div>
              <Link
                href="/"
                aria-label="Cyber Hunter Logo"
                className="flex items-center gap-3"
              >
                <Image
                  src="/Logo White.svg"
                  alt="Cyber Hunter Logo"
                  width={56}
                  height={56}
                />
                <span className="font-logoBold text-3xl">
                  Cyber<span className="font-logoRegular">Hunter</span>
                </span>
              </Link>
              <p className="mt-4 text-slate-300 max-w-sm">
                Practical security services: assessments, managed detection,
                incident response and training.
              </p>
            </div>

            {/* Social links & contact */}
            <div>
              <h4 className="text-lg uppercase font-bold mb-3">Follow & contact</h4>
              <p className="text-slate-300 mb-3">
                Follow us on social or email us directly.
              </p>
              <SocialLinks />

              <div className="mt-2 text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="font-bold">Email</span>
                  <Link
                    href={`mailto:${social.email}`}
                    className="text-white hover:underline"
                  >
                    {social.email}
                  </Link>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-bold">Phone</span>
                  <Link
                    href={`tel:${social.phone}`}
                    className="text-white hover:underline"
                  >
                    {social.phone}
                  </Link>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg uppercase font-bold mb-3">Quick links</h4>
              <ul className="space-y-2 text-slate-300">
                {FooterLink.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.link}
                      className="hover:text-white transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-6 md:flex grid place-items-center gap-5 md:justify-between md:items-center text-sm text-slate-400">
            <p>
              © Cyber Hunter {new Date().getFullYear()}. All rights reserved.
            </p>
            <p>
              This website made by{" "}
              <Link
                href={"https://designs-by-eyad.vercel.app/"}
                className="text-white font-bold"
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
