import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Miles of Love 9-2-5 collects, uses, and protects your family's information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="section-pad pt-36">
        <div className="container-tight max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="h-display mt-5 text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink/60 dark:text-navy-100/60">
            Last updated: July 2026
          </p>

          <div className="mt-10 space-y-8 leading-relaxed text-ink/80 dark:text-navy-100/80">
            <section>
              <h2 className="h-display text-xl">Our commitment to your family</h2>
              <p className="mt-3">
                Families trust {site.name} with sensitive information about
                their children — diagnoses, school records, and personal
                stories. We treat that trust as sacred. We collect only what we
                need to support your family, and we never sell or share your
                information with third parties for marketing purposes.
              </p>
            </section>
            <section>
              <h2 className="h-display text-xl">What we collect</h2>
              <p className="mt-3">
                When you contact us or book a consultation, we collect the
                information you choose to share: your name, email address,
                phone number, your child&apos;s grade level, and the details of
                your message. If you become a client, we may also review
                educational records you provide, such as IEP documents and
                evaluations.
              </p>
            </section>
            <section>
              <h2 className="h-display text-xl">How we use it</h2>
              <p className="mt-3">
                Your information is used solely to respond to your inquiry,
                prepare for consultations and meetings, and provide the
                services you request. Educational records are reviewed only for
                the purpose of supporting your child and are never disclosed
                without your written permission, except where required by law.
              </p>
            </section>
            <section>
              <h2 className="h-display text-xl">Your choices</h2>
              <p className="mt-3">
                You may request a copy of the information we hold about your
                family, ask us to correct it, or ask us to delete it at any
                time by emailing{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-teal-600 underline underline-offset-4 dark:text-teal-300"
                >
                  {site.email}
                </a>
                .
              </p>
            </section>
            <section>
              <h2 className="h-display text-xl">Questions</h2>
              <p className="mt-3">
                If anything here is unclear, just ask — we&apos;ll always give
                you a straight answer about how your information is handled.
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
