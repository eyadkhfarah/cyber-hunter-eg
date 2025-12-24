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
import { Calendar, Clock, User, FileText, ChevronRight, ShieldCheck } from "lucide-react";

// ----------------------------------------------------------------------
// 1. Types & Metadata
// ----------------------------------------------------------------------

type Params = Promise<{ slug: string }>;

export const revalidate = 3600; // Revalidate every hour for blog posts

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
    category: "Cloud Security"
  },
  { title: "The Rise of AI in Phishing Attacks", link: "ai-phishing-attacks", category: "Threat Intel" },
  {
    title: "How to Build a Secure Home Office Network",
    link: "secure-home-office",
    category: "Best Practices"
  },
  {
    title: "Blockchain's Role in Data Integrity",
    link: "blockchain-data-integrity",
    category: "Cryptography"
  },
];

// ----------------------------------------------------------------------
// 2. Component Helpers
// ----------------------------------------------------------------------

/**
 * Modern "File System" style related articles
 */
const RelatedArticles = () => (
  <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
    <div className="bg-slate-50/50 p-6 border-b border-slate-100 flex items-center gap-2">
      <FileText className="w-4 h-4 text-blue-500" />
      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
        Related_Intelligence
      </h3>
    </div>
    <ul className="divide-y divide-slate-50">
      {RELATED_ARTICLES.map((article, index) => (
        <li key={index} className="group hover:bg-slate-50 transition-colors duration-200">
          <Link
            href={`/blog/${article.link}`}
            className="block p-5"
          >
            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-1 block">
                {article.category}
            </span>
            <div className="flex justify-between items-start gap-4">
                <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {article.title}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
            </div>
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
  const slug = (await params).slug;

  // Dynamic Import to avoid build-time loops
  const { getPostData } = await import("@/lib/Article/getPostData");
  
  const { post, content, currentIndex } = await getPostData(slug);
  if (!post || currentIndex === -1) return notFound();
  
  // 1. Define your Site URL (usually from env variables)
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "https://cyberhuntereg.com";

  // --- Data Extraction ---
  const title = post.properties.Name.title[0]?.plain_text || "Untitled Report";
  const subtitle = post.properties.Subtitle?.rich_text?.[0]?.plain_text || "";
  const category = post.properties.Category?.select?.name || "General";
  const author = post.properties.Author?.rich_text?.[0]?.plain_text || "CyberHunter Analyst";
  const dateStr = post.properties.Publication?.date?.start || new Date().toISOString();
  const slugUrl = post.properties.Slug?.rich_text?.[0]?.plain_text || slug;

  // Robust Image Extraction (External vs File)
  const thumbnail = post.properties.Thumbnail?.files?.[0];
  const imageUrl = thumbnail?.type === 'external' 
    ? thumbnail.external.url 
    : thumbnail?.file?.url || "/Images/placeholder-report.webp";

  // Content Processing
   const html = content.length > 0 
    ? await renderNotionContent(content)
    : "<p>No content available for this post.</p>";
  const plainText = await renderNotionContent(content); // Ensure your render function can return plain text if needed, otherwise strip HTML
  const { minutes } = readingTime(plainText);
  const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
  });

  return (
    <>
      <main className="min-h-screen">
        {/* --- HEADER SECTION --- */}
        <header className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700">
                        <ShieldCheck className="w-3 h-3" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{category}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                        {title}
                    </h1>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-blue-500" />
                            <span>{author}</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span>{formattedDate}</span>
                        </div>
                        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full" />
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>{Math.ceil(minutes)} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* --- CONTENT SECTION --- */}
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* === MAIN ARTICLE (8 cols) === */}
                <article className="lg:col-span-8">
                    
                    {/* Featured Image */}
                    <div className="relative aspect-video w-full rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 mb-12 border border-slate-100">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </div>

                    {/* Subtitle / Lead */}
                    {subtitle && (
                        <div className="mb-10 pl-6 border-l-4 border-blue-500">
                            <p className="text-xl md:text-2xl font-serif text-slate-600 italic leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    )}

                    {/* Notion Content */}
                    <div className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-3xl prose-img:shadow-xl
                        prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                    ">
                        <TweetHydrator html={html} />
                    </div>

                    {/* Tags Footer */}
                    <div className="mt-16 pt-8 border-t border-slate-100">
                         <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Indexed Under:</span>
                         </div>
                         <ArticleTags
                            tags={post.properties.Tags.multi_select}
                            variant="sidebar"
                        />
                    </div>
                </article>

                {/* === SIDEBAR (4 cols) === */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        {/* 1. Subscription Widget */}
                        <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl">
                            <EmailSubscription /> 
                        </div>

                        {/* 2. Related Articles */}
                        <RelatedArticles />

                        {/* 3. Social Share */}
                        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Share Intelligence</h3>
                            <SocialShare title={title} url={slugUrl} />
                        </div>
                    </div>
                </aside>

            </div>
        </div>
      </main>

      {/* --- STRUCTURED DATA --- */}
      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(getJsonLdArticle(
                post, 
                siteUrl, 
                dateStr
            )) 
        }}
      />
      <Script
        id="ld-image"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(getJsonLdImage(
                post, 
                siteUrl
            )) 
        }}
      />
    </>
  );
}