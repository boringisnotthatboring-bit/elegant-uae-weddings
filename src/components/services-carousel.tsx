import { useState, useEffect, useCallback, useRef } from "react";
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
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const total = items.length;
  const looped = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setVisible(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => step(1), 4000);
    return () => window.clearInterval(id);
  }, [paused, step]);

  // Seamless loop: when we cross into the cloned half, snap back without animation.
  const handleTransitionEnd = () => {
    if (index >= total) {
      setAnimate(false);
      setIndex(0);
    } else if (index < 0) {
      setAnimate(false);
      setIndex(total - 1);
    }
  };

  // Re-enable animation on next frame after a snap.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const widthClass = visible === 1 ? "w-full" : visible === 2 ? "w-1/2" : "w-1/3";
  const translatePercent = 100 / visible;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={"flex " + (animate ? "transition-transform duration-500 ease-out" : "")}
          style={{ transform: `translateX(-${index * translatePercent}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {looped.map((s, i) => (
            <div key={`${s.slug}-${i}`} className={`shrink-0 px-3 ${widthClass}`}>
              <ServiceCard item={s} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous service"
        onClick={() => step(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border bg-background/80 backdrop-blur p-2.5 shadow-sm transition-colors hover:border-primary hover:text-primary md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next service"
        onClick={() => step(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border bg-background/80 backdrop-blur p-2.5 shadow-sm transition-colors hover:border-primary hover:text-primary md:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-1.5 rounded-full transition-all " +
              (((index % total) + total) % total === i ? "w-8 bg-primary" : "w-1.5 bg-border")
            }
          />
        ))}
      </div>
    </div>
  );
}
