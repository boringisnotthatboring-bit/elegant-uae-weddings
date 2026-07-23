import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { VenueCard } from "@/components/venue-card";
import { Button } from "@/components/ui/button";
import { venueCategories } from "@/lib/content/venues";
import venueOne from "@/assets/venue/awimg1.png";
import venueTwo from "@/assets/venue/awimg2.png";

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
      {
        property: "og:description",
        content: "Handpicked venues for luxury weddings across the UAE.",
      },
    ],
  }),
  component: VenuesPage,
});

function VenuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-6xl text-center">
            <nav className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>

              <span className="mx-3">/</span>

              <span>Wedding Venues</span>
            </nav>

            <SectionHeader
              eyebrow="Wedding Planners"
              title="Wedding Venues in Dubai & UAE"
              body="Finding the perfect venue is where every unforgettable celebration begins. As an experienced wedding planner in Dubai, we help couples discover the finest wedding venues in Dubai, Abu Dhabi, Ras Al Khaimah, and across the UAE. Whether you're dreaming of a romantic beach wedding, an elegant five-star ballroom, a private garden ceremony, or an exclusive destination venue, we match every location to your vision, guest list, and style."
              align="center"
              className="
                mx-auto
                max-w-6xl
                [&_.eyebrow]:mb-5
                [&_h2]:mx-auto
                [&_h2]:max-w-5xl
                [&_h2]:text-4xl
                [&_h2]:leading-tight
                md:[&_h2]:text-6xl
                [&_p]:mx-auto
                [&_p]:mt-7
                [&_p]:max-w-5xl
                [&_p]:text-base
                [&_p]:font-light
                [&_p]:leading-8
                [&_p]:tracking-[0.015em]
                md:[&_p]:text-lg
                md:[&_p]:leading-9
              "
            />
          </div>
        </div>
      </section>

      {/* Venue Categories */}
      <section className="section-y bg-secondary/40">
        <div className="container-page grid gap-8 md:grid-cols-2">
          {venueCategories.map((venue) => (
            <VenueCard key={venue.slug} item={venue} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary/30">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            {/* Left content */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                Why Choose Us
              </p>

              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                Why Choose Our Wedding Planning Services?
              </h2>

              <div className="mt-8 h-px w-20 bg-border" />

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Experienced Wedding Planners &amp; Coordinators
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    Our passionate team of wedding planners and wedding coordinators brings years of
                    experience in creating exceptional celebrations across the UAE. From the first
                    consultation to your wedding day, we manage every detail with professionalism,
                    creativity, and genuine care, allowing you to relax and enjoy every moment.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Bespoke Wedding Design &amp; Luxury Styling
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    Every wedding is uniquely designed to reflect your personality and vision. From
                    elegant wedding decoration in Dubai and floral installations to custom stage
                    styling, lighting, and tablescapes, we create timeless settings for
                    unforgettable luxury weddings in Dubai &amp; UAE.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Trusted Wedding Partners &amp; Seamless Planning
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    As a leading wedding organizer UAE, we've built strong relationships with the
                    region's finest venues, photographers, designers, entertainers, and hospitality
                    partners. Whether you're planning a destination celebration or a local wedding,
                    our wedding planning services ensure a smooth, stress-free experience with
                    trusted professionals by your side every step of the way.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Temporary image placeholders */}
            <div className="relative mx-auto min-h-[460px] w-full max-w-xl">
              <div className="absolute right-0 top-0 h-[55%] w-[78%] border border-border bg-background/80">
              <img src={venueOne} alt="Venue One" /></div>

              <div className="absolute bottom-0 left-0 h-[55%] w-[78%] border border-border bg-background/80">
                <img src={venueTwo} alt="Venue Two" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
