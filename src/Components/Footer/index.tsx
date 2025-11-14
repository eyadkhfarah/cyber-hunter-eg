import { FooterLink } from "@/lib/FooterLink";
import { SocialLink } from "@/lib/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTiktokFill,
  RiTwitterXLine,
} from "react-icons/ri";

export default function Footer() {
  const social = SocialLink;

  return (
    <>
      <div className="grid place-items-center bg-linear-to-br from-[#0f172a] to-blue-800 mx-6 mb-8 md:mx-24 p-8 md:p-12 py-16 rounded-4xl">
        <h2 className="text-white text-2xl md:text-3xl mb-6 font-bold text-center">
          Ready to get started? We&apos;re here to help — request a demo below
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-linear-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-2xl font-bold shadow-md hover:scale-[1.02] transition"
        >
          Request the demo
        </Link>
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
              <h4 className="text-lg font-bold mb-3">Follow & contact</h4>
              <p className="text-slate-300 mb-3">
                Follow us on social or email us directly.
              </p>
              <div className="flex items-center gap-3 mb-3">
                {[
                  { href: social.facebook, icon: RiFacebookFill },
                  { href: social.instagram, icon: RiInstagramLine },
                  { href: social.twitter, icon: RiTwitterXLine },
                  { href: social.linkedin, icon: RiLinkedinFill },
                  { href: social.tiktok, icon: RiTiktokFill },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="group pb-2 flex justify-between items-center transition-all ease-in-out duration-300"
                  >
                    <span className="p-2 text-2xl text-white rounded-full bg-blue-950 group-hover:bg-blue-500 transition-colors duration-500">
                      <item.icon />
                    </span>
                  </Link>
                ))}
              </div>

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
                  <span className="text-slate-300">{social.phone}</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-bold mb-3">Quick links</h4>
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
            <p>© Cyber Hunter {new Date().getFullYear()}. All rights reserved.</p>
            <p>This webiste made by <Link href={"https://designs-by-eyad.vercel.app/"} className="text-white font-bold">Designs by Eyad</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
}
