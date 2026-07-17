import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { company, socialLinks } from "@/lib/content/nav";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    type: typeof search.type === "string" ? search.type : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Us | Awesome Events Weddings — Wedding Planner Dubai" },
      {
        name: "description",
        content:
          "Book a free consultation with Dubai's leading luxury wedding planner. Share your vision — we'll build a bespoke celebration across the UAE.",
      },
      { property: "og:title", content: "Contact Awesome Events Weddings" },
      { property: "og:description", content: "Book a free luxury wedding consultation in Dubai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { type } = Route.useSearch();
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Contact
          </nav>
          <SectionHeader
            eyebrow="Contact Us"
            title="Looking for a Wedding Planner in Dubai?"
            body="Planning a wedding in Dubai or anywhere across the UAE? Share a few details about your celebration, and our wedding specialists will prepare a personalized consultation tailored to your vision."
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="rounded-sm border border-border bg-card p-8">
              <p className="eyebrow">Free Wedding Consultation</p>
              <h3 className="mt-3 font-display text-2xl">Start Your Wedding Questionnaire</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete our one-minute wedding questionnaire to help us recommend the right wedding planning services, venues, and packages for your celebration.
              </p>
              <div className="mt-4">
                <Button asChild variant="outline">
                  <a href="#enquiry-form">Start the questionnaire →</a>
                </Button>
              </div>
            </div>

            <div id="enquiry-form" className="mt-10 scroll-mt-24">
              <h3 className="font-display text-2xl">Send us a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your dream wedding — one of our specialists will be in touch within one business day.
              </p>
              <div className="mt-6">
                <ContactForm initialWeddingType={type} />
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-sm border border-border bg-card p-6">
              <h4 className="font-display text-xl">Get in touch</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" /> {company.address}
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" /> {company.phone}
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 text-primary" /> {company.email}
                </li>
              </ul>
              <div className="mt-5 flex gap-2">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Awesome Events Weddings location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115963.66688058548!2d55.22757735!3d25.2048493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
