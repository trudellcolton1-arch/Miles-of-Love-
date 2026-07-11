"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 925, suffix: " mi", label: "of love between Dallas & Iowa" },
  { value: 1, suffix: "-on-1", label: "personalized tutoring, always" },
  { value: 3, label: "ways we support your family" },
  { value: 100, suffix: "%", label: "family-centered, judgment-free" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      aria-label="Miles of Love 9-2-5 at a glance"
      className="relative overflow-hidden bg-navy-900 dark:bg-navy-950"
    >
      {/* subtle road-line divider */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgba(233,180,76,0.35)_0_28px,transparent_28px_56px)] md:block"
      />
      <div className="container-tight relative grid grid-cols-2 gap-10 px-5 py-16 sm:px-8 md:grid-cols-4 md:py-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-4xl font-bold text-gold-400 sm:text-5xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[12rem] text-sm leading-snug text-navy-100/80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
