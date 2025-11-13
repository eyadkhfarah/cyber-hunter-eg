"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLinks } from "@/lib/NavList";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // close menu on route change
  useEffect(() => {
    if (open) setOpen(false);
    // only close when menu is open and the pathname changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md text-white hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {open ? (
          <HiOutlineX className="h-6 w-6" />
        ) : (
          <HiOutlineMenu className="h-6 w-6" />
        )}
      </button>

      {/* Slide-over menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-dark p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <span className="font-logoBold text-xl text-white">
                Cyber<span className="font-logoRegular">Hunter</span>
              </span>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-md text-white hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <HiOutlineX className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 space-y-4">
            {NavLinks.map((nav) => (
              <Link
                key={nav.id}
                href={nav.link}
                className="block text-lg font-semibold text-white hover:text-cyan-300"
                onClick={() => setOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-linear-to-r from-blue-500 to-cyan-400 text-white px-5 py-3 rounded-2xl font-semibold"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
