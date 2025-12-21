import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notionBlog } from "../notion";

const BLOG_DATABASE_ID = process.env.NOTION_BLOG_DATABASE_ID;

interface DataSource {
  id: string;
  name: string;
}

interface DatabaseResponseWithDataSources {
  object: "database";
  id: string;
  data_sources: DataSource[];
  [key: string]: unknown;
}

interface QueryDataSourceResponse {
  results: PageObjectResponse[];
  next_cursor: string | null;
  has_more: boolean;
}

let cachedDataSourceId: string | null = null;

/**
 * Retry helper for network requests
 */
async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      console.warn(`Attempt ${attempt + 1} failed:`, error);
      
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs * (attempt + 1)));
      }
    }
  }
  
  throw lastError;
}

async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) {
    return cachedDataSourceId;
  }

  if (!BLOG_DATABASE_ID) {
    throw new Error("BLOG_DATABASE_ID is not defined");
  }

  const response = await notionBlog.request<DatabaseResponseWithDataSources>({
    method: "get",
    path: `databases/${BLOG_DATABASE_ID}`,
  });

  if (!response.data_sources || response.data_sources.length === 0) {
    throw new Error("No data sources found for database");
  }

  cachedDataSourceId = response.data_sources[0].id;
  return cachedDataSourceId;
}

export async function fetchPosts(): Promise<PageObjectResponse[]> {
  if (!BLOG_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_BLOG_ID is not defined in environment variables");
  }

  try {
    const dataSourceId = await getDataSourceId();
    
    const response = await retryOperation(async () => {
      return await notionBlog.dataSources.query({
        data_source_id: dataSourceId,
        filter: {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      });
    });

    return response.results as PageObjectResponse[];
  } catch (error) {
    console.error("fetchPosts error:", error);
    return []; // Return empty array instead of throwing
  }
}

export async function fetchPostBySlug(slug: string): Promise<PageObjectResponse | undefined> {
  if (!BLOG_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_BLOG_ID is not defined");
  }

  try {
    const dataSourceId = await getDataSourceId();

    const response = await retryOperation(async () => {
      return await notionBlog.dataSources.query({
        data_source_id: dataSourceId,
        filter: {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      });
    });

    return response.results[0] as PageObjectResponse | undefined;
  } catch (error) {
    console.error(`fetchPostBySlug error for slug "${slug}":`, error);
    return undefined;
  }
}

export async function getPostData(slug: string) {
  try {
    if (!BLOG_DATABASE_ID) {
      throw new Error("NOTION_DATABASE_BLOG_ID is not defined");
    }

    const dataSourceId = await getDataSourceId();

    // Query for the specific post
    const response = await notionBlog.request<QueryDataSourceResponse>({
      method: "post",
      path: `data_sources/${dataSourceId}/query`,
      body: {
        filter: {
          property: "Slug",
          rich_text: {
            equals: slug,
          },
        },
      },
    });

    const post = response.results[0] as PageObjectResponse;

    if (!post) {
      console.error("Post not found for slug:", slug);
      return { post: null, content: [], currentIndex: -1 };
    }

    // Fetch the page blocks (content)
    const blocks = await notionBlog.blocks.children.list({
      block_id: post.id,
    });

    console.log("Fetched blocks:", blocks.results.length);

    // Get all posts for navigation
    const allPostsResponse = await notionBlog.request<QueryDataSourceResponse>({
      method: "post",
      path: `data_sources/${dataSourceId}/query`,
      body: {
        filter: {
          property: "Status",
          status: {
            equals: "Live",
          },
        },
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      },
    });

    const currentIndex = allPostsResponse.results.findIndex(
      (p) => p.id === post.id
    );

    return {
      post,
      content: blocks.results,
      currentIndex,
    };
  } catch (error) {
    console.error("Error in getPostData:", error);
    return { post: null, content: [], currentIndex: -1 };
  }
}

export async function fetchAllPosts(): Promise<PageObjectResponse[]> {
  if (!BLOG_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_BLOG_ID is not defined");
  }

  try {
    const dataSourceId = await getDataSourceId();
    
    const response = await retryOperation(async () => {
      return await notionBlog.dataSources.query({
        data_source_id: dataSourceId,
        sorts: [
          {
            timestamp: "created_time",
            direction: "descending",
          },
        ],
      });
    });

    return response.results as PageObjectResponse[];
  } catch (error) {
    console.error("fetchAllPosts error:", error);
    return [];
  }
}

export function clearDataSourceCache(): void {
  cachedDataSourceId = null;
}