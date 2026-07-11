/**
 * Custom monochrome logo mark: a heart whose center carries the dashed
 * line of an open road — "miles" and "love" in a single shape.
 * Renders in currentColor so it adapts to any theme.
 */
export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 41.5C14.6 34 6.5 27.4 6.5 18.7 6.5 12.8 11 8.5 16.5 8.5c3 0 5.7 1.5 7.5 3.9 1.8-2.4 4.5-3.9 7.5-3.9 5.5 0 10 4.3 10 10.2 0 8.7-8.1 15.3-17.5 22.8Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 36.5v-3.4M24 28.5v-3.4M24 20.5v-3.4"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LogoLockup({
  markClass = "h-9 w-9",
  textClass = "text-lg",
}: {
  markClass?: string;
  textClass?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark className={`${markClass} text-teal-500 dark:text-teal-300`} />
      <span className={`font-heading font-bold leading-none tracking-tight ${textClass}`}>
        Miles of Love{" "}
        <span className="text-gold-500 dark:text-gold-400">9·2·5</span>
      </span>
    </span>
  );
}
