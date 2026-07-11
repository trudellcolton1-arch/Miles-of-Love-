# Miles of Love 9-2-5 — Website

A custom-designed, production-ready website for **Miles of Love 9-2-5**:
IEP guidance, special education advocacy, and personalized tutoring —
created from family, love, and 925 miles between Myles (Dallas) and
Ryshad (Iowa).

Built with **Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · Lucide icons**, exported as a fully static site (fast, hostable anywhere).

## Highlights

- Warm, calming, premium design — deep navy, soft teal, sky blue, warm gold
- Custom monochrome SVG logo mark (a heart carrying the dashed line of a road)
- Custom "925 miles" Dallas ↔ Iowa animated SVG illustration
- Light **and** dark mode (follows system preference, with a manual toggle)
- Scroll-reveal animations, animated counters, floating hero badges — all
  automatically disabled for visitors who prefer reduced motion
- WCAG-minded: semantic landmarks, skip link, focus rings, keyboard-friendly
  accordion, descriptive alt text, strong color contrast
- SEO: per-page metadata, Open Graph/Twitter cards, `ProfessionalService`
  and `FAQPage` JSON-LD schema, sitemap, robots.txt
- Sections: Hero · Origin story · Services · Stats · Why families choose us ·
  Process timeline · Testimonials (including the real handwritten staff note) ·
  FAQ accordion · Contact form · Footer
- Extra pages: `/privacy` and `/accessibility`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

- **GitHub Pages** — already wired up: `.github/workflows/deploy.yml` builds
  and deploys on every push to `main`. Enable it once in the repo settings:
  *Settings → Pages → Source → GitHub Actions*.
- **Vercel / Netlify** — import the repo and deploy; no configuration needed
  (leave `BASE_PATH` unset).

## Things to update before launch (all in `lib/site.ts`)

1. **Phone** — currently a placeholder (`(555) 925-0925`). The email is
   real: `milesoflove925@gmail.com`.
2. **Calendly** — done: `calendly.com/milesoflove925` is embedded in the
   #book section and every "Book a Free Consultation" button scrolls to it.
3. **Domain** — replace `https://milesoflove925.com` in `lib/site.ts`,
   `public/robots.txt`, and `public/sitemap.xml` with the real domain.
4. **Social links** — currently point at the platform homepages.
5. **Testimonials** — the three written quotes in
   `components/Testimonials.tsx` are placeholders; swap in real family
   testimonials as they come in. The handwritten staff note is real.
6. **Contact form** — currently opens the visitor's email app pre-filled
   (works with zero backend). For silent background submission, create a
   free form endpoint (e.g. Formspree/FormSubmit) and point the form at it.
