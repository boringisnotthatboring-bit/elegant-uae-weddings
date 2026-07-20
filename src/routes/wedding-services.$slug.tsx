import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, allServices, serviceCtaMeta } from "@/lib/content/services";
import servicesHero from "@/assets/services-hero.jpg";


export const Route = createFileRoute("/wedding-services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service || !serviceMeta[params.slug]) throw notFound();
    return { service, meta: serviceMeta[params.slug] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Wedding Service Not Found | Awesome Events Weddings" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} | Awesome Events Weddings`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:image", content: service.image },
      ],
    };
  },
  component: WeddingServicePage,
  notFoundComponent: ServiceNotFound,
  errorComponent: () => (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">
        Please try again or{" "}
        <Link to="/contact" className="text-primary underline">
          contact us
        </Link>
        .
      </p>
    </div>
  ),
});

function ServiceNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-3xl">Wedding Service Not Found</h1>
      <p className="mt-3 text-muted-foreground">
        The wedding service you're looking for doesn't exist.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link to="/services">View All Wedding Services</Link>
        </Button>
      </div>
    </div>
  );
}

function WeddingServicePage() {
  const { service, meta } = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={servicesHero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        </div>
        <div className="container-page flex min-h-[380px] items-center justify-center py-20 md:min-h-[460px]">
          <div className="mx-auto w-full max-w-3xl text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">
                Wedding Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <p className="eyebrow text-white/75">Wedding Services</p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {service.short}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-y">
        <div className="container-page">
          <article className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">{service.short}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              {service.perfectFor && (
                <div className="mt-6">
                  <p className="text-sm font-medium">Perfect for:</p>
                  <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                    {service.perfectFor.map((p: string) => (
                      <li key={p} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-secondary/50">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to bring your vision to life?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your details and our specialists will design a bespoke plan
            for your celebration.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link
                to="/contact"
                search={{ type: meta.contactType }}
              >
                {meta.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Explore other services */}
      <section className="section-y">
        <div className="container-page">
          <h3 className="font-display text-2xl md:text-3xl">
            Explore other wedding services
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices
              .filter((s) => s.slug !== service.slug)
              .slice(0, 6)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/wedding-services/$slug"
                  params={{ slug: s.slug }}
                  className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-lg">{s.title}</h4>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {s.short}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
