// lib/schemas.ts

import { NavLinks } from "@/lib/NavList";
import { ContactList } from "@/lib/ContactList";
import { FooterLink } from "@/lib/FooterLink";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

const desc = "Your path to cybersecurity";

// ---------------- WebSite Schema ----------------
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": siteUrl + "/#website",
  url: siteUrl,
  name: "Cyber Hunter",
  alternateName: "Cyber Hunter",
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: siteUrl + "/search?query={search_term_string}",
    "query-input": "required query=search_term_string",
  },
};

// ---------------- WebPage Schema ----------------
export const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": siteUrl,
  url: siteUrl,
  name: "Cyber Hunter",
  description: desc,
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    "@id": siteUrl,
    url: siteUrl,
    name: "Cyber Hunter",
    description: desc,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: siteUrl + "/main.webp",
  },
};

// ---------------- Breadcrumb Schema ----------------
export const generateBreadcrumbSchema = () => {

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    ...NavLinks.map((nav, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: nav.name,
      item: siteUrl + nav.link,
    })),
    ...ContactList.map((nav, index) => ({
      "@type": "ListItem",
      position: NavLinks.length + index + 2,
      name: nav.name,
      item: siteUrl + nav.link,
    })),
  ];

  FooterLink.forEach((nav, index) => {
    items.push({
      "@type": "ListItem",
      position: NavLinks.length + ContactList.length + index + 3,
      name: nav.name,
      item: siteUrl + nav.link,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};
