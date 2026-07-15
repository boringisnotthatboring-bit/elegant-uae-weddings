import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import {
  flagshipServices,
  culturalServices,
  customOfferings,
} from "@/lib/content/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Wedding Services in Dubai & UAE | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Bespoke wedding planning services across Dubai, Abu Dhabi & the UAE — beach, desert, hotel, cultural, civil and destination weddings.",
      },
      { property: "og:title", content: "Wedding Services in Dubai & UAE" },
      { property: "og:description", content: "Every wedding planning service, one trusted team." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Services
          </nav>
          <SectionHeader
            eyebrow="Wedding Services"
            title="Your Dream Wedding in the UAE, Planned to Perfection"
            body="Celebrate your love story with Awesome Events Weddings, an award-winning wedding agency in the UAE. We specialize in luxury wedding planning and event management across Dubai, Abu Dhabi, Ras Al Khaimah, and beyond — creating elegant, personalized, and unforgettable celebrations."
          />
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
          <p className="mt-10 max-w-4xl text-sm leading-relaxed text-muted-foreground md:text-base">
            <strong className="text-foreground">Wedding Planning Services in Dubai & UAE.</strong>{" "}
            From breathtaking beach weddings along the Arabian Gulf to enchanting desert celebrations beneath the stars, we create unforgettable experiences tailored to your vision. We specialize in elegant luxury hotel weddings at the UAE's finest venues, intimate elopements and micro weddings for couples seeking a more personal celebration, and seamless civil weddings with complete legal documentation support for residents and visitors.
          </p>
        </div>
      </section>

      {/* Flagship services */}
      <section className="section-y">
        <div className="container-page grid gap-16">
          {flagshipServices.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 gap-8 md:grid-cols-2 md:items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="eyebrow">{s.short}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                {s.perfectFor && (
                  <div className="mt-6">
                    <p className="text-sm font-medium">Perfect for:</p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                      {s.perfectFor.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/contact">
                      {s.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cultural */}
      <section className="section-y bg-secondary/50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Cultural Weddings"
            title="Luxury Weddings for Every Culture"
            body="We specialize in planning and designing authentic cultural weddings across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE — blending cherished traditions with luxury styling and flawless event management."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {culturalServices.map((s) => (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-28 overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  {s.perfectFor && (
                    <p className="mt-4 text-xs text-foreground/70">
                      <span className="font-medium">Ideal for: </span>
                      {s.perfectFor.join(" · ")}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom offerings */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Custom Wedding Planning"
            title="Our luxury wedding services"
            body="A complete suite of planning, design, production and hospitality services — mix and match to build your celebration."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {customOfferings.map((o) => (
              <div
                key={o.title}
                className={
                  "rounded-sm border p-6 " +
                  (o.featured
                    ? "border-primary bg-primary text-primary-foreground md:col-span-2 lg:col-span-2"
                    : "border-border bg-card")
                }
              >
                {o.featured && (
                  <div className="mb-3 flex items-center gap-1.5 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs uppercase tracking-widest">Featured</span>
                  </div>
                )}
                <h4 className="font-display text-xl">{o.title}</h4>
                <p
                  className={
                    "mt-3 text-sm leading-relaxed " +
                    (o.featured ? "text-primary-foreground/85" : "text-muted-foreground")
                  }
                >
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
