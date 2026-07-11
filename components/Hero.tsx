"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarHeart, HeartHandshake, Route } from "lucide-react";
import { bookingHref, bookingIsExternal } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.65, 0.32, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-cream to-cream pt-28 dark:from-navy-950 dark:via-navy-950 dark:to-navy-950"
    >
      {/* Soft ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-64 h-96 w-96 rounded-full bg-gold-200/50 blur-3xl dark:bg-gold-500/10"
      />

      <div className="container-tight relative grid items-center gap-14 px-5 pb-20 sm:px-8 md:pb-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p {...fadeUp(0)} className="eyebrow">
            <Route className="h-3.5 w-3.5" aria-hidden="true" />
            Where support goes the distance
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="h-display mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.6rem]"
          >
            Helping families navigate{" "}
            <span className="text-teal-600 dark:text-teal-300">
              special education
            </span>{" "}
            with{" "}
            <span className="relative inline-block">
              confidence.
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute left-0 top-full h-2.5 w-full text-gold-400"
              >
                <path
                  d="M2 9C60 3 180 2 298 7"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80 dark:text-navy-100/80"
          >
            IEP guidance, advocacy, and personalized tutoring for children with
            autism and diverse learning needs. You know your child. We know the
            system. Together, we make sure your child gets the support they
            deserve — and you never walk into a meeting alone.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-4">
            <a
              href={bookingHref}
              {...(bookingIsExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="btn-primary"
            >
              <CalendarHeart className="h-5 w-5" aria-hidden="true" />
              Book a Free Consultation
            </a>
            <a href="#story" className="btn-secondary">
              Learn More
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 flex items-center gap-2.5 text-sm font-medium text-ink/60 dark:text-navy-100/60"
          >
            <HeartHandshake
              className="h-5 w-5 text-teal-500 dark:text-teal-300"
              aria-hidden="true"
            />
            Free 30-minute consultation · No pressure, just answers
          </motion.p>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.65, 0.32, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy-900/10 dark:ring-white/10">
            <Image
              src="/images/hero-road.png"
              alt="An open road at sunrise with the words 'Where Support Goes the Distance' painted on it"
              width={1024}
              height={1536}
              priority
              className="h-[30rem] w-full object-cover object-[center_62%] sm:h-[34rem]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent"
            />
          </div>

          {/* Floating badge: 925 miles */}
          <div className="glass absolute -left-4 top-8 animate-float rounded-2xl px-5 py-4 shadow-soft sm:-left-8">
            <p className="font-heading text-2xl font-bold text-navy-900 dark:text-white">
              925<span className="text-gold-500"> mi</span>
            </p>
            <p className="text-xs font-medium text-ink/70 dark:text-navy-100/70">
              of love between Dallas &amp; Iowa
            </p>
          </div>

          {/* Floating badge: services */}
          <div className="glass absolute -bottom-5 right-2 animate-float-slow rounded-2xl px-5 py-4 shadow-soft sm:right-6">
            <p className="text-sm font-semibold text-navy-900 dark:text-white">
              IEP Guidance · Advocacy · Tutoring
            </p>
            <p className="mt-0.5 text-xs text-ink/70 dark:text-navy-100/70">
              One family-centered team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
