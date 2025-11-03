import { NavLinks } from "@/lib/NavList";
import Link from "next/link";

export default function LowerNav() {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-6">
        <div>
            Logo
        </div>
      <div className="flex items-center space-x-4">
        {NavLinks.map((nav, i) => (
          <Link key={i} href={nav.link}>
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="">Get Started</div>
    </div>
  );
}
