"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/lib/NavList";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  return (
    <div className="lg:hidden relative mb-2">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col justify-center space-y-2 z-50 items-center w-10 h-10 focus:outline-none cursor-pointer`}
      >
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-[5px]" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Menu */}
    </div>
  );
};

export default function LowerNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <nav
        className={
          `${
            isHome ? "fixed left-0 right-0" : "sticky"
          } z-40 top-0 w-full py-6 md:px-24 px-6 rounded-b-4xl transition-colors duration-300 ` +
          (showBg
            ? "bg-[#0b1220]/95 text-white shadow-md backdrop-blur"
            : "bg-transparent text-white")
        }
      >
        <div className="grid lg:grid-cols-3 grid-cols-2 place-items-center max-w-7xl mx-auto">
          <Link href={"/"} className="place-self-start" aria-label="Cyber Hunter">
            <Image
              src={"/Logo White.svg"}
              alt="Cyber Hunter Logo"
              width={60}
              height={60}
            />
          </Link>

          <div className="lg:flex hidden place-self-center items-center space-x-9">
            {NavLinks.map((nav, i) => (
              <Link
                key={i}
                href={nav.link}
                className="hover:text-blue-600 whitespace-nowrap font-bold transition-all duration-300"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 place-self-end mb-2">
            <Link
              href={"/contact"}
              className="btnPrimary hidden lg:inline-flex"
            >
              Get Started
            </Link>

            <HamburgerMenu open={isOpen} setOpen={setIsOpen} />
          </div>
        </div>
      </nav>

      <MobileNav open={isOpen} setOpen={setIsOpen} />
    </>
  );
}
