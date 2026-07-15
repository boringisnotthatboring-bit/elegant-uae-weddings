import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ServiceIconRow } from "@/components/service-icon-row";
import { ServiceCard } from "@/components/service-card";
import { FaqAccordion } from "@/components/faq-accordion";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { BlogPreviewGrid } from "@/components/blog-preview-grid";
import { flagshipServices, specialties } from "@/lib/content/services";
import { faqItems } from "@/lib/content/faqs";
import { testimonials } from "@/lib/content/testimonials";
import { blogPosts } from "@/lib/content/blog";
import { portfolioItems } from "@/lib/content/portfolio";
import { company } from "@/lib/content/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Wedding Planner in Dubai | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team.",
      },
      { property: "og:title", content: "Awesome Events Weddings — Luxury Weddings in Dubai & UAE" },
      {
        property: "og:description",
        content: "Bespoke luxury weddings in Dubai and the UAE. Over 12 years of unforgettable celebrations.",
      },
    ],
  }),
  component: HomePage,
});

const trustStats = [
  { value: "12+", label: "Years of Experience" },
  { value: "500+", label: "Weddings Planned" },
  { value: "7", label: "Emirates Covered" },
  { value: "50+", label: "Partner Venues" },
];

const publishedPosts = blogPosts.filter((p) => p.status === "published").slice(0, 4);

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Luxury wedding ceremony in Dubai"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-background" />
        </div>
        <div className="container-page relative flex min-h-[85vh] flex-col justify-end pb-20 pt-32 text-primary-foreground">
          <p className="eyebrow text-accent">{company.tagline}</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
            Turning Dreams into Beautiful Realities
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Awesome Events Weddings is a leading wedding planner in Dubai, creating bespoke luxury weddings and unforgettable celebrations across the UAE — from private beach ceremonies and iconic hotel weddings to breathtaking destination events.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/services">Our Wedding Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Your Trusted Partner for Luxury Wedding Celebrations
            </h2>
            <p className="mt-2 font-display text-xl text-muted-foreground">
              Experience you can count on, elegance you can feel.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              With over 12 years of experience, Awesome Events Weddings is a trusted wedding planner in Dubai, creating extraordinary celebrations across the UAE. From intimate ceremonies and civil weddings to grand destination celebrations, our team combines creative vision, luxury planning, bespoke décor, and world-class production to bring every couple's vision to life.
            </p>
            <div className="mt-8">
              <p className="eyebrow text-foreground/60">Weddings We Specialize In</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <li key={s}>
                    <Link
                      to="/services"
                      className="inline-flex rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-foreground/75 transition-colors hover:border-primary hover:text-primary"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {trustStats.map((s) => (
              <div
                key={s.label}
                className="rounded-sm border border-border bg-card p-6"
              >
                <dt className="font-display text-4xl text-primary md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* UAE coverage */}
      <section className="bg-secondary/60 section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> UAE-wide coverage
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              UAE Weddings across the country
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              From our headquarters in Dubai, we plan and coordinate weddings across the UAE, including Abu Dhabi, Ras Al Khaimah, Sharjah, Fujairah, Ajman, and other stunning destinations.
            </p>
            <div className="mt-6"><ServiceIconRow /></div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link to="/contact">Book Free Consultation</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Our Services</Link></Button>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
            {["Dubai","Abu Dhabi","Ras Al Khaimah","Sharjah","Fujairah","Ajman","Umm Al Quwain"].map((c) => (
              <li key={c} className="rounded-sm border border-border bg-background px-4 py-3">
                <span className="eyebrow text-[0.6rem]">Emirate</span>
                <p className="mt-1 font-display text-lg">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title="Luxury Wedding Planner in Dubai"
            body="We provide bespoke wedding planning services across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {flagshipServices.map((s) => (
              <ServiceCard key={s.slug} item={s} />
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/services">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="bg-secondary/60 section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Portfolio"
            title="Luxury Wedding Gallery"
            body="Discover beautifully curated luxury weddings in Dubai, from elegant beachfront ceremonies and five-star hotel receptions to unforgettable destination weddings across the UAE."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {portfolioItems.slice(0, 8).map((p, i) => (
              <div
                key={p.id}
                className={
                  "relative overflow-hidden rounded-sm " +
                  (i === 0 || i === 5 ? "aspect-[3/4] md:col-span-1 md:row-span-2" : "aspect-square")
                }
              >
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/portfolio">View Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Couples Choose Us */}
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <SectionHeader
            title="Why Couples Choose Us"
            body="Every couple has a unique story, and we believe your wedding should tell it beautifully. At Awesome Events Weddings, we take the time to get to know you, understand your vision, and create a celebration that feels authentic to who you are. Our experienced wedding planning team is with you every step of the way, offering expert guidance, honest advice, and unwavering support."
          />
          <p className="text-base leading-relaxed text-muted-foreground lg:pt-16">
            As a trusted wedding planner in Dubai and wedding organizer UAE, we're proud to create timeless luxury weddings in Dubai & UAE that are as meaningful as they are beautiful. It's this personal approach, attention to detail, and genuine care that makes couples choose us — not just to plan their wedding, but to be part of one of the most important days of their lives.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by couples across the UAE"
            body="Real reviews from real couples. Testimonials below are placeholders until the client supplies verified quotes."
            align="center"
            className="text-primary-foreground [&_.eyebrow]:text-accent [&_p]:text-primary-foreground/75"
          />
          <div className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </section>

      {/* Wedding Guide preview */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Wedding Guide"
              title="Stories, guides & inspiration"
              body="Expert planning advice, real venue guides, and answers to every question couples ask us."
            />
            <Button asChild variant="outline">
              <Link to="/wedding-guide">Read the guide <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12">
            <BlogPreviewGrid posts={publishedPosts} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/60 section-y scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions, answered"
            body="Everything couples ask us before booking — from seasonality and budgets to legal ceremonies and cultural traditions."
          />
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Get in Touch */}
      <section className="section-y">
        <div className="container-page rounded-sm bg-primary p-10 text-primary-foreground md:p-16">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <p className="eyebrow text-accent">Get in Touch</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">
                Ready to plan your dream wedding?
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/80">
                Share a few details about your celebration and our wedding specialists will prepare a personalized consultation tailored to your vision.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/wedding-guide">Read the Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
