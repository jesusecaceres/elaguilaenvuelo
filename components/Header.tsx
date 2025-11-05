"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo + Slogan */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="El Águila Logo"
              width={80}
              height={80}
              className="cursor-pointer"
            />
          </Link>
          <span className="hidden md:block text-sm text-yellow-400 italic tracking-wide">
            Orgullo Latino Sin Fronteras
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link href="/news" className="hover:text-yellow-400 transition">Noticias</Link>
          <Link href="/entertainment" className="hover:text-yellow-400 transition">Entretenimiento</Link>
          <Link href="/revista" className="hover:text-yellow-400 transition">Revista</Link>
          <Link href="/coupons" className="hover:text-yellow-400 transition">Cupones</Link>
          <Link href="/sorteos" className="hover:text-yellow-400 transition">Sorteos</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md py-3 flex flex-col space-y-3 text-center font-semibold">
          <Link href="/news" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Noticias</Link>
          <Link href="/entertainment" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Entretenimiento</Link>
          <Link href="/revista" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Revista</Link>
          <Link href="/coupons" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Cupones</Link>
          <Link href="/sorteos" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Sorteos</Link>
        </nav>
      )}
    </header>
  );
}
