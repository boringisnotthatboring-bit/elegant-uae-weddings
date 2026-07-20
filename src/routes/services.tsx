import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allServices, serviceCtaMeta } from "@/lib/content/services";
import servicesHero from "@/assets/beach-wedding-hero.png.asset.json";

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
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={servicesHero.url} alt="" className="h-full w-full object-cover" />
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

      {/* Intro */}
      <section className="pt-16 md:pt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl">
              Explore Our Wedding Services in Dubai
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              At Awesome Events Weddings, we design unforgettable celebrations tailored to your vision, traditions, and personality. Choose the wedding experience that speaks to you — each has its own dedicated planning journey.
            </p>
            <div className="mx-auto mt-8 h-px w-24 bg-border" />
          </div>
        </div>
      </section>

      {/* Stacked service rows */}
      <section className="pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="container-page">
          <div className="mx-auto max-w-5xl space-y-16 md:space-y-24">
            {allServices.map((s) => {
              const meta = serviceCtaMeta[s.slug];
              const viewLabel = meta?.viewLabel ?? `View ${s.title}`;
              return (
                <article
                  key={s.slug}
                  className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-12"
                >
                  <Link
                    to="/wedding-services/$slug"
                    params={{ slug: s.slug }}
                    className="group relative block aspect-[5/4] overflow-hidden rounded-sm shadow-md"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    {s.perfectFor && s.perfectFor.length > 0 && (
                      <div className="mt-6">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                          Perfect for
                        </p>
                        <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                          {s.perfectFor.map((p) => (
                            <li key={p} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-8">
                      <Button asChild variant="outline" className="uppercase tracking-[0.18em]">
                        <Link
                          to="/wedding-services/$slug"
                          params={{ slug: s.slug }}
                        >
                          {viewLabel}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
