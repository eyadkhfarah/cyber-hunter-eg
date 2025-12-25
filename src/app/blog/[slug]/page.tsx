import ArticleTags, { Tag } from "@/Components/Blog/ArticlesTags";
import EmailSubscription from "@/Components/Blog/EmailSubscription";
import { SocialShare } from "@/Components/Blog/SocialShare";
import TweetHydrator from "@/Components/Client/TweetHydrator";
import { generateArticleMetadata } from "@/lib/Article/generateArticleMetadata";
import { renderNotionContent } from "@/lib/Article/renderNotionContent";
import { getJsonLdArticle, getJsonLdImage } from "@/lib/Schemas/getJsonLd";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import readingTime from "reading-time";
import { Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { RelatedArticles } from "./RelatedArticles";

type Params = Promise<{ slug: string }>;

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  return await generateArticleMetadata({ params });
}

export default async function ArticlePage({ params }: { params: Params }) {
  const slug = (await params).slug;

  const { getPostData } = await import("@/lib/Article/getPostData");

  const { post, content, currentIndex } = await getPostData(slug);
  if (!post || currentIndex === -1) return notFound();

  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "https://cyberhuntereg.com";

  // --- Data Extraction ---
  const title = post.properties.Name.title[0]?.plain_text || "Untitled Report";
  const subtitle = post.properties.Subtitle?.rich_text?.[0]?.plain_text || "";
  const category = post.properties.Category?.select?.name || "General";

  // Extract tags - handle case where tag.name might be string[]
  const tagObjects: Tag[] = post.properties.Tags.multi_select.map((tag) => ({
    name: Array.isArray(tag.name) ? tag.name[0] || "" : tag.name,
  }));

  // Extract just the names for RelatedArticles
  const tagNames: string[] = tagObjects.map((tag) => tag.name);

  const author =
    post.properties.Author?.rich_text?.[0]?.plain_text || "CyberHunter Analyst";
  const dateStr =
    post.properties.Publication?.date?.start || new Date().toISOString();
  const slugUrl = post.properties.Slug?.rich_text?.[0]?.plain_text || slug;

  // Robust Image Extraction (External vs File)
  const thumbnail = post.properties.Thumbnail?.files?.[0];
  const imageUrl =
    thumbnail?.type === "external"
      ? thumbnail.external.url
      : thumbnail?.file?.url || "/Images/placeholder-report.webp";

  // Content Processing
  const html =
    content.length > 0
      ? await renderNotionContent(content)
      : "<p>No content available for this post.</p>";
  const plainText = await renderNotionContent(content);
  const { minutes } = readingTime(plainText);
  const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <main className="min-h-screen">
        {/* --- HEADER SECTION --- */}
        <header className="relative pt-32 pb-16 bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700">
                <ShieldCheck className="w-3 h-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  {category}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                {title}
              </h1>

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

              {subtitle && (
                <div className="mb-10 pl-6 border-l-4 border-blue-500">
                  <p className="text-xl md:text-2xl font-serif text-slate-600 italic leading-relaxed">
                    {subtitle}
                  </p>
                </div>
              )}

              <TweetHydrator
                className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline prose-img:rounded-3xl prose-img:shadow-xl prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100"
                html={html}
              />

              <div className="mt-16 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Indexed Under:
                  </span>
                </div>
                <ArticleTags tags={tagObjects} variant="sidebar" />
              </div>
            </article>

            {/* === SIDEBAR (4 cols) === */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 rounded-3xl p-1 shadow-2xl">
                  <EmailSubscription />
                </div>

                <RelatedArticles
                  currentPostId={post.id}
                  category={category}
                  tags={tagNames}
                />

                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Share Intelligence
                  </h3>
                  <SocialShare title={title} url={slugUrl} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Script
        id="ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLdArticle(post, siteUrl, dateStr)),
        }}
      />
      <Script
        id="ld-image"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getJsonLdImage(post, siteUrl)),
        }}
      />
    </>
  );
}
