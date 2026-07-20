import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((t, i) => (
            <figure key={i} className="w-full shrink-0 px-2">
              <div className="rounded-sm border border-border bg-card p-8 md:p-12">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-foreground">{t.author}</span>
                  <span className="text-muted-foreground"> — {t.location}</span>
                  {t.placeholder && (
                    <span className="ml-2 rounded-full border border-dashed border-accent px-2 py-0.5 text-[0.65rem] uppercase tracking-wider text-accent">
                      Placeholder
                    </span>
                  )}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur p-2.5 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur p-2.5 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary md:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={
              "h-1.5 rounded-full transition-all " +
              (i === index ? "w-8 bg-accent" : "w-1.5 bg-primary-foreground/30")
            }
          />
        ))}
      </div>
    </div>
  );
}
