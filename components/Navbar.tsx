"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
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

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="hidden md:block rounded-xl bg-white px-5 py-2 font-semibold text-black">
          Get Started
        </button>

        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-800 bg-black md:hidden">
          <div className="flex flex-col px-6 py-4 text-gray-300">
            <a href="#services" className="py-2">Services</a>
            <a href="#about" className="py-2">About</a>
            <a href="#contact" className="py-2">Contact</a>

            <button className="mt-4 rounded-xl bg-white px-5 py-2 font-semibold text-black">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
