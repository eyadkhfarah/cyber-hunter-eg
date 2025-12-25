// import Link from "next/link";

export interface Tag {
  name: string;
}

export default function ArticleTags({ tags }: { tags: Tag[]; variant?: "sidebar" | "footer" }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {tags.map((tag, i) => (
        // <Link key={i} href={"/search?query=" + tag.name} className={"btnPrimary"}>
        //   {tag.name}
        // </Link>
        <span key={i} className={"btnPrimary"}>
          {tag.name}
        </span>
      ))}
    </div>
  );
}