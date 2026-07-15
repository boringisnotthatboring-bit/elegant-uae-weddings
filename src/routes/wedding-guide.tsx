import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { blogPosts } from "@/lib/content/blog";

export const Route = createFileRoute("/wedding-guide")({
  head: () => ({
    meta: [
      { title: "Wedding Guide — Dubai & UAE Wedding Planning Blog" },
      {
        name: "description",
        content:
          "Expert wedding planning guides for Dubai and the UAE — costs, venues, legal requirements, cultural traditions and more.",
      },
      { property: "og:title", content: "Wedding Guide — Dubai & UAE" },
      { property: "og:description", content: "Guides, tips and inspiration for couples planning weddings in the UAE." },
    ],
  }),
  component: WeddingGuidePage,
});

function WeddingGuidePage() {
  const published = blogPosts.filter((p) => p.status === "published");
  const drafts = blogPosts.filter((p) => p.status === "draft");

  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/">Home</Link> <span className="mx-2">/</span> Wedding Guide
          </nav>
          <SectionHeader
            eyebrow="Wedding Guide"
            title="Planning your UAE wedding, guided"
            body="Everything couples ask us — costs, seasons, venues, legal ceremonies and cultural traditions across Dubai, Abu Dhabi and Ras Al Khaimah."
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {published.map((p) => (
            <Link
              key={p.slug}
              to="/wedding-guide/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="uppercase tracking-widest text-primary">{p.category}</span>
                  <span className="text-muted-foreground">·</span>
                  <time className="text-muted-foreground">
                    {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </time>
                </div>
                <h3 className="mt-3 font-display text-xl leading-tight">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {drafts.length > 0 && (
        <section className="section-y">
          <div className="container-page">
            <SectionHeader eyebrow="Coming Soon" title="More guides in the works" />
            <ul className="mt-8 grid gap-3 md:grid-cols-2">
              {drafts.map((d) => (
                <li
                  key={d.slug}
                  className="rounded-sm border border-dashed border-border bg-card/50 px-5 py-4 text-sm"
                >
                  <span className="mr-3 rounded-full border border-accent px-2 py-0.5 text-[0.65rem] uppercase tracking-widest text-accent">
                    Draft
                  </span>
                  {d.title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
