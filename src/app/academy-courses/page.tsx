import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata({
  title: "Academy Courses",
  description: `CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.`,
  url: "/academy-courses",
});

export default function page() {
  return (
    <main className="container mx-auto px-6 py-16">
      <header className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
          Academy Courses
        </h1>
        <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          CyberHunter is a leading company specializing in information security. We are dedicated to delivering comprehensive reports on cyber- attacks, with a particular focus on the Mena region. Our team of expert information security reporters provides up-to-date insights and analyses to keep our clients informed.
        </p>
      </header>
    </main>
  );
}
