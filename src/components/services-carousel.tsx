import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import type { ServiceItem } from "@/lib/content/services";

export function ServicesCarousel({ items }: { items: ServiceItem[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const visible = 3;
  const maxIndex = Math.max(0, total - visible);

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i < maxIndex ? i + 1 : 0));
  }, [maxIndex]);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / visible + 2)}%)` }}
        >
          {items.map((s) => (
            <div
              key={s.slug}
              className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ServiceCard item={s} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous service"
          onClick={prev}
          className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index ? "w-8 bg-primary" : "w-1.5 bg-border")
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next service"
          onClick={next}
          className="rounded-full border border-border p-2.5 transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
