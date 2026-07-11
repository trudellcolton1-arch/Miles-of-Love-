import {
  BadgeCheck,
  Fingerprint,
  HandHeart,
  Home,
  Scale,
  Target,
} from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: HandHeart,
    title: "Compassionate Support",
    text: "We've sat where you're sitting. Every conversation starts with listening, never judgment.",
  },
  {
    icon: Fingerprint,
    title: "Personalized Approach",
    text: "No two children are alike — so no two plans we build are, either.",
  },
  {
    icon: Scale,
    title: "Experienced Advocacy",
    text: "We know IEP law, school processes, and how to keep meetings focused on your child.",
  },
  {
    icon: Target,
    title: "Student-Focused",
    text: "Every strategy, goal, and session is measured by one thing: is it helping your child thrive?",
  },
  {
    icon: Home,
    title: "Family-Centered",
    text: "Parents, guardians, siblings, caregivers — we support the whole team around the student.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Guidance",
    text: "Warm doesn't mean casual. You get organized, prepared, professional support at every step.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad" aria-labelledby="why-title">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Why families choose us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="why-title" className="h-display mt-5 text-3xl sm:text-4xl">
              Finally… someone who understands
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg text-ink/75 dark:text-navy-100/75">
              Navigating special education can feel overwhelming and lonely.
              It doesn&apos;t have to be. Here&apos;s what makes working with
              us different.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={0.07 * i} className="h-full">
              <div className="card card-hover h-full p-7">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                  <r.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900 dark:text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75 dark:text-navy-100/75">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
