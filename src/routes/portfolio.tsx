import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/portfolio-grid";
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
    </>
  );
}
