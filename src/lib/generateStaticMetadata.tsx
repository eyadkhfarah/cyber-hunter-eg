import { Metadata } from "next";

export interface StaticMetaOptions {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

/**
 * Generates a static metadata object for Next.js pages.
 * @param options - StaticMetaOptions
 */
export function generateStaticMetadata({
  title,
  description,
  url,
  imageUrl = "/main.webp",
  imageAlt = "Cyber Hunter cover",
  imageWidth = 800,
  imageHeight = 600,
}: StaticMetaOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: {
        url: imageUrl,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt,
        type: "image/png",
      },
    },
    twitter: {
      site: "@CyberHunter_Gp",
      card: "summary_large_image",
    },
  };
}