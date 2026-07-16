import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SectionHeader } from "@/components/section-header";
import heroImage from "@/assets/hero-wedding.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Luxury Weddings in Dubai & UAE" },
      {
        name: "description",
        content:
          "A curated portfolio of luxury weddings by Awesome Events Weddings across Dubai, Abu Dhabi, Ras Al Khaimah and the UAE.",
      },
      { property: "og:title", content: "Portfolio — Luxury Weddings in Dubai" },
      { property: "og:description", content: "Real weddings we've planned across the UAE." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>
        <div className="container-page flex min-h-[300px] items-center justify-center py-20 md:min-h-[360px]">
          <div className="w-full border border-border/50 bg-background/40 px-8 py-10 text-center shadow-sm backdrop-blur-xl md:px-16 md:py-14">
            <p className="eyebrow text-foreground/70">Portfolio</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Luxury Wedding Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/80">
              A curated selection of the celebrations we've had the privilege of designing across the UAE.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <PortfolioGrid />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/60 section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why Choose Us?"
            title="Why Couples Trust Our Wedding Planning Services"
            align="center"
            className="mx-auto max-w-2xl"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-display text-2xl md:text-3xl">
                Personalized Wedding Planning
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                No two love stories are the same, and neither are our weddings. Our bespoke wedding planning services are tailored to your style, traditions, and vision, creating unforgettable luxury weddings in Dubai & UAE that feel uniquely yours.
              </p>
            </div>
            <div className="border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-display text-2xl md:text-3xl">
                Creative Wedding Design & Decoration
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                From elegant floral installations and bespoke stage styling to sophisticated lighting and tablescapes, our team delivers exceptional wedding decoration in Dubai that transforms your venue into a breathtaking celebration.
              </p>
            </div>
            <div className="border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-display text-2xl md:text-3xl">
                Experienced Wedding Coordinators
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Our dedicated wedding coordinators manage every detail with precision—from venue selection and trusted vendor partnerships to timelines, logistics, and on-the-day coordination—so you can enjoy a seamless, stress-free wedding experience.
              </p>
            </div>
            <div className="border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-display text-2xl md:text-3xl">
                Trusted Wedding Organizer in the UAE
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                As an experienced wedding organizer UAE, we work with the region's finest venues, suppliers, and hospitality partners to deliver beautifully planned celebrations. Whether you're planning a luxury hotel wedding, a destination wedding, or an intimate celebration, we're committed to creating a memorable experience for you and your guests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
