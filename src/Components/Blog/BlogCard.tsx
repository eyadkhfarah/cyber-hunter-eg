import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import readingTime from "reading-time";

// Assuming you have a utility function like 'cn' for combining classes,
// if not, you'd define a helper or use template literals.

// --- Type Definitions ---

// Updated BlogType to be cleaner
type Blog = {
  title: string;
  description: string;
  category: string;
  link: string;
  imageUrl?: string; // Added optional image URL for modern cards
};

// Define the component props, including an optional loading state
type BlogCardProps = {
  blog?: Blog;
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

export default function BlogCard({ blog, isLoading }: BlogCardProps) {
  // const { text } = readingTime(blog);

  // If loading, render the dedicated loader component
  if (isLoading || !blog) {
    return <BlogCardLoader />;
  }

  // Use the blog data if not loading
  const { title, description, category, link, imageUrl } = blog;

  return (
    <Link
      href={`/blog/${link}`}
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
            1.5 min
          </span>
        </div>
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition duration-300">
          {title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
