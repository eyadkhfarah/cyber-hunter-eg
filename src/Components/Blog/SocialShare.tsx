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
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export const SocialShare = ({ title, url }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      name: "X",
      icon: RiTwitterXLine,
      Component: TwitterShareButton,
      hoverClass: "hover:bg-black hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: RiLinkedinFill,
      Component: LinkedinShareButton,
      hoverClass: "hover:bg-[#0077b5] hover:text-white",
    },
    {
      name: "Facebook",
      icon: RiFacebookFill,
      Component: FacebookShareButton,
      hoverClass: "hover:bg-[#1877f2] hover:text-white",
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link, i) => (
        <link.Component
          key={i}
          url={url}
          title={title}
          className={cn(
            "flex items-center justify-center w-11 h-11 text-xl bg-slate-50 text-slate-600 rounded-xl transition-all duration-300 shadow-sm border border-slate-100",
            link.hoverClass
          )}
        >
          <link.icon />
        </link.Component>
      ))}

      <button
        onClick={handleCopyLink}
        className={cn(
          "relative flex items-center justify-center w-11 h-11 text-xl transition-all duration-300 rounded-xl border shadow-sm",
          copied
            ? "bg-emerald-500 border-emerald-500 text-white"
            : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600"
        )}
        title="Copy to Clipboard"
      >
        {copied ? <RiCheckLine size={20} /> : <RiLinksLine size={20} />}

        {/* Animated Tooltip */}
        {copied && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded flex items-center gap-1 animate-in fade-in slide-in-from-bottom-2">
            LINK_COPIED
          </span>
        )}
      </button>
    </div>
  );
};
