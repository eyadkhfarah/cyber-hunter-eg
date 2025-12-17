import "server-only";
import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Revalidate data every 1 second in Next.js
export const revalidate = 1;

const NOTION_CONTACT_API_KEY = process.env.NOTION_CONTACT_API_KEY;
const NOTION_PARTNER_API_KEY = process.env.NOTION_PARTNER_API_KEY;
const NOTION_ACADEMY_API_KEY = process.env.NOTION_ACADEMY_API_KEY;

const NOTION_API_KEY_BLOG = process.env.NOTION_BLOG_API_KEY;
const NOTION_BLOG_DATABASE_ID = process.env.NOTION_DATABASE_BLOG_ID;

export const notionContactForm = new Client({
  auth: NOTION_CONTACT_API_KEY,
  notionVersion: "2025-09-03", // Set API version
});

export const notionPartnerForm = new Client({
  auth: NOTION_PARTNER_API_KEY,
  notionVersion: "2025-09-03", // Set API version
});

export const notionAcademyForm = new Client({
  auth: NOTION_ACADEMY_API_KEY,
  notionVersion: "2025-09-03", // Set API version
});

export const notionBlog = new Client({
  auth: NOTION_API_KEY_BLOG,
  notionVersion: "2025-09-03", // Set API version
});

// Cache data source ID to avoid repeated lookups
let cachedDataSourceId: string | null = null;

async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) {
    return cachedDataSourceId;
  }

  if (!NOTION_BLOG_DATABASE_ID) {
    throw new Error("NOTION_BLOG_DATABASE_ID is not defined");
  }

  // Step 1: Fetch database to get data sources
  const database = await notionBlog.databases.retrieve({
    database_id: NOTION_BLOG_DATABASE_ID,
  });

  // For existing single-source databases, there will be one data source
  if (!database.object || database.object.length === 0) {
    throw new Error("No data sources found for database");
  }

  // Use the first data source (or implement logic to select the right one)
  cachedDataSourceId = database.object[0];
  return cachedDataSourceId;
}

// Blog

export async function fetchPosts() {
  const dataSourceId = await getDataSourceId();
  
  // Step 3: Use dataSources.query instead of databases.query
  const response = await notionBlog.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Status",
      status: { equals: "Live" },
    },
  });
  return response;
}

export async function fetchPostSlug(slug: string) {
  const dataSourceId = await getDataSourceId();
  
  // Step 3: Use dataSources.query instead of databases.query
  const response = await notionBlog.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return response.results[0] as PageObjectResponse | undefined;
}