"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/lib/NavList";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="group flex flex-col justify-center space-y-1.5 z-50 items-center w-10 h-10 focus:outline-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span
          className={cn(
            "block h-0.5 bg-white transition-all duration-300 ease-in-out",
            open ? "w-6 rotate-45 translate-y-1" : "w-6"
          )}
        ></span>
        <span
          className={cn(
            "block h-0.5 bg-white transition-all duration-300 ease-in-out",
            open ? "w-0 opacity-0" : "w-4 self-end group-hover:w-6"
          )}
        ></span>
        <span
          className={cn(
            "block h-0.5 bg-white transition-all duration-300 ease-in-out",
            open ? "w-6 -rotate-45 -translate-y-1" : "w-6"
          )}
        ></span>
      </button>
    </div>
  );
};

export default function LowerNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  // The navbar turns solid if scrolled OR if we aren't on the homepage
  const isSolid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "left-0 right-0 z-50 transition-all duration-500",
          isHome ? "fixed" : "sticky top-0",
          isSolid 
            ? "py-3 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-2xl" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* LOGO AREA */}
            <Link href="/" className="relative group" aria-label="Cyber Hunter Home">
              <div className="absolute -inset-2 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/Logo White.svg"
                alt="Cyber Hunter"
                width={50}
                height={50}
                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <div className="hidden lg:flex items-center bg-slate-800/40 border border-white/5 px-8 py-2.5 rounded-full backdrop-blur-sm">
              <div className="flex items-center space-x-10">
                {NavLinks.map((nav, i) => {
                  const isActive = pathname === nav.link;
                  return (
                    <Link
                      key={i}
                      href={nav.link}
                      className={cn(
                        "relative text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                        isActive 
                          ? "text-blue-400" 
                          : "text-slate-300 hover:text-white"
                      )}
                    >
                      {nav.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-in fade-in zoom-in duration-300" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ACTION AREA */}
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm tracking-tight transition-all active:scale-95 shadow-lg shadow-blue-900/20"
              >
                <Terminal className="w-4 h-4" />
                Initialize_Contact
              </Link>

              <HamburgerMenu open={isOpen} setOpen={setIsOpen} />
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <MobileNav open={isOpen} setOpen={setIsOpen} />
    </>
  );
}