"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/lib/NavList";
import Image from "next/image";
import Link from "next/link";

export default function LowerNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const showBg = scrolled || !isHome;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={
        `${isHome ? "fixed left-0 right-0" : "sticky"} z-40 top-0 flex w-full justify-between items-center py-6 px-24 rounded-b-4xl transition-colors duration-300 ` +
        (showBg
          ? "bg-[#0b1220]/95 text-white shadow-md backdrop-blur"
          : "bg-transparent text-white")
      }
    >
      <Link href={"/"} aria-label="Cyber Hunter">
        <Image src={'/Logo White.svg'} alt="Cyber Hunter Logo" width={60} height={60} />
      </Link>

      <div className="md:flex hidden items-center space-x-9">
        {NavLinks.map((nav, i) => (
          <Link key={i} href={nav.link} className="hover:text-blue-600 transition-all duration-300">
            {nav.name}
          </Link>
        ))}
      </div>

      <div>
        <Link href={'/contact'} className="btnPrimary">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
