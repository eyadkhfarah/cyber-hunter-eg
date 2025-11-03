const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

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
    "https://www.facebook.com/Cyber.Hunter.Group",
    "https://www.instagram.com/cyberhuntergp",
    "https://www.linkedin.com/company/cyper-hunter-group",
    "https://www.twitter.com/CyberHunter_Gp",
    "https://www.tiktok.com/@cyber.hunter.gp"
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
