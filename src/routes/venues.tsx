import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { VenueCard } from "@/components/venue-card";
import { Button } from "@/components/ui/button";
import { venueCategories, whyChooseItems } from "@/lib/content/venues";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Wedding Venues in Dubai & UAE | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Discover the finest wedding venues in Dubai, Abu Dhabi & the UAE — beachfront, garden, luxury hotel and unique venues, curated for luxury weddings.",
      },
      { property: "og:title", content: "Wedding Venues in Dubai & UAE" },
      { property: "og:description", content: "Handpicked venues for luxury weddings across the UAE." },
    ],
  }),
  component: VenuesPage,
});

function VenuesPage() {
  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Wedding Venues
          </nav>
          <SectionHeader
            eyebrow="Wedding Planners"
            title="Wedding Venues in Dubai & UAE"
            body="Finding the perfect venue is where every unforgettable celebration begins. As an experienced wedding planner in Dubai, we help couples discover the finest wedding venues in Dubai, Abu Dhabi, Ras Al Khaimah, and across the UAE. Whether you're dreaming of a romantic beach wedding, an elegant five-star ballroom, a private garden ceremony, or an exclusive destination venue, we match every location to your vision, guest list, and style."
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {venueCategories.map((v) => (
            <VenueCard key={v.slug} item={v} />
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why work with us"
            title="Why Choose Our Wedding Planning Services?"
          />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseItems.map((w) => (
              <li key={w.number} className="border-t border-border pt-6">
                <span className="font-display text-5xl text-accent">{w.number}</span>
                <h3 className="mt-4 font-display text-2xl">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Button asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
