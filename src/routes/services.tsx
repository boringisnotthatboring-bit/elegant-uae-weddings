import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allServices } from "@/lib/content/services";
import servicesHero from "@/assets/services-hero.jpg";

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
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={servicesHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/50" />
        </div>
        <div className="container-page flex min-h-[420px] items-center justify-center py-24 md:min-h-[520px]">
          <div className="mx-auto w-full max-w-3xl text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Wedding Services</span>
            </nav>
            <p className="eyebrow text-white/75">Wedding Services</p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Your Dream Wedding in the UAE, Planned to Perfection
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Explore our full range of luxury wedding planning services across Dubai, Abu Dhabi, Ras Al Khaimah and beyond.
            </p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Wedding Planning Services in Dubai & UAE</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Every celebration, planned with heart
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At Awesome Events Weddings, we design unforgettable celebrations tailored to your vision, traditions, and personality. Choose the wedding experience that speaks to you — each has its own dedicated planning journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((s) => (
              <Link
                key={s.slug}
                to="/wedding-services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
