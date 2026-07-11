"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Custom illustration: Dallas and Iowa connected by a glowing arc —
 * the 925 miles that inspired the name. Pure SVG, no external assets.
 */
export default function DistanceIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="card relative overflow-hidden p-6 sm:p-10">
      {/* faint dotted backdrop */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full text-navy-100 dark:text-white/5"
      >
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <svg
        viewBox="0 0 560 320"
        role="img"
        aria-label="Illustration of Dallas, Texas and Iowa connected by a glowing arc labeled 925 miles"
        className="relative w-full"
      >
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4bb4a8" />
            <stop offset="50%" stopColor="#e9b44c" />
            <stop offset="100%" stopColor="#48a8d8" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#e9b44c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e9b44c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Arc */}
        <motion.path
          d="M90 250 C 200 60, 360 60, 470 118"
          fill="none"
          stroke="url(#arc)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 12"
          initial={reduce ? undefined : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Heart at arc midpoint */}
        <g transform="translate(280, 96)">
          <circle r="34" fill="url(#glow)" className="animate-pulse-soft" />
          <path
            transform="translate(-13, -14) scale(1.1)"
            d="M12 21C7 17 3 13.6 3 9.3 3 6.2 5.4 4 8.2 4c1.5 0 3 .8 3.8 2 .8-1.2 2.3-2 3.8-2C18.6 4 21 6.2 21 9.3c0 4.3-4 7.7-9 11.7Z"
            fill="#e9b44c"
          />
        </g>

        {/* Dallas node */}
        <g>
          <circle cx="90" cy="250" r="12" fill="#4bb4a8" opacity="0.25" />
          <circle cx="90" cy="250" r="6" fill="#33998e" />
          <text
            x="90"
            y="285"
            textAnchor="middle"
            className="fill-navy-800 font-heading text-[17px] font-bold dark:fill-white"
          >
            Dallas, TX
          </text>
          <text
            x="90"
            y="304"
            textAnchor="middle"
            className="fill-navy-800/60 text-[12.5px] dark:fill-white/60"
          >
            where Myles lives
          </text>
        </g>

        {/* Iowa node */}
        <g>
          <circle cx="470" cy="118" r="12" fill="#48a8d8" opacity="0.25" />
          <circle cx="470" cy="118" r="6" fill="#228cc4" />
          <text
            x="470"
            y="155"
            textAnchor="middle"
            className="fill-navy-800 font-heading text-[17px] font-bold dark:fill-white"
          >
            Iowa
          </text>
          <text
            x="470"
            y="174"
            textAnchor="middle"
            className="fill-navy-800/60 text-[12.5px] dark:fill-white/60"
          >
            where Ryshad lives
          </text>
        </g>

        {/* Distance label */}
        <g transform="translate(280, 190)">
          <rect
            x="-64"
            y="-20"
            width="128"
            height="40"
            rx="20"
            className="fill-navy-900 dark:fill-white/10"
          />
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            y="2"
            className="fill-gold-400 font-heading text-[17px] font-bold"
          >
            925 miles
          </text>
        </g>
      </svg>
    </div>
  );
}
