"use client";

import { useEffect, useState } from "react";
import { CalendarHeart, Menu, X } from "lucide-react";
import { LogoLockup } from "./LogoMark";
import ThemeToggle from "./ThemeToggle";
import { bookingHref, bookingIsExternal } from "@/lib/site";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-tight flex h-[4.5rem] items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="text-navy-900 dark:text-white"
          aria-label="Miles of Love 9-2-5 — back to top"
        >
          <LogoLockup />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-navy-700 transition-colors hover:text-teal-600 dark:text-navy-100 dark:hover:text-teal-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={bookingHref}
            {...(bookingIsExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex"
          >
            <CalendarHeart className="h-4 w-4" aria-hidden="true" />
            Book a Free Consultation
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 bg-white/70 text-navy-800 backdrop-blur dark:border-white/15 dark:bg-white/5 dark:text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} glass border-t border-navy-100/60 dark:border-white/10`}
      >
        <ul className="space-y-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-navy-800 hover:bg-teal-50 hover:text-teal-700 dark:text-navy-100 dark:hover:bg-white/5 dark:hover:text-teal-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={bookingHref}
              {...(bookingIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              Book a Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
