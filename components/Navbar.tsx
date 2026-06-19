"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Jobs", href: "/jobs" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{ background: "#1A2744", boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="USEA Career Center"
              width={44}
              height={44}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight text-white">USEA</p>
              <p
                className="text-xs font-medium leading-tight"
                style={{ color: "#28B4C8" }}
              >
                Career Center
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/jobs"
              className="text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md"
              style={{ background: "#D63B3B" }}
            >
              Find a Job
            </Link>
            <Link
              href="/admin"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Admin
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{
            background: "#2A3F6F",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
          className="md:hidden"
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="block text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Admin Panel
            </Link>
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="block text-white text-center px-4 py-2 rounded-lg text-sm font-semibold mt-2"
              style={{ background: "#D63B3B" }}
            >
              Find a Job
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
