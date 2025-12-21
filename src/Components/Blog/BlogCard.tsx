import { renderNotionContent } from "@/lib/Article/renderNotionContent";
import { notionBlog } from "@/lib/notion";
import { BlogPost } from "@/types/notionBlog";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

// Assuming you have a utility function like 'cn' for combining classes,
// if not, you'd define a helper or use template literals.

// --- Type Definitions ---

type BlogCardProps = {
  articles?: BlogPost;
  index?: number;
  isLoading?: boolean;
};

// --- Helper Components ---

/**
 * Renders a modern skeletal loading card.
 */
export function BlogCardLoader() {
  return (
    <div className="group block w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-pulse">
      {/* Skeleton Image Placeholder (50% height or fixed aspect ratio) */}
      <div className="aspect-video w-full bg-gray-200"></div>

      <div className="p-5 grid gap-3">
        {/* Category Skeleton */}
        <div className="h-4 w-1/4 bg-gray-200 rounded-full"></div>

        {/* Title Skeleton */}
        <div className="h-6 w-3/4 bg-gray-300 rounded-lg"></div>

        {/* Description Skeleton Lines */}
        <div className="space-y-2 mt-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export default async function BlogCard({ articles, isLoading }: BlogCardProps) {
  // If loading, render the dedicated loader component
  if (isLoading || !articles) {
    return <BlogCardLoader />;
  }

  const blocks = await notionBlog.blocks.children.list({
    block_id: articles.id,
  });

  const plainText = await renderNotionContent(blocks.results);
  const { minutes } = readingTime(plainText);

  // ✅ Extract Notion data with fallbacks
  const title =
    articles.properties.Name?.title?.[0]?.plain_text?.trim() || "Untitled Post";
  const description =
    articles.properties.Subtitle?.rich_text?.[0]?.plain_text?.trim() ||
    "Read this article to learn more.";
  const category =
    articles.properties.Category?.select?.name || "Uncategorized";
  // const date = articles.properties.Publication?.date?.start
  //   ? new Date(articles.properties.Publication.date.start).toLocaleDateString(
  //       "ar-EG",
  //       {
  //         year: "numeric",
  //         month: "long",
  //         day: "numeric",
  //       }
  //     )
  //   : "Unknown Date";

  const imageUrl = articles.properties.Thumbnail?.files?.[0]?.name
    ? articles.properties.Thumbnail.files[0].name
    : "/default-thumbnail.jpg";

  return (
    <Link
      href={`/blog/${
        articles.properties.Slug?.rich_text?.[0]?.plain_text || 0
      }`}
      className="group block w-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 border border-gray-100"
    >
      {/* 🖼️ Image Placeholder/Actual Image */}
      <div className="aspect-video w-full bg-gray-200 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={250}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Default placeholder if no image URL is provided
          <div className="flex items-center justify-center h-full text-gray-400">
            [Image of a digital blog post icon]
          </div>
        )}
      </div>

      {/* 📝 Content Area */}
      <div className="p-5 grid gap-3">
        {/* Category Tag */}
        <div className="flex justify-between items-center">
          <span className="text-xs w-fit font-semibold uppercase text-blue-600 tracking-wider bg-blue-50 py-1 px-3 rounded-full self-start">
            {category}
          </span>

          <span className="text-slate-500 gap-2 flex text-sm items-center">
            <Clock className="w-4 h-4" />
            { minutes } min
          </span>
        </div>
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-700 transition duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
