// import { Link } from "lucide-react";
"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  RiFacebookFill,
  RiTwitterXLine,
  RiLinksLine,
  RiCheckLine,
  RiLinkedinFill,
} from "react-icons/ri";
import { useState } from "react";
// import Link from "next/link";

interface ShareButtonsProps {
  title: string;
  url: string;
}
/**
 * Social Media Share Buttons Component
 */
export const SocialShare = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      icon: RiFacebookFill,
      share: FacebookShareButton,
      url: "#facebook",
    },
    {
      name: "Twitter",
      icon: RiTwitterXLine,
      share: TwitterShareButton,
      url: "#twitter",
    },
    {
      name: "LinkedIn",
      icon: RiLinkedinFill,
      share: LinkedinShareButton,
      url: "#linkedin",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-md">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Share This Insight
      </h3>
      <div className="flex gap-4">
        {socialLinks.map((link, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center justify-center w-12 h-12 text-2xl bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition duration-200 shadow-sm"
          >
            <link.share
              url={url}
              title={title}
              className=""
              aria-label={`Share on ${link.name}`}
            >
              <link.icon />
            </link.share>
          </div>
        ))}
        <button
          onClick={handleCopyLink}
          className={`flex items-center justify-center w-12 h-12 text-2xl bg-gray-100 rounded-full hover:bg-blue-500 cursor-pointer hover:text-white transition duration-200 shadow-sm ${
            copied ? "bg-green-500 text-white" : ""
          }`}
          title={copied ? "Copied!" : "Copy Link"}
        >
          {copied ? <RiCheckLine size={24} /> : <RiLinksLine size={24} />}
        </button>
      </div>
    </div>
  );
};
