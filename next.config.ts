import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "i.postimg.cc" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "avatar.iran.liara.run" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
