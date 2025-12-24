import { CyberhunterOrganization } from "@/lib/Schemas/CHJsonLd";
import { BlogPost, NotionFile } from "@/types/notionBlog";

const getNotionUrl = (files: NotionFile[]): string => {
  const file = files?.[0];
  if (!file) return "";

  // Logic to handle both external links and Notion-hosted files
  if (file.type === "external" && file.external) {
    return file.external.url;
  }
  
  if (file.type === "file" && file.file) {
    return file.file.url;
  }

  return "";
};

export function getJsonLdArticle(post: BlogPost, siteUrl: string, DateJson: string) {
  const imageUrl = getNotionUrl(post.properties.Thumbnail.files);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.properties.Name.title[0].plain_text,
    id: siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
    url: siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
    datePublished: DateJson,
    thumbnailUrl: imageUrl,
    articleSection: post.properties.Category.select.name,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      contentUrl: imageUrl,
      width: 1920,
      height: 960,
      caption: post.properties.Name.title[0].plain_text,
    },
    description: post.properties.Subtitle.rich_text[0].plain_text,
    keywords: post.properties.Tags.multi_select.map((tag: {name: string[]}) => tag.name),
    dateModified: post.last_edited_time,
    inLanguage: "ar",
    publisher: CyberhunterOrganization,
    author: {
      "@type": "Person",
      name: post.properties.Author.rich_text[0].plain_text,
      url: siteUrl + "/author/" + post.properties.Author.rich_text[0].plain_text,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
      name: post.properties.Name.title[0].plain_text,
      description: post.properties.Subtitle.rich_text[0].plain_text,
      inLanguage: "ar",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: post.properties.Name.title[0].plain_text,
          },
        ],
      },
    },
  };
}

export function getJsonLdImage(post: BlogPost, siteUrl: string) {
  const imageUrl = getNotionUrl(post.properties.Thumbnail.files);

  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: imageUrl,
    creditText: "Cyber Hunter",
    license: siteUrl + "/terms",
    acquireLicensePage: siteUrl + "/terms",
    creator: {
      "@type": "Person",
      name: "Cyber Hunter",
    },
    copyrightNotice: "Cyber Hunter",
  };
}