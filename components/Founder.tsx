import Image from "next/image";
import { GraduationCap, HeartHandshake, Landmark, Quote } from "lucide-react";
import Reveal from "./Reveal";

const journey = [
  {
    icon: HeartHandshake,
    title: "Social services",
    text: "Supporting families through challenges that required compassion and clear communication.",
  },
  {
    icon: GraduationCap,
    title: "Special-education teacher",
    text: "Working every day with students whose strengths often went unseen.",
  },
  {
    icon: Landmark,
    title: "Consultant & IEP advocate",
    text: "Bringing it all together for families through Miles of Love 9-2-5.",
  },
];

export default function Founder() {
  return (
    <section
      id="founder"
      className="section-pad bg-white dark:bg-navy-900/40"
      aria-labelledby="founder-title"
    >
      <div className="container-tight grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Meet the founder</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="founder-title" className="h-display mt-5 text-3xl sm:text-4xl">
              Standing beside families is personal to me
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative mt-8 max-w-sm">
              <div className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-navy-900/10 dark:ring-white/10">
                <Image
                  src="/images/founder.png"
                  alt="Shauniesa Sisk, founder of Miles of Love 9-2-5, smiling warmly"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
              <div className="glass absolute -bottom-4 left-4 rounded-2xl px-5 py-3 shadow-soft">
                <p className="font-heading font-bold text-navy-900 dark:text-white">
                  Shauniesa Sisk
                </p>
                <p className="text-xs font-medium text-ink/70 dark:text-navy-100/70">
                  Founder &middot; Special-Education Consultant &amp; IEP
                  Advocate
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="card relative mt-10 overflow-hidden p-8">
              <Quote
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-24 w-24 rotate-12 text-teal-100 dark:text-teal-500/10"
              />
              <blockquote className="relative font-heading text-xl font-semibold leading-relaxed text-navy-900 dark:text-white">
                Turning confusion into clarity, and advocacy into action.
              </blockquote>
              <figcaption className="relative mt-4 text-sm text-ink/60 dark:text-navy-100/60">
                Shauniesa&apos;s promise to every family
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-8 space-y-4">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={0.22 + 0.08 * i}>
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 dark:bg-white/10 dark:text-gold-300">
                    <j.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-navy-900 dark:text-white">
                      {j.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/70 dark:text-navy-100/70">
                      {j.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="card h-full p-8 sm:p-10">
            <div className="space-y-5 leading-relaxed text-ink/80 dark:text-navy-100/80">
              <p>
                My path to advocacy began long before I ever sat in an IEP
                meeting. I&apos;ve always been drawn to helping others find
                their voice &mdash; especially families navigating the world of
                special education.
              </p>
              <p>
                I started my career as a special-education teacher, working
                with students whose strengths often went unseen. Every day
                taught me something new about patience, creativity, and the
                power of believing in a child&apos;s potential. Those classroom
                experiences shaped how I see education &mdash; not as a system,
                but as a partnership built on trust and understanding.
              </p>
              <p>
                Before teaching, I worked in social services, supporting
                families through challenges that required compassion and clear
                communication. That time showed me how deeply connected school,
                home, and community truly are &mdash; and how important it is
                to make sure every parent feels heard.
              </p>
              <p>
                Today, as a special-education consultant and IEP advocate, I
                bring all those lessons together. Through Miles of Love 9-2-5,
                I help parents prepare before and after meetings, communicate
                confidently with schools, and ensure their child&apos;s needs
                are met with care and respect.
              </p>
              <p>
                This work is personal to me. It&apos;s about standing beside
                families with calm, experienced guidance &mdash; turning
                confusion into clarity and advocacy into action. Every mile of
                love represents the distance we travel together to make sure
                every student gets the support they deserve.
              </p>
            </div>
            <p className="mt-8 border-t border-navy-100/80 pt-6 font-heading text-lg font-bold text-navy-900 dark:border-white/10 dark:text-white">
              Shauniesa Sisk
              <span className="block text-sm font-medium text-teal-600 dark:text-teal-300">
                Founder, Miles of Love 9-2-5
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
