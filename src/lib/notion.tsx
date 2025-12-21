import "server-only";
import { Client } from "@notionhq/client";

// Revalidate data every 1 second in Next.js
export const revalidate = 1;

const NOTION_CONTACT_API_KEY = process.env.NOTION_CONTACT_API_KEY;
const NOTION_PARTNER_API_KEY = process.env.NOTION_PARTNER_API_KEY;
const NOTION_ACADEMY_API_KEY = process.env.NOTION_ACADEMY_API_KEY;

const NOTION_API_KEY_BLOG = process.env.NOTION_BLOG_API_KEY;

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