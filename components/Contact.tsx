"use client";

import { useState } from "react";
import {
  CalendarHeart,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "./Reveal";
import { bookingHref, bookingIsExternal, site } from "@/lib/site";

const grades = [
  "Pre-K",
  "Kindergarten",
  "1st grade",
  "2nd grade",
  "3rd grade",
  "4th grade",
  "5th grade",
  "6th grade",
  "7th grade",
  "8th grade",
  "High school",
  "Other / not sure",
];

const inputClass =
  "w-full rounded-2xl border border-navy-100 bg-white px-5 py-3.5 text-ink placeholder:text-ink/40 transition-colors focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:border-white/15 dark:bg-navy-950/60 dark:text-white dark:placeholder:text-navy-100/40 dark:focus:border-teal-400 dark:focus:ring-teal-500/30";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10"
      />
      <div className="container-tight relative grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Let&apos;s talk</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="contact-title" className="h-display mt-5 text-3xl sm:text-4xl">
              Take the first step — it&apos;s free
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-ink/75 dark:text-navy-100/75">
              Tell us a little about your child and what&apos;s on your mind.
              We&apos;ll reply within one business day. If it feels easier to
              talk first, book a free consultation and skip the form entirely.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href={bookingHref}
              {...(bookingIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="btn-primary mt-8"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              Book a Free Consultation
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-navy-900 dark:text-white">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={site.phoneHref}
                      className="text-ink/75 hover:text-teal-600 dark:text-navy-100/75 dark:hover:text-teal-300"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-navy-900 dark:text-white">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink/75 hover:text-teal-600 dark:text-navy-100/75 dark:hover:text-teal-300"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-navy-900 dark:text-white">
                    Where we serve
                  </dt>
                  <dd className="text-ink/75 dark:text-navy-100/75">
                    Rooted in Dallas &amp; Iowa — supporting families
                    nationwide, virtually.
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-semibold text-navy-900 dark:text-white">
                    Hours
                  </dt>
                  <dd className="text-ink/75 dark:text-navy-100/75">
                    {site.hours} &mdash; book a free consultation and
                    we&apos;ll find a time that works for your family.
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="card p-8 sm:p-10">
            {sent ? (
              <div
                className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center"
                role="status"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-moss-100 text-moss-700 dark:bg-moss-700/20 dark:text-moss-300">
                  <Send className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="h-display mt-6 text-2xl">Message received</h3>
                <p className="mt-3 max-w-sm text-ink/75 dark:text-navy-100/75">
                  Thank you for reaching out. We&apos;ll get back to you within
                  one business day — you&apos;ve already taken the hardest
                  step.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(
                    "Consultation request — Miles of Love 9-2-5"
                  );
                  const body = encodeURIComponent(
                    [
                      `Name: ${data.get("name")}`,
                      `Email: ${data.get("email")}`,
                      `Phone: ${data.get("phone") || "—"}`,
                      `Child's grade: ${data.get("grade")}`,
                      "",
                      `${data.get("message")}`,
                    ].join("\n")
                  );
                  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
                  setSent(true);
                }}
                aria-label="Consultation request form"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-navy-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-navy-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-navy-900 dark:text-white"
                    >
                      Phone{" "}
                      <span className="font-normal text-ink/50 dark:text-navy-100/50">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(555) 555-5555"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="grade"
                      className="mb-1.5 block text-sm font-semibold text-navy-900 dark:text-white"
                    >
                      Child&apos;s grade
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a grade
                      </option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-navy-900 dark:text-white"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your child, your current situation, and what you're hoping for. There's no wrong way to start."
                      className={inputClass}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-7 w-full">
                  <CalendarHeart className="h-5 w-5" aria-hidden="true" />
                  Schedule My Free Consultation
                </button>
                <p className="mt-4 text-center text-xs text-ink/50 dark:text-navy-100/50">
                  We&apos;ll never share your information. Ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
