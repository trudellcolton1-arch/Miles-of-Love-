import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Miles of Love 9-2-5 | IEP Advocacy, Guidance & Special Education Tutoring",
    template: "%s | Miles of Love 9-2-5",
  },
  description:
    "Compassionate IEP guidance, special education advocacy, and personalized tutoring for children with autism and diverse learning needs. Helping families navigate special education with confidence — no parent should feel alone.",
  keywords: [
    "IEP Advocacy",
    "Special Education Support",
    "Autism Resources",
    "Special Education Tutoring",
    "Parent Advocacy",
    "Educational Consultant",
    "Individualized Education Program",
    "Special Needs Tutoring",
    "IEP Meeting Help",
    "Autism-Friendly Tutoring",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Miles of Love 9-2-5 — Where Support Goes the Distance",
    description:
      "IEP guidance, advocacy, and personalized tutoring for families navigating special education. Every parent deserves guidance. Every child deserves support.",
    images: [
      {
        url: "/images/logo-full.png",
        width: 1536,
        height: 1024,
        alt: "Miles of Love 9-2-5 — Guiding All Learners with Care & Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miles of Love 9-2-5 — Where Support Goes the Distance",
    description:
      "IEP guidance, advocacy, and personalized tutoring for families navigating special education.",
    images: ["/images/logo-full.png"],
  },
  robots: { index: true, follow: true },
};

const themeInit = `
(function () {
  try {
    var stored = localStorage.getItem("mol-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
