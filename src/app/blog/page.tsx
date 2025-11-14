import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata({
  title: "Blog",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.`,
  url: "/blog",
});

export default function page() {
  return (
    <main className="container mx-auto md:px-24 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-slate-600">
          Have a question or need help with your security program? Send us a
          message or reach out via email and social media — we usually respond
          within one business day.
        </p>
      </header>
    </main>
  )
}
