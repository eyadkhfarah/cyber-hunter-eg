"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/lib/NavList";
import { usePathname } from "next/navigation";
import { HiOutlineX } from "react-icons/hi";
import SocialLinks from "../SocialLinks";

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileNav({ open, setOpen }: NavbarProps) {
  const pathname = usePathname();

  // close menu on route change
  useEffect(() => {
    if (open) setOpen(false);
    // only close when menu is open and the pathname changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="">
      {open && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            open ? "bg-black/80" : "bg-black/0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <nav
        className={`fixed top-0 p-10 right-0 z-50 h-dvh bg-dark w-full md:w-96 shadow-md transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <SocialLinks />
          <button
            className="cursor-pointer w-fit h-fit p-2 rounded-full border-2 border-cyan-500 focus:border-cyan-500 text-light transition-all ease-in-out duration-300"
            onClick={() => setOpen(false)}
          >
            <HiOutlineX size={32} />
          </button>
        </div>

        <div className="flex flex-col justify-between">
          <ul className="space-y-5 h-fit mt-5">
            {NavLinks.map((link, i) => {
              const isActive = pathname === link.link.toLowerCase();
              return (
                <li key={i}>
                  <Link
                    href={`${link.link}`}
                    className={`font-bold text-3xl transition-all ease-in-out duration-300 ${
                      isActive
                        ? "text-primary dark:text-light"
                        : "dark:text-slate-600 text-gray-400 dark:hover:text-light hover:text-primary"
                    }`}
                    target={"_self"}
                    rel={"noopener noreferrer"}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href={"/contact"} className="btnPrimary mt-9">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
