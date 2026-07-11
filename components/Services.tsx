import { BookOpenCheck, Check, Compass, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Compass,
    accent: "from-teal-400 to-teal-600",
    title: "IEP Guidance",
    lead: "Understand every page of your child's IEP — without the jargon.",
    points: [
      "Plain-language explanations of terminology",
      "Meeting preparation so you walk in ready",
      "Careful review of documents and evaluations",
      "A clear strategy built around your child",
    ],
  },
  {
    icon: ShieldCheck,
    accent: "from-sky-400 to-sky-600",
    title: "IEP Advocacy",
    lead: "A calm, experienced voice beside you in every meeting.",
    points: [
      "We attend IEP meetings with you",
      "Protect your student's rights",
      "Ensure schools provide appropriate services",
      "Help you communicate clearly and confidently",
    ],
  },
  {
    icon: BookOpenCheck,
    accent: "from-gold-400 to-gold-600",
    title: "Personalized Tutoring",
    lead: "One-on-one, autism-friendly instruction that builds real confidence.",
    points: [
      "Individual learning plans for each student",
      "Autism-friendly, structured teaching",
      "Strategies that work with diverse learning needs",
      "Academic confidence that carries into class",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad bg-white dark:bg-navy-900/40"
      aria-labelledby="services-title"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">How we help</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="services-title" className="h-display mt-5 text-3xl sm:text-4xl">
              Support for every step of the journey
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-lg text-ink/75 dark:text-navy-100/75">
              Whether you&apos;re reading your first IEP or heading into your
              tenth meeting, we meet you exactly where you are.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.1 * i} className="h-full">
              <article className="card card-hover group flex h-full flex-col p-8">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <s.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-navy-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-ink/75 dark:text-navy-100/75">
                  {s.lead}
                </p>
                <ul className="mt-6 space-y-3 border-t border-navy-100/80 pt-6 dark:border-white/10">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink/80 dark:text-navy-100/80">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-300"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
