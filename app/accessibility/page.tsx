import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Miles of Love 9-2-5 is committed to a website that every family can use, regardless of ability.",
};

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="section-pad pt-36">
        <div className="container-tight max-w-3xl">
          <p className="eyebrow">Our commitment</p>
          <h1 className="h-display mt-5 text-4xl">Accessibility Statement</h1>

          <div className="mt-10 space-y-8 leading-relaxed text-ink/80 dark:text-navy-100/80">
            <section>
              <p>
                Accessibility isn&apos;t a checkbox for us — it&apos;s the
                heart of what we do. {site.name} exists to support children
                with diverse needs, and that commitment extends to every
                visitor of this website.
              </p>
            </section>
            <section>
              <h2 className="h-display text-xl">What we&apos;ve built in</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Designed to meet WCAG 2.1 Level AA color contrast and
                  interaction standards
                </li>
                <li>Full keyboard navigation, with visible focus indicators</li>
                <li>
                  Semantic headings, landmarks, and labels for screen readers
                </li>
                <li>
                  Reduced-motion support: animations are disabled automatically
                  for visitors who prefer less movement
                </li>
                <li>Light and dark modes that respect your system preference</li>
                <li>Descriptive alternative text on all meaningful images</li>
              </ul>
            </section>
            <section>
              <h2 className="h-display text-xl">Help us do better</h2>
              <p className="mt-3">
                If any part of this site is difficult for you to use, we
                genuinely want to know. Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-teal-600 underline underline-offset-4 dark:text-teal-300"
                >
                  {site.email}
                </a>{" "}
                or call{" "}
                <a
                  href={site.phoneHref}
                  className="font-medium text-teal-600 underline underline-offset-4 dark:text-teal-300"
                >
                  {site.phone}
                </a>
                , and we&apos;ll work to fix it promptly.
              </p>
            </section>
          </div>

          <Link href="/" className="btn-secondary mt-12">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
