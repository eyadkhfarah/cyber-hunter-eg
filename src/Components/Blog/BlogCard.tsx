import { renderNotionContent } from "@/lib/Article/renderNotionContent";
import { notionBlog } from "@/lib/notion";
import { BlogPost } from "@/types/notionBlog";
import { Clock, ArrowUpRight, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

type BlogCardProps = {
  articles?: BlogPost;
  isLoading?: boolean;
};

/**
 * Modern skeletal loading card with cyber-styling.
 */
export function BlogCardLoader() {
  return (
    <div className="w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 animate-pulse">
      <div className="aspect-16/10 w-full bg-slate-200 relative">
        {/* Subtle grid overlay for the loader */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
      </div>
      <div className="p-6 space-y-4">
        <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-6 w-full bg-slate-300 rounded-lg"></div>
          <div className="h-6 w-2/3 bg-slate-300 rounded-lg"></div>
        </div>
        <div className="h-16 w-full bg-slate-200 rounded-xl"></div>
      </div>
    </div>
  );
}

export default async function BlogCard({ articles, isLoading }: BlogCardProps) {
  if (isLoading || !articles) {
    return <BlogCardLoader />;
  }

  // Fetch blocks to calculate reading time
  const blocks = await notionBlog.blocks.children.list({
    block_id: articles.id,
  });

  const plainText = await renderNotionContent(blocks.results);
  const { minutes } = readingTime(plainText);

  // Extract Notion properties safely
  const title = articles.properties.Name?.title?.[0]?.plain_text || "Classified Report";
  const description = articles.properties.Subtitle?.rich_text?.[0]?.plain_text || "Accessing intelligence data...";
  const category = articles.properties.Category?.select?.name || "Intelligence";
  const slug = articles.properties.Slug?.rich_text?.[0]?.plain_text || articles.id;

  // Handle Notion's nested file/external structure
  const thumbnail = articles.properties.Thumbnail?.files?.[0];
  const imageUrl = thumbnail?.type === 'external' ? thumbnail.external.url : thumbnail?.file?.url || "/Images/placeholder-report.webp";

  return (
    <Link
      href={`/blog/${slug}`}
      className="group relative block w-full bg-white rounded-4xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      {/* 🖼️ Cover Image with Overlay */}
      <div className="relative aspect-16/10 w-full bg-slate-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 scale-100 group-hover:scale-110 blur-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Modern glassmorphism badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Shield className="w-3 h-3 text-blue-400" />
            {category}
          </div>
        </div>

        {/* Floating Arrow on Hover */}
        <div className="absolute bottom-4 right-4 z-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/40">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>

      {/* 📝 Content Area */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px] uppercase tracking-wider">
            <Clock className="w-3 h-3 text-blue-500" />
            {Math.ceil(minutes)} MIN READ
          </div>
          <div className="h-px flex-1 bg-slate-50" />
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-medium">
          {description}
        </p>
      </div>

      {/* Subtle border bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}