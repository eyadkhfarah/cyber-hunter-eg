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
      <div className="grid place-items-center bg-linear-to-br from-[#0f172a] to-blue-800 m-24 p-9 py-16 rounded-4xl">
        <h2 className="text-white text-2xl mb-6 font-bold">
          Ready to get started? we&apos;re here to help! Request a demo below
        </h2>
        <Link href={"/contact"} className="btnPrimary">
          Request the demo
        </Link>
      </div>
      <footer className="bg-linear-to-b from-[#0f172a] rounded-t-4xl to-blue-950 text-white px-24 py-6">
        <div className="flex justify-between items-center">
          <div className="grid h-fit gap-3">
            <Link
              href={"/"}
              aria-label="Cyber Hunter Logo"
              className="flex items-center gap-3"
            >
              <Image
                src={"/Logo White.svg"}
                alt="Cyber Hunter Logo"
                width={60}
                height={60}
              />
              <span className="font-logoBold text-3xl">
                Cyber<span className="font-logoRegular">Hunter</span>
              </span>
            </Link>
          </div>
          <div className="grid h-fit gap-5">
            <p>Follow Us via:</p>
            <div className="flex items-center gap-4">
              {[
                {
                  href: social.facebook,
                  icon: RiFacebookFill,

                  text: "فيسبوك",
                },
                {
                  href: social.instagram,
                  icon: RiInstagramLine,
                  text: "إنستاجرام",
                },
                {
                  href: social.twitter,
                  icon: RiTwitterXLine,
                  text: "تويتر (X)",
                },
                {
                  href: social.linkedin,
                  icon: RiLinkedinFill,
                  text: "تويتر (X)",
                },
                {
                  href: social.tiktok,
                  icon: RiTiktokFill,
                  text: "تويتر (X)",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="font-black group pb-2 flex justify-between items-center transition-all ease-in-out duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <span className="p-2 text-2xl text-white rounded-full bg-blue-950 group-hover:bg-blue-500 transition-colors duration-500">
                      <item.icon />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-clip-border from-cyan-300 to-indigo-500 border-t border-t-white my-9">
          <ul className="flex items-center justify-center gap-6 py-10">
            {FooterLink.map((link, i) => {
              return (
                <li key={i}>
                  <Link href={link.link} aria-label={link.name}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <span>
          © copyright Cyber Hunter {new Date().getFullYear()}. All rights
          reserved.
        </span>
      </footer>
    </>
  );
}
