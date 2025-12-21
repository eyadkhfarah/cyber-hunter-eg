import ArticleTags from "@/Components/Blog/ArticlesTags";
import EmailSubscription from "@/Components/Blog/EmailSubscription";
import { SocialShare } from "@/Components/Blog/SocialShare";
import TweetHydrator from "@/Components/Client/TweetHydrator";
import { generateArticleMetadata } from "@/lib/Article/generateArticleMetadata";
import { renderNotionContent } from "@/lib/Article/renderNotionContent";
import { getJsonLdArticle, getJsonLdImage } from "@/lib/Schemas/getJsonLd";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";
import readingTime from "reading-time";

// ----------------------------------------------------------------------
// 1. Mock Data Definitions
// ----------------------------------------------------------------------

type Params = Promise<{ slug: string }>;

export const revalidate = 1;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return await generateArticleMetadata({ params });
}

const RELATED_ARTICLES = [
  {
    title: "Top 5 Cloud Security Misconfigurations",
    link: "cloud-misconfigurations",
  },
  { title: "The Rise of AI in Phishing Attacks", link: "ai-phishing-attacks" },
  {
    title: "How to Build a Secure Home Office Network",
    link: "secure-home-office",
  },
  {
    title: "Blockchain's Role in Data Integrity",
    link: "blockchain-data-integrity",
  },
];

// ----------------------------------------------------------------------
// 2. Component Helpers (Sidebar Sections)
// ----------------------------------------------------------------------

/**
 * Related Articles List Component
 */
const RelatedArticles = () => (
  <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-inner">
    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
      Related Reading
    </h3>
    <ul className="space-y-3">
      {RELATED_ARTICLES.map((article, index) => (
        <li
          key={index}
          className="border-l-4 border-blue-500 pl-3 transition-colors duration-200 hover:border-blue-700"
        >
          {/* FIX: Replaced Link with standard <a> tag */}
          <Link
            href={`/blog/${article.link}`}
            className="text-sm text-gray-600 hover:text-blue-700 font-medium"
          >
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ----------------------------------------------------------------------
// 3. Main Article Component
// ----------------------------------------------------------------------

export default async function ArticlePage({ params }: { params: Params }) {
  // const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;

  const slug = (await params).slug;
  const { post, content, currentIndex } = await (
    await import("@/lib/Article/getPostData")
  ).getPostData(slug);
  if (!post || currentIndex === -1) return notFound();

  const title = post.properties.Name.title[0]?.plain_text || "";
  const Subtitle = post.properties.Subtitle.rich_text[0]?.plain_text || "";
  const category = post.properties.Category.select.name || "";
  const author = post.properties.Author.rich_text[0]?.plain_text || "";
  const date = post.properties.Publication.date.start || "";
  // const readingTime = ""; // Extract from post if available
  const imageUrl = post.properties.Thumbnail.files[0]?.name || "";
  const url = post.properties.Slug.rich_text[0]?.plain_text || "";

  // const { category, subCategory } = getCategoryObjects(post);

  // Render the Notion blocks to HTML using the new utility
  const html = await renderNotionContent(content);

  const plainText = await renderNotionContent(content);
  const { minutes } = readingTime(plainText);

  return (
    <>
      <main className="container mx-auto md:px-32 px-7 py-16">
        {/* Article Grid Layout: 3/4 content, 1/4 sidebar (switches to stack on small screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* === ARTICLE CONTENT (3/4 width on desktop) === */}
          <article className="lg:col-span-2">
            {/* Header Metadata */}
            <header className="mb-8 space-y-4">
              <span className="text-sm font-bold uppercase text-blue-600 tracking-wider bg-blue-50 py-1 px-3 rounded-full inline-block">
                {category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>

              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>
                  By: <strong className="text-dark font-bold">{author}</strong>
                </span>
                <span>•</span>
                <span>{date}</span>
                <span>•</span>
                <span>{minutes} min</span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-10 w-full h-fit bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageUrl}
                alt={title}
                width={1000}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Body Content */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="lead font-serif text-xl italic text-gray-800 border-l-4 border-blue-500 pl-4">
                {Subtitle}
              </p>

              <TweetHydrator
                html={html}
                className="my-16 prose prose-lg col-span-2 prose-headings:font-bold prose-headings:text-primary prose-img:rounded-2xl prose-strong:font-bold prose-a:text-blue-500 prose-a:no-underline"
              />
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-2xl mb-5">Tags</h3>
              <ArticleTags
                tags={post.properties.Tags.multi_select}
                variant="sidebar"
              />
            </div>
          </article>

          {/* === SIDEBAR (1/4 width on desktop, stacked on mobile) === */}
          <aside className="lg:col-span-1">
            <div className="sticky top-36 space-y-8">
              {/* 1. Email Subscription */}
              <EmailSubscription />

              {/* 2. Related Articles */}
              <RelatedArticles />

              {/* 3. Social Share */}
              <SocialShare title={title} url={url} />
            </div>
          </aside>
        </div>
      </main>
      <Script
        id=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLdArticle) }}
      />
      <Script
        id=""
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLdImage) }}
      />
    </>
  );
}
