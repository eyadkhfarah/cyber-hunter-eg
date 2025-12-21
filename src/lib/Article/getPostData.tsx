import type { NotionBlogPage } from "@/types/notionBlog";
import { fetchPostBySlug, fetchPosts } from "../Data/notionBlogData";
import type {
  PageObjectResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { notionBlog } from "../notion";

type GetPostDataResult = {
  post: NotionBlogPage | null;
  articles: PageObjectResponse[];
  content: (BlockObjectResponse | PartialBlockObjectResponse)[]; // Allow both types
  currentIndex: number;
};

export async function getPostData(slug: string): Promise<GetPostDataResult> {
  try {
    const post = (await fetchPostBySlug(
      slug
    )) as unknown as NotionBlogPage | null;
    if (!post)
      return { post: null, articles: [], content: [], currentIndex: -1 };

    const articles = await fetchPosts();

    // Fix: Fetch actual content blocks, not posts
    const blocks = await notionBlog.blocks.children.list({
      block_id: post.id,
    });

    // Fix: Use consistent sorting (descending like the queries)
    const sortedPosts = articles.slice().sort((a, b) => {
      return (
        new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
      );
    });

    // Simplified slug extraction
    const currentIndex = sortedPosts.findIndex((p) => {
      const slugProp = p.properties.Slug as {
        rich_text?: Array<{ plain_text: string }>;
      };
      const postSlug = slugProp?.rich_text?.[0]?.plain_text;
      return postSlug === slug;
    });

    return {
      post,
      articles: sortedPosts,
      content: blocks.results,
      currentIndex,
    };
  } catch (error) {
    console.error("getPostData error:", error);
    return { post: null, articles: [], content: [], currentIndex: -1 };
  }
}
