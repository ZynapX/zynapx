"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ZynapX"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-white">
            ZynapX
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {open && (
        <div className="border-t border-gray-800 bg-black md:hidden">
          <div className="flex flex-col gap-4 p-6 text-white">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>

            <button className="rounded-xl bg-white px-4 py-2 font-semibold text-black">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
