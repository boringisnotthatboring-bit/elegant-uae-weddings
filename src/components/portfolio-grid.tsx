import { useMemo, useState } from "react";
import { portfolioItems, portfolioCategories } from "@/lib/content/portfolio";

export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((p) => p.category === active),
    [active],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={
              "rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition-colors " +
              (active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-foreground/70 hover:border-primary hover:text-primary")
            }
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setLightbox(item.image)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-left text-primary-foreground">
              <p className="text-xs uppercase tracking-widest text-accent">
                {item.location}
              </p>
              <p className="font-display text-lg">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
        >
          <img
            src={lightbox}
            alt=""
            className="max-h-full max-w-full rounded-sm"
          />
        </div>
      )}
    </div>
  );
}
