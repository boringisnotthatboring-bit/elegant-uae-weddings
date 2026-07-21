import { useEffect, useMemo, useState } from "react";
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

const beachWeddingFaqs: ServiceFaq[] = [
  {
    q: "Which are the best beaches in Dubai for a luxury wedding?",
    a: "We help couples choose from Dubai's most exclusive beach wedding venues, including private beachfront resorts and luxury hotels that offer stunning sea views and exceptional hospitality.",
  },
  {
    q: "Can a beach wedding be customised to our culture and traditions?",
    a: "Absolutely. Whether you're planning a Western ceremony, South Asian celebration, Emirati wedding, or a multicultural event, Awesome Events Weddings creates personalised beach weddings that honour your traditions.",
  },
  {
    q: "What happens if the weather changes on our wedding day?",
    a: "Our experienced team always prepares a backup plan, including indoor or covered venue options where available, ensuring your Luxury Beach Wedding runs smoothly regardless of the weather.",
  },
  {
    q: "Are Palm Jumeirah weddings suitable for destination couples?",
    a: "Absolutely. Palm Jumeirah is one of the most popular locations for destination weddings in Dubai, offering luxury accommodation, world-class hospitality, and stunning beachfront settings for both ceremonies and receptions.",
  },
  {
    q: "Can you arrange a private beachfront wedding reception?",
    a: "Yes. We can organise exclusive beachfront receptions with bespoke décor, gourmet catering, live entertainment, and luxury seating for an unforgettable celebration by the sea.",
  },
  {
    q: "Do you decorate the ceremony and reception areas?",
    a: "Yes. Our team provides bespoke Wedding Decoration Dubai, including floral arches, aisle styling, elegant reception décor, ambient lighting, and customised beach-inspired designs.",
  },
  {
    q: "Can you help with guest accommodation and transportation?",
    a: "Yes. For Destination Weddings, we assist with hotel bookings, airport transfers, guest transportation, and logistics to ensure a seamless experience for everyone attending.",
  },
  {
    q: "Can we include fireworks or a drone show at our beach wedding?",
    a: "Yes. Subject to venue approvals and local regulations, we can arrange spectacular fireworks, synchronized drone shows, and other luxury entertainment to make your celebration truly unforgettable.",
  },
];

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

  const faqsToDisplay = service.slug.toLowerCase().includes("beach")
    ? beachWeddingFaqs
    : detail.faqs;

  const optionalFeatureSection = {
    enabled: true, // Change to false whenever this section should be hidden.
    image: service.image,
    title: `${service.title} in Dubai`,
    intro: detail.inclusionsIntro,
    items: detail.inclusions.slice(0, 6),
    outro: detail.inclusionsOutro,
  };

  const otherServices = useMemo(
    () => allServices.filter((item) => item.slug !== service.slug),
    [service.slug],
  );

  const serviceSlides = useMemo(() => {
    const slides = [];
    for (let index = 0; index < otherServices.length; index += 3) {
      slides.push(otherServices.slice(index, index + 3));
    }
    return slides;
  }, [otherServices]);

  const [activeServiceSlide, setActiveServiceSlide] = useState(0);

  useEffect(() => {
    setActiveServiceSlide(0);
  }, [service.slug]);

  useEffect(() => {
    if (serviceSlides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveServiceSlide((current) =>
        current === serviceSlides.length - 1 ? 0 : current + 1,
      );
    }, 4500);

    return () => window.clearInterval(timer);
  }, [serviceSlides.length]);

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
          <article className="mx-auto max-w-4xl">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {detail.introHeading ?? `Create Your Dream ${service.title}`}
            </h2>
            <div className="mt-6 space-y-4">
              {detail.intro.map((p: string, i: number) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>
            {(detail.idealFor ?? service.perfectFor) && (
              <div className="mt-8">
                <p className="text-sm font-medium">
                  {detail.idealFor ? "Ideal for:" : "Perfect for:"}
                </p>
                <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {(detail.idealFor ?? service.perfectFor)!.map((p: string) => (
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

      {optionalFeatureSection.enabled && (
        <section className="section-y bg-[#c8a969] text-white">
          <div className="container-page">
            <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={optionalFeatureSection.image}
                  alt={optionalFeatureSection.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-3xl leading-tight md:text-4xl">
                  {optionalFeatureSection.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/95">
                  {optionalFeatureSection.intro}
                </p>
                <ul className="mt-3 space-y-2 pl-5 text-base leading-relaxed text-white/95">
                  {optionalFeatureSection.items.map((item: string) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
                {optionalFeatureSection.outro && (
                  <p className="mt-3 text-base leading-relaxed text-white/95">
                    {optionalFeatureSection.outro}
                  </p>
                )}
                <div className="mt-7">
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-none border-white bg-transparent text-white hover:bg-white hover:text-[#9f824b]"
                  >
                    <Link to="/contact" search={{ type: meta.contactType }}>
                      Contact Us Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
          <div className="text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              Other Wedding Services
            </h2>
            <div className="mt-5">
              <Button asChild variant="outline" className="rounded-none">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeServiceSlide * 100}%)` }}
            >
              {serviceSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {slide.map((item) => (
                      <Link
                        key={item.slug}
                        to="/wedding-services/$slug"
                        params={{ slug: item.slug }}
                        className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-display text-lg">{item.title}</h4>
                          <p className="mt-1.5 text-sm text-muted-foreground">
                            {item.short}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {serviceSlides.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {serviceSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveServiceSlide(index)}
                  aria-label={`Show service slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeServiceSlide === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          )}
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
              {faqsToDisplay.map((faq: ServiceFaq, i: number) => (
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