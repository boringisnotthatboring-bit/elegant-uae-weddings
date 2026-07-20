import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VenueCategory } from "@/lib/content/venues";

export function VenueCard({ item }: { item: VenueCategory }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl">{item.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <Button
          asChild
          variant="outline"
          className="mt-auto h-14 w-full justify-between whitespace-normal rounded-none border-primary/30 py-2 text-left text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Link to="/venues">
            {item.cta}
            <ArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
