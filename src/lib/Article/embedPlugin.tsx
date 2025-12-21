// Custom plugin for handling embeds (YouTube, X/Twitter, Facebook, Instagram)
type RecordObj = Record<string, unknown>;

type EmbedBlock = { type: "embed"; embed: { url: string } } & RecordObj;
type VideoBlock = { type: "video"; video: { type: string; external?: { url: string } } } & RecordObj;
type TweetBlock = { type: "tweet"; tweet: { url: string } } & RecordObj;
type Block = EmbedBlock | VideoBlock | TweetBlock | RecordObj;

type Renderer = {
  addBlockRenderer: (blockType: string, fn: (block: Block) => Promise<string | null>) => void;
};

const isEmbedBlock = (b: Block): b is EmbedBlock => {
  const r = b as RecordObj;
  return r?.type === "embed" && typeof (r.embed as unknown) === "object" && typeof (r.embed as RecordObj)?.url === "string";
};

const isVideoBlock = (b: Block): b is VideoBlock => {
  const r = b as RecordObj;
  return r?.type === "video" && typeof (r.video as unknown) === "object";
};

const isTweetBlock = (b: Block): b is TweetBlock => {
  const r = b as RecordObj;
  return r?.type === "tweet" && typeof (r.embed as unknown) === "object" && typeof (r.embed as RecordObj)?.url === "string";
};

type EmbedPluginFunc = (renderer: Renderer) => void;

const embedPlugin: EmbedPluginFunc = (renderer: Renderer) => {
  renderer.addBlockRenderer("embed", async (block: Block) => {
    if (!isEmbedBlock(block)) return null;
    const url = block.embed.url;
    // Handle YouTube embeds
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n]+)/)?.[1];
      if (!videoId) return `<p>Invalid YouTube URL</p>`;
      return `
        <div className="relative w-full" style="padding-bottom: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/${videoId}"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      `;
    }
    // Handle Facebook embeds
    if (url.includes("facebook.com")) {
      return `
        <div className="relative w-full" style="padding-bottom: 56.25%;">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=500"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            width="500"
            height="600"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
          ></iframe>
        </div>
      `;
    }
    // Handle Instagram embeds
    if (url.includes("instagram.com")) {
      return `
        <div className="relative w-full" style="padding-bottom: 120%;">
          <iframe
            src="https://www.instagram.com/p/${url.split('/p/')[1]?.split('/')[0]}/embed"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            allowFullScreen
            loading="lazy"
            style="border:none;overflow:hidden"
          ></iframe>
        </div>
      `;
    }
    // Fallback for other embeds
    return `<iframe src="${url}" className="w-full h-96 rounded-2xl" loading="lazy"></iframe>`;
  });
  renderer.addBlockRenderer("video", async (block: Block) => {
    if (!isVideoBlock(block) || block.video.type !== "external") return null;
    const url = block.video.external?.url;
    if (typeof url !== "string") return null;
    // Handle YouTube videos
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n]+)/)?.[1];
      if (!videoId) return `<p>Invalid YouTube URL</p>`;
      return `
        <div className="relative w-full" style="padding-bottom: 56.25%;">
          <iframe
            src="https://www.youtube.com/embed/${videoId}"
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      `;
    }
    return null; // Skip non-YouTube videos or handle as needed
  });
  renderer.addBlockRenderer("tweet", async (block: Block) => {
    if (!isTweetBlock(block)) return null;
    const url = block.tweet.url;
    const tweetId = url.split("/").pop()?.split("?")[0];
    if (!tweetId) return `<p>Invalid Tweet URL</p>`;
    return `<div data-tweet-id="${tweetId}"></div>`; // Placeholder for client-side TweetEmbed
  });
};

export default embedPlugin;