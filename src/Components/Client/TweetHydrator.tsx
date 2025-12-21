"use client";
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { createRoot, Root } from "react-dom/client";

const TweetEmbed = dynamic(
  () => import("react-tweet-embed").then((mod) => mod.default),
  {
    ssr: false,
  }
);

interface TweetHydratorProps {
  html: string;
  className?: string;
}

const TweetHydrator: React.FC<TweetHydratorProps> = ({ html, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootsRef = useRef<Map<string, Root>>(new Map());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find all tweet placeholder divs
    const tweetDivs = container.querySelectorAll("div[data-tweet-id]");
    
    tweetDivs.forEach((div) => {
      const tweetId = div.getAttribute("data-tweet-id");
      if (tweetId && !div.hasChildNodes()) {
        // Create a mount point for React
        const mount = document.createElement("div");
        div.appendChild(mount);

        // Create root and render TweetEmbed
        const root = createRoot(mount);
        root.render(<TweetEmbed tweetId={tweetId} />);
        
        // Store root for cleanup
        rootsRef.current.set(tweetId, root);
      }
    });

    // Cleanup function
    return () => {
      rootsRef.current.forEach((root) => {
        root.unmount();
      });
      rootsRef.current.clear();
    };
  }, [html]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default TweetHydrator;