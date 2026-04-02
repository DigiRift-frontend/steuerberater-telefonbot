"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/check", label: "Kosten-Rechner" },
  { href: "/anwendungsfaelle", label: "Anwendungsfälle" },
  { href: "/demo", label: "Demo" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/50 shadow-sm shadow-slate-200/20">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Brand */}
        <Link href="/" className="font-headline italic text-primary text-2xl">
          Steuerberater AI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-headline font-light text-slate-500 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/kontakt"
            className="hidden md:inline-block cta-gradient px-6 py-2.5 rounded-full text-white font-medium shadow-lg shadow-blue-900/10 hover:opacity-95 transition-opacity transform active:scale-95 duration-200 ease-in-out"
          >
            Erstgespräch vereinbaren
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-on-surface-variant"
            aria-label="Menü öffnen"
          >
            <span className="material-symbols-outlined text-2xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-slate-200/50 pb-4">
          <div className="max-w-7xl mx-auto px-6 pt-2 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-headline font-light text-slate-500 hover:text-primary py-2 transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="cta-gradient text-white font-medium px-6 py-2.5 rounded-full text-center mt-2 hover:opacity-95 transition-opacity"
            >
              Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
