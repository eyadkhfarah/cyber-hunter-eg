import Email from "./Email";
import { SocialLink } from "@/lib/SocialLinks";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import Link from "next/link";
import { Metadata } from "next";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import SocialLinks from "@/Components/SocialLinks";

export const metadata: Metadata = generateStaticMetadata({
  title: "Contact",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.`,
  url: "/contact",
});

export default function ContactPage() {
  const social = SocialLink;

  return (
    <main className="container mx-auto lg:px-24 md:-px-0 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have a question or need help with your security program? Send us a
          message or reach out via email and social media — we usually respond
          within one business day.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 w-full">
        <div className="bg-white/5 pt-6 rounded-2xl border border-white/6">
          <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
          <Email />
        </div>

        <aside className="p-6 rounded-2xl bg-dark">
          <h3 className="text-2xl text-white font-bold mb-3">
            Other ways to reach us
          </h3>

          <div className="space-y-4">
            <Link
              href={`mailto:${social.email}`}
              className="flex text-white items-center gap-3 bg-blue-950 hover:bg-blue-900 transition-colors duration-300 ease-in-out p-5 rounded-3xl"
            >
              <span className="text-2xl bg-blue-500 text-white rounded-full p-2">
                <RiMailLine />
              </span>
              {social.email}
            </Link>

            <Link
              href={`tel:${social.phone}`}
              className="flex text-white items-center gap-3 bg-blue-950 hover:bg-blue-900 transition-colors duration-300 ease-in-out p-5 rounded-3xl"
            >
              <span className="text-2xl bg-blue-500 text-white rounded-full p-2">
                <RiPhoneLine />
              </span>
              {social.phone}
            </Link>
          </div>

          <div className="mt-6">
            <h4 className="font-bold text-xl text-white mb-3">
              Message us via:
            </h4>
            <SocialLinks />
          </div>
        </aside>
      </section>
    </main>
  );
}
