import { Heart } from "lucide-react";
import Reveal from "./Reveal";
import DistanceIllustration from "./DistanceIllustration";

export default function Story() {
  return (
    <section id="story" className="section-pad" aria-labelledby="story-title">
      <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <DistanceIllustration />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">
              <Heart className="h-3.5 w-3.5" aria-hidden="true" />
              Why we exist
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="story-title" className="h-display mt-5 text-3xl sm:text-4xl">
              Born from family. Built on love.
              <br />
              Named after <span className="text-teal-600 dark:text-teal-300">925 miles</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80 dark:text-navy-100/80">
              <p>
                Miles of Love 9-2-5 was created from family, love, and a
                commitment to supporting children with autism and special
                educational needs. It&apos;s named for two boys in our
                founder&apos;s family:{" "}
                <strong className="font-semibold text-navy-900 dark:text-white">
                  her cousin Myles in Dallas
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-navy-900 dark:text-white">
                  her nephew Ryshad in Iowa
                </strong>{" "}
                &mdash; 925 miles apart, and both the heart of this work.
              </p>
              <p>
                Those 925 miles represent the distance so many families feel
                when searching for guidance, clarity, and support in the
                special-education world — the gap between a worried parent and
                the answers they need.
              </p>
              <p className="font-medium text-navy-900 dark:text-white">
                Miles of Love 9-2-5 exists to close that distance.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Every parent deserves guidance.",
                "Every child deserves support.",
                "No family should feel alone.",
              ].map((line) => (
                <li
                  key={line}
                  className="rounded-2xl border border-teal-200/70 bg-teal-50/70 px-4 py-3 text-sm font-semibold leading-snug text-teal-800 dark:border-teal-500/25 dark:bg-teal-900/30 dark:text-teal-100"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
