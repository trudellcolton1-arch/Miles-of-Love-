import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { LogoLockup } from "./LogoMark";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "IEP Guidance" },
  { href: "#services", label: "IEP Advocacy" },
  { href: "#services", label: "Personalized Tutoring" },
];

const socials = [
  { href: site.social.facebook, label: "Facebook", icon: Facebook },
  { href: site.social.instagram, label: "Instagram", icon: Instagram },
  { href: site.social.linkedin, label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-tight px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="text-white">
              <LogoLockup />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/70">
              {site.tagline}. IEP guidance, advocacy, and personalized tutoring
              for families navigating special education.
            </p>
            <p className="mt-3 text-sm font-medium italic text-gold-300/90">
              &ldquo;{site.slogan}&rdquo;
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Miles of Love 9-2-5 on ${s.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-navy-100/80 transition-colors hover:border-gold-400 hover:text-gold-300"
                >
                  <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-100/70 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-100/70 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy/"
                  className="text-sm text-navy-100/70 transition-colors hover:text-gold-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility/"
                  className="text-sm text-navy-100/70 transition-colors hover:text-gold-300"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white">
              Our Promise
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/logo-full.png"
                alt="Miles of Love 9-2-5 logo: an open book with a sunlit path, a parent and child, and a heart — Guiding All Learners with Care & Support, Where structure meets heart"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-100/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-100/60">
            Made with love, across 925 miles.
          </p>
        </div>
      </div>
    </footer>
  );
}
