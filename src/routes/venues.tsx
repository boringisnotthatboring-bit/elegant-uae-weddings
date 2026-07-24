import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/lib/content/services";
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

const beachWedding = getServiceBySlug("beach-wedding-dubai");
const outdoorWedding = getServiceBySlug("outdoor-weddings");
const luxuryHotelWedding = getServiceBySlug("luxury-hotel-weddings");

const featuredVenues = [
  {
    title: "Beach Wedding Venues",
    description:
      "Celebrate by the Arabian Gulf at luxury beachfront resorts and private coastal locations, with elegant ceremony settings, beautiful sea views, and unforgettable sunset backdrops.",
    image: beachWedding?.image,
  },
  {
    title: "Outdoor Wedding Venues",
    description:
      "Discover romantic open-air settings across the UAE, including garden lawns, terraces, courtyards, desert landscapes, and beautifully styled outdoor celebration spaces.",
    image: outdoorWedding?.image,
  },
  {
    title: "Luxury Wedding Venues Dubai",
    description:
      "Host your celebration in Dubai's finest five-star hotels, grand ballrooms, waterfront resorts, and premium event spaces designed for sophisticated luxury weddings.",
    image: luxuryHotelWedding?.image,
  },
].filter((venue): venue is { title: string; description: string; image: string } =>
  Boolean(venue.image),
);

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

      {/* Featured Venue Categories */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="mx-auto max-w-6xl text-center">
            <p className="eyebrow">Venues</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Wedding Venues in Dubai
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
              Explore beautiful wedding settings across Dubai and the UAE, from beachfront resorts
              and elegant outdoor venues to luxurious hotel ballrooms.
            </p>
            <div className="mx-auto mt-8 h-px w-16 bg-border" />
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
            {featuredVenues.map((venue) => (
              <article
                key={venue.title}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="font-display text-2xl leading-snug">{venue.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {venue.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary/30">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
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

            <div className="relative mx-auto min-h-[460px] w-full max-w-xl">
              <div className="absolute right-0 top-0 h-[55%] w-[78%] overflow-hidden border border-border bg-background/80">
                <img
                  src={venueOne}
                  alt="Elegant wedding venue"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 h-[55%] w-[78%] overflow-hidden border border-border bg-background/80">
                <img
                  src={venueTwo}
                  alt="Luxury wedding venue"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}