import { NotionBlogPage } from "@/types/notionBlog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPostBySlug } from "../Data/notionBlogData";

export type Params = Promise<{ slug: string }>;

export async function generateArticleMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await fetchPostBySlug(slug)) as unknown as NotionBlogPage;
  if (!post) return notFound();

  return {
    title: post.properties.Name.title[0].plain_text,
    description: post.properties.Subtitle.rich_text[0].plain_text,
    other: {
      keywords: post.properties.Tags.multi_select.join(", "),
    },
    alternates: {
      canonical: `/post/${post.properties.Slug.rich_text[0].plain_text}`,
    },
    openGraph: {
      title: post.properties.Name.title[0].plain_text,
      description: post.properties.Subtitle.rich_text[0].plain_text,
      type: "article",
      url: `/post/${post.properties.Slug.rich_text[0].plain_text}`,
      siteName: "/",
      images: [
        {
          url: post.properties.Thumbnail.files[0].name,
          width: 1200,
          height: 630,
          alt: post.properties.Name.title[0].plain_text,
        },
      ],
    },
  };
}