import { SocialLink } from "@/lib/SocialLinks";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTiktokFill,
  RiTwitterXLine,
} from "react-icons/ri";

export default function SocialLinks() {
  const social = SocialLink;

  return (
    <div className="flex items-center gap-2">
      {[
        {
          href: social.facebook,
          icon: RiFacebookFill,

          text: "Facebook",
        },
        {
          href: social.instagram,
          icon: RiInstagramLine,
          text: "Instagram",
        },
        {
          href: social.twitter,
          icon: RiTwitterXLine,
          text: "X",
        },
        {
          href: social.linkedin,
          icon: RiLinkedinFill,
          text: "LinkedIn",
        },
        {
          href: social.tiktok,
          icon: RiTiktokFill,
          text: "Tiktok",
        },
      ].map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="font-black group pb-2 flex justify-between items-center transition-all ease-in-out duration-300"
        >
          <span className="p-2 text-2xl text-white rounded-full bg-blue-950 group-hover:bg-blue-500 transition-colors duration-500">
            <item.icon />
          </span>
        </Link>
      ))}
    </div>
  );
}
