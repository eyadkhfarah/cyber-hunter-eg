import { ChevronRight, FileText } from "lucide-react";
import Link from "next/link";
import { fetchPosts } from "@/lib/Data/notionBlogData";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface RelatedArticlesProps {
  currentPostId: string;
  category: string;
  tags: string[];
}

function getPropertyValue(
  properties: PageObjectResponse["properties"],
  propertyName: string,
  type: "title" | "rich_text" | "select"
): string {
  const property = properties[propertyName];

  if (!property) return "";

  if (type === "title" && property.type === "title") {
    return property.title[0]?.plain_text || "";
  }

  if (type === "rich_text" && property.type === "rich_text") {
    return property.rich_text[0]?.plain_text || "";
  }

  if (type === "select" && property.type === "select") {
    return property.select?.name || "";
  }

  return "";
}

function getMultiSelectValues(
  properties: PageObjectResponse["properties"],
  propertyName: string
): string[] {
  const property = properties[propertyName];

  if (!property || property.type !== "multi_select") {
    return [];
  }

  return property.multi_select.map((item) => item.name);
}

export const RelatedArticles = async ({
  currentPostId,
  category,
  tags,
}: RelatedArticlesProps) => {
  let relatedPosts: PageObjectResponse[] = [];

  try {
    // Fetch all live posts using existing function
    const allPosts = await fetchPosts();

    // Filter and sort for related posts
    relatedPosts = allPosts
      .filter((post) => {
        // Exclude current post
        if (post.id === currentPostId) return false;

        // Get post's category and tags
        const postCategory = getPropertyValue(
          post.properties,
          "Category",
          "select"
        );
        const postTags = getMultiSelectValues(post.properties, "Tags");

        // Include if category matches
        if (postCategory === category) return true;

        // Include if any tag matches
        if (tags.length > 0 && postTags.some((tag) => tags.includes(tag))) {
          return true;
        }

        return false;
      })
      .slice(0, 4); // Limit to 4 posts
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return null;
  }

  if (relatedPosts.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="bg-slate-50/50 p-6 border-b border-slate-100 flex items-center gap-2">
        <FileText className="w-4 h-4 text-blue-500" />
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
          Related_Intelligence
        </h3>
      </div>
      <ul className="divide-y divide-slate-50">
        {relatedPosts.map((post) => {
          const title =
            getPropertyValue(post.properties, "Name", "title") || "Untitled";
          const slug =
            getPropertyValue(post.properties, "Slug", "rich_text") || post.id;
          const postCategory =
            getPropertyValue(post.properties, "Category", "select") ||
            "Intelligence";

          return (
            <li
              key={post.id}
              className="group hover:bg-slate-50 transition-colors duration-200"
            >
              <Link href={`/blog/${slug}`} className="block p-5">
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mb-1 block">
                  {postCategory}
                </span>
                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {title}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
