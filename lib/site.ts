/**
 * Central place for business details. Update these once the final
 * phone number, email, scheduling link, and domain are confirmed.
 */
export const site = {
  name: "Miles of Love 9-2-5",
  shortName: "Miles of Love 9·2·5",
  tagline: "Guiding All Learners with Care & Support",
  slogan: "Where structure meets heart",
  // Placeholder domain — replace with the real domain once purchased.
  url: "https://milesoflove925.com",
  email: "hello@milesoflove925.com",
  phone: "(555) 925-0925",
  phoneHref: "tel:+15559250925",
  // Paste a Calendly (or similar) scheduling link here to activate
  // one-click booking on every "Book a Free Consultation" button.
  // While empty, those buttons smoothly scroll to the contact form.
  calendlyUrl: "",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By appointment" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

/** Href used by every booking CTA. */
export const bookingHref = site.calendlyUrl || "#contact";
export const bookingIsExternal = Boolean(site.calendlyUrl);
