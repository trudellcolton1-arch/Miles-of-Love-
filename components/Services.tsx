import { BookOpenCheck, Check, Compass, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

type Point = { label?: string; text: string };

type Service = {
  icon: typeof Compass;
  accent: string;
  title: string;
  lead: string;
  points: Point[];
};

const services: Service[] = [
  {
    icon: Compass,
    accent: "from-teal-400 to-teal-600",
    title: "IEP Guidance",
    lead: "Understand every page of your child's IEP — without the jargon.",
    points: [
      { text: "Plain-language explanations of terminology" },
      { text: "Meeting preparation so you walk in ready" },
      { text: "Careful review of documents and evaluations" },
      { text: "A clear strategy built around your child" },
    ],
  },
  {
    icon: ShieldCheck,
    accent: "from-sky-400 to-sky-600",
    title: "IEP Advocacy",
    lead: "I provide calm, experienced support so you feel prepared, confident, and heard in every meeting.",
    points: [
      {
        label: "Preparation before the meeting",
        text: "I review documents, clarify goals, and help you feel ready and confident.",
      },
      {
        label: "Support after the meeting",
        text: "I help you understand decisions, next steps, and ensure follow-through.",
      },
      {
        label: "Clear communication with the school",
        text: "When needed, I communicate with the school on your behalf to keep things moving.",
      },
      {
        label: "Focused on what matters most",
        text: "I advocate to ensure your student's needs are met and your voice as a parent is always heard.",
      },
    ],
  },
  {
    icon: BookOpenCheck,
    accent: "from-gold-400 to-gold-600",
    title: "Personalized Tutoring",
    lead: "One-on-one, autism-friendly instruction that builds real confidence.",
    points: [
      { text: "Individual learning plans for each student" },
      { text: "Autism-friendly, structured teaching" },
      { text: "Strategies that work with diverse learning needs" },
      { text: "Academic confidence that carries into class" },
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
                    <li
                      key={p.label ?? p.text}
                      className="flex items-start gap-2.5 text-sm text-ink/80 dark:text-navy-100/80"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-300"
                        aria-hidden="true"
                      />
                      <span>
                        {p.label && (
                          <strong className="font-semibold text-navy-900 dark:text-white">
                            {p.label}:{" "}
                          </strong>
                        )}
                        {p.text}
                      </span>
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
