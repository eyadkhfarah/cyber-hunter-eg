import type { MetadataRoute } from 'next'

const siteUrl = process.env.PUBLIC_DOMAIN_URL || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google crawlers
      { userAgent: 'Googlebot', allow: ['/', '/blog/*'] },
      { userAgent: 'Googlebot-News', allow: ['/', '/blog/*'] },
      { userAgent: 'Googlebot-Image', allow: ['/', '/blog/*'] },

      // Bing
      { userAgent: 'Bingbot', allow: ['/', '/blog/*'] },

      // Social crawlers
      { userAgent: 'Facebot', allow: ['/', '/blog/*'] },
      { userAgent: 'Twitterbot', allow: ['/', '/blog/*'] },
      { userAgent: 'LinkedInBot', allow: ['/', '/blog/*'] },

      // Default catch-all
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/blog/*?img=*'],
      },
    ],
    sitemap: [
      siteUrl + "/sitemap.xml",         // Main sitemap
      siteUrl + "/blog/sitemap.xml" // Articles sitemap
    ],
  };
}