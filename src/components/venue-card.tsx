import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { VenueCategory } from "@/lib/content/venues";

export function VenueCard({ item }: { item: VenueCategory }) {
  return (
    <article className="group relative overflow-hidden rounded-sm border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <Link
          to="/wedding-guide"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          {item.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
