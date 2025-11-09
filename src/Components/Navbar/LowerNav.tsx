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
      <div className="flex items-center space-x-9">
        {NavLinks.map((nav, i) => (
          <Link key={i} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="">

        <Link
          href={"/contact"}
          className="bg-blue-600 font-bold px-5 py-3 rounded-2xl"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
