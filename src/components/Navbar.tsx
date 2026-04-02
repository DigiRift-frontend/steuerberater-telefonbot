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
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-headline text-lg italic font-semibold text-primary"
          >
            steuerberater-telefonbot.de
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="cta-gradient text-on-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Erstgespräch vereinbaren
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-on-surface-variant"
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
        <div className="lg:hidden glass-nav border-t border-outline-variant/30 pb-4">
          <div className="mx-auto max-w-7xl px-4 pt-2 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-on-surface-variant hover:text-primary py-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="cta-gradient text-on-primary text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2 hover:opacity-90 transition-opacity"
            >
              Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
