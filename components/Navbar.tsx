"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg tracking-tight">
            USPS Jobs Helper
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/guides"
              className="text-navy-200 hover:text-white transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/guides/cca"
              className="text-navy-200 hover:text-white transition-colors"
            >
              CCA
            </Link>
            <Link
              href="/guides/rca"
              className="text-navy-200 hover:text-white transition-colors"
            >
              RCA
            </Link>
            <Link
              href="/guides/application-process"
              className="text-navy-200 hover:text-white transition-colors"
            >
              How to Apply
            </Link>
            <Link
              href="/about"
              className="text-navy-200 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-navy-200 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              {mobileOpen ? (
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-navy-200 hover:text-white transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/guides/cca"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-navy-200 hover:text-white transition-colors"
            >
              CCA Guide
            </Link>
            <Link
              href="/guides/rca"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-navy-200 hover:text-white transition-colors"
            >
              RCA Guide
            </Link>
            <Link
              href="/guides/application-process"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-navy-200 hover:text-white transition-colors"
            >
              How to Apply
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-navy-200 hover:text-white transition-colors"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
