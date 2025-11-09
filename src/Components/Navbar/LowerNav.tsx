import { NavLinks } from "@/lib/NavList";
import Image from "next/image";
import Link from "next/link";

export default function LowerNav() {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-gray-800 text-white p-6">
      <div>
        <Image
          src={"/Logo White.svg"}
          alt="Cyber Hunter Logo"
          width={60}
          height={60}
        />
      </div>
      <div className="flex items-center space-x-4">
        {NavLinks.map((nav, i) => (
          <Link key={i} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>
      <Link href={"/contact"} className="">
        Get Started
      </Link>
    </div>
  );
}
