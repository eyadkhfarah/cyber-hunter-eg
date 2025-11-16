import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../Components/Navbar";
import Script from "next/script";
import { CyberhunterOrganization } from "@/lib/Schemas/CHJsonLd";
import {
  generateBreadcrumbSchema,
  webpageSchema,
  websiteSchema,
} from "@/lib/Schemas";
import Footer from "@/Components/Footer";

const title = "%s | Cyber Hunter";
const desc = "Your path to cybersecurity";

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";

const keywords = [
  "Cyber Hunter",
  "cybersecurity",
  "information security",
  "infosec",
  "ethical hacking",
  "penetration testing",
  "network security",
  "security awareness",
  "malware analysis",
  "threat intelligence",
  "vulnerability assessment",
  "digital forensics",
  "security operations",
  "incident response",
  "cloud security",
  "application security",
  "security training",
  "red team",
  "blue team",
  "cyber defense",
  "risk management",
  "compliance",
  "CISSP",
  "CEH",
  "OSCP",
  "SOC",
  "cybersecurity news",
];

export const viewport: Viewport = {
  themeColor: "#112754",
};

export const metadata: Metadata = {
  title: {
    default: "Cyber Hunter",
    template: title,
  },
  description: desc,
  other: {
    keywords: keywords.join(", "),
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/icon0.svg", type: "image/svg+xml" },// "any" for .ico format
    ],
    apple: "/favicon/apple-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: {
      default: "Cyber Hunter",
      template: title,
    },
    description: desc,
    images: {
      url: "/main.webp",
      width: 800,
      height: 600,
      alt: "Cyber Hunter cover",
      type: "image/png",
    },
    locale: "ar_EG",
    type: "website",
  },

  // verification: {
  //   google: "e9KKlwWBaGAC9j-OtGtGMXX6Es77KJAPO4IxuX1WbRA",
  // },

  twitter: {
    card: "summary_large_image",
    site: "@CyberHunter_Gp",
    title: title,
    description: desc,
    images: ["/main.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(CyberhunterOrganization),
          }}
        />

        {/* WebSite Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadcrumbSchema()),
          }}
        />

        {/* WebPage Schema */}
        <Script
          id="webpage-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />

        {/* Google Consent Mode */}
        <Script
          id="google-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
      </head>
      <body className={""}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
