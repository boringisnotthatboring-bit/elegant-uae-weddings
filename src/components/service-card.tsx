import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/content/services";

export function ServiceCard({
  item,
  featured,
}: {
  item: ServiceItem;
  featured?: boolean;
}) {
  return (
    <Link
      to="/wedding-services/$slug"
      params={{ slug: item.slug }}
      className={
        "group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
      }
    >
      <div className={"relative overflow-hidden " + (featured ? "aspect-[16/9]" : "aspect-[4/3]")}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl">{item.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{item.short}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {item.cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
