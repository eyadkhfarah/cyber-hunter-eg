"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/lib/NavList";
import { usePathname } from "next/navigation";
import { X, ChevronRight, Terminal } from "lucide-react";
import SocialLinks from "../SocialLinks";
import { cn } from "@/lib/utils";

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileNav({ open, setOpen }: NavbarProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <div className="relative">
      {/* Overlay Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out Panel */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-60 h-dvh bg-slate-900 w-full sm:w-[400px] border-l border-slate-800 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header Area */}
        <div className="flex items-center justify-between p-8 border-b border-slate-800/50">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em]">
              System_Menu
            </span>
            <span className="text-white font-black text-xl tracking-tighter">NAVIGATION</span>
          </div>
          <button
            className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-red-500/20 transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Links Area */}
        <div className="flex-1 overflow-y-auto px-8 py-10">
          <ul className="space-y-2">
            {NavLinks.map((link, i) => {
              const isActive = pathname === link.link;
              return (
                <li 
                  key={i} 
                  style={{ transitionDelay: `${i * 50}ms` }}
                  className={cn(
                    "transition-all duration-500 transform",
                    open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                  )}
                >
                  <Link
                    href={link.link}
                    className={cn(
                      "group flex items-center justify-between p-4 rounded-2xl transition-all duration-300",
                      isActive 
                        ? "bg-blue-600/10 border border-blue-500/20 text-blue-400" 
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-bold text-2xl tracking-tight">{link.name}</span>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    )} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer Area */}
        <div className="p-8 border-t border-slate-800/50 space-y-8 bg-slate-900/50">
          <Link 
            href="/contact" 
            className="group flex items-center justify-center gap-3 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            onClick={() => setOpen(false)}
          >
            <Terminal className="w-4 h-4" />
            Initialize_Access
          </Link>

          <div className="flex flex-col items-center gap-4">
             <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Connect_Securely</span>
             <SocialLinks />
          </div>
        </div>
      </nav>
    </div>
  );
}