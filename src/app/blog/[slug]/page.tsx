import EmailSubscription from "@/Components/Blog/EmailSubscription";
import { SocialShare } from "@/Components/Blog/SocialShare";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// ----------------------------------------------------------------------
// 1. Mock Data Definitions
// ----------------------------------------------------------------------

const MOCK_ARTICLE = {
  category: "Cybersecurity",
  title: "The Zero Trust Framework: Moving Beyond Perimeter Defense in 2024",
  url: "the-zero-trust-framework-moving-beyond-perimeter-defense-in-2024",
  author: "Dr. Evelyn Reed",
  date: "October 26, 2024",
  readingTime: "8 min read",
  imageUrl:
    "https://placehold.co/900x500/0E7490/FFFFFF?text=Zero+Trust+Architecture",
  content: {
    // Structured content for easy replacement with API data later
    intro:
      "The landscape of digital threats is evolving rapidly, rendering traditional perimeter-based security models obsolete. The Zero Trust security model, defined by the principle 'never trust, always verify,' has become the strategic imperative for organizations looking to secure modern, distributed work environments.",
    section1: {
      heading: "What Exactly is Zero Trust?",
      body: "Zero Trust isn't a single technology; it's a security philosophy centered on the belief that no user or device—inside or outside the network—should be trusted by default. Every access request must be authenticated, authorized, and continuously validated. This model is critical given the rise of remote work, cloud adoption, and BYOD (Bring Your Own Device) policies. Key components include identity governance, micro-segmentation, and multi-factor authentication (MFA).",
    },
    section2: {
      heading: "Implementation Challenges and Best Practices",
      body: "Transitioning to Zero Trust is a journey, not a switch. Common hurdles include legacy infrastructure integration and the complexity of continuous monitoring. Best practices involve starting with the most sensitive data, deploying MFA everywhere, and segmenting your network into smaller zones. [Image of the Zero Trust security model flow] By adopting a phased approach, organizations can incrementally enhance their posture without disrupting critical business operations. The greatest barrier is often cultural—shifting the mindset from 'trusted internal zone' to 'untrusted network'.",
    },
    conclusion:
      "As cyber threats become more sophisticated and internal perimeters dissolve, Zero Trust provides the scalable, robust foundation required for modern enterprise security. Embracing this framework isn't just about defense; it's about enabling secure, flexible business growth in a hostile digital world.",
  },
};

const RELATED_ARTICLES = [
  {
    title: "Top 5 Cloud Security Misconfigurations",
    link: "cloud-misconfigurations",
  },
  { title: "The Rise of AI in Phishing Attacks", link: "ai-phishing-attacks" },
  {
    title: "How to Build a Secure Home Office Network",
    link: "secure-home-office",
  },
  {
    title: "Blockchain's Role in Data Integrity",
    link: "blockchain-data-integrity",
  },
];

// ----------------------------------------------------------------------
// 2. Component Helpers (Sidebar Sections)
// ----------------------------------------------------------------------

/**
 * Related Articles List Component
 */
const RelatedArticles = () => (
  <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-inner">
    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
      Related Reading
    </h3>
    <ul className="space-y-3">
      {RELATED_ARTICLES.map((article, index) => (
        <li
          key={index}
          className="border-l-4 border-blue-500 pl-3 transition-colors duration-200 hover:border-blue-700"
        >
          {/* FIX: Replaced Link with standard <a> tag */}
          <Link
            href={`/blog/${article.link}`}
            className="text-sm text-gray-600 hover:text-blue-700 font-medium"
          >
            {article.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// ----------------------------------------------------------------------
// 3. Main Article Component
// ----------------------------------------------------------------------

export default function ArticlePage() {
  const { title, category, author, date, readingTime, imageUrl, content, url } =
    MOCK_ARTICLE;

  return (
    <main className="container mx-auto md:px-32 px-7 py-16">
      {/* Article Grid Layout: 3/4 content, 1/4 sidebar (switches to stack on small screens) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* === ARTICLE CONTENT (3/4 width on desktop) === */}
        <article className="lg:col-span-3">
          {/* Header Metadata */}
          <header className="mb-8 space-y-4">
            <span className="text-sm font-bold uppercase text-blue-600 tracking-wider bg-blue-50 py-1 px-3 rounded-full inline-block">
              {category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>
                By:{" "}
                <strong className="text-dark font-bold">{author}</strong>
              </span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readingTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imageUrl}
              alt={title}
              unoptimized
              width={1000}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <p className="lead font-serif text-xl italic text-gray-800 border-l-4 border-blue-500 pl-4">
              {content.intro}
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold pt-4 text-gray-900">
              {content.section1.heading}
            </h2>
            <p>{content.section1.body}</p>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold pt-4 text-gray-900">
              {content.section2.heading}
            </h2>
            <p>{content.section2.body}</p>

            {/* Conclusion */}
            <p className="">{content.conclusion}</p>
          </div>
        </article>

        {/* === SIDEBAR (1/4 width on desktop, stacked on mobile) === */}
        <aside className="lg:col-span-1">
          <div className="sticky top-36 space-y-8">
            {/* 1. Email Subscription */}
            <EmailSubscription />

            {/* 2. Related Articles */}
            <RelatedArticles />

            {/* 3. Social Share */}
            <SocialShare title={title} url={url} />
          </div>
        </aside>
      </div>
    </main>
  );
}
