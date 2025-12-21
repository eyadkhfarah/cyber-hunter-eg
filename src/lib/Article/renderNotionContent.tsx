import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import embedPlugin from "@/lib/Article/embedPlugin";
import { notionBlog } from "@/lib/notion";

export async function renderNotionContent(content: unknown[]) {
  try {
    // Check if content exists
    if (!content || !Array.isArray(content) || content.length === 0) {
      console.error("No content provided to renderNotionContent");
      return "";
    }

    const renderer = new NotionRenderer({
      client: notionBlog,
    });
    
    renderer.use(hljsPlugin({}));
    renderer.use({ ...bookmarkPlugin(undefined), extensions: [] });
    renderer.use(embedPlugin as unknown as Parameters<typeof renderer.use>[0]);
    
    let html = await renderer.render(...(content as unknown as Parameters<typeof renderer.render>));
    
    // Check if html is valid
    if (!html || typeof html !== 'string') {
      console.error("Renderer did not return valid HTML");
      return "";
    }
    
    console.log("HTML rendered successfully, length:", html.length);
    
    // Replace tweet placeholders with TweetEmbed component
    // Use a simple regex replace that won't fail
    html = html.replace(
      /<div data-tweet-id="(\d+)"><\/div>/g,
      '<div class="tweet-embed"><div data-tweet-id="$1"></div></div>'
    );
    
    return html;
  } catch (error) {
    console.error("Error rendering Notion content:", error);
    return "";
  }
}