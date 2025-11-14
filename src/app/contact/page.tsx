import Email from "./Email";
import { SocialLink } from "@/lib/SocialLinks";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiMailLine,
  RiPhoneLine,
  RiTiktokFill,
  RiTwitterXLine,
} from "react-icons/ri";
import Link from "next/link";

export default function ContactPage() {
  const social = SocialLink;

  return (
    <main className="container mx-auto md:px-24 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have a question or need help with your security program? Send us a
          message or reach out via email and social media — we usually respond
          within one business day.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 w-full">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/6">
          <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
          <Email />
        </div>

        <aside className="p-6 rounded-2xl bg-dark">
          <h3 className="text-2xl text-white font-bold mb-3">
            Other ways to reach us
          </h3>

          <div className="space-y-4 text-slate-700">
            <div className="flex items-center gap-3">
              <RiMailLine className="h-5 w-5 text-blue-500" />
              <Link href={`mailto:${social.email}`} className="text-gray-400">
                {social.email}
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <RiPhoneLine className="h-5 w-5 text-blue-500" />
              <span className="text-gray-400">{social.phone}</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-xl text-white mb-3">
              Message us via:
            </h4>
            <div className="flex items-center gap-4">
              {[
                {
                  href: SocialLink.facebook,
                  icon: RiFacebookFill,

                  text: "Facebook",
                },
                {
                  href: social.instagram,
                  icon: RiInstagramLine,
                  text: "Instagram",
                },
                {
                  href: social.twitter,
                  icon: RiTwitterXLine,
                  text: "X",
                },
                {
                  href: social.linkedin,
                  icon: RiLinkedinFill,
                  text: "LinkedIn",
                },
                {
                  href: social.tiktok,
                  icon: RiTiktokFill,
                  text: "Tiktok",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="font-black group pb-2 flex justify-between items-center transition-all ease-in-out duration-300"
                >
                  <span className="p-2 text-2xl text-white rounded-full bg-blue-950 group-hover:bg-blue-500 transition-colors duration-500">
                    <item.icon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
