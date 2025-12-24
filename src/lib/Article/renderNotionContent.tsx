import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
// import embedPlugin from "@/lib/Article/embedPlugin";
import { notionBlog } from "@/lib/notion";
import { BlockObjectResponse, PartialBlockObjectResponse } from "@notionhq/client";

export async function renderNotionContent(
  content: (BlockObjectResponse | PartialBlockObjectResponse)[] | undefined
): Promise<string> {
  try {
    if (!content || !Array.isArray(content) || content.length === 0) {
      console.warn("No content provided to renderNotionContent");
      return "<p>No content available.</p>";
    }

    const validBlocks = content.filter((block): block is BlockObjectResponse => 
      block !== null && 
      typeof block === 'object' && 
      'type' in block && 
      'id' in block
    );

    if (validBlocks.length === 0) {
      console.warn("No valid blocks found in content");
      return "<p>No valid content blocks.</p>";
    }

    console.log(`Rendering ${validBlocks.length} blocks`);

    const renderer = new NotionRenderer({
      client: notionBlog,
    });
    
    renderer.use(hljsPlugin({}));
    renderer.use({ ...bookmarkPlugin(undefined), extensions: [] });
    // embedPlugin removed temporarily
    
    const html = await renderer.render(...validBlocks);
    
    if (!html || typeof html !== 'string') {
      console.error("Renderer did not return valid HTML");
      return "<p>Error rendering content.</p>";
    }
    
    console.log("HTML rendered successfully, length:", html.length);
    
    const processedHtml = html.replace(
      /<div data-tweet-id="(\d+)"><\/div>/g,
      '<div class="tweet-embed"><div data-tweet-id="$1"></div></div>'
    );
    
    return processedHtml;
  } catch (error) {
    console.error("Error rendering Notion content:", error);
    return "<p>An error occurred while rendering content.</p>";
  }
}