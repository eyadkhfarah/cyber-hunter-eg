/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/Components/Blog/BlogCard";
import { generateStaticMetadata } from "@/lib/generateStaticMetadata";
import { Metadata } from "next";
import { fetchPosts } from "@/lib/Data/notionBlogData";
import { BlogPost } from "@/types/notionBlog";

export const metadata: Metadata = generateStaticMetadata({
  title: "Blog",
  description: `Stay ahead of the curve with CyberHunter's comprehensive cyber-attack reports and expert analysis. Our blog delivers up-to-date insights** into the latest threats, with a dedicated focus on the evolving MENA region security landscape.`,
  url: "/blog",
});

// type NotionPost = any;

// Revalidate this page every 1 second
export const revalidate = 1;

// const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

export default async function page({
}: {
  articles: BlogPost[];
  pageParam: string | null;
}) {

  const posts = await fetchPosts();
  // const articles = Array.isArray(posts?.results) ? posts.results : [];
  
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
          {posts.map((blog: any, i) => (
            <BlogCard key={i} articles={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
