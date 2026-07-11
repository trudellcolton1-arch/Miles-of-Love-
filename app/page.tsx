import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "IEP guidance, special education advocacy, and personalized tutoring for children with autism and diverse learning needs.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  slogan: "Where Support Goes the Distance",
  areaServed: [
    { "@type": "City", name: "Dallas" },
    { "@type": "State", name: "Iowa" },
    { "@type": "Country", name: "United States" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IEP Guidance" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "IEP Advocacy" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Personalized Special Education Tutoring" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Story />
        <Services />
        <Stats />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
