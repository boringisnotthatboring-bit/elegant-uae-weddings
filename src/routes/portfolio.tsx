import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { PortfolioGrid } from "@/components/portfolio-grid";

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
    <section className="section-y">
      <div className="container-page">
        <SectionHeader
          eyebrow="Portfolio"
          title="Luxury Wedding Gallery"
          body="A curated selection of the celebrations we've had the privilege of designing across the UAE. Filter by style to explore the moments that matter."
        />
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
