import BlogCard from "@/Components/Blog/BlogCard";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";

export const metadata: Metadata = generateStaticMetadata({
  title: "Blog",
  description: `Stay ahead of the curve with CyberHunter's comprehensive cyber-attack reports and expert analysis. Our blog delivers up-to-date insights** into the latest threats, with a dedicated focus on the evolving MENA region security landscape.`,
  url: "/blog",
});

const Testing = [
  {
    title: "How to secure your web applications",
    description:
      "Learn the best practices for securing your web applications against common vulnerabilities and threats.",
    category: "Web Security",
    link: "securing-web-applications",
  },
  {
    title: "How to secure your web applications",
    description:
      "Learn the best practices for securing your web applications against common vulnerabilities and threats.",
    category: "Web Security",
    link: "securing-web-applications",
  },
  {
    title: "How to secure your web applications",
    description:
      "Learn the best practices for securing your web applications against common vulnerabilities and threats.",
    category: "Web Security",
    link: "securing-web-applications",
  },
];

export default function page() {
  return (
    <main className="container mx-auto md:px-24 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-slate-600">
          Stay ahead of the curve with CyberHunter&apos;s comprehensive
          cyber-attack reports and expert analysis. Our blog delivers up-to-date
          insights into the latest threats, with a dedicated focus on the
          evolving MENA region security landscape.
        </p>
      </header>

      <section>
        <div className="w-full lg:grid-cols-3 grid gap-5">
          {Testing.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
