export type NotionBlogProps = {
  post: {
    id: string;
    properties: {
      Name: {
        title: Array<{
          plain_text: string;
        }>;
      };
      Slug: {
        rich_text: Array<{
          plain_text: string;
        }>;
      };
      Subtitle: {
        rich_text: Array<{
          plain_text: string;
        }>;
      };
      Category: {
        select: {
          name: string;
        };
      };
      Publication: { date: { start: string } };
      Thumbnail: {
        files: Array<{
          name: string;
        }>;
      };
    };
  };
};

export type NotionBlogPage = {
  id: string;
  last_edited_time: string;
  properties: {
    Name: {
      title: Array<{
        plain_text: string;
      }>;
    };
    Slug: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Subtitle: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Category: {
      select: {
        name: string;
      };
    };
    SubCategory: {
      select: {
        name: string;
      };
    };
    Publication: { date: { start: string } };
    Thumbnail: {
      external: {
        url: string;
      }
      files: Array<{
        external: {
          url: string;
        };
        type: string;
        file: {
          url: string;
        };
        name: string;
      }>;
    };
    Author: {
      rich_text: Array<{
        plain_text: string;
      }>;
      select: {
        name: string;
      };
    };
    Tags: {
      multi_select: Array<{
        name: Array<string>;
      }>;
    };
  };
};

// Define the specific shape of a Notion file object
export interface NotionFile {
  external: { url: string };
  file: { url: string };
  type: string;
  name: string;
}

export interface BlogPost {
  last_edited_time: string;
  id: string;
  properties: {
    Name: {
      title: {
        plain_text: string;
      }[];
    };
    Subtitle: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Tags: {
      multi_select: Array<{
        name: Array<string>;
      }>;
    };
    Thumbnail: {
      files: NotionFile[]; // <--- Use the new type here
    };
    Category: {
      select: {
        name: string;
      };
    };
    Publication: {
      date: {
        start: string;
      };
    };
    Author: {
      rich_text: Array<{
        plain_text: string;
      }>;
    };
    Slug: {
      rich_text: {
        plain_text: string;
      }[];
    };
  };
}