"use client";

import { useEffect, useState } from "react";
import { CalendarHeart, CheckCircle2, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const perks = [
  "Free 30-minute conversation",
  "Confirmation & reminders by email",
  "Reschedule anytime with one click",
];

export default function Booking() {
  // Calendly only allows framing when embed_domain/embed_type are set —
  // the same URL its official widget script generates. The hostname is
  // only known in the browser, so the src is set after mount.
  const [embedSrc, setEmbedSrc] = useState("");

  useEffect(() => {
    if (!site.calendlyUrl) return;
    setEmbedSrc(
      `${site.calendlyUrl}?embed_domain=${window.location.hostname}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`
    );
  }, []);

  if (!site.calendlyUrl) return null;

  return (
    <section
      id="book"
      className="section-pad relative overflow-hidden bg-navy-900 dark:bg-navy-950"
      aria-labelledby="book-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-tight relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow !border-gold-400/40 !bg-gold-400/10 !text-gold-300">
              <CalendarHeart className="h-3.5 w-3.5" aria-hidden="true" />
              Book online
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="book-title" className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pick a time that works for your family
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-navy-100/80">
              Choose a spot on the calendar and it&apos;s booked — Shauniesa
              gets notified instantly, and you&apos;ll receive a confirmation
              email with all the details. No phone tag, no waiting.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-7 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-navy-100/90">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal-300"
                    aria-hidden="true"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 underline underline-offset-4 hover:text-gold-200"
            >
              Prefer a full page? Open the calendar in a new tab
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-lift ring-1 ring-white/20">
            {embedSrc ? (
              <iframe
                src={embedSrc}
                title="Schedule a free consultation with Miles of Love 9-2-5"
                loading="lazy"
                className="h-[46rem] w-full border-0"
              />
            ) : (
              <div className="flex h-[46rem] w-full items-center justify-center">
                <a
                  href={site.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <CalendarHeart className="h-5 w-5" aria-hidden="true" />
                  Open the booking calendar
                </a>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
