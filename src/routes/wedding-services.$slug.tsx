import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getServiceBySlug,
  allServices,
  serviceCtaMeta,
} from "@/lib/content/services";
import {
  getServiceDetail,
  type WhyChooseItem,
  
  type ServiceFaq,
} from "@/lib/content/service-details";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/wedding-services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const detail = getServiceDetail(params.slug);
    if (!service || !serviceCtaMeta[params.slug] || !detail) throw notFound();
    return { service, meta: serviceCtaMeta[params.slug], detail };
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
  const { service, meta, detail } = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={servicesHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        </div>
        <div className="container-page flex min-h-[380px] items-center justify-center py-20 md:min-h-[460px]">
          <div className="mx-auto w-full max-w-3xl text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">Wedding Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <p className="eyebrow text-white/75">Wedding Services</p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {detail.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
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
              <p className="eyebrow">Overview</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Create Your Dream {service.title}
              </h2>
              {detail.intro.map((p: string, i: number) => (
                <p
                  key={i}
                  className="mt-4 text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
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
              <div className="mt-8">
                <Button asChild>
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {detail.whyChooseTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {detail.whyChoose.map((item: WhyChooseItem) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-sm border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg md:order-2">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="eyebrow">Inclusions</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                {detail.inclusionsTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {detail.inclusionsIntro}
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {detail.inclusions.map((item: string) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              {detail.inclusionsOutro && (
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {detail.inclusionsOutro}
                </p>
              )}
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-none">
                  <Link to="/contact" search={{ type: meta.contactType }}>
                    Contact Us Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Other services */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Other Wedding Services
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-none">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allServices
              .filter((s) => s.slug !== service.slug)
              .slice(0, 3)
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

      {/* FAQs */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {detail.faqs.map((faq: ServiceFaq, i: number) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-page text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Let's Talk About Your {service.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your details and our specialists will design a bespoke plan
            for your celebration.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact" search={{ type: meta.contactType }}>
                {meta.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
