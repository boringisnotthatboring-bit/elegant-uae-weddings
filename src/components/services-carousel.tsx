import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import type { ServiceItem } from "@/lib/content/services";

function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

export function ServicesCarousel({ items }: { items: ServiceItem[] }) {
  const [visible, setVisible] = useState(getVisibleCount);
  const [index, setIndex] = useState(0);
  const total = items.length;
  const maxIndex = Math.max(0, total - visible);

  useEffect(() => {
    const update = () => {
      const next = getVisibleCount();
      setVisible(next);
      setIndex((i) => Math.min(i, Math.max(0, total - next)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => {
    setIndex((i) => (i < maxIndex ? i + 1 : 0));
  }, [maxIndex]);

  const widthClass = visible === 1 ? "w-full" : visible === 2 ? "w-1/2" : "w-1/3";
  const translatePercent = 100 / visible;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * translatePercent}%)` }}
        >
          {items.map((s) => (
            <div key={s.slug} className={`shrink-0 px-3 ${widthClass}`}>
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
