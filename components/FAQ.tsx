"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/lib/faqs";

function FaqItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="card overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${index}`}
          id={`faq-button-${index}`}
          className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left font-heading text-lg font-semibold text-navy-900 transition-colors hover:text-teal-600 dark:text-white dark:hover:text-teal-300"
        >
          {q}
          <ChevronDown
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-teal-500 transition-transform duration-300 dark:text-teal-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.65, 0.32, 1] }}
          >
            <p className="px-7 pb-6 leading-relaxed text-ink/75 dark:text-navy-100/75">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-pad bg-white dark:bg-navy-900/40"
      aria-labelledby="faq-title"
    >
      <div className="container-tight grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Questions, answered</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="faq-title" className="h-display mt-5 text-3xl sm:text-4xl">
              You&apos;re not the only one wondering
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-ink/75 dark:text-navy-100/75">
              These are the questions parents ask us most. If yours isn&apos;t
              here, ask away — the consultation is free, and there are no
              silly questions when it comes to your child.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.05 * i}>
              <FaqItem
                q={f.q}
                a={f.a}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
