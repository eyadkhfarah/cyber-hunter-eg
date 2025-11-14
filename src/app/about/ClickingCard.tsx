"use client";

import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

type data = {
  i: number;
  v: { title: string; desc: string };
};

export default function ClickingCard({ v, i }: data) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div key={i} className="relative">
      <button
        onClick={() => setOpen(open === i ? null : i)}
        aria-expanded={open === i}
        className="w-full text-left p-4 bg-dark hover:bg-slate-800/60 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center justify-between">
          <span className="font-bold text-white text-xl">{v.title}</span>
          <span
            className={`${
              open === i ? "rotate-90" : "rotate-0"
            } transition-transform duration-200 text-slate-300 font-bold`}
          >
            <RiArrowRightSLine className="text-xl" />
          </span>
        </div>
        <div
          className={`text-slate-300 overflow-hidden transition-all duration-300 ${
            open === i ? "max-h-40" : "max-h-0"
          }`}
          aria-hidden={open !== i}
        >
          <p className="mt-3">{v.desc}</p>
        </div>
      </button>
    </div>
  );
}
