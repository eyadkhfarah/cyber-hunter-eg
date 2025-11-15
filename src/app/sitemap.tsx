import { NavLinks } from "@/lib/NavList";
// import { categories } from "@/lib/categories";

import { MetadataRoute } from "next";
import { FooterLink } from "@/lib/FooterLink";
// import { ContactList } from "@/lib/ContactList";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

  const links: MetadataRoute.Sitemap = [];

  NavLinks.forEach((nav: { link: string; }) => {
    links.push({
      url: siteUrl + nav.link,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.6,
    });
  });

  // ContactList.forEach((contact) => {
  //   links.push({
  //     url: siteUrl + contact.link,
  //     lastModified: new Date(),
  //     changeFrequency: "hourly",
  //     priority: 0.6,
  //   });
  // });

//   categories.forEach((category) => {
//     links.push({
//       url: siteUrl + "/articles/" + category.link,
//       lastModified: new Date(),
//       changeFrequency: "hourly",
//       priority: 0.6,
//     });
//   });

//   categories.forEach((category) => {
//     category.SecondaryCategory.forEach((sub) => {
//       links.push({
//         url: siteUrl + "/articles/" + category.link + "/" + sub.slug,
//         lastModified: new Date(),
//         changeFrequency: "hourly",
//         priority: 0.6,
//       });
//     });
//   });

  FooterLink.forEach((link) => {
    if (link.link) {
      links.push({
        url: siteUrl + link.link,
        lastModified: new Date(),
        changeFrequency: "hourly",
        priority: 0.6,
      });
    }
  });

  return [
    ...links,
    {
      url: `${siteUrl}/articles/sitemap.xml`,
      lastModified: new Date(),
    },
  ];
}