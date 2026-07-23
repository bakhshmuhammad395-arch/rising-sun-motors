"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0B2E59] shadow-lg">
      <div className="max-w-7xl mx-auto h-[90px] flex items-center justify-between px-8">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/Images/logo.png"
            alt="Rising Sun Motors"
            width={250}
            height={80}
            priority
            className="object-contain w-[250px] h-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white text-lg">

          <a
            href="#home"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Home
          </a>

          <a
            href="#stock"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Stock
          </a>

          <a
            href="#how-to-buy"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            How To Buy
          </a>

          <a
            href="#contact"
            className="hover:text-[#D4AF37] transition duration-300"
          >
            Contact
          </a>

          <a
            href="https://wa.me/923337411400?text=Hello%20Rising%20Sun%20Motors,%20I%20want%20a%20vehicle%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Quote
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0B2E59] border-t border-blue-800 px-6 py-5 flex flex-col gap-5 text-white">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#stock" onClick={() => setOpen(false)}>
            Stock
          </a>

          <a href="#how-to-buy" onClick={() => setOpen(false)}>
            How To Buy
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          <a
            href="https://wa.me/923337411400?text=Hello%20Rising%20Sun%20Motors,%20I%20want%20a%20vehicle%20quote."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-[#D4AF37] text-black py-3 rounded-lg text-center font-semibold"
          >
            Get Quote
          </a>

        </div>
      )}
    </nav>
  );
}