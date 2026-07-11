import {
  ClipboardList,
  MessagesSquare,
  PartyPopper,
  Search,
  Footprints,
} from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: MessagesSquare,
    title: "Free Consultation",
    text: "A relaxed 30-minute conversation. Tell us about your child, your worries, and your goals. No paperwork, no pressure.",
  },
  {
    icon: Search,
    title: "Understand Your Child",
    text: "We review your child's records, evaluations, and current IEP (if there is one) to see the full picture — strengths first.",
  },
  {
    icon: ClipboardList,
    title: "Build a Plan",
    text: "Together we map out clear next steps: what to request, what to prepare, and how tutoring or advocacy fits in.",
  },
  {
    icon: Footprints,
    title: "Support Every Step",
    text: "Meetings, sessions, emails, follow-ups — we stay beside you as the plan comes to life, adjusting as your child grows.",
  },
  {
    icon: PartyPopper,
    title: "Celebrate Progress",
    text: "Every milestone matters. We track wins, celebrate them loudly, and set the next goal together.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad bg-white dark:bg-navy-900/40"
      aria-labelledby="process-title"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">The process</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="process-title" className="h-display mt-5 text-3xl sm:text-4xl">
              A clear path, one mile at a time
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg text-ink/75 dark:text-navy-100/75">
              You don&apos;t need to figure out the whole journey today. You
              just need the next step — and we&apos;ll walk it with you.
            </p>
          </Reveal>
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl">
          {/* the road */}
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-[1.85rem] top-2 w-px border-l-2 border-dashed border-teal-300 dark:border-teal-500/40"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <li className="relative flex gap-6 pb-12 last:pb-0">
                <div className="relative z-10 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-soft ring-4 ring-cream dark:bg-navy-800 dark:text-gold-300 dark:ring-navy-950">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-navy-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-ink/75 dark:text-navy-100/75">
                    {s.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
