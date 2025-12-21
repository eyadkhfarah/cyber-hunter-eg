import { CyberhunterOrganization } from "@/lib/Schemas/CHJsonLd";
import { BlogPost } from "@/types/notionBlog";

export function getJsonLdArticle(post: BlogPost, siteUrl: string, DateJson: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.properties.Name.title[0].plain_text,
    id: siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
    url: siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
    datePublished: DateJson,
    thumbnailUrl: post.properties.Thumbnail.files[0].name,
    articleSection: post.properties.Category.select.name,
    image: {
      "@type": "ImageObject",
      url: post.properties.Thumbnail.files[0].name,
      contentUrl: post.properties.Thumbnail.files[0].name,
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
      name: post.properties.Author.select.name,
      url: siteUrl + "/author/" + post.properties.Author.select.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
      name: post.properties.Name.title[0].plain_text,
      description: post.properties.Subtitle.rich_text[0].plain_text,
      inLanguage: "ar",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: post.properties.Thumbnail.files[0].name,
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
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: post.properties.Thumbnail.files[0].name,
    creditText: "وعى - مصر",
    license: siteUrl + "/terms",
    acquireLicensePage: siteUrl + "/terms",
    creator: {
      "@type": "Person",
      name: "وعى - مصر",
    },
    copyrightNotice: "وعى - مصر",
  };
}