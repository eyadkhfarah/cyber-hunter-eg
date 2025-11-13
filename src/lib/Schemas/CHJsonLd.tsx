import { SocialLink } from "../SocialLinks";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

const social = SocialLink

export const CyberhunterOrganization = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  "@id": siteUrl,
  "name": "Cyber Hunter",
  "alternateName": "Cyber Hunter",
  "url": siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": siteUrl + "/logo.png",
    "caption": "Cyber Hunter"
  },
  "sameAs": [
    social.facebook,
    social.instagram,
    social.linkedin,
    social.twitter,
    social.tiktok,
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cairo",
    "addressCountry": "EG"
  },
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Cyber Hunter"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "الدعم الفني",
    "email": "info@cyperhuntergp.com",
  }
};
