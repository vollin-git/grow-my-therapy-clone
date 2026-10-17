"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "@/components/Wordmark";

const NAV = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      ["Anxiety & Panic", "/services#anxiety"],
      ["Trauma & PTSD", "/services#trauma"],
      ["Burnout & Perfectionism", "/services#burnout"],
      ["Online Therapy in California", "/services#online"],
    ],
  },
  {
    label: "Approach",
    href: "/approach",
    children: [
      ["CBT", "/approach#cbt"],
      ["EMDR", "/approach#emdr"],
      ["Mindfulness-Based Practices", "/approach#mindfulness"],
      ["Body-Oriented Techniques", "/approach#somatic"],
    ],
  },
  { label: "FAQs", href: "/faqs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-ink">
      <div className="flex items-center justify-between px-[6vw] py-5 md:px-[5vw] md:py-5">
        <Link href="/" className="shrink-0">
          <Wordmark />
        </Link>

        {/* Desktop navigation */}
        {/* The original spaces nav items, and the CTA, by a flat 2.5vw. */}
        <nav className="hidden items-center gap-x-[2.5vw] lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setFolder(item.label)}
              onMouseLeave={() => setFolder(null)}
            >
              <Link href={item.href} className="nav-link block py-2">
                {item.label}
              </Link>

              {item.children && folder === item.label && (
                <div className="absolute left-0 top-full z-50 min-w-[16rem] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
                  {item.children.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="nav-link block border-b border-transparent px-4 py-3 hover:border-ink"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="btn-oval">
            Book a Consult
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-cream px-[6vw] pb-10 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-rule py-3">
              <Link
                href={item.href}
                className="nav-link block"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  {item.children.map(([label, href]) => (
                    <Link
                      key={label}
                      href={href}
                      className="t-small opacity-70"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="btn-oval mt-8 inline-block"
            onClick={() => setOpen(false)}
          >
            Book a Consult
          </Link>
        </div>
      )}
    </header>
  );
}
