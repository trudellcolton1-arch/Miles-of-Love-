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
  email: "milesoflove925@gmail.com",
  phone: "(555) 925-0925",
  phoneHref: "tel:+15559250925",
  // Calendly scheduling page. The calendar is embedded in the #book
  // section and every "Book a Free Consultation" button scrolls there.
  calendlyUrl: "https://calendly.com/milesoflove925",
  hours: "By appointment only",
  social: {
    facebook: "https://www.facebook.com/share/1bVYeWwFev/?mibextid=wwXIfr",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
} as const;

/**
 * Href used by every booking CTA. With Calendly configured, buttons
 * scroll to the embedded calendar in the #book section; without it,
 * they fall back to the contact form.
 */
export const bookingHref = site.calendlyUrl ? "#book" : "#contact";
export const bookingIsExternal = false;
