import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

function Stars() {
  return (
    <div
      className="flex gap-1 text-gold-400"
      role="img"
      aria-label="Rated five out of five stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-[18px] w-[18px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.34 5.85.62-4.36 3.96 1.2 5.76L10 14.27l-5.16 2.91 1.2-5.76L1.68 7.46l5.85-.62L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

const quotes = [
  {
    text: "For the first time, I walked out of an IEP meeting feeling heard instead of overwhelmed. Having someone beside me who knew exactly what to ask changed everything.",
    name: "Jasmine R.",
    role: "Parent of a 3rd grader",
  },
  {
    text: "The tutoring sessions are the highlight of my son's week. She meets him where he is, celebrates every win, and his confidence has grown so much.",
    name: "Marcus T.",
    role: "Father of a student with autism",
  },
  {
    text: "I finally understand what my daughter's IEP actually says — and what to do when the school isn't following it. I only wish we had found this support sooner.",
    name: "Elena V.",
    role: "Parent & caregiver",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      aria-labelledby="testimonials-title"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Kind words</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="testimonials-title"
              className="h-display mt-5 text-3xl sm:text-4xl"
            >
              Families and colleagues say it best
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={0.1 * i} className="h-full">
              <figure className="card card-hover flex h-full flex-col p-8">
                <Stars />
                <Quote
                  className="mt-5 h-7 w-7 text-teal-300 dark:text-teal-500/60"
                  aria-hidden="true"
                />
                <blockquote className="mt-3 flex-1 leading-relaxed text-ink/80 dark:text-navy-100/80">
                  {q.text}
                </blockquote>
                <figcaption className="mt-6 border-t border-navy-100/80 pt-5 dark:border-white/10">
                  <p className="font-heading font-bold text-navy-900 dark:text-white">
                    {q.name}
                  </p>
                  <p className="text-sm text-ink/60 dark:text-navy-100/60">
                    {q.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Real handwritten note */}
        <Reveal delay={0.15}>
          <div className="card mx-auto mt-10 grid max-w-4xl items-center gap-8 overflow-hidden p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
            <div>
              <p className="eyebrow">The real thing</p>
              <h3 className="h-display mt-4 text-2xl">
                A handwritten shout-out, straight from the classroom
              </h3>
              <p className="mt-4 leading-relaxed text-ink/75 dark:text-navy-100/75">
                &ldquo;Good job working with your small group — you&apos;re so
                patient! Students were having fun with shapes.&rdquo; A real
                staff note about the patience and heart behind Miles of Love
                9-2-5.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-navy-900/10 dark:ring-white/10">
              <Image
                src="/images/staff-note.png"
                alt="Handwritten staff shout-out note reading: Ms. Sisk, good job working with your small group, you're so patient! Students were having fun with shapes."
                width={1094}
                height={710}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
