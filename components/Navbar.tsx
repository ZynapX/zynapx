import Image from "next/image";

export default function Navbar() {
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

          <span className="text-xl font-bold">ZynapX</span>
        </div>

        <div className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <button className="rounded-xl bg-white px-5 py-2 font-semibold text-black transition hover:scale-105">
          Get Started
        </button>

      </div>
    </nav>
  );
}
